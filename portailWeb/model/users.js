var records = [
    { id: 1, username: 'jack', password: 'secret', eMail: 'jack@test.fr'}
  , { id: 2, username: 'jill', password: 'birthday', eMail: 'jill@chill.com'}
];


// Research function by id
exports.findById = function(id,callback) {
    find = false;
    records.forEach(function(record) {
        if (record.id == id) {
            find = true;
            return callback(null, record);
        }
    });
    if (!(find)){
        return callback(new Error('User ' + id + ' does not exist'))}
 };

// Research function by Username
exports.findByUsername = function(username, callback) {
    var find = false;
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
        console.log('inside find username '+ records.length);
        if (record.username === username) {
          find=true;
          return callback(null, record);
      }
    }

    if (!(find)) {
        return callback(null, null);
    }
};

exports.registerUser = function (username, passeword, eMail, callback) {
    this.findByUsername(username,
        function (err, user) {
            if (err) {
                return callback(false);
            }
            console.log('logIn');
            if (!user) {
                var id = records.length + 1;
                records.push({id: id, username: username, password: passeword, eMail: eMail});
                return callback(true);
            }
            else {
                callback(false)
            }
        }
    );
}
