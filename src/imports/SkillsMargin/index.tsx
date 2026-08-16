import svgPaths from "./svg-26exl4zh23";

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6764f2] text-[16px] tracking-[2.4px] whitespace-nowrap">Conocimientos</p>
      </div>
    </div>
  );
}

function Text1() {
  return <div className="bg-[rgba(103,100,242,0.2)] flex-[694.875_0_0] h-px min-w-px relative" data-name="Text" />;
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2_41)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p253a080} id="Vector_2" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 8H14.6667" id="Vector_3" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2_41">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(103,100,242,0.1)] relative rounded-[8px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f0eff8] text-[14px] w-full" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
          Diseño y prototipado
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container5 />
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return <div className="bg-[rgba(103,100,242,0.5)] relative rounded-[16777200px] shrink-0 size-[4px]" data-name="Text" />;
}

function ListItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text3 />
        <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7b78a8] text-[12px] whitespace-nowrap">Figma</p>
      </div>
    </div>
  );
}

function Text4() {
  return <div className="bg-[rgba(103,100,242,0.5)] relative rounded-[16777200px] shrink-0 size-[4px]" data-name="Text" />;
}

function ListItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text4 />
        <div className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#7b78a8] text-[12px] whitespace-nowrap">
          <p className="leading-[16px] mb-0">Prototipado con AI</p>
          <p className="leading-[16px]">(Claude o Cursor)</p>
        </div>
      </div>
    </div>
  );
}

function Text5() {
  return <div className="bg-[rgba(103,100,242,0.5)] relative rounded-[16777200px] shrink-0 size-[4px]" data-name="Text" />;
}

function ListItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text5 />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Menlo:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#7b78a8] text-[12px]">Vercel (Deploy de prototipos)</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="h-[140px] relative shrink-0 w-[151px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start pt-[20px] relative size-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#0f0e1a] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(103,100,242,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Container4 />
        <List />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[222px] items-start left-0 top-0 w-[193px]" data-name="Container">
      <Container3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2b393280} id="Vector" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3eea2890} id="Vector_2" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2bdcbd80} id="Vector_3" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(103,100,242,0.1)] relative rounded-[8px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f0eff8] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
          Research
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container9 />
        <Text6 />
      </div>
    </div>
  );
}

function Text7() {
  return <div className="bg-[rgba(103,100,242,0.5)] relative rounded-[16777200px] shrink-0 size-[4px]" data-name="Text" />;
}

function ListItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text7 />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Menlo:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#7b78a8] text-[12px]">Entrevistas y usability testing</p>
      </div>
    </div>
  );
}

function Text8() {
  return <div className="bg-[rgba(103,100,242,0.5)] relative rounded-[16777200px] shrink-0 size-[4px]" data-name="Text" />;
}

function ListItem4() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text8 />
        <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7b78a8] text-[12px] whitespace-nowrap">Surveys</p>
      </div>
    </div>
  );
}

function Text9() {
  return <div className="bg-[rgba(103,100,242,0.5)] relative rounded-[16777200px] shrink-0 size-[4px]" data-name="Text" />;
}

function ListItem5() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text9 />
        <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7b78a8] text-[12px] whitespace-nowrap">Analytics</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="h-[140px] relative shrink-0 w-[151px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start pt-[20px] relative size-full">
        <ListItem3 />
        <ListItem4 />
        <ListItem5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#0f0e1a] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(103,100,242,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Container8 />
        <List1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[222px] items-start left-[213px] top-0 w-[193px]" data-name="Container">
      <Container7 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2_50)" id="Icon">
          <path d={svgPaths.pfe5cd00} id="Vector" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1fb38400} id="Vector_2" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 1.33333V2.66667" id="Vector_3" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 13.3333V14.6667" id="Vector_4" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 10H2.66667" id="Vector_5" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 6H2.66667" id="Vector_6" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 10H14.6667" id="Vector_7" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 6H14.6667" id="Vector_8" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 1.33333V2.66667" id="Vector_9" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 13.3333V14.6667" id="Vector_10" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2_50">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[rgba(103,100,242,0.1)] h-[32px] relative rounded-[8px] shrink-0 w-[31.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f0eff8] text-[14px] w-[110px]" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
          Gestión y documentación
        </p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container13 />
        <Text10 />
      </div>
    </div>
  );
}

