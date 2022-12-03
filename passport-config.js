const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByUsername, getUserById){
    const authenticateUser = async (username, password, done) => {
        const user = getUserByUsername(username)
        if (user == null) { 
            return done(null, false, {message : 'nenhum usuário com esse nome'})
        }
        try{
            if(await bcrypt.compare(password, user.password)) {
                return done(null, user,)
            } else {
                return done(null,false, { message : 'Senha incorreta'})
        }
    }   catch(e){
        return done(e)
    }
}
    passport.use(new LocalStrategy({usernameField: 'username', passwordField: 'password'}), authenticateUser)
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {done(null, getUserById(id)) })
}

modules.exports = initialize