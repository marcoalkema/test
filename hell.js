const router = {}
const Account = {}
const Banner = {}

/* GET main page */
router.get('/', function (req, res, next) {
  Account.find({accType: 'Employer'}, function (err, col) {
    if (err) {
      console.log(err);
    } else {
      Banner.findOne(function (err, banner) {
        if (err) {
          console.log(err);
        } else {
          // Determine whether there is at least one awaiting account.
          Account.findOne({accType: 'Awaiting'}, function (err, doc) {
            if (err) {
              console.log(err);
            } else {
              if (doc != null) {
                var awaiting = true;
              }
              console.log(doc);
              res.render('admin/', {
                title: 'Admin pannel',
                user: req.user,
                employers: col,
                areAwaiting: awaiting,
                banner: banner
              })
            }
          });
        }
      });
    }
  });
});
