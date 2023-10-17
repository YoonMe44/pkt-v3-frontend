const PaymentCard = () => {
    return (
      <div>
        <div className="grid grid-cols-2 bg-custom-white-17 shadow-custom rounded-[20px] mt-5">
          <div className="border-r-[2px] text-center">
            <p className="border-b-[2px] p-4 lg:text-[18px] md:text-[13px] sm:text-[13px] text-[12px]">Bank account name</p>
            <p className="border-b-[2px] p-4 lg:text-[18px] md:text-[13px] sm:text-[13px] text-[12px]">Account to be paid</p>
            <p className="p-4 lg:text-[18px] md:text-[13px] sm:text-[13px] text-[12px]">Account name</p>
          </div>
          <div className="text-center">
            <p className="border-b-[2px] p-4 lg:text-[18px] md:text-[13px] sm:text-[13px] text-[12px]">Bank account name</p>
            <p className="border-b-[2px] p-4 lg:text-[18px] md:text-[13px] sm:text-[13px] text-[12px]">0185 2010 1002 2682</p>
            <p className="p-4 lg:text-[20px] md:text-[13px] sm:text-[13px] text-[12px]">Poe Kyi Thar</p>
          </div>
        </div>
      </div>
    );
}
export default PaymentCard;