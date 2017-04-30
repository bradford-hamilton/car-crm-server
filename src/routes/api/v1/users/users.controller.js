import Users from '../../../../lib/users';

function getAll(req, res) {
  Users.getAllUsers()
    .then((users) => {
      res.status(200).json({
        users,
      });
    })
    .catch((err) => {
      res.status(400).json({
        err,
      });
    });
}

export default {
  getAll,
};