function Text11() {
  return <div className="bg-[rgba(103,100,242,0.5)] relative rounded-[16777200px] shrink-0 size-[4px]" data-name="Text" />;
}

function ListItem6() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text11 />
        <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7b78a8] text-[12px] whitespace-nowrap">Notion</p>
      </div>
    </div>
  );
}

function Text12() {
  return <div className="bg-[rgba(103,100,242,0.5)] relative rounded-[16777200px] shrink-0 size-[4px]" data-name="Text" />;
}

function ListItem7() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text12 />
        <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7b78a8] text-[12px] whitespace-nowrap">Jira</p>
      </div>
    </div>
  );
}

function Text13() {
  return <div className="bg-[rgba(103,100,242,0.5)] relative rounded-[16777200px] shrink-0 size-[4px]" data-name="Text" />;
}

function ListItem8() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text13 />
        <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7b78a8] text-[12px] whitespace-nowrap">Github</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="h-[140px] relative shrink-0 w-[151px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start pt-[20px] relative size-full">
        <ListItem6 />
        <ListItem7 />
        <ListItem8 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#0f0e1a] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(103,100,242,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Container12 />
        <List2 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[222px] items-start left-[426px] top-0 w-[193px]" data-name="Container">
      <Container11 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_2_23)" id="Icon">
          <path d={svgPaths.p241f1490} id="Vector" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p6b27c00} id="Vector_2" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p312f7580} id="Vector_3" stroke="var(--stroke-0, #6764F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_2_23">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[rgba(103,100,242,0.1)] relative rounded-[8px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Bricolage_Grotesque:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#f0eff8] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}>
          AI
        </p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Container17 />
        <Text14 />
      </div>
    </div>
  );
}

function Text15() {
  return <div className="bg-[rgba(103,100,242,0.5)] relative rounded-[16777200px] shrink-0 size-[4px]" data-name="Text" />;
}

function ListItem9() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text15 />
        <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7b78a8] text-[12px] whitespace-nowrap">{`Claude `}</p>
      </div>
    </div>
  );
}

function Text16() {
  return <div className="bg-[rgba(103,100,242,0.5)] relative rounded-[16777200px] shrink-0 size-[4px]" data-name="Text" />;
}

function ListItem10() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text16 />
        <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7b78a8] text-[12px] whitespace-nowrap">MCP</p>
      </div>
    </div>
  );
}

function Text17() {
  return <div className="bg-[rgba(103,100,242,0.5)] relative rounded-[16777200px] shrink-0 size-[4px]" data-name="Text" />;
}

function ListItem11() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text17 />
        <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7b78a8] text-[12px] whitespace-nowrap">Creación de Agentes</p>
      </div>
    </div>
  );
}

function Text18() {
  return <div className="bg-[rgba(103,100,242,0.5)] relative rounded-[16777200px] shrink-0 size-[4px]" data-name="Text" />;
}

function ListItem12() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Text18 />
        <p className="[word-break:break-word] font-['Menlo:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7b78a8] text-[12px] whitespace-nowrap">Creación de Skills</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="h-[140px] relative shrink-0 w-[151px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start pt-[20px] relative size-full">
        <ListItem9 />
        <ListItem10 />
        <ListItem11 />
        <ListItem12 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[#0f0e1a] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(103,100,242,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[21px] relative size-full">
        <Container16 />
        <List3 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col h-[222px] items-start left-[639px] top-0 w-[193px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[222px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container6 />
      <Container10 />
      <Container14 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[48px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1024px] p-[96px] relative shrink-0 w-[1024px]" data-name="Skills">
      <Container />
      <ContainerMargin />
    </div>
  );
}

export default function SkillsMargin() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Skills:margin">
      <Skills />
    </div>
  );
}