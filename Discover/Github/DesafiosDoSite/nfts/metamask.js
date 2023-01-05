
    if(window.ethereum) {
        // possui a metamask.
        document.querySelector('button').addEventListener('click', async () => {
            try {
            const accounts = await ethereum.request({method:'eth_requestAccounts'});
            account = accounts[0]
            document.querySelector('span').innerHTML=account        
        } catch(e) {

        }
        })


    } else {
        alert("Não possui a metamask")
    }
