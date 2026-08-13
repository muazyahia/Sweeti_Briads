(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Providers.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/LanguageContext.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Providers(param) {
    var children = param.children;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$LanguageContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageProvider"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/Providers.jsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Providers.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/context/LanguageContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var _this = ("TURBOPACK compile-time value", void 0);
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
var _obj, _obj1;
// Translation Dictionary (from provided requirements)
var translations = {
    en: (_obj = {
        // Navigation
        "nav-home": "Home",
        "nav-styles": "Styles",
        "nav-about": "About Brand",
        "nav-booking": "Book Session",
        "nav-gallery": "Gallery",
        "nav-reviews": "Reviews",
        "nav-contact": "Contact",
        "nav-cta": "Book Now",
        // Hero
        "hero-badge": "Self Love Starts Here",
        "hero-accent": "Beauty",
        "hero-main": "in every braid",
        "hero-desc": "Indulge in a premium hair braiding experience tailored just for you. From sleek knotless braids to timeless cornrows, we weave elegance and confidence into every strand.",
        "hero-btn-book": "Book Appointment",
        "hero-btn-styles": "Explore Styles",
        "stat-neat": "Clean & Neat",
        "stat-weeks": "Weeks Wear",
        "stat-tension": "Scalp Tension",
        // Styles Showcase
        "styles-sub": "Handcrafted Elegance",
        "styles-title": "Our Braiding Masterpieces",
        "styles-desc": "Discover our signature braiding techniques designed to protect your hair while keeping you looking absolutely gorgeous.",
        "choose-style-btn": "Choose This Style",
        "view-poster": "View Poster",
        // Signature Styles — Tabs
        "style-knotless-tab": "Knotless Braids",
        "style-cornrows-tab": "Cornrows Braids",
        "style-french-tab": "French Braids",
        "style-boho-tab": "Boho Braids",
        // Knotless Braids
        "style-knotless-cat": "Protective Style",
        "style-knotless-title": "Knotless Braids",
        "style-knotless-tagline": "Gentle on your edges, stunning on your crown.",
        "style-knotless-desc": "A modern take on box braids with a seamless start — no knot at the root means less tension, more comfort, and a natural-looking finish.",
        "feat-lightweight-title": "Lightweight Feel",
        "feat-knotless-light-desc": "No heavy knot at the base keeps the style light and tension-free from day one.",
        "feat-longlasting-title": "Long-Lasting Wear",
        "feat-knotless-long-desc": "With proper care, knotless braids can last up to 8 weeks beautifully.",
        "feat-protective-title": "Protective & Healthy",
        "feat-knotless-prot-desc": "Protects your natural hair and promotes growth while looking gorgeous.",
        // Cornrows
        "style-cornrows-cat": "Classic Style",
        "style-cornrows-title": "Cornrows",
        "style-cornrows-tagline": "A timeless classic, reimagined with precision.",
        "style-cornrows-desc": "Cornrows are braided close to the scalp in continuous rows. Versatile, neat, and ready for any occasion — from everyday wear to special events.",
        "feat-cornrows-light-desc": "Flat against the scalp for a sleek, neat profile that's easy to maintain."
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "feat-protective-title", "Protective Style"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "feat-cornrows-prot-desc", "Keeps your natural hair tucked away and protected from daily wear."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "feat-cornrows-long-desc", "Stay fresh and neat for weeks with minimal maintenance required."), // French Braids
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "style-french-cat", "Elegant Style"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "style-french-title", "French Braids"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "style-french-tagline", "Effortless elegance for every moment."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "style-french-desc", "French braids weave your hair into a flowing, three-strand pattern that's both elegant and practical. Perfect for a polished look that lasts all day."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "feat-clean-title", "Clean & Polished"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "feat-french-clean-desc", "Creates a refined, structured look that elevates any outfit."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "feat-comfortable-title", "Comfortable Fit"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "feat-french-comfort-desc", "Smooth technique ensures no pulling or discomfort throughout the day."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "feat-french-long-desc", "Styled to hold beautifully from morning to evening without fuss."), // Boho Braids
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "style-boho-tab", "Boho Braids"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "style-boho-cat", "Bohemian Style"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "style-boho-title", "Boho Braids"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "style-boho-tagline", "Free-spirited, flowy, and uniquely you."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "style-boho-desc", "Boho braids blend traditional braiding with loose, flowing curls for a carefree and romantic look. Perfect for those who want to stand out beautifully."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "feat-boho-light-desc", "Light, loose ends give the style a natural, effortless feel."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "feat-boho-long-desc", "Boho braids maintain their beautiful shape for weeks with minimal upkeep."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "feat-boho-prot-desc", "Protective base with free-flowing ends to keep your natural hair healthy."), // Footer & Others
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "about-sub", "Our Philosophy"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "about-title", "The Sweeti Braids Identity"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "about-desc-1", "\"Sweeti Braids\" is more than just hair styling; it's a celebration of self-love and intricate artistry. We believe that a perfect braid is a form of crown, styled with passion, care, and total precision."), // Booking Form
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "booking-sub", "Reserve Your Glow"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "booking-title", "Book Your Appointment"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "booking-desc", "Customize your braid session in three easy steps, preview your selections, and submit directly to confirm via WhatsApp."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "step-1-label", "Style"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "step-2-label", "Customs"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "step-3-label", "Details"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "next-btn", "Next Step"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "prev-btn", "Back"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "confirm-btn", "Confirm via WhatsApp"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "err-name", "Name is required"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "err-phone", "Please enter a valid Egyptian phone number (11 digits)"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "err-date", "Please select a valid future date"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "err-time", "Please select a preferred time slot"), // Footer & Others
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "reviews-title", "Loved by our Clients"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "reviews-desc", "We value your opinion and check every feedback to offer the absolute best experience in Zagazig."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "contact-title", "Get in Touch"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "footer-slogan", "Hand drawn with love. Beauty in every braid."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj, "foot-credit", "Designed in Zagazig, Egypt."), _obj),
    ar: (_obj1 = {
        // Navigation
        "nav-home": "الرئيسية",
        "nav-styles": "التسريحات",
        "nav-about": "عن البراند",
        "nav-booking": "احجز جلسة",
        "nav-gallery": "معرض الصور",
        "nav-reviews": "الآراء",
        "nav-contact": "اتصل بنا",
        "nav-cta": "احجز الآن",
        // Hero
        "hero-badge": "حب الذات يبدأ من هنا",
        "hero-accent": "الجمال",
        "hero-main": "في كل خصلة شعر",
        "hero-desc": "دعي شعرك يتألق بتجربة ضفائر فاخرة مصممة خصيصاً لكِ. من الضفائر الخالية من العقد (knotless) الأنيقة إلى الكورنرو (cornrows) الكلاسيكية، ننسج الأناقة والثقة في كل خصلة.",
        "hero-btn-book": "احجزِ موعدكِ الآن",
        "hero-btn-styles": "استكشفي التسريحات",
        "stat-neat": "نظيف ومتقن 100%",
        "stat-weeks": "يدوم لأكثر من 4 أسابيع",
        "stat-tension": "بدون شد أو ألم لفروة الرأس",
        // Styles Showcase
        "styles-sub": "أناقة صنعت بحب",
        "styles-title": "روائع الضفائر لدينا",
        "styles-desc": "اكتشفي تقنيات الضفائر المميزة لدينا والمصممة لحماية شعرك الطبيعي ومساعدته على النمو مع الحفاظ على مظهركِ الفاتن.",
        "choose-style-btn": "اختيار هذه التسريحة",
        "view-poster": "عرض البوستر",
        // Signature Styles — Tabs
        "style-knotless-tab": "Knotless",
        "style-cornrows-tab": "Cornrows",
        "style-french-tab": "French Braids",
        "style-boho-tab": "Boho",
        // Knotless Braids
        "style-knotless-cat": "تسريحة واقية",
        "style-knotless-title": "ضفائر Knotless",
        "style-knotless-tagline": "لطيفة على حوافّك، رائعة على تاجك.",
        "style-knotless-desc": "نسخة عصرية من الضفائر المربعة بدون عقدة في الأصل — مما يعني ضغطاً أقل، وراحة أكبر، ومظهراً طبيعياً لا مثيل له.",
        "feat-lightweight-title": "خفيفة الوزن",
        "feat-knotless-light-desc": "غياب العقدة الثقيلة في القاعدة يجعل التسريحة خفيفة ومريحة منذ اليوم الأول.",
        "feat-longlasting-title": "تدوم طويلاً",
        "feat-knotless-long-desc": "مع العناية الصحيحة، يمكن أن تدوم ضفائر knotless حتى 8 أسابيع بشكل رائع.",
        "feat-protective-title": "واقية وصحية",
        "feat-knotless-prot-desc": "تحمي شعرك الطبيعي وتعزز نموه مع الحفاظ على مظهر مبهر.",
        // Cornrows
        "style-cornrows-cat": "تسريحة كلاسيكية",
        "style-cornrows-title": "كورنرو",
        "style-cornrows-tagline": "كلاسيكية خالدة، معاد تصميمها بدقة متناهية.",
        "style-cornrows-desc": "الكورنرو هي ضفائر مجدولة بالقرب من فروة الرأس في صفوف متتالية. متعددة الاستخدامات، أنيقة، ومناسبة لأي مناسبة.",
        "feat-cornrows-light-desc": "مسطحة على فروة الرأس لمظهر أنيق وسهل الصيانة.",
        "feat-cornrows-prot-desc": "تحافظ على شعرك الطبيعي محمياً بعيداً عن أضرار التصفيف اليومي.",
        "feat-cornrows-long-desc": "ابقي منتعشة وأنيقة لأسابيع مع أقل قدر من الصيانة.",
        // French Braids
        "style-french-cat": "تسريحة أنيقة",
        "style-french-title": "ضفائر فرنسية",
        "style-french-tagline": "أناقة سهلة لكل لحظة.",
        "style-french-desc": "تنسج الضفائر الفرنسية شعرك في نمط متدفق ثلاثي الخيوط يجمع بين الأناقة والعملية. مثالية للمظهر المصقول طوال اليوم.",
        "feat-clean-title": "نظيفة ومصقولة",
        "feat-french-clean-desc": "تخلق مظهراً راقياً ومنظماً يرفع من مستوى أي إطلالة.",
        "feat-comfortable-title": "مريحة في الارتداء",
        "feat-french-comfort-desc": "تقنية سلسة تضمن عدم الشعور بأي شد أو انزعاج طوال اليوم.",
        "feat-french-long-desc": "مصممة لتبقى رائعة من الصباح حتى المساء."
    }, // Boho Braids
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "style-boho-tab", "بوهو برايدز"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "style-boho-cat", "تسريحة بوهيمية"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "style-boho-title", "بوهو برايدز"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "style-boho-tagline", "حرة الروح، متدفقة، وفريدة من نوعها."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "style-boho-desc", "تمزج ضفائر البوهو بين الضفر التقليدي والخصلات الحرة المتدفقة لمظهر رومانسي ومميز. مثالية لمن تريد أن تتألق بأسلوب مختلف."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "feat-boho-light-desc", "الأطراف الحرة والخفيفة تمنح التسريحة إحساساً طبيعياً وسهلاً."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "feat-boho-long-desc", "تحافظ ضفائر البوهو على شكلها الجميل لأسابيع مع أدنى عناية."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "feat-boho-prot-desc", "قاعدة واقية مع أطراف حرة للحفاظ على صحة شعرك الطبيعي."), // Footer & Others
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "about-sub", "فلسفتنا الخاصة"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "about-title", "هوية Sweeti Braids المميزة"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "about-desc-1", "إن \"Sweeti Braids\" ليست مجرد صالون لتصفيف الشعر، بل هي احتفاء حقيقي بحب الذات والفن الدقيق. نؤمن بأن الضفيرة المثالية هي بمثابة تاج للمرأة، نصنعها بشغف، وعناية فائقة، ودقة متناهية."), // Booking Form
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "booking-sub", "احجزي إشراقتكِ الخاصة"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "booking-title", "احجزي موعدكِ الآن"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "booking-desc", "صممي مواصفات ضفائركِ المفضلة في 3 خطوات بسيطة، وتابعي ملخص الحجز مباشرة، ثم أرسلي لتأكيد الحجز الفوري عبر الواتساب."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "step-1-label", "التسريحة"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "step-2-label", "الإضافات"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "step-3-label", "البيانات"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "next-btn", "الخطوة التالية"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "prev-btn", "السابق"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "confirm-btn", "تأكيد الحجز عبر الواتساب"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "err-name", "الاسم حقل مطلوب"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "err-phone", "يرجى إدخال رقم هاتف مصري صحيح (11 رقم)"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "err-date", "يرجى اختيار تاريخ حجز صالح ومستقبلي"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "err-time", "يرجى اختيار توقيت حجز محدد"), // Footer & Others
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "reviews-title", "آراء عميلاتنا اللواتي أحببن خدماتنا"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "reviews-desc", "نهتم برأيكِ بشدة، ونتابع كل تقييم لنقدم دائماً أفضل تجربة ضفائر فريدة في مدينة الزقازيق."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "contact-title", "معلومات التواصل"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "footer-slogan", "صنعت يدوياً بكل الحب. الجمال في كل خصلة شعر."), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_obj1, "foot-credit", "صمم بكل حب في الزقازيق، مصر."), _obj1)
};
var LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
var LanguageProvider = function LanguageProvider(param) {
    var children = param.children;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en'), 2), lang = _useState[0], setLang = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(translations), 2), dynamicTranslations = _useState1[0], setDynamicTranslations = _useState1[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": function() {
            var savedLang = localStorage.getItem('sweeti_lang');
            if (savedLang) {
                setLang(savedLang);
            }
            // Fetch dynamic content from API
            var fetchContent = function fetchContent() {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                    "LanguageProvider.useEffect.fetchContent": function() {
                        var data, content, err;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, {
                            "LanguageProvider.useEffect.fetchContent": function(_state) {
                                switch(_state.label){
                                    case 0:
                                        _state.trys.push([
                                            0,
                                            2,
                                            ,
                                            3
                                        ]);
                                        return [
                                            4,
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchApi"])('/content')
                                        ];
                                    case 1:
                                        data = _state.sent();
                                        content = data;
                                        if (content) {
                                            setDynamicTranslations({
                                                "LanguageProvider.useEffect.fetchContent": function(prev) {
                                                    var newEn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev.en);
                                                    var newAr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev.ar);
                                                    // Map Hero
                                                    if (content.heroData) {
                                                        if (content.heroData.badge) {
                                                            newEn["hero-badge"] = content.heroData.badge;
                                                            newAr["hero-badge"] = content.heroData.badge;
                                                        }
                                                        if (content.heroData.accent) {
                                                            newEn["hero-accent"] = content.heroData.accent;
                                                            newAr["hero-accent"] = content.heroData.accent;
                                                        }
                                                        if (content.heroData.main) {
                                                            newEn["hero-main"] = content.heroData.main;
                                                            newAr["hero-main"] = content.heroData.main;
                                                        }
                                                        if (content.heroData.desc) {
                                                            newEn["hero-desc"] = content.heroData.desc;
                                                            newAr["hero-desc"] = content.heroData.desc;
                                                        }
                                                        if (content.heroData.statNeat) {
                                                            newEn["stat-neat"] = content.heroData.statNeat;
                                                            newAr["stat-neat"] = content.heroData.statNeat;
                                                        }
                                                        if (content.heroData.statNeatValue) {
                                                            newEn["stat-neat-val"] = content.heroData.statNeatValue;
                                                            newAr["stat-neat-val"] = content.heroData.statNeatValue;
                                                        }
                                                        if (content.heroData.statWeeks) {
                                                            newEn["stat-weeks"] = content.heroData.statWeeks;
                                                            newAr["stat-weeks"] = content.heroData.statWeeks;
                                                        }
                                                        if (content.heroData.statWeeksValue) {
                                                            newEn["stat-weeks-val"] = content.heroData.statWeeksValue;
                                                            newAr["stat-weeks-val"] = content.heroData.statWeeksValue;
                                                        }
                                                        if (content.heroData.statTension) {
                                                            newEn["stat-tension"] = content.heroData.statTension;
                                                            newAr["stat-tension"] = content.heroData.statTension;
                                                        }
                                                        if (content.heroData.statTensionValue) {
                                                            newEn["stat-tension-val"] = content.heroData.statTensionValue;
                                                            newAr["stat-tension-val"] = content.heroData.statTensionValue;
                                                        }
                                                        if (content.heroData.sliderImages) {
                                                            newEn["hero-sliderImages"] = content.heroData.sliderImages;
                                                            newAr["hero-sliderImages"] = content.heroData.sliderImages;
                                                        }
                                                    }
                                                    // Map Signature
                                                    if (content.signatureData) {
                                                        if (content.signatureData.sub) {
                                                            newEn["styles-sub"] = content.signatureData.sub;
                                                            newAr["styles-sub"] = content.signatureData.sub;
                                                        }
                                                        if (content.signatureData.title) {
                                                            newEn["styles-title"] = content.signatureData.title;
                                                            newAr["styles-title"] = content.signatureData.title;
                                                        }
                                                        if (content.signatureData.desc) {
                                                            newEn["styles-desc"] = content.signatureData.desc;
                                                            newAr["styles-desc"] = content.signatureData.desc;
                                                        }
                                                    }
                                                    // Map About
                                                    if (content.aboutData) {
                                                        if (content.aboutData.sub) {
                                                            newEn["about-sub"] = content.aboutData.sub;
                                                            newAr["about-sub"] = content.aboutData.sub;
                                                        }
                                                        if (content.aboutData.title) {
                                                            newEn["about-title"] = content.aboutData.title;
                                                            newAr["about-title"] = content.aboutData.title;
                                                        }
                                                        if (content.aboutData.desc) {
                                                            newEn["about-desc-1"] = content.aboutData.desc;
                                                            newAr["about-desc-1"] = content.aboutData.desc;
                                                        }
                                                    }
                                                    // Map Booking
                                                    if (content.bookingData) {
                                                        if (content.bookingData.sub) {
                                                            newEn["booking-sub"] = content.bookingData.sub;
                                                            newAr["booking-sub"] = content.bookingData.sub;
                                                        }
                                                        if (content.bookingData.title) {
                                                            newEn["booking-title"] = content.bookingData.title;
                                                            newAr["booking-title"] = content.bookingData.title;
                                                        }
                                                        if (content.bookingData.desc) {
                                                            newEn["booking-desc"] = content.bookingData.desc;
                                                            newAr["booking-desc"] = content.bookingData.desc;
                                                        }
                                                    }
                                                    // Map Reviews
                                                    if (content.reviewsData) {
                                                        if (content.reviewsData.title) {
                                                            newEn["reviews-title"] = content.reviewsData.title;
                                                            newAr["reviews-title"] = content.reviewsData.title;
                                                        }
                                                        if (content.reviewsData.desc) {
                                                            newEn["reviews-desc"] = content.reviewsData.desc;
                                                            newAr["reviews-desc"] = content.reviewsData.desc;
                                                        }
                                                    }
                                                    // Map Contact
                                                    if (content.contactData) {
                                                        if (content.contactData.title) {
                                                            newEn["contact-title"] = content.contactData.title;
                                                            newAr["contact-title"] = content.contactData.title;
                                                        }
                                                        if (content.contactData.slogan) {
                                                            newEn["footer-slogan"] = content.contactData.slogan;
                                                            newAr["footer-slogan"] = content.contactData.slogan;
                                                        }
                                                        if (content.contactData.credit) {
                                                            newEn["foot-credit"] = content.contactData.credit;
                                                            newAr["foot-credit"] = content.contactData.credit;
                                                        }
                                                        var wp = content.contactData.whatsapp;
                                                        var ig = content.contactData.instagram;
                                                        var tt = content.contactData.tiktok;
                                                        newEn["contact-whatsapp"] = wp;
                                                        newAr["contact-whatsapp"] = wp;
                                                        newEn["contact-instagram"] = ig;
                                                        newAr["contact-instagram"] = ig;
                                                        newEn["contact-tiktok"] = tt;
                                                        newAr["contact-tiktok"] = tt;
                                                    }
                                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, prev), {
                                                        en: newEn,
                                                        ar: newAr
                                                    });
                                                }
                                            }["LanguageProvider.useEffect.fetchContent"]);
                                        }
                                        return [
                                            3,
                                            3
                                        ];
                                    case 2:
                                        err = _state.sent();
                                        console.error("Failed to load dynamic content:", err);
                                        return [
                                            3,
                                            3
                                        ];
                                    case 3:
                                        return [
                                            2
                                        ];
                                }
                            }
                        }["LanguageProvider.useEffect.fetchContent"]);
                    }
                }["LanguageProvider.useEffect.fetchContent"])();
            };
            fetchContent();
            var timer = setInterval(fetchContent, 15000);
            return ({
                "LanguageProvider.useEffect": function() {
                    return clearInterval(timer);
                }
            })["LanguageProvider.useEffect"];
        }
    }["LanguageProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": function() {
            // Sync document direction and lang attribute whenever lang changes
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            document.documentElement.lang = lang;
            if (lang === 'ar') {
                document.body.classList.add('rtl-dir');
            } else {
                document.body.classList.remove('rtl-dir');
            }
        }
    }["LanguageProvider.useEffect"], [
        lang
    ]);
    var toggleLanguage = function toggleLanguage() {
        var newLang = lang === 'en' ? 'ar' : 'en';
        setLang(newLang);
        localStorage.setItem('sweeti_lang', newLang);
    };
    var t = function t(key) {
        return dynamicTranslations[lang][key] || key; // Return translation or key itself if not found
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            lang: lang,
            toggleLanguage: toggleLanguage,
            t: t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/LanguageContext.js",
        lineNumber: 334,
        columnNumber: 5
    }, _this);
};
_s(LanguageProvider, "2KexRADHa0f43iXrSXqtJlJD0JQ=");
_c = LanguageProvider;
var useLanguage = function useLanguage() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
};
_s1(useLanguage, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchApi",
    ()=>fetchApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
;
;
;
;
;
;
var fetchApi = function fetchApi(endpoint) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var baseUrl, host, url, headers, res, errData, error;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    baseUrl = ("TURBOPACK compile-time value", "https://sweeti-briads-backend.vercel.app") || 'http://localhost:4000';
                    if (("TURBOPACK compile-time value", "object") !== 'undefined' && baseUrl.includes('localhost')) {
                        host = window.location.hostname === 'localhost' ? '127.0.0.1' : window.location.hostname;
                        baseUrl = "".concat(window.location.protocol, "//").concat(host, ":4000");
                    }
                    url = "".concat(baseUrl, "/api").concat(endpoint);
                    headers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options.headers);
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(options.body, FormData) && !headers['Content-Type']) {
                        headers['Content-Type'] = 'application/json';
                    }
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        ,
                        7
                    ]);
                    return [
                        4,
                        fetch(url, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options), {
                            headers: headers
                        }))
                    ];
                case 2:
                    res = _state.sent();
                    if (!!res.ok) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        res.json().catch(function() {
                            return {};
                        })
                    ];
                case 3:
                    errData = _state.sent();
                    throw new Error(errData.message || "Request failed with status ".concat(res.status));
                case 4:
                    if (res.status === 204) return [
                        2,
                        null
                    ];
                    return [
                        4,
                        res.json()
                    ];
                case 5:
                    return [
                        2,
                        _state.sent()
                    ];
                case 6:
                    error = _state.sent();
                    console.error("API Error (".concat(endpoint, "):"), error);
                    throw error;
                case 7:
                    return [
                        2
                    ];
            }
        });
    })();
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$themeSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/themeSlice.js [app-client] (ecmascript)");
;
;
;
var store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$themeSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/themeSlice.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "setTheme",
    ()=>setTheme,
    "toggleTheme",
    ()=>toggleTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
;
;
var initialState = {
    theme: 'light'
};
var themeSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'theme',
    initialState: initialState,
    reducers: {
        toggleTheme: function toggleTheme(state) {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
        },
        setTheme: function setTheme(state, action) {
            state.theme = action.payload;
        }
    }
});
var _themeSlice_actions = themeSlice.actions;
var toggleTheme = _themeSlice_actions.toggleTheme, setTheme = _themeSlice_actions.setTheme;
const __TURBOPACK__default__export__ = themeSlice.reducer;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1a2j57d._.js.map