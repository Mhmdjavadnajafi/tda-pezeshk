import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TestHeader from "../components/HeaderTest";

export default function ConversationWithTDA() {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingDone, setTypingDone] = useState(false);

  let fullText = `سلام
ما در اینجا سعی میکنیم که ابعاد درستی از شناخت بیماری داشته باشیم و شما را به بهترین پزشک یا خدمات درمانی هدایت کنیم.
همچنین شما میتوانید در موضوعات مختلف همچون دوز دارو و یا عوارض درمانی با
هوش مصنوعی ما مکالمه داشته باشید و یا در مورد بیماری خود، راه‌های درمان و یا مراقبت‌های بعد از درمان اطلاعات بیشتری کسب کنید.`;
  fullText = fullText.split(" ")
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.indexzz(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setTypingDone(true);
      }
    }, 50);

    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 50);

    return () => {
      clearInterval(typing);
      clearInterval(cursorBlink);
    };
  }, []);

  return (
    <>
      <TestHeader onClick={() => navigate("/content")} title={"گفتگو با تی دا (چشم مادر)"}>
        <div className="text-xs vazir-medium">دستیار هوش مصنوعی پزشک شما</div>
      </TestHeader>
      <div className="w-full px-6 flex-col vazir-medium">
        <div className="w-full text-sm py-2 min-h-[154px] whitespace-pre-line">
          <p>
            {displayText}
            {!typingDone && showCursor && <span className="animate-pulse">|</span>}
          </p>
        </div>
        {typingDone && (
          <div className="w-full h-max flex flex-col gap-2 p-1 text-sm font-bold animate-fadeIn">
            <div className="bg-gray-100 w-4/5 rounded-2xl p-4 self-end transition-all duration-700">
              سوال <br />سوال کاربر
            </div>
            <div className="w-max p-4 self-start text-zinc-500">جواب</div>
          </div>
        )}
      </div>
    </>
  );
}
