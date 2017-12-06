db.createUser({
    user: "dang",
    pwd: "dang",
    db: "dangdb",
    roles: [{
        role: "dbAdmin",
        db: "dangdb"
    }]
}, {
    w: "majority",
    wtimeout: 5000
});
