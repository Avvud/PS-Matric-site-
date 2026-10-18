import { r as __toESM } from "../_runtime.mjs";
import { n as toResponse, t as H3Event } from "../_libs/h3-v2+rou3+srvx.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { D as toCrossJSONAsync, F as waitForReason, G as rootRouteId, H as isPromise, I as _getRenderedMatches, K as isNotFound, L as executeRewriteInput, M as getStylesheetHref, N as resolveManifestAssetLink, O as toCrossJSONStream, P as resolveManifestCssLink, R as invariant, T as fromJSON, V as isDangerousProtocol, W as isRedirect, _ as lazyRouteComponent, a as isSsrResponse, b as Link, c as stripSsrResponseBody, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, i as disposeSsrResponse, j as getScriptPreloadAttrs, m as RouterProvider, n as bindSsrResponseToRequest, o as normalizeSsrResponse, p as useRouterState, r as defineHandlerCallback, s as replaceSsrResponse, t as renderRouterToStream, v as createFileRoute, x as useRouter, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as createServerHistory } from "../_libs/tanstack__history.mjs";
import { a as defaultSerovalDeserializerPlugins, i as createRawStreamRPCPlugin, n as attachRouterServerSsrUtils, o as makeSerovalPlugin, r as getNormalizedURL, s as createSerializationAdapter, t as mergeHeaders } from "../_libs/@tanstack/router-core+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { _ as CalendarDays, a as Phone, b as ArrowLeft, c as Mail, d as Facebook, f as ExternalLink, g as ChevronDown, h as ChevronLeft, i as UsersRound, l as Image, m as ChevronRight, n as X, o as Menu, p as Clock, r as Users, s as MapPin, t as Youtube, u as GraduationCap, v as Briefcase, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { AsyncLocalStorage } from "node:async_hooks";
//#region node_modules/.nitro/vite/services/ssr/index.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __esmMin = (fn, res, err) => () => {
	if (err) throw err[0];
	try {
		return fn && (res = fn(fn = 0)), res;
	} catch (e) {
		throw err = [e], e;
	}
};
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
var CAUSE_DEPTH_LIMIT = 5;
var DESCRIPTION_LENGTH_LIMIT = 8e3;
function describeError(error) {
	const parts = [];
	let current = error;
	for (let depth = 0; depth < CAUSE_DEPTH_LIMIT && current != null; depth++) {
		if (!(current instanceof Error)) {
			parts.push(typeof current === "string" ? current : safeStringify(current));
			break;
		}
		const label = depth === 0 ? "" : "caused by: ";
		const status = describeStatus(current);
		parts.push(`${label}${current.stack ?? `${current.name}: ${current.message}`}${status}`);
		current = current.cause;
	}
	return parts.join("\n").slice(0, DESCRIPTION_LENGTH_LIMIT);
}
function describeStatus(error) {
	const { status, statusCode } = error;
	const value = status ?? statusCode;
	return typeof value === "number" ? ` (status ${value})` : "";
}
function safeStringify(value) {
	try {
		return JSON.stringify(value) ?? String(value);
	} catch {
		return String(value);
	}
}
function isErrorLike(value) {
	return value instanceof Error;
}
var originalConsoleError = console.error.bind(console);
console.error = (...args) => {
	originalConsoleError(...args.map((arg) => {
		if (!isErrorLike(arg)) return arg;
		record(arg);
		return describeError(arg);
	}));
};
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
var init_error_page = __esmMin((() => {}));
function StartServer(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouterProvider, { router: props.router });
}
var init_StartServer = __esmMin((() => {}));
var defaultStreamHandler;
var init_defaultStreamHandler = __esmMin((() => {
	init_StartServer();
	defaultStreamHandler = defineHandlerCallback(({ request, router, responseHeaders }) => renderRouterToStream({
		request,
		router,
		responseHeaders,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StartServer, { router })
	}));
}));
function isPromiseLike(value) {
	return (typeof value === "object" || typeof value === "function") && value !== null && typeof value.then === "function";
}
function getSetCookieValues(headers) {
	const headersWithSetCookie = headers;
	if (typeof headersWithSetCookie.getSetCookie === "function") return headersWithSetCookie.getSetCookie();
	const value = headers.get("set-cookie");
	return value ? [value] : [];
}
function mergeEventResponseHeaders(response, event) {
	if (response.ok) return;
	const eventSetCookies = getSetCookieValues(event.res.headers);
	if (eventSetCookies.length === 0) return;
	const responseSetCookies = getSetCookieValues(response.headers);
	response.headers.delete("set-cookie");
	for (const cookie of responseSetCookies) response.headers.append("set-cookie", cookie);
	for (const cookie of eventSetCookies) response.headers.append("set-cookie", cookie);
}
function finalizeResponse(value, event) {
	const response = ensureResponse(value);
	mergeEventResponseHeaders(response, event);
	return response;
}
function finalizeMaybeResponse(value, event) {
	if (isPromiseLike(value)) return Promise.resolve(value).then((resolved) => finalizeResponse(resolved, event), (error) => finalizeResponse(handleResponseError(error), event));
	return finalizeResponse(value, event);
}
function ensureResponse(value) {
	if (value instanceof Response) return value;
	return new Response("Internal Server Error", { status: 500 });
}
function handleResponseError(error) {
	if (error instanceof Response) return error;
	if (error instanceof Error) throw error;
	return new Response("Internal Server Error", { status: 500 });
}
function requestHandler(handler) {
	return (request, requestOpts) => {
		let h3Event;
		try {
			h3Event = new H3Event(request);
		} catch (error) {
			if (error instanceof URIError) return new Response(null, {
				status: 400,
				statusText: "Bad Request"
			});
			throw error;
		}
		let response;
		try {
			response = eventStorage.run({ h3Event }, () => handler(request, requestOpts));
		} catch (error) {
			response = handleResponseError(error);
		}
		return toResponse(finalizeMaybeResponse(response, h3Event), h3Event);
	};
}
function getH3Event() {
	const event = eventStorage.getStore();
	if (!event) throw new Error(`No StartEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
	return event.h3Event;
}
function getResponse() {
	return getH3Event().res;
}
var GLOBAL_EVENT_STORAGE_KEY;
var globalObj$1;
var eventStorage;
var init_request_response = __esmMin((() => {
	GLOBAL_EVENT_STORAGE_KEY = Symbol.for("tanstack-start:event-storage");
	globalObj$1 = globalThis;
	if (!globalObj$1[GLOBAL_EVENT_STORAGE_KEY]) globalObj$1[GLOBAL_EVENT_STORAGE_KEY] = new AsyncLocalStorage();
	eventStorage = globalObj$1[GLOBAL_EVENT_STORAGE_KEY];
}));
var HEADERS;
var init_constants$1 = __esmMin((() => {
	HEADERS = { TSS_SHELL: "X-TSS_SHELL" };
}));
var _tanstack_start_manifest_v_exports = /* @__PURE__ */ __exportAll({ tsrStartManifest: () => tsrStartManifest });
var tsrStartManifest;
var init__tanstack_start_manifest_v = __esmMin((() => {
	tsrStartManifest = () => ({ routes: {
		__root__: {
			filePath: "D:/projects/psmatric site/src/routes/__root.tsx",
			children: [
				"/",
				"/alumni-connect",
				"/contact",
				"/mandatory-disclosure",
				"/about/advisory-board",
				"/about/correspondents-message",
				"/about/facilities",
				"/about/founders-vision",
				"/about/history",
				"/about/managing-committee",
				"/about/principals-message",
				"/about/testimonials",
				"/about/vision-mission",
				"/academics/activity-schedule",
				"/academics/curriculum",
				"/academics/examination",
				"/academics/method-of-evaluation",
				"/academics/online-learning",
				"/academics/student-resource-corner",
				"/academics/syllabus",
				"/academics/teaching-methodology",
				"/academics/timetable",
				"/admissions/faqs",
				"/admissions/fee",
				"/admissions/online-registration",
				"/admissions/portal",
				"/admissions/uniform",
				"/events/akshara-abhyas",
				"/events/annual-day",
				"/events/fancy-dress",
				"/events/independence-day",
				"/events/primary-annual-day",
				"/events/primary-sports-day",
				"/events/project-day",
				"/events/republic-day",
				"/events/sports-day",
				"/events/vidhya-pravesh",
				"/life/achievements",
				"/life/gallery",
				"/life/infrastructure",
				"/life/student-clubs",
				"/events/$eventSlug/$year"
			],
			preloads: ["/assets/index-BQrDICkf.js"],
			scripts: [{ attrs: {
				type: "module",
				async: !0,
				src: "/assets/index-BQrDICkf.js"
			} }]
		},
		"/": {
			filePath: "D:/projects/psmatric site/src/routes/index.tsx",
			children: void 0,
			preloads: [
				"/assets/routes-CqLIptgc.js",
				"/assets/Carousels-CfHFXzZE.js",
				"/assets/graduation-cap-BfHhf4Wn.js",
				"/assets/SmartImage-wrARB3-Q.js"
			]
		},
		"/alumni-connect": {
			filePath: "D:/projects/psmatric site/src/routes/alumni-connect.tsx",
			children: void 0,
			preloads: ["/assets/alumni-connect-BhfIhnmw.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/contact": {
			filePath: "D:/projects/psmatric site/src/routes/contact.tsx",
			children: void 0,
			preloads: [
				"/assets/contact-DaUFZ4eB.js",
				"/assets/graduation-cap-BfHhf4Wn.js",
				"/assets/PageShell-BsOdhrTT.js"
			]
		},
		"/mandatory-disclosure": {
			filePath: "D:/projects/psmatric site/src/routes/mandatory-disclosure.tsx",
			children: void 0,
			preloads: ["/assets/mandatory-disclosure-CG_VGeGn.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/about/advisory-board": {
			filePath: "D:/projects/psmatric site/src/routes/about.advisory-board.tsx",
			children: void 0,
			preloads: ["/assets/about.advisory-board-CYsOuJZA.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/about/correspondents-message": {
			filePath: "D:/projects/psmatric site/src/routes/about.correspondents-message.tsx",
			children: void 0,
			preloads: [
				"/assets/about.correspondents-message-P3uFDqcy.js",
				"/assets/SmartImage-wrARB3-Q.js",
				"/assets/PageShell-BsOdhrTT.js"
			]
		},
		"/about/facilities": {
			filePath: "D:/projects/psmatric site/src/routes/about.facilities.tsx",
			children: void 0,
			preloads: ["/assets/about.facilities-Ct98eayf.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/about/founders-vision": {
			filePath: "D:/projects/psmatric site/src/routes/about.founders-vision.tsx",
			children: void 0,
			preloads: ["/assets/about.founders-vision-Bs6b8N0f.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/about/history": {
			filePath: "D:/projects/psmatric site/src/routes/about.history.tsx",
			children: void 0,
			preloads: [
				"/assets/about.history-Cn2Sv0L_.js",
				"/assets/SmartImage-wrARB3-Q.js",
				"/assets/PageShell-BsOdhrTT.js",
				"/assets/dialog-CdOB9lhz.js"
			]
		},
		"/about/managing-committee": {
			filePath: "D:/projects/psmatric site/src/routes/about.managing-committee.tsx",
			children: void 0,
			preloads: ["/assets/about.managing-committee-DQwQhdgz.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/about/principals-message": {
			filePath: "D:/projects/psmatric site/src/routes/about.principals-message.tsx",
			children: void 0,
			preloads: [
				"/assets/about.principals-message-CAfxyvxn.js",
				"/assets/SmartImage-wrARB3-Q.js",
				"/assets/PageShell-BsOdhrTT.js"
			]
		},
		"/about/testimonials": {
			filePath: "D:/projects/psmatric site/src/routes/about.testimonials.tsx",
			children: void 0,
			preloads: ["/assets/about.testimonials-Bq1Sflhe.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/about/vision-mission": {
			filePath: "D:/projects/psmatric site/src/routes/about.vision-mission.tsx",
			children: void 0,
			preloads: ["/assets/about.vision-mission-PSvFrq9s.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/academics/activity-schedule": {
			filePath: "D:/projects/psmatric site/src/routes/academics.activity-schedule.tsx",
			children: void 0,
			preloads: ["/assets/academics.activity-schedule-DbDPXT4L.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/academics/curriculum": {
			filePath: "D:/projects/psmatric site/src/routes/academics.curriculum.tsx",
			children: void 0,
			preloads: ["/assets/academics.curriculum-JojMSt2U.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/academics/examination": {
			filePath: "D:/projects/psmatric site/src/routes/academics.examination.tsx",
			children: void 0,
			preloads: ["/assets/academics.examination-3jp2W-yY.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/academics/method-of-evaluation": {
			filePath: "D:/projects/psmatric site/src/routes/academics.method-of-evaluation.tsx",
			children: void 0,
			preloads: ["/assets/academics.method-of-evaluation-D9Groer6.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/academics/online-learning": {
			filePath: "D:/projects/psmatric site/src/routes/academics.online-learning.tsx",
			children: void 0,
			preloads: ["/assets/academics.online-learning-DZ3UnJTU.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/academics/student-resource-corner": {
			filePath: "D:/projects/psmatric site/src/routes/academics.student-resource-corner.tsx",
			children: void 0,
			preloads: [
				"/assets/academics.student-resource-corner-DZybBhVY.js",
				"/assets/PageShell-BsOdhrTT.js",
				"/assets/academic-documents-BpwcOw03.js"
			]
		},
		"/academics/syllabus": {
			filePath: "D:/projects/psmatric site/src/routes/academics.syllabus.tsx",
			children: void 0,
			preloads: [
				"/assets/academics.syllabus-CUny6WYY.js",
				"/assets/PageShell-BsOdhrTT.js",
				"/assets/academic-documents-BpwcOw03.js"
			]
		},
		"/academics/teaching-methodology": {
			filePath: "D:/projects/psmatric site/src/routes/academics.teaching-methodology.tsx",
			children: void 0,
			preloads: ["/assets/academics.teaching-methodology-CDBwO-lC.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/academics/timetable": {
			filePath: "D:/projects/psmatric site/src/routes/academics.timetable.tsx",
			children: void 0,
			preloads: [
				"/assets/academics.timetable-C_ZCiz-J.js",
				"/assets/PageShell-BsOdhrTT.js",
				"/assets/academic-documents-BpwcOw03.js"
			]
		},
		"/admissions/faqs": {
			filePath: "D:/projects/psmatric site/src/routes/admissions.faqs.tsx",
			children: void 0,
			preloads: ["/assets/admissions.faqs-B8IrulRp.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/admissions/fee": {
			filePath: "D:/projects/psmatric site/src/routes/admissions.fee.tsx",
			children: void 0,
			preloads: ["/assets/admissions.fee-S6k34MyH.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/admissions/online-registration": {
			filePath: "D:/projects/psmatric site/src/routes/admissions.online-registration.tsx",
			children: void 0,
			preloads: ["/assets/admissions.online-registration-BT_SxNIX.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/admissions/portal": {
			filePath: "D:/projects/psmatric site/src/routes/admissions.portal.tsx",
			children: void 0,
			preloads: ["/assets/admissions.portal-DTZvZs0c.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/admissions/uniform": {
			filePath: "D:/projects/psmatric site/src/routes/admissions.uniform.tsx",
			children: void 0,
			preloads: [
				"/assets/admissions.uniform-BFkpVmEw.js",
				"/assets/SmartImage-wrARB3-Q.js",
				"/assets/PageShell-BsOdhrTT.js"
			]
		},
		"/events/akshara-abhyas": {
			filePath: "D:/projects/psmatric site/src/routes/events.akshara-abhyas.tsx",
			children: void 0,
			preloads: ["/assets/events.akshara-abhyas-CKg3DFpT.js", "/assets/EventPage-BNh3EH_t.js"]
		},
		"/events/annual-day": {
			filePath: "D:/projects/psmatric site/src/routes/events.annual-day.tsx",
			children: void 0,
			preloads: ["/assets/events.annual-day-B-nWz8g3.js", "/assets/EventPage-BNh3EH_t.js"]
		},
		"/events/fancy-dress": {
			filePath: "D:/projects/psmatric site/src/routes/events.fancy-dress.tsx",
			children: void 0,
			preloads: ["/assets/events.fancy-dress-BmcU6rg6.js", "/assets/EventPage-BNh3EH_t.js"]
		},
		"/events/independence-day": {
			filePath: "D:/projects/psmatric site/src/routes/events.independence-day.tsx",
			children: void 0,
			preloads: ["/assets/events.independence-day-DWn85cM1.js", "/assets/EventPage-BNh3EH_t.js"]
		},
		"/events/primary-annual-day": {
			filePath: "D:/projects/psmatric site/src/routes/events.primary-annual-day.tsx",
			children: void 0,
			preloads: ["/assets/events.primary-annual-day-5nzyw481.js", "/assets/EventPage-BNh3EH_t.js"]
		},
		"/events/primary-sports-day": {
			filePath: "D:/projects/psmatric site/src/routes/events.primary-sports-day.tsx",
			children: void 0,
			preloads: ["/assets/events.primary-sports-day-D7SI2F0z.js", "/assets/EventPage-BNh3EH_t.js"]
		},
		"/events/project-day": {
			filePath: "D:/projects/psmatric site/src/routes/events.project-day.tsx",
			children: void 0,
			preloads: ["/assets/events.project-day-C5fDNXJ7.js", "/assets/EventPage-BNh3EH_t.js"]
		},
		"/events/republic-day": {
			filePath: "D:/projects/psmatric site/src/routes/events.republic-day.tsx",
			children: void 0,
			preloads: ["/assets/events.republic-day-CYhFEQKI.js", "/assets/EventPage-BNh3EH_t.js"]
		},
		"/events/sports-day": {
			filePath: "D:/projects/psmatric site/src/routes/events.sports-day.tsx",
			children: void 0,
			preloads: ["/assets/events.sports-day-fM5E92cO.js", "/assets/EventPage-BNh3EH_t.js"]
		},
		"/events/vidhya-pravesh": {
			filePath: "D:/projects/psmatric site/src/routes/events.vidhya-pravesh.tsx",
			children: void 0,
			preloads: ["/assets/events.vidhya-pravesh-Ce1nOV9B.js", "/assets/EventPage-BNh3EH_t.js"]
		},
		"/life/achievements": {
			filePath: "D:/projects/psmatric site/src/routes/life.achievements.tsx",
			children: void 0,
			preloads: ["/assets/life.achievements-DpJZmAPe.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/life/gallery": {
			filePath: "D:/projects/psmatric site/src/routes/life.gallery.tsx",
			children: void 0,
			preloads: [
				"/assets/life.gallery-B9dq0RVO.js",
				"/assets/Carousels-CfHFXzZE.js",
				"/assets/SmartImage-wrARB3-Q.js",
				"/assets/PageShell-BsOdhrTT.js"
			]
		},
		"/life/infrastructure": {
			filePath: "D:/projects/psmatric site/src/routes/life.infrastructure.tsx",
			children: void 0,
			preloads: ["/assets/life.infrastructure-Dme6Dqsm.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/life/student-clubs": {
			filePath: "D:/projects/psmatric site/src/routes/life.student-clubs.tsx",
			children: void 0,
			preloads: ["/assets/life.student-clubs-DCsf_EPz.js", "/assets/PageShell-BsOdhrTT.js"]
		},
		"/events/$eventSlug/$year": {
			filePath: "D:/projects/psmatric site/src/routes/events.$eventSlug.$year.tsx",
			children: void 0,
			preloads: [
				"/assets/events._eventSlug._year-DQvKvgK0.js",
				"/assets/SmartImage-wrARB3-Q.js",
				"/assets/PageShell-BsOdhrTT.js",
				"/assets/dialog-CdOB9lhz.js",
				"/assets/event-galleries-CSE_y9pc.js"
			]
		}
	} });
}));
/**
* @description Returns the router manifest data that should be sent to the client.
* This includes only the assets and preloads for the current route and any
* special assets that are needed for the client. It does not include relationships
* between routes or any other data that is not needed for the client.
*
* @param matchedRoutes - In dev mode, the matched routes are used to build
* the dev styles URL for route-scoped CSS collection.
*/
async function getStartManifest(matchedRoutes) {
	const { tsrStartManifest } = await Promise.resolve().then(() => (init__tanstack_start_manifest_v(), _tanstack_start_manifest_v_exports));
	const startManifest = tsrStartManifest();
	let routes = startManifest.routes;
	routes[rootRouteId];
	const manifestRoutes = {};
	for (const k in routes) {
		const v = routes[k];
		const result = {};
		if (v.preloads && v.preloads.length > 0) result.preloads = v.preloads;
		if (v.scripts && v.scripts.length > 0) result.scripts = v.scripts;
		if (v.css?.length) result.css = v.css;
		if (result.preloads || result.scripts || result.css) manifestRoutes[k] = result;
	}
	return {
		...startManifest.scriptFormat ? { scriptFormat: startManifest.scriptFormat } : {},
		...startManifest.inlineCss ? { inlineCss: startManifest.inlineCss } : {},
		routes: manifestRoutes
	};
}
var init_router_manifest = __esmMin((() => {}));
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ??= await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
var manifest;
var init___23tanstack_start_server_fn_resolver = __esmMin((() => {
	manifest = {};
}));
var init_getServerFnById = __esmMin((() => {
	init___23tanstack_start_server_fn_resolver();
}));
var TSS_FORMDATA_CONTEXT;
var TSS_SERVER_FUNCTION;
var X_TSS_SERIALIZED;
var X_TSS_RAW_RESPONSE;
var TSS_CONTENT_TYPE_FRAMED;
var MAX_FRAME_PAYLOAD_SIZE;
var MAX_FRAMED_STREAMS;
var TSS_CONTENT_TYPE_FRAMED_VERSIONED;
var init_constants = __esmMin((() => {
	TSS_FORMDATA_CONTEXT = "__TSS_CONTEXT";
	TSS_SERVER_FUNCTION = Symbol.for("TSS_SERVER_FUNCTION");
	X_TSS_SERIALIZED = "x-tss-serialized";
	X_TSS_RAW_RESPONSE = "x-tss-raw";
	TSS_CONTENT_TYPE_FRAMED = "application/x-tss-framed";
	MAX_FRAME_PAYLOAD_SIZE = 16777216;
	MAX_FRAMED_STREAMS = 1024;
	TSS_CONTENT_TYPE_FRAMED_VERSIONED = `${TSS_CONTENT_TYPE_FRAMED}; v=1`;
}));
async function runWithStartContext(context, fn) {
	return startStorage.run(context, fn);
}
function getStartContext(opts) {
	const context = startStorage.getStore();
	if (!context && opts?.throwIfNotFound !== false) throw new Error(`No Start context found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
	return context;
}
var GLOBAL_STORAGE_KEY;
var globalObj;
var startStorage;
var init_async_local_storage = __esmMin((() => {
	GLOBAL_STORAGE_KEY = Symbol.for("tanstack-start:start-storage-context");
	globalObj = globalThis;
	if (!globalObj[GLOBAL_STORAGE_KEY]) globalObj[GLOBAL_STORAGE_KEY] = new AsyncLocalStorage();
	startStorage = globalObj[GLOBAL_STORAGE_KEY];
}));
var init_esm$4 = __esmMin((() => {
	init_async_local_storage();
}));
var getStartOptions;
var init_getStartOptions = __esmMin((() => {
	init_esm$4();
	getStartOptions = () => getStartContext().startOptions;
}));
/** Start's serialization adapters followed by `routerPlugins`. */
function getSerovalPlugins(routerPlugins) {
	return [...(getStartOptions()?.serializationAdapters)?.map(makeSerovalPlugin) ?? [], ...routerPlugins];
}
var init_getDefaultSerovalPlugins = __esmMin((() => {
	init_getStartOptions();
}));
var init_client_rpc = __esmMin((() => {
	init_constants();
}));
/**
* Encodes a single frame with header and payload.
*/
function encodeFrame(type, streamId, payload) {
	if (payload.byteLength > 16777216) throw new RangeError(`Frame payload exceeds ${MAX_FRAME_PAYLOAD_SIZE} bytes`);
	const frame = new Uint8Array(9 + payload.length);
	frame[0] = type;
	frame[1] = streamId >>> 24 & 255;
	frame[2] = streamId >>> 16 & 255;
	frame[3] = streamId >>> 8 & 255;
	frame[4] = streamId & 255;
	frame[5] = payload.length >>> 24 & 255;
	frame[6] = payload.length >>> 16 & 255;
	frame[7] = payload.length >>> 8 & 255;
	frame[8] = payload.length & 255;
	frame.set(payload, 9);
	return frame;
}
/** Encodes an error message payload, truncated to a bounded length. */
function encodeErrorPayload(error) {
	const originalMessage = error instanceof Error ? error.message : String(error ?? "Unknown error");
	const message = originalMessage.length > MAX_ERROR_MESSAGE_CODE_UNITS ? `${originalMessage.slice(0, MAX_ERROR_MESSAGE_CODE_UNITS)}…` : originalMessage;
	return textEncoder$1.encode(message);
}
/**
* Creates a multiplexed ReadableStream from serialized response records.
*
* A record's JSON frame is admitted before any raw stream referenced by that
* record starts. Raw streams from admitted records are pumped concurrently.
* The caller bounds the stream count before records reach this function.
*/
function createMultiplexedStream(recordStream, options = {}) {
	let controller;
	let stopped = false;
	let activePumps = 0;
	let wakeDemand;
	let admission;
	const readers = /* @__PURE__ */ new Set();
	const pendingRawStreams = /* @__PURE__ */ new Set();
	const abortOutput = () => errorOutput(options.signal?.reason);
	const wakeAdmission = () => {
		const wake = wakeDemand;
		wakeDemand = void 0;
		wake?.();
	};
	const cancelReader = (reader, reason) => {
		reader.cancel(reason).catch(() => {});
	};
	const cancelStream = (stream, reason) => {
		stream.cancel(reason).catch(() => {});
	};
	const stop = (reason) => {
		if (stopped) return false;
		stopped = [reason];
		options.signal?.removeEventListener("abort", abortOutput);
		wakeAdmission();
		for (const reader of readers) cancelReader(reader, reason);
		for (const stream of pendingRawStreams) cancelStream(stream, reason);
		pendingRawStreams.clear();
		return true;
	};
	const errorOutput = (error) => {
		if (!stop(error)) return;
		try {
			controller.error(error);
		} catch {}
	};
	const waitForDemand = async () => {
		while (!stopped && (controller.desiredSize ?? 0) <= 0) await new Promise((resolve) => {
			wakeDemand = resolve;
		});
		return !stopped;
	};
	const admitFrame = (type, streamId, payload) => {
		if (stopped) return false;
		if (!admission && (controller.desiredSize ?? 0) > 0) {
			controller.enqueue(encodeFrame(type, streamId, payload));
			return true;
		}
		const runAdmission = async () => {
			if (!await waitForDemand()) return false;
			controller.enqueue(encodeFrame(type, streamId, payload));
			return true;
		};
		const result = admission ? admission.then(runAdmission) : runAdmission();
		const clearAdmission = () => {
			if (admission === tail) admission = void 0;
		};
		const tail = result.then(clearAdmission, clearAdmission);
		admission = tail;
		return result;
	};
	const maybeClose = () => {
		if (activePumps !== 0 || !stop()) return;
		try {
			controller.close();
		} catch {}
	};
	const startPump = (pump) => {
		activePumps++;
		pump().then(() => {
			activePumps--;
			maybeClose();
		}, (error) => {
			activePumps--;
			errorOutput(error);
		});
	};
	async function pumpRawStream(streamId, stream) {
		const reader = stream.getReader();
		readers.add(reader);
		try {
			while (!stopped) {
				const { done, value } = await reader.read();
				if (stopped) return;
				if (done) {
					const frameAdmission = admitFrame(2, streamId, EMPTY_PAYLOAD);
					if (frameAdmission !== true) await frameAdmission;
					return;
				}
				if (!(value instanceof Uint8Array)) throw new TypeError("RawStream chunks must be Uint8Array");
				let offset = 0;
				do {
					const frameAdmission = admitFrame(1, streamId, value.byteLength <= 16777216 ? value : value.subarray(offset, offset + MAX_FRAME_PAYLOAD_SIZE));
					if (frameAdmission !== true && (frameAdmission === false || !await frameAdmission)) return;
					offset += MAX_FRAME_PAYLOAD_SIZE;
				} while (offset < value.byteLength);
			}
		} catch (error) {
			if (!stopped) {
				const frameAdmission = admitFrame(3, streamId, encodeErrorPayload(error));
				if (frameAdmission !== true) await frameAdmission;
			}
		} finally {
			readers.delete(reader);
			reader.releaseLock();
		}
	}
	async function pumpRecords() {
		const reader = recordStream.getReader();
		readers.add(reader);
		try {
			while (!stopped) {
				const { done, value } = await reader.read();
				if (stopped) {
					if (!done) for (const registration of value.rawStreams) cancelStream(registration.stream, stopped[0]);
					return;
				}
				if (done) return;
				for (const registration of value.rawStreams) pendingRawStreams.add(registration.stream);
				const frameAdmission = admitFrame(0, 0, value.json);
				if (frameAdmission !== true && (frameAdmission === false || !await frameAdmission)) return;
				for (const registration of value.rawStreams) {
					pendingRawStreams.delete(registration.stream);
					startPump(pumpRawStream.bind(void 0, registration.id, registration.stream));
				}
			}
		} catch (error) {
			if (!stopped) errorOutput(error);
		} finally {
			readers.delete(reader);
			reader.releaseLock();
		}
	}
	return new ReadableStream({
		start(ctrl) {
			controller = ctrl;
			if (options.signal?.aborted) {
				cancelStream(recordStream, options.signal.reason);
				errorOutput(options.signal.reason);
				return;
			}
			options.signal?.addEventListener("abort", abortOutput, { once: true });
			startPump(pumpRecords);
		},
		pull() {
			wakeAdmission();
		},
		cancel(reason) {
			if (stop(reason)) options.onCancel?.(reason);
		}
	});
}
var textEncoder$1;
var EMPTY_PAYLOAD;
var MAX_ERROR_MESSAGE_CODE_UNITS;
var init_frame_protocol = __esmMin((() => {
	init_client_rpc();
	textEncoder$1 = new TextEncoder();
	EMPTY_PAYLOAD = /* @__PURE__ */ new Uint8Array(0);
	MAX_ERROR_MESSAGE_CODE_UNITS = 4096;
}));
function isSafeKey(key) {
	return key !== "__proto__" && key !== "constructor" && key !== "prototype";
}
/**
* Merge target and source into a new null-proto object, filtering dangerous keys.
*/
function safeObjectMerge(target, source) {
	const result = Object.create(null);
	if (target) {
		for (const key of Object.keys(target)) if (isSafeKey(key)) result[key] = target[key];
	}
	if (source && typeof source === "object") {
		for (const key of Object.keys(source)) if (isSafeKey(key)) result[key] = source[key];
	}
	return result;
}
/**
* Create a null-prototype object, optionally copying from source.
*/
function createNullProtoObject(source) {
	if (!source) return Object.create(null);
	const obj = Object.create(null);
	for (const key of Object.keys(source)) if (isSafeKey(key)) obj[key] = source[key];
	return obj;
}
var init_safeObjectMerge = __esmMin((() => {}));
function flattenMiddlewares(middlewares, maxDepth = 100) {
	const seen = /* @__PURE__ */ new Set();
	const flattened = [];
	const recurse = (middleware, depth) => {
		if (depth > maxDepth) throw new Error(`Middleware nesting depth exceeded maximum of ${maxDepth}. Check for circular references.`);
		middleware.forEach((m) => {
			if (m.options.middleware) recurse(m.options.middleware, depth + 1);
			if (!seen.has(m)) {
				seen.add(m);
				flattened.push(m);
			}
		});
	};
	recurse(middlewares, 0);
	return flattened;
}
var init_createServerFn = __esmMin((() => {}));
var createMiddleware;
var init_createMiddleware = __esmMin((() => {
	createMiddleware = (options, __opts) => {
		const resolvedOptions = {
			type: "request",
			...__opts || options
		};
		const setValidator = (validator) => {
			return createMiddleware({}, Object.assign(resolvedOptions, {
				validator,
				inputValidator: validator
			}));
		};
		return {
			options: resolvedOptions,
			middleware: (middleware) => {
				return createMiddleware({}, Object.assign(resolvedOptions, { middleware }));
			},
			validator: setValidator,
			inputValidator: setValidator,
			client: (client) => {
				return createMiddleware({}, Object.assign(resolvedOptions, { client }));
			},
			server: (server) => {
				return createMiddleware({}, Object.assign(resolvedOptions, { server }));
			}
		};
	};
}));
async function isCsrfRequestAllowed(opts, ctx) {
	const result = await getCsrfRequestValidationResult(opts, ctx);
	return result === true || result === void 0 && opts.allowRequestsWithoutOriginCheck === true;
}
async function getCsrfRequestValidationResult(opts, ctx) {
	const fetchSite = ctx.request.headers.get("Sec-Fetch-Site");
	if (fetchSite !== null) return matchValue(opts.secFetchSite ?? "same-origin", fetchSite, ctx);
	const origin = ctx.request.headers.get("Origin");
	if (origin !== null) {
		if (opts.origin) return matchValue(opts.origin, origin, ctx);
		return origin === new URL(ctx.request.url).origin;
	}
	const referer = ctx.request.headers.get("Referer");
	if (referer === null || opts.referer === false) return;
	if (typeof opts.referer === "function") return opts.referer(referer, ctx);
	if (opts.origin) {
		const refererOrigin = getOriginFromUrl(referer);
		return refererOrigin !== void 0 && matchValue(opts.origin, refererOrigin, ctx);
	}
	return isRefererSameOrigin(referer, new URL(ctx.request.url).origin);
}
async function matchValue(matcher, value, ctx) {
	if (typeof matcher === "function") return matcher(value, ctx);
	if (Array.isArray(matcher)) return matcher.includes(value);
	return value === matcher;
}
function getOriginFromUrl(url) {
	try {
		return new URL(url).origin;
	} catch {
		return;
	}
}
function isRefererSameOrigin(referer, requestOrigin) {
	if (referer === requestOrigin) return true;
	if (!referer.startsWith(requestOrigin)) return false;
	if (referer.length === requestOrigin.length) return true;
	const code = referer.charCodeAt(requestOrigin.length);
	return code === 47 || code === 63 || code === 35;
}
async function getFailureResponse(opts, ctx) {
	if (typeof opts.failureResponse === "function") return opts.failureResponse(ctx);
	return opts.failureResponse?.clone() ?? new Response("Forbidden", { status: 403 });
}
var innerCreateCsrfMiddleware;
var createCsrfMiddleware;
var init_createCsrfMiddleware = __esmMin((() => {
	init_createMiddleware();
	innerCreateCsrfMiddleware = (opts = {}) => {
		return createMiddleware().server(async (ctx) => {
			const csrfCtx = ctx;
			if (opts.filter && !await opts.filter(csrfCtx)) return ctx.next();
			if (await isCsrfRequestAllowed(opts, csrfCtx)) return ctx.next();
			return getFailureResponse(opts, csrfCtx);
		});
	};
	createCsrfMiddleware = innerCreateCsrfMiddleware;
}));
function dedupeSerializationAdapters(deduped, serializationAdapters) {
	for (let i = 0, len = serializationAdapters.length; i < len; i++) {
		const current = serializationAdapters[i];
		if (!deduped.has(current)) {
			deduped.add(current);
			if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
		}
	}
}
var createStart;
var init_createStart = __esmMin((() => {
	init_createMiddleware();
	createStart = (getOptions) => {
		return {
			getOptions: async () => {
				const options = await getOptions();
				if (options.serializationAdapters) {
					const deduped = /* @__PURE__ */ new Set();
					dedupeSerializationAdapters(deduped, options.serializationAdapters);
					options.serializationAdapters = Array.from(deduped);
				}
				return options;
			},
			createMiddleware
		};
	};
}));
var init_esm$3 = __esmMin((() => {
	init_constants();
	init_safeObjectMerge();
	init_createServerFn();
	init_createMiddleware();
	init_createCsrfMiddleware();
	init_createStart();
	init_getDefaultSerovalPlugins();
}));
function encodeSerializationRecord(value) {
	return textEncoder.encode(JSON.stringify(value));
}
function exceedsPendingSerializationLimit(record, recordCount, pendingBytes) {
	return recordCount >= MAX_PENDING_SERIALIZATION_RECORDS || pendingBytes + record.byteLength > MAX_PENDING_SERIALIZATION_BYTES;
}
function runSerializationCleanup(dispose) {
	try {
		dispose();
	} catch {}
}
function cancelRawStream(stream, reason) {
	stream.cancel(reason).catch(() => {});
}
/**
* Serializes a server-function result. A result that Seroval completes
* synchronously without RawStreams becomes plain JSON; everything else is a
* framed response whose records and raw streams are multiplexed in order.
*/
function serializeResult(res, signal, plugins) {
	const alsResponse = getResponse();
	const initialRecords = [];
	let initialBytes = 0;
	const pendingRawStreams = [];
	let done = false;
	let initialParsed = false;
	let serializationFailure;
	let disposeSerialization;
	let onParse = (value, initial) => {
		if (serializationFailure) return;
		initialParsed ||= initial;
		const record = encodeSerializationRecord(value);
		if (exceedsPendingSerializationLimit(record, initialRecords.length, initialBytes)) {
			serializationFailure = [/* @__PURE__ */ new Error("Server function serialization exceeded its pending output limit")];
			return;
		}
		initialRecords.push(record);
		initialBytes += record.byteLength;
	};
	let onDone = () => {
		if (initialParsed) done = true;
	};
	let onError = (error) => {
		serializationFailure ??= [error];
	};
	const rawStreamPlugin = createRawStreamRPCPlugin((id, stream) => {
		if (serializationFailure) {
			cancelRawStream(stream, serializationFailure[0]);
			return;
		}
		if (id > 1024) {
			const error = /* @__PURE__ */ new Error(`Too many raw streams in framed response (max ${MAX_FRAMED_STREAMS})`);
			cancelRawStream(stream, error);
			onError(error);
			return;
		}
		pendingRawStreams.push({
			id,
			stream
		});
	});
	const dispose = toCrossJSONStream(res, {
		refs: /* @__PURE__ */ new Map(),
		plugins: [rawStreamPlugin, ...plugins],
		onParse(value, initial) {
			onParse(value, initial);
		},
		onDone() {
			onDone();
		},
		onError: (error) => {
			onError(error);
		}
	});
	if (serializationFailure) {
		runSerializationCleanup(dispose);
		for (const registration of pendingRawStreams) cancelRawStream(registration.stream, serializationFailure[0]);
		throw serializationFailure[0];
	}
	if (!done) disposeSerialization = dispose;
	if (done && pendingRawStreams.length === 0 && initialRecords.length === 1) return new Response(initialRecords[0], {
		status: alsResponse.status,
		statusText: alsResponse.statusText,
		headers: {
			"Content-Type": "application/json",
			[X_TSS_SERIALIZED]: "true"
		}
	});
	if (done && initialRecords.length === 1) {
		const json = initialRecords[0];
		if (json.byteLength > 16777216) {
			const error = /* @__PURE__ */ new Error("Server function serialization exceeded its pending output limit");
			for (const registration of pendingRawStreams) cancelRawStream(registration.stream, error);
			throw error;
		}
		const rawStreams = pendingRawStreams.splice(0);
		initialRecords.length = 0;
		return createFramedResponse(new ReadableStream({
			start(controller) {
				controller.enqueue({
					json,
					rawStreams
				});
				controller.close();
			},
			cancel(reason) {
				for (const registration of rawStreams) cancelRawStream(registration.stream, reason);
			}
		}), { signal });
	}
	const { readable, writable } = new TransformStream();
	const writer = writable.getWriter();
	const recordAbortController = new AbortController();
	let pendingBytes = 0;
	const pendingRecords = /* @__PURE__ */ new Set();
	const abortRecordStream = (error) => {
		if (serializationFailure) return;
		serializationFailure = [error];
		const disposeCurrentSerialization = disposeSerialization;
		disposeSerialization = void 0;
		for (const registration of pendingRawStreams.splice(0)) cancelRawStream(registration.stream, error);
		for (const record of pendingRecords) for (const registration of record.rawStreams) cancelRawStream(registration.stream, error);
		pendingRecords.clear();
		recordAbortController.abort(error);
		writer.abort(error).catch(() => {});
		if (disposeCurrentSerialization) runSerializationCleanup(disposeCurrentSerialization);
	};
	const writeRecord = (json, rawStreams) => {
		if (serializationFailure) {
			for (const registration of rawStreams) cancelRawStream(registration.stream, serializationFailure[0]);
			return false;
		}
		if (json.byteLength > 16777216 || exceedsPendingSerializationLimit(json, pendingRecords.size, pendingBytes)) {
			const error = /* @__PURE__ */ new Error("Server function serialization exceeded its pending output limit");
			for (const registration of rawStreams) cancelRawStream(registration.stream, error);
			onError(error);
			return false;
		}
		pendingBytes += json.byteLength;
		const record = {
			json,
			rawStreams
		};
		pendingRecords.add(record);
		writer.write(record).then(() => {
			pendingRecords.delete(record);
			pendingBytes -= json.byteLength;
		}, (error) => {
			const stillOwned = pendingRecords.delete(record);
			pendingBytes -= json.byteLength;
			if (stillOwned) for (const registration of rawStreams) cancelRawStream(registration.stream, error);
		});
		return true;
	};
	onParse = (value) => {
		if (serializationFailure) return;
		writeRecord(encodeSerializationRecord(value), pendingRawStreams.splice(0));
	};
	onDone = () => {
		if (serializationFailure) return;
		disposeSerialization = void 0;
		writer.close().catch(() => {});
	};
	onError = (error) => {
		abortRecordStream(error);
	};
	const initialRawStreams = pendingRawStreams.splice(0);
	for (let index = 0; index < initialRecords.length; index++) {
		const isLast = index === initialRecords.length - 1;
		if (!writeRecord(initialRecords[index], isLast ? initialRawStreams : [])) {
			if (!isLast) for (const registration of initialRawStreams) cancelRawStream(registration.stream, serializationFailure[0]);
			initialRecords.length = 0;
			throw serializationFailure[0];
		}
	}
	initialRecords.length = 0;
	if (done) onDone();
	writer.closed.catch((error) => {
		abortRecordStream(error);
	});
	return createFramedResponse(readable, {
		signal: AbortSignal.any([recordAbortController.signal, signal]),
		onCancel: abortRecordStream
	});
	function createFramedResponse(records, options) {
		const multiplexedStream = createMultiplexedStream(records, options);
		try {
			return new Response(multiplexedStream, {
				status: alsResponse.status,
				statusText: alsResponse.statusText,
				headers: {
					"Content-Type": TSS_CONTENT_TYPE_FRAMED_VERSIONED,
					[X_TSS_SERIALIZED]: "true"
				}
			});
		} catch (error) {
			cancelRawStream(multiplexedStream, error);
			throw error;
		}
	}
}
function isNotFoundResponse(error) {
	const { headers, ...rest } = error;
	const response = new Response(JSON.stringify(rest), {
		status: 404,
		headers
	});
	response.headers.set("Content-Type", "application/json");
	return response;
}
var serovalPlugins;
var FORM_DATA_CONTENT_TYPES;
var MAX_PAYLOAD_SIZE;
var MAX_PENDING_SERIALIZATION_RECORDS;
var MAX_PENDING_SERIALIZATION_BYTES;
var textEncoder;
var handleServerAction;
var init_server_functions_handler = __esmMin((() => {
	init_request_response();
	init_getServerFnById();
	init_frame_protocol();
	init_esm$3();
	init_client_rpc();
	serovalPlugins = void 0;
	FORM_DATA_CONTENT_TYPES = ["multipart/form-data", "application/x-www-form-urlencoded"];
	MAX_PAYLOAD_SIZE = 1e6;
	MAX_PENDING_SERIALIZATION_RECORDS = 1024;
	MAX_PENDING_SERIALIZATION_BYTES = 33554432;
	textEncoder = new TextEncoder();
	handleServerAction = async ({ request, context, serverFnId }) => {
		const methodUpper = request.method.toUpperCase();
		const url = new URL(request.url);
		const action = await getServerFnById(serverFnId, { origin: "client" });
		if (action.method && methodUpper !== action.method) return new Response(`expected ${action.method} method. Got ${methodUpper}`, {
			status: 405,
			headers: { Allow: action.method }
		});
		const isServerFn = request.headers.get("x-tsr-serverFn") === "true";
		serovalPlugins ??= getSerovalPlugins(defaultSerovalDeserializerPlugins);
		const contentType = request.headers.get("Content-Type");
		try {
			let res;
			if (FORM_DATA_CONTENT_TYPES.some((type) => contentType && contentType.includes(type))) {
				if (methodUpper === "GET") invariant();
				const formData = await request.formData();
				const serializedContext = formData.get(TSS_FORMDATA_CONTEXT);
				formData.delete(TSS_FORMDATA_CONTEXT);
				const params = {
					context,
					data: formData,
					method: methodUpper
				};
				if (typeof serializedContext === "string") try {
					const deserializedContext = fromJSON(JSON.parse(serializedContext), { plugins: serovalPlugins });
					if (typeof deserializedContext === "object" && deserializedContext) params.context = safeObjectMerge(deserializedContext, context);
				} catch (e) {}
				res = await action(params);
			} else if (methodUpper === "GET") {
				const payloadParam = url.searchParams.get("payload");
				if (payloadParam && payloadParam.length > MAX_PAYLOAD_SIZE) throw new Error("Payload too large");
				const payload = payloadParam ? fromJSON(JSON.parse(payloadParam), { plugins: serovalPlugins }) : void 0;
				res = await action({
					data: payload?.data,
					context: safeObjectMerge(payload?.context, context),
					method: methodUpper
				});
			} else {
				const payload = contentType?.includes("application/json") ? fromJSON(await request.json(), { plugins: serovalPlugins }) : void 0;
				res = await action({
					data: payload?.data,
					context: safeObjectMerge(payload?.context, context),
					method: methodUpper
				});
			}
			const unwrapped = res.error !== void 0 ? res.error : res.result;
			if (isNotFound(res)) res = isNotFoundResponse(res);
			if (!isServerFn && (unwrapped instanceof Response || unwrapped === null || typeof unwrapped !== "object")) return unwrapped;
			if (unwrapped instanceof Response) {
				if (isRedirect(unwrapped)) return unwrapped;
				unwrapped.headers.set(X_TSS_RAW_RESPONSE, "true");
				return unwrapped;
			}
			return serializeResult(res, request.signal, serovalPlugins);
		} catch (error) {
			if (error instanceof Response) return error;
			if (isNotFound(error)) return isNotFoundResponse(error);
			console.error("Server Fn Error!", error);
			const serializedError = JSON.stringify(await toCrossJSONAsync(error, {
				refs: /* @__PURE__ */ new Map(),
				plugins: serovalPlugins
			}));
			const response = getResponse();
			const headers = {
				"Content-Type": "application/json",
				[X_TSS_SERIALIZED]: "true"
			};
			try {
				return new Response(serializedError, {
					status: response.status ?? 500,
					statusText: response.statusText,
					headers
				});
			} catch {
				return new Response(serializedError, {
					status: 500,
					statusText: "",
					headers
				});
			}
		}
	};
}));
function buildLinkParam(name, value) {
	if (value === void 0) return name;
	if (LINK_PARAM_TOKEN_RE.test(value)) return `${name}=${value}`;
	return `${name}=${JSON.stringify(value)}`;
}
function serializeEarlyHint(hint) {
	const parts = [`<${hint.href}>`, buildLinkParam("rel", hint.rel)];
	if (hint.as) parts.push(buildLinkParam("as", hint.as));
	if (hint.crossOrigin !== void 0) parts.push(buildLinkParam("crossorigin", hint.crossOrigin || void 0));
	if (hint.type) parts.push(buildLinkParam("type", hint.type));
	if (hint.integrity) parts.push(buildLinkParam("integrity", hint.integrity));
	if (hint.referrerPolicy) parts.push(buildLinkParam("referrerpolicy", hint.referrerPolicy));
	if (hint.fetchPriority) parts.push(buildLinkParam("fetchpriority", hint.fetchPriority));
	return parts.join("; ");
}
function getStringAttr(attrs, name, fallbackName) {
	const value = attrs?.[name] ?? (fallbackName ? attrs?.[fallbackName] : void 0);
	return typeof value === "string" ? value : void 0;
}
function getPreloadAs(attrs) {
	const as = getStringAttr(attrs, "as");
	return as && PRELOAD_AS_VALUES.has(as) ? as : void 0;
}
function addEarlyHintFetchAttrs(hint, attrs) {
	const crossOrigin = getStringAttr(attrs, "crossOrigin", "crossorigin");
	const type = getStringAttr(attrs, "type");
	const integrity = getStringAttr(attrs, "integrity");
	const referrerPolicy = getStringAttr(attrs, "referrerPolicy", "referrerpolicy");
	const fetchPriority = getStringAttr(attrs, "fetchPriority", "fetchpriority");
	if (crossOrigin !== void 0) hint.crossOrigin = crossOrigin;
	if (type) hint.type = type;
	if (integrity) hint.integrity = integrity;
	if (referrerPolicy) hint.referrerPolicy = referrerPolicy;
	if (fetchPriority) hint.fetchPriority = fetchPriority;
}
function linkAttrsToEarlyHint(attrs) {
	const href = getStringAttr(attrs, "href");
	const rel = getStringAttr(attrs, "rel");
	if (!href || !rel) return void 0;
	const relTokens = rel.split(/\s+/);
	let hintRel;
	let hintAs;
	if (relTokens.includes("modulepreload")) {
		hintRel = "modulepreload";
		hintAs = "script";
	} else if (relTokens.includes("stylesheet")) {
		hintRel = "preload";
		hintAs = "style";
	} else if (relTokens.includes("preload")) {
		hintAs = getPreloadAs(attrs);
		if (!hintAs) return void 0;
		hintRel = "preload";
	} else if (relTokens.includes("preconnect")) {
		hintRel = "preconnect";
		hintAs = void 0;
	} else if (relTokens.includes("dns-prefetch")) {
		hintRel = "dns-prefetch";
		hintAs = void 0;
	}
	if (!hintRel) return void 0;
	const hint = {
		href,
		rel: hintRel
	};
	if (hintAs) hint.as = hintAs;
	addEarlyHintFetchAttrs(hint, attrs);
	return hint;
}
function collectStaticHintsFromManifest(manifest, matchedRoutes) {
	const hints = [];
	for (const route of matchedRoutes) {
		const routeManifest = manifest.routes[route.id];
		if (!routeManifest) continue;
		for (const link of routeManifest.preloads ?? []) {
			const attrs = getScriptPreloadAttrs(manifest, link);
			const hint = {
				href: attrs.href,
				rel: attrs.rel,
				as: "script"
			};
			if (attrs.crossOrigin !== void 0) hint.crossOrigin = attrs.crossOrigin;
			hints.push(hint);
		}
		for (const link of routeManifest.css ?? []) {
			const stylesheetHref = getStylesheetHref(link);
			if (manifest.inlineCss?.styles[stylesheetHref] !== void 0) continue;
			const resolvedLink = resolveManifestCssLink(link);
			const hint = {
				href: stylesheetHref,
				rel: "preload",
				as: "style"
			};
			if (resolvedLink.crossOrigin !== void 0) hint.crossOrigin = resolvedLink.crossOrigin;
			hints.push(hint);
		}
	}
	return hints;
}
function collectDynamicHintsFromMatches(matches) {
	const hints = [];
	for (const match of matches) {
		const links = match.links;
		if (!Array.isArray(links)) continue;
		for (const link of links) {
			const hint = linkAttrsToEarlyHint(link);
			if (hint) hints.push(hint);
		}
	}
	return hints;
}
function createEarlyHintsEvent(opts) {
	const nextHints = [];
	const nextLinks = [];
	for (const hint of opts.hints) {
		const link = serializeEarlyHint(hint);
		if (opts.sentLinks.has(link)) continue;
		opts.sentLinks.add(link);
		opts.sentHints.push(hint);
		nextHints.push(hint);
		nextLinks.push(link);
	}
	if (!nextHints.length && opts.phase !== "dynamic") return void 0;
	return {
		phase: opts.phase,
		hints: nextHints,
		links: nextLinks,
		allHints: opts.sentHints.slice(),
		allLinks: Array.from(opts.sentLinks)
	};
}
function createResponseLinkHeaderEntries(opts) {
	for (const hint of opts.hints) {
		const link = serializeEarlyHint(hint);
		if (opts.sentLinks.has(link)) continue;
		opts.sentLinks.add(link);
		opts.entries.push({
			phase: opts.phase,
			hint,
			link
		});
	}
}
function getResponseLinkHeaderEntries(opts) {
	if (!opts.filter) return opts.entries.map((entry) => entry.link);
	try {
		const links = [];
		for (const entry of opts.entries) if (opts.filter(entry)) links.push(entry.link);
		return links;
	} catch (err) {
		console.error("Error filtering response Link headers:", err);
		return [];
	}
}
function notifyEarlyHints(phase, event, onEarlyHints) {
	try {
		const result = onEarlyHints(event);
		if (result) Promise.resolve(result).catch((err) => {
			console.error(`Error sending ${phase} early hints:`, err);
		});
	} catch (err) {
		console.error(`Error sending ${phase} early hints:`, err);
	}
}
function getResponseLinkHeaderFilter(responseLinkHeader) {
	if (typeof responseLinkHeader !== "object") return;
	return responseLinkHeader.filter;
}
function appendResponseLinkHeaders(opts) {
	for (const link of getResponseLinkHeaderEntries(opts)) opts.responseHeaders.append("Link", link);
}
function collectResponseLinkHeaderEntries(opts) {
	for (let index = 0; index < opts.event.hints.length; index++) opts.entries.push({
		phase: opts.phase,
		hint: opts.event.hints[index],
		link: opts.event.links[index]
	});
}
function collectEarlyHintsPhase(opts) {
	const event = opts.onEarlyHints ? createEarlyHintsEvent({
		phase: opts.phase,
		hints: opts.hints,
		sentLinks: opts.sentLinks,
		sentHints: opts.sentHints
	}) : void 0;
	if (event) notifyEarlyHints(opts.phase, event, opts.onEarlyHints);
	if (!opts.responseLinkHeaderEntries) return;
	if (event) {
		collectResponseLinkHeaderEntries({
			phase: opts.phase,
			event,
			entries: opts.responseLinkHeaderEntries
		});
		return;
	}
	createResponseLinkHeaderEntries({
		phase: opts.phase,
		hints: opts.hints,
		sentLinks: opts.sentLinks,
		entries: opts.responseLinkHeaderEntries
	});
}
function createEarlyHintsCollector(opts) {
	if (!opts?.onEarlyHints && !opts?.responseLinkHeader) return;
	const sentLinks = /* @__PURE__ */ new Set();
	const sentHints = opts.onEarlyHints ? new Array() : void 0;
	const responseLinkHeaderEntries = opts.responseLinkHeader ? new Array() : void 0;
	const responseLinkHeaderFilter = getResponseLinkHeaderFilter(opts.responseLinkHeader);
	return {
		collectStatic: ({ manifest, matchedRoutes }) => {
			if (!matchedRoutes?.length) return;
			collectEarlyHintsPhase({
				phase: "static",
				hints: collectStaticHintsFromManifest(manifest, matchedRoutes),
				sentLinks,
				sentHints,
				onEarlyHints: opts.onEarlyHints,
				responseLinkHeaderEntries
			});
		},
		collectDynamic: (matches) => {
			collectEarlyHintsPhase({
				phase: "dynamic",
				hints: collectDynamicHintsFromMatches(matches),
				sentLinks,
				sentHints,
				onEarlyHints: opts.onEarlyHints,
				responseLinkHeaderEntries
			});
		},
		appendResponseHeaders: (headers) => {
			if (!responseLinkHeaderEntries?.length) return;
			appendResponseLinkHeaders({
				responseHeaders: headers,
				entries: responseLinkHeaderEntries,
				filter: responseLinkHeaderFilter
			});
		}
	};
}
var LINK_PARAM_TOKEN_RE;
var PRELOAD_AS_VALUES;
var init_early_hints = __esmMin((() => {
	LINK_PARAM_TOKEN_RE = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
	PRELOAD_AS_VALUES = /* @__PURE__ */ new Set([
		"fetch",
		"font",
		"image",
		"script",
		"style",
		"track"
	]);
}));
function normalizeTransformAssetResult(result) {
	if (typeof result === "string") return { href: result };
	return result;
}
function escapeCssString(value) {
	return value.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, "\\a ").replace(/\r/g, "\\d ").replace(/\f/g, "\\c ");
}
async function transformInlineCssTemplate(options) {
	const { strings, urls } = options.template;
	if (strings.length !== urls.length + 1) throw new Error(`TanStack Start inlineCss template for ${options.stylesheetHref} is invalid`);
	let css = strings[0];
	for (let index = 0; index < urls.length; index++) {
		const transformed = normalizeTransformAssetResult(await options.transformFn({
			kind: "css-url",
			url: urls[index],
			stylesheetHref: options.stylesheetHref
		}));
		css += escapeCssString(transformed.href) + strings[index + 1];
	}
	return css;
}
async function transformInlineCssStyles(inlineCss, transformFn) {
	const transformedStyles = {};
	const transformedEntries = await Promise.all(Object.entries(inlineCss.styles).map(async ([stylesheetHref, css]) => {
		const template = inlineCss.templates?.[stylesheetHref];
		return [stylesheetHref, template ? await transformInlineCssTemplate({
			stylesheetHref,
			template,
			transformFn
		}) : css];
	}));
	for (const [stylesheetHref, css] of transformedEntries) transformedStyles[stylesheetHref] = css;
	return {
		styles: transformedStyles,
		...inlineCss.templates ? { templates: inlineCss.templates } : {}
	};
}
function resolveTransformAssetsCrossOrigin(config, kind) {
	if (!config) return void 0;
	if (typeof config === "string") return config;
	return config[kind];
}
function isObjectShorthand(transform) {
	return "prefix" in transform;
}
function resolveTransformAssetsConfig(transform) {
	if (typeof transform === "string") {
		const prefix = transform;
		return {
			type: "transform",
			transformFn: ({ url }) => ({ href: `${prefix}${url}` }),
			cache: true
		};
	}
	if (typeof transform === "function") return {
		type: "transform",
		transformFn: transform,
		cache: true
	};
	if (isObjectShorthand(transform)) {
		const { prefix, crossOrigin } = transform;
		return {
			type: "transform",
			transformFn: ({ url, kind }) => {
				const href = `${prefix}${url}`;
				if (kind === "css-url") return { href };
				const co = resolveTransformAssetsCrossOrigin(crossOrigin, kind);
				return co ? {
					href,
					crossOrigin: co
				} : { href };
			},
			cache: true
		};
	}
	if ("createTransform" in transform && transform.createTransform) return {
		type: "createTransform",
		createTransform: transform.createTransform,
		cache: transform.cache !== false
	};
	return {
		type: "transform",
		transformFn: typeof transform.transform === "string" ? (({ url }) => ({ href: `${transform.transform}${url}` })) : transform.transform,
		cache: transform.cache !== false
	};
}
function assignManifestLink(link, next) {
	if (typeof link === "string") return next.crossOrigin ? next : next.href;
	const nextLink = {
		...link,
		href: next.href
	};
	if (next.crossOrigin) nextLink.crossOrigin = next.crossOrigin;
	else delete nextLink.crossOrigin;
	return nextLink;
}
async function transformManifestAssets(source, transformFn, _opts) {
	const manifest = structuredClone(source);
	const inlineCssEnabled = _opts?.inlineCss !== false;
	const scriptTransforms = /* @__PURE__ */ new Map();
	const transformScript = (url) => {
		const cached = scriptTransforms.get(url);
		if (cached) return cached;
		const transformed = Promise.resolve(transformFn({
			url,
			kind: "script"
		})).then(normalizeTransformAssetResult);
		scriptTransforms.set(url, transformed);
		return transformed;
	};
	if (!inlineCssEnabled) delete manifest.inlineCss;
	else if (manifest.inlineCss) manifest.inlineCss = await transformInlineCssStyles(manifest.inlineCss, transformFn);
	for (const route of Object.values(manifest.routes)) {
		if (route.preloads?.length) route.preloads = await Promise.all(route.preloads.map(async (link) => {
			const result = await transformScript(resolveManifestAssetLink(link).href);
			return assignManifestLink(link, {
				href: result.href,
				crossOrigin: result.crossOrigin
			});
		}));
		if (route.css?.length && !manifest.inlineCss) route.css = await Promise.all(route.css.map(async (link) => {
			const result = normalizeTransformAssetResult(await transformFn({
				url: resolveManifestCssLink(link).href,
				kind: "stylesheet"
			}));
			return assignManifestLink(link, {
				href: result.href,
				crossOrigin: result.crossOrigin
			});
		}));
		if (route.scripts?.length) for (const script of route.scripts) {
			const src = script.attrs?.src;
			if (typeof src !== "string") continue;
			const result = await transformScript(src);
			script.attrs = {
				...script.attrs,
				src: result.href
			};
			if (result.crossOrigin) script.attrs.crossOrigin = result.crossOrigin;
			else delete script.attrs.crossOrigin;
		}
	}
	return manifest;
}
/**
* Builds a final ServerManifest without URL transforms. Used when no
* transformAssets option is provided.
*
* Returns a new manifest object so the cached base manifest is never mutated.
*/
function buildManifest(source, opts) {
	return {
		...source.scriptFormat ? { scriptFormat: source.scriptFormat } : {},
		...opts?.inlineCss !== false && source.inlineCss ? { inlineCss: structuredClone(source.inlineCss) } : {},
		routes: { ...source.routes }
	};
}
var init_transformAssetUrls = __esmMin((() => {}));
function getStaticHandlerInlineCssDefault(handlerInlineCss) {
	if (typeof handlerInlineCss === "function") return;
	return handlerInlineCss ?? true;
}
async function resolveInlineCssForRequest(opts) {
	if (opts.requestInlineCss !== void 0) return opts.requestInlineCss;
	if (typeof opts.handlerInlineCss === "function") return await opts.handlerInlineCss({ request: opts.request });
	return opts.handlerInlineCss ?? true;
}
var init_inlineCss = __esmMin((() => {}));
function createCachedBaseManifestLoader(loadBaseManifest) {
	let baseManifestPromise;
	return () => {
		if (!baseManifestPromise) baseManifestPromise = loadBaseManifest().catch((error) => {
			baseManifestPromise = void 0;
			throw error;
		});
		return baseManifestPromise;
	};
}
function createFinalManifestTransformResolver(transformAssets, opts) {
	const transformConfig = transformAssets !== void 0 ? resolveTransformAssetsConfig(transformAssets) : void 0;
	const cache = transformConfig ? transformConfig.cache : true;
	const warmup = !!transformAssets && typeof transformAssets === "object" && "warmup" in transformAssets && transformAssets.warmup === true;
	let cachedCreateTransformPromise;
	const clearCachedCreateTransform = () => {
		cachedCreateTransformPromise = void 0;
	};
	return {
		cache,
		warmup,
		clearCachedCreateTransform,
		getTransformFn: async (ctx) => {
			if (!transformConfig) return void 0;
			if (transformConfig.type !== "createTransform") return transformConfig.transformFn;
			if (!cache || !opts.cacheCreateTransform) return transformConfig.createTransform(ctx);
			if (!cachedCreateTransformPromise) cachedCreateTransformPromise = Promise.resolve(transformConfig.createTransform(ctx)).catch((error) => {
				clearCachedCreateTransform();
				throw error;
			});
			return cachedCreateTransformPromise;
		}
	};
}
function createFinalManifestResolver(opts) {
	const finalManifestCache = /* @__PURE__ */ new Map();
	const transformResolver = createFinalManifestTransformResolver(opts.transformAssets, { cacheCreateTransform: opts.cacheCreateTransform });
	const handlerDefaultInlineCss = getStaticHandlerInlineCssDefault(opts.inlineCss);
	const getRequestManifestOptions = async (requestOpts) => {
		const transformFn = await transformResolver.getTransformFn({
			warmup: false,
			request: requestOpts.request
		});
		const inlineCss = await resolveInlineCssForRequest({
			request: requestOpts.request,
			handlerInlineCss: opts.inlineCss,
			requestInlineCss: requestOpts.requestInlineCss
		});
		return {
			getBaseManifest: requestOpts.getBaseManifest,
			transformFn,
			cache: transformResolver.cache,
			inlineCss
		};
	};
	const resolveRequest = async (requestOpts, cache) => {
		return resolveFinalManifest({
			...await getRequestManifestOptions(requestOpts),
			finalManifestCache: cache
		});
	};
	return {
		warmup: ({ getBaseManifest }) => warmupFinalManifest({
			enabled: transformResolver.warmup,
			handlerDefaultInlineCss,
			cache: transformResolver.cache,
			finalManifestCache,
			getBaseManifest,
			getTransformFn: () => transformResolver.getTransformFn({ warmup: true }),
			onError: transformResolver.clearCachedCreateTransform
		}),
		resolveCached: (requestOpts) => resolveRequest(requestOpts, finalManifestCache),
		resolveUncached: (requestOpts) => resolveRequest(requestOpts, void 0)
	};
}
function getFinalManifestCacheKey(inlineCss) {
	return inlineCss ? "inline-css" : "linked-css";
}
function cacheFinalManifestPromise(cachedFinalManifestPromises, cacheKey, promise) {
	const cachedFinalManifestPromise = promise.catch((error) => {
		if (cachedFinalManifestPromises.get(cacheKey) === cachedFinalManifestPromise) cachedFinalManifestPromises.delete(cacheKey);
		throw error;
	});
	cachedFinalManifestPromises.set(cacheKey, cachedFinalManifestPromise);
	return cachedFinalManifestPromise;
}
function getOrCreateCachedFinalManifestPromise(cachedFinalManifestPromises, cacheKey, computeFinalManifest) {
	const cachedFinalManifestPromise = cachedFinalManifestPromises.get(cacheKey);
	if (cachedFinalManifestPromise) return cachedFinalManifestPromise;
	return cacheFinalManifestPromise(cachedFinalManifestPromises, cacheKey, Promise.resolve().then(computeFinalManifest));
}
async function buildFinalManifest(opts) {
	return opts.transformFn ? await transformManifestAssets(opts.base, opts.transformFn, { inlineCss: opts.inlineCss }) : buildManifest(opts.base, { inlineCss: opts.inlineCss });
}
async function resolveFinalManifest(opts) {
	const computeFinalManifest = async () => {
		return buildFinalManifest({
			base: await opts.getBaseManifest(),
			transformFn: opts.transformFn,
			inlineCss: opts.inlineCss
		});
	};
	if (opts.finalManifestCache && (!opts.transformFn || opts.cache)) return getOrCreateCachedFinalManifestPromise(opts.finalManifestCache, getFinalManifestCacheKey(opts.inlineCss), computeFinalManifest);
	return computeFinalManifest();
}
function warmupFinalManifest(opts) {
	if (!opts.enabled || opts.handlerDefaultInlineCss === void 0 || !opts.cache) return;
	const inlineCss = opts.handlerDefaultInlineCss;
	const warmupPromise = getOrCreateCachedFinalManifestPromise(opts.finalManifestCache, getFinalManifestCacheKey(inlineCss), async () => {
		const [base, transformFn] = await Promise.all([opts.getBaseManifest(), opts.getTransformFn()]);
		return buildFinalManifest({
			base,
			transformFn,
			inlineCss
		});
	});
	if (opts.onError) warmupPromise.catch(opts.onError);
	return warmupPromise;
}
var init_finalManifest = __esmMin((() => {
	init_transformAssetUrls();
	init_inlineCss();
}));
var ServerFunctionSerializationAdapter;
var init_ServerFunctionSerializationAdapter = __esmMin((() => {
	init_getServerFnById();
	init_esm$3();
	ServerFunctionSerializationAdapter = createSerializationAdapter({
		key: "$TSS/serverfn",
		test: (v) => {
			if (typeof v !== "function") return false;
			if (!(TSS_SERVER_FUNCTION in v)) return false;
			return !!v[TSS_SERVER_FUNCTION];
		},
		toSerializable: ({ serverFnMeta }) => ({ functionId: serverFnMeta.id }),
		fromSerializable: ({ functionId }) => {
			const fn = async (opts, signal) => {
				const serverFn = await getServerFnById(functionId, { origin: "client" });
				const result = await serverFn({
					data: opts?.data,
					context: opts?.context,
					method: serverFn.method ?? "GET"
				}, signal);
				if (result.error !== void 0) throw result.error;
				return result.result;
			};
			return fn;
		}
	});
}));
var init_styles$1 = __esmMin((() => {}));
var styles_default;
var init_styles = __esmMin((() => {
	init_styles$1();
	styles_default = "/assets/styles-Cl17MbS8.css";
}));
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var init_lovable_error_reporting = __esmMin((() => {}));
function getPageBannerImage(pathname) {
	const eventPath = pathname.split("/").slice(0, 3).join("/");
	return PAGE_BANNER_IMAGES[pathname] ?? PAGE_BANNER_IMAGES[eventPath] ?? IMAGES.banner;
}
function getOptimizedBannerImage(imagePath) {
	return imagePath.replace(/\.[^.]+$/, ".webp");
}
var SCHOOL_NAME;
var SCHOOL_TAGLINE;
var NAV;
var CONTACT;
var PAGE_BANNER_IMAGES;
var IMAGES;
var init_site = __esmMin((() => {
	SCHOOL_NAME = "PS Matriculation Higher Secondary School";
	SCHOOL_TAGLINE = "P.S.EDUCATIONAL SOCIETY";
	NAV = [
		{
			label: "Home",
			to: "/"
		},
		{
			label: "About Us",
			to: "/about/managing-committee",
			children: [
				{
					label: "Managing Committee",
					to: "/about/managing-committee"
				},
				{
					label: "History",
					to: "/about/history"
				},
				{
					label: "Facilities",
					to: "/about/facilities"
				}
			]
		},
		{
			label: "Admissions",
			to: "/admissions/uniform",
			children: [
				{
					label: "School Uniform Details",
					to: "/admissions/uniform"
				},
				{
					label: "School Fee",
					to: "/admissions/fee"
				},
				{
					label: "General Instructions",
					to: "/admissions/portal"
				}
			]
		},
		{
			label: "Academic Curriculum",
			to: "/academics/curriculum",
			children: [
				{
					label: "Curriculum",
					to: "/academics/curriculum"
				},
				{
					label: "Activity Schedule",
					to: "/academics/activity-schedule"
				},
				{
					label: "Examination",
					to: "/academics/examination"
				}
			]
		},
		{
			label: "Events",
			to: "/events/akshara-abhyas",
			children: [
				{
					label: "Akshara Abhyas",
					to: "/events/akshara-abhyas"
				},
				{
					label: "Vidhya Pravesh",
					to: "/events/vidhya-pravesh"
				},
				{
					label: "Sports Day",
					to: "/events/sports-day"
				},
				{
					label: "Annual Day",
					to: "/events/annual-day"
				},
				{
					label: "Fancy Dress",
					to: "/events/fancy-dress"
				},
				{
					label: "Primary Annual Day",
					to: "/events/primary-annual-day"
				},
				{
					label: "Primary Sports Day",
					to: "/events/primary-sports-day"
				},
				{
					label: "Independence Day",
					to: "/events/independence-day"
				},
				{
					label: "Republic Day",
					to: "/events/republic-day"
				},
				{
					label: "Project Day",
					to: "/events/project-day"
				}
			]
		},
		{
			label: "Contact",
			to: "/contact"
		}
	];
	CONTACT = {
		address: "P.S. Matriculation Higher Secondary School, No.214, R.K. Mutt Road, Mylapore, Chennai - 600004",
		phone: "044-246-42133",
		email: "psmatric2010@gmail.com"
	};
	PAGE_BANNER_IMAGES = {
		"/about/advisory-board": "/images/banners/about/advisory-board.jpg",
		"/about/facilities": "/images/banners/about/facilities.jpeg",
		"/about/founders-vision": "/images/banners/about/founders-vision.jpg",
		"/about/history": "/images/banners/about/classroom.jpg",
		"/about/managing-committee": "/images/banners/about/classroom.jpg",
		"/about/principals-message": "/images/banners/about/principals-message.jpg",
		"/about/testimonials": "/images/banners/about/testimonials.jpg",
		"/about/vision-mission": "/images/banners/about/vision-mission.jpg",
		"/admissions/faqs": "/images/banners/admissions/faqs.jpg",
		"/admissions/fee": "/images/banners/admissions/fee.jpg",
		"/admissions/online-registration": "/images/banners/admissions/online-registration.jpg",
		"/admissions/portal": "/images/banners/admissions/portal.jpg",
		"/admissions/uniform": "/images/banners/admissions/uniform.jpg",
		"/academics/activity-schedule": "/images/banners/academics/activity-schedule.jpg",
		"/academics/curriculum": "/images/banners/academics/curriculum.jpg",
		"/academics/examination": "/images/banners/academics/exam.jpg",
		"/academics/method-of-evaluation": "/images/banners/academics/method-of-evaluation.jpg",
		"/academics/online-learning": "/images/banners/academics/online-learning.jpg",
		"/academics/student-resource-corner": "/images/banners/academics/student-resource-corner.jpg",
		"/academics/syllabus": "/images/banners/academics/syllabus.jpeg",
		"/academics/teaching-methodology": "/images/banners/academics/teaching-methodology.jpg",
		"/academics/timetable": "/images/banners/academics/timetable.jpg",
		"/alumni-connect": "/images/banners/alumni-connect.jpg",
		"/contact": "/images/banners/contact.png",
		"/life/achievements": "/images/banners/life/achievements.jpg",
		"/life/gallery": "/images/banners/life/gallery.jpg",
		"/life/infrastructure": "/images/banners/life/infrastructure.jpg",
		"/life/student-clubs": "/images/banners/life/student-clubs.jpg",
		"/mandatory-disclosure": "/images/banners/mandatory-disclosure.jpg",
		"/events/akshara-abhyas": "/images/banners/events/akshara-abhyas.JPG",
		"/events/annual-day": "/images/banners/events/annual-day.JPG",
		"/events/fancy-dress": "/images/events/fancy-dress/2025-26/optimized/1.webp",
		"/events/independence-day": "/images/banners/events/independence-day.JPG",
		"/events/primary-annual-day": "/images/events/primary-annual-day/2025-26/optimized/RSMV1509.webp",
		"/events/primary-sports-day": "/images/events/primary-sports-day/2025-26/optimized/RSMV2330.webp",
		"/events/project-day": "/images/banners/events/project-day.JPG",
		"/events/republic-day": "/images/events/republic-day/2025-26/optimized/RSMV0418%20-%20Copy.webp",
		"/events/sports-day": "/images/banners/events/sports-day.JPG",
		"/events/vidhya-pravesh": "/images/banners/events/vidhya-pravesh.jpeg"
	};
	IMAGES = {
		logo: "/images/logo.webp",
		founderlogo: "/images/founderlogo.webp",
		hero: [
			"/images/hero/hero-1.webp",
			"/images/hero/hero-2.webp",
			"/images/hero/hero-3.webp",
			"/images/hero/hero-4.webp"
		],
		principal: "/images/principal.webp",
		correspondent: "/images/correspondent.webp",
		uniform: {
			lkgUkg: "/images/uniform/kg unifrom.webp",
			primary: "/images/uniform/primary uniform.webp",
			secondary: "/images/uniform/Secondary.webp"
		},
		gallery: [
			{
				src: "/images/gallery/gallery-1.webp",
				caption: "Annual Day"
			},
			{
				src: "/images/gallery/gallery-2.webp",
				caption: "Science Lab"
			},
			{
				src: "/images/gallery/gallery-3.webp",
				caption: "Sports Meet"
			},
			{
				src: "/images/gallery/gallery-4.webp",
				caption: "Classrooms"
			},
			{
				src: "/images/gallery/gallery-5.jpg",
				caption: "Cultural Programme"
			},
			{
				src: "/images/gallery/gallery-6.jpg",
				caption: "Library"
			},
			{
				src: "/images/gallery/gallery-7.jpg",
				caption: "Campus"
			},
			{
				src: "/images/gallery/gallery-8.jpg",
				caption: "Student Clubs"
			}
		],
		alumni: [
			"/images/alumni/alumni-1.jpg",
			"/images/alumni/alumni-2.jpg",
			"/images/alumni/alumni-3.jpg"
		],
		about: "/images/about-campus.webp",
		banner: "/images/page-banner.webp"
	};
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var init_utils = __esmMin((() => {}));
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [expanded, setExpanded] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const renderDesktopNavItems = (items, depth = 0) => items.map((item) => {
		const hasChildren = !!item.children?.length;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: cn("relative", depth === 0 ? "group/nav-root" : "group/nav-subitem"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: cn("flex items-center gap-1 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:text-gold", depth > 0 && "flex-1 px-3 py-2 text-xs text-black"),
						activeProps: { className: "text-gold" },
						children: item.label
					}),
					hasChildren && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-3.5 w-3.5", depth > 0 ? "mr-3 text-black" : "text-white") }),
					depth === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute inset-x-3 bottom-0 h-[3px] scale-x-0 bg-gold transition-transform group-hover/nav-root:scale-x-100" })
				]
			}), hasChildren && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: cn("invisible absolute z-50 min-w-60 rounded-b-lg border-t-2 border-gold bg-background py-2 opacity-0 shadow-card transition-all", depth === 0 ? "group-hover/nav-root:visible group-hover/nav-root:translate-y-0 group-hover/nav-root:opacity-100" : "group-hover/nav-subitem:visible group-hover/nav-subitem:translate-y-0 group-hover/nav-subitem:opacity-100", depth === 0 ? "left-0 top-full" : "left-full top-0 ml-1"),
				children: renderDesktopNavItems(item.children, depth + 1)
			})]
		}, item.to);
	});
	const renderMobileNavItems = (items, depth = 0, parentPath = "") => items.map((item) => {
		const hasChildren = !!item.children?.length;
		const itemPath = `${parentPath}/${item.to}`;
		const isExpanded = expanded.has(itemPath);
		if (hasChildren) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "border-b border-cream/10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setExpanded((current) => {
					const next = new Set(current);
					if (next.has(itemPath)) next.delete(itemPath);
					else next.add(itemPath);
					return next;
				}),
				className: "flex w-full items-center justify-between px-5 py-3 text-left text-sm font-semibold uppercase tracking-wider text-white",
				style: { paddingLeft: `${.65 + depth * 1.15}rem` },
				children: [item.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("h-4 w-4 transition-transform text-white", isExpanded && "rotate-180") })]
			}), isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "bg-navy pb-2",
				children: renderMobileNavItems(item.children, depth + 1, itemPath)
			})]
		}, item.to);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "border-b border-cream/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: item.to,
				className: "block px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white",
				style: { paddingLeft: `${.65 + depth * 1.15}rem` },
				children: item.label
			})
		}, item.to);
	});
	(0, import_react.useEffect)(() => {
		setOpen(false);
		setExpanded(/* @__PURE__ */ new Set());
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-50 bg-navy-deep text-secondary transition-shadow", scrolled && "shadow-card"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex items-center justify-between gap-2 py-2 sm:gap-4 sm:py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 items-center gap-2 max-[360px]:gap-1 sm:gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex min-w-0 items-center gap-2 max-[360px]:gap-1 sm:gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: IMAGES.logo,
							alt: "PS Matric logo",
							className: "h-10 w-10 shrink-0 rounded-full bg-cream/10 object-cover shadow-soft ring-2 ring-gold/50 max-[360px]:h-8 max-[360px]:w-8 sm:h-20 sm:w-20",
							onError: (e) => {
								e.currentTarget.style.visibility = "hidden";
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 leading-tight",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-lg font-bold uppercase leading-tight tracking-wide text-cream sm:hidden",
									children: SCHOOL_NAME
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden font-display text-xl font-bold uppercase tracking-wide text-cream sm:block sm:text-2xl lg:text-[1.8rem]",
									children: SCHOOL_NAME
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[9px] font-medium uppercase tracking-[0.16em] text-gold sm:text-xs sm:tracking-[0.22em]",
									children: SCHOOL_TAGLINE
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-10 w-10 shrink-0 overflow-hidden rounded-full bg-cream/10 shadow-soft ring-2 ring-gold/50 max-[360px]:h-8 max-[360px]:w-8 sm:h-20 sm:w-20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: IMAGES.founderlogo,
							alt: "School founder logo",
							className: "h-full w-full object-cover",
							onError: (e) => {
								e.currentTarget.style.display = "none";
								e.currentTarget.parentElement.style.background = "#f6f3eb";
								e.currentTarget.parentElement.innerHTML = "<span class='flex h-full w-full items-center justify-center text-[10px] font-bold uppercase tracking-[0.24em] text-gold'>BRO</span>";
							}
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-cream lg:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "hidden border-t border-cream/10 lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "container-page flex items-stretch justify-center gap-1",
					children: renderDesktopNavItems(NAV)
				})
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-t border-cream/10 px-5 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs uppercase tracking-widest text-gold",
						children: "Menu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Close menu",
						onClick: () => setOpen(false),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5 text-cream" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "max-h-[70vh] overflow-y-auto border-t border-cream/10 pb-4",
					children: renderMobileNavItems(NAV)
				})]
			})
		]
	});
}
var init_SiteHeader = __esmMin((() => {
	init_site();
	init_utils();
}));
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-navy-deep text-cream/85",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-10 py-14 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-bold uppercase text-cream",
						children: SCHOOL_NAME
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm uppercase tracking-[0.18em] text-gold",
						children: SCHOOL_TAGLINE
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-serif text-sm leading-relaxed text-cream/70",
						children: "Nurturing knowledge, character and confidence for generations of learners."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex gap-3",
						children: [Facebook, Youtube].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "Social link",
							className: "rounded-full border border-cream/25 p-2 text-cream transition-colors hover:border-gold hover:text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, i))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-bold uppercase tracking-widest text-gold",
					children: "Reach Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), CONTACT.address]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), CONTACT.phone]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${CONTACT.email}`,
								className: "hover:text-gold",
								children: CONTACT.email
							})]
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-bold uppercase tracking-widest text-gold",
					children: "Location"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 overflow-hidden rounded-lg border border-cream/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "School location map",
						src: "https://www.google.com/maps?q=P.S.+Matriculation+Higher+Secondary+School,+No.214,+R.K.+Mutt+Road,+Mylapore,+Chennai+-+600004&output=embed",
						className: "h-56 w-full border-0",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t border-cream/10 py-5 text-center text-xs text-cream/60",
			children: [
				"Managed by P.S.EDUCATIONAL SOCIETY · © ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				SCHOOL_NAME
			]
		})]
	});
}
var init_SiteFooter = __esmMin((() => {
	init_site();
}));
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$42.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
			]
		})
	});
}
var Route$42;
var init___root = __esmMin((() => {
	init_styles();
	init_lovable_error_reporting();
	init_SiteHeader();
	init_SiteFooter();
	Route$42 = createRootRouteWithContext()({
		head: () => ({
			meta: [
				{ charSet: "utf-8" },
				{
					name: "viewport",
					content: "width=device-width, initial-scale=1"
				},
				{ title: "PS Matric — P.S.EDUCATIONAL SOCIETY" },
				{
					name: "description",
					content: "PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY — academics, admissions, campus life and alumni."
				},
				{
					property: "og:title",
					content: "PS Matric — P.S.EDUCATIONAL SOCIETY"
				},
				{
					property: "og:description",
					content: "A modern learning community rooted in tradition, values and academic excellence."
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			],
			links: [
				{
					rel: "stylesheet",
					href: styles_default
				},
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com"
				},
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossOrigin: "anonymous"
				},
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap"
				},
				{
					rel: "icon",
					href: "/favicon.png",
					type: "image/png"
				}
			]
		}),
		shellComponent: RootShell,
		component: RootComponent,
		notFoundComponent: NotFoundComponent,
		errorComponent: ErrorComponent
	});
}));
/**
* Renders an image from /public. If the file has not been uploaded yet,
* shows a labelled placeholder with the expected upload path.
*/
function SmartImage({ src, alt, className, imgClassName, fallbackSrc, loading = "lazy", fetchPriority }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	const [usingFallback, setUsingFallback] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setFailed(false);
		setUsingFallback(false);
	}, [src]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative overflow-hidden bg-muted", className),
		children: failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full w-full flex-col items-center justify-center gap-2 bg-secondary p-4 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
					className: "h-7 w-7 text-muted-foreground",
					"aria-hidden": true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium text-muted-foreground",
					children: "Upload image to"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", {
					className: "rounded bg-background px-2 py-1 text-[11px] text-primary",
					children: ["public", src]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: usingFallback && fallbackSrc ? fallbackSrc : src,
			alt,
			loading,
			fetchPriority,
			onError: () => {
				if (fallbackSrc && !usingFallback && fallbackSrc !== src) setUsingFallback(true);
				else setFailed(true);
			},
			className: cn("h-full w-full object-cover", imgClassName)
		})
	});
}
var init_SmartImage = __esmMin((() => {
	init_utils();
}));
function useAutoplay(length, delay, paused) {
	const [index, setIndex] = (0, import_react.useState)(0);
	const timer = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (paused || length < 2) return;
		timer.current = setInterval(() => setIndex((i) => (i + 1) % length), delay);
		return () => {
			if (timer.current) clearInterval(timer.current);
		};
	}, [
		length,
		delay,
		paused
	]);
	return {
		index,
		setIndex,
		next: (0, import_react.useCallback)(() => setIndex((i) => (i + 1) % length), [length]),
		prev: (0, import_react.useCallback)(() => setIndex((i) => (i - 1 + length) % length), [length])
	};
}
function Arrows({ onPrev, onNext }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": "Previous slide",
		onClick: onPrev,
		className: "absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-primary shadow-soft transition hover:bg-gold hover:text-navy-deep",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": "Next slide",
		onClick: onNext,
		className: "absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background/85 text-primary shadow-soft transition hover:bg-gold hover:text-navy-deep",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
	})] });
}
function Dots({ count, index, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-x-0 bottom-1 z-10 flex justify-center gap-1",
		children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": `Go to slide ${i + 1}`,
			onClick: () => onSelect(i),
			"aria-current": i === index ? "true" : void 0,
			className: "flex h-11 w-11 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-2.5 rounded-full transition-all", i === index ? "w-7 bg-gold" : "w-2.5 bg-background/70") })
		}, i))
	});
}
function HeroCarousel({ images }) {
	const [paused, setPaused] = (0, import_react.useState)(false);
	const { index, setIndex, next, prev } = useAutoplay(images.length, 5e3, paused);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative aspect-video w-full overflow-hidden bg-navy-deep sm:aspect-auto sm:h-[62vh] sm:min-h-[420px]",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		children: [
			images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("absolute inset-0 transition-opacity duration-1000", i === index ? "opacity-100" : "opacity-0"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
					src,
					alt: "Campus",
					className: "h-full w-full",
					imgClassName: "object-contain sm:object-cover"
				})
			}, src)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrows, {
				onPrev: prev,
				onNext: next
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dots, {
				count: images.length,
				index,
				onSelect: setIndex
			})
		]
	});
}
function GalleryCarousel({ slides }) {
	const [paused, setPaused] = (0, import_react.useState)(false);
	const { index, setIndex, next, prev } = useAutoplay(slides.length, 4e3, paused);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-2xl shadow-card",
		onMouseEnter: () => setPaused(true),
		onMouseLeave: () => setPaused(false),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-[16/9] w-full",
				children: slides.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("absolute inset-0 transition-opacity duration-700", i === index ? "opacity-100" : "opacity-0"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
						src: s.src,
						alt: s.caption ?? "Gallery image",
						className: "h-full w-full"
					}), s.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 to-transparent px-6 pb-12 pt-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xl font-bold uppercase tracking-wide text-cream",
							children: s.caption
						})
					})]
				}, s.src))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrows, {
				onPrev: prev,
				onNext: next
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dots, {
				count: slides.length,
				index,
				onSelect: setIndex
			})
		]
	});
}
var init_Carousels = __esmMin((() => {
	init_SmartImage();
	init_utils();
}));
var routes_exports = /* @__PURE__ */ __exportAll({ component: () => Home });
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroCarousel, { images: IMAGES.hero }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-background py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid items-center gap-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
					src: IMAGES.about,
					alt: "Campus",
					className: "aspect-[4/3] rounded-2xl shadow-card"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[0.3em] text-gold",
							children: "About Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold uppercase text-primary sm:text-4xl",
							children: "A legacy of learning"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-4 font-serif text-[17px] leading-8 text-foreground/85",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Founded under the aegis of P.S.EDUCATIONAL SOCIETY, ",
								SCHOOL_NAME,
								" has grown from a small neighbourhood school into one of the city's most trusted institutions."
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our classrooms blend a rigorous curriculum with modern teaching practice, while sport, art and service keep learning joyful and grounded in values." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about/history",
							className: "link-underline mt-6 inline-block font-semibold",
							children: "Know More"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 rounded-2xl bg-background p-6 shadow-card sm:p-10 md:grid-cols-[320px_1fr] md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-navy p-3 shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
								src: IMAGES.correspondent,
								alt: "Correspondent placeholder",
								className: "aspect-[3/4] rounded-xl"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-center font-display text-lg font-bold uppercase text-primary",
							children: "Honorary Correspondent [T.G.SHANKAR]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-xs uppercase tracking-widest text-muted-foreground",
							children: "B.Sc., ACA"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-bold uppercase tracking-[0.3em] text-gold",
							children: "Correspondent's Desk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold uppercase text-primary sm:text-4xl",
							children: "From the Correspondent's Desk"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-4 font-serif text-[17px] leading-8 text-foreground/85",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our respectful salutations to our revered Founder, Sri Pennathur Subramania Iyer, a true philanthropist who devoted his wealth, efforts and vision to the cause of education, whose ideals continue to illuminate our path." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Welcome to the website of P.S. Matriculation Higher Secondary School." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold italic text-gold",
									children: "“Tamaso Mā Jyotir Gamaya”"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This timeless prayer beautifully reflects the purpose of education: to dispel ignorance, awaken knowledge, nurture values and empower every child to move towards a brighter and more meaningful future." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about/correspondents-message",
							className: "link-underline mt-6 inline-block font-semibold",
							children: "Read More"
						})
					] })]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 rounded-2xl bg-background p-6 shadow-card sm:p-10 md:grid-cols-[320px_1fr] md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl bg-navy p-3 shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
								src: IMAGES.principal,
								alt: "Principal",
								className: "aspect-[3/4] rounded-xl"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-center font-display text-lg font-bold uppercase text-primary",
							children: "Principal [T.MEERA DEVI]"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-center text-xs uppercase tracking-widest text-muted-foreground",
							children: "M.Com., M.Ed."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl font-bold uppercase text-primary sm:text-4xl",
							children: ["Welcome to ", SCHOOL_NAME]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-serif text-lg italic text-gold",
							children: "The Architect of Tomorrow"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-4 font-serif text-[17px] leading-8 text-foreground/85",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Education, to us, is far more than the pursuit of marks. It is the patient work of shaping curious minds, kind hearts and resilient character." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every child who walks through our gates carries a distinct spark, and our teachers take it upon themselves to discover and nurture it. We encourage questions, celebrate effort and treat failure as an honest teacher." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I invite you to visit our campus, meet our faculty and see for yourself the warmth that has defined this school for decades." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about/principals-message",
							className: "link-underline mt-6 inline-block font-semibold",
							children: "Read More"
						})
					] })]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-navy-deep py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page grid grid-cols-2 gap-8 text-center md:grid-cols-4",
				children: STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "mx-auto h-7 w-7 text-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-display text-3xl font-bold text-cream",
						children: s.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-widest text-cream/70",
						children: s.label
					})
				] }, s.label))
			})
		})
	] });
}
var STATS;
var init_routes$1 = __esmMin((() => {
	init_Carousels();
	init_SmartImage();
	init_site();
	STATS = [
		{
			icon: CalendarDays,
			value: "35+",
			label: "Years of Legacy"
		},
		{
			icon: Users,
			value: "1200+",
			label: "Students"
		},
		{
			icon: GraduationCap,
			value: "50+",
			label: "Faculty Members"
		}
	];
}));
var $$splitComponentImporter$41;
var Route$41;
var init_routes = __esmMin((() => {
	$$splitComponentImporter$41 = () => Promise.resolve().then(() => (init_routes$1(), routes_exports));
	Route$41 = createFileRoute("/")({
		head: () => ({ meta: [
			{ title: "PS Matric — P.S.EDUCATIONAL SOCIETY | Chennai" },
			{
				name: "description",
				content: "PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY — academics, admissions, campus life and alumni."
			},
			{
				property: "og:title",
				content: "PS Matric — P.S.EDUCATIONAL SOCIETY"
			},
			{
				property: "og:description",
				content: "A modern learning community rooted in tradition, values and academic excellence."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$41, "component")
	});
}));
function PageBanner({ title, subtitle, showImage = true }) {
	const bannerImage = getOptimizedBannerImage(getPageBannerImage(useRouterState({ select: (state) => state.location.pathname })));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `relative w-full overflow-hidden ${showImage ? "h-56 bg-navy-deep sm:h-64" : "border-b border-border bg-cream py-10 sm:py-14"}`,
		children: [showImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
			src: bannerImage,
			fallbackSrc: getOptimizedBannerImage(IMAGES.banner),
			alt: "",
			className: "absolute inset-0 h-full w-full",
			loading: "eager",
			fetchPriority: "high"
		}, bannerImage), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/40" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `container-page relative flex flex-col justify-center ${showImage ? "h-full" : "border-l-4 border-gold py-1 pl-5 sm:pl-7"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: `font-display text-3xl font-bold uppercase sm:text-5xl ${showImage ? "text-cream" : "text-primary"}`,
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: `mt-2 max-w-2xl font-serif ${showImage ? "text-cream/80" : "text-muted-foreground"}`,
					children: subtitle
				}),
				showImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-4 h-1 w-20 bg-gold" })
			]
		})]
	});
}
function ContentPage({ title, subtitle, children, showBannerImage = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
		title,
		subtitle,
		showImage: showBannerImage
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-8 sm:py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
			className: "container-page max-w-4xl space-y-5 font-serif text-base leading-7 text-foreground/90 sm:text-[17px] sm:leading-8 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:text-primary [&_li]:ml-5 [&_li]:list-disc",
			children
		})
	})] });
}
var init_PageShell = __esmMin((() => {
	init_SmartImage();
	init_site();
}));
var alumni_connect_exports = /* @__PURE__ */ __exportAll({ component: () => Page$27 });
function Page$27() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Alumni Connect",
		subtitle: "Once ours, always ours",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Stay Connected" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our alumni serve across medicine, engineering, law, the arts, defence, business and public service. The alumni association keeps that network alive through reunions, mentoring and campus events." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Give Back" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mentor current students on careers and higher studies." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Speak at assemblies, club sessions and career fairs." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Support scholarships and infrastructure projects." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Register" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Write to info@psmatric.in with your name, batch year and current profession to be added to the alumni directory." })
		]
	});
}
var init_alumni_connect$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$40;
var Route$40;
var init_alumni_connect = __esmMin((() => {
	$$splitComponentImporter$40 = () => Promise.resolve().then(() => (init_alumni_connect$1(), alumni_connect_exports));
	Route$40 = createFileRoute("/alumni-connect")({
		head: () => ({ meta: [
			{ title: "Alumni Connect | PS Matric" },
			{
				name: "description",
				content: "Alumni Connect — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Alumni Connect | PS Matric"
			},
			{
				property: "og:description",
				content: "Alumni Connect — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$40, "component")
	});
}));
var contact_exports = /* @__PURE__ */ __exportAll({ component: () => ContactPage });
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
		title: "Contact",
		subtitle: "We would love to hear from you"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-8 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start rounded-2xl bg-secondary p-6 shadow-soft sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-6 w-6 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold uppercase text-black",
							children: "Alumni Connect"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-serif leading-7 text-foreground/85",
						children: "Are you a PS Matric alumnus? Stay connected with your school community and share career opportunities with fellow alumni and current students. Register to help us build a stronger network for mentorship, professional connections and future opportunities."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 w-full rounded-xl border border-border bg-background p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold uppercase text-black",
							children: "Ways to get involved"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, {
										className: "mt-1 h-5 w-5 shrink-0 text-gold",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-semibold text-black",
										children: "Share career opportunities"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-serif text-sm leading-6 text-foreground/75",
										children: "Let fellow alumni and students know about openings in your field."
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {
										className: "mt-1 h-5 w-5 shrink-0 text-gold",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-semibold text-black",
										children: "Guide the next generation"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-serif text-sm leading-6 text-foreground/75",
										children: "Share your experience and help students explore career paths."
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsersRound, {
										className: "mt-1 h-5 w-5 shrink-0 text-gold",
										"aria-hidden": "true"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-semibold text-black",
										children: "Reconnect with alumni"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-serif text-sm leading-6 text-foreground/75",
										children: "Build professional connections across batches and industries."
									})] })]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://docs.google.com/forms/d/e/1FAIpQLSdOGX6HjJPYuJWGXm5vmHEbTsUkzd9WLvz0n99Prej9dm7ifw/viewform?usp=publish-editor",
						target: "_blank",
						rel: "noreferrer",
						className: "mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
						children: ["Register as an Alum", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-5 font-display text-2xl font-bold uppercase text-black",
				children: "Address & Contact Details"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 rounded-xl bg-secondary p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold uppercase text-black",
							children: "Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-serif text-foreground/85",
							children: CONTACT.address
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 rounded-xl bg-secondary p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold uppercase text-black",
							children: "Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${CONTACT.phone}`,
							className: "mt-1 inline-block font-serif link-underline",
							children: CONTACT.phone
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 rounded-xl bg-secondary p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-5 w-5 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold uppercase text-black",
							children: "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${CONTACT.email}`,
							className: "mt-1 inline-block font-serif link-underline",
							children: CONTACT.email
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 rounded-xl bg-secondary p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-5 w-5 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-bold uppercase text-black",
							children: "Office Hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-serif text-foreground/85",
							children: "Monday to Friday, 9:00 a.m. – 4:00 p.m."
						})] })]
					})
				]
			})] })]
		})
	})] });
}
var init_contact$1 = __esmMin((() => {
	init_PageShell();
	init_site();
}));
var $$splitComponentImporter$39;
var Route$39;
var init_contact = __esmMin((() => {
	$$splitComponentImporter$39 = () => Promise.resolve().then(() => (init_contact$1(), contact_exports));
	Route$39 = createFileRoute("/contact")({
		head: () => ({ meta: [
			{ title: "Contact Us | PS Matric" },
			{
				name: "description",
				content: "Address, phone number and email contact for PS Matric, Chennai."
			},
			{
				property: "og:title",
				content: "Contact Us | PS Matric"
			},
			{
				property: "og:description",
				content: "Get in touch with PS Matriculation Higher Secondary School."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$39, "component")
	});
}));
var mandatory_disclosure_exports = /* @__PURE__ */ __exportAll({ component: () => Page$26 });
function Page$26() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Mandatory Disclosure",
		subtitle: "Statutory information",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "General Information" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Name of school: PS Matriculation Higher Secondary School" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Managed by: P.S.EDUCATIONAL SOCIETY" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Recognition / affiliation details: [To be updated]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "School code: [To be updated]" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Documents & Information" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Copies of the recognition certificate, trust deed, no-objection certificate, building safety certificate, fire safety certificate and fee structure are available at the school office and will be published here." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Staff Details" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Principal, teaching and non-teaching staff details, along with teacher-student ratio, are available on request." })
		]
	});
}
var init_mandatory_disclosure$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$38;
var Route$38;
var init_mandatory_disclosure = __esmMin((() => {
	$$splitComponentImporter$38 = () => Promise.resolve().then(() => (init_mandatory_disclosure$1(), mandatory_disclosure_exports));
	Route$38 = createFileRoute("/mandatory-disclosure")({
		head: () => ({ meta: [
			{ title: "Mandatory Disclosure | PS Matric" },
			{
				name: "description",
				content: "Mandatory Disclosure — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Mandatory Disclosure | PS Matric"
			},
			{
				property: "og:description",
				content: "Mandatory Disclosure — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$38, "component")
	});
}));
var about_advisory_board_exports = /* @__PURE__ */ __exportAll({ component: () => Page$25 });
function Page$25() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Advisory Board",
		subtitle: "Guidance and governance",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Board of Management" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The school is governed by the managing committee of P.S.EDUCATIONAL SOCIETY, supported by an advisory board of educationists, alumni and professionals." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Chairperson — [Name]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Secretary — [Name]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Treasurer — [Name]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Academic Advisor — [Name]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Alumni Representative — [Name]" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The board meets regularly to review academic performance, infrastructure planning, staff development and student welfare." })
		]
	});
}
var init_about_advisory_board$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$37;
var Route$37;
var init_about_advisory_board = __esmMin((() => {
	$$splitComponentImporter$37 = () => Promise.resolve().then(() => (init_about_advisory_board$1(), about_advisory_board_exports));
	Route$37 = createFileRoute("/about/advisory-board")({
		head: () => ({ meta: [
			{ title: "Advisory Board | PS Matric" },
			{
				name: "description",
				content: "Advisory Board — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Advisory Board | PS Matric"
			},
			{
				property: "og:description",
				content: "Advisory Board — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$37, "component")
	});
}));
var about_correspondents_message_exports = /* @__PURE__ */ __exportAll({ component: () => Page$24 });
function Page$24() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentPage, {
		title: "Correspondent’s Message",
		subtitle: "From the Correspondent’s Desk",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_280px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our respectful salutations to our revered Founder, Sri Pennathur Subramania Iyer, a true philanthropist who devoted his wealth, efforts and vision to the cause of education, whose ideals continue to illuminate our path." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Welcome to the website of P.S. Matriculation Higher Secondary School." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold italic text-gold",
						children: "“Tamaso Mā Jyotir Gamaya”"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This timeless prayer beautifully reflects the purpose of education: to dispel ignorance, awaken knowledge, nurture values and empower every child to move towards a brighter and more meaningful future." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "At P.S. Matriculation Higher Secondary School, we strive to blend our rich heritage with the aspirations of the present, providing our students with a safe, nurturing and inspiring environment in which they can learn, grow and serve society in all walks of life." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Guided by the ideals of our Founder and strengthened by the commitment of our teachers, staff, parents, alumni and well-wishers, we remain dedicated to academic excellence, character, discipline and responsible citizenship." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "May the light of knowledge and wisdom continue to guide every member of our school family." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold italic text-gold",
						children: "Tamaso Mā Jyotir Gamaya."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"With warm regards,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "T.G. SHANKAR" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"B.Sc., ACA"
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "flex w-full flex-col items-center justify-self-center md:mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
					src: IMAGES.correspondent,
					alt: "Correspondent T.G. Shankar",
					className: "aspect-[3/4] w-full max-w-[280px] rounded-[2rem] bg-navy p-3 shadow-card",
					imgClassName: "h-full w-full rounded-[1.25rem] object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-3 text-center text-sm text-foreground/80",
					children: [
						"Honorary Correspondent [T.G. Shankar]",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"B.Sc., ACA"
					]
				})]
			})]
		})
	});
}
var init_about_correspondents_message$1 = __esmMin((() => {
	init_PageShell();
	init_SmartImage();
	init_site();
}));
var $$splitComponentImporter$36;
var Route$36;
var init_about_correspondents_message = __esmMin((() => {
	$$splitComponentImporter$36 = () => Promise.resolve().then(() => (init_about_correspondents_message$1(), about_correspondents_message_exports));
	Route$36 = createFileRoute("/about/correspondents-message")({
		head: () => ({ meta: [
			{ title: "Correspondent’s Message | PS Matric" },
			{
				name: "description",
				content: "A message from the Correspondent of PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Correspondent’s Message | PS Matric"
			},
			{
				property: "og:description",
				content: "A message from the Correspondent of PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$36, "component")
	});
}));
var about_facilities_exports = /* @__PURE__ */ __exportAll({ component: () => Page$23 });
function Page$23() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Facilities",
		subtitle: "Learning, safety and enrichment",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Extra Curricular Activities" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Various associations and clubs function in the school, including the Literary Association, Sanskrit Club, Socio-Economic Club, Science Club and Eco Club. Membership is open to students of Standards VII to XII and is optional. Activities include discussions, debates, guest lectures, project work, exhibitions, educational excursions and field trips." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Quiz programmes are conducted for Standards I to XII according to their respective levels on an inter-house basis." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Elocution, handwriting and recitation competitions are held for Standards I to V." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Scouts and Guides and RSP membership are optional." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Clubs and Bull Bull for Standards IV and V are optional." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Essay-writing, extempore speech and debate competitions are conducted for Standards VI to XII." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Arts and crafts competitions are held for all standards." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Students are encouraged and guided to take part in various inter-school competitions." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Students are encouraged and trained to take part in zonal and district-level sports and games meets. Inter-house matches are also held." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Students Safety Insurance Scheme" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "An innovative Students Safety Insurance Scheme covering all the students of the school has been introduced. The premium for this insurance scheme is borne by the Management." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Smart Class" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Classroom learning has undergone a metamorphosis. Smart Classes enhance children's learning skills by empowering teachers with computer-based technology such as smart panels. All classrooms and two labs in the school have this facility." })
		]
	});
}
var init_about_facilities$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$35;
var Route$35;
var init_about_facilities = __esmMin((() => {
	$$splitComponentImporter$35 = () => Promise.resolve().then(() => (init_about_facilities$1(), about_facilities_exports));
	Route$35 = createFileRoute("/about/facilities")({
		head: () => ({ meta: [
			{ title: "Facilities | PS Matric" },
			{
				name: "description",
				content: "Facilities — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Facilities | PS Matric"
			},
			{
				property: "og:description",
				content: "Facilities — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$35, "component")
	});
}));
var about_founders_vision_exports = /* @__PURE__ */ __exportAll({ component: () => Page$22 });
function Page$22() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Founders Vision",
		subtitle: "The idea that started it all",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "A School for Every Family" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our founders believed that quality education should never be a privilege of a few. They envisioned a school where children from every background could learn together with dignity." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Values Before Everything" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "They insisted that discipline, honesty and service be taught as seriously as mathematics and science — a principle that continues to shape school life today." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Carrying It Forward" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Each new facility, programme and appointment is measured against that founding intent: does it serve the child, and does it serve the community?" })
		]
	});
}
var init_about_founders_vision$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$34;
var Route$34;
var init_about_founders_vision = __esmMin((() => {
	$$splitComponentImporter$34 = () => Promise.resolve().then(() => (init_about_founders_vision$1(), about_founders_vision_exports));
	Route$34 = createFileRoute("/about/founders-vision")({
		head: () => ({ meta: [
			{ title: "Founders Vision | PS Matric" },
			{
				name: "description",
				content: "Founders Vision — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Founders Vision | PS Matric"
			},
			{
				property: "og:description",
				content: "Founders Vision — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$34, "component")
	});
}));
var Dialog;
var DialogTrigger;
var DialogPortal;
var DialogOverlay;
var DialogContent;
var DialogHeader;
var DialogFooter;
var DialogTitle;
var DialogDescription;
var init_dialog = __esmMin((() => {
	init_utils();
	Dialog = Dialog$1;
	DialogTrigger = DialogTrigger$1;
	DialogPortal = DialogPortal$1;
	DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		ref,
		className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
		...props
	}));
	DialogOverlay.displayName = DialogOverlay$1.displayName;
	DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		ref,
		className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})]
	})] }));
	DialogContent.displayName = DialogContent$1.displayName;
	DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
		...props
	});
	DialogHeader.displayName = "DialogHeader";
	DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
		...props
	});
	DialogFooter.displayName = "DialogFooter";
	DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		ref,
		className: cn("text-lg font-semibold leading-none tracking-tight", className),
		...props
	}));
	DialogTitle.displayName = DialogTitle$1.displayName;
	DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		ref,
		className: cn("text-sm text-muted-foreground", className),
		...props
	}));
	DialogDescription.displayName = DialogDescription$1.displayName;
}));
var about_history_exports = /* @__PURE__ */ __exportAll({ component: () => Page$21 });
function Page$21() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "History",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "P.S. Matriculation Higher Secondary School" }),
				" was established in June 1988 with the vision of providing quality education to students at a highly competitive cost. The school began its journey with ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "60 students" }),
				" and has today grown into a thriving institution with a strength of ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "1,205 students" }),
				". Over the years, the school’s dynamic and enriching educational environment has nurtured, empowered, and enlightened several generations of learners."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"The institution is a unit of the",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "P.S. Educational Society, the educational wing of P.S. Charities" }),
				", founded in 1905 with a steadfast commitment to promoting education along with character building and holistic development."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				" ",
				"The school was granted affiliation by the ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Matriculation Board in 1990" }),
				", marking an important milestone in its journey towards providing structured and quality education. Since its inception, the institution has remained committed to academic excellence, discipline, values, and the overall development of every student."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				" ",
				"With a strong legacy spanning several decades,",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "P.S. Matriculation Higher Secondary School" }),
				" continues to strive towards creating responsible, confident, and well-rounded individuals who are equipped to meet the challenges of a rapidly changing world."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "pt-4 normal-case",
				children: "Founder:"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-[1fr_250px] md:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Brahmasri Pennathur Subramanya Iyer was born in March, 1860 in a middle class family at Chittoor. He was a man of great courage, dedication and generosity. His graceful demeanour and elegance in manners made him stand out. In 1890, he was made the Commissioner for the Mylapore Division, a seat he retained till his death in 1901. It was at his instance and through his influence that the underground drainage works were done in the Mylapore Division, replacing the open drains that had existed before as a hotbed of infections of various kinds. He thought that the best use he could make of his wealth was to utilise it for the spread of knowledge and education of the upcoming generations. This led to the formation of the P. S. Charities which has expanded its service in the cause of education and stands glorious after 100+ years. He bequeathed all his property towards P.S. Charities." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "md:justify-self-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Expand founder photo",
							className: "block w-full cursor-zoom-in rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
								src: "/images/Founder.png",
								alt: "Shri. Pennathur Subramanya Iyer",
								className: "mx-auto aspect-[4/5] w-full max-w-[250px] border-2 border-primary p-1"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "max-w-5xl border-0 bg-transparent p-2 shadow-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "sr-only",
							children: "Shri. Pennathur Subramanya Iyer"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/founderlogo.jpeg",
							alt: "Shri. Pennathur Subramanya Iyer",
							className: "mx-auto max-h-[85vh] w-auto max-w-full rounded object-contain"
						})]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-2 text-center font-sans text-sm leading-5 text-foreground",
						children: [
							"Shri. Pennathur Subramanya Iyer",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"(1830- 1901)"
						]
					})]
				})]
			})
		]
	});
}
var init_about_history$1 = __esmMin((() => {
	init_PageShell();
	init_SmartImage();
	init_dialog();
}));
var $$splitComponentImporter$33;
var Route$33;
var init_about_history = __esmMin((() => {
	$$splitComponentImporter$33 = () => Promise.resolve().then(() => (init_about_history$1(), about_history_exports));
	Route$33 = createFileRoute("/about/history")({
		head: () => ({ meta: [
			{ title: "History | PS Matric" },
			{
				name: "description",
				content: "History — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "History | PS Matric"
			},
			{
				property: "og:description",
				content: "History — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$33, "component")
	});
}));
var about_managing_committee_exports = /* @__PURE__ */ __exportAll({ component: () => Page$20 });
function Page$20() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Managing Committee",
		subtitle: "School leadership and governance",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Members of the P.S.EDUCATIONAL Society 2026-27" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dr. Sri. K.V.S. Gopalakrishnan - President" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sri. C.V. Krishnan - Secretary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sri. P.S. Prabhakar - Treasurer" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sri. PC. Ramakrishna - Trustee Member" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sri. K.V. Ramani - Trustee Member" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dr. Sri. T.K. Varadarajan - Trustee Member" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sri. T.G. Suresh - Trustee Member" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sri. K. Harishankar - Trustee Member" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sri. S. Chandrasekaran - Trustee Member" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Gp. Capt. (Retd) R. Vijayakumar - Honorary Member" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dr. Dharini Krishnan - Honorary Member" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Col. C. R. Devanathan - Honorary Member" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Smt. Shyamala Jayaraman - Honorary Member" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sri. R.D. Dhamodharan - Honorary Member" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "School Managing Committee 2026-27" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sri. K. Hari Shankar - President" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sri. T.G. Shankar - Secretary / Correspondent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dr. Sri. R. Dhamodharan - Member" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dr. Smt. Dharini Krishnan - Member" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sri. R. Uppili - Member" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Smt. T. Meeradevi - Principal" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Smt. Jithender Kataria - Member (Vice Principal)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Smt. T. Rama Kalpana - Member (Vice Principal)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Smt. Sudha Prabha - Member (Teacher)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Smt. Usha Balasubramaniam - Member (Office Staff)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sri. V. Sriram - President (PTA)" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Parents Teachers Association" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "Executive Committee Members 2026-27" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sri. V. Sriram - President" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Smt. A. Dhivya - Vice President" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sri. T.G. Shankar - Treasurer / Correspondent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sri. M. Venkatesan - Secretary (P)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Smt. S. Santhi - Joint Secretary / Parent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Smt. T. Meera Devi - Secretary / Principal" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Smt. T. Rama Kalpana - Joint Secretary / Vice Principal" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Smt. Eswari - Member (P)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Smt. V. Ramachandran - Member (P)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Smt. Jithendar Kataria - Member (Vice Principal)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sri. Boopathi - Member (P)" })
			] })
		]
	});
}
var init_about_managing_committee$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$32;
var Route$32;
var init_about_managing_committee = __esmMin((() => {
	$$splitComponentImporter$32 = () => Promise.resolve().then(() => (init_about_managing_committee$1(), about_managing_committee_exports));
	Route$32 = createFileRoute("/about/managing-committee")({
		head: () => ({ meta: [
			{ title: "Managing Committee | PS Matric" },
			{
				name: "description",
				content: "Managing Committee — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Managing Committee | PS Matric"
			},
			{
				property: "og:description",
				content: "Managing Committee — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$32, "component")
	});
}));
var about_principals_message_exports = /* @__PURE__ */ __exportAll({ component: () => Page$19 });
function Page$19() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentPage, {
		title: "Principal’s Message",
		subtitle: "The Architect of Tomorrow",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_280px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "It gives me immense pleasure to welcome you to our school. We believe education goes beyond marks and academic excellence. Our aim is to nurture curious minds, compassionate hearts, confident individuals and strong character." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every child is unique with immense potential. Our dedicated teachers strive to nurture their talents, encourage creativity and help them learn from challenges. We prepare students not only for examinations but also for life, instilling teamwork, courage, responsibility, leadership and compassion." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Our classrooms, laboratories, libraries, playgrounds and co-curricular activities support the holistic development of every child." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Parents are our valued partners in this journey. Your involvement and encouragement play a vital role in your child's growth." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I warmly invite you to visit our campus, interact with our faculty and experience the values and commitment that define our institution. Together we shall inspire every child to learn with curiosity, grow with confidence, lead with integrity and live with purpose." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"With warm regards,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "T. MEERA DEVI" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"M.Com., M.Ed."
					] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "flex w-full flex-col items-center justify-self-center md:mt-[125px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
					src: IMAGES.principal,
					alt: "Principal T. Meera Devi",
					className: "aspect-[347/463] w-full max-w-[347px] rounded-[2rem] bg-navy p-3 shadow-card",
					imgClassName: "h-full w-full rounded-[1.25rem] object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-3 text-center text-sm text-foreground/80",
					children: [
						"Principal [T. Meera Devi]",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"M.Com., M.Ed."
					]
				})]
			})]
		})
	});
}
var init_about_principals_message$1 = __esmMin((() => {
	init_PageShell();
	init_SmartImage();
	init_site();
}));
var $$splitComponentImporter$31;
var Route$31;
var init_about_principals_message = __esmMin((() => {
	$$splitComponentImporter$31 = () => Promise.resolve().then(() => (init_about_principals_message$1(), about_principals_message_exports));
	Route$31 = createFileRoute("/about/principals-message")({
		head: () => ({ meta: [
			{ title: "Principal’s Message | PS Matric" },
			{
				name: "description",
				content: "Principal's Message — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Principal’s Message | PS Matric"
			},
			{
				property: "og:description",
				content: "Principal's Message — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$31, "component")
	});
}));
var about_testimonials_exports = /* @__PURE__ */ __exportAll({ component: () => Page$18 });
function Page$18() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Testimonials",
		subtitle: "What our community says",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Parents" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "“The teachers know my daughter as a person, not a roll number. That has made all the difference in her confidence.” — Parent, Class VIII" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Students" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "“There is always something happening — a club, a match, a science fair. School never feels like a chore.” — Student, Class XI" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Alumni" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "“I carry the discipline and warmth of this school into everything I do today.” — Alumnus, Batch of 2016" })
		]
	});
}
var init_about_testimonials$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$30;
var Route$30;
var init_about_testimonials = __esmMin((() => {
	$$splitComponentImporter$30 = () => Promise.resolve().then(() => (init_about_testimonials$1(), about_testimonials_exports));
	Route$30 = createFileRoute("/about/testimonials")({
		head: () => ({ meta: [
			{ title: "Testimonials | PS Matric" },
			{
				name: "description",
				content: "Testimonials — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Testimonials | PS Matric"
			},
			{
				property: "og:description",
				content: "Testimonials — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$30, "component")
	});
}));
var about_vision_mission_exports = /* @__PURE__ */ __exportAll({ component: () => Page$17 });
function Page$17() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Vision & Mission",
		subtitle: "What we stand for",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Our Vision" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "To be a school where every child is known by name, challenged by ideas and guided by values — an institution that sends confident, compassionate citizens into the world." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Our Mission" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Deliver a rigorous, future-ready curriculum grounded in conceptual understanding." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Nurture character through service, sport, art and everyday classroom culture." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Support every learner with individual attention and a strong mentor system." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Partner closely with parents as co-educators in a child's growth." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Our Core Values" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Integrity, respect, curiosity, perseverance and service to community guide every decision we make on campus." })
		]
	});
}
var init_about_vision_mission$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$29;
var Route$29;
var init_about_vision_mission = __esmMin((() => {
	$$splitComponentImporter$29 = () => Promise.resolve().then(() => (init_about_vision_mission$1(), about_vision_mission_exports));
	Route$29 = createFileRoute("/about/vision-mission")({
		head: () => ({ meta: [
			{ title: "Vision & Mission | PS Matric" },
			{
				name: "description",
				content: "Vision & Mission — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Vision & Mission | PS Matric"
			},
			{
				property: "og:description",
				content: "Vision & Mission — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$29, "component")
	});
}));
var academics_activity_schedule_exports = /* @__PURE__ */ __exportAll({ component: () => Page$16 });
function Page$16() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Activity Schedule",
		subtitle: "School day and activity timings",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "School Work Schedule" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "School works from Monday to Friday for Standards LKG to V. Prior announcement will be made if Standards I to V work on Saturdays." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "School works from Monday to Saturday for Standards VI to XII." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fine Arts sessions for Standards I to III are conducted within school timings." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Club activities, excursions, field trips and competitions are organised on Fridays and Saturdays within school timings for Standards VI to IX." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "School Timings" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "LKG: 8:45 a.m. to 12:00 noon" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "UKG: 8:45 a.m. to 1:45 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Standards I and II: 8:45 a.m. to 2:25 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Standards III to V: 8:45 a.m. to 3:20 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Standards VI to XII: 8:45 a.m. to 4:00 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Lunch break: 12:35 p.m. to 1:05 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Morning assembly: 8:45 a.m. to 9:00 a.m." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Duration of Periods" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "First bell: 8:45 a.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Assembly: 8:45 a.m. to 9:00 a.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "I Period: 9:00 a.m. to 9:40 a.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "II Period: 9:40 a.m. to 10:20 a.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "III Period: 10:20 a.m. to 11:00 a.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Local break: 11:00 a.m. to 11:15 a.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "IV Period: 11:15 a.m. to 11:55 a.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "V Period: 11:55 a.m. to 12:35 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "VI Period: 1:05 p.m. to 1:45 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "VII Period: 1:45 p.m. to 2:25 p.m. (Standards I and II dispersal)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Local break: 2:25 p.m. to 2:40 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "VIII Period: 2:40 p.m. to 3:20 p.m. (Standards III to V dispersal)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "IX Period: 3:20 p.m. to 4:00 p.m. (Standards VI to XII dispersal)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fine Arts and special classes: 2:40 p.m. to 3:20 p.m. for Primary, and 3:20 p.m. to 4:00 p.m. for Standards VI to VIII." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "School Terms" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The academic year is divided into three terms of four months each for the purpose of payment of fees." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "I Term: June to September" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "II Term: October to January" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "III Term: February to May" })
			] })
		]
	});
}
var init_academics_activity_schedule$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$28;
var Route$28;
var init_academics_activity_schedule = __esmMin((() => {
	$$splitComponentImporter$28 = () => Promise.resolve().then(() => (init_academics_activity_schedule$1(), academics_activity_schedule_exports));
	Route$28 = createFileRoute("/academics/activity-schedule")({
		head: () => ({ meta: [{ title: "Activity Schedule | PS Matric" }, {
			name: "description",
			content: "Activity Schedule — PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$28, "component")
	});
}));
var academics_curriculum_exports = /* @__PURE__ */ __exportAll({ component: () => Page$15 });
function Page$15() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Curriculum",
		subtitle: "Structured, rigorous, joyful",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Primary (I – V)" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Activity-based learning in languages, mathematics, environmental science, art and physical education, with an emphasis on reading fluency and number sense." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Middle School (VI – VIII)" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Subject specialisation begins, with laboratory work in science, computer literacy, social science projects and a third language." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Secondary (IX – X)" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Matriculation syllabus with intensive preparation, regular assessments and remedial support." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Higher Secondary (XI – XII)" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Streams offered in Science (Biology / Computer Science), Commerce and Arts, with career counselling and competitive-exam guidance." })
		]
	});
}
var init_academics_curriculum$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$27;
var Route$27;
var init_academics_curriculum = __esmMin((() => {
	$$splitComponentImporter$27 = () => Promise.resolve().then(() => (init_academics_curriculum$1(), academics_curriculum_exports));
	Route$27 = createFileRoute("/academics/curriculum")({
		head: () => ({ meta: [
			{ title: "Curriculum | PS Matric" },
			{
				name: "description",
				content: "Curriculum — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Curriculum | PS Matric"
			},
			{
				property: "og:description",
				content: "Curriculum — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$27, "component")
	});
}));
var academics_examination_exports = /* @__PURE__ */ __exportAll({ component: () => Page$14 });
function Page$14() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Examination",
		subtitle: "Assessment for learning",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Examination Information" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Class work, assignments, projects, oral assessments and practical work contribute to the internal record throughout the term." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Periodic Examinations" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Unit tests, half-yearly and annual examinations follow the prescribed board pattern with detailed answer-script review." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Submenus" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/academics/syllabus",
					className: "text-primary underline underline-offset-4",
					children: "Syllabus"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/academics/timetable",
					className: "text-primary underline underline-offset-4",
					children: "Timetable"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/academics/student-resource-corner",
					className: "text-primary underline underline-offset-4",
					children: "Student Resource Corner"
				}) })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Reporting" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Parents receive comprehensive progress reports each term, followed by parent-teacher meetings for individual feedback." })
		]
	});
}
var init_academics_examination$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$26;
var Route$26;
var init_academics_examination = __esmMin((() => {
	$$splitComponentImporter$26 = () => Promise.resolve().then(() => (init_academics_examination$1(), academics_examination_exports));
	Route$26 = createFileRoute("/academics/examination")({
		head: () => ({ meta: [{ title: "Examination | PS Matric" }, {
			name: "description",
			content: "Examination — PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$26, "component")
	});
}));
var academics_method_of_evaluation_exports = /* @__PURE__ */ __exportAll({ component: () => Page$13 });
function Page$13() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Method of Evaluation",
		subtitle: "Assessment for learning",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Continuous Assessment" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Class work, assignments, projects, oral assessments and practical work contribute to the internal record throughout the term." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Periodic Examinations" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Unit tests, half-yearly and annual examinations follow the prescribed board pattern with detailed answer-script review." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Reporting" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Parents receive comprehensive progress reports each term, followed by parent-teacher meetings for individual feedback." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Remedial Support" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Students needing additional help receive structured remedial classes and revised targets." })
		]
	});
}
var init_academics_method_of_evaluation$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$25;
var Route$25;
var init_academics_method_of_evaluation = __esmMin((() => {
	$$splitComponentImporter$25 = () => Promise.resolve().then(() => (init_academics_method_of_evaluation$1(), academics_method_of_evaluation_exports));
	Route$25 = createFileRoute("/academics/method-of-evaluation")({
		head: () => ({ meta: [
			{ title: "Method of Evaluation | PS Matric" },
			{
				name: "description",
				content: "Method of Evaluation — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Method of Evaluation | PS Matric"
			},
			{
				property: "og:description",
				content: "Method of Evaluation — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$25, "component")
	});
}));
var academics_online_learning_exports = /* @__PURE__ */ __exportAll({ component: () => Page$12 });
function Page$12() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Online Learning",
		subtitle: "Learning beyond the classroom",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Digital Classrooms" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Recorded lessons, worksheets and revision material are shared through the school's learning portal." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Live Sessions" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Doubt-clearing and revision sessions are scheduled before examinations and during school closures." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Parent Access" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Parents can track assignments, attendance and circulars through the same portal." })
		]
	});
}
var init_academics_online_learning$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$24;
var Route$24;
var init_academics_online_learning = __esmMin((() => {
	$$splitComponentImporter$24 = () => Promise.resolve().then(() => (init_academics_online_learning$1(), academics_online_learning_exports));
	Route$24 = createFileRoute("/academics/online-learning")({
		head: () => ({ meta: [
			{ title: "Online Learning | PS Matric" },
			{
				name: "description",
				content: "Online Learning — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Online Learning | PS Matric"
			},
			{
				property: "og:description",
				content: "Online Learning — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$24, "component")
	});
}));
function AcademicPdfList({ sections }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-8",
		children: sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "space-y-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl font-bold uppercase",
				style: { color: "var(--navy-deep)" },
				children: section.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: section.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: item.path,
					target: "_blank",
					rel: "noreferrer",
					className: "inline-block text-blue-600 underline-offset-4 hover:text-blue-800 hover:underline",
					children: item.label
				}) }, item.label))
			})]
		}, section.title))
	});
}
var init_AcademicPdfList = __esmMin((() => {}));
var academicDocuments;
var init_academic_documents = __esmMin((() => {
	academicDocuments = {
		syllabus: [
			{
				title: "September Quarterly Exam Portions - 2026-27",
				items: [
					{
						label: "Click here to view Quarterly Exam portions for Class 1",
						path: ""
					},
					{
						label: "Click here to view Quarterly Exam portions for Class 2",
						path: ""
					},
					{
						label: "Click here to view Quarterly Exam portions for Class 3",
						path: ""
					},
					{
						label: "Click here to view Quarterly Exam portions for Class 4",
						path: ""
					},
					{
						label: "Click here to view Quarterly Exam portions for Class 5",
						path: ""
					},
					{
						label: "Click here to view Quarterly Exam portions for Class 6",
						path: ""
					},
					{
						label: "Click here to view Quarterly Exam portions for Class 7",
						path: ""
					},
					{
						label: "Click here to view Quarterly Exam portions for Class 8",
						path: ""
					}
				]
			},
			{
				title: "August Unit Test 2 Portions - 2026-27",
				items: [
					{
						label: "Click here to view Unit test II portions for Class 1",
						path: ""
					},
					{
						label: "Click here to view Unit test II portions for Class 2",
						path: ""
					},
					{
						label: "Click here to view Unit test II portions for Class 3",
						path: ""
					},
					{
						label: "Click here to view Unit test II portions for Class 4",
						path: ""
					},
					{
						label: "Click here to view Unit test II portions for Class 5",
						path: ""
					},
					{
						label: "Click here to view Unit test II portions for Class 6",
						path: ""
					},
					{
						label: "Click here to view Unit test II portions for Class 7",
						path: ""
					},
					{
						label: "Click here to view Unit test II portions for Class 8",
						path: ""
					},
					{
						label: "Click here to view Unit test II portions for Class 9",
						path: ""
					},
					{
						label: "Click here to view Unit test II portions for Class 10",
						path: ""
					},
					{
						label: "Click here to view Unit test II portions for Class 11(commerce)",
						path: ""
					},
					{
						label: "Click here to view Unit test II portions for Class 11(science)",
						path: ""
					},
					{
						label: "Click here to view Unit test II portions for Class 12(commerce)",
						path: ""
					},
					{
						label: "Click here to view Unit test II portions for Class 12(science)",
						path: ""
					}
				]
			},
			{
				title: "July Unit Test Portions - 2026-27",
				items: [
					{
						label: "Click here to view Unit test portions for Class 1",
						path: ""
					},
					{
						label: "Click here to view Unit test portions for Class 2",
						path: ""
					},
					{
						label: "Click here to view Unit test portions for Class 3",
						path: ""
					},
					{
						label: "Click here to view Unit test portions for Class 4",
						path: ""
					},
					{
						label: "Click here to view Unit test portions for Class 5",
						path: ""
					},
					{
						label: "Click here to view Unit test portions for Class 6",
						path: ""
					},
					{
						label: "Click here to view Unit test portions for Class 7",
						path: ""
					},
					{
						label: "Click here to view Unit test portions for Class 8",
						path: ""
					},
					{
						label: "Click here to view Unit test portions for Class 9",
						path: ""
					},
					{
						label: "Click here to view Unit test II portions for Class 10",
						path: ""
					},
					{
						label: "Click here to view Unit test portions for Class 11(commerce)",
						path: ""
					},
					{
						label: "Click here to view Unit test portions for Class 11(science)",
						path: ""
					},
					{
						label: "Click here to view Unit test II portions for Class 12(commerce)",
						path: ""
					},
					{
						label: "Click here to view Unit test II portions for Class 12(science)",
						path: ""
					}
				]
			}
		],
		timetable: [{
			title: "2026 - 2027",
			items: [
				{
					label: "Quarterly Examination Time table for Classes 1 to 5 (2026-27)",
					path: "/pdfs/timetable/classes-1-to-5-quarterly-exam-2026.pdf"
				},
				{
					label: "August Unit test Time table for Classes 1 to 5 (2026-27)",
					path: "/pdfs/timetable/classes-1-to-5-august-unit-test-2026.pdf"
				},
				{
					label: "August Unit test Time table for Classes 6 to 8 (2026-27)",
					path: "/pdfs/timetable/classes-6-to-8-august-unit-test-2026.pdf"
				},
				{
					label: "August Unit test Time table for Classes 9 to 12 (2026-27)",
					path: "/pdfs/timetable/classes-9-to-12-august-unit-test-2026.pdf"
				},
				{
					label: "July Unit test Time table for Classes 1 to 5 (2026-27)",
					path: "/pdfs/timetable/classes-1-to-5-july-unit-test-2026.pdf"
				},
				{
					label: "July Unit test Time table for Classes 6 to 8 (2026-27)",
					path: "/pdfs/timetable/classes-6-to-8-july-unit-test-2026.pdf"
				},
				{
					label: "July Unit test Time table for Classes 9 to 12 (2026-27)",
					path: "/pdfs/timetable/classes-9-to-12-july-unit-test-2026.pdf"
				}
			]
		}],
		studentResourceCorner: [
			{
				title: "Class X",
				items: [
					{
						label: "Tamil",
						path: "/pdfs/student-resource/class-x/tamil-x.pdf"
					},
					{
						label: "English",
						path: "/pdfs/student-resource/class-x/english-x.pdf"
					},
					{
						label: "Maths",
						path: "/pdfs/student-resource/class-x/maths-x-1.pdf"
					},
					{
						label: "Science",
						path: "/pdfs/student-resource/class-x/science-x.pdf"
					},
					{
						label: "Social Science",
						path: "/pdfs/student-resource/class-x/social-science-x.pdf"
					}
				]
			},
			{
				title: "Class XI Commerce",
				items: [
					{
						label: "Tamil",
						path: "/pdfs/student-resource/class-xi/tamil-xi.pdf"
					},
					{
						label: "Sanskrit",
						path: "/pdfs/student-resource/class-xi/sanskrit-xi.pdf"
					},
					{
						label: "Hindi",
						path: "/pdfs/student-resource/class-xi/hindi-xi.pdf"
					},
					{
						label: "English",
						path: "/pdfs/student-resource/class-xi/english-xi.pdf"
					},
					{
						label: "Economics",
						path: "/pdfs/student-resource/class-xi-commerce/economics-xi-c.pdf"
					},
					{
						label: "Commerce",
						path: "/pdfs/student-resource/class-xi-commerce/commerce-xi-c.pdf"
					},
					{
						label: "Accountancy",
						path: "/pdfs/student-resource/class-xi-commerce/accountancy-xi-c.pdf"
					},
					{
						label: "Computer Applications",
						path: "/pdfs/student-resource/class-xi-commerce/computer-applications-xi-c.pdf"
					},
					{
						label: "Business Mathematics",
						path: "/pdfs/student-resource/class-xi-commerce/business-mathematics-xi-c.pdf"
					}
				]
			},
			{
				title: "Class XI Science",
				items: [
					{
						label: "Tamil",
						path: "/pdfs/student-resource/class-xi/tamil-xi.pdf"
					},
					{
						label: "Sanskrit",
						path: "/pdfs/student-resource/class-xi/sanskrit-xi.pdf"
					},
					{
						label: "Hindi",
						path: "/pdfs/student-resource/class-xi/hindi-xi.pdf"
					},
					{
						label: "English",
						path: "/pdfs/student-resource/class-xi/english-xi.pdf"
					},
					{
						label: "General Maths",
						path: "/pdfs/student-resource/class-xi-science/general-maths-xi-s.pdf"
					},
					{
						label: "Physics",
						path: "/pdfs/student-resource/class-xi-science/physics-xi-s.pdf"
					},
					{
						label: "Chemistry",
						path: "/pdfs/student-resource/class-xi-science/chemistry-xi-s.pdf"
					},
					{
						label: "Computer Science",
						path: "/pdfs/student-resource/class-xi-science/computer-science-xi-s.pdf"
					},
					{
						label: "Biology",
						path: "/pdfs/student-resource/class-xi-science/biology-xi-s.pdf"
					}
				]
			},
			{
				title: "Class XII Commerce",
				items: [
					{
						label: "Tamil",
						path: "/pdfs/student-resource/class-xii/tamil-xii.pdf"
					},
					{
						label: "Sanskrit",
						path: "/pdfs/student-resource/class-xii/sanskrit-xii.pdf"
					},
					{
						label: "Hindi",
						path: "/pdfs/student-resource/class-xii/hindi-xii.pdf"
					},
					{
						label: "English",
						path: "/pdfs/student-resource/class-xii/english-xii.pdf"
					},
					{
						label: "Economics",
						path: "/pdfs/student-resource/class-xii-commerce/economics-xii-c.pdf"
					},
					{
						label: "Commerce",
						path: "/pdfs/student-resource/class-xii-commerce/commerce-xii-c.pdf"
					},
					{
						label: "Accountancy",
						path: "/pdfs/student-resource/class-xii-commerce/accountacy-xii-c.pdf"
					},
					{
						label: "Computer Applications",
						path: "/pdfs/student-resource/class-xii-commerce/computer-applications-xii-c.pdf"
					},
					{
						label: "Business Mathematics",
						path: "/pdfs/student-resource/class-xii-commerce/business-mathematics-xii-c.pdf"
					}
				]
			},
			{
				title: "Class XII Science",
				items: [
					{
						label: "Tamil",
						path: "/pdfs/student-resource/class-xii/tamil-xii.pdf"
					},
					{
						label: "Sanskrit",
						path: "/pdfs/student-resource/class-xii/sanskrit-xii.pdf"
					},
					{
						label: "Hindi",
						path: "/pdfs/student-resource/class-xii/hindi-xii.pdf"
					},
					{
						label: "English",
						path: "/pdfs/student-resource/class-xii/english-xii.pdf"
					},
					{
						label: "General Maths",
						path: "/pdfs/student-resource/class-xii-science/mathamatics-xii-s2.pdf"
					},
					{
						label: "Physics",
						path: "/pdfs/student-resource/class-xii-science/physics-xii-s.pdf"
					},
					{
						label: "Chemistry",
						path: "/pdfs/student-resource/class-xii-science/chemistry-xii-s.pdf"
					},
					{
						label: "Computer Science",
						path: "/pdfs/student-resource/class-xii-science/computer-science-xii-s.pdf"
					},
					{
						label: "Biology",
						path: "/pdfs/student-resource/class-xii-science/biology-xii-s.pdf"
					}
				]
			}
		]
	};
}));
var academics_student_resource_corner_exports = /* @__PURE__ */ __exportAll({ component: () => Page$11 });
function Page$11() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Student Resource Corner",
		subtitle: "Sample papers and study resources",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Students can use the resources below to practise and prepare for examinations." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AcademicPdfList, { sections: academicDocuments.studentResourceCorner })]
	});
}
var init_academics_student_resource_corner$1 = __esmMin((() => {
	init_PageShell();
	init_AcademicPdfList();
	init_academic_documents();
}));
var $$splitComponentImporter$23;
var Route$23;
var init_academics_student_resource_corner = __esmMin((() => {
	$$splitComponentImporter$23 = () => Promise.resolve().then(() => (init_academics_student_resource_corner$1(), academics_student_resource_corner_exports));
	Route$23 = createFileRoute("/academics/student-resource-corner")({
		head: () => ({ meta: [{ title: "Student Resource Corner | PS Matric" }, {
			name: "description",
			content: "Student Resource Corner — PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$23, "component")
	});
}));
var academics_syllabus_exports = /* @__PURE__ */ __exportAll({ component: () => Page$10 });
function Page$10() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Syllabus",
		subtitle: "Quarterly exam and unit test portions 2026-27",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Latest syllabus portions and assessment updates for each class are listed below." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AcademicPdfList, { sections: academicDocuments.syllabus })]
	});
}
var init_academics_syllabus$1 = __esmMin((() => {
	init_PageShell();
	init_AcademicPdfList();
	init_academic_documents();
}));
var $$splitComponentImporter$22;
var Route$22;
var init_academics_syllabus = __esmMin((() => {
	$$splitComponentImporter$22 = () => Promise.resolve().then(() => (init_academics_syllabus$1(), academics_syllabus_exports));
	Route$22 = createFileRoute("/academics/syllabus")({
		head: () => ({ meta: [{ title: "Syllabus | PS Matric" }, {
			name: "description",
			content: "Syllabus — PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$22, "component")
	});
}));
var academics_teaching_methodology_exports = /* @__PURE__ */ __exportAll({ component: () => Page$9 });
function Page$9() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Teaching Methodology",
		subtitle: "How we teach",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Concept First" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Lessons begin with an idea or problem rather than a definition, so students build understanding before memorising." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Active Classrooms" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Group work, peer teaching, experiments, debates and field visits are built into the annual plan for every subject." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Technology as a Tool" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Smart boards, simulations and curated digital resources support — but never replace — the teacher." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Mentoring" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Every student is attached to a teacher-mentor who tracks academic progress and wellbeing through the year." })
		]
	});
}
var init_academics_teaching_methodology$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$21;
var Route$21;
var init_academics_teaching_methodology = __esmMin((() => {
	$$splitComponentImporter$21 = () => Promise.resolve().then(() => (init_academics_teaching_methodology$1(), academics_teaching_methodology_exports));
	Route$21 = createFileRoute("/academics/teaching-methodology")({
		head: () => ({ meta: [
			{ title: "Teaching Methodology | PS Matric" },
			{
				name: "description",
				content: "Teaching Methodology — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Teaching Methodology | PS Matric"
			},
			{
				property: "og:description",
				content: "Teaching Methodology — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$21, "component")
	});
}));
var academics_timetable_exports = /* @__PURE__ */ __exportAll({ component: () => Page$8 });
function Page$8() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Timetable",
		subtitle: "Assessment schedule and unit test timetable",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Use the links below to view the latest exam and unit test timetables for each class group." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AcademicPdfList, { sections: academicDocuments.timetable })]
	});
}
var init_academics_timetable$1 = __esmMin((() => {
	init_PageShell();
	init_AcademicPdfList();
	init_academic_documents();
}));
var $$splitComponentImporter$20;
var Route$20;
var init_academics_timetable = __esmMin((() => {
	$$splitComponentImporter$20 = () => Promise.resolve().then(() => (init_academics_timetable$1(), academics_timetable_exports));
	Route$20 = createFileRoute("/academics/timetable")({
		head: () => ({ meta: [{ title: "Timetable | PS Matric" }, {
			name: "description",
			content: "Timetable — PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$20, "component")
	});
}));
var admissions_faqs_exports = /* @__PURE__ */ __exportAll({ component: () => Page$7 });
function Page$7() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "FAQs",
		subtitle: "Admission questions answered",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "When do admissions open?" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Registration for the next academic year typically opens in December and closes once seats are filled." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Is there an entrance test?" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Classes I to VIII involve an informal interaction. Classes IX and above have a written assessment in core subjects." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "What is the medium of instruction?" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "English, with Tamil and Hindi offered as language options." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Is transport available?" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Yes, school buses operate on major routes across the city. Details are available at the office." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "What are the school timings?" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "8:45 a.m. to 3:45 p.m., Monday to Friday, with select Saturdays for activities." })
		]
	});
}
var init_admissions_faqs$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$19;
var Route$19;
var init_admissions_faqs = __esmMin((() => {
	$$splitComponentImporter$19 = () => Promise.resolve().then(() => (init_admissions_faqs$1(), admissions_faqs_exports));
	Route$19 = createFileRoute("/admissions/faqs")({
		head: () => ({ meta: [
			{ title: "FAQs | PS Matric" },
			{
				name: "description",
				content: "FAQs — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "FAQs | PS Matric"
			},
			{
				property: "og:description",
				content: "FAQs — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$19, "component")
	});
}));
var admissions_fee_exports = /* @__PURE__ */ __exportAll({ component: () => Page$6 });
function Page$6() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "School Fee",
		subtitle: "Fee information",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "School Terms" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The academic year is divided into three terms of four months each for the purpose of payment of fees." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "I Term - June to September" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "II Term - October to January" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "III Term - February to May" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Fee Structure" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "School fee will be collected as per the Private Schools Fee Determination Committee's Order." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Book Deposit" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "An approximate amount towards books and notebooks will be collected along with the I Term Fee." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Other Payments" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fine Arts fee will be charged separately for each term for Standards I to VIII depending on the nature of the art, craft or keyboard activity." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Five disciplines are taught: Vocal, Dance, Keyboard, Chess and Mirudhangam." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Standards I to III: Vocal, conducted within school timings." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Standards IV to IX: Students may opt for any one of the five disciplines." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Standards VI and VII: Wednesday, 3:15 to 3:45 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Standards VIII and IX: Monday and Wednesday, 3:15 to 3:45 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Standards IV and V: Wednesday and Thursday, 2:35 to 3:15 p.m." })
			] })
		]
	});
}
var init_admissions_fee$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$18;
var Route$18;
var init_admissions_fee = __esmMin((() => {
	$$splitComponentImporter$18 = () => Promise.resolve().then(() => (init_admissions_fee$1(), admissions_fee_exports));
	Route$18 = createFileRoute("/admissions/fee")({
		head: () => ({ meta: [{ title: "School Fee | PS Matric" }, {
			name: "description",
			content: "School Fee — PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$18, "component")
	});
}));
var admissions_online_registration_exports = /* @__PURE__ */ __exportAll({ component: () => Page$5 });
function Page$5() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Online Registration",
		subtitle: "Join our school",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Admission Process" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fill the online registration form and pay the registration fee." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Submit required documents at the school office." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Interaction / assessment as applicable to the class applied for." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Confirmation of admission and fee payment." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Documents Required" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Birth certificate (original and copy)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Transfer certificate from previous school" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Previous year's report card" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Aadhaar copy of student and parents" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Four passport-size photographs" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Enquiries" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Write to admissions@psmatric.in or call the school office during working hours." })
		]
	});
}
var init_admissions_online_registration$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$17;
var Route$17;
var init_admissions_online_registration = __esmMin((() => {
	$$splitComponentImporter$17 = () => Promise.resolve().then(() => (init_admissions_online_registration$1(), admissions_online_registration_exports));
	Route$17 = createFileRoute("/admissions/online-registration")({
		head: () => ({ meta: [
			{ title: "Online Registration | PS Matric" },
			{
				name: "description",
				content: "Online Registration — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Online Registration | PS Matric"
			},
			{
				property: "og:description",
				content: "Online Registration — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$17, "component")
	});
}));
var admissions_portal_exports = /* @__PURE__ */ __exportAll({ component: () => Page$4 });
function Page$4() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "General Instructions",
		subtitle: "School information for students and parents",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Examinations" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Academic performance of students from Standards I to VII will be assessed through Continuous Comprehensive Evaluation (C.C.E.)." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Formative (a and b) tests will be held periodically to assess students term-wise for 40 marks, which will be added to the terminal examinations." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A summative examination will be held for 60 marks at the end of each term. Students may not be allowed to take the summative examination if they are absent for formative a and b tests." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The Principal's decision will be final and binding for students absenting themselves or not cooperating to write formative or summative tests without a valid reason." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "For Classes VIII to XII, the usual pattern of mid-term tests and terminal examinations will be followed." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Students in default of prescribed fees or other outstanding arrears may not be allowed to write tests or examinations." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "I Terminal and II Terminal examination answer papers, after valuation, will be shown to parents for perusal. In case of a complaint, the Principal will review the scripts." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Annual examination papers will not be returned to parents, guardians, private tutors or any other persons." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Promotion results will be announced on predetermined dates and intimated by post whenever necessary." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Parents are expected to ensure regularity and discipline, take a keen interest in their children's progress, encourage extracurricular participation and respond to school-function invitations." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "School Work Schedule" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "School works from Monday to Friday for Standards LKG to V. Prior announcement will be made if Standards I to V work on Saturdays." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "School works from Monday to Saturday for Standards VI to XII." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fine Arts sessions for Standards I to III are conducted within school timings." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Club activities, excursions, field trips and competitions are organised on Fridays and Saturdays within school timings for Standards VI to IX." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "School Timings" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "LKG: 8:45 a.m. to 12:00 noon" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "UKG: 8:45 a.m. to 1:45 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Standards I and II: 8:45 a.m. to 2:25 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Standards III to V: 8:45 a.m. to 3:20 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Standards VI to XII: 8:45 a.m. to 4:00 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Lunch break: 12:35 p.m. to 1:05 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Morning assembly: 8:45 a.m. to 9:00 a.m." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Duration of Periods" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "First bell: 8:45 a.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Assembly: 8:45 a.m. to 9:00 a.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "I Period: 9:00 a.m. to 9:40 a.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "II Period: 9:40 a.m. to 10:20 a.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "III Period: 10:20 a.m. to 11:00 a.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Local break: 11:00 a.m. to 11:15 a.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "IV Period: 11:15 a.m. to 11:55 a.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "V Period: 11:55 a.m. to 12:35 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "VI Period: 1:05 p.m. to 1:45 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "VII Period: 1:45 p.m. to 2:25 p.m. (Standards I and II dispersal)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Local break: 2:25 p.m. to 2:40 p.m." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "VIII Period: 2:40 p.m. to 3:20 p.m. (Standards III to V dispersal)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "IX Period: 3:20 p.m. to 4:00 p.m. (Standards VI to XII dispersal)" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fine Arts and special classes: 2:40 p.m. to 3:20 p.m. for Primary, and 3:20 p.m. to 4:00 p.m. for Standards VI to VIII." })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "School Terms" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "I Term: June to September" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "II Term: October to January" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "III Term: February to May" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Withdrawing Wards" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "When a student is withdrawn during any term, the whole term fee will be charged. The Transfer Certificate will not be issued unless the full term fee is paid. Fees once paid will not be refunded." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Application for a Transfer Certificate at the close of an academic year must be made in the prescribed form by the parent or guardian before the date specified by the Principal." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "For a Transfer Certificate applied for after the specified date, the I Term fee of the ensuing year must be paid. No Transfer Certificate will be issued unless all arrears due to the school are paid in full." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "The Transfer Certificate will be issued, but the parent or guardian must get it countersigned by the Inspector of Matriculation Schools." })
			] })
		]
	});
}
var init_admissions_portal$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$16;
var Route$16;
var init_admissions_portal = __esmMin((() => {
	$$splitComponentImporter$16 = () => Promise.resolve().then(() => (init_admissions_portal$1(), admissions_portal_exports));
	Route$16 = createFileRoute("/admissions/portal")({
		head: () => ({ meta: [{ title: "General Instructions | PS Matric" }, {
			name: "description",
			content: "General instructions for students and parents of PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$16, "component")
	});
}));
var admissions_uniform_exports = /* @__PURE__ */ __exportAll({ component: () => Page$3 });
function Page$3() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "School Uniform Details",
		subtitle: "Uniform guidelines",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
						src: IMAGES.uniform.lkgUkg,
						alt: "LKG and UKG uniform placeholder",
						className: "w-full self-start bg-transparent",
						imgClassName: "h-auto object-contain"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
						src: IMAGES.uniform.primary,
						alt: "Standards I to VII uniform placeholder",
						className: "w-full self-start bg-transparent",
						imgClassName: "h-auto object-contain"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
						src: IMAGES.uniform.secondary,
						alt: "Standards VIII to XII uniform placeholder",
						className: "w-full self-start bg-transparent",
						imgClassName: "h-auto object-contain"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Contact" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Parthy's Tex Tailors, No. 6, South Canal Road, Chennai - 600028." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Phone: 98842 22681" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "L.K.G. and U.K.G. Boys" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Navy blue shorts with light blue stripes, shirt with school epaulette, black shoes, black socks and school belt." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "L.K.G. and U.K.G. Girls" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Navy blue pinafore with light blue stripes and school epaulette, black shoes, black socks and school belt." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The LKG and UKG uniform is available only at Parthy's Tex Tailors." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Standards I to VII" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Boys:" }), " Navy blue shorts, white shirt with open tennis collar and epaulette bearing school initials on the shirt pocket, black shoes, black socks and school belt."] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Girls:" }), " Navy blue skirt, white shirt with epaulette bearing school initials on the left hand and open tennis collar, black ribbons, black belt, black shoes and black socks."] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Note:" }), " Shirts should always be tucked inside the shorts."] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Standards VIII to XII" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Boys:" }), " Navy blue full pants, white shirt with open tennis collar and epaulette bearing school initials on the shirt pocket, black belt, black shoes and black socks."] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Girls:" }), " White kameez with epaulette bearing school initials on the left hand, navy blue salwar and navy blue coat, black ribbons, black slip-on shoes and black socks."] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Note:" }), " Shirts should always be tucked inside the pants."] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Monday Sports Uniform" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The sports uniform for LKG to Standard VIII will be supplied by the school." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Standards VI and VII:" }), " Boys and girls wear a house-colour T-shirt. Boys wear white shorts; girls wear a white skirt. Both wear white canvas shoes and white socks."] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Standard VIII:" }), " Boys wear a house-colour T-shirt with white full pants. Girls wear a white kameez, white salwar and house-colour coat. Both wear white canvas shoes and white socks."] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Standards IX to XII:" }), " Boys wear white full pants, white shirt, white canvas shoes and white socks. Girls wear a white kameez, white salwar, house-colour coat, white canvas shoes, white socks and white ribbons."] })
		]
	});
}
var init_admissions_uniform$1 = __esmMin((() => {
	init_PageShell();
	init_SmartImage();
	init_site();
}));
var $$splitComponentImporter$15;
var Route$15;
var init_admissions_uniform = __esmMin((() => {
	$$splitComponentImporter$15 = () => Promise.resolve().then(() => (init_admissions_uniform$1(), admissions_uniform_exports));
	Route$15 = createFileRoute("/admissions/uniform")({
		head: () => ({ meta: [{ title: "School Uniform Details | PS Matric" }, {
			name: "description",
			content: "School Uniform Details — PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$15, "component")
	});
}));
function createPhoto(folderUrl, imageName) {
	const webpName = imageName.replace(/\.[^.]+$/, ".webp");
	const encodedWebpName = encodeURIComponent(webpName);
	return {
		src: `${folderUrl}optimized/${encodedWebpName}`,
		thumbnail: `${folderUrl}thumbnails/${encodedWebpName}`
	};
}
function createEventGallery(slug, imageNames = {}, imageFolder = slug) {
	const createYear = (year) => {
		const folderUrl = `/images/events/${imageFolder}/${year}/`;
		return {
			folderUrl,
			photos: (imageNames[year] ?? []).map((imageName) => createPhoto(folderUrl, imageName))
		};
	};
	return {
		"2025-26": createYear("2025-26"),
		"2026-27": createYear("2026-27")
	};
}
var EVENT_GALLERY_YEARS;
var EVENT_GALLERIES;
var init_event_galleries = __esmMin((() => {
	EVENT_GALLERY_YEARS = ["2025-26", "2026-27"];
	EVENT_GALLERIES = {
		"akshara-abhyas": {
			title: "Akshara Abhyas",
			years: createEventGallery("akshara-abhyas", {
				"2025-26": ["1.jpg"],
				"2026-27": [
					"RSMV6578.JPG",
					"RSMV6582.JPG",
					"RSMV6583.JPG",
					"RSMV6586.JPG",
					"RSMV6594.JPG",
					"RSMV6604.JPG",
					"RSMV6605.JPG",
					"RSMV6608.JPG",
					"RSMV6614.JPG",
					"RSMV6615.JPG",
					"RSMV6628.JPG",
					"RSMV6637.JPG"
				]
			})
		},
		"vidhya-pravesh": {
			title: "Vidhya Pravesh",
			years: createEventGallery("vidhya-pravesh", { "2026-27": [
				"WhatsApp Image 2026-07-08 at 11.17.57 AM (1).jpeg",
				"WhatsApp Image 2026-07-08 at 11.17.57 AM.jpeg",
				"WhatsApp Image 2026-07-08 at 11.17.58 AM (1).jpeg",
				"WhatsApp Image 2026-07-08 at 11.17.58 AM (2).jpeg",
				"WhatsApp Image 2026-07-08 at 11.17.58 AM.jpeg",
				"WhatsApp Image 2026-07-08 at 11.17.59 AM (1).jpeg",
				"WhatsApp Image 2026-07-08 at 11.17.59 AM (2).jpeg",
				"WhatsApp Image 2026-07-08 at 11.17.59 AM.jpeg"
			] })
		},
		"sports-day": {
			title: "Sports Day",
			years: createEventGallery("sports-day", {
				"2025-26": ["1.jpg"],
				"2026-27": [
					"RSMV2086.JPG",
					"RSMV2114.JPG",
					"RSMV2129.JPG",
					"RSMV2152.JPG",
					"RSMV2160.JPG",
					"RSMV2163.JPG",
					"RSMV2166.JPG",
					"RSMV2172.JPG",
					"RSMV2175.JPG",
					"RSMV2179.JPG",
					"RSMV2180.JPG",
					"RSMV2187.JPG",
					"RSMV2189.JPG",
					"RSMV2190.JPG",
					"RSMV2191.JPG",
					"RSMV2197.JPG",
					"RSMV2201.JPG",
					"RSMV2204.JPG",
					"RSMV2217.JPG",
					"RSMV2223.JPG",
					"RSMV2226.JPG",
					"RSMV2230.JPG",
					"RSMV2233.JPG",
					"RSMV2235.JPG",
					"RSMV2258.JPG",
					"RSMV2277.JPG",
					"RSMV2281.JPG",
					"RSMV2292.JPG",
					"RSMV2295.JPG",
					"RSMV2296.JPG",
					"RSMV2298.JPG",
					"RSMV2301.JPG",
					"RSMV2321.JPG",
					"RSMV2322.JPG",
					"RSMV2326.JPG",
					"RSMV2345.JPG",
					"RSMV2346.JPG",
					"RSMV2350.JPG",
					"RSMV2354.JPG",
					"RSMV2372.JPG",
					"RSMV2381.JPG",
					"RSMV2403.JPG",
					"RSMV2418.JPG",
					"RSMV2419.JPG",
					"RSMV2422.JPG",
					"RSMV2436.JPG",
					"RSMV2437.JPG",
					"RSMV2444.JPG",
					"RSMV2445.JPG",
					"RSMV2449.JPG",
					"RSMV2450.JPG",
					"RSMV2456.JPG",
					"RSMV2468.JPG"
				]
			}, "sports-meet")
		},
		"annual-day": {
			title: "Annual Day",
			years: createEventGallery("annual-day", {
				"2025-26": ["1.jpg", "2.jpg"],
				"2026-27": [
					"RSMV3811.JPG",
					"RSMV3812.JPG",
					"RSMV3825.JPG",
					"RSMV3831.JPG",
					"RSMV3841.JPG",
					"RSMV3854.JPG",
					"RSMV3861.JPG",
					"RSMV3871.JPG",
					"RSMV3879.JPG",
					"RSMV3887.JPG",
					"RSMV3891.JPG",
					"RSMV3893.JPG",
					"RSMV3901.JPG",
					"RSMV3913.JPG",
					"RSMV3917.JPG",
					"RSMV3926.JPG",
					"RSMV3944.JPG",
					"RSMV3947.JPG",
					"RSMV3954.JPG",
					"RSMV3964.JPG",
					"RSMV3966.JPG",
					"RSMV3969.JPG",
					"RSMV3973.JPG",
					"RSMV3979.JPG",
					"RSMV3983.JPG",
					"RSMV3985.JPG",
					"RSMV4014.JPG",
					"RSMV4044.JPG",
					"RSMV4064.JPG",
					"RSMV4071.JPG",
					"RSMV4072.JPG",
					"RSMV4073.JPG"
				]
			})
		},
		"independence-day": {
			title: "Independence Day",
			years: createEventGallery("independence-day", {
				"2025-26": ["1.jpg"],
				"2026-27": [
					"RSMV2839.JPG",
					"RSMV2843.JPG",
					"RSMV2846.JPG",
					"RSMV2855.JPG",
					"RSMV2856.JPG",
					"RSMV2859.JPG",
					"RSMV2861.JPG",
					"RSMV2870.JPG",
					"RSMV2873.JPG",
					"RSMV2877.JPG",
					"RSMV2880.JPG",
					"RSMV2882.JPG",
					"RSMV2890.JPG",
					"RSMV2902.JPG",
					"RSMV2905.JPG",
					"RSMV2911.JPG",
					"RSMV2920.JPG",
					"RSMV2921.JPG",
					"RSMV2923.JPG",
					"RSMV2924.JPG",
					"RSMV2927.JPG",
					"RSMV2930.JPG",
					"RSMV2931.JPG",
					"RSMV2934.JPG",
					"RSMV2940.JPG",
					"RSMV2943.JPG",
					"RSMV2946.JPG",
					"RSMV2967.JPG",
					"RSMV2968.JPG",
					"RSMV2973.JPG",
					"RSMV2988.JPG"
				]
			})
		},
		"project-day": {
			title: "Project Day",
			years: createEventGallery("project-day", {
				"2025-26": ["1.jpg"],
				"2026-27": [
					"RSMV1158.JPG",
					"RSMV1166.JPG",
					"RSMV1167.JPG",
					"RSMV1170.JPG",
					"RSMV1173.JPG",
					"RSMV1177.JPG",
					"RSMV1184.JPG",
					"RSMV1187.JPG",
					"RSMV1188.JPG",
					"RSMV1198.JPG",
					"RSMV1200.JPG",
					"RSMV1206.JPG",
					"RSMV1226.JPG",
					"RSMV1230.JPG",
					"RSMV1248.JPG",
					"RSMV1250.JPG",
					"RSMV1262.JPG",
					"RSMV1263.JPG",
					"RSMV1266.JPG",
					"RSMV1269.JPG",
					"RSMV1270.JPG",
					"RSMV1272.JPG",
					"RSMV1273.JPG",
					"RSMV1274.JPG",
					"RSMV1275.JPG",
					"RSMV1276.JPG",
					"RSMV1277.JPG",
					"RSMV1278.JPG",
					"RSMV1281.JPG",
					"RSMV1282.JPG",
					"RSMV1285.JPG",
					"RSMV1288.JPG",
					"RSMV1290.JPG",
					"RSMV1292.JPG",
					"RSMV1295.JPG",
					"RSMV1297.JPG",
					"RSMV1299.JPG",
					"RSMV1300.JPG",
					"RSMV1305.JPG",
					"RSMV1307.JPG",
					"RSMV1308.JPG",
					"RSMV1313.JPG",
					"RSMV1314.JPG",
					"RSMV1316.JPG",
					"RSMV1319.JPG"
				]
			})
		},
		"fancy-dress": {
			title: "Fancy Dress",
			years: createEventGallery("fancy-dress", { "2025-26": ["1.jpg"] })
		},
		"primary-annual-day": {
			title: "Primary Annual Day",
			years: createEventGallery("primary-annual-day", { "2025-26": [
				"RSMV1509.JPG",
				"RSMV1525.JPG",
				"RSMV1536.JPG",
				"RSMV1541.JPG",
				"RSMV1550.JPG",
				"RSMV1556.JPG",
				"RSMV1559.JPG",
				"RSMV1563.JPG",
				"RSMV1567.JPG",
				"RSMV1587.JPG",
				"RSMV1608.JPG",
				"RSMV1610.JPG",
				"RSMV1624.JPG",
				"RSMV1630.JPG",
				"RSMV1631.JPG",
				"RSMV1632.JPG",
				"RSMV1637.JPG",
				"RSMV1639.JPG",
				"RSMV1641.JPG",
				"RSMV1646.JPG",
				"RSMV1648.JPG",
				"RSMV1649.JPG",
				"RSMV1652.JPG",
				"RSMV1653.JPG",
				"RSMV1654.JPG",
				"RSMV1658.JPG",
				"RSMV1661.JPG",
				"RSMV1663.JPG",
				"RSMV1670.JPG",
				"RSMV1677.JPG",
				"RSMV1708.JPG",
				"RSMV1716.JPG",
				"RSMV1729.JPG",
				"RSMV1730.JPG",
				"RSMV1733.JPG",
				"RSMV1739.JPG",
				"RSMV1743.JPG",
				"RSMV1748.JPG",
				"RSMV1752.JPG",
				"RSMV1753.JPG",
				"RSMV1763.JPG",
				"RSMV1765.JPG",
				"RSMV1771.JPG",
				"RSMV1780.JPG",
				"RSMV1783.JPG",
				"RSMV1795.JPG",
				"RSMV1802.JPG",
				"RSMV1810.JPG",
				"RSMV1817.JPG",
				"RSMV5999.JPG",
				"RSMV6005.JPG",
				"RSMV6007.JPG",
				"RSMV6008.JPG",
				"RSMV6041.JPG"
			] })
		},
		"primary-sports-day": {
			title: "Primary Sports Day",
			years: createEventGallery("primary-sports-day", { "2025-26": [
				"RSMV2330.JPG",
				"RSMV2341.JPG",
				"RSMV2344.JPG",
				"RSMV2346.JPG",
				"RSMV2349.JPG",
				"RSMV2352.JPG",
				"RSMV2353.JPG",
				"RSMV2359.JPG",
				"RSMV2363.JPG",
				"RSMV2378.JPG",
				"RSMV2398.JPG",
				"RSMV2401.JPG",
				"RSMV2403.JPG",
				"RSMV2405.JPG",
				"RSMV2407.JPG",
				"RSMV2409.JPG",
				"RSMV2410.JPG",
				"RSMV2411.JPG",
				"RSMV2413.JPG",
				"RSMV2416.JPG",
				"RSMV2429.JPG",
				"RSMV2430.JPG",
				"RSMV2434.JPG",
				"RSMV2435.JPG",
				"RSMV2436.JPG",
				"RSMV2437.JPG",
				"RSMV2438.JPG",
				"RSMV2440.JPG",
				"RSMV2441.JPG",
				"RSMV2443.JPG",
				"RSMV2447.JPG",
				"RSMV2451.JPG",
				"RSMV2453.JPG",
				"RSMV2455.JPG",
				"RSMV2457.JPG",
				"RSMV2471.JPG",
				"RSMV2475.JPG",
				"RSMV2481.JPG",
				"RSMV2482.JPG",
				"RSMV2484.JPG",
				"RSMV2487.JPG",
				"RSMV2505.JPG",
				"RSMV2526.JPG",
				"RSMV2529.JPG",
				"RSMV2546.JPG",
				"RSMV2550.JPG",
				"RSMV2552.JPG",
				"RSMV2572.JPG",
				"RSMV2573.JPG",
				"RSMV2574.JPG",
				"RSMV2575.JPG",
				"RSMV2577.JPG"
			] })
		},
		"republic-day": {
			title: "Republic Day",
			years: createEventGallery("republic-day", { "2025-26": [
				"RSMV0418 - Copy.JPG",
				"RSMV0425.JPG",
				"RSMV0426.JPG",
				"RSMV0429.JPG",
				"RSMV0438.JPG",
				"RSMV0445.JPG",
				"RSMV0454.JPG",
				"RSMV0464.JPG",
				"RSMV0465.JPG",
				"RSMV0472.JPG"
			] })
		}
	};
}));
function EventPage({ title, years = EVENT_GALLERY_YEARS }) {
	const slug = title.toLowerCase().replaceAll(" ", "-");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
		title,
		subtitle: "School events and celebrations"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-8 max-w-3xl font-serif text-lg leading-8 text-foreground/85",
				children: [
					"Browse photographs from ",
					title,
					" by school year."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: years.map((year) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex min-h-64 flex-col items-center justify-center rounded-xl bg-card px-6 py-8 text-center shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-3xl font-bold text-primary",
						children: ["Events", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block",
							children: year
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/events/$eventSlug/$year",
						params: {
							eventSlug: slug,
							year
						},
						className: "mt-7 inline-flex items-center gap-2 rounded-md bg-gold px-5 py-3 font-semibold text-navy-deep shadow-soft transition hover:-translate-y-0.5 hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
						children: ["Click Here", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
							className: "h-4 w-4",
							"aria-hidden": true
						})]
					})]
				}, year))
			})]
		})
	})] });
}
var init_EventPage = __esmMin((() => {
	init_PageShell();
	init_event_galleries();
}));
var events_akshara_abhyas_exports = /* @__PURE__ */ __exportAll({ component: () => SplitComponent$9 });
var SplitComponent$9;
var init_events_akshara_abhyas$1 = __esmMin((() => {
	init_EventPage();
	SplitComponent$9 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventPage, { title: "Akshara Abhyas" });
}));
var $$splitComponentImporter$14;
var Route$14;
var init_events_akshara_abhyas = __esmMin((() => {
	$$splitComponentImporter$14 = () => Promise.resolve().then(() => (init_events_akshara_abhyas$1(), events_akshara_abhyas_exports));
	Route$14 = createFileRoute("/events/akshara-abhyas")({
		head: () => ({ meta: [{ title: "Akshara Abhyas | PS Matric" }, {
			name: "description",
			content: "Akshara Abhyas at PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$14, "component")
	});
}));
var events_annual_day_exports = /* @__PURE__ */ __exportAll({ component: () => SplitComponent$8 });
var SplitComponent$8;
var init_events_annual_day$1 = __esmMin((() => {
	init_EventPage();
	SplitComponent$8 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventPage, { title: "Annual Day" });
}));
var $$splitComponentImporter$13;
var Route$13;
var init_events_annual_day = __esmMin((() => {
	$$splitComponentImporter$13 = () => Promise.resolve().then(() => (init_events_annual_day$1(), events_annual_day_exports));
	Route$13 = createFileRoute("/events/annual-day")({
		head: () => ({ meta: [{ title: "Annual Day | PS Matric" }, {
			name: "description",
			content: "Annual Day at PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$13, "component")
	});
}));
var events_fancy_dress_exports = /* @__PURE__ */ __exportAll({ component: () => SplitComponent$7 });
var SplitComponent$7;
var init_events_fancy_dress$1 = __esmMin((() => {
	init_EventPage();
	SplitComponent$7 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventPage, { title: "Fancy Dress" });
}));
var $$splitComponentImporter$12;
var Route$12;
var init_events_fancy_dress = __esmMin((() => {
	$$splitComponentImporter$12 = () => Promise.resolve().then(() => (init_events_fancy_dress$1(), events_fancy_dress_exports));
	Route$12 = createFileRoute("/events/fancy-dress")({
		head: () => ({ meta: [{ title: "Fancy Dress | PS Matric" }, {
			name: "description",
			content: "Fancy Dress at PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$12, "component")
	});
}));
var events_independence_day_exports = /* @__PURE__ */ __exportAll({ component: () => SplitComponent$6 });
var SplitComponent$6;
var init_events_independence_day$1 = __esmMin((() => {
	init_EventPage();
	SplitComponent$6 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventPage, { title: "Independence Day" });
}));
var $$splitComponentImporter$11;
var Route$11;
var init_events_independence_day = __esmMin((() => {
	$$splitComponentImporter$11 = () => Promise.resolve().then(() => (init_events_independence_day$1(), events_independence_day_exports));
	Route$11 = createFileRoute("/events/independence-day")({
		head: () => ({ meta: [{ title: "Independence Day | PS Matric" }, {
			name: "description",
			content: "Independence Day at PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$11, "component")
	});
}));
var events_primary_annual_day_exports = /* @__PURE__ */ __exportAll({ component: () => SplitComponent$5 });
var SplitComponent$5;
var init_events_primary_annual_day$1 = __esmMin((() => {
	init_EventPage();
	SplitComponent$5 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventPage, { title: "Primary Annual Day" });
}));
var $$splitComponentImporter$10;
var Route$10;
var init_events_primary_annual_day = __esmMin((() => {
	$$splitComponentImporter$10 = () => Promise.resolve().then(() => (init_events_primary_annual_day$1(), events_primary_annual_day_exports));
	Route$10 = createFileRoute("/events/primary-annual-day")({
		head: () => ({ meta: [{ title: "Primary Annual Day | PS Matric" }, {
			name: "description",
			content: "Primary Annual Day at PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$10, "component")
	});
}));
var events_primary_sports_day_exports = /* @__PURE__ */ __exportAll({ component: () => SplitComponent$4 });
var SplitComponent$4;
var init_events_primary_sports_day$1 = __esmMin((() => {
	init_EventPage();
	SplitComponent$4 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventPage, { title: "Primary Sports Day" });
}));
var $$splitComponentImporter$9;
var Route$9;
var init_events_primary_sports_day = __esmMin((() => {
	$$splitComponentImporter$9 = () => Promise.resolve().then(() => (init_events_primary_sports_day$1(), events_primary_sports_day_exports));
	Route$9 = createFileRoute("/events/primary-sports-day")({
		head: () => ({ meta: [{ title: "Primary Sports Day | PS Matric" }, {
			name: "description",
			content: "Primary Sports Day at PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$9, "component")
	});
}));
var events_project_day_exports = /* @__PURE__ */ __exportAll({ component: () => SplitComponent$3 });
var SplitComponent$3;
var init_events_project_day$1 = __esmMin((() => {
	init_EventPage();
	SplitComponent$3 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventPage, { title: "Project Day" });
}));
var $$splitComponentImporter$8;
var Route$8;
var init_events_project_day = __esmMin((() => {
	$$splitComponentImporter$8 = () => Promise.resolve().then(() => (init_events_project_day$1(), events_project_day_exports));
	Route$8 = createFileRoute("/events/project-day")({
		head: () => ({ meta: [{ title: "Project Day | PS Matric" }, {
			name: "description",
			content: "Project Day at PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$8, "component")
	});
}));
var events_republic_day_exports = /* @__PURE__ */ __exportAll({ component: () => SplitComponent$2 });
var SplitComponent$2;
var init_events_republic_day$1 = __esmMin((() => {
	init_EventPage();
	SplitComponent$2 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventPage, { title: "Republic Day" });
}));
var $$splitComponentImporter$7;
var Route$7;
var init_events_republic_day = __esmMin((() => {
	$$splitComponentImporter$7 = () => Promise.resolve().then(() => (init_events_republic_day$1(), events_republic_day_exports));
	Route$7 = createFileRoute("/events/republic-day")({
		head: () => ({ meta: [{ title: "Republic Day | PS Matric" }, {
			name: "description",
			content: "Republic Day at PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$7, "component")
	});
}));
var events_sports_day_exports = /* @__PURE__ */ __exportAll({ component: () => SplitComponent$1 });
var SplitComponent$1;
var init_events_sports_day$1 = __esmMin((() => {
	init_EventPage();
	SplitComponent$1 = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventPage, { title: "Sports Day" });
}));
var $$splitComponentImporter$6;
var Route$6;
var init_events_sports_day = __esmMin((() => {
	$$splitComponentImporter$6 = () => Promise.resolve().then(() => (init_events_sports_day$1(), events_sports_day_exports));
	Route$6 = createFileRoute("/events/sports-day")({
		head: () => ({ meta: [{ title: "Sports Day | PS Matric" }, {
			name: "description",
			content: "Sports Day at PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$6, "component")
	});
}));
var events_vidhya_pravesh_exports = /* @__PURE__ */ __exportAll({ component: () => SplitComponent });
var SplitComponent;
var init_events_vidhya_pravesh$1 = __esmMin((() => {
	init_EventPage();
	SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventPage, {
		title: "Vidhya Pravesh",
		years: ["2026-27"]
	});
}));
var $$splitComponentImporter$5;
var Route$5;
var init_events_vidhya_pravesh = __esmMin((() => {
	$$splitComponentImporter$5 = () => Promise.resolve().then(() => (init_events_vidhya_pravesh$1(), events_vidhya_pravesh_exports));
	Route$5 = createFileRoute("/events/vidhya-pravesh")({
		head: () => ({ meta: [{ title: "Vidhya Pravesh | PS Matric" }, {
			name: "description",
			content: "Vidhya Pravesh at PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter$5, "component")
	});
}));
var life_achievements_exports = /* @__PURE__ */ __exportAll({ component: () => Page$2 });
function Page$2() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Achievements",
		subtitle: "Celebrating our students",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Academics" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Consistent board results with state-level rank holders and subject centums across streams." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Sports" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "District and state level representation in athletics, chess, basketball and volleyball." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Arts & Culture" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Prizes at inter-school cultural festivals in music, dance, elocution and quizzing." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Science & Innovation" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Awards at regional science exhibitions and olympiads." })
		]
	});
}
var init_life_achievements$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$4;
var Route$4;
var init_life_achievements = __esmMin((() => {
	$$splitComponentImporter$4 = () => Promise.resolve().then(() => (init_life_achievements$1(), life_achievements_exports));
	Route$4 = createFileRoute("/life/achievements")({
		head: () => ({ meta: [
			{ title: "Achievements | PS Matric" },
			{
				name: "description",
				content: "Achievements — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Achievements | PS Matric"
			},
			{
				property: "og:description",
				content: "Achievements — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$4, "component")
	});
}));
var life_gallery_exports = /* @__PURE__ */ __exportAll({ component: () => GalleryPage });
function GalleryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
		title: "Gallery",
		subtitle: "Moments from campus life"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryCarousel, { slides: IMAGES.gallery }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: IMAGES.gallery.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "group overflow-hidden rounded-xl shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
						src: g.src,
						alt: g.caption,
						className: "aspect-[4/3]",
						imgClassName: "transition-transform duration-500 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "bg-secondary px-4 py-3 text-sm font-semibold uppercase tracking-wide text-primary",
						children: g.caption
					})]
				}, g.src))
			})]
		})
	})] });
}
var init_life_gallery$1 = __esmMin((() => {
	init_PageShell();
	init_Carousels();
	init_SmartImage();
	init_site();
}));
var $$splitComponentImporter$3;
var Route$3;
var init_life_gallery = __esmMin((() => {
	$$splitComponentImporter$3 = () => Promise.resolve().then(() => (init_life_gallery$1(), life_gallery_exports));
	Route$3 = createFileRoute("/life/gallery")({
		head: () => ({ meta: [
			{ title: "Gallery | PS Matric" },
			{
				name: "description",
				content: "Photographs of classrooms, laboratories, sports, events and campus life at PS Matric."
			},
			{
				property: "og:title",
				content: "Gallery | PS Matric"
			},
			{
				property: "og:description",
				content: "Moments from campus life at PS Matric."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$3, "component")
	});
}));
var life_infrastructure_exports = /* @__PURE__ */ __exportAll({ component: () => Page$1 });
function Page$1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Infrastructure",
		subtitle: "Spaces built for learning",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Classrooms" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Airy, well-lit classrooms equipped with smart boards and ergonomic seating." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Laboratories" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Dedicated physics, chemistry, biology and computer laboratories with modern equipment and safety protocols." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Library" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A growing collection of reference books, fiction, periodicals and digital resources with quiet reading spaces." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Sports" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Playground, indoor games hall, basketball and volleyball courts, and coaching for athletics." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Auditorium & Arts" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A multipurpose auditorium along with music, dance and art rooms." })
		]
	});
}
var init_life_infrastructure$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$2;
var Route$2;
var init_life_infrastructure = __esmMin((() => {
	$$splitComponentImporter$2 = () => Promise.resolve().then(() => (init_life_infrastructure$1(), life_infrastructure_exports));
	Route$2 = createFileRoute("/life/infrastructure")({
		head: () => ({ meta: [
			{ title: "Infrastructure | PS Matric" },
			{
				name: "description",
				content: "Infrastructure — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Infrastructure | PS Matric"
			},
			{
				property: "og:description",
				content: "Infrastructure — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$2, "component")
	});
}));
var life_student_clubs_exports = /* @__PURE__ */ __exportAll({ component: () => Page });
function Page() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContentPage, {
		title: "Student Clubs",
		subtitle: "Where interests grow",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Clubs on Campus" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Science & Robotics Club" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Literary and Debate Club" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Maths Club" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Eco Club and Green Brigade" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Music, Dance and Drama" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fine Arts and Photography" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sports Clubs" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Community Service and NSS" })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Clubs meet weekly and organise inter-house events, exhibitions and outreach activities through the year." })
		]
	});
}
var init_life_student_clubs$1 = __esmMin((() => {
	init_PageShell();
}));
var $$splitComponentImporter$1;
var Route$1;
var init_life_student_clubs = __esmMin((() => {
	$$splitComponentImporter$1 = () => Promise.resolve().then(() => (init_life_student_clubs$1(), life_student_clubs_exports));
	Route$1 = createFileRoute("/life/student-clubs")({
		head: () => ({ meta: [
			{ title: "Student Clubs | PS Matric" },
			{
				name: "description",
				content: "Student Clubs — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			},
			{
				property: "og:title",
				content: "Student Clubs | PS Matric"
			},
			{
				property: "og:description",
				content: "Student Clubs — PS Matriculation Higher Secondary School, P.S.EDUCATIONAL SOCIETY."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter$1, "component")
	});
}));
var events_$eventSlug_$year_exports = /* @__PURE__ */ __exportAll({ component: () => EventYearGallery });
function EventYearGallery() {
	const { eventSlug, year } = Route.useParams();
	const event = EVENT_GALLERIES[eventSlug];
	const gallery = event?.years[year];
	if (!event || !gallery) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
		title: "Gallery not found",
		subtitle: "The requested event or school year is unavailable."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-page",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "inline-flex items-center gap-2 font-semibold text-primary underline",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
					className: "h-4 w-4",
					"aria-hidden": true
				}), "Return to home"]
			})
		})
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageBanner, {
		title: `${event.title} ${year}`,
		subtitle: "Event photographs"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `/events/${eventSlug}`,
				className: "mb-8 inline-flex items-center gap-2 font-semibold text-primary underline underline-offset-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "h-4 w-4",
						"aria-hidden": true
					}),
					"All ",
					event.title,
					" years"
				]
			}), gallery.photos.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: gallery.photos.map((photo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "overflow-hidden rounded-xl shadow-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": `Expand ${event.title} photo`,
							className: "block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartImage, {
								src: photo.thumbnail,
								alt: `${event.title} ${year}`,
								className: "aspect-[4/3]"
							})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
						className: "max-w-5xl border-0 bg-transparent p-2 shadow-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "sr-only",
							children: `${event.title} ${year} photo`
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: photo.src,
							alt: `${event.title} ${year}`,
							decoding: "async",
							className: "mx-auto max-h-[85vh] w-auto max-w-full rounded object-contain"
						})]
					})] })
				}, photo.src))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-card px-6 py-12 text-center shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
						className: "mx-auto h-10 w-10 text-muted-foreground",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 font-display text-xl font-semibold text-primary",
						children: "Photos for this year will be added soon."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-serif text-sm text-muted-foreground",
						children: [
							"Add images to",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "rounded bg-muted px-2 py-1",
								children: gallery.folderUrl
							}),
							" and list their filenames in ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "rounded bg-muted px-2 py-1",
								children: "photos"
							}),
							" in",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "rounded bg-muted px-2 py-1",
								children: "src/lib/event-galleries.ts"
							}),
							", then run",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
								className: "rounded bg-muted px-2 py-1",
								children: "npm run optimize:event-images"
							}),
							"."
						]
					})
				]
			})]
		})
	})] });
}
var init_events_$eventSlug_$year$1 = __esmMin((() => {
	init_PageShell();
	init_SmartImage();
	init_dialog();
	init_event_galleries();
	init_events_$eventSlug_$year();
}));
var $$splitComponentImporter;
var Route;
var init_events_$eventSlug_$year = __esmMin((() => {
	$$splitComponentImporter = () => Promise.resolve().then(() => (init_events_$eventSlug_$year$1(), events_$eventSlug_$year_exports));
	Route = createFileRoute("/events/$eventSlug/$year")({
		head: () => ({ meta: [{ title: "Event Gallery | PS Matric" }, {
			name: "description",
			content: "Event photographs from PS Matriculation Higher Secondary School."
		}] }),
		component: lazyRouteComponent($$splitComponentImporter, "component")
	});
}));
var rootRouteChildren;
var routeTree;
var init_routeTree_gen = __esmMin((() => {
	init___root();
	init_routes();
	init_alumni_connect();
	init_contact();
	init_mandatory_disclosure();
	init_about_advisory_board();
	init_about_correspondents_message();
	init_about_facilities();
	init_about_founders_vision();
	init_about_history();
	init_about_managing_committee();
	init_about_principals_message();
	init_about_testimonials();
	init_about_vision_mission();
	init_academics_activity_schedule();
	init_academics_curriculum();
	init_academics_examination();
	init_academics_method_of_evaluation();
	init_academics_online_learning();
	init_academics_student_resource_corner();
	init_academics_syllabus();
	init_academics_teaching_methodology();
	init_academics_timetable();
	init_admissions_faqs();
	init_admissions_fee();
	init_admissions_online_registration();
	init_admissions_portal();
	init_admissions_uniform();
	init_events_akshara_abhyas();
	init_events_annual_day();
	init_events_fancy_dress();
	init_events_independence_day();
	init_events_primary_annual_day();
	init_events_primary_sports_day();
	init_events_project_day();
	init_events_republic_day();
	init_events_sports_day();
	init_events_vidhya_pravesh();
	init_life_achievements();
	init_life_gallery();
	init_life_infrastructure();
	init_life_student_clubs();
	init_events_$eventSlug_$year();
	rootRouteChildren = {
		IndexRoute: Route$41.update({
			id: "/",
			path: "/",
			getParentRoute: () => Route$42
		}),
		AlumniConnectRoute: Route$40.update({
			id: "/alumni-connect",
			path: "/alumni-connect",
			getParentRoute: () => Route$42
		}),
		ContactRoute: Route$39.update({
			id: "/contact",
			path: "/contact",
			getParentRoute: () => Route$42
		}),
		MandatoryDisclosureRoute: Route$38.update({
			id: "/mandatory-disclosure",
			path: "/mandatory-disclosure",
			getParentRoute: () => Route$42
		}),
		AboutAdvisoryBoardRoute: Route$37.update({
			id: "/about/advisory-board",
			path: "/about/advisory-board",
			getParentRoute: () => Route$42
		}),
		AboutCorrespondentsMessageRoute: Route$36.update({
			id: "/about/correspondents-message",
			path: "/about/correspondents-message",
			getParentRoute: () => Route$42
		}),
		AboutFacilitiesRoute: Route$35.update({
			id: "/about/facilities",
			path: "/about/facilities",
			getParentRoute: () => Route$42
		}),
		AboutFoundersVisionRoute: Route$34.update({
			id: "/about/founders-vision",
			path: "/about/founders-vision",
			getParentRoute: () => Route$42
		}),
		AboutHistoryRoute: Route$33.update({
			id: "/about/history",
			path: "/about/history",
			getParentRoute: () => Route$42
		}),
		AboutManagingCommitteeRoute: Route$32.update({
			id: "/about/managing-committee",
			path: "/about/managing-committee",
			getParentRoute: () => Route$42
		}),
		AboutPrincipalsMessageRoute: Route$31.update({
			id: "/about/principals-message",
			path: "/about/principals-message",
			getParentRoute: () => Route$42
		}),
		AboutTestimonialsRoute: Route$30.update({
			id: "/about/testimonials",
			path: "/about/testimonials",
			getParentRoute: () => Route$42
		}),
		AboutVisionMissionRoute: Route$29.update({
			id: "/about/vision-mission",
			path: "/about/vision-mission",
			getParentRoute: () => Route$42
		}),
		AcademicsActivityScheduleRoute: Route$28.update({
			id: "/academics/activity-schedule",
			path: "/academics/activity-schedule",
			getParentRoute: () => Route$42
		}),
		AcademicsCurriculumRoute: Route$27.update({
			id: "/academics/curriculum",
			path: "/academics/curriculum",
			getParentRoute: () => Route$42
		}),
		AcademicsExaminationRoute: Route$26.update({
			id: "/academics/examination",
			path: "/academics/examination",
			getParentRoute: () => Route$42
		}),
		AcademicsMethodOfEvaluationRoute: Route$25.update({
			id: "/academics/method-of-evaluation",
			path: "/academics/method-of-evaluation",
			getParentRoute: () => Route$42
		}),
		AcademicsOnlineLearningRoute: Route$24.update({
			id: "/academics/online-learning",
			path: "/academics/online-learning",
			getParentRoute: () => Route$42
		}),
		AcademicsStudentResourceCornerRoute: Route$23.update({
			id: "/academics/student-resource-corner",
			path: "/academics/student-resource-corner",
			getParentRoute: () => Route$42
		}),
		AcademicsSyllabusRoute: Route$22.update({
			id: "/academics/syllabus",
			path: "/academics/syllabus",
			getParentRoute: () => Route$42
		}),
		AcademicsTeachingMethodologyRoute: Route$21.update({
			id: "/academics/teaching-methodology",
			path: "/academics/teaching-methodology",
			getParentRoute: () => Route$42
		}),
		AcademicsTimetableRoute: Route$20.update({
			id: "/academics/timetable",
			path: "/academics/timetable",
			getParentRoute: () => Route$42
		}),
		AdmissionsFaqsRoute: Route$19.update({
			id: "/admissions/faqs",
			path: "/admissions/faqs",
			getParentRoute: () => Route$42
		}),
		AdmissionsFeeRoute: Route$18.update({
			id: "/admissions/fee",
			path: "/admissions/fee",
			getParentRoute: () => Route$42
		}),
		AdmissionsOnlineRegistrationRoute: Route$17.update({
			id: "/admissions/online-registration",
			path: "/admissions/online-registration",
			getParentRoute: () => Route$42
		}),
		AdmissionsPortalRoute: Route$16.update({
			id: "/admissions/portal",
			path: "/admissions/portal",
			getParentRoute: () => Route$42
		}),
		AdmissionsUniformRoute: Route$15.update({
			id: "/admissions/uniform",
			path: "/admissions/uniform",
			getParentRoute: () => Route$42
		}),
		EventsAksharaAbhyasRoute: Route$14.update({
			id: "/events/akshara-abhyas",
			path: "/events/akshara-abhyas",
			getParentRoute: () => Route$42
		}),
		EventsAnnualDayRoute: Route$13.update({
			id: "/events/annual-day",
			path: "/events/annual-day",
			getParentRoute: () => Route$42
		}),
		EventsFancyDressRoute: Route$12.update({
			id: "/events/fancy-dress",
			path: "/events/fancy-dress",
			getParentRoute: () => Route$42
		}),
		EventsIndependenceDayRoute: Route$11.update({
			id: "/events/independence-day",
			path: "/events/independence-day",
			getParentRoute: () => Route$42
		}),
		EventsPrimaryAnnualDayRoute: Route$10.update({
			id: "/events/primary-annual-day",
			path: "/events/primary-annual-day",
			getParentRoute: () => Route$42
		}),
		EventsPrimarySportsDayRoute: Route$9.update({
			id: "/events/primary-sports-day",
			path: "/events/primary-sports-day",
			getParentRoute: () => Route$42
		}),
		EventsProjectDayRoute: Route$8.update({
			id: "/events/project-day",
			path: "/events/project-day",
			getParentRoute: () => Route$42
		}),
		EventsRepublicDayRoute: Route$7.update({
			id: "/events/republic-day",
			path: "/events/republic-day",
			getParentRoute: () => Route$42
		}),
		EventsSportsDayRoute: Route$6.update({
			id: "/events/sports-day",
			path: "/events/sports-day",
			getParentRoute: () => Route$42
		}),
		EventsVidhyaPraveshRoute: Route$5.update({
			id: "/events/vidhya-pravesh",
			path: "/events/vidhya-pravesh",
			getParentRoute: () => Route$42
		}),
		LifeAchievementsRoute: Route$4.update({
			id: "/life/achievements",
			path: "/life/achievements",
			getParentRoute: () => Route$42
		}),
		LifeGalleryRoute: Route$3.update({
			id: "/life/gallery",
			path: "/life/gallery",
			getParentRoute: () => Route$42
		}),
		LifeInfrastructureRoute: Route$2.update({
			id: "/life/infrastructure",
			path: "/life/infrastructure",
			getParentRoute: () => Route$42
		}),
		LifeStudentClubsRoute: Route$1.update({
			id: "/life/student-clubs",
			path: "/life/student-clubs",
			getParentRoute: () => Route$42
		}),
		EventsEventSlugYearRoute: Route.update({
			id: "/events/$eventSlug/$year",
			path: "/events/$eventSlug/$year",
			getParentRoute: () => Route$42
		})
	};
	routeTree = Route$42._addFileChildren(rootRouteChildren)._addFileTypes();
}));
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter;
var init_router = __esmMin((() => {
	init_routeTree_gen();
	getRouter = () => {
		const queryClient = new QueryClient();
		return createRouter({
			routeTree,
			context: { queryClient },
			scrollRestoration: true,
			defaultPreloadStaleTime: 0
		});
	};
}));
var init_esm$2 = __esmMin((() => {
	init_esm$3();
	init_esm$3();
}));
var start_exports = /* @__PURE__ */ __exportAll({ startInstance: () => startInstance });
var errorMiddleware;
var csrfMiddleware;
var startInstance;
var init_start = __esmMin((() => {
	init_esm$2();
	init_error_page();
	errorMiddleware = createMiddleware().server(async ({ next }) => {
		try {
			return await next();
		} catch (error) {
			if (error != null && typeof error === "object" && "statusCode" in error) throw error;
			console.error(error);
			return new Response(renderErrorPage(), {
				status: 500,
				headers: { "content-type": "text/html; charset=utf-8" }
			});
		}
	});
	csrfMiddleware = createCsrfMiddleware({ filter: (ctx) => ctx.handlerType === "serverFn" });
	startInstance = createStart(() => ({ requestMiddleware: [errorMiddleware, csrfMiddleware] }));
}));
var empty_plugin_adapters_exports = /* @__PURE__ */ __exportAll({
	hasPluginAdapters: () => false,
	pluginSerializationAdapters: () => pluginSerializationAdapters
});
var pluginSerializationAdapters;
var init_empty_plugin_adapters = __esmMin((() => {
	pluginSerializationAdapters = [];
}));
function getStartResponseHeaders(opts) {
	return mergeHeaders({ "Content-Type": "text/html; charset=utf-8" }, ..._getRenderedMatches(opts.router.stores.matches.get()).map((match) => {
		return match.headers;
	}));
}
async function loadEntries() {
	const [routerEntry, startEntry, pluginAdapters] = await Promise.all([
		Promise.resolve().then(() => (init_router(), router_exports)),
		Promise.resolve().then(() => (init_start(), start_exports)),
		Promise.resolve().then(() => (init_empty_plugin_adapters(), empty_plugin_adapters_exports))
	]);
	return {
		routerEntry,
		startEntry,
		pluginAdapters
	};
}
function getEntries() {
	if (!entriesPromise) entriesPromise = loadEntries();
	return entriesPromise;
}
function throwRouteHandlerError() {
	throw new Error(ERR_NO_RESPONSE);
}
function throwIfMayNotDefer() {
	throw new Error(ERR_NO_DEFER);
}
function getResponseFromResult(result) {
	return isSsrResponse(result) || result instanceof Response ? result : result?.response;
}
function disposeResponseResult(result, reason) {
	const response = getResponseFromResult(result);
	if (isSsrResponse(response) || response instanceof Response) disposeSsrResponse(response, reason);
}
function hasResponseBody(value) {
	return value instanceof Response && value.body !== null;
}
function inheritsResponseOwnership(ownership, candidate) {
	return hasResponseBody(candidate) && (candidate.body === ownership.response.body || responseBodySources.get(candidate) === ownership.response);
}
function disposeResponseOwnership(ownership, reason) {
	const { response, sourceBody, streamResponse } = ownership;
	streamResponse?.dispose(reason);
	if (!streamResponse || response.body !== sourceBody) response.body.cancel(reason).catch(() => {});
}
function getOwnedResponse(ownership) {
	const { response, sourceBody, streamResponse } = ownership;
	if (!streamResponse) return response;
	if (streamResponse.response === response && response.body === sourceBody) return streamResponse;
	if (response.body === sourceBody) return {
		...streamResponse,
		response
	};
	return {
		...streamResponse,
		response,
		dispose(reason) {
			disposeResponseOwnership(ownership, reason);
		}
	};
}
function createLateResponseDisposer(signal) {
	return (result) => disposeResponseResult(result, signal.reason);
}
/**
* Compose middleware around a terminal response handler. With no middleware
* the terminal runs directly.
*/
async function executeMiddleware(middlewares, terminal, ctx, signal, terminalNext) {
	let index = -1;
	let responseOwnership;
	let settled = false;
	const disposeAbandonedResult = createLateResponseDisposer(signal);
	const setResponse = (response) => {
		const ssrResponse = isSsrResponse(response) ? response : void 0;
		const streamResponse = ssrResponse?.serverSsrCleanup === "stream" ? ssrResponse : void 0;
		const exposed = ssrResponse ? ssrResponse.response : response;
		const current = responseOwnership;
		if (settled) {
			if (exposed !== ctx.response) disposeResponseResult(response, "late middleware response");
			return;
		}
		if (current && current.response === exposed) current.streamResponse ??= streamResponse;
		else if (current && inheritsResponseOwnership(current, exposed)) {
			current.response = exposed;
			current.streamResponse ??= streamResponse;
		} else {
			if (current) disposeResponseOwnership(current, "middleware response replaced");
			if (hasResponseBody(exposed)) responseOwnership = {
				response: exposed,
				sourceBody: exposed.body,
				streamResponse
			};
			else responseOwnership = void 0;
		}
		ctx.response = exposed;
	};
	const reconcileCtxResponse = () => {
		if (ctx.response !== responseOwnership?.response) setResponse(ctx.response);
	};
	let nextPromise;
	function next(nextCtx) {
		const result = runNext(nextCtx);
		nextPromise = result;
		return result;
	}
	async function runNext(nextCtx) {
		signal.throwIfAborted();
		if (nextCtx) {
			if (nextCtx.context) ctx.context = safeObjectMerge(ctx.context, nextCtx.context);
			for (const key of Object.keys(nextCtx)) if (key === "response") setResponse(nextCtx.response);
			else if (key !== "context") ctx[key] = nextCtx[key];
		}
		index++;
		const isTerminal = index === middlewares.length;
		const middleware = index < middlewares.length ? middlewares[index] : isTerminal ? terminal : void 0;
		const middlewareNext = isTerminal && terminalNext ? terminalNext : next;
		if (!middleware) return ctx;
		let result;
		try {
			const pending = middleware({
				...ctx,
				next: middlewareNext
			});
			if (nextPromise && pending === nextPromise) {
				nextPromise = void 0;
				await pending;
				if (signal.aborted) throw signal.reason;
				return ctx;
			} else if (!isPromise(pending)) {
				result = pending;
				signal.throwIfAborted();
			} else result = await waitForReason(pending, signal, disposeAbandonedResult, disposeAbandonedResult);
		} catch (err) {
			reconcileCtxResponse();
			if (signal.aborted) {
				if (result !== void 0) disposeAbandonedResult(result);
				if (err !== signal.reason) disposeAbandonedResult(err);
				throw signal.reason;
			}
			if (err instanceof Response) {
				setResponse(err);
				return ctx;
			}
			throw err;
		}
		if (isTerminal && terminalNext && !result) throwRouteHandlerError();
		reconcileCtxResponse();
		if (result && result !== ctx) {
			const response = getResponseFromResult(result);
			if (response !== void 0 && response !== ctx.response) setResponse(response);
			if (response !== result && result.context && result.context !== ctx.context) ctx.context = safeObjectMerge(ctx.context, result.context);
		}
		return ctx;
	}
	try {
		await runNext();
		const response = ctx.response;
		if (!response) throwRouteHandlerError();
		reconcileCtxResponse();
		if (signal.aborted) throw signal.reason;
		settled = true;
		return responseOwnership ? getOwnedResponse(responseOwnership) : response;
	} catch (err) {
		settled = true;
		if (responseOwnership) disposeResponseOwnership(responseOwnership, signal.aborted ? signal.reason : err);
		throw err;
	}
}
/**
* Creates the TanStack Start request handler.
*
* @example Backwards-compatible usage (handler callback only):
* ```ts
* export default createStartHandler(defaultStreamHandler)
* ```
*
* @example With CDN URL rewriting:
* ```ts
* export default createStartHandler({
*   handler: defaultStreamHandler,
*   transformAssets: 'https://cdn.example.com',
* })
* ```
*
* @example With per-request URL rewriting:
* ```ts
* export default createStartHandler({
*   handler: defaultStreamHandler,
*   transformAssets: {
*     transform: ({ url }) => {
*       const cdnBase = getRequest().headers.get('x-cdn-base') || ''
*       return { href: `${cdnBase}${url}` }
*     },
*     cache: false,
*   },
* })
* ```
*/
function createStartHandler(cbOrOptions) {
	const handlerOptions = typeof cbOrOptions === "function" ? {} : cbOrOptions;
	const cb = typeof cbOrOptions === "function" ? cbOrOptions : cbOrOptions.handler;
	const finalManifestResolver = createFinalManifestResolver({
		...handlerOptions,
		cacheCreateTransform: true
	});
	const resolveManifestForRequest = finalManifestResolver.resolveCached;
	finalManifestResolver.warmup({ getBaseManifest: () => getBaseManifest(void 0) });
	const startRequestResolver = async (request, requestOpts) => {
		const signal = request.signal;
		let router;
		let routerPromise;
		let responseOwnsCleanup = false;
		try {
			signal.throwIfAborted();
			const { url, handledProtocolRelativeURL } = getNormalizedURL(request.url);
			const href = url.pathname + url.search + url.hash;
			const origin = url.origin;
			if (handledProtocolRelativeURL) return Response.redirect(url, 308);
			const entries = await waitForReason(getEntries(), signal);
			const isServerFnRequest = !!SERVER_FN_BASE && url.pathname.startsWith(SERVER_FN_BASE);
			const startInstance = entries.startEntry.startInstance;
			let startOptions;
			if (startInstance) {
				const pendingStartOptions = startInstance.getOptions();
				startOptions = isPromise(pendingStartOptions) ? await waitForReason(pendingStartOptions, signal) : pendingStartOptions;
				signal.throwIfAborted();
			} else startOptions = {};
			const { hasPluginAdapters, pluginSerializationAdapters } = entries.pluginAdapters;
			const serializationAdapters = [
				...startOptions.serializationAdapters || [],
				...hasPluginAdapters ? pluginSerializationAdapters : [],
				ServerFunctionSerializationAdapter
			];
			const requestStartOptions = {
				...startOptions,
				requestMiddleware: startInstance ? startOptions.requestMiddleware : isServerFnRequest ? [defaultCsrfMiddleware] : void 0,
				serializationAdapters
			};
			const flattenedRequestMiddlewares = requestStartOptions.requestMiddleware ? flattenMiddlewares(requestStartOptions.requestMiddleware) : [];
			const executedRequestMiddlewares = new Set(flattenedRequestMiddlewares);
			const getRouter = () => {
				routerPromise ??= (async () => {
					signal.throwIfAborted();
					const requestRouter = await waitForReason(entries.routerEntry.getRouter(), signal);
					let isShell = IS_SHELL_ENV;
					if (IS_PRERENDERING && !isShell) isShell = request.headers.get(HEADERS.TSS_SHELL) === "true";
					const history = createServerHistory(href);
					requestRouter.update({
						history,
						isShell,
						isPrerendering: IS_PRERENDERING,
						origin: requestRouter.options.origin ?? origin,
						defaultSsr: requestStartOptions.defaultSsr,
						serializationAdapters: [...requestStartOptions.serializationAdapters, ...requestRouter.options.serializationAdapters || []],
						basepath: ROUTER_BASEPATH
					});
					router = requestRouter;
					return requestRouter;
				})();
				return routerPromise;
			};
			const handlerType = isServerFnRequest ? "serverFn" : "router";
			const startContext = {
				getRouter,
				startOptions: requestStartOptions,
				request,
				executedRequestMiddlewares,
				handlerType
			};
			let terminal;
			if (isServerFnRequest) {
				const serverFnId = url.pathname.slice(SERVER_FN_BASE.length).split("/")[0];
				if (!serverFnId) throw new Error("Invalid server action param for serverFnId");
				terminal = ({ context }) => runWithStartContext({
					...startContext,
					contextAfterGlobalMiddlewares: context
				}, () => handleServerAction({
					request,
					context: requestOpts?.context,
					serverFnId
				}));
			} else {
				const executeRouter = async (serverContext, matchedRoutes) => {
					if (!/(^|,)\s*(\*\/\*|text\/html)/.test(request.headers.get("Accept") || "*/*")) return normalizeSsrResponse(Response.json({ error: "Only HTML requests are supported here" }, { status: 406 }));
					const manifest = await waitForReason(resolveManifestForRequest({
						request,
						requestInlineCss: requestOpts?.inlineCss,
						getBaseManifest: () => getBaseManifest(matchedRoutes)
					}), signal);
					const earlyHints = createEarlyHintsForRequest({
						onEarlyHints: requestOpts?.onEarlyHints,
						responseLinkHeader: requestOpts?.responseLinkHeader
					});
					earlyHints?.collectStatic({
						manifest,
						matchedRoutes
					});
					const routerInstance = await getRouter();
					attachRouterServerSsrUtils({
						router: routerInstance,
						manifest,
						getRequestAssets: () => getStartContext({ throwIfNotFound: false })?.requestAssets
					});
					routerInstance.options.additionalContext = { serverContext };
					await routerInstance.load({ _signal: signal });
					signal.throwIfAborted();
					if (routerInstance._serverResult?.type === "redirect") return normalizeSsrResponse(routerInstance._serverResult.redirect);
					earlyHints?.collectDynamic(_getRenderedMatches(routerInstance.stores.matches.get()));
					const ctx = getStartContext({ throwIfNotFound: false });
					await routerInstance.serverSsr.dehydrate({
						requestAssets: ctx?.requestAssets,
						signal
					});
					signal.throwIfAborted();
					const responseHeaders = getStartResponseHeaders({ router: routerInstance });
					earlyHints?.appendResponseHeaders(responseHeaders);
					signal.throwIfAborted();
					const disposeLate = createLateResponseDisposer(signal);
					return normalizeSsrResponse(await waitForReason(cb({
						request,
						router: routerInstance,
						responseHeaders
					}), signal, disposeLate, disposeLate));
				};
				terminal = ({ context }) => runWithStartContext({
					...startContext,
					contextAfterGlobalMiddlewares: context
				}, () => handleServerRoutes({
					getRouter,
					request,
					url,
					executeRouter,
					context,
					executedRequestMiddlewares
				}));
			}
			const middlewareResponse = await executeMiddleware(flattenedRequestMiddlewares.map((d) => d.options.server), terminal, {
				request,
				pathname: url.pathname,
				handlerType,
				context: createNullProtoObject(requestOpts?.context)
			}, signal);
			let result;
			try {
				result = await handleRedirectResponse(middlewareResponse, getRouter, signal, isServerFnRequest && request.headers.get("x-tsr-serverFn") === "true");
				if (request.method === "HEAD") result = stripSsrResponseBody(result, "HEAD body stripped");
			} catch (error) {
				disposeResponseResult(middlewareResponse, signal.aborted ? signal.reason : error);
				throw error;
			}
			bindSsrResponseToRequest(router, result, signal);
			signal.throwIfAborted();
			responseOwnsCleanup = result.serverSsrCleanup === "stream";
			return result.response;
		} finally {
			if (router?.serverSsr && !responseOwnsCleanup) router.serverSsr.cleanup();
		}
	};
	return requestHandler(startRequestResolver);
}
async function handleRedirectResponse(response, getRouter, signal, serializeRedirect) {
	signal.throwIfAborted();
	const ssrResponse = normalizeSsrResponse(response);
	const redirect = ssrResponse.response;
	if (!isRedirect(redirect)) return ssrResponse;
	const opts = redirect.options;
	const href = redirect.headers.get("Location") || opts.href;
	if (!href && opts.to && typeof opts.to === "string" && !opts.to.startsWith("/")) throw new Error(`Server side redirects must use absolute paths via the 'href' or 'to' options. The redirect() method's "to" property accepts an internal path only. Use the "href" property to provide an external URL. Received: ${JSON.stringify(opts)}`);
	if (!href && [
		"params",
		"search",
		"hash"
	].some((d) => typeof opts[d] === "function")) throw new Error(`Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(opts).filter((d) => typeof opts[d] === "function").map((d) => `"${d}"`).join(", ")}`);
	signal.throwIfAborted();
	if (href && !isDangerousProtocol(href, relativeRedirectProtocols)) {
		opts.href = href;
		redirect.headers.set("Location", href);
	} else {
		const router = await getRouter();
		signal.throwIfAborted();
		router.resolveRedirect(redirect);
	}
	if (serializeRedirect) {
		const redirectOptions = { ...opts };
		delete redirectOptions.headers;
		const responseHeaders = new Headers(redirect.headers);
		responseHeaders.set("content-type", "application/json");
		return replaceSsrResponse(ssrResponse, Response.json({
			...redirectOptions,
			isSerializedRedirect: true
		}, { headers: responseHeaders }), "redirect response replaced");
	}
	return ssrResponse;
}
function withParsedParams(handler, matchedRoutes) {
	if (!matchedRoutes.some((route) => route.options.params?.parse ?? route.options.parseParams)) return handler;
	return (ctx) => {
		const params = Object.assign(Object.create(null), ctx.params);
		for (const route of matchedRoutes) {
			const parse = route.options.params?.parse ?? route.options.parseParams;
			if (parse) Object.assign(params, parse(params));
		}
		return handler({
			...ctx,
			params
		});
	};
}
async function handleServerRoutes({ getRouter, request, url, executeRouter, context, executedRequestMiddlewares }) {
	const router = await getRouter();
	const pathname = executeRewriteInput(router.rewrite, url).pathname;
	const [matchedRoutes, rawParams, foundRoute] = router.getMatchedRoutes(pathname);
	const isExactMatch = foundRoute && rawParams["**"] === void 0;
	const routeMiddlewares = [];
	let terminalHandler = (ctx) => executeRouter(ctx.context, matchedRoutes);
	let terminalNext;
	for (const route of matchedRoutes) {
		const serverMiddleware = route.options.server?.middleware;
		if (serverMiddleware) {
			const flattened = flattenMiddlewares(serverMiddleware);
			for (const m of flattened) if (!executedRequestMiddlewares.has(m)) routeMiddlewares.push(m.options.server);
		}
	}
	const server = foundRoute?.options.server;
	if (server?.handlers && isExactMatch) {
		const handlers = typeof server.handlers === "function" ? server.handlers({ createHandlers: (d) => d }) : server.handlers;
		const requestMethod = request.method.toUpperCase();
		const handler = requestMethod === "HEAD" ? handlers["HEAD"] ?? handlers["GET"] ?? handlers["ANY"] : handlers[requestMethod] ?? handlers["ANY"];
		if (handler) {
			const mayDefer = !!foundRoute.options.component;
			if (typeof handler !== "function") {
				if (handler.middleware?.length) {
					const handlerMiddlewares = flattenMiddlewares(handler.middleware);
					for (const m of handlerMiddlewares) routeMiddlewares.push(m.options.server);
				}
			}
			const routeHandler = typeof handler === "function" ? handler : handler.handler;
			if (routeHandler) {
				const parsedHandler = withParsedParams(routeHandler, matchedRoutes);
				if (!mayDefer) {
					terminalHandler = parsedHandler;
					terminalNext = throwIfMayNotDefer;
				} else routeMiddlewares.push(parsedHandler);
			}
		}
	}
	return normalizeSsrResponse(await executeMiddleware(routeMiddlewares, terminalHandler, {
		request,
		context,
		params: rawParams,
		pathname,
		handlerType: "router"
	}, request.signal, terminalNext));
}
var entriesPromise;
var defaultCsrfMiddleware;
var getCachedBaseManifest;
var getProdBaseManifest;
var getBaseManifest;
var createEarlyHintsForRequest;
var ROUTER_BASEPATH;
var SERVER_FN_BASE;
var IS_PRERENDERING;
var IS_SHELL_ENV;
var IS_DEV;
var ERR_NO_RESPONSE;
var ERR_NO_DEFER;
var responseBodySources;
var relativeRedirectProtocols;
var init_createStartHandler = __esmMin((() => {
	init_request_response();
	init_router_manifest();
	init_server_functions_handler();
	init_early_hints();
	init_finalManifest();
	init_constants$1();
	init_ServerFunctionSerializationAdapter();
	init_esm$3();
	init_esm$4();
	defaultCsrfMiddleware = createCsrfMiddleware({ filter: (ctx) => ctx.handlerType === "serverFn" });
	getCachedBaseManifest = createCachedBaseManifestLoader(() => getStartManifest());
	getProdBaseManifest = () => getCachedBaseManifest();
	getBaseManifest = getProdBaseManifest;
	createEarlyHintsForRequest = createEarlyHintsCollector;
	ROUTER_BASEPATH = "/";
	SERVER_FN_BASE = "/_serverFn/";
	IS_PRERENDERING = process.env.TSS_PRERENDERING === "true";
	IS_SHELL_ENV = process.env.TSS_SHELL === "true";
	IS_DEV = false;
	ERR_NO_RESPONSE = IS_DEV ? `It looks like you forgot to return a response from your server route handler. If you want to defer to the app router, make sure to have a component set in this route.` : "Internal Server Error";
	ERR_NO_DEFER = IS_DEV ? `You cannot defer to the app router if there is no component defined on this route.` : "Internal Server Error";
	responseBodySources = /* @__PURE__ */ new WeakMap();
	relativeRedirectProtocols = /* @__PURE__ */ new Set();
}));
var init_esm$1 = __esmMin((() => {
	init_createStartHandler();
}));
var init_esm = __esmMin((() => {
	init_defaultStreamHandler();
	init_esm$1();
}));
var init_server$1 = __esmMin((() => {
	init_esm();
}));
var server_exports = /* @__PURE__ */ __exportAll({
	createServerEntry: () => createServerEntry,
	default: () => server_default$1
});
function createServerEntry(entry) {
	return { async fetch(...args) {
		return await entry.fetch(...args);
	} };
}
var fetch;
var server_default$1;
var init_server = __esmMin((() => {
	init_server$1();
	fetch = createStartHandler(defaultStreamHandler);
	server_default$1 = createServerEntry({ fetch });
}));
init_error_page();
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = Promise.resolve().then(() => (init_server(), server_exports)).then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!isH3SwallowedErrorBody(body)) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
function isH3SwallowedErrorBody(body) {
	try {
		const payload = JSON.parse(body);
		return payload.unhandled === true && payload.message === "HTTPError";
	} catch {
		return false;
	}
}
var server_default = { async fetch(request, env, ctx) {
	try {
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default };
