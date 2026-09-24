/* SECTION: en-data — JRE 英文卷範文資料（十篇 + 備忘錄框架） */
window.JRE_EN = {
  meta: {
    paper: '英文卷',
    accent: 'en',
    words: '建議 400–600 字',
    orgSteps: '界定問題 → 分析成因與影響 → 選項比較 → 建議與執行考慮',
    trap: '逐段複述資料，建議流於空泛'
  },

  /* SECTION: en-framework — 備忘錄結構、萬用句式、考場要點 */
  framework: {
    structureTitle: '政策備忘錄標準結構',
    structure: [
      ['To / From / Date / Subject', '格式紀律', '正確的備忘錄抬頭；主旨句須點明「需要甚麼決定」，而非只寫議題', '—'],
      ['Purpose', '一句話', '說明要求甚麼決定，不是說明主題是甚麼', '約 30 詞'],
      ['Background', '2–3 句', '只寫令問題成立的事實，不做時間順序的資料傾瀉', '—'],
      ['Analysis', '核心', '界定問題 → 成因與影響 → 選項比較', '約 220 詞'],
      ['Recommendation', '立場', '以肯定句表明立場，並附帶條件', '約 70 詞'],
      ['Implementation', '兩項措施', '每項有負責單位、有次序、並說明對應哪個風險', '約 130 詞'],
      ['Review', '退路', '覆檢時點＋兩項指標＋調整觸發條件', '約 80 詞']
    ],
    sentencesTitle: '萬用句式（可直接套用到任何題目）',
    sentences: [
      'Purpose: This paper seeks the Secretary\'s decision on whether to ...',
      'Position: I recommend that the Government should ..., subject to two conditions.',
      'Defining the problem: The issue is not X as such, but the fact that the cost of X falls on Y.',
      'Weighing options: Option A is administratively simpler but delivers no incentive to change behaviour; Option B is more demanding but internalises the cost.',
      'Conceding: The strongest objection is that ... . This objection has force, but it argues for ... rather than for abandoning the proposal.',
      'Reclassifying: This is a question of enforcement design rather than of policy direction.',
      'Measures: I propose two measures. First, ... . Second, ... .',
      'Linking to risk: Together these address the two most immediate risks — ... and ... .',
      'Review: A review should be published X months after implementation, measuring (i) ... and (ii) ... .',
      'Trigger: If the first shows no improvement, or the second deteriorates materially, the ... should be adjusted rather than maintained unchanged.',
      'Hedging: is likely to / may / on balance / there is a real risk that',
      'Closing: On balance, licensing is preferable to the status quo not because ..., but because ... .'
    ],
    tipsTitle: '考場應變要點（英文卷）',
    tips: [
      ['主動處理參考資料', '英文卷附大量數據、剪報與持份者意見。不要按出現次序複述。只挑選兩三項與核心矛盾相關的資料，註明出處（"the trade association\'s submission argues that ..."）並用作自己論證的證據。篩走次要資料本身就是得分位。'],
      ['建議放在最前', '備忘錄的立場出現在分析之前，不是之後。讀者只讀兩段就應知道你的建議與條件。'],
      ['每個立場都附條件', '"I recommend proceeding, subject to two conditions" 比 "I recommend proceeding" 得分更高，因為它製造了處理反方論點的空間。'],
      ['反方論點分兩類回應', '一類承認有理並轉化為設計條件（"this has force, but it argues for ... rather than ..."）；一類重新歸類為執行問題（"this is a question of enforcement design rather than policy direction"）。兩者用不同方式回應，正是及格與高分的分界。'],
      ['措施要有單位、次序、風險', '點名負責機構、說明先後次序、指出該措施回應哪個風險。切勿寫 "strengthen publicity" 或 "maintain close liaison with stakeholders"。'],
      ['結尾寫覆檢點與觸發條件', '給出期間、兩項指標（一項測效益、一項測損害），並說明每項失敗時會改變甚麼。不要用重述建議作結。'],
      ['绝不虛構數字', '記不準就用定性表述："construction takes several years"、"duty is charged by reference to volume"。錯誤或虛構的統計會損害整篇的可信度。'],
      ['按體裁選格式', '備忘錄：To / From / Date / Subject 加分節標題。新聞稿：全大寫標題、導語段、一段具名引言、以 "Ends" 結尾。論說文：無標題分節、不用第一人稱眾數、立場在首段。'],
      ['語域', '用 the Government / the Administration / the Bureau；不用縮寫式；用 should、would 而非 must；避免 "we believe" 與反問句。']
    ],
    scoring: [
      ['立場清晰度', '首段已表態，全篇圍繞立場展開'],
      ['反方處理', '主動提出最強反方論點並回應'],
      ['建議可行性', '附帶執行條件與潛在風險'],
      ['資料運用', '篩走次要資料，圍繞核心矛盾整合'],
      ['篇幅分配', '篇幅按重要性分配，首尾呼應']
    ],
    extraNote: '英文卷與中文卷不能互相套用組織方式：英文卷資料多，考處理資訊的能力；中文卷資料少或沒有，考輸出觀點的能力。'
  },

  /* SECTION: en-essays — 十篇範文 */
  essays: [
    {
      no: 1, title: 'Regulating AI-Generated Content', genre: 'Policy Paper', type: '科技與新經濟監管', len: '509 words',
      header: [['To', 'Secretary for Innovation and Technology'], ['From', 'Policy Officer, Digital Economy Division'], ['Subject', 'Whether to introduce a regulatory framework for AI-generated content']],
      topic: 'As an officer at the Ministry of Innovation and Technology, identify two major challenges arising from AI-generated content, evaluate whether the Government should introduce a regulatory framework, and propose two safeguards balancing innovation and accountability.',
      stance: 'Support a framework — but one regulating use and labelling, not the technology itself.',
      paras: [
        { role: 'Purpose', text: `This paper seeks a decision on whether the Government should introduce a statutory framework governing AI-generated content, and if so, on what basis.` },
        { role: 'Recommendation', text: `I recommend that the Government should introduce a framework, but one that regulates the use and labelling of generated content rather than the development of the technology itself. Two conditions should apply: obligations should be graded by risk, and technical standards should be set out in subsidiary legislation so that they can be updated without primary amendment.` },
        { role: 'Analysis — 界定問題', text: `The challenge is not the quality of generated content but the loss of the audience's ability to verify it. Two problems follow. First, the marginal cost of producing plausible false content has fallen to near zero, which allows misleading material to be produced at scale and targeted at specific audiences; where elections, public health advice or financial information are concerned, individual users cannot realistically verify what they see. Second, creators whose work is used as training material have no clear basis on which to claim compensation when outputs substantially reproduce their work.` },
        { role: 'Analysis — 現有工具為何不足', text: `Existing tools do not meet these problems. Platform terms of service are voluntary, differ between operators and can be revised unilaterally; fact-checking responds to content that has already circulated and cannot restore a reputational or electoral effect. The difficulty is therefore structural: generation is cheap, identification is expensive, and redress is uncertain.` },
        { role: 'Analysis — 處理最強反方', text: `The strongest objection to legislation is that compliance costs fall disproportionately on small developers, entrenching incumbents who can absorb them, and that technical requirements will be outdated before they take effect. This objection has force, but it argues for a graded and lightweight design rather than for inaction. High-impact uses — election material, medical and financial advice, realistic depictions of identifiable persons — should carry clear labelling and accountability obligations, while general commercial and creative use should be addressed through voluntary codes and guidance. Placing the duty on the party that publishes rather than the party that generates makes evasion harder and keeps the burden away from model developers.` },
        { role: 'Implementation', text: `I propose two measures. First, a risk-graded labelling regime: content falling within the high-impact categories must carry a visible disclosure, and platforms must operate a notification and removal route, with a transition period of six months for small and medium enterprises. Second, an expedited infringement channel: creators may lodge a complaint where generated content substantially reproduces their work, to be determined by a designated panel within a fixed number of working days, with power to require distributors to restrict circulation. Together these address the two most immediate risks — compliance cost crowding out smaller developers, and the absence of any practical remedy.` },
        { role: 'Review', text: `A review should be published eighteen months after commencement, measuring (i) whether the circulation period of verified false generated content has shortened, and (ii) whether the number of locally established AI enterprises has declined following the introduction of compliance obligations. If the first shows no improvement, enforcement capacity should be examined; if the second deteriorates materially, procedures should be simplified or the transition period extended, rather than the framework maintained unchanged.` }
      ],
      blanks: [
        ['This paper seeks a decision on whether the Government should introduce a statutory framework'],
        ['but one that regulates the use and labelling of generated content rather than the development of the technology itself'],
        ['The challenge is not the quality of generated content but the loss of the audience\'s ability to verify it'],
        ['generation is cheap, identification is expensive, and redress is uncertain'],
        ['This objection has force, but it argues for a graded and lightweight design rather than for inaction'],
        ['a risk-graded labelling regime', 'an expedited infringement channel'],
        ['A review should be published eighteen months after commencement']
      ]
    },
    {
      no: 2, title: 'Urban Heat Mitigation Scheme', genre: 'Internal Policy Brief', type: '公共資源與環境', len: 'approx. 540 words',
      header: [['To', 'Secretary for Environment and Ecology'], ['From', 'Policy Officer, Urban Resilience Unit'], ['Subject', 'Proposed Urban Heat Mitigation Scheme — assessment and recommendation']],
      topic: 'Assess whether the Government should introduce an Urban Heat Mitigation Scheme to reduce the impact of rising temperatures in densely populated districts; examine advantages and drawbacks in terms of cost-effectiveness, environmental benefits and urban planning constraints; propose two coordination measures.',
      stance: 'Support — but as a targeted scheme for identified heat-risk districts, not a territory-wide programme.',
      paras: [
        { role: 'Purpose', text: `This paper assesses whether the Government should introduce an Urban Heat Mitigation Scheme targeting densely populated districts, and seeks a decision on scope.` },
        { role: 'Recommendation', text: `I recommend proceeding, but as a targeted scheme confined to identified heat-risk districts rather than a territory-wide programme, and delivered through an inter-departmental implementation group with a standing community liaison component.` },
        { role: 'Analysis — 界定問題', text: `Heat risk in dense districts is not evenly distributed. It concentrates where building density obstructs airflow, where tree canopy and open space are scarce, and where the resident population is older or works outdoors. A scheme that treats the whole territory alike would spend most of its budget where the risk is lowest.` },
        { role: 'Analysis — 利弊比較', text: `The advantages of intervention are real but uneven. Shading, reflective surfacing and greening can lower surface and pedestrian-level temperatures and reduce heat-related health demand; these measures also produce co-benefits in stormwater management and amenity. The drawbacks are equally concrete. Cost-effectiveness varies sharply between measures — tree planting delivers durable benefit but requires years to mature and permanent maintenance, whereas cool coatings are cheaper and faster but degrade and require recoating. Urban planning constraints are the more serious limitation: in built-up districts the available public realm is already committed to utilities, transport and existing uses, so the space for meaningful greening is limited, and works require road openings that themselves cause disruption.` },
        { role: 'Analysis — 處理最強反方', text: `The strongest objection is that the Scheme duplicates existing departmental work and adds coordination cost without adding capability. This has some force. Tree planting, roadside works and building design guidance already sit with different bureaux. But it argues for a scheme defined by place rather than by activity — a district-level package assembled from existing programmes and funded through a single allocation — rather than for abandoning the approach.` },
        { role: 'Implementation', text: `I propose two measures. First, an inter-departmental implementation group chaired at directorate level, with a single district heat-risk profile prepared jointly and a consolidated annual works programme, so that excavation, planting and resurfacing are sequenced together instead of separately. Second, a community liaison and maintenance arrangement: district councils and property management companies nominate contacts before works begin, and a maintenance budget is ring-fenced for the first five years, since the most common cause of failure in greening projects is not capital cost but unattended upkeep. Together these address the two most immediate risks — duplicated works and neglected assets.` },
        { role: 'Review', text: `A review should be published twenty-four months after the first district package is completed, measuring (i) whether heat-related attendances in the target districts have fallen relative to comparable untreated districts, and (ii) the survival rate and condition of planted assets. If the first shows no improvement, the choice of measures should be reconsidered; if the second is poor, the maintenance allocation should be increased before any further district is added.` }
      ],
      blanks: [
        ['I recommend proceeding, but as a targeted scheme confined to identified heat-risk districts'],
        ['A scheme that treats the whole territory alike would spend most of its budget where the risk is lowest'],
        ['Urban planning constraints are the more serious limitation'],
        ['it argues for a scheme defined by place rather than by activity'],
        ['an inter-departmental implementation group chaired at directorate level', 'a community liaison and maintenance arrangement'],
        ['the most common cause of failure in greening projects is not capital cost but unattended upkeep'],
        ['A review should be published twenty-four months after the first district package is completed']
      ]
    },
    {
      no: 3, title: 'Affordable Housing Voucher Programme', genre: 'Policy Brief', type: '民生與福利分配', len: '466 words',
      header: [['To', 'Secretary for Housing and Urban Development'], ['From', 'Policy Officer, Housing Policy Division'], ['Subject', 'Affordable Housing Voucher Programme — evaluation']],
      topic: 'Identify two challenges limiting access to affordable housing; evaluate whether the Government should introduce a voucher programme; propose two safeguards ensuring fair access and sustainability, addressing market distortion and eligibility abuse.',
      stance: 'Support — as a supplement to construction, not a substitute; capped and time-limited.',
      paras: [
        { role: 'Purpose', text: `This paper evaluates whether a voucher programme should be introduced to improve housing access for low-income households, and seeks a decision in principle.` },
        { role: 'Recommendation', text: `I recommend introducing a voucher programme as a supplement to, not a substitute for, public housing construction, with a fixed budget ceiling and a time limit tied to the waiting period.` },
        { role: 'Analysis — 界定問題', text: `Two constraints limit access. The first is timing: construction from site identification to occupation takes years, and households on the waiting list face private rents in the interim that consume a disproportionate share of income. The second is mismatch: available public units are often not located where low-income households work, whereas the private rental stock is distributed across the whole market. A voucher addresses both, because it is portable and immediate.` },
        { role: 'Analysis — 利弊與市場扭曲', text: `The advantage is speed and choice. The drawback is that a voucher increases the purchasing power of tenants without increasing the number of units; where supply is constrained, part of the subsidy is likely to be captured by landlords through rent increases, so the net benefit to tenants is smaller than the gross cost to the Exchequer. This is the market distortion concern, and it is well founded.` },
        { role: 'Analysis — 處理最強反方', text: `The strongest objection, however, is not distortion but substitution. If the voucher is funded by reducing construction, the Government trades a permanent capital asset, which serves successive generations and disciplines market rents, for a recurring expenditure that ends only when the programme is cancelled. This objection is decisive on the funding question: the voucher must be additional.` },
        { role: 'Analysis — 濫用風險', text: `Eligibility abuse is a genuine but manageable risk. Where the voucher is worth more than the waiting-list alternative, there is an incentive to under-report income or to arrange notional tenancies. The answer is administrative rather than conceptual: verification against existing income data, direct payment to landlords, and periodic re-assessment.` },
        { role: 'Implementation', text: `I propose two safeguards. First, a capped and time-limited voucher: available only to households already on the public housing waiting list, with the payment limited by reference to the rent of the relevant district and the entitlement ending on allocation of a public unit or at a fixed maximum period, whichever is earlier. Second, a rent-monitoring trigger: the Administration should monitor rents in districts with high voucher uptake quarterly, and where increases materially exceed the general market, reduce the voucher amount or narrow coverage while accelerating supply in that district. Together these address the two most immediate risks — indefinite fiscal commitment and subsidy capture by landlords.` },
        { role: 'Review', text: `A review should be published twenty-four months after introduction, measuring (i) whether the housing cost burden of recipient households has genuinely fallen, and (ii) whether rents in high-uptake districts have risen abnormally. If the first shows no improvement, the design should be revisited; if the second deteriorates, the voucher should be reduced and resources redirected to supply.` }
      ],
      blanks: [
        ['as a supplement to, not a substitute for, public housing construction'],
        ['The first is timing', 'The second is mismatch'],
        ['part of the subsidy is likely to be captured by landlords through rent increases'],
        ['The strongest objection, however, is not distortion but substitution'],
        ['The answer is administrative rather than conceptual'],
        ['a capped and time-limited voucher', 'a rent-monitoring trigger'],
        ['A review should be published twenty-four months after introduction']
      ]
    },
    {
      no: 4, title: 'SME Innovation Support Fund', genre: 'Discussion Paper', type: '經濟與產業政策', len: 'approx. 550 words',
      header: [['To', 'Secretary for Commerce and Industry'], ['From', 'Policy Officer, Industry Development Division'], ['Subject', 'Proposal to establish an SME Innovation Support Fund — for discussion']],
      topic: 'Identify two obstacles limiting SME innovation; evaluate whether a dedicated fund should be established; propose two measures ensuring efficient allocation and accountability.',
      stance: 'Support — but fund the testing of innovation, not its launch; match public money with private commitment.',
      paras: [
        { role: 'Purpose', text: `This paper examines whether a dedicated SME Innovation Support Fund should be established, and invites discussion on its form.` },
        { role: 'Position', text: `I support establishing a Fund, provided that support is directed at reducing the cost of testing an innovation rather than subsidising its launch, and that public money is matched by private commitment.` },
        { role: 'Analysis — 界定問題', text: `Two obstacles limit SME innovation. The first is cash-flow mismatch: development, certification and equipment costs are incurred before any revenue arises, and SMEs lack the balance sheet to bridge the gap. The second is capability, not capital alone. Many SMEs cannot identify which process improvements are worth pursuing, cannot access testing facilities, and cannot absorb the cost of a failed prototype. A fund that provides money only addresses the first obstacle and will largely finance projects that would have proceeded anyway.` },
        { role: 'Analysis — 利弊', text: `The obvious advantage of a dedicated fund is visibility and focus. The drawback is deadweight and selection failure: applications are assessed by officials who cannot judge commercial prospects as well as the market can, and grants with no repayment obligation remove the discipline that private financing imposes. Where grants are unconditional, the predictable outcome is a high volume of marginal applications and a low rate of commercialised results.` },
        { role: 'Analysis — 處理最強反方', text: `The strongest objection is therefore one of fairness and efficiency: public funds are transferred to a small number of firms, some of which would have innovated regardless, while firms without grant-writing capacity are excluded. This objection has force, and it argues for matching rather than granting. Where a firm must find a private investor, a customer order or its own contribution before public money is released, the market performs the selection and the deadweight falls sharply.` },
        { role: 'Implementation', text: `I propose two measures. First, matching disbursement with milestones: public support is released in tranches against a private contribution or a signed customer commitment, with claw-back provisions where milestones are not met. Second, shared technical services in place of cash for capability gaps: subsidised access to testing laboratories, certification advice and design engineering, provided on a user-pays basis at a reduced rate, so that firms with a real need use them and firms without one do not. Together these address the two most immediate risks — subsidy without selection, and money that does not reach the capability gap.` },
        { role: 'Review', text: `A review should be published thirty-six months after the Fund commences, measuring (i) the proportion of supported projects that have reached commercial sale, against an unmatched comparison group, and (ii) the proportion of public money recovered through matching contributions and claw-backs. If the first shows no difference from the comparison group, support should be redirected to shared services; if the second is low, matching ratios should be tightened rather than the Fund expanded.` }
      ],
      blanks: [
        ['provided that support is directed at reducing the cost of testing an innovation rather than subsidising its launch'],
        ['The first is cash-flow mismatch', 'The second is capability, not capital alone'],
        ['The drawback is deadweight and selection failure'],
        ['This objection has force, and it argues for matching rather than granting'],
        ['matching disbursement with milestones', 'shared technical services in place of cash'],
        ['with claw-back provisions where milestones are not met'],
        ['A review should be published thirty-six months after the Fund commences']
      ]
    },
    {
      no: 5, title: 'Universal Mental Health Screening', genre: 'Policy Paper', type: '民生與福利分配', len: '465 words',
      header: [['To', 'Secretary for Health'], ['From', 'Policy Officer, Primary Healthcare Division'], ['Subject', 'Universal Mental Health Screening Programme — evaluation']],
      topic: 'Identify two challenges hindering early identification of mental health issues; evaluate a universal screening programme; propose two safeguards on ethics and data privacy, addressing stigma and resource strain.',
      stance: 'Recommend targeted screening within existing contacts, not population-wide screening.',
      paras: [
        { role: 'Purpose', text: `This paper evaluates whether a Universal Mental Health Screening Programme should be introduced, and seeks a decision on scope.` },
        { role: 'Recommendation', text: `I recommend a targeted screening programme offered within existing primary care and school health contacts, rather than universal population-wide screening.` },
        { role: 'Analysis — 界定問題', text: `Two obstacles hinder early identification. The first is that help-seeking depends on the individual recognising a problem and then overcoming the reluctance to disclose it; where stigma is high, the interval between onset and presentation lengthens. The second is capacity: even where cases are identified, referral pathways are long, so identification without treatment converts an untreated condition into an identified and untreated one, which is worse for the patient and worse for public confidence.` },
        { role: 'Analysis — 利弊與資源壓力', text: `The advantage of universal screening is that it reaches people who would not present. The drawback is that population-wide instruments produce a substantial number of false positives, each of which consumes assessment capacity and may itself cause anxiety and labelling. This is the resource strain concern, and it is not a secondary consideration: a screening programme whose referrals cannot be absorbed within a reasonable period is a programme that generates harm.` },
        { role: 'Analysis — 處理最強反方（倫理）', text: `The strongest objection is ethical. Screening implies that a result will be acted upon, and creates a record of a condition the individual may not have chosen to disclose. Where the data are held centrally and are accessible to employers, insurers or other agencies, the deterrent effect on future help-seeking could exceed the benefit of earlier detection. This objection is decisive on design, and it argues for consent-based screening embedded in an existing clinical relationship, with results held in the ordinary medical record and no separate register.` },
        { role: 'Implementation', text: `I propose two safeguards. First, consent-based screening integrated into existing contacts, with no separate database: screening is offered during routine primary care or school health visits, participation is opt-in and declinable without consequence, results are recorded in the existing medical record under the normal confidentiality regime, and a written explanation of who may access them is given at the point of consent. Second, a capacity-linked referral guarantee: screening is extended to a new setting only where the corresponding assessment and treatment capacity has been confirmed in advance, and the number of appointments is reviewed against actual waiting times each quarter. Together these address the two most immediate risks — privacy-driven deterrence and identification without treatment.` },
        { role: 'Review', text: `A review should be published twenty-four months after the first phase, measuring (i) whether the interval between onset and first treatment has shortened in screened populations, and (ii) whether waiting times for assessment have lengthened. If the first shows no improvement, the instrument or the setting should be reconsidered; if the second deteriorates, screening should be paused in further settings until capacity is restored, rather than continued on the basis that detection is itself a benefit.` }
      ],
      blanks: [
        ['I recommend a targeted screening programme offered within existing primary care and school health contacts'],
        ['The first is that help-seeking depends on the individual recognising a problem', 'The second is capacity'],
        ['identification without treatment converts an untreated condition into an identified and untreated one'],
        ['The strongest objection is ethical'],
        ['it argues for consent-based screening embedded in an existing clinical relationship'],
        ['consent-based screening integrated into existing contacts, with no separate database', 'a capacity-linked referral guarantee'],
        ['A review should be published twenty-four months after the first phase']
      ]
    },
    {
      no: 6, title: 'Food Waste Charging (Press Release)', genre: 'Press Release', type: '公共資源與環境', len: 'approx. 400 words',
      header: [['體裁要點', '全大寫標題 → 導語段（who/what/when/why）→ 具名引言 → 分階段與支援措施 → 執法 → 覆檢點 → "Ends"']],
      topic: '把「食肆廚餘徵費」政策改寫為新聞稿。此體裁最容易在格式上失分，故單獨示範一篇：不議論、不用第一人稱、不用插入語，事實平鋪直述。',
      stance: '體裁示範：新聞稿（無立場論證，只有事實與引言）。',
      paras: [
        { role: 'Headline', text: `GOVERNMENT TO INTRODUCE PHASED FOOD WASTE CHARGING FOR CATERING PREMISES` },
        { role: 'Lead — 導語段', text: `The Government will introduce a charging scheme for food waste disposed of by catering premises in two phases, beginning in the first quarter of next year. The scheme applies the user-pays principle to food waste, so that the cost of disposal is borne by the premises that generate it.` },
        { role: 'Quotation — 具名引言', text: `Announcing the arrangement today, the Secretary for Environment and Ecology said: "Voluntary recycling schemes have taken the industry a considerable distance, but they cannot link the amount a business disposes of to the amount it pays. Charging does. It converts waste reduction from an aspiration into a business decision, and it is the most direct incentive available to us."` },
        { role: 'Phasing — 分階段安排', text: `The first phase will apply to catering premises with higher levels of food waste disposal, allowing collection networks and treatment facilities time to expand. The second phase will extend to all licensed premises following a review of the first. Premises will be charged by reference to the weight of food waste they present for collection.` },
        { role: 'Support — 支援措施', text: `To support smaller operators, the Government will establish a funding scheme for on-site food waste handling equipment. The grant will be linked to the reduction in disposal declared and verified by the applicant, so that support is directed to measurable improvement rather than to the purchase of equipment alone. Premises will also receive a start-up advisory visit covering waste segregation, storage and record-keeping before charging begins.` },
        { role: 'Enforcement — 執法', text: `Enforcement will be by random inspection at collection points and at premises, with fixed penalties for the mixing of food waste into general refuse and for unauthorised disposal. The results of inspections will be published quarterly.` },
        { role: 'Review — 覆檢點', text: `A review of the scheme will be published eighteen months after the first phase commences. It will assess two measures: whether the quantity of food waste disposed of by catering premises has fallen, and whether the operating costs of smaller premises have risen significantly. Where the first shows no improvement, or the second deteriorates materially, the charging rate will be adjusted or the transition period extended.` },
        { role: 'Closing', text: `Further information on the scheme, including the eligibility criteria for the equipment funding, is available on the departmental website.\n\nEnds` }
      ],
      blanks: [
        ['GOVERNMENT TO INTRODUCE PHASED FOOD WASTE CHARGING FOR CATERING PREMISES'],
        ['The scheme applies the user-pays principle to food waste'],
        ['Announcing the arrangement today, the Secretary for Environment and Ecology said'],
        ['The first phase will apply to catering premises with higher levels of food waste disposal'],
        ['The grant will be linked to the reduction in disposal declared and verified by the applicant'],
        ['Enforcement will be by random inspection at collection points and at premises'],
        ['A review of the scheme will be published eighteen months after the first phase commences']
      ]
    },
    {
      no: 7, title: 'Should Ride-Hailing Be Licensed?', genre: 'Argumentative Essay', type: '規管與自由的張力', len: '564 words',
      header: [['體裁要點', '無備忘錄抬頭、無分節標題；立場必須在首段出現']],
      topic: 'Discuss whether the Government should introduce a licensing framework for ride-hailing services so that they may operate lawfully, and how the interests of the existing taxi trade should be handled.',
      stance: 'Support licensing — staged release of licences, with a transition package for taxi drivers.',
      paras: [
        { role: '第1段｜立場＋兩個條件', text: `The question before the Government is not whether ride-hailing services should exist — they already do, at scale — but whether they should continue to operate outside any licensing regime. I support the introduction of a licensing framework, on two conditions: that the number of licences is released in stages and adjusted against observable indicators, and that a transition arrangement is put in place for existing taxi drivers.` },
        { role: '第2段｜論證問題成立（風險歸屬）', text: `The case for licensing rests on the allocation of risk rather than on the popularity of the service. A passenger who books through a platform has no clear answer to three questions if something goes wrong: whether the insurance in force covers the commercial carriage of passengers, whether the driver's background has been checked, and against whom a complaint may be brought. Because the driver contracts as a self-employed provider, the platform accepts responsibility for matching but not for carriage, and the risk sits with the individuals least able to bear it. At the same time, the Administration cannot establish how many vehicles are in fact providing the service, or what their safety record is. Enforcement against unlicensed carriage reduces supply but does not remove demand, since the demand arises from the constrained availability of taxi services at particular times and in particular districts. The effect of suppression is therefore to push the service further underground, where it is less observable than it is now.` },
        { role: '第3段｜處理最強反方（的士生計）', text: `The strongest objection is that taxi licences were granted by the Government in the past, sometimes by auction, and that releasing large numbers of ride-hailing licences devalues an asset on which drivers' livelihoods depend. This objection has real force. It does not, however, support maintaining the present position. Unlicensed ride-hailing already competes with taxis, but does so without meeting any service standard, any insurance requirement or any fare transparency obligation. Regulated competition is at least comparable in its conditions, whereas the current arrangement is competition in which only one side is bound. The objection therefore argues for controlling the pace of release and for supporting the transition of existing drivers, not for indefinite non-regulation.` },
        { role: '第4段｜兩項措施', text: `Two measures follow. The first is staged licensing with published adjustment criteria: an initial, limited allocation of vehicle and platform licences covering pre-booked journeys only, with any subsequent release determined by reference to passenger waiting times, complaint rates and the trading position of the taxi trade. Publishing the criteria in advance matters, because uncertainty about future supply is more damaging to both trades than a smaller initial allocation. The second is a transition package for taxi drivers: a one-off grant covering the cost of obtaining a ride-hailing licence and the required equipment, funding for service-quality training, and the retention of the taxi trade's exclusive right to street hire and rank standing. Together these address the two most immediate risks — a supply shock delivered too quickly, and the absence of any route out for those displaced.` },
        { role: '第5段｜結論＋覆檢觸發條件', text: `On balance, licensing is preferable to the status quo not because ride-hailing services are unobjectionable, but because the present arrangement assigns responsibility to nobody. A review should be published twenty-four months after the first licences are issued, measuring complaints and incidents involving pre-booked carriage, and the turnover and workforce of the taxi trade. If the first does not improve, licence conditions should be tightened; if the second deteriorates materially, further releases should be suspended and transition support extended.` }
      ],
      blanks: [
        ['The question before the Government is not whether ride-hailing services should exist', 'but whether they should continue to operate outside any licensing regime'],
        ['The case for licensing rests on the allocation of risk rather than on the popularity of the service'],
        ['Enforcement against unlicensed carriage reduces supply but does not remove demand'],
        ['This objection has real force. It does not, however, support maintaining the present position'],
        ['staged licensing with published adjustment criteria', 'a transition package for taxi drivers'],
        ['On balance, licensing is preferable to the status quo'],
        ['A review should be published twenty-four months after the first licences are issued']
      ]
    },
    {
      no: 8, title: 'Smartphone Use in Schools', genre: 'Discussion Paper', type: '社會共識與價值衝突', len: 'approx. 580 words',
      header: [['To', 'Permanent Secretary for Education'], ['From', 'Policy Officer, School Development Division'], ['Subject', 'Whether schools should prohibit the use of smartphones on campus — for discussion']],
      topic: 'Consider whether a territory-wide prohibition on the use of smartphones in schools should be recommended, and decide the form of guidance to be issued.',
      stance: 'Not a blanket ban on possession — a standard rule of no use in lessons, with graded permissions and defined exemptions.',
      paras: [
        { role: 'Purpose', text: `This paper considers whether a territory-wide prohibition on the use of smartphones in schools should be recommended, and invites a decision on the form of guidance to be issued.` },
        { role: 'Position', text: `I do not recommend a blanket prohibition on possession. I recommend a standard rule, applied across all schools, under which smartphones are not used during lessons and examinations and are stored collectively, with graded permissions for the rest of the school day and defined exemptions.` },
        { role: 'Analysis — 界定問題', text: `The harm to be addressed is concentrated in lesson time: divided attention, and the use of devices to record or circulate material without consent. A further harm arises outside lessons, in the comparison and circulation that continues through breaks. Neither is addressed by the present position, in which most schools operate a general discouragement enforced individually by teachers. The consequence is that the rule differs between classrooms, students cannot know what is expected, and teachers lose lesson time to enforcement.` },
        { role: 'Analysis — 處理最強反方', text: `The objection to prohibition has two limbs, and both should be taken seriously. The first is that smartphones serve legitimate purposes: parental contact, electronic payment, and in some cases medical monitoring such as continuous glucose measurement. A blanket ban on possession would remove these and create genuine safety concerns for parents. The second is enforcement cost. Searching students and confiscating devices is administratively heavy, gives rise to disputes over property and privacy, and places teachers in the position of enforcement officers, which damages the relationship on which teaching depends.` },
        { role: 'Analysis — 分別回應兩個反方', text: `The first limb is answered by exemption rather than by abandonment of the rule: medical need, special educational needs and parental emergency contact should be exempt, registered once and valid for the school year. The second is answered by the method of compliance. Collective storage — devices placed in a classroom holder at the start of each lesson — converts the rule from an inspection of the individual into a shared routine, and removes the need to search anyone. Learning uses can be provided for through school-managed tablets or computer rooms, which are in any case more suitable for supervised classroom work.` },
        { role: 'Implementation', text: `I propose two measures. First, a standard template rule for adoption by all schools, specifying storage during lessons and examinations, the permitted zones and times during breaks, and the exemption categories and registration procedure. Uniformity matters, because the present cost falls on teachers who must each negotiate their own arrangements with students and parents. Second, consultation and accompanying curriculum: the detailed arrangements should be settled with parent-teacher associations and student representatives before the rule takes effect, and should be supported by teaching on privacy, cyber-bullying and attention management, so that students understand the reason for the rule rather than only its penalty. Together these address the two most immediate risks — enforcement generating conflict, and a rule that lacks the consent of those subject to it.` },
        { role: 'Review', text: `Schools should report at the end of the first full academic year on two measures: lesson interruptions and disciplinary cases involving devices, and the level of agreement with the arrangements among teachers, students and parents. If the first does not fall, whether storage is in fact being operated should be examined before the rule is tightened; if the second is low, the exemption categories and permitted zones should be reopened for consultation rather than enforced more strictly.` }
      ],
      blanks: [
        ['I do not recommend a blanket prohibition on possession'],
        ['The harm to be addressed is concentrated in lesson time'],
        ['the rule differs between classrooms, students cannot know what is expected'],
        ['The objection to prohibition has two limbs, and both should be taken seriously'],
        ['The first limb is answered by exemption rather than by abandonment of the rule'],
        ['a standard template rule for adoption by all schools', 'consultation and accompanying curriculum'],
        ['Schools should report at the end of the first full academic year on two measures']
      ]
    },
    {
      no: 9, title: 'Rental Subsidy vs Construction', genre: 'Policy Memorandum', type: '民生與福利分配', len: '520 words',
      header: [['To', 'Secretary for Housing'], ['From', 'Policy Officer, Long-term Housing Strategy Team'], ['Subject', 'Proposal to replace part of the public housing construction budget with a means-tested rental subsidy']],
      topic: 'Respond to a proposal that part of the resources committed to public housing construction be redirected to a means-tested rental subsidy.（示範「反對」寫法）',
      stance: 'Do not accept substitution; introduce a time-limited bridging subsidy in addition to construction.',
      paras: [
        { role: 'Purpose', text: `This paper responds to a proposal that part of the resources currently committed to public housing construction be redirected to a means-tested rental subsidy, and seeks a decision.` },
        { role: 'Recommendation', text: `I recommend that the proposal to substitute should not be accepted. I recommend instead that a time-limited rental subsidy be introduced in addition to the existing construction programme, as a bridging measure for households already on the waiting list.` },
        { role: 'Analysis — 先承認對方有理', text: `The proposal rests on a real problem. Construction from site identification to occupation takes years, and households on the waiting list meet private market rents in the interim. A subsidy reaches them immediately and is portable, whereas a completed unit is fixed in location. These are genuine advantages.` },
        { role: 'Analysis — 為何不可互換', text: `They do not, however, make the two instruments interchangeable. A public housing unit is a capital asset: once built, it provides below-market accommodation to successive households over decades and exerts a continuing restraining effect on private market rents. A subsidy is recurrent expenditure that alters the payment capacity of the tenant while leaving the number of units unchanged. Where supply is constrained, an increase in the purchasing power of a large group of tenants is likely to be partly absorbed by landlords through rent increases, so that the benefit to the tenant is less than the cost to the public purse, and the commitment, once made, is difficult to withdraw. Substitution therefore trades a permanent asset for an open-ended recurring liability, and does so at the point when the supply constraint is most acute.` },
        { role: 'Analysis — 處理最強反方（財政紀律）', text: `The strongest argument for substitution is fiscal discipline: construction expenditure is large, exposed to land and engineering cost volatility, and difficult to adjust once committed, whereas a subsidy can be scaled up or down with demand. This argument confuses the management of cost with the nature of the resource. Cost volatility in construction should be addressed through contract form and project supervision. It should not be avoided by disposing of the asset that addresses the underlying shortage, since the fiscal saving is achieved only by leaving the shortage in place.` },
        { role: 'Implementation', text: `I propose two measures. First, a bridging subsidy tied to the waiting list: available only to households already registered, limited by reference to the rent of the relevant district, re-assessed for income every six months, and terminating on the allocation of a public unit or at a fixed maximum period, whichever is earlier. Second, a market trigger: rents in districts of high uptake should be monitored quarterly, and where the increase materially exceeds the general market movement, the subsidy rate should be reduced or coverage narrowed while supply in that district is accelerated. Together these address the two most immediate risks — an entitlement that becomes permanent, and subsidy captured by landlords.` },
        { role: 'Review', text: `A review should be published twenty-four months after introduction, measuring (i) the actual housing cost burden of recipient households, and (ii) rent movements in high-uptake districts against the general market. If the first shows no improvement, the design should be revisited; if the second deteriorates, the subsidy should be reduced and the resources redirected to supply. The construction programme should in either case proceed as planned.` }
      ],
      blanks: [
        ['I recommend that the proposal to substitute should not be accepted'],
        ['A subsidy reaches them immediately and is portable, whereas a completed unit is fixed in location'],
        ['They do not, however, make the two instruments interchangeable'],
        ['Substitution therefore trades a permanent asset for an open-ended recurring liability'],
        ['This argument confuses the management of cost with the nature of the resource'],
        ['a bridging subsidy tied to the waiting list', 'a market trigger'],
        ['The construction programme should in either case proceed as planned']
      ]
    },
    {
      no: 10, title: 'Should Liquor Duty Be Reduced?', genre: 'Argumentative Essay', type: '經濟與產業政策', len: 'approx. 600 words',
      header: [['體裁要點', '論說文，立場為「有條件反對」——最常見的高分立場形態']],
      topic: 'Discuss whether liquor duty should be reduced in order to promote high-end catering and the night-time economy.（示範「有條件反對」寫法）',
      stance: 'Against a general reduction; for a targeted adjustment to large-format bottles, with health measures and a sunset clause.',
      paras: [
        { role: '第1段｜立場＋界線', text: `A proposal to reduce liquor duty is usually advanced as a measure to stimulate high-end catering and the night-time economy. I do not support a general reduction. I support a targeted adjustment to the duty charged on the portion of large-format bottles exceeding a specified capacity, coupled with public health measures and a sunset provision.` },
        { role: '第2段｜論證問題成立（效益不確定）', text: `The difficulty with the general case is that the benefit of a duty reduction is not certain to reach anyone other than the parties who collect it. Liquor is a category in which demand is comparatively insensitive to price, and the price charged in high-end catering includes a substantial element for service, environment and inventory rather than for duty alone. Whether a reduction is passed through to the consumer, and by how much, is a commercial decision of importers and operators that the Government cannot direct and cannot readily verify. Against this uncertain benefit stands a cost that is not uncertain: an increase in alcohol consumption produces attendances at accident and emergency services, liver disease, road traffic casualties and public order incidents, none of which appear in the account of a duty reduction. A proposal that counts the gain to catering turnover and the widening of the tax base, while omitting the health and enforcement expenditure that follows, will overstate the net benefit by a wide margin.` },
        { role: '第3段｜處理最強反方（跨境套利）', text: `The argument for reduction is nonetheless strong in one respect. Where neighbouring jurisdictions charge materially less, a high local rate diverts consumption and procurement across the border, weakens the position of local high-end catering, and creates an incentive for illicit importation. The second limb — that a lower rate may yield no less revenue because volume rises — is an empirical claim that cannot be assumed in advance and should not be treated as established.` },
        { role: '第4段｜為何支持定向調整', text: `The first limb supports a targeted adjustment rather than a general reduction. The distortion arises in a specific place: because duty is charged by reference to volume, the duty borne by a large-format bottle is disproportionately high relative to the market it serves. Correcting that particular element reduces the incentive to arbitrage across the border without necessarily increasing overall consumption. This is a narrower intervention, and its effects are measurable.` },
        { role: '第5段｜兩項措施', text: `Two measures follow. First, a time-limited adjustment with a sunset provision: the rate on the portion of a bottle exceeding a specified capacity is reduced for three years, and an assessment must be laid before the end of that period, failing which the original rate is restored. The sunset provision is essential, because a permanent reduction cannot be reversed once the trade has adjusted to it. Second, health measures attached to the adjustment: enforcement against sales to minors is strengthened at the point the reduction takes effect, restrictions on alcohol promotion are extended to online platforms, and part of the duty retained is earmarked for liver disease and alcohol-related emergency services. Together these address the two most immediate risks — a permanent loss of revenue, and a transfer of the health cost to the public purse.` },
        { role: '第6段｜結論＋覆檢觸發條件', text: `On balance, the purpose of duty reform here is to correct a distortion, not to purchase an atmosphere. A review should be published twenty-four months after the adjustment takes effect, measuring whether imports of the affected format and on-premise sales have grown without substantial diversion, and whether alcohol-related attendances and enforcement cases have risen. If the first is not achieved, the sunset provision should be allowed to operate; if the second deteriorates, restrictions on sale and promotion should be tightened at once rather than deferred on the ground that the market has adjusted.` }
      ],
      blanks: [
        ['I do not support a general reduction', 'I support a targeted adjustment to the duty charged on the portion of large-format bottles'],
        ['the benefit of a duty reduction is not certain to reach anyone other than the parties who collect it'],
        ['Against this uncertain benefit stands a cost that is not uncertain'],
        ['The argument for reduction is nonetheless strong in one respect'],
        ['because duty is charged by reference to volume'],
        ['a time-limited adjustment with a sunset provision', 'health measures attached to the adjustment'],
        ['the purpose of duty reform here is to correct a distortion, not to purchase an atmosphere']
      ]
    }
  ]
};
