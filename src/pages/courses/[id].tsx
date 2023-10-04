import OfflineEnrollCard from "@/components/OfflineEnrollCard";
import OnlineEnrollCard from "@/components/OnlineEnrollCard";
import PageTitle from "@/components/PageTitle";
import RedButton from "@/components/RedButton";
import Image from "next/image";
const CourseDetail = () => {
    return (
      <div>
        <div className="pb-[231px] w-full right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both"></div>
        <div className="absolute top-0 right-0 overflow-hidden -z-10">
          <div className=" relative  w-[1200px] h-[624.58px] bottom-[275px] left-[300px] oval bg-slate-200 transform right-0 overflow-hidden ">
            <Image
              width={1000}
              height={900}
              className="transform rotate-11 pt-40"
              src="/statics/images/batch3.JPG"
              alt=""
            />
          </div>
        </div>
        <div className="w-full bg-custom-white-4 rounded-[30px] pb-[20px] pt-[40px] shadow-card">
          <div className="w-[500px] mx-auto">
            <Image
              width={1000}
              height={400}
              className="rounded-[30px] mx-auto"
              src="/statics/images/n3.jpg"
              alt=""
            />
            <p className="text-left text-red-main font-medium text-2xl mt-3 mb-3">
              Japanese Online
            </p>
            <p className="w-full mx-auto text-justify text-gray-darker font-medium">
              ဘာတွေလုပ်နေလဲဆိုတော့ စစခြင်းကတော့ ရိုးရိုး website တွေ
              ရေးဆွဲပေးရတယ်။ အသုံးပြုတဲ့ Programming Language တွေကတော့ HTML,
              CSS, JavaScript, Ajax တွေ အသုံးပြုခဲ့တယ်။ ပြီးတော့ Wordpress
              လို့ခေါ်တဲ့ CMS စနစ်နဲ့ ဝက်ဆိုဒ်တွေကို လုပ်ဆောင်ပေးရပါတယ်။
              လုပ်သက်နည်းနည်းရလာတော့ PHP ကို အသုံးပြုပြီး Voting System တွေကို
              ရေးဆွဲပေးရတယ်။ အလုပ်ဝင်တဲ့ ကုမ္ပဏီက ကုမ္ပဏီ အကြီးကြီးမဟုတ်တဲ့အတွက်
              အစအဆုံး တစ်ယောက်ထဲ လုပ်ရတာတွေများပါတယ်။ အဲဒီအတွက် ပိုပြီး
              ပညာရရှိခဲ့တယ်လို့ ထင်တယ်။ အမှတ်တရအနေနဲ့ နာမည်ကြီး Brand တစ်ခုရဲ့
              Model Voting ပေးတဲ့စနစ်ကို တစ်ယောက်တည်း ရေးရတဲ့အပြင် Voting
            </p>
          </div>
          <hr className="w-[760px] bg-gray-dark h-1 mt-3 mx-auto" />
          <p className="text-left text-red-main font-medium text-2xl mt-3 mb-3 w-[500px] mx-auto">
            Enroll Course
          </p>
          <div className="w-[760px] mx-auto mt-3">
            {/* <OnlineEnrollCard /> */}
            <OfflineEnrollCard/>
            <div className="flex justify-end mt-6">
              <RedButton title="Enroll Now" />
            </div>
          </div>
        </div>
      </div>
    );
}
export default CourseDetail;