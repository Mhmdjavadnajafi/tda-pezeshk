import { useNavigate } from "react-router-dom";
import TestHeader from "../components/HeaderTest";
import BoxType from "../components/BoxType";

export default function ConversationWithTDA() {
    const navigate = useNavigate();

    return (
        <>
          <TestHeader onClick={() => navigate("/content")} title={"گفتگو با تی دا (چشم مادر)"}>
            <div className="text-xs">دستیار هوش مصنوعی پزشک شما</div>
          </TestHeader>
          <div className="w-full px-6 flex-col">
            <div className="w-full text-sm py-2 h-[154px]">
              <p>سلام</p>
              <p>
                  ما در اینجا سعی میکنیم که ابعاد درستی از شناخت بیماری داشته باشیم و شما را به بهترین پزشک یا خدمات درمانی هدایت کنیم.
                  همچنین شما میتوانید د موضوعات مختلف همچون دوز دارو و یا عوارض درمانی با
                   هوش مصنوعی ما مکالمه داشته باشید و یا در مورد بیماری خود، راه های درمان و یا مراقبت های بعد از درمان اطلاعات بیشتری کسب کنید .
              </p>
            </div> 
            <div className="w-full h-max flex flex-col gap-2 p-1 text-sm font-bold">
                <div className="bg-gray-100 w-4/5 rounded-2xl p-4 self-end">سوال <br/>سوال کاربر</div>
                <div className="w-max p-4 self-start text-zinc-500">جواب</div>
            </div>
          </div>
          <BoxType/>
        </>
    )
}