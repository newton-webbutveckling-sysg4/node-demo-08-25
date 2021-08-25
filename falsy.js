let x = {
	user: 'Kalle'
}
// let x = null

// x omvandlas automatiskt till boolean
if( x ) {
	console.log('x är ett objekt');
	console.log('Användarnamn: ', x.user);
} else {
	console.log('x är null eller undefined');
}
