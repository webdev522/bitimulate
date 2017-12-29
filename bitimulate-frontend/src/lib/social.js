import hello from 'hellojs';

hello.init({
    // facebook: 1456738254380084,
    // google: '139700894213-90pmhsv3jrjaoln83f353fmjvspdibb9.apps.googleusercontent.com'
    // facebook: 166763637236028,
    // google: '897961256976-7njm046grtv679oa2gknpkfd3g2qfrki.apps.googleusercontent.com'
    // facebook: 121400741991057,
    facebook: 1606093116100352,
    google: '897961256976-mc80slccn1qi20jrgsj28mm0mvt24bva.apps.googleusercontent.com'
}, {redirect_uri: '/redirect.html'});

export default(function () {
    return {
        facebook: () => {
            return new Promise((resolve, reject) => {
                // hellojs uses Promise A+ instead of Promise, so should be wrapped by Promise
                hello.login('facebook', { scope: 'email' }).then(
                    auth => resolve(auth.authResponse.access_token),
                    e => reject(e)
                );
            })
        },
        google: () => {
            return new Promise((resolve, reject) => {
                hello.login('google', { scope: 'email' }).then(
                    auth => resolve(auth.authResponse.access_token),
                    e => reject(e)
                );
            })
        }
    }
})();