import Image from "next/image";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";

const NewsDetail = () => {
  const pageTitle = {
    title: "News Detail",
    content_1: "",
    content_2: "",
  };
  return (
    <>
      <div className="pb-[6px]  w-full right-0 animate__animated animate__bounceInDown animate__duration-8000 animate__fill-both">
        <div className="pb-[70px]">
          <PageTitle pageTitle={pageTitle} />
        </div>
        <div className="absolute top-0 right-0 z-[-1] overflow-hidden">
          <div className=" relative  w-[85%] h-[30%] left-[30%] bottom-[100px]  md:bottom-[250px] lg:bottom-[200px]  oval bg-slate-200 transform right-0 overflow-hidden ">
            <Image
              width={1000}
              height={900}
              // layout="responsive"
              className="transform rotate-11 pt-20"
              src="/statics/images/batchTwo.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="sm:max-w-[600] md:max-w-[600] lg:max-w-[1200px] max-h-[600px] lg:max-h-[700px] mx-auto border rounded-xl shadow-custom bg-transparent backdrop-blur-9 overflow-y-scroll scroll sm:scroll-res">
        <div className="flex justify-center">
          <h2 className="text-2xl italic font-bold text-red-main  lg:py-12 md:py-8 py-4">
            Japanese N3
          </h2>
        </div>
        <div className="p-4">
          <Image
            src={"/statics/images/news1.jpg"}
            width={400}
            height={200}
            alt="news-photo"
            className="rounded-2xl float-left mr-4 mb-4"
          />
          <p className=" text-justify ">
            Programmer အလုပ်နဲ့ ပက်သက်ပြီး ပြောရမယ်ဆိုရင် ၂၀၁၁ ခုနှစ် ၆လပိုင်းက
            တိုကျိုမှာ ဒုတိယ နှစ် ဆန်းမွန်း (ကောလိပ်) တက်နေတဲ့အချိန်မှာ Web
            Development တွေ အထိက ဝန်ဆောင်မူပေးနေတဲ့ ကုမ္ပဏီ တစ်ခုမှာ
            အလုပ်သင်စတင် ဝင်ရောက်ခဲ့ပါတယ်။ အတန်းတူ ကျောင်းတူ တက်နေတဲ့ထဲက
            နိုင်ငံခြားသားထဲမှာ ပထမဦးဆုံး ကုမ္ပဏီမှာ အလုပ်ရရှိခဲ့ပါတယ်။
            ရရှိခဲ့တဲ့ အကြောင်းအရင်းကတော့ ITPEC ရဲ့ အခြေခံ IP စာမေးပွဲကို
            အောင်မြင်ခဲ့တဲ့အတွက် IP သင်ကြားပေးတဲ့ ဆရာရဲ့ မိတ်ဆက်ပေးခြင်းနဲ့
            ရရှိခဲ့တာပါ။ အလုပ်သင်စဝင်တော့ တစ်လကို ယန်း ၅သောင်းပေးပါတယ်။ ၁ပတ်ကို
            ၂ကြိမ် အနည်းဆုံးကုမ္ပဏီကို သွားရတယ်။ ပြီးတော့ လက်ခံတဲ့ အလုပ်တွေကို
            လုပ်ပြီး ပို့ပေးရတယ်။ ယန်း၅သောင်းဆိုတော့ အပြင်မှာ
            အချိန်ပိုင်းအလုပ်လုပ်ရင် နာရီ ၅၀ စာ ဝင်ငွေဖြစ်ပါတယ်။ အစပိုင်းတော့
            လောဘတွေတက်ပြီး အချိန်ပိုင်း အလုပ်ကိုလည်း မလျော့ပဲ
            အလုပ်သင်ကလည်းဝင်ငွေ ရရှိတဲ့အဲတွက် သာယာနေခဲ့ပေမယ့် စာကျက်ချိန်
            မရှိတာရယ် နည်းပညာပိုင်းလေ့လာမူအားနည်းတော့ အလုပ်သင် ကုမ္ပဏီအတွက်
            အလုပ်ကောင်းကောင်းမလုပ်ပေးနိုင်ခဲ့တဲ့အတွက် နောက်ပိုင်းမှာ နာရီ ၅၀ စာ
            အချိန်ပိုင်းအလုပ်ကိုလျော့ချပြီး Programming ကို ပိုပြီး
            အားစိုက်လုပ်ဖြစ်ခဲ့ပါတယ်။ Programming နဲ့ ဘာတွေလုပ်နေလဲဆိုတော့
            စစခြင်းကတော့ ရိုးရိုး website တွေ ရေးဆွဲပေးရတယ်။ အသုံးပြုတဲ့
            Programming Language တွေကတော့ HTML, CSS, JavaScript, Ajax တွေ
            အသုံးပြုခဲ့တယ်။ ပြီးတော့ Wordpress လို့ခေါ်တဲ့ CMS စနစ်နဲ့
            ဝက်ဆိုဒ်တွေကို လုပ်ဆောင်ပေးရပါတယ်။ လုပ်သက်နည်းနည်းရလာတော့ PHP ကို
            အသုံးပြုပြီး Voting System တွေကို ရေးဆွဲပေးရတယ်။ အလုပ်ဝင်တဲ့
            ကုမ္ပဏီက ကုမ္ပဏီ အကြီးကြီးမဟုတ်တဲ့အတွက် အစအဆုံး တစ်ယောက်ထဲ
            လုပ်ရတာတွေများပါတယ်။ အဲဒီအတွက် ပိုပြီး ပညာရရှိခဲ့တယ်လို့ ထင်တယ်။
            အမှတ်တရအနေနဲ့ နာမည်ကြီး Brand တစ်ခုရဲ့ Model Voting ပေးတဲ့စနစ်ကို
            တစ်ယောက်တည်း ရေးရတဲ့အပြင် Voting စလက်ခံတဲ့နေကနေ စပြီး ၁ပတ်လောက်က
            ညလုံးပေါက် အခြေအနေတွေ စောင့်ကြည့်ခဲ့ရတာလည်းရှိပါတယ်။ Programmer
            တစ်ယောက်ဟာ Develop လုပ်နေချိန်မှာ သူများနဲ့မတူအောင် စိတ်ဖိစီးမူ
            ခံစားရပြီး လုပ်ထားတဲ့အရာကို အများရှေ့မှာ ချပြတဲ့အခါ ပြောမပြနိုင်တဲ့
            ပီတိမျိုးကိုခံစားရတယ်။ အဲဒီအချိန်မှာ ကိုယ်ကိုကို ပိုပြီး
            ယုံကြည့်မူရှိပြီး ရှေ့ဆက်မယ့် အားတွေ တိုးလာတယ်။ ဂျပန်ရောက်တဲ့အထိ
            Programming နဲ့ ပက်သက်တဲ့ ဗဟုသုတ ဘာမှ မရှိပါဘူး။ အလုပ်သင်ဝင်ပြီး
            ၂နှစ်အတွင်း အများကြီးပြောင်းလဲလာပြီး အများကြီးရေးနိုင်လာတယ်။
            ကိုယ့်အမြင်ကို ပြောပြရရင် ဂျပန်က ကောလိပ် ဆိုတာတောင် မြန်မာပြည်လောက်
            သင်ကြားရေးပိုင်းမှာ အဆင်မပြေတာတွေရှိတယ်။ သူတို့က Self-Study
            ပုံစံနဲ့သွားတာ ဖြစ်တဲ့အတွက် ဂျပန်ဆရာတွေက သင်ပေးတယ်ဆိုတာထက်
            အကြံညာဏ်ပေးတာ ပိုများတယ်။ အဲဒီမှာ မလိုက်နိုင်တဲ့
            နိုင်ငံခြားသားတွေအများကြီးတွေ့ရတယ်။ သူတို့ရဲ့ သင်ကြားမူပုံစံက
            လွတ်လပ်မူရှိတယ်။ ကျောင်းသားက အားစိုက်ထုတ်သလောက် အရှေ့ကို
            ရောက်နိုင်သလို အားမထုတ်တဲ့သူက လုံး၀ ကျန်နေခဲ့တာမျိုးတွေလည်းများတယ်။
            ဂျပန်မှာ အလုပ်သင်ဆိုတာကလည်း အလုပ်ထဲမှာ စာသင်ပေးတာမျိုးမဟုတ်ပဲ
            လက်တွေ့ တစ်ယောက်တည်း လုပ်ခိုင်းပြီး မှားမှ အကြံညာဏ်ပေးတာမျိုးဆိုတော့
            အလွယ်တကူတော့မဟုတ်ဘူး။ စစခြင်း ၆လ လောက်က ငရဲ့ ကျနေသလိုမျိုး
            ခံစားရတယ်။ အဲဒါကို ကျော်ဖြတ်နိုင်ရင်တော့ နိဗ္ဗာန် နီးလာပြီးလို့
            သဘောထားရမှာပေါ့လေ။ ဂျပန် လူမျိုးတွေကြားမှာ Programmer လုပ်နေရင်းနဲ့
            သတိထားမိတာက မြန်မာတွေလည်း မညံ့ဘူးဆိုတာပါပဲ။ လုံ့လ ၊ ဝီရိယ နဲ့ ညာဏ်က
            ဂျပန်တွေနဲ့ ယှဉ်လို့ရတယ်။ ယှဉ်လို့မရတာတော့ နည်းနည်းရှိတယ်။ စေ့စပ်
            သေချာမူနဲ့ ကြိုတင်ပြင်ဆင်မူ။ အဲဒီအပိုင်းတွေမှာတော့ မြန်မာတွေက
            အားနည်းတယ်။ အလုပ်တစ်ခု ကို ပေ့ါပေါ့တန်တန် စဉ်းစားမိတတ်တယ်။ အဲဒီ
            အားနည်းမူတွေကတော့ ကိုယ်အပါအဝင် မြန်မာတွေရဲ့ အားနည်းချက်ဖြစ်လိမ့်မယ်။
            သူတို့တွေနဲ့ အလုပ်လုပ်ရတာ လေ့လာစရာတွေအများကြီးရှိတယ်။ အဲဒီအတွက်
            သူတို့ကို ပုဂ္ဂိူလ်ရေးအရ အဆင်ပြေတယ် မပြေဘူးဆိုတာထက် သူတို့ရဲ့
            အလုပ်လုပ်ပုံ စဉ်းစားပုံ တွေကို လေ့လာပြီး အတုယူသင့်တာ ယူရမယ်လို့
            ခံယူထားတယ်။
          </p>
        </div>
      </div>
      <div className="group sm:w-[50%] md:w-[50%] lg:w-[90%] flex justify-end my-6">
        <div className="h-[70px] w-[70px] hover:w-[280px] hover:ease-in-out hover:duration-1000 overflow-hidden border rounded-full shadow-card">
          <div className="w-[280px] grid grid-cols-4  place-items-center my-3 ">
            <Image
              src={"/statics/images/share.png"}
              width={25}
              height={20}
              alt="share-button"
              className=""
            />
            <Link className="contents" href={"/facebook"}>
              <Image
                src={"/statics/images/facebook.svg"}
                width={40}
                height={40}
                alt="share-button"
              />
            </Link>
            <Link className="contents" href={"/instagram"}>
              <Image
                src={"/statics/images/instagram.svg"}
                width={40}
                height={40}
                alt="share-button"
              />
            </Link>
            <Link className="contents" href={"/linkin"}>
              <Image
                src={"/statics/images/linkin.svg"}
                width={40}
                height={40}
                alt="share-button"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
