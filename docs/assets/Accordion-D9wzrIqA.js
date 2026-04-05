import{r as p,c as l,a as m,b as t,g as u,t as c,_ as f,d as n,e as b,i as d,F as g}from"./index-BRCW0_o6.js";const y={class:"pos-relative bg-card-dark o-x-scroll color-scheme-dark padding-top-0 padding-left-4 padding-right-4 padding-bottom-6"},r={__name:"CodeBlock",props:{code:{type:String,required:!0}},setup(s){const e=s,a=p(!1);function o(){navigator.clipboard.writeText(e.code.trim()).then(()=>{a.value=!0,setTimeout(()=>{a.value=!1},1700)})}return(C,i)=>(m(),l("div",y,[t("button",{class:"right-1-rem d-flex p-items-center p-content-center button-small hover-shimmer copy-btn",style:{"border-radius":"0"},onClick:o},[i[0]||(i[0]=t("span",{class:"material-symbols-outlined text-white font-size-l"},"content_copy",-1)),u(" "+c(a.value?"Copied!":"Copy"),1)]),t("pre",null,[t("code",{ref:"codeBlock"},c(s.code),513)])]))}},x={class:"z-index-neg-1 pos-fixed xy-center top-50-pct left-50-pct w-100-vw h-100-vh pointer-events-none o-hidden lightpillar-bg color-scheme-dark"},v={class:"padding-top-4 padding-left-6 w-100-pct d-flex a-items-center gap-4 f-wrap-wrap"},h={class:"d-flex a-items-center gap-4"},w={class:"d-flex a-items-center gap-4"},_={class:"w-100-pct padding-top-16 padding-bottom-16 padding-left-6 padding-right-6 color-scheme-dark"},k={class:"d-grid row-gap-4 max-w-60-rem margin-auto"},A={class:"d-grid row-gap-8 row"},z={__name:"Accordion",setup(s){return(e,a)=>(m(),l(g,null,[t("div",x,[n(b,{topColor:"#0d6be6",bottomColor:"skyblue",intensity:.2,rotationSpeed:.5,glowAmount:.0012,pillarWidth:10,pillarHeight:.4,noiseIntensity:0,pillarRotation:100,interactive:!1,mixBlendMode:"normal"})]),t("header",null,[t("div",v,[t("div",h,[t("div",{onClick:a[0]||(a[0]=o=>e.$router.push("/docs")),class:"font-size-l text-placeholder-dark cursor-pointer"},"Docs"),a[2]||(a[2]=t("div",{class:"font-size-3xl text-placeholder-dark cursor-default"},"/",-1))]),t("div",w,[t("div",{onClick:a[1]||(a[1]=o=>e.$router.push("/components")),class:"font-size-l text-placeholder-dark cursor-pointer"},"Components"),a[3]||(a[3]=t("div",{class:"font-size-3xl text-placeholder-dark cursor-default"},"/",-1))]),a[4]||(a[4]=t("div",{class:"d-flex a-items-center gap-4"},[t("div",{class:"font-size-l text-description-dark cursor-default"},"Accordion")],-1))])]),t("main",_,[t("section",k,[a[7]||(a[7]=t("h1",{class:"text-primary"},"Accordion",-1)),a[8]||(a[8]=t("p",{class:"text-subtitle-dark weight-800"},"Overview",-1)),a[9]||(a[9]=t("p",{class:"max-w-45-rem padding-bottom-16"},"Accordion is a great way to organize and display content in a compact and interactive manner, allowing you to present content in collapsible sections.",-1)),t("div",A,[a[5]||(a[5]=d('<section class="max-w-25-rem shadow-primary" data-v-cc3fbfbe><details class="radius-16 border-bottom-default" data-v-cc3fbfbe><summary data-v-cc3fbfbe> Accordion 1 <span class="text-icon-dark font-size-9xl material-symbols-outlined animate-accordion-icon" data-v-cc3fbfbe>stat_minus_1</span></summary> A lightweight and responsive accordion component designed to organize content in collapsible sections. </details><details class="border-bottom-default" data-v-cc3fbfbe><summary data-v-cc3fbfbe> Accordion 2 <span class="text-icon-dark font-size-9xl material-symbols-outlined animate-accordion-icon" data-v-cc3fbfbe>stat_minus_1</span></summary> A sleek accordion UI widget featuring customizable styles and animations. Perfect for displaying FAQs, menus, or collapsible content with a professional touch. </details><details class="radius-15" data-v-cc3fbfbe><summary data-v-cc3fbfbe> Accordion 3 <span class="text-icon-dark font-size-9xl material-symbols-outlined animate-accordion-icon" data-v-cc3fbfbe>stat_minus_1</span></summary> A dynamic accordion component that allows users to expand or collapse multiple sections simultaneously. Ideal for enhancing user experience in data-heavy interfaces. </details></section>',1)),n(r,{class:"margin-bottom-8",code:`
  <details class="radius-16 border-bottom-default">
    <summary>
      Accordion 1
      <span class="text-icon-dark font-size-9xl material-symbols-outlined animate-accordion-icon">stat_minus_1</span>
    </summary>
    A lightweight and responsive accordion component designed to organize content in collapsible sections.
  </details>
  <details class="border-bottom-default">
    <summary>
      Accordion 2
      <span class="text-icon-dark font-size-9xl material-symbols-outlined animate-accordion-icon">stat_minus_1</span>
    </summary>
    A sleek accordion UI widget featuring customizable styles and animations. Perfect for displaying FAQs, menus, or collapsible content with a professional touch.
  </details>
  <details class="radius-15">
    <summary>
      Accordion 3
      <span class="text-icon-dark font-size-9xl material-symbols-outlined animate-accordion-icon">stat_minus_1</span>
    </summary>
    A dynamic accordion component that allows users to expand or collapse multiple sections simultaneously. Ideal for enhancing user experience in data-heavy interfaces.
  </details>`}),a[6]||(a[6]=d('<section class="max-w-25-rem" data-v-cc3fbfbe><details class="bg-transparent border-bottom-default padding-left-0 padding-right-0" data-v-cc3fbfbe><summary data-v-cc3fbfbe> Accordion 1 <span class="text-icon-dark font-size-9xl material-symbols-outlined animate-accordion-icon" data-v-cc3fbfbe>stat_minus_1</span></summary> A lightweight and responsive accordion component designed to organize content in collapsible sections. </details><details class="bg-transparent border-bottom-default padding-left-0 padding-right-0" data-v-cc3fbfbe><summary data-v-cc3fbfbe> Accordion 2 <span class="text-icon-dark font-size-9xl material-symbols-outlined animate-accordion-icon" data-v-cc3fbfbe>stat_minus_1</span></summary> A sleek accordion UI widget featuring customizable styles and animations. Perfect for displaying FAQs, menus, or collapsible content with a professional touch. </details><details class="bg-transparent border-bottom-default padding-left-0 padding-right-0" data-v-cc3fbfbe><summary data-v-cc3fbfbe> Accordion 3 <span class="text-icon-dark font-size-9xl material-symbols-outlined animate-accordion-icon" data-v-cc3fbfbe>stat_minus_1</span></summary> A dynamic accordion component that allows users to expand or collapse multiple sections simultaneously. Ideal for enhancing user experience in data-heavy interfaces. </details></section>',1)),n(r,{class:"margin-bottom-8",code:`
  <details class="bg-transparent border-bottom-default padding-left-0 padding-right-0">
    <summary>
      Accordion 1
      <span class="text-icon-dark font-size-9xl material-symbols-outlined animate-accordion-icon">stat_minus_1</span>
    </summary>
    A lightweight and responsive accordion component designed to organize content in collapsible sections.
  </details>
  <details class="bg-transparent border-bottom-default padding-left-0 padding-right-0">
    <summary>
      Accordion 2
      <span class="text-icon-dark font-size-9xl material-symbols-outlined animate-accordion-icon">stat_minus_1</span>
    </summary>
    A sleek accordion UI widget featuring customizable styles and animations. Perfect for displaying FAQs, menus, or collapsible content with a professional touch.
  </details>
  <details class="bg-transparent border-bottom-default padding-left-0 padding-right-0">
    <summary>
      Accordion 3
      <span class="text-icon-dark font-size-9xl material-symbols-outlined animate-accordion-icon">stat_minus_1</span>
    </summary>
    A dynamic accordion component that allows users to expand or collapse multiple sections simultaneously. Ideal for enhancing user experience in data-heavy interfaces.
  </details>`})])])])],64))}},$=f(z,[["__scopeId","data-v-cc3fbfbe"]]);export{$ as default};
