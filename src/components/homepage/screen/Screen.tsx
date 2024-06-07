function ScreenComponent() {
  return (
    <div className="screen-container flex flex-col w-3/4 max-md:max-h-[200px] max-md:w-[250px] max-h-3/5 bg-[#0C0404] rounded-lg p-3 border-2 border-slate-400 overflow-y-scroll space-y-1 animate-floating md:max-w-[400px] md:max-h-[250px]">
      <div className="line-tab0 flex w-2/4 h-[8px] space-x-2">
        <div className="item-function w-[42px] bg-[#1434A4] animate-flickering-lg" />
        <div className="item-variable w-[42px] bg-[#6495ED] animate-flickering-lg" />
        <div className="item-content w-[30px] bg-[#F28C28] animate-flickering-md" />
        <div className="item-other w-[6px] bg-[#464748] animate-flickering-xs" />
        <div className="item-other w-[42px] bg-[#464748] animate-flickering-lg" />
      </div>
      <div className="line flex w-2/4 h-[8px] space-x-2">
        <div className="item-function w-[30px] bg-[#1434A4] animate-flickering-md" />
        <div className="item-variable w-[18px] bg-[#6495ED] animate-flickering-sm" />
      </div>
      <div className="line-tab1 flex w-2/4 h-[8px] space-x-2 ml-[15px]">
        <div className="item-function w-[30px] bg-[#1434A4] animate-flickering-md" />
        <div className="item-variable w-[42px] bg-[#6495ED] animate-flickering-lg" />
        <div className="item-content w-[54px] bg-[#F28C28] animate-flickering-xlg" />
      </div>
      <div className="line-tab2 flex w-2/4 h-[8px] space-x-2 ml-[30px]">
        <div className="item-function w-[42px] bg-[#1434A4] animate-flickering-lg" />
        <div className="item-other w-[54px] bg-[#464748] animate-flickering-xlg" />
      </div>
      <div className="line-tab2 flex w-2/4 h-[8px] space-x-2 ml-[30px]">
        <div className="item-other w-[30px] bg-[#464748] animate-flickering-md" />
        <div className="item-variable w-[18px] bg-[#6495ED] animate-flickering-sm" />
        <div className="item-content w-[54px] bg-[#F28C28] animate-flickering-xlg" />
      </div>
      <div className="line-tab1 flex w-2/4 h-[8px] space-x-2 ml-[15px]">
        <div className="item-other w-[30px] bg-[#464748] animate-flickering-md" />
        <div className="item-variable w-[18px] bg-[#6495ED] animate-flickering-sm" />
        <div className="item-content w-[30px] bg-[#F28C28] animate-flickering-md" />
      </div>
      <div className="line-tab2 flex w-2/4 h-[8px] space-x-2 ml-[30px]">
        <div className="item-other w-[30px] bg-[#464748] animate-flickering-md" />
        <div className="item-variable w-[18px] bg-[#6495ED] animate-flickering-sm" />
        <div className="item-content w-[54px] bg-[#F28C28] animate-flickering-xlg" />
      </div>
      <div className="line-tab3 flex w-3/4 h-[8px] space-x-2 ml-[45px]">
        <div className="item-other w-[42px] bg-[#464748] animate-flickering-lg" />
        <div className="item-content w-[66px] bg-[#F28C28] animate-flickering-xxlg" />
        <div className="item-other w-[6px] bg-[#464748] animate-flickering-xs" />
        <div className="itemother w-[18px] bg-[#464748] animate-flickering-sm" />
      </div>
      <div className="line-tab3 flex w-3/4 h-[8px] space-x-2 ml-[45px]">
        <div className="item-function w-[30px] bg-[#1434A4] animate-flickering-md" />
        <div className="item-variable w-[6px] bg-[#6495ED] animate-flickering-xs" />
        <div className="item-variable w-[42px] bg-[#6495ED] animate-flickering-lg" />
        <div className="item-content w-[54px] bg-[#F28C28] animate-flickering-xlg" />
        <div className="item-other w-[54px] bg-[#464748] animate-flickering-xlg" />
        <div className="item-other w-[6px] bg-[#464748] animate-flickering-xs" />
        <div className="item-other w-[18px] bg-[#464748] animate-flickering-sm" />
      </div>
      <div className="line-tab1 flex w-2/4 h-[8px] space-x-2 ml-[15px]">
        <div className="item-function w-[30px] bg-[#1434A4] animate-flickering-md" />
        <div className="item-content w-[66px] bg-[#F28C28] animate-flickering-xxlg" />
        <div className="item-other w-[66px] bg-[#464748] animate-flickering-xxlg" />
      </div>
      <div className="line-tab0 flex w-3/4 h-[8px] space-x-2">
        <div className="item-function w-[30px] bg-[#1434A4] animate-flickering-md" />
        <div className="item-variable w-[54px] bg-[#6495ED] animate-flickering-xlg" />
        <div className="item-content w-[54px] bg-[#F28C28] animate-flickering-xlg" />
        <div className="item-other w-[66px] bg-[#464748] animate-flickering-xxlg" />
        <div className="item-other w-[30px] bg-[#464748] animate-flickering-md" />
      </div>
      <div className="line-tab1 flex w-2/4 h-[8px] space-x-2 ml-[15px]">
        <div className="item-other w-[42px] bg-[#464748] animate-flickering-lg" />
        <div className="item-variable w-[42px] bg-[#6495ED] animate-flickering-lg" />
      </div>
      <div className="line-tab1 flex w-2/4 h-[8px] space-x-2 ml-[15px]">
        <div className="item-other w-[18px] bg-[#464748] animate-flickering-sm" />
        <div className="item-variable w-[42px] bg-[#6495ED] animate-flickering-lg" />
        <div className="item-content w-[30px] bg-[#F28C28] animate-flickering-md" />
      </div>
      <div className="line-tab2 flex w-2/4 h-[8px] space-x-2 ml-[30px]">
        <div className="item-other w-[30px] bg-[#464748] animate-flickering-md" />
        <div className="item-variable w-[18px] bg-[#6495ED] animate-flickering-sm" />
        <div className="item-content w-[54px] bg-[#F28C28] animate-flickering-xlg" />
      </div>
      <div className="line-tab3 flex w-3/4 h-[8px] space-x-2 ml-[45px]">
        <div className="item-other w-[30px] bg-[#464748] animate-flickering-md" />
        <div className="item-variable w-[18px] bg-[#6495ED] animate-flickering-sm" />
        <div className="item-content w-[54px] bg-[#F28C28] animate-flickering-xlg" />
        <div className="item-other w-[18px] bg-[#464748] animate-flickering-sm" />
        <div className="item-other w-[42px] bg-[#464748] animate-flickering-lg" />
      </div>
      <div className="line-tab3 flex w-3/4 h-[8px] space-x-2 ml-[30px]">
        <div className="item-other w-[42px] bg-[#464748] animate-flickering-lg" />
        <div className="item-variable w-[54px] bg-[#6495ED] animate-flickering-xlg" />
        <div className="item-content w-[66px] bg-[#F28C28] animate-flickering-xxlg" />
        <div className="item-content w-[6px] bg-[#F28C28] animate-flickering-xs" />
        <div className="item-other w-[18px] bg-[#464748] animate-flickering-sm" />
      </div>
      <div className="line-tab0 flex w-2/3 h-[8px] space-x-2">
        <div className="item-function w-[30px] bg-[#1434A4] animate-flickering-md" />
        <div className="item-function w-[30px] bg-[#464748] animate-flickering-md" />
        <div className="item-variable w-[6px] bg-[#6495ED] animate-flickering-xs" />
        <div className="item-variable w-[54px] bg-[#6495ED] animate-flickering-xlg" />
        <div className="item-content w-[54px] bg-[#464748] animate-flickering-xlg" />
        <div className="item-other w-[66px] bg-[#464748] animate-flickering-xxlg" />
      </div>
      <div className="line-tab1 flex w-2/4 h-[8px] space-x-2 ml-[15px]">
        <div className="item-function w-[54px] bg-[#1434A4] animate-flickering-xlg" />
        <div className="item-variable w-[18px] bg-[#6495ED] animate-flickering-sm" />
        <div className="item-content w-[42px] bg-[#F28C28] animate-flickering-lg" />
        <div className="item-other w-[42px] bg-[#464748] animate-flickering-lg" />
      </div>
      <div className="line-tab2 flex w-2/4 h-[8px] space-x-2 ml-[30px]">
        <div className="item-function w-[30px] bg-[#1434A4] animate-flickering-md" />
        <div className="item-variable w-[18px] bg-[#6495ED] animate-flickering-sm" />
        <div className="item-variable w-[42px] bg-[#6495ED animate-flickering-lg]" />
      </div>
    </div>
  );
}

export default ScreenComponent;
