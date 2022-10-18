const accessToMetamask = () => {
    if (window.ethereum) {
        console.log('MetaMask');

        window.ethereum.request({ method: 'eth_requestAccounts'})
        .then(result => {
            accountChangedHandler(result[0]);
        })} else {
        console.log('You Need to install MetaMask Buddy !! ');
    };
    const accountChangedHandler = (Account) => {
		setDefaultAccount(Account);
		getAccountBalance(Account.toString());
	}
 

    
};
