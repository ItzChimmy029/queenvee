/* Vee Skincare N’ Spa — single source of truth for business info and services.
   Transcribed directly from Vee's own price-list cards (Sept 2026; updated
   Oct 2026 with Vee's revised price list — new Co2/Chemical Peel facials,
   Teeth Scaling, Teeth Whitening+Scaling, Manicure price change, a new
   consultation-based group, and Vagina Tightening and Rejuvenating). Category
   grouping follows the price-list headers exactly. A few items carry no
   fixed price on the price list itself ("Price based on consultation") —
   those show "Price on consultation" in the UI instead of a number.
   A handful of names had obvious typos on the printed cards (e.g. "Messter"
   → "Masseter", "Eye bad" → "Eye Bag"); those are corrected here. One line —
   "Yam Leg/Calves Reduction" — is kept exactly as printed since the intended
   wording is unclear; please confirm with Vee and edit below if needed. */
window.VEE = (function () {
  var CATEGORIES = [
    { id: 'facials-skin', label: 'Facials & Skin Care', photo: 'facial2' },
    { id: 'waxing', label: 'Waxing', photo: 'massage2' },
    { id: 'laser-hair-removal', label: 'Laser Hair Removal', photo: 'skin' },
    { id: 'laser-body', label: 'Laser Body Treatments', photo: 'skin' },
    { id: 'prp-bio-filler', label: 'PRP & Bio Filler', photo: 'aesthetics' },
    { id: 'body-sculpting', label: 'Body Sculpting & Fat Reduction', photo: 'body' },
    { id: 'botox-fillers-threads', label: 'Botox, Fillers & Threads', photo: 'aesthetics' },
    { id: 'glp-1', label: 'GLP-1 Injection', photo: 'aesthetics' },
    { id: 'mesotherapy', label: 'Mesotherapy', photo: 'aesthetics' },
    { id: 'consultation', label: 'Consultation-Based', photo: 'skin' },
    { id: 'spa-other', label: 'Spa & Wellness', photo: 'spa' }
  ];
  var n = 0;
  var s = function (name, category, price, opts) {
    n++;
    var o = opts || {};
    return { id: 'svc-' + n, name: name, category: category, price: price || null, unit: o.unit || '', featured: !!o.featured, desc: o.desc || '' };
  };
  var SERVICES = [
    // Facials & Skin Care
    s('Basic Facials', 'facials-skin', 30000, { desc: 'A gentle cleansing and hydrating facial that refreshes the skin and clears everyday congestion.', featured: true }),
    s('Carbon Facials', 'facials-skin', 40000, { desc: 'A carbon-laser peel that exfoliates and minimises the look of pores and oiliness.', featured: true }),
    s('Glow Facials', 'facials-skin', 40000, { desc: 'A brightening facial treatment designed to leave skin looking fresher and more radiant.', featured: true }),
    s('Acne Scars Treatment', 'facials-skin', 40000, { desc: 'A facial treatment focused on softening the visible texture of acne scarring.' }),
    s('Sunburn Facials', 'facials-skin', 40000, { desc: 'A soothing, calming facial aimed at easing redness and discomfort from sun exposure.' }),
    s('Korean / BB Glow Facials', 'facials-skin', 40000, { desc: 'A semi-permanent tinted facial that gives skin an even, dewy, foundation-like finish.' }),
    s('Vampire Facials', 'facials-skin', 50000, { desc: 'A PRP microneedling facial that uses your own plasma to support skin renewal.' }),
    s('Mesotherapy Facials', 'facials-skin', 60000, { desc: 'A facial using fine injections of vitamins and nutrients to nourish the skin.' }),
    s('Co2 Facials', 'facials-skin', 60000, { desc: 'A CO2-based facial treatment that resurfaces skin for a smoother, refreshed appearance.' }),
    s('Chemical Peel Facials', 'facials-skin', 50000, { desc: 'A chemical exfoliation facial that removes dull surface skin to reveal a brighter tone.' }),
    s('Vajicial', 'facials-skin', 12000, { desc: 'A dedicated facial-style treatment for the intimate area, focused on skin cleansing and care.' }),
    s('Butticial', 'facials-skin', 10000, { desc: 'A dedicated facial-style treatment for the buttock area, focused on skin cleansing and care.' }),
    // Waxing
    s('Leg Waxing', 'waxing', 20000, { desc: 'Full hair removal for the legs using warm wax.' }),
    s('Brazilian Waxing', 'waxing', 15000, { desc: 'Complete hair removal for the bikini area using warm wax.' }),
    s('Chin Waxing', 'waxing', 10000, { desc: 'Quick hair removal for the chin using warm wax.' }),
    s('Underarm Waxing', 'waxing', 12000, { desc: 'Hair removal for the underarm area using warm wax.' }),
    s('Hand Waxing', 'waxing', 20000, { desc: 'Hair removal for the hands and lower arms using warm wax.' }),
    s('Chest Waxing', 'waxing', 10000, { desc: 'Hair removal for the chest area using warm wax.' }),
    // Laser Hair Removal
    s('Chin Hair Removal', 'laser-hair-removal', 20000, { desc: 'Laser hair reduction treatment for the chin area.' }),
    s('Underarm Hair Removal', 'laser-hair-removal', 20000, { desc: 'Laser hair reduction treatment for the underarms.' }),
    s('Brazilian Hair Removal', 'laser-hair-removal', 25000, { desc: 'Laser hair reduction treatment for the bikini area.' }),
    s('Leg Hair Removal', 'laser-hair-removal', 60000, { desc: 'Laser hair reduction treatment for the full legs.' }),
    s('Hand Hair Removal', 'laser-hair-removal', 60000, { desc: 'Laser hair reduction treatment for the hands and arms.' }),
    s('Chest Hair Removal', 'laser-hair-removal', 40000, { desc: 'Laser hair reduction treatment for the chest.' }),
    s('Dark Spot / Scar Laser Treatment', 'laser-hair-removal', null, { desc: 'A laser treatment to even out dark spots or scarring; assessed and priced at consultation.' }),
    // Laser Body Treatments
    s('Underarm Brightening', 'laser-body', 30000, { desc: 'A laser treatment aimed at evening out darkened underarm skin.' }),
    s('Knuckle Treatment', 'laser-body', 30000, { desc: 'A laser treatment aimed at brightening darkened knuckle skin.' }),
    s('Butt Hyperpigmentation Treatment', 'laser-body', 40000, { desc: 'A laser treatment aimed at evening out darkened skin on the buttocks.' }),
    s('Inner Thigh Treatment', 'laser-body', 40000, { desc: 'A laser treatment aimed at evening out darkened inner-thigh skin.' }),
    s('Dark Lip Treatment', 'laser-body', 20000, { desc: 'A laser treatment aimed at brightening darkened lip skin.' }),
    // PRP & Bio Filler
    s('Butt Enlargement (PRP Bio Filler)', 'prp-bio-filler', 200000, { desc: 'A PRP-based volumising treatment for the buttocks, using your own plasma.', featured: true }),
    s('Breast Enlargement (PRP Bio Filler)', 'prp-bio-filler', 200000, { desc: 'A PRP-based volumising treatment for the breasts, using your own plasma.' }),
    s('Hips Enlargement (PRP Bio Filler)', 'prp-bio-filler', 200000, { desc: 'A PRP-based volumising treatment for the hips, using your own plasma.' }),
    s('Smile Line (PRP Bio Filler)', 'prp-bio-filler', 150000, { desc: 'A PRP-based treatment to soften smile lines, using your own plasma.' }),
    s('Under Eye (PRP Bio Filler)', 'prp-bio-filler', 150000, { desc: 'A PRP-based treatment to refresh the under-eye area, using your own plasma.' }),
    s('Butt Enlargement (PRP)', 'prp-bio-filler', 50000, { desc: 'A standard-strength PRP volumising treatment for the buttocks.' }),
    s('Breast Enlargement (PRP)', 'prp-bio-filler', 50000, { desc: 'A standard-strength PRP volumising treatment for the breasts.' }),
    s('Hip Enlargement (PRP)', 'prp-bio-filler', 50000, { desc: 'A standard-strength PRP volumising treatment for the hips.' }),
    s('Smile / Fine Line (PRP)', 'prp-bio-filler', 50000, { desc: 'A standard-strength PRP treatment to soften smile or fine lines.' }),
    s('Under Eye / Saggy Eye (PRP)', 'prp-bio-filler', 50000, { desc: 'A standard-strength PRP treatment for the under-eye area.' }),
    s('O-Shot', 'prp-bio-filler', 60000, { desc: 'A PRP treatment for intimate wellness and rejuvenation.' }),
    s('Hair Growth (PRP)', 'prp-bio-filler', 70000, { desc: 'A PRP scalp treatment intended to support hair growth.' }),
    s('Stretch Mark Treatment (PRP & Micro Needling)', 'prp-bio-filler', 50000, { desc: 'PRP combined with micro-needling to work on the appearance of stretch marks, priced per body part.', unit: 'per body part' }),
    // Body Sculpting & Fat Reduction
    s('Bum Enlargement (Vacuum Therapy)', 'body-sculpting', 20000, { desc: 'A suction-based vacuum therapy session to lift and shape the buttocks.', featured: true }),
    s('Hip / Hip Dip Enlargement (Vacuum Therapy)', 'body-sculpting', 20000, { desc: 'A suction-based vacuum therapy session to shape the hips and soften hip dips.' }),
    s('Breast Enlargement / Firming (Vacuum Therapy)', 'body-sculpting', 20000, { desc: 'A suction-based vacuum therapy session to lift and firm the breasts.' }),
    s('Tummy Reduction (Cavitation / Laser Lipolysis)', 'body-sculpting', 40000, { desc: 'A non-invasive ultrasound cavitation session targeting stubborn fat on the tummy.' }),
    s('Side Folds Reduction (Cavitation / Laser Lipolysis)', 'body-sculpting', 40000, { desc: 'A non-invasive ultrasound cavitation session targeting fat on the side folds.' }),
    s('Laps / Cellulite Reduction (Cavitation / Laser Lipolysis)', 'body-sculpting', 40000, { desc: 'A non-invasive ultrasound cavitation session targeting fat and cellulite on the laps.' }),
    s('Fatty Leg Reduction (Cavitation / Laser Lipolysis)', 'body-sculpting', 40000, { desc: 'A non-invasive ultrasound cavitation session targeting fat on the legs.' }),
    s('Arm Reduction (Cavitation / Laser Lipolysis)', 'body-sculpting', 40000, { desc: 'A non-invasive ultrasound cavitation session targeting fat on the arms.' }),
    s('Chin & Jaw Reduction (Cavitation / Laser Lipolysis)', 'body-sculpting', 40000, { desc: 'A non-invasive ultrasound cavitation session targeting fat under the chin and jaw.' }),
    s('Tummy Reduction (Fat Dissolving Injection)', 'body-sculpting', 140000, { desc: 'Targeted fat-dissolving injections for the tummy area.' }),
    s('Side Folds Reduction (Fat Dissolving Injection)', 'body-sculpting', 140000, { desc: 'Targeted fat-dissolving injections for the side folds.' }),
    s('Laps / Cellulite Reduction (Fat Dissolving Injection)', 'body-sculpting', 140000, { desc: 'Targeted fat-dissolving injections for the laps and cellulite-prone areas.' }),
    s('Arm Reduction (Fat Dissolving Injection)', 'body-sculpting', 140000, { desc: 'Targeted fat-dissolving injections for the arms.' }),
    s('Face Reduction (Fat Dissolving Injection)', 'body-sculpting', 70000, { desc: 'Targeted fat-dissolving injections to contour the face.' }),
    s('HI-FU Vagina Tightening', 'body-sculpting', 40000, { desc: 'A High-Intensity Focused Ultrasound (HI-FU) session for vaginal tightening.' }),
    s('Vagina Tightening and Rejuvenating', 'body-sculpting', 70000, { desc: 'A treatment focused on vaginal tightening and rejuvenation; suitability confirmed at consultation.' }),
    // Botox, Fillers & Threads
    s('Yam Leg / Calves Reduction (Botox)', 'botox-fillers-threads', 160000, { desc: 'Botox injections used to slim and reduce the appearance of the calves.' }),
    s('Forehead Wrinkles Treatment (Botox)', 'botox-fillers-threads', 200000, { desc: 'Botox injections used to relax and smooth forehead wrinkles.', featured: true }),
    s('Shoulder Slimming (Botox)', 'botox-fillers-threads', 200000, { desc: 'Botox injections used to slim the trapezius muscle for a softer shoulder line.' }),
    s('Sweaty Armpit Reduction (Botox)', 'botox-fillers-threads', 200000, { desc: 'Botox injections used to reduce excessive underarm sweating.' }),
    s('Masseter Botox', 'botox-fillers-threads', 200000, { desc: 'Botox injections into the jaw (masseter) muscle to slim and soften a square jawline.' }),
    s('Smile Line Filler', 'botox-fillers-threads', 280000, { desc: 'Dermal filler used to soften the smile (nasolabial) lines.', unit: '2ml' }),
    s('Lip Filler', 'botox-fillers-threads', 140000, { desc: 'Dermal filler used to add volume and shape to the lips.', unit: '2ml' }),
    s('Cheek Filler', 'botox-fillers-threads', 280000, { desc: 'Dermal filler used to add volume and lift to the cheeks.', unit: '2ml' }),
    s('Under Eye Filler', 'botox-fillers-threads', 280000, { desc: 'Dermal filler used to soften hollows under the eyes.', unit: '2ml' }),
    s('Chin Filler', 'botox-fillers-threads', 280000, { desc: 'Dermal filler used to add definition and balance to the chin.', unit: '2ml' }),
    s('Jawline Filler', 'botox-fillers-threads', 280000, { desc: 'Dermal filler used to sharpen and define the jawline.', unit: '2ml' }),
    s('Hand Rejuvenation Filler', 'botox-fillers-threads', 280000, { desc: 'Dermal filler used to restore volume to the back of the hands.', unit: '2ml' }),
    s('Body Filler — Breast, Butt or Hip', 'botox-fillers-threads', 350000, { desc: 'Body filler used to add volume to the breast, butt or hip area, 100ml.', unit: '100ml' }),
    s('Body Filler — Breast, Butt or Hip', 'botox-fillers-threads', 650000, { desc: 'Body filler used to add volume to the breast, butt or hip area, 200ml.', unit: '200ml' }),
    s('Full Face Lift (PDO Thread)', 'botox-fillers-threads', 400000, { desc: 'PDO threads used to lift and tighten the whole face.' }),
    s('Nose Job (PDO Thread)', 'botox-fillers-threads', 200000, { desc: 'PDO threads used to subtly reshape and lift the nose bridge, non-surgically.' }),
    s('Smile Line (PDO Thread)', 'botox-fillers-threads', 200000, { desc: 'PDO threads used to lift and soften the smile lines.' }),
    s('Double Chin (PDO Thread)', 'botox-fillers-threads', 350000, { desc: 'PDO threads used to tighten and define the area under the chin.' }),
    s('Eyebrow Lift (PDO Thread)', 'botox-fillers-threads', 200000, { desc: 'PDO threads used to lift and arch the eyebrows.' }),
    s('Neck Rejuvenation (PDO Thread)', 'botox-fillers-threads', 200000, { desc: 'PDO threads used to tighten and smooth the neck.' }),
    s('Boobs Lift (PDO Thread)', 'botox-fillers-threads', 450000, { desc: 'PDO threads used to lift the breasts, non-surgically.' }),
    s('Eye Bag Treatment (PDO Thread)', 'botox-fillers-threads', 200000, { desc: 'PDO threads used to smooth and lift under-eye bags.' }),
    s('Skin Tightening (PDO Thread)', 'botox-fillers-threads', 450000, { desc: 'PDO threads used to tighten loose or sagging skin.' }),
    // GLP-1 Injection
    s('Retatrutide 10mg', 'glp-1', 270000, { desc: 'A GLP-1 weight-management injection, Retatrutide at 10mg, administered under medical guidance.', featured: true }),
    s('Retatrutide 20mg', 'glp-1', 350000, { desc: 'A GLP-1 weight-management injection, Retatrutide at 20mg, administered under medical guidance.' }),
    s('Retatrutide 30mg', 'glp-1', 380000, { desc: 'A GLP-1 weight-management injection, Retatrutide at 30mg, administered under medical guidance.' }),
    s('Retatrutide 40mg', 'glp-1', 410000, { desc: 'A GLP-1 weight-management injection, Retatrutide at 40mg, administered under medical guidance.' }),
    s('Retatrutide 50mg', 'glp-1', 440000, { desc: 'A GLP-1 weight-management injection, Retatrutide at 50mg, administered under medical guidance.' }),
    s('Retatrutide 60mg', 'glp-1', 470000, { desc: 'A GLP-1 weight-management injection, Retatrutide at 60mg, administered under medical guidance.' }),
    s('Tirzepatide 5mg', 'glp-1', 220000, { desc: 'A GLP-1 weight-management injection, Tirzepatide at 5mg, administered under medical guidance.' }),
    s('Tirzepatide 10mg', 'glp-1', 250000, { desc: 'A GLP-1 weight-management injection, Tirzepatide at 10mg, administered under medical guidance.' }),
    s('Tirzepatide 20mg', 'glp-1', 290000, { desc: 'A GLP-1 weight-management injection, Tirzepatide at 20mg, administered under medical guidance.' }),
    s('Tirzepatide 30mg', 'glp-1', 310000, { desc: 'A GLP-1 weight-management injection, Tirzepatide at 30mg, administered under medical guidance.' }),
    s('Tirzepatide 40mg', 'glp-1', 330000, { desc: 'A GLP-1 weight-management injection, Tirzepatide at 40mg, administered under medical guidance.' }),
    s('Tirzepatide 50mg', 'glp-1', 350000, { desc: 'A GLP-1 weight-management injection, Tirzepatide at 50mg, administered under medical guidance.' }),
    s('Tirzepatide 60mg', 'glp-1', 370000, { desc: 'A GLP-1 weight-management injection, Tirzepatide at 60mg, administered under medical guidance.' }),
    // Mesotherapy
    s('Hair Growth Treatment (Mesotherapy)', 'mesotherapy', 150000, { desc: 'Mesotherapy injections to the scalp intended to support hair growth.' }),
    s('Sclerotherapy', 'mesotherapy', 150000, { desc: 'An injection treatment used to fade visible thread veins, priced per vial.', unit: '1 vial' }),
    // Consultation-Based
    s('Genital Wart Removal', 'consultation', null, { desc: 'Removal of genital warts; method and price confirmed at consultation.' }),
    s('Skin Tag Removal', 'consultation', null, { desc: 'Removal of skin tags; method and price confirmed at consultation.' }),
    s('Tattoo Removal', 'consultation', null, { desc: 'Tattoo removal; method and price confirmed at consultation.' }),
    s('Co2 Laser Treatment', 'consultation', null, { desc: 'A CO2 laser treatment for skin concerns; price confirmed at consultation.' }),
    s('Keloid Treatment', 'consultation', null, { desc: 'Treatment for keloid scarring; price confirmed at consultation.' }),
    s('Scar Removal', 'consultation', null, { desc: 'Treatment to reduce the appearance of scarring; price confirmed at consultation.' }),
    s('Stretch Marks Treatment', 'consultation', null, { desc: 'Treatment to reduce the appearance of stretch marks; price confirmed at consultation.' }),
    // Spa & Wellness
    s('Body Polish', 'spa-other', 30000, { desc: 'A full-body exfoliating polish that leaves skin smooth and refreshed.', featured: true }),
    s('Teeth Whitening', 'spa-other', 30000, { desc: 'A teeth-whitening treatment for a brighter smile.', featured: true }),
    s('Teeth Scaling', 'spa-other', 15000, { desc: 'Professional teeth scaling to remove plaque and tartar buildup.' }),
    s('Teeth Whitening and Scaling', 'spa-other', 40000, { desc: 'Combined teeth scaling and whitening in one visit.' }),
    s('Lip Blush', 'spa-other', 20000, { desc: 'Semi-permanent lip tinting for natural, long-lasting colour.' }),
    s('Massage', 'spa-other', 30000, { desc: 'A relaxing full-body massage to ease tension.', featured: true }),
    s('Pedicure', 'spa-other', 10000, { desc: 'A full pedicure for clean, well-groomed feet.' }),
    s('Manicure', 'spa-other', 5000, { desc: 'A full manicure for clean, well-groomed hands.' }),
    s('Hand Knuckles Wash', 'spa-other', 15000, { desc: 'A brightening treatment for darkened hand knuckles.' }),
    s('Leg Knuckles Wash', 'spa-other', 15000, { desc: 'A brightening treatment for darkened knee or leg knuckles.' }),
    s('Foot Detox', 'spa-other', 10000, { desc: 'A detoxifying foot soak and treatment session.' }),
    s('Under Arm Treatment', 'spa-other', 15000, { desc: 'A treatment session targeting the underarm area.' }),
    s('Inner Thighs Treatment', 'spa-other', 15000, { desc: 'A treatment session targeting the inner-thigh area.' }),
    s('Vagina Steaming', 'spa-other', 10000, { desc: 'A traditional vaginal steaming (yoni steam) wellness session.' }),
    s('Vitamin B12 Shot', 'spa-other', 15000, { desc: 'A Vitamin B12 injection for an energy and wellness boost.' }),
    s('Radiant Whitening IV Drip', 'spa-other', 55000, { desc: 'An IV drip formulated to support brighter, more radiant skin.', featured: true }),
    s('Luminous Glow IV Drip', 'spa-other', 45000, { desc: 'An IV drip formulated to support a healthy, glowing complexion.' }),
    s('Weight Loss IV Drip', 'spa-other', 60000, { desc: 'An IV drip formulated to support weight-management goals.' })
  ];
  return {
    business: {
      name: 'Vee Skincare N’ Spa',
      whatsapp: '2349050388498',
      phone: '+2349042443714',
      email: 'veeskincareorganic@gmail.com'
    },
    categories: CATEGORIES,
    services: SERVICES
  };
})();
