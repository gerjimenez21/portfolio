import imgImage9 from "./8b9da8de3c76f8e3e13fac112f3cea13ac4982bf.png";
import imgImageWithFallback from "./01696f0d395d8ee5cb21b6cfbe9a5de63b2d84c3.png";
import imgImageWithFallback1 from "./01a180e2476670e53539f016282113e91673e206.png";
import imgImage8 from "./b4c856bb09b435bee9853ef545943ab16b390e2c.png";

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[#7b78a8] text-[11px] tracking-[2px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Otros proyectos en los que trabajé
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#bbb5df] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Solitaire Home Story
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] left-0 text-[#3d3a5c] text-[11px] top-[calc(50%-8.5px)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Product Design · Mobile
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[136.242px]" data-name="Container">
      <Text />
      <Container5 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[64px]" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
      <Container4 />
    </div>
  );
}

function Text1() {
  return <div className="h-[17px] relative shrink-0 w-[13px]" data-name="Text" />;
}

function Container2() {
  return (
    <div className="border-[rgba(103,100,242,0.08)] border-b border-solid content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Text1 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[44.198px] left-[9.14px] rounded-[9.471px] top-[9.9px] w-[40.798px]" data-name="ImageWithFallback">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[9.471px]">
        <img alt="" className="absolute h-[207.24%] left-[-58.08%] max-w-none top-[-52.08%] w-[221.06%]" src={imgImageWithFallback} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[64px] relative shrink-0 w-[59.077px]">
      <ImageWithFallback />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#bbb5df] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Billboard
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] left-[calc(50%-79.26px)] text-[#3d3a5c] text-[11px] top-[calc(50%-8.5px)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Product Design · Mobile & Web`}</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[158.523px]" data-name="Container">
      <Text2 />
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Frame1 />
      <Container8 />
    </div>
  );
}

function Text3() {
  return <div className="h-[17px] relative shrink-0 w-[13px]" data-name="Text" />;
}

function Container6() {
  return (
    <div className="border-[rgba(103,100,242,0.08)] border-b border-solid content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Text3 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute left-[13.6px] size-[36.809px] top-[13.6px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[64px]">
      <ImageWithFallback1 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#bbb5df] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Louderband
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] left-[calc(50%-79.26px)] text-[#3d3a5c] text-[11px] top-[calc(50%-8.5px)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`Product Design · Mobile & Web`}</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[158.523px]" data-name="Container">
      <Text4 />
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Frame />
      <Container12 />
    </div>
  );
}

function Text5() {
  return <div className="h-[17px] relative shrink-0 w-[13px]" data-name="Text" />;
}

function Container10() {
  return (
    <div className="content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Text5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-[5.48px] size-[53.047px] top-[5.48px]">
      <div className="absolute left-0 size-[53.047px] top-0" data-name="image 8">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[-34.86%] max-w-none size-[169.72%] top-[-23.86%]" src={imgImage8} />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-0 size-[64px] top-0">
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-0 size-[64px] top-0">
      <Frame5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[64px]">
      <Frame2 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#bbb5df] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Habitium
      </p>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Open_Sans:Regular',sans-serif] font-normal leading-[16.5px] left-[calc(50%-71.04px)] text-[#3d3a5c] text-[11px] top-[calc(50%-8.5px)] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Digital design · Web
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[142.078px]" data-name="Container">
      <Text6 />
      <Container17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Frame3 />
      <Container16 />
    </div>
  );
}

function Text7() {
  return <div className="h-[17px] relative shrink-0 w-[13px]" data-name="Text" />;
}

function Container14() {
  return (
    <div className="border-[rgba(103,100,242,0.08)] border-solid border-t content-stretch flex items-center justify-between py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Text7 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12px] relative shrink-0 w-[832px]" data-name="Container">
      <Container2 />
      <Container6 />
      <Container10 />
      <Container14 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1024px] pb-[64px] px-[96px] relative shrink-0 w-[1024px]" data-name="Container">
      <Paragraph />
      <Container1 />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="content-stretch flex items-start justify-center relative size-full" data-name="HomePage">
      <Container />
    </div>
  );
}