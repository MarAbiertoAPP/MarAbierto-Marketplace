import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import style from './metamask.module.css'
import Swal from 'sweetalert2'

const WalletCardEthers = () => {
  const [defaultAccount, setDefaultAccount] = useState(null)
  const [userBalance, setUserBalance] = useState(null)
  const [connButtonText, setConnButtonText] = useState('Connect Wallet')
  const [provider, setProvider] = useState(null)
  const [show, setShow] = useState(style.hidden)

  const connectWalletHandler = () => {
    if (window.ethereum && defaultAccount == null) {
      // set ethers provider
      setProvider(new ethers.providers.Web3Provider(window.ethereum))

      // connect to metamask
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
          setShow(style.display)
          setConnButtonText('Wallet Connected')
          setDefaultAccount(result[0])
        })
        .catch(error => {
          console.log(error.message)
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-right',
            iconColor: 'white',
            customClass: {
              popup: 'colored_toast'
            },
            showConfirmButton: false,
            timer: 1800,
            timerProgressBar: true
          })
          Toast.fire({
            icon: 'info',
            title: 'Please Install Metamask'
          })
        })
    } else if (!window.ethereum) {
      console.log('Need to install MetaMask')
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
        customClass: {
          popup: 'colored_toast'
        },
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true
      })
      Toast.fire({
        icon: 'info',
        title: 'Please Install Metamask'
      })
    }
  }

  useEffect(() => {
    if (defaultAccount) {
      provider.getBalance(defaultAccount)
        .then(balanceResult => {
          setUserBalance(ethers.utils.formatEther(balanceResult))
        })
    }
  }, [defaultAccount])

  return (
<div className={style.Wallet}>
<button onClick={connectWalletHandler} className={style.button}>{connButtonText}</button>
<div className={show}>
<h3>Address: {defaultAccount}</h3>
</div>
<div className={show}>
<h3>Balance: {userBalance}</h3>
</div>
</div>
  )
}

export default WalletCardEthers
