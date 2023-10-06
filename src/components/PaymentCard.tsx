const PaymentCard = () => {
    return (
      <div>
        <div className="grid grid-cols-2 bg-custom-white-17 shadow-custom rounded-[20px] mt-5">
          <div className="border-r-[2px] text-center">
            <p className="border-b-[2px] p-4">Bank account name</p>
            <p className="border-b-[2px] p-4">Account to be paid</p>
            <p className="p-4">Account name</p>
          </div>
          <div className="text-center">
            <p className="border-b-[2px] p-4">Bank account name</p>
            <p className="border-b-[2px] p-4">0205 2010 1002 2682</p>
            <p className="p-4">Poe Kyi Thar</p>
          </div>
        </div>
      </div>
    );
}
export default PaymentCard;