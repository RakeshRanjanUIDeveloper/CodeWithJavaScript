import React from 'react'

const Ngo = ({donationData}) => {
    const totalAmounts = donationData.reduce((acc, curr) => acc+ curr.Donation, 0);
  return (
    <div>Total Donation Collected: {totalAmounts}</div>
  )
}

export default Ngo