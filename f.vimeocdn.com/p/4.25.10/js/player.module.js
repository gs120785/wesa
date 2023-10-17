/* VimeoPlayer - v4.25.10 - 2023-10-04 - https://player.vimeo.com/NOTICE.txt */
import {
    _ as e,
    d as t,
    a as n,
    i,
    s as o,
    L as r,
    r as a,
    m as s,
    g as l,
    p as c,
    b as d,
    P as u,
    V as p,
    T as _,
    c as v,
    e as m,
    f,
    h,
    C as g,
    j as b,
    k as y,
    F as E,
    l as C,
    Q as w,
    S as T,
    n as L,
    o as S,
    H as k,
    A,
    E as P,
    q as I,
    M as R,
    t as O,
    B as N,
    u as M,
    v as D,
    w as x,
    D as B,
    x as V,
    y as U,
    z as F,
    G as H,
    I as q,
    J as $,
    K as W,
    N as Y,
    O as G,
    R as z,
    U as j,
    W as K,
    X as Z,
    Y as Q,
    Z as J,
    $ as ee,
    a0 as te,
    a1 as ne,
    a2 as ie,
    a3 as oe,
    a4 as re,
    a5 as ae,
    a6 as se,
    a7 as le,
    a8 as ce,
    a9 as de,
    aa as ue,
    ab as pe,
    ac as _e,
    ad as ve,
    ae as me,
    af as fe,
    ag as he,
    ah as ge,
    ai as be,
    aj as ye,
    ak as Ee,
    al as Ce,
    am as we,
    an as Te,
    ao as Le,
    ap as Se,
    aq as ke,
    ar as Ae,
    as as Pe,
    at as Ie,
    au as Re,
    av as Oe,
    aw as Ne,
    ax as Me,
    ay as De,
    az as xe,
    aA as Be,
    aB as Ve,
    aC as Ue,
    aD as Fe,
    aE as He,
    aF as qe,
    aG as $e,
    aH as We,
    aI as Ye,
    aJ as Ge,
    aK as ze,
    aL as je,
    aM as Ke,
    aN as Xe,
    aO as Ze,
    aP as Qe,
    aQ as Je
} from "./vendor.module.js";
export {
    X as BigScreen, aQ as requestModule
}
from "./vendor.module.js";
"classList" in SVGElement.prototype || Object.defineProperty(SVGElement.prototype, "classList", {
    get: function() {
        var e = this;
        return {
            contains: function(t) {
                return -1 !== e.className.baseVal.split(" ").indexOf(t)
            },
            add: function(t) {
                var n = (e.getAttribute("class") + " " + t).trim();
                return e.setAttribute("class", n)
            },
            remove: function(t) {
                var n = e.getAttribute("class") || "",
                    i = new RegExp("(?:^|\\s)" + t + "(?!\\S)", "g");
                n = n.replace(i, "").trim(), e.setAttribute("class", n)
            },
            toggle: function(e) {
                this.contains(e) ? this.remove(e) : this.add(e)
            }
        }
    }
});
let et = {};

function tt(e = "", t = {}) {
    var n;
    if ((null == (n = et.en) ? void 0 : n[e]) && (e = et.en[e]), Object.keys(t).forEach(n => {
            e = e.replace(new RegExp(`{${n}}`, "g"), t[n])
        }), e.match(/\{\w+}/)) throw new Error("Missing token definition.");
    return e
}

function nt(e) {
    return e = parseFloat(e), isNaN(e) || e < 0 ? "0" : e < 1e3 ? e.toString() : e >= 1e3 && e < 1e6 ? Math.floor(e / 1e3) + "." + Math.round(e % 1e3 / 100) + "K" : Math.floor(e / 1e6) + "." + Math.round(e % 1e6 / 1e5) + "M"
}

function it(e) {
    return !isNaN(e) && parseInt(Number(e), 10) == e && !isNaN(parseInt(e, 10))
}
const ot = function(t, ...n) {
        const i = n => n.length >= t.length ? t.apply(this, n) : (...t) => i([].concat(e(n), t));
        return i([])
    }((e, t) => Object.keys(e).every(n => e[n] === t[n])),
    rt = (e = []) => ({
        get: t => t ? e.find(ot(t)) : e,
        insert: t => (e = e.concat(t)).slice(-1).pop(),
        getOrInsert(e) {
            return this.get(e) || this.insert(e)
        },
        remove: t => e.splice(e.findIndex(ot(t)), 1).pop()
    });

function at(e, t, n = document.styleSheets[0]) {
    try {
        n.insertRule ? n.insertRule(e + "{" + t + "}", (n.cssRules || n.rules).length) : n.addRule(e, t)
    } catch (Ie) {}
}

function st(e = document.activeElement, t = null) {
    try {
        e.blur()
    } catch (Ie) {
        t && t(Ie)
    }
}

function lt(e = document.activeElement, t = null) {
    try {
        e.focus()
    } catch (Ie) {
        t && t(Ie)
    }
}

function ct(e) {
    let t = e.getBoundingClientRect();
    return document.msFullscreenElement && window.parent !== window && e.offsetWidth < e.clientWidth && (t = {
        bottom: 100 * t.bottom,
        left: 100 * t.left,
        top: 100 * t.top,
        right: 100 * t.right,
        width: 100 * t.width,
        height: 100 * t.height
    }), t
}

function dt(e) {
    try {
        return new URL(e).origin
    } catch (Ie) {}
    const t = document.createElement("a");
    return t.href = e, t.origin ? t.origin : `${t.protocol.replace(":","")}://${t.host}`
}

function ut({
    width: e,
    height: t,
    elementWidth: n,
    elementHeight: i,
    threshold: o = 10
}) {
    let r = 1;
    const a = e / t,
        s = n - i * a,
        l = i - n / a;
    if (s > 0 && s < o || l > 0 && l < o) {
        const e = n / (n - s),
            t = i / (i - l);
        r = ht(Math.max(e, t), 3)
    }
    return {
        extraWidth: s,
        extraHeight: l,
        scaleFactor: r
    }
}

function pt(e, t, n) {
    return e > n ? n : t > e ? t : e
}

function _t(e, t, {
    width: n,
    height: i,
    scrollbars: o = "yes",
    resizable: r = "yes",
    toolbar: a = "no"
}) {
    let s = (window.screenY || window.screenTop || 0) + window.outerHeight / 2 - i / 2,
        l = (window.screenX || window.screenLeft || 0) + window.outerWidth / 2 - n / 2;
    window.chrome && -1 !== window.navigator.userAgent.toLowerCase().indexOf("mac os x") && (i += 27), window.safari && (i += 47);
    let c = `scrollbars=${o},resizable=${r},toolbar=${a}`;
    return window.open(e, t, `width=${n},height=${i},left=${l},top=${s},${c}`)
}

function vt(e) {
    return function(e) {
        return /^(https?:)?\/\/(.+)\.(vimeo(ws)?|vimeo-(enterprise|work))\.(com|dev|work)(?=$|\/)/.test(e)
    }(e) ? dt(e) : ""
}

function mt(e, i, o) {
    if (function(e) {
            return /^(https?:)?\/\/(.+)\.(vimeo(ws)?|vimeo-(enterprise|work))\.(com|dev|work)\/video\/\d+\/config(?=$|\?)/.test(e)
        }(i)) return i;
    const r = function(e) {
            if (it(e)) return parseInt(e, 10);
            const t = e.match(/(video|\.com|\.dev)\/(\d+)/);
            if (!t || t.length < 3) throw new Error("Please provide a Vimeo URL with a valid clip id.");
            return parseInt(t[2], 10)
        }(i),
        a = t(window.location.search),
        s = t(`${i}`.split("?")[1]),
        l = Object.assign(a, s, o);
    return n(`${e}/video/${r}/config`, l)
}

function ft(e) {
    for (var t, n, i = (e || document).querySelectorAll("[tabindex]"), o = [], r = 0, a = 0, s = i.length; a < s; a++) t = i[a], n = window.getComputedStyle(t, ""), t.tabIndex > 0 && "none" !== n.display && n.opacity > 0 && "hidden" !== n.visibility && (o[r++] = t);
    var l = o.shift();
    l && (l.focus(), l.blur())
}

function ht(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    var n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function gt() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e => (e ^ 16 * Math.random() >> e / 4).toString(16))
}

function bt(e, t) {
    return -1 !== Array.from(t).indexOf(e)
}

function yt(e, t, n) {
    if (void 0 !== n) e.style[t] = n;
    else if (i(t)) e.setAttribute("style", t);
    else
        for (const i in t) yt(e, i, t[i])
}

function Et(e, t, n) {
    n.forEach(n => {
        e(n, (...e) => {
            t.apply(void 0, [n].concat(e))
        })
    })
}

function Ct(e) {
    for (var t = Object.keys(e), n = t.length, i = [], o = 0; o < n;) i[o] = e[t[o]], o += 1;
    return i
}

function wt(e, t) {
    return t && 0 === t.indexOf(e)
}! function(...e) {
    e.reduce((e, t) => (...n) => e(t.apply(void 0, n)))
}((function(e) {
    return e ? Array.from(e.parentNode.children).indexOf(e) : -1
}), (function(e, t) {
    for (;
        (null == (n = e) ? void 0 : n.parentElement) && !bt(e, t);) {
        var n;
        e = e.parentElement
    }
    return bt(e, t) ? e : null
}));
let Tt = 0;

function Lt(e = "p") {
    return `${e}${++Tt}`
}
const St = {
        _badPlayback: Lt(),
        _bufferStarted: Lt(),
        _spatialUnsupported: Lt(),
        _spatialFailure: Lt()
    },
    kt = {
        "vimeo.web_global": 5,
        "workflow.copy_video_embed_code": 5,
        "vimeo.player_performance_measurement": 1,
        "vimeo.chapter_segment_click": 2,
        "vimeo.click": 83,
        "timing-object-connect": 1,
        "timing-object-disconnect": 1,
        "vimeo.embedded_transcript_click": 6,
        "vimeo.closed_captions_click": 2,
        "vimeo.multi_audio_track_click": 1
    },
    At = {
        "vimeo.web_global": ["user", "application", "platform"],
        "workflow.copy_video_embed_code": ["path", "entry_page", "page", "location", "video_id", "video_privacy", "video_embed_privacy", "is_preset_applied", "is_video_password_protected", "video_app_id", "team_owner_id", "team_size", "team_subscription_type", "actor_team_role", "video_status", "upload_id", "product", "sizing", "height", "width", "video_type", "actor_resource_role", "hash"],
        "vimeo.player_performance_measurement": ["module_player", "device_type", "browser", "device_os", "iframed", "measurement_type", "measurement_value"],
        "vimeo.chapter_segment_click": ["video_id", "team_owner_id", "is_chapter_seek", "seek_event_start_time", "nearest_chapter_start_time", "chapter_seek_event_delta", "fragment_no_chapters_at_seek", "total_no_chapters_at_seek", "is_creator_mode"],
        "vimeo.click": ["page", "location", "target", "name", "copy", "feature", "type"],
        "vimeo.embedded_transcript_click": ["name", "embedded_transcript_session_id", "total_clip_duration", "video_timestamp", "video_id", "team_owner_id", "default_transcript_language", "session_duration", "copy", "location", "element", "current_transcript_language"],
        "vimeo.closed_captions_click": ["video_id", "video_privacy", "language_selected", "has_clicked_customize", "has_customized", "has_clicked_font", "has_changed_font", "has_clicked_background", "has_changed_background", "has_clicked_window", "has_changed_window", "has_reset_all", "final_action_reset_all"],
        "vimeo.multi_audio_track_click": ["event_name", "video_id", "video_privacy", "initial_track", "track_selected", "has_selected_track", "video_owner_id", "page"]
    },
    Pt = ["player_context", "video_context", "web_context", "team_context"],
    It = {
        "vimeo.view_player_csat_v1": [].concat(Pt, ["view_context"]),
        "vimeo.select_thumbs_up_player_csat_v1": [].concat(Pt, ["action_context"]),
        "vimeo.select_thumbs_down_player_csat_v1": [].concat(Pt, ["action_context"]),
        "vimeo.dismiss_player_csat_v1": [].concat(Pt, ["action_context"])
    },
    Rt = {
        team_context: ["team_owner_id", "team_subscription_type", "team_role", "team_id", "team_size", "resource_permission_level", "joined_team_at"],
        action_context: ["action_type", "feature"],
        view_context: ["view_type", "feature"],
        web_context: ["page_name", "location", "referrer_page_name", "referrer", "path", "target", "copy"],
        video_context: ["video_id", "title", "video_privacy", "video_embed_privacy", "content_rating", "upload_method_api", "upload_method_api_id", "duration", "resolution", "video_height", "video_width", "orientation", "is_auto_cc_enabled"],
        player_context: ["player_session_id", "total_video_duration", "video_timestamp"]
    },
    Ot = {
        team_context: 5,
        action_context: 5,
        view_context: 3,
        web_context: 10,
        video_context: 2,
        player_context: 2
    },
    Nt = {
        h264: "video/mp4",
        hls: "application/vnd.apple.mpegurl",
        hlsLive: "application/x-mpegURL",
        dash: "application/vnd.vimeo.dash+json",
        dashMpd: "video/vnd.mpeg.dash.mpd",
        vp6: "video/x-flv",
        vp8: "video/webm",
        webm: "video/webm",
        hds: "application/f4m"
    },
    Mt = {
        _seek: Lt(),
        _changeVolume: Lt(),
        _changeMuted: Lt(),
        _hideOverlay: Lt(),
        _showOverlay: Lt(),
        _updateOverlay: Lt(),
        _setActivePage: Lt(),
        _updateEmailCapture: Lt(),
        _updateWebinarStartTime: Lt(),
        _openPopup: Lt(),
        _reset: Lt(),
        _changeLoop: Lt(),
        _changeQuality: Lt(),
        _openVimeo: Lt(),
        _changeColor: Lt(),
        _disableVolume: Lt(),
        _enableVolume: Lt(),
        _disableCaptions: Lt(),
        _enableCaptions: Lt(),
        _forceFullscreen: Lt(),
        _turnCaptionsOn: Lt(),
        _turnCaptionsOff: Lt(),
        _changeCaptionsStyles: Lt(),
        _resetCaptionsStyles: Lt(),
        _toggleNativeControls: Lt(),
        _showOutro: Lt(),
        _hideOutro: Lt(),
        _setControlsVisibility: Lt(),
        _overrideControlbarBehavior: Lt(),
        _activatePictureInPicture: Lt(),
        _deactivatePictureInPicture: Lt(),
        _attachSpatialPlaybackEvents: Lt(),
        _toggleSpatialPlayback: Lt(),
        _revealSpatialControls: Lt(),
        _setTime: Lt(),
        _addCard: Lt(),
        _removeCard: Lt(),
        _changePlaybackRate: Lt(),
        _destroy: Lt(),
        _changeAudioTrack: Lt()
    },
    Dt = {
        will: "willLikeVideo",
        did: "didLikeVideo"
    },
    xt = {
        will: "willUnlikeVideo",
        did: "didUnlikeVideo"
    },
    Bt = {
        will: "willAddToWatchLater",
        did: "didAddToWatchLater"
    },
    Vt = {
        will: "willRemoveFromWatchLater",
        did: "didRemoveFromWatchLater"
    },
    Ut = {
        will: "willOpenVodPurchaseForm",
        did: "didOpenVodPurchaseForm"
    },
    Ft = {
        will: "willOpenShareOverlay",
        did: "didOpenShareOverlay"
    },
    Ht = {
        will: "willOpenLoginForm",
        did: "didOpenLoginForm"
    },
    qt = {
        will: "willOpenCollectionsOverlay",
        did: "didOpenCollectionsOverlay"
    },
    $t = {
        will: "willShowOutro",
        did: "didShowOutro"
    },
    Wt = {
        will: "willSendPlayLog",
        did: "didSendPlayLog"
    },
    Yt = {
        _apiError: Lt(),
        _error: Lt(),
        _playRejected: Lt(),
        _playResolved: Lt(),
        _paused: Lt(),
        _pausedForAd: Lt(),
        _resumedAfterAd: Lt(),
        _ended: Lt(),
        _volumeChanged: Lt(),
        _mutedChanged: Lt(),
        _qualityChanged: Lt(),
        _targetTimeReached: Lt(),
        _cuepoint: Lt(),
        _firstTimeUpdate: Lt(),
        _playbackRateChanged: Lt(),
        _nudgeAttempted: Lt(),
        _showNudgeNotification: Lt(),
        _nudgeEnded: Lt(),
        _fragmentChanged: Lt(),
        _fullscreenButtonPressed: Lt(),
        _pauseButtonPressed: Lt(),
        _playButtonPressed: Lt(),
        _prefsButtonPressed: Lt(),
        _ccButtonPressed: Lt(),
        _chapterSeekAttempted: Lt(),
        _chapterSeek: Lt(),
        _chapterHoverStateOn: Lt(),
        _chapterHoverStateOff: Lt(),
        _chapterChanged: Lt(),
        _scrubbingStarted: Lt(),
        _scrubbingEnded: Lt(),
        _volumeScrubbingStarted: Lt(),
        _volumeScrubbingEnded: Lt(),
        _controlBarVisibilityChanged: Lt(),
        _sidedockVisibilityChanged: Lt(),
        _menuVisibilityChanged: Lt(),
        _captionsChanged: Lt(),
        _cuePointAdded: Lt(),
        _cuePointRemoved: Lt(),
        _stereoscopicButtonPressed: Lt(),
        _menuPanelOpened: Lt(),
        _menuPanelClosed: Lt(),
        _menuCentered: Lt(),
        _badgePressed: Lt(),
        _muteAutoplayed: Lt(),
        _willEnterFullscreen: Lt(),
        _didEnterFullscreen: Lt(),
        _willExitFullscreen: Lt(),
        _didExitFullscreen: Lt(),
        _likeButtonPressed: Lt(),
        _watchLaterButtonPressed: Lt(),
        _shareButtonPressed: Lt(),
        _embedButtonPressed: Lt(),
        _vodButtonPressed: Lt(),
        _collectionsButtonPressed: Lt(),
        _followButtonPressed: Lt(),
        _overlayOpened: Lt(),
        _overlayClosed: Lt(),
        _overlayCleared: Lt(),
        _overlayCloseButtonPressed: Lt(),
        _facebookButtonPressed: Lt(),
        _twitterButtonPressed: Lt(),
        _tumblrButtonPressed: Lt(),
        _emailButtonPressed: Lt(),
        _embedCodeCopied: Lt(),
        _popupOpened: Lt(),
        _debugButtonPressed: Lt(),
        _emailCaptureSubmitted: Lt(),
        _popupClosed: Lt(),
        _shareViewShown: Lt(),
        _embedViewShown: Lt(),
        _shareViewEnd: Lt(),
        _embedViewEnd: Lt(),
        _showAndroidVRDeepLink: Lt(),
        _showEmailCaptureForm: Lt(),
        _debugDataChange: Lt(),
        _debugPayloadCopied: Lt(),
        _mousedOut: Lt(),
        _mousedOver: Lt(),
        _mouseTimeout: Lt(),
        _liked: Lt(),
        _unliked: Lt(),
        _addedToWatchLater: Lt(),
        _removedFromWatchLater: Lt(),
        _userLogIn: Lt(),
        _userLoggedIn: Lt(),
        _userLoggedOut: Lt(),
        _loginFailure: Lt(),
        _colorChanged: Lt(),
        _configChanged: Lt(),
        _liveEventSettingsChanged: Lt(),
        _passwordUnlocked: Lt(),
        _privateUnlocked: Lt(),
        _enteredTinyMode: Lt(),
        _enteredMiniMode: Lt(),
        _enteredNormalMode: Lt(),
        _requestConfigReloaded: Lt(),
        _embedSettingChanged: Lt(),
        _ottMetadataSet: Lt(),
        _outroDisplayed: Lt(),
        _outroHidden: Lt(),
        _outroVideoPressed: Lt(),
        _becameActive: Lt(),
        _becameInactive: Lt(),
        _tipped: Lt(),
        _emailCaptureSuccess: Lt(),
        _emailCaptureFailure: Lt(),
        _webinarFormSuccess: Lt(),
        _loadVideo: Lt(),
        _swapVideo: Lt(),
        _outroLinkPressed: Lt(),
        _followed: Lt(),
        _unfollowed: Lt(),
        _outroImagePressed: Lt(),
        _outroCtaPressed: Lt(),
        _cardDisplayed: Lt(),
        _cardPressed: Lt(),
        _spaceChanged: Lt(),
        _emailCaptureEnd: Lt(),
        _displayContextChanged: Lt(),
        _titleModuleReady: Lt(),
        _sidedockModuleReady: Lt(),
        _controlBarModuleReady: Lt(),
        _videoModuleReady: Lt(),
        _overlayModuleReady: Lt(),
        _notificationModuleReady: Lt(),
        _statsModuleReady: Lt(),
        _apiModuleReady: Lt(),
        _ready: Lt(),
        _notificationHidden: Lt(),
        _alertVisibilityChanged: Lt(),
        _airPlayAvailable: Lt(),
        _airPlayNotAvailable: Lt(),
        _airPlayActivated: Lt(),
        _airPlayDeactivated: Lt(),
        _airPlayButtonPressed: Lt(),
        _adBuffering: Lt(),
        _adComplete: Lt(),
        _adClicked: Lt(),
        _adError: Lt(),
        _adPaused: Lt(),
        _adResumed: Lt(),
        _adStarted: Lt(),
        _adSkipped: Lt(),
        _allAdsCompleted: Lt(),
        _logMetric: Lt(),
        _webinarRegistrantBlocked: Lt(),
        _webinarRegistrantUnblocked: Lt(),
        _interactiveReady: Lt(),
        _interactiveHotspotClicked: Lt(),
        _interactiveOverlayPanelClicked: Lt(),
        _interactiveMarkerClicked: Lt(),
        _interactiveSeekCall: Lt(),
        _transcriptChanged: Lt(),
        _rightContentAreaVisibilityChange: Lt(),
        _rightContentAreaEnabled: Lt(),
        _rightContentAreaDisabled: Lt(),
        _transcriptNavActive: Lt(),
        _transcriptSessionStarted: Lt(),
        _transcriptKeyPressed: Lt(),
        _qoeSurveyPresented: Lt()
    },
    Gt = {
        _seek: Lt(),
        _play: Lt(),
        _pause: Lt(),
        _playbackRateChange: Lt()
    },
    zt = {
        "application/vnd.apple.mpegurl": "hls",
        "application/vnd.vimeo.dash+json": "dash",
        "video/vnd.mpeg.dash.mpd": "dash",
        "video/mp4": "progressive",
        "video/webm": "progressive",
        "video/x-flv": "progressive",
        "application/x-mpegURL": "hlslive"
    },
    jt = {
        main: 1,
        privateLocked: 2,
        privateUnlocked: 3,
        privatePassword: 4,
        error: 7,
        contentRating: 9,
        webinarBlocked: 10,
        webinarLocked: 11,
        webinarUnlocked: 12,
        webinarFull: 13
    },
    Kt = {
        AD_STARTED: "adstarted",
        AD_COMPLETED: "adcompleted",
        AD_ERROR: "aderror",
        AD_SKIPPED: "adskipped",
        AD_ALL_COMPLETED: "adallcompleted",
        AD_CLICKED: "adclicked",
        BUFFER_END: "bufferend",
        BUFFER_START: "bufferstart",
        CHAPTER_CHANGE: "chapterchange",
        CHROMECAST_CONNECTED: "chromecastconnected",
        CONTROL_BAR_VISIBILITY_CHANGED: "controlbarvisibilitychanged",
        CUE_CHANGE: "cuechange",
        CUEPOINT: "cuepoint",
        DURATION_CHANGE: "durationchange",
        EMAIL_CAPTURE_FAILED: "emailcapturefailed",
        EMAIL_CAPTURE: "emailcapture",
        ENDED: "ended",
        ERROR: "error",
        FULLSCREENCHANGE: "fullscreenchange",
        INTERACTIVE_HOTSPOT_CLICKED: "interactivehotspotclicked",
        INTERACTIVE_OVERLAY_PANEL_CLICKED: "interactiveoverlaypanelclicked",
        LIVE_EVENT_ENDED: "liveeventended",
        LIVE_EVENT_STARTED: "liveeventstarted",
        LIVE_STREAM_OFFLINE: "livestreamoffline",
        LIVE_STREAM_ONLINE: "livestreamonline",
        LOADED_DATA: "loadeddata",
        LOAD_START: "loadstart",
        LOADED_METADATA: "loadedmetadata",
        LOADED: "loaded",
        MOTION_END: "motionend",
        MOTION_START: "motionstart",
        CAMERA_CHANGE: "camerachange",
        WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable",
        ENTER_WEBVR: "enterwebvr",
        EXIT_WEBVR: "exitwebvr",
        ENTER_PICTURE_IN_PICTURE: "enterpictureinpicture",
        LEAVE_PICTURE_IN_PICTURE: "leavepictureinpicture",
        SPATIAL_UNSUPPORTED: "spatialunsupported",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        PLAYBACK_RATE_CHANGE: "playbackratechange",
        RATE_CHANGE: "ratechange",
        PROGRESS: "progress",
        QUALITY_CHANGE: "qualitychange",
        READY: "ready",
        REMOTE_PLAYBACK_AVAILABILITY_CHANGE: "remoteplaybackavailabilitychange",
        REMOTE_PLAYBACK_CONNECTING: "remoteplaybackconnecting",
        REMOTE_PLAYBACK_CONNECT: "remoteplaybackconnect",
        REMOTE_PLAYBACK_DISCONNECT: "remoteplaybackdisconnect",
        RESIZE: "resize",
        SEEKING: "seeking",
        SEEKED: "seeked",
        SPACE_CHANGE: "spacechange",
        TEXT_TRACK_CHANGE: "texttrackchange",
        TIME_UPDATE: "timeupdate",
        VOLUME_CHANGE: "volumechange",
        WAITING: "waiting"
    },
    Xt = {
        playProgress: "timeupdate",
        loadProgress: "progress",
        finish: "ended",
        seek: "seeked"
    },
    Zt = !0 === o.iOS,
    Qt = {
        NOTHING: "nothing",
        BEGINNING: "beginning",
        EMAIL: "email",
        VOD: "vod",
        VIDEOS: "videos",
        LINK: "link",
        THREEVIDEOS: "threevideos",
        PROMOTED: "promoted",
        SHARE: "share"
    },
    Jt = "one",
    en = "two",
    tn = "three",
    nn = "four",
    on = {
        [Jt]: "000000",
        [en]: "00adef",
        [tn]: "ffffff",
        [nn]: "000000"
    },
    rn = {
        [Jt]: "color_one",
        [en]: "color_two",
        [tn]: "color_three",
        [nn]: "color_four"
    },
    an = {
        [Jt]: "colorOne",
        [en]: "colorTwo",
        [tn]: "colorThree",
        [nn]: "colorFour"
    };
var sn;
! function(e) {
    e.POPUP = "popup", e.ON_SITE = "onsite"
}(sn || (sn = {}));
var ln = sn;
const cn = () => ({
    id: "error",
    title: "Player error",
    message: "The player is having trouble. We’ll have it back up and running as soon as possible.",
    modal: !0,
    final: !0
});
var dn = Object.freeze({
    __proto__: null,
    BrowserNotSupported: () => ({
        id: "not-supported",
        title: "Unsupported viewing environment",
        message: 'Your system is having trouble playing this video. For more information, see our <a href="https://help.vimeo.com/hc/en-us/articles/115015677227-Troubleshoot-player-error-messages" target="_blank" rel="noopener" aria-describedby="new-window">Help Center</a>.',
        deferred: !0,
        final: !0
    }),
    DRMFailure: () => ({
        id: "drm-failure",
        title: "Rights issue",
        message: "We’re having trouble authorizing playback for this video. ",
        final: !0
    }),
    FilesNotPlayable: () => ({
        id: "not-supported",
        title: "Player error",
        message: "The player is having trouble. We’ll have it back up and running as soon as possible.",
        deferred: !0,
        final: !0
    }),
    MediaSrcNotSupportedError: () => ({
        id: "not-supported",
        final: !1
    }),
    MediaDecodeError: () => ({
        id: "decode",
        final: !1
    }),
    MediaNetworkError: () => ({
        id: "network",
        title: "Network error",
        message: 'A network hiccup interrupted playback. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !0
    }),
    MediaUnknownError: () => ({
        id: "unknown",
        title: "Browser error",
        message: 'We’re having trouble playing this video file. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !0
    }),
    FileError: () => ({
        id: "telecine-file-error",
        final: !1
    }),
    DownloadError: () => ({
        id: "telecine-download-error",
        final: !1
    }),
    MediaUrlExpired: () => ({
        id: "media-url-expired",
        title: "Playback error",
        message: 'We’re having trouble playing this video. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
        final: !1
    }),
    ScannerError: () => ({
        id: "scanner-error",
        final: !1
    }),
    PlayerError: cn
});

function un(e) {
    return e.config.video.ecdn ? e.config.video.live_event ? "vimeo-live-ecdn" : "vimeo-vod-ecdn" : e.config.embed.wirewax ? "vimeo-interactive-vod" : e.config.request.flags.ott ? "vimeo-ott-vod" : e.config.video.webinar && "ended" !== e.config.video.webinar.status ? "vimeo-live-webinar" : e.config.video.live_event ? "vimeo-live" : e.config.embed.context && -1 !== e.config.embed.context.indexOf("Stock") ? "vimeo-stock-vod" : e.config.video.vod ? "vimeo-ondemand" : "vimeo-vod"
}
const pn = () => {
        const [e, t, n] = "4.25.10".split(".");
        return {
            full: "4.25.10",
            major: e,
            minor: t,
            patch: n
        }
    },
    _n = o.iPhone || o.mobileAndroid || o.windowsPhone || o.browser.bb10;

function vn() {
    let e = "desktop";
    return o.iPad ? e = "tablet" : _n && (e = "mobile"), e
}

function mn() {
    let e = "windows";
    return o.iOS ? e = "iOS" : o.android ? e = "android" : o.mac ? e = "macOS" : o.windowsPhone && (e = "windowsPhone"), e
}

function fn(e) {
    const {
        user: t,
        video: n
    } = e;
    let i = "viewer";
    return t.team_id && (i = t.id === t.team_origin_user_id ? "admin" : "contributor"), t.id === n.owner.id && (i = "owner"), i
}

function hn(e, t) {
    return e === t ? "square" : t > e ? "portrait" : "landscape"
}
const gn = !!window.newrelic && "function" == typeof window.newrelic.addToTrace && "function" == typeof window.newrelic.noticeError && "function" == typeof window.newrelic.setErrorHandler && "function" == typeof window.newrelic.setCustomAttribute,
    bn = ["chrome-extension:", "moz-extension:"].includes(document.location.protocol),
    yn = Date.now(),
    En = ["NotAllowedError", "AbortError", "PlayInterrupted", "Failed to load image", "window.__withBuiltIn is not a function", "window.__timeSinceLastTimeout is not a function", "div:has(> iframe[id=", "No cast extension found", "Cast is not available on this browser."];

function Cn(e) {
    return Math.random() <= e
}

function wn(e, t, n = .1) {
    Cn(n) && ((e, t = {}) => {
        if (gn && e) {
            const n = Object.assign({}, t, {
                manually_captured: 1,
                player_lifespan_seconds: Math.round((Date.now() - yn) / 1e3)
            });
            newrelic.noticeError(e, n)
        }
    })(e, t)
}
window.addEventListener("unhandledrejection", e => {
    e.preventDefault(), e.reason && wn(e.reason, {
        unhandled_rejection: 1
    })
});
var Tn = {
    setUp: function(e) {
        (e => {
            gn && ((e => {
                var t;
                const n = {
                    environment: "dev" === e.request.build.js ? "dev" : "production",
                    js_modules: !0,
                    version_js: e.request.build.js,
                    version_backend: e.request.build.backend,
                    visibility_state: document.visibilityState,
                    vimeo_session: e.request.session,
                    locale: e.request.lang,
                    product: un({
                        config: e
                    }),
                    video_embed_permission: e.video.embed_permission,
                    video_privacy: e.video.privacy,
                    live_session_id: null == (t = e.video.live_event) ? void 0 : t.id,
                    rawUserAgent: navigator.userAgent
                };
                if (e.request.ab_tests)
                    for (const i in e.request.ab_tests) {
                        const t = e.request.ab_tests[i];
                        n[`${i}_test`] = 1, n[`${i}_group`] = t.group;
                        for (const e in t.data) n[`${i}_data_${e}`] = t.data[e]
                    }
                e.user.logged_in && (n.userId = e.user.id);
                for (let i in n) newrelic.setCustomAttribute(i, n[i])
            })(e), newrelic.setErrorHandler((function(t) {
                var n;
                return !!((e, t) => {
                    var n;
                    return !!(o.appleMail || !t.request || bn || En.some(t => {
                        var n, i;
                        return (null == e || null == (n = e.message) ? void 0 : n.includes(t)) || (null == e || null == (i = e.name) ? void 0 : i.includes(t))
                    }) || (null == e || null == (n = e.message) ? void 0 : n.startsWith("ReportingObserver")) && Math.random() > .01)
                })(t, e) || ((null == t || null == (n = t.message) ? void 0 : n.startsWith("Non-Error exception captured")) && newrelic.addToTrace({
                    name: "nonErrorException",
                    start: Date.now()
                }), !1)
            })))
        })(e.config)
    },
    captureException: wn,
    captureMessage: function(e) {},
    captureBreadcrumb: function(e) {
        (e => {
            gn && newrelic.addToTrace({
                name: e,
                start: Date.now()
            })
        })(e)
    }
};
let Ln;

function Sn({
    events: e
}) {
    let t = null,
        n = null,
        i = null,
        o = null,
        r = null,
        l = {
            video: {},
            request: {},
            embed: {}
        };

    function c() {
        return n && n - 6e4 <= Date.now()
    }

    function d(e) {
        const t = Date.now() + 1e3 * e;
        return r = setTimeout(() => {
            "onLine" in navigator && !navigator.onLine || o || (o = p().catch(Tn.captureException))
        }, 1e3 * e - 6e4 - 5e3), t
    }

    function u(e, i = {}) {
        var o, c;
        clearTimeout(r);
        const u = t;
        if (isNaN(e) && "string" != typeof e) return t = e, n = d(t.request.expires), Promise.resolve({
            old: u,
            loaded: t
        });
        Date.now(), l = s(l, t);
        const p = l.request.referrer;
        p && (i.referrer = p), l.video.webinar && l.video.webinar.registrant && (i.webinar_registrant_uuid = l.video.webinar.registrant), Ln || (Ln = vt(e));
        const _ = mt(Ln || ((null == (o = t) ? void 0 : o.player_url) ? `https://${null==(c=t)?void 0:c.player_url}` : ""), e, i);
        return a(_, {
            withCredentials: !0,
            throwHttpErrors: !1
        }).json().then(e => (t = e, t.view !== jt.error && (n = d(t.request.expires), l.request.session && t.video.id === l.video.id && (t.request.session = l.request.session), p && (t.request.referrer = p), l.embed.player_id && (t.embed.player_id = l.embed.player_id), l.embed.on_site && (t.embed.on_site = 1, t.embed.context = l.embed.context)), Date.now(), {
            old: u,
            loaded: t
        })).catch(e => {
            Tn.captureException(e)
        })
    }

    function p() {
        var i;
        clearTimeout(r), Date.now();
        const s = null == (i = t) ? void 0 : i.request.referrer,
            {
                signature: l,
                session: c,
                timestamp: u,
                expires: p
            } = t.request,
            _ = t.request.ott_chromecast_token;
        let v = `https://${t.player_url}/video/${t.video.id}/config/request?session=${c}&signature=${l}&time=${u}&expires=${p}`;
        return _ && (v = `${v}&ott_chromecast_token=${_}`), s && (v += `${-1===v.indexOf("?")?"?":"&"}referrer=${encodeURIComponent(s)}`), a(v, {
            withCredentials: !0,
            retry: 3
        }).json().then(i => (t.request = i, s && (t.request.referrer = s), n = d(t.request.expires), Date.now(), o = null, e.fire(Yt._requestConfigReloaded), t.request)).catch(t => {
            const n = {
                id: "network",
                title: "Network error",
                message: 'A network hiccup interrupted playback. Please <a href="javascript:window.location.reload()" rel="noopener">reload the player</a> and try again.',
                final: !0
            };
            throw e.fire(Yt._error, n.id, n), t
        })
    }
    return window.addEventListener("online", () => {
        c() && (o = p().catch(Tn.captureException))
    }), e.on(Yt._error, e => {
        o || "media-url-expired" !== e || (o = p().catch(Tn.captureException))
    }), {
        get isExpired() {
            return c()
        },
        load: (e, t) => u(e, t),
        reload() {
            var e;
            return (null == (e = t) ? void 0 : e.video.id) ? u(t.video.id) : Promise.reject(new Error("No config loaded."))
        },
        toJSON: () => t,
        get config() {
            return t
        },
        set config(e) {
            t = e
        },
        verify: () => c() ? (o || (o = p()), o) : Promise.resolve(t.request),
        loadRequest: () => p(),
        get _video() {
            return i
        },
        set _video(e) {
            i = e
        }
    }
}

function kn(e, t) {
    let n = e,
        i = t;
    return n % 320 != 0 && (n = 100 * Math.ceil(e / 100), i = Math.round(n / e * t)), {
        width: n,
        height: i
    }
}

function An({
    width: e,
    height: t,
    baseUrl: i,
    crop: r = !1
}) {
    i = i.replace(/\.[^/.]+$/, "");
    let a = {};
    const s = parseInt(e, 10),
        l = parseInt(t, 10);
    return 0 === s || isNaN(s) || (r ? a.w = s : a.mw = s), 0 === l || isNaN(l) || (r ? a.h = l : a.mh = l), o.devicePixelRatio > 1 && (a.q = 70), n(i, a)
}

function Pn(e) {
    return function(e) {
        return new Promise((t, n) => {
            const i = new Image;

            function o() {
                Tn.captureBreadcrumb(`Load image: ${e}`, {}), n(new Error("Failed to load image."))
            }
            i.onload = function() {
                i && i.width > 0 && i.height > 0 ? t(i) : o()
            }, i.onerror = o, i.src = e
        })
    }(e).catch(t => (Tn.captureException(t, {
        extra: {
            imageUrl: e
        }
    }), new Promise(() => {})))
}
const In = {
        id: "7742C69E",
        name: "prod"
    },
    Rn = {
        id: "BA42D416",
        name: "prod"
    },
    On = {
        id: "78077C77",
        name: "prod"
    },
    Nn = {
        connected: Lt(),
        disconnected: Lt(),
        playing: Lt(),
        paused: Lt(),
        buffering: Lt(),
        idle: Lt(),
        ended: Lt(),
        sessionStateChanged: Lt(),
        timeUpdated: Lt(),
        mediaLoadedSuccess: Lt(),
        mediaLoadedFailed: Lt(),
        error: Lt()
    };
let Mn = function() {
    function e({
        player: e,
        textAlert: t = null
    }) {
        this._textAlert = t, this._player = e, this._onControlSeek = this.onControlSeek.bind(this), this._onChangeVolume = this.onChangeVolume.bind(this), this._onPlayOrPausePressed = this.onPlayOrPausePressed.bind(this), this._onConfigChanged = this.onConfigChanged.bind(this), this._onReset = this.onReset.bind(this), this._onPlayerStateChanged = this.onPlayerStateChanged.bind(this), this._onCurrentTimeChanged = this.onCurrentTimeChanged.bind(this), this._onIsConnectedChanged = this.onIsConnectedChanged.bind(this), this._onSessionStateChanged = this.onSessionStateChanged.bind(this), this._onIsMediaLoadedChanged = this.onIsMediaLoadedChanged.bind(this), this._onVolumeLevelChanged = this.onVolumeLevelChanged.bind(this), this._onIsMutedChanged = this.onIsMutedChanged.bind(this), this._onCaptionsChanged = this.onCaptionsChanged.bind(this), this._onMessageReceived = this.onMessageReceived.bind(this), this._preventPlayerDefaultEvent = this.preventPlayerDefaultEvent.bind(this), this.endVideo = m(this._endVideo, 500)
    }
    var t = e.prototype;
    return t.calculateStartTime = function(e = null) {
        let t = Number(e) || this._player.backbone.currentTime - 7;
        return t < 0 && (t = 0), this.isEndOfVideo && (t = 0), t
    }, t.loadMedia = function({
        contentId: e,
        currentTime: t = null,
        duration: n = null,
        token: i = null,
        bypassToken: o = null,
        autoRequest: r = !1,
        autoCaption: a = !0,
        autoDisconnect: s = !0,
        tracks: p = []
    } = {}) {
        if (Dn.isLoadingMedia) return Promise.resolve(!1);
        const _ = this._player.config;
        e = e || _.video.id;
        const v = _.request,
            m = v.drm;
        let f;
        if (null == m ? void 0 : m.fastly) {
            const t = l(v, "files.dash.default_cdn");
            e = l(v, `files.dash.cdns.${t}.url`), f = l(m, "cdms.widevine.license_url"), p = (v.text_tracks || []).map(e => {
                const {
                    pathname: t,
                    search: n
                } = c(e.url);
                return d(d({}, e), {}, {
                    url: `https://player.vimeo.com${t}${n}`
                })
            })
        }
        const h = this.calculateStartTime(t);
        n = Number(n) || this.duration, i = i || _.user.vimeo_api_client_token, o = o || _.video.bypass_token, this.isEndOfVideo && (this._isEndOfVideo = !1);
        const g = {
            contentId: e,
            duration: n,
            autoRequest: r,
            tracks: p,
            currentTime: h,
            requestCustomData: {
                token: i,
                bypassToken: o,
                tokenType: "jwt"
            }
        };
        return this._player.config.request.ott_chromecast_token && (g.requestCustomData.ottChromecastToken = this._player.config.request.ott_chromecast_token), this._player.config.ottCastOptions && (g.ottCastOptions = this._player.config.ottCastOptions), (f ? this._getLicenseUrl(f).then(e => d(d({}, g), {}, {
            mediaCustomData: {
                widevineLicenseServerURL: e
            }
        })) : Promise.resolve(g)).then(e => Dn.loadMedia(e)).then(() => (Dn.fire(Nn.mediaLoadedSuccess), this.addRemotePlayerListenersOnPlaying(), this._player.events.fire(u), this._player.events.fire(Mt._hideOutro), this._isOutroRendered = !1, a && this.onCaptionsChanged(this._player.backbone.enabledTextTrack), this._player.backbone.paused || this._player.backbone.pause(), !0)).catch(e => (Dn.fire(Nn.mediaLoadedFailed, e), s && this.endCurrentSession(), Promise.reject(e)))
    }, t._getLicenseUrl = function(e) {
        return new Promise((t, n) => {
            const i = new XMLHttpRequest;
            i.open("GET", e), i.onload = () => {
                const e = e => new Error(`Error retrieving License Acquisition URL (LA_URL): ${e}`);
                if (i.status >= 200 && i.status < 300) try {
                    t(i.response)
                } catch (Ie) {
                    n(e(Ie))
                } else n(e(i.status))
            }, i.onerror = n, i.send()
        })
    }, t.init = function() {
        this.removeInitListeners(), this.addInitListeners()
    }, t.addInitListeners = function() {
        this.addSessionStateListener(), this.addIsConnectedListener()
    }, t.endCurrentSession = function(e = !0) {
        Dn.castContext && Dn.castContext.endCurrentSession(e)
    }, t.syncBackbone = function() {
        !this.isOutroRendered && this._player.backbone.paused && (this._player.backbone.currentTime = this.lastCurrentTime, this.syncTime())
    }, t.stopBackbone = function() {
        this._player.events.fire(Mt._reset)
    }, t.storeBackboneData = function() {
        this.lastCurrentTime = this._player.backbone.currentTime
    }, t.applyBackboneData = function() {
        this.lastCurrentTime && (this._player.backbone.currentTime = this.lastCurrentTime)
    }, t.enableUI = function() {
        if (this._textAlert) {
            var e;
            const t = null == (e = Dn.currentSessionObj) ? void 0 : e.receiver;
            t && this._textAlert.show("Casting on " + t.friendlyName)
        }
        this._player.preview.show(), this._player.element.classList.add("is-casting")
    }, t.disableUI = function() {
        this._textAlert && this._textAlert.hide(), this.isOutroRendered || (this._player.preview.hide(), this._player.backbone.element.classList.remove("invisible")), this._player.element.classList.remove("is-casting")
    }, t.syncTime = function() {
        const e = this.lastCurrentTime / this.duration;
        Dn.fire(Nn.timeUpdated, {
            currentTime: this.lastCurrentTime,
            duration: this.duration,
            percent: e
        }), e > 0 && this._player.events.fire(p.TIME_UPDATE, {
            currentTime: this.lastCurrentTime,
            duration: this.duration,
            timeProgress: e
        })
    }, t._endVideo = function() {
        return this._isEndOfVideo = !0, this._player.events.fire(Yt._ended), this.removeRemotePlayerListenersOnPlaying(), this.isLooped ? this.loadMedia().catch(() => {
            this.showOutro()
        }) : this.showOutro(), Dn.fire(Nn.ended), !0
    }, t.showOutro = function() {
        this.isOutroRendered || (this._isOutroRendered = !0, this._player.events.fire(Mt._showOutro))
    }, t.dispose = function() {
        this.endCurrentSession(), this.removeAllRemoteListeners()
    }, t.onIsMediaLoadedChanged = function(e) {
        !1 === e.value ? this.isTimeEnded && this.endVideo() : this._player.backbone.paused || this._player.backbone.pause()
    }, t.onPlayerStateChanged = function(e) {
        switch (null === e.value && this.isTimeEnded && this.endVideo(), e.value) {
            case Dn.PlayerState.PLAYING:
                Dn.fire(Nn.playing);
                break;
            case Dn.PlayerState.PAUSED:
                Dn.fire(Nn.paused);
                break;
            case Dn.PlayerState.BUFFERING:
                Dn.fire(Nn.buffering);
                break;
            case Dn.PlayerState.IDLE:
            default:
                Dn.fire(Nn.idle)
        }
    }, t.onVolumeLevelChanged = function(e) {
        this._player.events.fire(Mt._changeVolume, e.value, !0)
    }, t.onIsMutedChanged = function(e) {
        this._player.events.fire(Mt._changeVolume, e.value ? 0 : Dn.remotePlayer.volumeLevel, !0)
    }, t.onCurrentTimeChanged = function(e) {
        this.isMediaLoaded && (this.lastCurrentTime = e.value), this.syncTime(), this.isTimeEnded && this.endVideo()
    }, t.onChangeVolume = function(e) {
        this.volumeLevel = e
    }, t.onCaptionsChanged = function(e) {
        const t = Dn.currentSession;
        t && t.sendMessage("urn:x-cast:com.vimeo.cast.media", {
            action: "setActiveByLanguage",
            value: null == e ? void 0 : e.language
        })
    }, t.onSessionStateChanged = function(e) {
        switch (e.sessionState) {
            case Dn.SessionState.SESSION_STARTING:
                this.addPreventLocalPlayerEvents();
                break;
            case Dn.SessionState.SESSION_RESUMED:
            case Dn.SessionState.SESSION_STARTED:
                this.loadMedia();
                break;
            case Dn.SessionState.SESSION_ENDING:
            case Dn.SessionState.SESSION_ENDED:
                break;
            case Dn.SessionState.SESSION_START_FAILED:
                this.removePreventLocalPlayerEvents()
        }
        Dn.fire(Nn.sessionStateChanged, e.sessionState)
    }, t.onIsConnectedChanged = function(e) {
        e.value ? this.onConnected() : this.onDisconnected()
    }, t.onConnected = function() {
        this.removePreventLocalPlayerEvents(), this.storeBackboneData(), this.stopBackbone(), this.applyBackboneData(), this.addLocalPlayerListeners(), this.addRemotePlayerListenersOnIdle(), this.addMessageListener(), this.enableUI(), Dn.fire(Nn.connected)
    }, t.onDisconnected = function() {
        this.syncBackbone(), this.removeRemotePlayerListeners(), this.removeLocalPlayerListeners(), this.removeMessageListener(), this.disableUI(), Dn.fire(Nn.disconnected)
    }, t.onConfigChanged = function() {
        this.loadMedia()
    }, t.onReset = function() {
        this.loadMedia()
    }, t.onPlayOrPausePressed = function() {
        this.isEndOfVideo ? this.loadMedia() : this.isPlayingOrPaused && Dn.remotePlayerController.playOrPause(), this._player.events.halt()
    }, t.onControlSeek = function(e) {
        this.currentTime = e, this._player.events.halt()
    }, t.addSessionStateListener = function() {
        Dn.castContext && Dn.castContext.addEventListener(Dn.CastContextEventType.SESSION_STATE_CHANGED, this._onSessionStateChanged)
    }, t.addMessageListener = function() {
        const e = Dn.currentSession;
        e && e.addMessageListener("urn:x-cast:com.vimeo.cast.media", this._onMessageReceived)
    }, t.onMessageReceived = function(e, t) {
        "MEDIA_FINISHED" === (t = JSON.parse(t)).type && ("END_OF_STREAM" === t.endedReason ? this.endVideo() : "ERROR" === t.endedReason && (this.endCurrentSession(), Dn.fire(Nn.error, new Error("Chromecast encountered an error and media finished."))))
    }, t.addIsConnectedListener = function() {
        Dn.remotePlayerController && Dn.remotePlayerController.addEventListener(Dn.RemotePlayerEventType.IS_CONNECTED_CHANGED, this._onIsConnectedChanged)
    }, t.addPreventLocalPlayerEvents = function() {
        this._player.events.prependOn([Yt._playButtonPressed, Yt._pauseButtonPressed, Yt._scrubbingStarted, Yt._scrubbingEnded, _.BUFFER_STARTED, _.BUFFER_ENDED, Mt._seek, Yt._volumeChanged, Yt._captionsChanged, Yt._configChanged, Mt._reset], this._preventPlayerDefaultEvent)
    }, t.addRemotePlayerListenersOnIdle = function() {
        this.removeRemotePlayerListenersOnIdle(), this.addIsMediaLoadedChangedListener(), this.addVolumeLevelChangedListener()
    }, t.addLocalPlayerListeners = function() {
        this._player.events.prependOn(Yt._playButtonPressed, this._onPlayOrPausePressed), this._player.events.prependOn(Yt._pauseButtonPressed, this._onPlayOrPausePressed), this._player.events.prependOn(Yt._scrubbingStarted, this._preventPlayerDefaultEvent), this._player.events.prependOn(Yt._scrubbingEnded, this._preventPlayerDefaultEvent), this._player.events.prependOn(_.BUFFER_STARTED, this._preventPlayerDefaultEvent), this._player.events.prependOn(_.BUFFER_ENDED, this._preventPlayerDefaultEvent), this._player.events.prependOn(Mt._seek, this._onControlSeek), this._player.events.prependOn(Yt._volumeChanged, this._onChangeVolume), this._player.events.on(Yt._captionsChanged, this._onCaptionsChanged), this._player.events.on(Yt._configChanged, this._onConfigChanged), this._player.events.on(Mt._reset, this._onReset)
    }, t.preventPlayerDefaultEvent = function() {
        this._player.events.halt()
    }, t.addCurrentTimeChangedListener = function() {
        Dn.remotePlayerController && Dn.remotePlayerController.addEventListener(Dn.RemotePlayerEventType.CURRENT_TIME_CHANGED, this._onCurrentTimeChanged)
    }, t.addIsMediaLoadedChangedListener = function() {
        Dn.remotePlayerController && Dn.remotePlayerController.addEventListener(Dn.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this._onIsMediaLoadedChanged)
    }, t.addPlayerStateChangedListener = function() {
        Dn.remotePlayerController && Dn.remotePlayerController.addEventListener(Dn.RemotePlayerEventType.PLAYER_STATE_CHANGED, this._onPlayerStateChanged)
    }, t.addVolumeLevelChangedListener = function() {
        Dn.remotePlayerController && (Dn.remotePlayerController.addEventListener(Dn.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this._onVolumeLevelChanged), Dn.remotePlayerController.addEventListener(Dn.RemotePlayerEventType.IS_MUTED_CHANGED, this._onIsMutedChanged))
    }, t.addRemotePlayerListenersOnPlaying = function() {
        this.removeRemotePlayerListenersOnPlaying(), this.addCurrentTimeChangedListener(), this.addPlayerStateChangedListener()
    }, t.removeRemotePlayerListenersOnIdle = function() {
        this.removeIsMediaLoadedChangedListener(), this.removeVolumeLevelChangedListener()
    }, t.removeInitListeners = function() {
        Dn.castContext && Dn.castContext.removeEventListener(Dn.CastContextEventType.SESSION_STATE_CHANGED, this._onSessionStateChanged), Dn.remotePlayerController && Dn.remotePlayerController.removeEventListener(Dn.RemotePlayerEventType.IS_CONNECTED_CHANGED, this._onIsConnectedChanged)
    }, t.removeRemotePlayerListenersOnPlaying = function() {
        this.removeCurrentTimeChangedListener(), this.removePlayerStateChangedListener()
    }, t.removeMessageListener = function() {
        const e = Dn.currentSession;
        e && e.removeMessageListener("urn:x-cast:com.vimeo.cast.media", this._onMessageReceived)
    }, t.removeCurrentTimeChangedListener = function() {
        Dn.remotePlayerController && Dn.remotePlayerController.removeEventListener(Dn.RemotePlayerEventType.CURRENT_TIME_CHANGED, this._onCurrentTimeChanged)
    }, t.removeIsMediaLoadedChangedListener = function() {
        Dn.remotePlayerController && Dn.remotePlayerController.removeEventListener(Dn.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED, this._onIsMediaLoadedChanged)
    }, t.removePlayerStateChangedListener = function() {
        Dn.remotePlayerController && Dn.remotePlayerController.removeEventListener(Dn.RemotePlayerEventType.PLAYER_STATE_CHANGED, this._onPlayerStateChanged)
    }, t.removeVolumeLevelChangedListener = function() {
        Dn.remotePlayerController && (Dn.remotePlayerController.removeEventListener(Dn.RemotePlayerEventType.VOLUME_LEVEL_CHANGED, this._onVolumeLevelChanged), Dn.remotePlayerController.removeEventListener(Dn.RemotePlayerEventType.IS_MUTED_CHANGED, this._onIsMutedChanged))
    }, t.removePreventLocalPlayerEvents = function() {
        this._player.events.off([Yt._playButtonPressed, Yt._pauseButtonPressed, Yt._scrubbingStarted, Yt._scrubbingEnded, _.BUFFER_STARTED, _.BUFFER_ENDED, Mt._seek, Yt._volumeChanged, Yt._captionsChanged, Yt._configChanged, Mt._reset], this._preventPlayerDefaultEvent)
    }, t.removeLocalPlayerListeners = function() {
        this._player.events.off(Yt._playButtonPressed, this._onPlayOrPausePressed), this._player.events.off(Yt._pauseButtonPressed, this._onPlayOrPausePressed), this._player.events.off(Yt._scrubbingStarted, this._preventPlayerDefaultEvent), this._player.events.off(Yt._scrubbingEnded, this._preventPlayerDefaultEvent), this._player.events.off(_.BUFFER_STARTED, this._preventPlayerDefaultEvent), this._player.events.off(_.BUFFER_ENDED, this._preventPlayerDefaultEvent), this._player.events.off(Mt._seek, this._onControlSeek), this._player.events.off(Yt._volumeChanged, this._onChangeVolume), this._player.events.off(Yt._captionsChanged, this._onCaptionsChanged), this._player.events.off(Yt._configChanged, this._onConfigChanged), this._player.events.off(Mt._reset, this._onReset)
    }, t.removeRemotePlayerListeners = function() {
        this.removeRemotePlayerListenersOnPlaying(), this.removeRemotePlayerListenersOnIdle()
    }, t.removeAllRemoteListeners = function() {
        this.removeRemotePlayerListeners(), this.removeInitListeners()
    }, v(e, [{
        key: "currentTime",
        get: function() {
            return this.lastCurrentTime || 0
        },
        set: function(e) {
            Dn.remotePlayer && Dn.remotePlayerController && (Dn.remotePlayer.currentTime = e, Dn.remotePlayerController.seek(), this.lastCurrentTime = e)
        }
    }, {
        key: "isTimeEnded",
        get: function() {
            return this.lastCurrentTime + .5 >= this.duration
        }
    }, {
        key: "isOutroRendered",
        get: function() {
            return this._isOutroRendered || !1
        }
    }, {
        key: "isLooped",
        get: function() {
            return this._player.config.embed.loop
        }
    }, {
        key: "isEndOfVideo",
        get: function() {
            return this._isEndOfVideo || !1
        }
    }, {
        key: "volumeLevel",
        set: function(e) {
            Dn.remotePlayer && Dn.remotePlayerController && (Dn.remotePlayer.volumeLevel = e, Dn.remotePlayerController.setVolumeLevel())
        },
        get: function() {
            return Dn.remotePlayer ? Dn.remotePlayer.volumeLevel : 0
        }
    }, {
        key: "duration",
        get: function() {
            return this._player.config.video.duration
        }
    }, {
        key: "isPlayingOrPaused",
        get: function() {
            return Dn.remotePlayer ? Dn.remotePlayer.playerState === Dn.PlayerState.PLAYING || Dn.remotePlayer.playerState === Dn.PlayerState.PAUSED : null
        }
    }, {
        key: "isIdle",
        get: function() {
            return Dn.remotePlayer ? null === Dn.remotePlayer.playerState || Dn.remotePlayer.playerState === Dn.PlayerState.IDLE : null
        }
    }, {
        key: "isMediaLoaded",
        get: function() {
            return !!Dn.remotePlayer && Dn.remotePlayer.isMediaLoaded
        }
    }]), e
}();
const Dn = f(new(function(e) {
    function t() {
        return e.apply(this, arguments) || this
    }
    h(t, e);
    var n = t.prototype;
    return n.init = function({
        appId: t,
        chromecastPlayer: n = null
    } = {}) {
        var i, o;
        return t || (t = (null == n || null == (i = n._player) ? void 0 : i.config.request.flags.ott) ? (null == n || null == (o = n._player) ? void 0 : o.config.ottCastOptions) ? n._player.config.ottCastOptions.appId ? n._player.config.ottCastOptions.appId : Rn.id : On.id : In.id), this.chromecastPlayer = n, this.setup().then(n => (n && (e.prototype.init.call(this, {
            receiverApplicationId: t,
            autoJoinPolicy: this.AutoJoinPolicy.PAGE_SCOPED
        }), this.chromecastPlayer && this.chromecastPlayer.init()), n)).catch(e => (this.fire(Nn.error, e), Promise.reject(e)))
    }, n.dispose = function() {
        this.chromecastPlayer = null
    }, v(t, [{
        key: "chromecastPlayer",
        get: function() {
            return this._chromecastPlayer
        },
        set: function(e) {
            if (e && !(e instanceof Mn)) throw new SyntaxError("An invalid ChromecastPlayer was specified");
            this.chromecastPlayer && this.chromecastPlayer.dispose(), this._chromecastPlayer = e
        }
    }]), t
}(g)));

function xn(e) {
    return e.replace(/(_\w)/g, e => e[1].toUpperCase())
}

function Bn(e) {
    return function e(t, n) {
        return Object.keys(n).reduce((i, o) => (n[o] && "object" == typeof n[o] ? i[t(o)] = e(t, n[o]) : i[t(o)] = n[o], i), {})
    }(xn, e)
}
const Vn = e => ({
        type: "CONFIG_LOAD",
        payload: d({}, Bn(e))
    }),
    Un = e => ({
        type: "LIVE_SETTINGS_UPDATE",
        payload: e
    });

function Fn(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return n.video.liveEvent ? d(d({}, e), n.video.liveEvent) : null;
        case "LIVE_UPDATE":
            return d(d({}, e), n);
        case "LIVE_SET_START_TIME":
            return d(d({}, e), {}, {
                ingest: d(d({}, e.ingest), {}, {
                    startTime: n
                })
            });
        case "LIVE_SETTINGS_UPDATE":
            return d(d({}, e), {}, {
                settings: d(d({}, e.settings), n)
            });
        default:
            return e
    }
}
const Hn = e => {
        var t;
        return !!(null == (t = e.liveEvent) ? void 0 : t.status)
    },
    qn = e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.status
    },
    $n = e => {
        var t, n;
        return (null == (t = e.liveEvent) || null == (n = t.ingest) ? void 0 : n.scheduledStartTime) || null
    },
    Wn = e => {
        var t, n;
        return (null == (t = e.liveEvent) || null == (n = t.ingest) ? void 0 : n.startTime) || null
    },
    Yn = e => {
        var t;
        return "pending" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    Gn = e => {
        var t;
        return "active" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    zn = e => {
        var t;
        return "started" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    jn = e => {
        var t;
        return "ended" === (null == (t = e.liveEvent) ? void 0 : t.status)
    },
    Kn = e => Hn(e) && !jn(e),
    Xn = e => {
        var t, n;
        return "done" === (null == (t = e.liveEvent) || null == (n = t.archive) ? void 0 : n.status)
    },
    Zn = e => {
        var t, n;
        return null == e || null == (t = e.liveEvent) || null == (n = t.settings) ? void 0 : n.eventSchedule
    };
var Qn = Object.freeze({
    __proto__: null,
    default: Fn,
    liveExists: Hn,
    liveStatus: qn,
    liveArchiveStatus: e => {
        var t, n;
        return null == (t = e.liveEvent) || null == (n = t.archive) ? void 0 : n.status
    },
    dashLiveUrl: e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.playback.dash_noredirect
    },
    hlsLiveUrl: e => {
        var t;
        return null == (t = e.liveEvent) ? void 0 : t.playback.hls
    },
    scheduledLiveStartTime: $n,
    liveStartTime: Wn,
    isLivePending: Yn,
    isLiveActive: Gn,
    isLiveStarted: zn,
    isLiveEnded: jn,
    liveInProgress: Kn,
    isLiveArchived: Xn,
    hasEventSchedule: Zn
});

function Jn(e, t, n) {
    let i = null;

    function r() {
        return n.getAttribute("data-thumb")
    }

    function a() {
        return kn(t.get("ui.player.width") * o.devicePixelRatio, t.get("ui.player.height") * o.devicePixelRatio)
    }

    function s() {
        return t.get(Hn) && !t.get(zn) || !e.config.embed.autoplay || Dn.isCastConnected
    }

    function l() {
        if (!e.config.video.thumbs.base) return Promise.resolve();
        const {
            width: i,
            height: o
        } = a(), l = An({
            width: i,
            height: o,
            baseUrl: e.config.video.thumbs.base
        });
        n.setAttribute("data-thumb", l), n.setAttribute("data-thumb-width", i);
        const c = Pn(l).then(e => (t.dispatch(((e, t) => ({
            type: "PREVIEW_SET_SIZE",
            payload: {
                width: e,
                height: t
            }
        }))(e.width, e.height)), s() && (n.style.backgroundImage = `url(${r()})`), e));
        return s() ? Promise.race([c, new Promise(e => setTimeout(e, 2e3))]) : Promise.resolve()
    }
    return i = l(), e.events.on(Yt._didEnterFullscreen, () => {
        n.classList.contains("vp-preview-invisible") && "beginning" !== e.config.embed.outro || (i = l())
    }), t.watch("ui.player.width", m(() => {
        i = i.then(() => function() {
            const {
                width: e
            } = a(), t = n.getAttribute("data-thumb-width");
            return e <= parseInt(t, 10) || 0 === e ? Promise.resolve() : l()
        }()).catch(e => {})
    }, 150)), t.watch("ui.preview.scaleFactor", e => {
        n.classList.toggle("vp-preview-cover", e > 1)
    }), {
        show: function() {
            n.style.backgroundImage = `url(${r()})`, n.classList.remove("vp-preview-invisible")
        },
        hide: function() {
            n.classList.add("vp-preview-invisible")
        },
        resetThumbnail: function() {
            n.setAttribute("data-thumb", ""), n.setAttribute("data-thumb-width", ""), n.style.backgroundImage = ""
        },
        getThumbnail: r,
        loadThumbnail: l,
        thumbnailPromise: i
    }
}
const ei = e => ({
        type: "CAPTIONS_SET_FONT_SIZE",
        payload: e
    }),
    ti = e => ({
        type: "CAPTIONS_SET_FONT_FAMILY",
        payload: e
    }),
    ni = e => ({
        type: "CAPTIONS_SET_FONT_OPACITY",
        payload: e
    }),
    ii = e => ({
        type: "CAPTIONS_SET_COLOR",
        payload: e
    }),
    oi = e => ({
        type: "CAPTIONS_SET_BACKGROUND_OPACITY",
        payload: e
    }),
    ri = e => ({
        type: "CAPTIONS_SET_BACKGROUND_COLOR",
        payload: e
    }),
    ai = e => ({
        type: "CAPTIONS_SET_WINDOW_OPACITY",
        payload: e
    }),
    si = e => ({
        type: "CAPTIONS_SET_WINDOW_COLOR",
        payload: e
    }),
    li = e => ({
        type: "CAPTIONS_SET_EDGE_STYLE",
        payload: e
    }),
    ci = () => ({
        bgColor: {
            items: [{
                id: "white",
                label: "White"
            }, {
                id: "yellow",
                label: "Yellow"
            }, {
                id: "green",
                label: "Green"
            }, {
                id: "cyan",
                label: "Cyan"
            }, {
                id: "blue",
                label: "Blue"
            }, {
                id: "magenta",
                label: "Magenta"
            }, {
                id: "red",
                label: "Red"
            }, {
                id: "black",
                label: "Black"
            }],
            id: "bgColor",
            cookie: "bg_color",
            title: "Color",
            dispatch: ri
        },
        color: {
            items: [{
                id: "#fff",
                label: "White"
            }, {
                id: "#ff0",
                label: "Yellow"
            }, {
                id: "#0f0",
                label: "Green"
            }, {
                id: "#0ff",
                label: "Cyan"
            }, {
                id: "#00f",
                label: "Blue"
            }, {
                id: "#f0f",
                label: "Magenta"
            }, {
                id: "#f00",
                label: "Red"
            }, {
                id: "#000",
                label: "Black"
            }],
            id: "color",
            cookie: "color",
            title: "Color",
            dispatch: ii
        },
        fontSize: {
            items: [{
                id: "0.5",
                label: "50%"
            }, {
                id: "1",
                label: "100%"
            }, {
                id: "1.5",
                label: "150%"
            }, {
                id: "2",
                label: "200%"
            }],
            id: "fontSize",
            cookie: "font_size",
            title: "Size",
            dispatch: ei
        },
        fontFamily: {
            items: [{
                id: "monospace_serif",
                value: '"Courier New", Courier, monospace',
                label: "Monospace Serif"
            }, {
                id: "proportional_serif",
                value: "Georgia, Times, serif",
                label: "Proportional Serif"
            }, {
                id: "monospace_sans_serif",
                value: 'Monaco, "Lucida Console", monospace',
                label: "Monospace Sans-Serif"
            }, {
                id: "proportional_sans_serif",
                value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                label: "Proportional Sans-Serif"
            }, {
                id: "casual",
                value: '"Comic Sans MS", sans-serif',
                label: "Casual"
            }, {
                id: "cursive",
                value: '"Apple Chancery", "Lucida Handwriting”, cursive',
                label: "Cursive"
            }, {
                id: "small_capitals",
                value: '"Helvetica Neue", Helvetica, Arial, sans-serif',
                label: "Small Capitals"
            }],
            id: "fontFamily",
            cookie: "font_family",
            title: "Family",
            dispatch: ti
        },
        fontOpacity: {
            items: [{
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "fontOpacity",
            cookie: "font_opacity",
            title: "Opacity",
            dispatch: ni
        },
        edgeStyle: {
            items: [{
                id: "none",
                label: "None"
            }, {
                id: "shadow",
                label: "Drop Shadow"
            }, {
                id: "raised",
                label: "Raised"
            }, {
                id: "depressed",
                label: "Depressed"
            }, {
                id: "outline",
                label: "Outline"
            }],
            id: "edgeStyle",
            cookie: "edge",
            title: "Edge style",
            dispatch: li
        },
        bgOpacity: {
            items: [{
                id: "0",
                label: "0%"
            }, {
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "bgOpacity",
            cookie: "bg_opacity",
            title: "Opacity",
            dispatch: oi
        },
        windowColor: {
            items: [{
                id: "#fff",
                label: "White"
            }, {
                id: "#ff0",
                label: "Yellow"
            }, {
                id: "#0f0",
                label: "Green"
            }, {
                id: "#0ff",
                label: "Cyan"
            }, {
                id: "#00f",
                label: "Blue"
            }, {
                id: "#f0f",
                label: "Magenta"
            }, {
                id: "#f00",
                label: "Red"
            }, {
                id: "#000",
                label: "Black"
            }],
            id: "windowColor",
            cookie: "window_color",
            title: "Color",
            dispatch: si
        },
        windowOpacity: {
            items: [{
                id: "0",
                label: "0%"
            }, {
                id: "25",
                label: "25%"
            }, {
                id: "50",
                label: "50%"
            }, {
                id: "75",
                label: "75%"
            }, {
                id: "100",
                label: "100%"
            }],
            id: "windowOpacity",
            cookie: "window_opacity",
            title: "Opacity",
            dispatch: ai
        }
    }),
    di = {
        fontSize: 1,
        fontFamily: "proportional_sans_serif",
        fontOpacity: "100",
        color: "#fff",
        bgOpacity: "100",
        bgColor: "black",
        windowOpacity: "0",
        windowColor: "#000",
        edgeStyle: "none"
    };

function ui(e) {
    return !0 === e || !1 === e ? Number(e) : "null" === e ? null : e
}

function pi(e, t = document.cookie) {
    try {
        if (t && "" !== t) return t.split(";").reduce((function(t, n) {
            return 0 === (n = n.trim()).indexOf(`${e}=`) ? decodeURIComponent(n.substr(e.length + 1)) : t
        }), null)
    } catch (Ie) {}
    return null
}
const _i = ["quality", "volume", "captions", "transcript", "captions_color", "captions_font_family", "captions_font_size", "captions_font_opacity", "captions_bg_color", "captions_bg_opacity", "captions_edge", "captions_window_color", "captions_window_opacity", "audio_language", "audio_kind", "qoe_survey_vote"];
let vi = null;

function mi(e) {
    const t = ci(),
        n = 0 !== e.config.request.urls.proxy.indexOf(window.location.origin);
    let i = 0;

    function o(e) {
        let t = null;
        try {
            t = pi("player")
        } catch (Ie) {}
        if (!t) return null;
        t = t.substring(1, t.length - 1);
        const n = {};
        t.split("&").forEach((function(e) {
            e = e.split("="), n[e[0]] = ui(decodeURIComponent(e[1] || ""))
        }));
        const i = [].concat(e),
            o = i.reduce((function(e, t) {
                if (t in n) {
                    const i = parseFloat(n[t]);
                    return e[t] = isNaN(i) || "quality" === t ? n[t] : i, e
                }
                return e[t] = null, e
            }), {});
        return 1 === i.length ? o[e] : o
    }

    function r(t, n, i = !0) {
        e.doNotTrackEnabled || (n = ui(n), i && function(t, n) {
            if (vi) {
                const i = {
                    method: "set",
                    key: `sync_${t}`,
                    val: n,
                    session: e.config.request.session
                };
                return function(t) {
                    vi.then(n => {
                        const i = dt(e.config.request.urls.proxy);
                        return n.contentWindow.postMessage(t, i), n
                    }).catch(t => {
                        Tn.captureException(t, {
                            extra: {
                                proxyUrl: e.config.request.urls.proxy
                            }
                        })
                    })
                }(i), void
                function(t) {
                    e.config.embed.on_site && window.postMessage(t, window.location.origin)
                }(i)
            }
            try {
                window.localStorage.setItem(`sync_${t}`, JSON.stringify(n))
            } catch (i) {}
        }(t, n), function(t, n) {
            _i.indexOf(t) >= 0 && (e.config.request.cookie[t] = n);
            const i = [];
            _i.indexOf(t) >= 0 && null !== n && i.push(`${t}=${n}`);
            const r = o(_i);
            for (let e in r) e in r && null !== r[e] && e !== t && i.push(`${e}=${r[e]}`);
            ! function(e, t, n, {
                samesite: i,
                secure: o
            } = {}) {
                var r = new Date;
                r.setFullYear(r.getFullYear() + 1), r = r.toGMTString();
                var a = `${e}=${t=ui(t)}`;
                a += `;expires=${r}`, a += ";path=/", a += `;domain=${n}`, o && (a += ";secure"), i && (a += `;samesite=${i}`);
                try {
                    document.cookie = a
                } catch (Ie) {
                    return !1
                }
            }("player", `"${i.join("&")}"`, e.config.request.cookie_domain, {
                secure: !0,
                samesite: "none"
            })
        }(t, n))
    }

    function a(t, n) {
        switch (t) {
            case "sync_quality":
                e.events.fire(Mt._changeQuality, n, !0);
                break;
            case "sync_volume":
                if (e.config.embed.settings.background) break;
                e.events.fire(Mt._changeVolume, n, !0);
                break;
            case "sync_captions":
                if (null === n) {
                    e.events.fire(Mt._turnCaptionsOff, !0);
                    break
                }
                e.events.fire(Mt._turnCaptionsOn, n, !0);
                break;
            case "sync_login":
                ! function(t) {
                    i > 4 || (i++, t && !e.config.user.logged_in ? e.events.fire(Yt._userLogIn) : !t && e.config.user.logged_in && e.events.fire(Yt._userLoggedOut))
                }(n);
                break;
            case "sync_active":
                null !== n && n !== e.config.request.session && e.config.embed.autopause && e.events.fire(Yt._becameInactive)
        }
    }
    return e.events.on(Yt._qualityChanged, (function(e, t) {
            t || r("quality", e)
        })),
        function() {
            const t = (t, n) => {
                e.config.request.cookie.volume = ui(t), n || r("volume", t, !1)
            };
            e.events.on(Yt._volumeChanged, t), e.events.on(Yt._mutedChanged, (e, n) => {
                e && t(0, n)
            })
        }(), e.events.on(Yt._captionsChanged, (function(t, n) {
            if (t) {
                const i = `${t.language}.${t.kind}`;
                return e.config.request.cookie.captions = ui(i), void(n || r("captions", e.config.request.cookie.captions))
            }
            e.config.request.cookie.captions = null, n || r("captions", null)
        })), e.events.on(Mt._changeCaptionsStyles, (function(t, n) {
            const {
                dispatch: i,
                cookie: o
            } = t;
            e.store.dispatch(i(n)), r(`captions_${o}`, ui(n))
        })), e.events.on(Mt._resetCaptionsStyles, (function() {
            e.store.dispatch({
                type: "CAPTIONS_RESET"
            }), Object.keys(t).forEach(e => {
                const {
                    cookie: n
                } = t[e];
                r(`captions_${n}`, null)
            })
        })), e.events.on(Yt._transcriptChanged, (function(t, n) {
            if (t) return e.config.request.cookie.transcript = ui(t.language), void(n || r("transcript", e.config.request.cookie.transcript));
            e.config.request.cookie.transcript = null, n || r("transcript", null)
        })),
        function() {
            const t = ["descriptions", "main-desc"];
            e.events.on(Mt._changeAudioTrack, (function(n, i) {
                e.config.request.cookie.audio_language = (null == n ? void 0 : n.language) ? ui(n.language) : null, e.config.request.cookie.audio_kind = t.includes(null == n ? void 0 : n.kind) ? ui(n.kind) : null, i || (r("audio_language", e.config.request.cookie.audio_language), r("audio_kind", e.config.request.cookie.audio_kind))
            }))
        }(), e.events.on(Yt._qoeSurveyPresented, (function() {
            const t = Date.now();
            e.config.request.cookie.qoe_survey_vote = t, r("qoe_survey_vote", t)
        })), e.events.on(Yt._playButtonPressed, (function() {
            e.config.embed.settings.background || (r("active", e.config.request.session), e.events.fire(Yt._becameActive))
        })), e.events.on([Yt._pauseButtonPressed, Yt._ended], (function() {
            o("active") === e.config.request.session && r("active", null)
        })), e.events.on(Yt._userLoggedIn, (function() {
            r("login", !0)
        })), n && !vi && (vi = function(t) {
            return new Promise((n, i) => {
                document.createElement("a").href = e.config.request.urls.proxy;
                const o = document.createElement("iframe");
                o.src = t, o.setAttribute("title", "Vimeo LocalStorage Proxy"), o.setAttribute("aria-hidden", "true"), o.setAttribute("hidden", ""), o.onload = function(t) {
                    const n = dt(e.config.request.urls.proxy);
                    o.contentWindow.postMessage({
                        method: "ping"
                    }, n)
                }, o.onerror = function(e) {
                    i(e)
                };
                const r = setTimeout(() => {
                    i()
                }, 1e4);
                window.addEventListener("message", (function e(i) {
                    0 !== t.indexOf(i.origin) || "ready" !== i.data && "ping" !== i.data || (window.removeEventListener("message", e, !1), clearTimeout(r), n(o))
                }), !1), document.body.appendChild(o)
            })
        }(e.config.request.urls.proxy)), n ? window.addEventListener("message", (function(t) {
            const n = dt(e.config.request.urls.proxy);
            t.origin === n && "object" == typeof t.data && "key" in t.data && "newValue" in t.data ? a(t.data.key, t.data.newValue) : t.origin === window.location.origin && t.data.session !== e.config.request.session && a(t.data.key, t.data.val)
        }), !1) : window.addEventListener("storage", (function(e) {
            var t;
            if (0 === (null == (t = e.key) ? void 0 : t.indexOf("sync_")) && e.oldValue !== e.newValue) {
                try {
                    if (window.localStorage.getItem(e.key) !== e.newValue) return
                } catch (n) {}
                try {
                    a(e.key, JSON.parse(e.newValue))
                } catch (n) {
                    Tn.captureException(n, {
                        extra: {
                            key: e.key,
                            oldValue: e.oldValue,
                            newValue: e.newValue
                        }
                    })
                }
            }
        }), !1), {
            reset: function() {
                r("login", !!e.config.user.logged_in)
            }
        }
}

function fi(e, t) {
    return function(e, t = null) {
        const n = {
            feature: t,
            $deeplink_path: "app.vimeo.com/" + e,
            $always_deeplink: !0,
            ref: "player",
            context: "player"
        };
        let i = "",
            o = [];
        for (let r in n) o.push(`${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`);
        return i = o.join("&"), `https://bnc.lt/a/key_live_jpj6Duy53e6MhounkriNljdgsBhGbf0d?${i}`
    }(`videos/${e}`, t)
}

function hi() {}
const gi = [151656996, 85979044, 135306151, 84839100, 156281671, 71236980, 110717144];

function bi(e, t, n) {
    const i = function(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (Ie) {
                    return Promise.reject(Ie)
                }
            }
        }((function() {
            return function(t, n) {
                var i = function() {
                    var t, n;
                    if (gi.includes(null == e || null == (t = e.config) || null == (n = t.user) ? void 0 : n.id)) return function(e, t) {
                        return e && e.then ? e.then(hi) : Promise.resolve()
                    }(V(2e3))
                }();
                return i && i.then ? i.then(n) : n()
            }(0, (function() {
                e.loadConfigRequestObject()
            }))
        })),
        r = e.events;
    let a = e.backbone;
    const s = ci(),
        l = !e.config.embed.playsinline && (o.mobileAndroid || o.iOS && !o.iPad);
    var c = (o.iOS >= 8 || Zt) && !o.iPad,
        d = !1,
        v = !1,
        m = !1,
        f = !1,
        h = null,
        g = !1,
        U = !1,
        F = !1,
        H = !1,
        q = !1,
        $ = !1;

    function W(e) {
        a.element.classList.remove("invisible"), Y()
    }

    function Y() {
        let e = a.play();
        return $ && (e = e.catch(G)), e.catch(j).then(K)
    }

    function G(e) {
        if ($ = !1, z(e)) return r.fire(Mt._changeMuted, !0, !0), a.play();
        throw e
    }

    function z(e) {
        return e && ("NotAllowedError" === e.name || "AbortError" === e.name)
    }

    function j(e) {
        return r.fire(Yt._playRejected, e), new Promise(() => {})
    }

    function K() {
        r.fire(Yt._playResolved)
    }

    function X(e) {
        try {
            a.currentTime = e
        } catch (t) {}
    }

    function Z() {
        f || g || d && a.paused && Y()
    }

    function Q() {
        let t = "none";
        ("metadata" === e.config.request.flags.preload_video || l || o.iOS >= 8 || Zt) && (t = "metadata"), "auto" === e.config.request.flags.preload_video && (t = "metadata", "MediaSourceScanner" === a.currentScannerName && (t = "auto")), a.preload = t, r.on(Yt._mousedOver, (function() {
            e.config.request && "metadata_on_hover" === e.config.request.flags.preload_video && !m && e.verifyConfig().then(() => (a.preload = "metadata", !0)).catch(e => {})
        })), r.on(_.LOAD_SEGMENT_FAILED, (function(e) {
            Tn.captureException(e)
        }))
    }

    function J() {
        q = !1;
        const t = a.video;
        if (a.loadVideo(e.config), !t)
            if (e.config.embed.texttrack) {
                let t = e.config.embed.texttrack;
                if (a.hasTextTrack(t)) {
                    const e = !0;
                    r.fire(Mt._turnCaptionsOn, t, e)
                }
            } else r.on(_.TEXT_TRACKS_AVAILABLE, () => {
                n(), i()
            }), n(), i();

        function n() {
            if (null === e.config.request.cookie.captions || "null" === e.config.request.cookie.captions);
            else if (a.hasTextTrack(e.config.request.cookie.captions)) {
                const t = !0;
                r.fire(Mt._turnCaptionsOn, e.config.request.cookie.captions, t)
            }
        }

        function i() {
            Object.keys(s).forEach(t => {
                var n;
                const {
                    dispatch: i,
                    items: o
                } = s[t], r = null == (n = e.config.request.cookie.captions_styles) ? void 0 : n[t], a = o.some(e => e.id === r);
                e.store.dispatch(i(a ? r : di[t]))
            })
        }
    }

    function ee(e, t, n, i) {
        if (v) {
            const o = new XMLHttpRequest;
            o.open("DELETE", `${e}/plays/${t}/${n}?token=${i}`, !1), o.send(), v = !1
        }
    }

    function te() {
        if (e.config.embed.autoplay) {
            if (t.get(Hn) && !t.get(zn)) return;
            r.fire(Yt._playButtonPressed)
        }
    }
    a.element.classList.add("invisible"), c && a.element.classList.add("hide-webkit-controls"), e.config.video.live_event && n.classList.add("live-background"), e.config.embed.transparent && n.classList.add("transparent"), t.watch(qn, (function(e) {
            "started" === e && setTimeout(() => {
                J(), a.element.classList.remove("invisible"), r.fire(Yt._playButtonPressed)
            }, 12e3)
        })), t.watch(Xn, i), t.watch("ui.video.scaleFactor", e => {
            a.element.classList.toggle("vp-telecine-cover", e > 1)
        }),
        function t() {
            r.once(Yt._swapVideo, t), a = e.backbone, Et(a.on, r.fire, [b, y, E, C, u, w, T, L, S, k, A, P.ACTIVATED, P.AVAILABLE, P.DEACTIVATED, P.UNAVAILABLE, I.ARCHIVE_DONE, I.EVENT_ACTIVE, I.EVENT_ENDED, I.EVENT_STARTED, I.STREAM_OFFLINE, I.STREAM_ONLINE, I.BUFFER_GAP_JUMP, I.BUFFER_GAP_JUMP_PREVENT, I.STALL_JUMP, I.SETTINGS_UPDATED, I.LOW_LATENCY_FALLBACK, I.LIVE_STATS_SUCCESS, I.LIVE_STATS_FAILURE, R.MEDIASESSION_PAUSE, R.MEDIASESSION_PLAY, R.MEDIASESSION_SEEK_BACKWARD, R.MEDIASESSION_SEEK_FORWARD, _.AV_DURATION_MISMATCH, _.BANDWIDTH, _.BUFFER_ENDED, _.BUFFER_OCCUPANCY, _.BUFFER_STARTED, _.CHAPTER_CUES_UPDATED, _.CUE_POINT, _.CURRENT_FILE_CHANGE, _.DOWNLOAD_END, _.DOWNLOAD_TIMEOUT, _.DRM_AUTH_SUCCESS, _.DRM_KEY_SWITCH, _.DROPPED_FRAMES, _.MANIFEST_LOADED, _.MANIFEST_TIMEOUT, _.QUOTA_EXCEEDED_ERROR, _.SCANNER_CHANGE, _.STREAM_BUFFER_START, _.STREAM_CHANGE, _.STREAM_CHANGE_START, _.STREAM_TARGET_CHANGE, _.AVAILABLE_STREAMS_CHANGED, _.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, _.TEXT_TRACKS_AVAILABLE, _.DROPPED_FRAME_PERCENT_EXCEEDED, _.LOAD_SEGMENT_FAILED, O.CAMERA_CHANGE, O.CAMERA_UPDATE, O.MOTION_END, O.MOTION_START, O.SPATIAL_UNSUPPORTED, O.WEBVR_ENTER, O.WEBVR_EXIT, O.WEBVR_HARDWARE_AVAILABLE, N.BRAIN_ML_SWITCH_TO_SKYFIRE, N.BRAIN_ML_MODEL_INPUTS, p.DURATION_CHANGE, p.ENDED, p.ERROR, p.LOAD_START, p.LOADED_DATA, p.LOADED_METADATA, p.PAUSE, p.PLAY, p.PLAYING, p.PROGRESS, p.RATE_CHANGE, p.RESIZE, p.SEEKED, p.SEEKING, p.STALLED, p.TIME_UPDATE, p.VOLUME_CHANGE, p.WAITING, p.ENTER_PICTURE_IN_PICTURE, p.LEAVE_PICTURE_IN_PICTURE, p.WEBKIT_BEGIN_FULLSCREEN, p.WEBKIT_END_FULLSCREEN])
        }(), Et(Dn.on, r.fire, [Nn.connected, Nn.disconnected]), Q(), r.on(p.LOADED_METADATA, (function(t) {
            e.config.video.duration = a.duration, e.config.video.video_width = a.videoWidth, e.config.video.video_height = a.videoHeight
        })), r.on(p.DURATION_CHANGE, (function(t) {
            e.config.video.duration = a.duration
        })), r.on(_.SCANNER_CHANGE, () => {
            Q(), setTimeout(() => {
                r.fire(a.supportsSettingVolume ? Mt._enableVolume : Mt._disableVolume), r.fire(a.supportsTextTracks ? Mt._enableCaptions : Mt._disableCaptions)
            }, 0), Tn.captureBreadcrumb(`Scanner changed to ${a.currentScannerName}`, {}, "video")
        }), r.on([I.EVENT_ACTIVE, I.EVENT_STARTED, I.EVENT_ENDED, I.ARCHIVE_DONE], n => {
            Object.assign(e.config.video.live_event, n), t.dispatch((e => ({
                type: "LIVE_UPDATE",
                payload: e
            }))(n))
        }), r.on(Yt._playButtonPressed, (function() {
            e.displayContext !== e.backbone ? e.displayContext.play() : function() {
                if ("disable" !== e.config.video.privacy && e.config.video.spatial && o.iOS && !q || a.element.classList.remove("invisible"), h) return r.fire(Yt._error, h), void e.preview.show();
                if (d = !0, g) e.preview.show();
                else {
                    if (a.off(p.PLAY, W), l && (U = !0, r.fire(Mt._forceFullscreen)), t.get(zn) && ($ = !0), !m) return e.config.video.spatial && o.iOS && !q ? (q = !0, r.fire(Mt._showOverlay, "app-redirect", {
                        redirectUrl: e.doNotTrackEnabled ? e.config.video.share_url : fi(e.config.video.id, "player-spatial-redirect"),
                        title: null,
                        buttonText: "Watch in the Vimeo app",
                        ignoreText: null,
                        bottomText: "360 not supported in this browser",
                        newWindow: !e.config.embed.on_site
                    }), void r.once(p.PLAY, W)) : void Y().then(() => {
                        !a.muted || !t.get(zn) && a.supportsSettingVolume || r.fire(Yt._muteAutoplayed)
                    }).catch(console.error);
                    m && Z()
                }
            }()
        })).on(Yt._pauseButtonPressed, () => {
            d = !1, e.displayContext.pause()
        }).on(Yt._becameInactive, (function() {
            (window.location.search.indexOf("autopause=0") < 0 && !a.paused && !e.config.embed.settings.background || d) && (d = !1, r.fire(Yt._pauseButtonPressed))
        })), r.on(p.ERROR, (function(t) {
            if (z(t) && !$) {
                if (e.config.embed.autoplay = 0, a.pause(), e.config.embed.time) return X(e.config.embed.time), void r.fire(Yt._paused, a.currentTime);
                if (0 === a.currentTime) return void r.fire(Mt._reset);
                r.fire(Yt._paused, a.currentTime)
            }
        })), r.on(p.PLAY, (function(e) {
            a.element.classList.remove("invisible")
        })), r.on(p.PAUSE, (function(e, t) {
            f || r.fire(Yt._paused, e, t)
        })), r.on(p.TIME_UPDATE, (function({
            currentTime: e
        }) {})), r.on(p.ENDED, (function(t) {
            f || e.config.embed.loop || (U && r.fire(Yt._fullscreenButtonPressed), d = !1, r.fire(Yt._ended, t))
        })), r.on(_.DRM_AUTH_SUCCESS, () => {
            v = !0
        }), r.on(u, () => {
            m = !0, r.once(p.TIME_UPDATE, () => {
                r.fire(Yt._firstTimeUpdate)
            })
        }), r.on(_.BUFFER_STARTED, () => {
            f || r.fire(St._bufferStarted)
        }), r.on(N.BRAIN_ML_SWITCH_TO_SKYFIRE, () => {
            "ml_brain" in e.config.request.ab_tests && delete e.config.request.ab_tests.ml_brain
        }),
        function() {
            let t = !1,
                n = !1;

            function i(o) {
                if (t) return;
                if (o.name.includes(M)) return;
                if (o.name === D) return void r.fire(Mt._disableCaptions);
                Tn.captureBreadcrumb(o.name, {
                    message: o.message
                }, "telecine error", "error");
                let a = e.config.video.live_event ? .25 : .01;
                if (o.name === x && !n) {
                    n = !0, a = .5;
                    const t = e.config.request,
                        i = t.files,
                        r = i.dash.cdns.fastly_skyfire.url,
                        s = i.hls.cdns.fastly_skyfire.url,
                        l = i.dash.cdns.akfire_interconnect_quic.url,
                        c = i.hls.cdns.akfire_interconnect_quic.url,
                        d = i.progressive.length ? i.progressive[0].url : null,
                        u = i.progressive.length ? i.progressive[0].id : null,
                        p = t.file_codecs,
                        _ = e.config.video.file_codecs,
                        v = e.config.user.logged_in,
                        m = t.build.js;
                    Tn.captureBreadcrumb(o.name, {
                        fastly_dash_url: r,
                        fastly_hls_url: s,
                        akamai_dash_url: l,
                        akamai_hls_url: c,
                        prog_url: d,
                        prog_id: u,
                        file_codecs: p,
                        video_file_codecs: _,
                        logged_in: v,
                        version: m
                    }, "MediaUrlBadRequest config", "error")
                } - 1 !== o.name.indexOf("Mimir") && (a = .5, Tn.captureBreadcrumb(o.name, o, "ABR", "error"));
                const s = "string" != typeof o.message ? o.name : o.message,
                    l = new Error(s);
                l.name = o.name;
                const c = "object" == typeof o.message ? o.message : null;
                Tn.captureException(l, c, a);
                const d = dn[o.name];
                if ("function" != typeof d) return;
                const u = d();
                if (u.final && r.off(p.ERROR, i), h = u.deferred ? u.id : null, o.name === B) {
                    let t = e.config.request.dynamic_drm_translation_map,
                        n = o.message.code;
                    t && n && t[n] && (u.title = t[n].title, u.message = t[n].msg), Tn.captureBreadcrumb("DRM failure", o, "video")
                }
                r.fire(Yt._error, u.id, u)
            }
            window.addEventListener("unload", () => {
                t = !0
            }, !1), r.on(p.ERROR, i), r.on("test-error", i)
        }(), r.on(Mt._changeLoop, (function(t) {
            const n = !!t && ("boolean" == typeof o.iOS || o.iOS >= 10);
            e.config.embed.loop = n, a.loop = n
        })), r.fire(Mt._changeLoop, e.config.embed.loop), r.on(Yt._chapterSeekAttempted, (t, n) => {
            e.events.fire(Yt._chapterSeek, n), e.events.fire(Mt._seek, t), m || r.fire(Yt._playButtonPressed)
        }), r.on(Yt._scrubbingStarted, (function() {
            g || (d = !a.paused, f = !0, a.pause())
        })), r.on(Yt._scrubbingEnded, (function(e) {
            f = !1, m ? e || Z() : r.fire(Yt._playButtonPressed)
        })), r.on(Mt._seek, (function(e) {
            g || r.fire(Mt._setTime, e)
        })), r.on(Mt._setTime, (function(t) {
            m || e.fragmentsHandler.checkForNewFragment(t, a.duration), X(t)
        })),
        function() {
            r.on(Mt._changeVolume, (function(t, n, i) {
                i && (t += a.volume), t = ht(t = pt(t, 0, 1)), e.displayContext !== a && (e.displayContext.volume = t), a.volume = t, e.events.fire(Yt._volumeChanged, t, n), a.muted && e.events.fire(Mt._changeMuted, !1, n)
            })), r.on(Mt._changeMuted, (function(t, n = !1) {
                a.muted = !!t, e.events.fire(Yt._mutedChanged, t, n)
            })), r.on(p.VOLUME_CHANGE, () => {
                r.fire(Yt._volumeChanged, a.volume, !0)
            });
            const t = e.config.request.cookie.volume;
            r.fire(Mt._changeVolume, t, !0), r.fire(Mt._changeMuted, e.config.embed.muted, !0)
        }(),
        function() {
            let e;
            r.on(Mt._changeQuality, (function(n, i) {
                (a.video.currentFile.mime === Nt.dash || t.get(zn)) && (i = !0), e = i, a.quality = n
            })), r.on(w, (function(t) {
                r.fire(Yt._qualityChanged, t, e)
            }))
        }(),
        function() {
            let e = a.playbackRate;
            r.on(p.RATE_CHANGE, (function(t) {
                a.playbackRate !== e && (r.fire(Yt._playbackRateChanged, a.playbackRate, e), e = a.playbackRate)
            })), r.on(Mt._changePlaybackRate, (function(e) {
                a.playbackRate = e
            })), r.on(Yt._loadVideo, (function() {
                try {
                    a.playbackRate = 1
                } catch (e) {}
            }))
        }(),
        function() {
            function e(e) {
                g = !0, "interactive" !== e && m && !H && (d = d || !a.paused, a.pause(), r.fire(Yt._paused, a.currentTime))
            }

            function t() {
                g = !1, d && !H && (U || F || !l || r.fire(Mt._forceFullscreen), Z())
            }
            r.on(Yt._overlayOpened, e), r.on(Yt._overlayClosed, t), r.on(Yt._menuVisibilityChanged, (function(n, i) {
                i && "preact-menu" !== i && i.isCentered() && (i.isVisible() ? e() : t())
            }))
        }(), r.on(Yt._popupOpened, (function(e) {
            m && !H && (d = !a.paused, a.pause())
        })), r.on(Yt._popupClosed, (function(e) {
            H || Z()
        })), r.on(Yt._didEnterFullscreen, (function(t, n) {
            a.element.classList.remove("hide-webkit-controls"), t && (F = !0), t || (m || o.browser.safari || (a.poster = e.preview.getThumbnail()), U = !0, setTimeout(() => {
                a.textTracks.forEach(e => {
                    "hidden" === e.mode && (e.mode = "showing")
                })
            }, 500)), n || !o.windowsPhone || o.browser.edge || r.fire(Mt._toggleNativeControls, !0)
        })), r.on(Yt._didExitFullscreen, (function(e) {
            a.poster = "", e || a.pause(), m || a.element.classList.add("invisible"), U = !1, F = !1, c && a.element.classList.add("hide-webkit-controls"), a.textTracks.forEach(e => {
                "showing" === e.mode && (e.mode = "hidden")
            })
        })), r.on(u, (function() {
            a.poster = ""
        })), r.on(Mt._toggleNativeControls, (function(e) {
            if (e) return a.controls = !0, void n.classList.add("native-controls");
            a.controls = !1, n.classList.remove("native-controls")
        })), r.on(Yt._requestConfigReloaded, (function() {
            J()
        })), r.on(Yt._configChanged, (function() {
            J(), te()
        })), r.on(Mt._reset, (function() {
            a.unload(), r.fire(Yt._paused, a.currentTime), e.preview.show(), a.element.classList.add("invisible"), m = !1, d = !1, h = null
        })),
        function() {
            let t;
            r.on(Mt._turnCaptionsOn, (function(n, i = !1) {
                t = i;
                try {
                    (e.config.request.flags.ott || "dev" === e.config.request.build.js || "gedevplayer.vimeows.com" === e.config.player_url) && a.videoElement && a.videoElement.setAttribute("crossorigin", "anonymous"), a.enableTextTrack(n)
                } catch (o) {}
            })).on(Mt._turnCaptionsOff, (function(n = !1) {
                t = n, e.config.request.flags.ott && a.videoElement && a.videoElement.removeAttribute("crossorigin"), a.disableTextTrack()
            })), r.on(b, (function(e, n) {
                r.fire(Yt._captionsChanged, e, t || n)
            })), r.on(p.WEBKIT_BEGIN_FULLSCREEN, (function() {
                var e;
                null == (e = a.videoElement) || e.setAttribute("crossorigin", "anonymous")
            })), r.on(p.WEBKIT_END_FULLSCREEN, (function() {
                var t;
                e.config.request.flags.ott || null == (t = a.videoElement) || t.removeAttribute("crossorigin")
            }))
        }(), r.on(P.AVAILABLE, (function({
            type: t
        }) {
            if (!e.config.request.drm) switch (t) {
                case "AirPlay":
                    r.fire(Yt._airPlayAvailable)
            }
        })), r.on(P.UNAVAILABLE, (function({
            type: t
        }) {
            if (!e.config.request.drm) switch (t) {
                case "AirPlay":
                    r.fire(Yt._airPlayNotAvailable)
            }
        })), r.on(P.ACTIVATED, (function({
            type: e
        }) {
            switch (H = !0, e) {
                case "AirPlay":
                    r.fire(Yt._airPlayActivated)
            }
        })), r.on(P.DEACTIVATED, (function({
            type: e
        }) {
            switch (H = !1, e) {
                case "AirPlay":
                    r.fire(Yt._airPlayDeactivated)
            }
        })), r.on(Yt._airPlayButtonPressed, (function() {
            a.showExternalDisplayPicker("AirPlay")
        })), r.on(Mt._activatePictureInPicture, () => {
            a.pictureInPictureEnabled && a.requestPictureInPicture()
        }), r.on(Mt._deactivatePictureInPicture, () => {
            a.pictureInPictureEnabled && a.exitPictureInPicture()
        }), J(), o.spatialPlayback ? (r.fire(Mt._attachSpatialPlaybackEvents), r.on([p.PLAY, p.SEEKED], () => {
            r.fire(Mt._revealSpatialControls)
        }), r.on(O.SPATIAL_UNSUPPORTED, () => {
            m ? r.fire(St._spatialFailure, g) : r.once(Yt._firstTimeUpdate, () => {
                r.fire(St._spatialFailure, g)
            })
        })) : r.once(Yt._firstTimeUpdate, () => {
            e.config.video.spatial && r.fire(St._spatialUnsupported, g)
        }), window.addEventListener("beforeunload", () => {
            const t = e.config.request.drm;
            t && ee(t.hoover_url, t.user, t.asset, t.hoover_token)
        }, !1), r.on(Yt._loadVideo, () => {
            const t = e.config.request && e.config.request.drm;
            t && ee(t.hoover_url, t.user, t.asset, t.hoover_token)
        }), e.events.on(Mt._destroy, () => a.destroy()), e.ready().then(() => (setTimeout(() => te(), 0), e.config.embed.time > 0 && r.fire(Mt._setTime, e.config.embed.time, e.config.embed.time / a.duration), null)).catch(e => {}), r.fire(Yt._videoModuleReady)
}
const yi = (e, t) => ({
    type: "WEBINAR_FORM_SUCCESS",
    payload: {
        formSuccess: e,
        registrantUuid: t
    }
});

function Ei(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return n.video.webinar ? d(d({}, e), n.video.webinar) : null;
        case "WEBINAR_FORM_SUCCESS":
            return d(d({}, e), {}, {
                formSuccess: n.formSuccess,
                registrantUuid: n.registrantUuid
            });
        case "WEBINAR_REGISTRANT_UUID_AVAILABLE":
            return d(d({}, e), {}, {
                registrantUuid: n.registrantUuid
            });
        default:
            return e
    }
}
const Ci = e => {
        var t;
        return !!(null == (t = e.webinar) ? void 0 : t.formSuccess)
    },
    wi = e => {
        var t;
        return null == (t = e.webinar) ? void 0 : t.registrantUuid
    };
var Ti = Object.freeze({
    __proto__: null,
    default: Ei,
    webinarFormSuccess: Ci,
    webinarRegistrantUuid: wi
});

function Li(e) {
    return "dev" === e.request.build.js ? "dev" : "4.25.10"
}

function Si(e) {
    switch (e.player_url) {
        case "player.vimeo.com":
            return "PROD";
        case "player-backend-ci.vimeows.com":
        case "master.playerci-py.vimeows.com":
            return "CI";
        case "player2.vimeo.dev":
            return "DEV";
        default:
            return
    }
}

function ki(e, t) {
    var n, i, s, l, c, v, m = 0,
        f = {},
        h = new r;

    function g() {
        return Date.now ? Date.now() : (new Date).getTime()
    }

    function b() {
        const t = e.backbone.getEffectByName("ThreeSixtyEffect");
        return o.spatialPlayback && t ? t.isStereo() ? 2 : 1 : 0
    }

    function y() {
        n = !1, i = e.backbone ? e.backbone.currentTime : 0, s = 0, l = 0, c = 0, v = !1
    }

    function E(t, n, i, o) {
        e.verifyConfig().then(() => {
            let r = n;
            r.signature = e.config.request.signature, r.session = e.config.request.session, r.time = e.config.request.timestamp, r.expires = e.config.request.expires;
            const a = JSON.stringify(r);
            if (null === r.sessionTime && (Tn.captureBreadcrumb("sessionTime is null breadcrumbs", {
                    endpoint: t,
                    allParams: r
                }), Tn.captureException("sessionTime is null when making stats request")), !e.config.request.urls.player_telemetry_url) throw new Error("Stats logging failed due to lack of telemetry host");
            const s = e.config.request.urls.player_telemetry_url + t;
            return h.logRequestPromiseWithUrl(s, a, !i).then(t => {
                if (200 !== t.status && o < 2) {
                    if (410 === t.status) return void e.events.once(Yt._requestConfigReloaded, () => {
                        E(s, n, i, o + 1)
                    });
                    setTimeout(() => {
                        E(s, n, i, o + 1)
                    }, 1e3)
                }
            }).catch(e => {
                throw e
            })
        }).catch(e => {})
    }

    function C(n, i, o) {
        const r = e.backbone.currentFile || {};
        let {
            id: l = 0,
            mime: c = Nt.h264,
            metadata: {
                profile: u = -1
            } = {}
        } = r;
        c === Nt.dash && ({
            id: l = 0,
            profile: u = -1
        } = f), e.performDelegateAction(Wt, (p, _ = {}) => {
            let v = a => {
                var p, v;
                let m = d(d({
                    referrer: e.config.request.referrer,
                    embed: !e.config.embed.on_site,
                    context: e.config.embed.context,
                    autoplay: _.continuous ? 2 : e.config.embed.autoplay,
                    loop: e.config.embed.loop ? 1 : 0,
                    id: e.config.video.id,
                    vodId: (null == (p = e.config.video.vod) ? void 0 : p.id) ? e.config.video.vod.id : null,
                    vodSaleId: (null == (v = e.config.video.vod) ? void 0 : v.sale_id) ? e.config.video.vod.sale_id : null,
                    sessionTime: ht(s),
                    videoShape: e.config.video.spatial ? "mono" !== e.config.video.spatial.stereo_mode ? 2 : 1 : 0,
                    spatialPlayback: b(),
                    userId: e.config.user.id,
                    userAccountType: e.config.user.account_type,
                    userIsMod: e.config.user.mod ? 1 : 0,
                    teamOriginUserId: e.config.user.team_origin_user_id ? e.config.user.team_origin_user_id : null,
                    teamId: e.config.user.team_id ? e.config.user.team_id : null,
                    ownerId: e.config.video.owner.id,
                    ownerAccountType: e.config.video.owner.account_type,
                    privacy: e.config.video.privacy,
                    rating: e.config.video.rating ? e.config.video.rating.id : null,
                    type: "html",
                    videoFileId: Number.isInteger(Number(l)) ? l : "0",
                    delivery: zt[c],
                    profileId: u,
                    quality: r.metadata ? r.metadata.quality : null,
                    duration: ht(e.config.video.duration),
                    seconds: ht(i)
                }, a), {}, {
                    playbackRate: e.backbone.playbackRate,
                    build: Li(e.config)
                });
                if (e.config.video.webinar) {
                    var f, h;
                    if (!t.get(wi)) {
                        const n = pi(`${e.config.video.webinar.id}_webinar_registrant`);
                        t.dispatch((e => ({
                            type: "WEBINAR_REGISTRANT_UUID_AVAILABLE",
                            payload: {
                                registrantUuid: e
                            }
                        }))(n))
                    }
                    const n = (null == (f = e.config.user) || null == (h = f.lead) ? void 0 : h.id) || t.get(wi);
                    m.webinarRegistrantUuid = n, m.leadUuid = n, m.contentType = "webinar"
                }
                E(n, m, o)
            };
            const m = t.get(Kn) ? 1 : 0;
            let f = t.get(Wn),
                h = {
                    isLive: m
                };
            if (m) {
                if (!f) return void a(`https://${e.config.vimeo_url}/live_event/status?clip_id=${e.config.video.id}`).json().then(e => (e && e.ingest && (t.dispatch((e => ({
                    type: "LIVE_SET_START_TIME",
                    payload: e
                }))(e.ingest.start_time)), f = t.get(Wn)), f && (h.liveStartTime = f), v(h), e)).catch(e => {});
                h.liveStartTime = f
            }
            v(h)
        })
    }

    function w() {
        !v && e.playLoggingEnabled && (v = !0, C("/log/play", e.backbone.currentTime))
    }

    function T(t = 0, i = !1, o = !0) {
        if (e.playLoggingEnabled) {
            var r = g();
            o && l + 1e3 > r || (l = r, n || C("/log/partial", t, i))
        }
    }

    function L(t, n) {
        var i, o;
        n = n || {};
        var r = {
            referrer: e.config.request.referrer,
            embed: !e.config.embed.on_site,
            context: e.config.embed.context,
            id: e.config.video.id,
            vodId: (null == (i = e.config.video.vod) ? void 0 : i.id) ? e.config.video.vod.id : null,
            vodSaleId: (null == (o = e.config.video.vod) ? void 0 : o.sale_id) ? e.config.video.vod.sale_id : null,
            userId: e.config.user.id,
            userAccountType: e.config.user.account_type,
            userIsMod: e.config.user.mod ? 1 : 0,
            ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
            duration: ht(e.config.video.duration),
            seconds: ht(e.backbone.currentTime),
            playbackRate: e.backbone.playbackRate,
            build: Li(e.config)
        };
        for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a]);
        E("/log/" + t, r)
    }
    return y(),
        function() {
            e.events.on(p.TIME_UPDATE, (function({
                currentTime: e,
                duration: t,
                timeProgress: o,
                playbackRate: r
            }) {
                var a = Math.floor(e);
                !n && c + 1e3 < g() && (e > i && (s += (e - i) / r), i = e), a % 30 == 0 && T(e)
            })), e.events.on(Yt._playbackRateChanged, (function(t, n) {
                L("playback_rate_change", {
                    oldPlaybackRate: n
                }), T(e.backbone.currentTime)
            })), e.events.once(u, (function() {
                t.get(Hn) && t.get(zn) ? e.events.once(Yt._firstTimeUpdate, () => w()) : w()
            })), e.events.on(Yt._paused, (function(t) {
                e.backbone.ended || T(t)
            })), e.events.on(p.SEEKED, (function({
                currentTime: e
            }) {
                m = e, n || T(m)
            })), e.events.on(Yt._scrubbingStarted, (function() {
                c = g(), n = !0
            })), e.events.on(Yt._scrubbingEnded, (function() {
                i = e.backbone.currentTime, n = !1, T(m)
            })), e.events.on(Yt._prefsButtonPressed, (function() {
                T(e.backbone.currentTime)
            })), e.events.on(Yt._ended, (function() {
                s += e.config.video.duration - i, T(e.config.video.duration, !1, !1)
            })), e.events.on(_.STREAM_CHANGE, (function(e) {
                f = e
            }));
            let o = [],
                r = !1;

            function a() {
                o.length && e.performDelegateAction(Wt, (t, n = {}) => {
                    var i, r;
                    E("/log/spatial", {
                        embed: !e.config.embed.on_site,
                        id: e.config.video.id,
                        context: e.config.embed.context,
                        ownerId: e.config.video.owner ? e.config.video.owner.id : 0,
                        referrer: e.config.request.referrer,
                        vodId: (null == (i = e.config.video.vod) ? void 0 : i.id) ? e.config.video.vod.id : null,
                        vodSaleId: (null == (r = e.config.video.vod) ? void 0 : r.sale_id) ? e.config.video.vod.sale_id : null,
                        userId: e.config.user.id,
                        userAccountType: e.config.user.account_type,
                        userIsMod: e.config.user.mod ? 1 : 0,
                        teamOriginUserId: e.config.user.team_origin_user_id ? e.config.user.team_origin_user_id : null,
                        teamId: e.config.user.team_id ? e.config.user.team_id : null,
                        build: Li(e.config),
                        motionLog: JSON.stringify(o)
                    }, !1)
                })
            }
            e.events.on(O.MOTION_START, () => {
                r = !0,
                    function t() {
                        let n = e.backbone.getEffectByName("ThreeSixtyEffect").currentCoordinates,
                            i = Math.round(100 * n.lat) / 100,
                            a = Math.round(100 * n.long) / 100;
                        const l = {
                            sessionTime: s,
                            videoTime: e.backbone.currentTime,
                            coordinates: {
                                lat: i,
                                lon: a
                            }
                        };
                        o.push(l), setTimeout(() => {
                            r && t()
                        }, 1e3)
                    }()
            }), e.events.on(O.MOTION_END, () => {
                r = !1, a()
            }), e.events.on(Yt._loadVideo, () => {
                a(), o = []
            }), window.addEventListener("unload", (function() {
                if (e.backbone && e.backbone.currentTime > 0) {
                    const t = !0,
                        n = !1;
                    T(e.backbone.currentTime, t, n), a()
                }
            }), !1)
        }(), [{
            type: "share_press",
            event: Yt._shareButtonPressed
        }, {
            type: "facebook_press",
            event: Yt._facebookButtonPressed
        }, {
            type: "twitter_press",
            event: Yt._twitterButtonPressed
        }, {
            type: "tumblr_press",
            event: Yt._tumblrButtonPressed
        }, {
            type: "email_press",
            event: Yt._emailButtonPressed
        }, {
            type: "embed_press",
            event: Yt._embedButtonPressed
        }, {
            type: "login_success",
            event: Yt._userLoggedIn
        }, {
            type: "airplay",
            event: Yt._airPlayActivated
        }, {
            type: "vod_press",
            event: Yt._vodButtonPressed
        }, {
            type: "collection_press",
            event: Yt._collectionsButtonPressed
        }, {
            type: "email_capture_submitted",
            event: Yt._emailCaptureSubmitted
        }].forEach((function(t) {
            e.events.on(t.event, function(e) {
                return function() {
                    L(e)
                }
            }(t.type))
        })), e.events.on(Yt._outroDisplayed, (function(t) {
            var n = {
                outroType: e.config.embed.outro,
                ownerAccountType: e.config.video.owner.account_type,
                playerWidth: e.element.clientWidth,
                playerHeight: e.element.clientHeight
            };
            (null == t ? void 0 : t.length) && (n.outroVideos = t.join(",")), L("outro_displayed", n)
        })).on(Yt._outroVideoPressed, (function(t) {
            L("outro_video_press", {
                ownerAccountType: e.config.video.owner.account_type,
                videoId: t
            })
        })).on(Yt._followButtonPressed, (function() {
            L("outro_follow_press", {
                add: !e.config.user.following
            })
        })).on(Yt._outroCtaPressed, (function(t) {
            L("outro_cta_press", {
                ownerAccountType: e.config.video.owner.account_type,
                link: t
            })
        })).on(Yt._outroLinkPressed, (function(t) {
            L("outro_link_press", {
                ownerAccountType: e.config.video.owner.account_type,
                link: t
            })
        })).on(Yt._outroImagePressed, (function(t) {
            L("outro_image_press", {
                ownerAccountType: e.config.video.owner.account_type,
                link: t
            })
        })).on(Yt._likeButtonPressed, (function() {
            L("like_press", {
                add: !e.config.user.liked
            })
        })).on(Yt._watchLaterButtonPressed, (function() {
            L("watch_later_press", {
                add: !e.config.user.watch_later
            })
        })).on(Yt._popupOpened, (function(e) {
            0 === e.indexOf("login-") && L("login_attempt")
        })).on(Yt._captionsChanged, (function(e, t) {
            t || (e ? L("text_track_change", {
                textTrackLanguage: e.language,
                textTrackKind: e.kind
            }) : L("text_track_change"))
        })).on(Yt._badgePressed, (function(e) {
            1 !== e && 12 !== e || L("badge_press", {
                badgeId: e
            })
        })).on(Yt._overlayOpened, (function(e) {
            "email-capture" === e && L("email_capture_displayed")
        })).on(Yt._overlayClosed, (function(e) {
            "email-capture" === e && L("email_capture_dismissed")
        })).on(Yt._cardPressed, (function(t) {
            L("card_press", {
                ownerAccountType: e.config.video.owner.account_type,
                cardId: t,
                cardType: "link"
            })
        })).on(Yt._cardDisplayed, (function(t, n) {
            e.config.embed.editor || L("card_displayed", {
                ownerAccountType: e.config.video.owner.account_type,
                cardId: t,
                cardType: n.url ? "link" : "text"
            })
        })), e.events.on(Yt._configChanged, (function(e) {
            e && y()
        })), e.events.fire(Yt._statsModuleReady), {}
}
const Ai = {
    settings: {}
};

function Pi(e = Ai, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return d(d({}, e), n.embed);
        default:
            return e
    }
}
var Ii = Object.freeze({
    __proto__: null,
    default: Pi,
    transparent: e => e.embed.transparent
});

function Ri(e = {}, {
    type: t,
    payload: n
}) {
    switch (t) {
        case "CONFIG_LOAD":
            return d(d({}, e), n.video);
        default:
            return e
    }
}
const Oi = e => e.video.height / e.video.width;
var Ni = Object.freeze({
    __proto__: null,
    default: Ri,
    ratio: Oi
});

function Mi(e = {}, t) {
    switch (t.type) {
        case "CONTAINER_RESIZE":
            return d(d({}, e), {}, {
                width: t.payload.width,
                height: t.payload.height
            });
        default:
            return e
    }
}
var Di = Object.freeze({
    __proto__: null,
    default: Mi,
    width: e => e.ui.container.width,
    height: e => e.ui.container.height
});

function xi(e = {}, t) {
    switch (t.type) {
        case "PLAYER_CONTAINER_RESIZE":
            return d(d({}, e), {}, {
                width: t.payload.width,
                height: t.payload.height
            });
        default:
            return e
    }
}
var Bi = Object.freeze({
    __proto__: null,
    default: xi,
    width: e => e.ui.playercontainer.width,
    height: e => e.ui.playercontainer.height
});

function Vi(e = {}, t) {
    switch (t.type) {
        case "PREVIEW_SET_SIZE":
            return d(d({}, e), {}, {
                width: t.payload.width,
                height: t.payload.height
            });
        default:
            return e
    }
}
var Ui = Object.freeze({
    __proto__: null,
    default: Vi,
    scaleFactor: e => ut({
        width: e.ui.preview.width,
        height: e.ui.preview.height,
        elementWidth: Zi.width(e),
        elementHeight: Zi.height(e)
    }).scaleFactor
});

function Fi(e = di, t) {
    switch (t.type) {
        case "CAPTIONS_RESET":
            return d(d({}, e), di);
        case "CAPTIONS_SET_FONT_SIZE":
            return d(d({}, e), {}, {
                fontSize: t.payload
            });
        case "CAPTIONS_SET_COLOR":
            return d(d({}, e), {}, {
                color: t.payload
            });
        case "CAPTIONS_SET_FONT_FAMILY":
            return d(d({}, e), {}, {
                fontFamily: t.payload
            });
        case "CAPTIONS_SET_FONT_OPACITY":
            return d(d({}, e), {}, {
                fontOpacity: t.payload
            });
        case "CAPTIONS_SET_BACKGROUND_OPACITY":
            return d(d({}, e), {}, {
                bgOpacity: t.payload
            });
        case "CAPTIONS_SET_BACKGROUND_COLOR":
            return d(d({}, e), {}, {
                bgColor: t.payload
            });
        case "CAPTIONS_SET_WINDOW_COLOR":
            return d(d({}, e), {}, {
                windowColor: t.payload
            });
        case "CAPTIONS_SET_WINDOW_OPACITY":
            return d(d({}, e), {}, {
                windowOpacity: t.payload
            });
        case "CAPTIONS_SET_EDGE_STYLE":
            return d(d({}, e), {}, {
                edgeStyle: t.payload
            });
        default:
            return e
    }
}
var Hi = Object.freeze({
    __proto__: null,
    default: Fi,
    calculatedFontSize: e => Math.max(10, Math.round(.045 * Zi.height(e) * e.ui.captions.fontSize)),
    fontFamily: e => e.ui.captions.fontFamily,
    fontOpacity: e => e.ui.captions.fontOpacity,
    color: e => e.ui.captions.color,
    backgroundOpacity: e => e.ui.captions.bgOpacity,
    backgroundColor: e => e.ui.captions.bgColor,
    edgeStyle: e => e.ui.captions.edgeStyle
});
const qi = e => {
        const t = t => Math.min(e.height(t) / Oi(t), e.width(t)),
            n = t => Math.min(e.width(t) * Oi(t), e.height(t)),
            i = i => ut({
                width: t(i),
                height: n(i),
                elementWidth: e.width(i),
                elementHeight: e.height(i)
            }).scaleFactor,
            o = e => i(e) > 1,
            r = n => n.embed.transparent && !o(n) ? t(n) : e.width(n),
            a = t => t.embed.transparent && !o(t) ? n(t) : e.height(t),
            s = e => e.embed.transparent && !o(e) ? "contain" : "100% 100%",
            l = q.createSelector(r, a, (e, t) => ({
                width: e,
                height: t
            })),
            c = q.createSelector(Oi, s, (e, t, n) => ({
                ratio: e,
                size: t
            }));
        return {
            scaleFactor: i,
            width: r,
            height: a,
            size: s,
            boundingRect: l,
            settings: c
        }
    },
    $i = {
        xxs: 0,
        xs: 390,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600,
        xxl: 1920
    },
    Wi = (e, t) => {
        const n = q.createSelector(e, t, (e, t) => ({
                width: e,
                height: t
            })),
            i = e => {
                const {
                    height: t,
                    width: n
                } = e.video;
                return t > n
            },
            o = n => {
                const o = e(n),
                    r = t(n);
                if (i(n)) return o < 225;
                const a = $(n.embed.settings.customLogo) && o < 300 || r < 169,
                    s = !$(n.embed.settings.customLogo) && (o < 338 || r < 190);
                return a || s
            },
            r = t => {
                const n = e(t);
                if (i(t)) return n < 300;
                const o = $(t.embed.settings.customLogo) && n <= 375,
                    r = !$(t.embed.settings.customLogo) && n <= 450;
                return o || r
            },
            a = t => {
                const n = e(t);
                return n >= $i.xxs && n < $i.xs
            },
            s = t => {
                const n = e(t);
                return n >= $i.xs && n < $i.sm
            },
            l = t => {
                const n = e(t);
                return n >= $i.sm && n < $i.md
            },
            c = t => {
                const n = e(t);
                return n >= $i.md && n < $i.lg
            },
            d = t => {
                const n = e(t);
                return n >= $i.lg && n < $i.xl
            },
            u = t => {
                const n = e(t);
                return n >= $i.xl && n < $i.xxl
            },
            p = t => e(t) >= $i.xxl;
        return {
            width: e,
            height: t,
            breakpoint: e => {
                const t = {
                    xxs: a,
                    xs: s,
                    sm: l,
                    md: c,
                    lg: d,
                    xl: u,
                    xxl: p
                };
                return Object.keys($i).find(n => t[n](e))
            },
            xxl: p,
            xl: u,
            lg: d,
            md: c,
            sm: l,
            xs: s,
            xxs: a,
            mode: e => o(e) ? "tiny" : r(e) ? "mini" : "normal",
            isMiniMode: r,
            isTinyMode: o,
            isVerticalVideo: i,
            boundingRect: n
        }
    };
var Yi = Object.freeze({
        __proto__: null,
        scaleFactor: e => ut({
            width: e.video.width,
            height: e.video.height,
            elementWidth: Zi.width(e),
            elementHeight: Zi.height(e)
        }).scaleFactor
    }),
    Gi = Object.freeze({
        __proto__: null,
        isLinkTitleVisible: ({
            ui: e
        }) => e.container.width >= 360 && e.container.height >= 203 || e.container.width >= 415,
        isLinkDescriptionVisible: ({
            ui: e
        }) => e.container.width >= 360 && e.container.height >= 340 || e.container.width >= 415 && e.container.height >= 234
    }),
    zi = Object.freeze({
        __proto__: null,
        isEmailCaptureVisible: ({
            ui: e
        }) => e.container.width >= 300 && e.container.height >= 169
    });
const ji = e => Zi.isVerticalVideo(e) ? Zi.isTinyMode(e) : Zi.isMiniMode(e) || Zi.isTinyMode(e) || Zi.xs(e) || Zi.xxs(e);
var Ki = Object.freeze({
    __proto__: null,
    isPrefsMenuCentered: e => o.touch && Zi.width(e) < 415,
    isMenuFullWidth: ji,
    isMenuVerticalVideoMode: e => !ji(e) && Zi.isVerticalVideo(e) && Zi.xxs(e) && Zi.height(e) > 300,
    doMenuItemsWrap: e => Zi.width(e) < 240
});

function Xi(e = {}, t, n) {
    return {
        container: Mi(e.container, t),
        preview: Vi(e.preview, t),
        captions: Fi(e.captions, t),
        playercontainer: xi(e.playercontainer, t)
    }
}
const Zi = Wi(e => eo.width(e), e => eo.height(e)),
    Qi = Wi(e => Ji.width(e), e => Ji.height(e)),
    Ji = qi(Di),
    eo = qi(Bi);
var to = Object.freeze({
    __proto__: null,
    default: Xi,
    container: Di,
    player: Zi,
    appLayout: Ji,
    playerLayout: eo,
    preview: Ui,
    video: Yi,
    outro: Gi,
    overlay: zi,
    controlbar: Ki,
    captions: Hi,
    playercontainer: Bi,
    app: Qi
});

function no(e = {}, t) {
    const n = d(d({}, function(e = {}, t) {
        switch (t.type) {
            case "CONFIG_LOAD":
                return d(d({}, e), t.payload);
            default:
                return e
        }
    }(e, t)), {}, {
        embed: Pi(e.embed, t),
        video: Ri(e.video, t),
        liveEvent: Fn(e.liveEvent, t),
        webinar: Ei(e.webinar, t)
    });
    return d(d({}, n), {}, {
        ui: Xi(e.ui, t)
    })
}
var io = Object.freeze({
        __proto__: null,
        default: no,
        embed: Ii,
        video: Ni,
        liveEvent: Qn,
        ui: to,
        webinar: Ti
    }),
    oo = W((function(e) {
        ! function() {
            var t = {
                templates: {},
                render: function(e, n) {
                    return t.templates[e] ? t.templates[e].call(t, n || {}) : ""
                },
                map: {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;"
                },
                escape: function(e) {
                    return null == e ? "" : String(e).replace(/[&<>"'\\/]/g, (function(e) {
                        return t.map[e]
                    }))
                },
                helpers: {}
            };
            t.templates.adcountdown = function(e) {
                return '<div class="vp-ads-tag hidden"><span class="vp-ads-countdown"></span></div>'
            }, t.templates.buffer_pattern = function(e) {
                return '<pattern id="' + e.id + '" patternUnits="userSpaceOnUse" x="0" y="0" width="10" height="10" viewBox="0 0 10 10"><line x1="5" y1="-1" x2="-5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="10" y1="-1" x2="0" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /><line x1="15" y1="-1" x2="5" y2="10" stroke-width="2" stroke="#666" stroke-linecap="butt" /></pattern>'
            }, t.templates.compass = function(e) {
                var t = "";
                return t += this.render("tooltip", {
                    text: e.label
                }) || "", t += '<svg viewBox="0 0 36 36"> ', 1 == e.version ? t += ' <circle class="compass-background" r="18" cx="18" cy="18"></circle><path class="compass-slice" transform="rotate(-45, 18, 18)" d="M0,0 m18,18 l12,0 A12,12 0 0,0 18,6 z"/><circle fill="none" class="compass-ring" stoke-width="3" r="14.5" cx="18" cy="18"></circle><polygon class="compass-dimple" points="16,3.5 18,1 20,3.5"/> ' : t += ' <circle class="compass-background" r="18" cx="18" cy="18"></circle><path class="compass-slice" transform="rotate(-30, 18, 18)" d="M0,0 m18,18 l13,0 A13,13 0 0,0 11.500000000000004,6.741669750802297 z"/><circle class="compass-centercircle" r="3" cx="18" cy="18"></circle><path class="compass-line" stroke-linecap="round" d="M0,18 L36,18 z" /> ', t + "</svg>"
            }, t.templates.logo = function(e) {
                return '<svg viewBox="0 0 140 40" preserveAspectRatio="xMidYMid" role="img" focusable="false" aria-labelledby="logo-icon-title" role="img"><title id="logo-icon-title">Vimeo</title><g><path class="fill logo-v" d="M31.277 18.832c-.14 3.052-2.27 7.229-6.39 12.531-4.259 5.536-7.863 8.306-10.811 8.306-1.825 0-3.371-1.687-4.633-5.059l-2.529-9.275c-.938-3.372-1.943-5.06-3.019-5.06-.234 0-1.054.494-2.458 1.477l-1.474-1.901c1.546-1.358 3.071-2.717 4.572-4.078 2.062-1.783 3.609-2.72 4.642-2.814 2.438-.234 3.938 1.433 4.502 5.001.608 3.851 1.03 6.246 1.266 7.182.704 3.195 1.476 4.791 2.321 4.791.657 0 1.641-1.037 2.954-3.108 1.312-2.072 2.015-3.649 2.109-4.732.188-1.789-.516-2.686-2.109-2.686-.75 0-1.522.173-2.318.514 1.54-5.044 4.481-7.495 8.823-7.355 3.22.095 4.737 2.184 4.552 6.266z"/><path class="fill logo-i" d="M50.613 28.713c-1.313 2.484-3.119 4.733-5.417 6.748-3.143 2.718-6.285 4.076-9.425 4.076-1.456 0-2.57-.469-3.343-1.406-.773-.938-1.137-2.153-1.09-3.653.045-1.548.526-3.938 1.441-7.173.914-3.232 1.373-4.967 1.373-5.201 0-1.218-.423-1.828-1.266-1.828-.282 0-1.079.494-2.393 1.477l-1.618-1.901c1.501-1.358 3.001-2.717 4.502-4.078 2.017-1.783 3.518-2.72 4.504-2.814 1.546-.14 2.684.314 3.411 1.367.726 1.052.996 2.417.81 4.098-.61 2.852-1.268 6.472-1.972 10.864-.046 2.01.681 3.014 2.182 3.014.656 0 1.827-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.336 1.755zm-6.12-25.016c-.047 1.168-.633 2.288-1.76 3.361-1.266 1.212-2.767 1.82-4.501 1.82-2.672 0-3.963-1.166-3.869-3.499.045-1.213.76-2.381 2.144-3.501 1.384-1.119 2.919-1.68 4.609-1.68.984 0 1.805.387 2.462 1.155.656.772.961 1.553.915 2.344z"/><path class="fill logo-m" d="M94.543 28.713c-1.314 2.484-3.117 4.733-5.416 6.748-3.145 2.718-6.285 4.076-9.426 4.076-3.051 0-4.527-1.687-4.432-5.06.045-1.501.338-3.306.877-5.415.539-2.108.832-3.748.879-4.921.049-1.779-.492-2.673-1.623-2.673-1.223 0-2.682 1.456-4.375 4.362-1.788 3.05-2.754 6.003-2.894 8.861-.095 2.02.103 3.568.592 4.645-3.272.096-5.565-.444-6.873-1.617-1.171-1.032-1.708-2.742-1.614-5.135.045-1.501.276-3.001.69-4.502.414-1.5.644-2.837.69-4.011.095-1.734-.54-2.604-1.9-2.604-1.177 0-2.444 1.339-3.806 4.011-1.361 2.673-2.113 5.465-2.253 8.371-.094 2.627.074 4.456.503 5.486-3.219.096-5.505-.582-6.857-2.035-1.122-1.214-1.634-3.06-1.539-5.54.044-1.214.258-2.911.645-5.084.386-2.175.603-3.87.647-5.087.093-.841-.119-1.263-.633-1.263-.281 0-1.079.475-2.393 1.424l-1.687-1.901c.234-.184 1.71-1.545 4.432-4.078 1.969-1.828 3.306-2.766 4.009-2.812 1.219-.095 2.204.409 2.954 1.511s1.126 2.38 1.126 3.834c0 .469-.047.915-.14 1.336.703-1.077 1.523-2.017 2.463-2.814 2.156-1.874 4.572-2.931 7.245-3.166 2.298-.187 3.938.352 4.925 1.617.795 1.033 1.17 2.511 1.125 4.433.329-.28.681-.586 1.056-.915 1.078-1.267 2.133-2.273 3.164-3.023 1.736-1.267 3.541-1.97 5.418-2.112 2.25-.187 3.867.35 4.852 1.611.844 1.028 1.219 2.5 1.127 4.415-.047 1.309-.363 3.213-.949 5.712-.588 2.501-.879 3.936-.879 4.31-.049.982.047 1.659.279 2.034.236.373.797.559 1.689.559.656 0 1.826-.693 3.518-2.083 1.406-1.156 2.555-2.243 3.447-3.262l1.337 1.757z"/><path class="fill logo-e" d="M120.922 28.642c-1.361 2.249-4.033 4.495-8.02 6.743-4.971 2.856-10.012 4.284-15.125 4.284-3.797 0-6.52-1.267-8.16-3.797-1.172-1.735-1.734-3.797-1.688-6.189.045-3.797 1.736-7.407 5.064-10.832 3.658-3.75 7.973-5.627 12.945-5.627 4.596 0 7.033 1.873 7.314 5.615.188 2.384-1.125 4.842-3.938 7.368-3.004 2.76-6.781 4.515-11.328 5.263.842 1.169 2.109 1.752 3.799 1.752 3.375 0 7.059-.855 11.045-2.574 2.859-1.207 5.111-2.461 6.754-3.76l1.338 1.754zm-15.969-7.345c.045-1.259-.469-1.89-1.547-1.89-1.406 0-2.83.969-4.283 2.906-1.451 1.936-2.201 3.789-2.248 5.562-.025 0-.025.305 0 .911 2.295-.839 4.287-2.122 5.971-3.849 1.357-1.491 2.06-2.707 2.107-3.64z"/><path class="fill logo-o" d="M140.018 23.926c-.189 4.31-1.781 8.031-4.783 11.169-3.002 3.137-6.73 4.706-11.186 4.706-3.705 0-6.52-1.195-8.441-3.585-1.404-1.777-2.182-4.001-2.32-6.668-.236-4.029 1.217-7.729 4.361-11.101 3.377-3.746 7.619-5.618 12.732-5.618 3.281 0 5.766 1.102 7.457 3.301 1.594 2.015 2.32 4.614 2.18 7.796zm-7.95-.264c.047-1.269-.129-2.434-.527-3.49-.4-1.057-.975-1.587-1.725-1.587-2.391 0-4.361 1.293-5.906 3.877-1.316 2.115-2.02 4.371-2.111 6.766-.049 1.176.164 2.21.633 3.104.514 1.032 1.242 1.549 2.182 1.549 2.109 0 3.914-1.244 5.416-3.735 1.267-2.068 1.945-4.23 2.038-6.484z"/></g></svg>'
            }, t.templates.outer = function(e) {
                var t = '<div class="vp-content-area-background"></div><div class="vp-video-wrapper" data-content-area-sibling-eligible><div class="vp-video"><div class="vp-telecine"></div></div><div class="vp-preview" id="vp-preview"></div></div><div class="vp-text-alert-wrapper hidden" data-content-area-sibling-eligible><div class="vp-alert-text"></div><div class="vp-alert-time"><div class="vp-live-start-time-title"></div><div class="vp-live-start-time-body"></div><div class="vp-live-start-time-footer"></div></div></div><div class="vp-target" data-content-area-sibling-eligible></div><div class="vp-outro-wrapper hidden" hidden data-content-area-sibling-eligible><div class="vp-outro" role="dialog"></div></div><div class="vp-player-ui-container" data-content-area-sibling-eligible></div><div class="vp-player-ui-overlays" data-content-area-sibling-eligible><div class="vp-wirewax-wrapper"></div></div><div class="vp-controls-wrapper" data-content-area-sibling-eligible></div><div class="vp-overlay-wrapper hidden" role="dialog" aria-modal="true" aria-labelledby="vp-overlay-labelledby" hidden data-content-area-sibling-eligible><div class="vp-overlay-bg"></div><div class="vp-overlay-cell"><div class="vp-overlay"></div><div class="vp-overlay-icon-wrapper hidden"><div class="vp-overlay-icon"></div></div><div class="vp-overlay-logo logo"></div></div><nav><button type="button" class="vp-nav-prevButton js-back cloaked" aria-label="' + e.strings.back + '">';
                return t += this.render("icon_prev") || "", t += '</button><button type="button" class="vp-nav-closeButton js-close" aria-label="' + e.strings.close + '">', (t += this.render("icon_close") || "") + '</button></nav></div><div class="vp-notification-wrapper hidden" hidden data-content-area-sibling-eligible><div class="vp-notification-cell"><div class="vp-notification" role="dialog" aria-live="assertive"></div></div></div><span id="new-window" hidden>This opens in a new window.</span>'
            }, t.templates.threesixty_reminder = function(e) {
                var t = '<div class="intro-wrap text-only"><div> ';
                return e.showArrows && (t += ' <div class="key-wrapper"><div class="key-row"><div class="key"><div class="arrow arrow-top"></div></div></div><div class="key-row"><div class="key"><div class="arrow arrow-left"></div></div><div class="key"><div class="arrow arrow-down"></div></div><div class="key"><div class="arrow arrow-right"></div></div></div></div> '), t + " <div>" + e.text + "</div></div></div>"
            }, t.templates.time_series_graph = function(e) {
                return '<svg width="' + e.width + '" height="' + e.height + '" viewBox="0 0 ' + e.width + " " + e.height + '"><g><polyline stroke="white" fill="none" points="' + e.points + '"></polyline></g><g> ' + e.markers + " </g></svg>"
            }, t.templates.notice = function(e) {
                return "<h3><span>" + e.strings.text + "<span></h3>"
            }, t.templates.stream_studder = function(e) {
                var t = "<h3> ";
                return (t += this.render("icon_warning") || "") + ' <span>Having issues? <button type="button" class="vp-alert-button-link button-link" aria-label="Switch to auto" data-alert-autofocus data-close data-context="suggestion">Switch to Auto</button> for smoother streaming.</span></h3>'
            }, t.templates.warning_alert = function(e) {
                var t = "<h3> ";
                return (t += this.render("icon_warning") || "") + " <span>" + e.strings.text + "<span></h3>"
            }, t.templates.icon_broken_heart = function(e) {
                return '<svg class="unlike-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M82.496 1c-14.594 0-23.198 10.043-25.948 14.48l-6.77 10.727 13.661 8.543-13.661 12.535 5.695 15.348-9.686-15.348 11.389-11.975-11.969-7.402s4.22-14.27 4.621-15.521c.782-2.438.782-2.438-.813-3.289-5.516-2.944-12.608-8.098-21.509-8.098-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.753-24.523 9.684-5.034 22.247-14.797 22.247-27.592 0-12.848-11.208-27.885-27.504-27.885z"/></svg>'
            }, t.templates.icon_check = function(e) {
                return "<svg xmlns='http://www.w3.org/2000/svg' class='check-icon' viewBox='-4 -4 18 18'><path class='fill' fill='#ffffff' d='M10.9 2.9l-.7-.7c-.2-.2-.6-.2-.8-.1L5 6.6 2.6 4.1c-.2-.1-.6-.1-.7 0l-.8.8c-.1.1-.1.5 0 .7l3.1 3.1c.4.4 1 .4 1.4 0l5.1-5.1c.3-.2.3-.6.2-.7z'/></svg>"
            }, t.templates.icon_clock = function(e) {
                return '<svg class="watch-later-icon" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid" focusable="false"><polyline class="fill hour-hand" points="9.64,4.68 10.56,4.68 11.28,11.21 8.93,11.21 9.64,4.68" /><polyline class="fill minute-hand" points="14.19,13.65 13.7,14.14 8.58,10.4 10.44,8.5 14.19,13.65" /><circle class="stroke" cx="10" cy="10" r="8" stroke-width="2" /></svg>'
            }, t.templates.icon_close = function(e) {
                return '<svg viewBox="0 0 20 20" class="icon-close"><path d="M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z" fill="#fff" fill-rule="evenodd"></path></svg>'
            }, t.templates.icon_embed = function(e) {
                return '<svg class="embed-icon" viewBox="0 0 55 48" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="embed-icon-title" role="img"><title id="embed-icon-title">' + e.title + '</title><polygon class="fill" points="16.019,16.385 11.968,13.131 0,24.543 12.082,35.955 16.132,32.703 7.439,24.543"/><polygon class="fill" points="42.92,13.131 38.868,16.384 47.561,24.542 38.981,32.701 43.033,35.955 55,24.542"/><polygon class="fill" points="24.083,39.221 28.76,39.221 36.243,8.351 31.566,8.351"/></svg>'
            }, t.templates.icon_facebook = function(e) {
                return '<svg class="facebook-icon" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="fb-icon-title" role="img"><title id="fb-icon-title">' + e.title + '</title><path class="fill" d="M35.992 64h-11.992v-32h-8v-11.028l8-0.004-0.013-6.497c0-8.997 2.44-14.471 13.037-14.471h8.824v11.030h-5.514c-4.127 0-4.325 1.541-4.325 4.418l-0.016 5.52h9.918l-1.169 11.028-8.741 0.004-0.008 32z"/></svg>'
            }, t.templates.icon_follow = function(e) {
                return '<svg class="icon icon-follow" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid" focusable="false"><defs><clipPath id="icon-mask--check"><rect x="0" y="0" width="24" height="24" /></clipPath></defs><path class="icon-path icon-path--plus fill" d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/><path class="icon-path icon-path--check fill" d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" clip-path="url(#icon-mask--check)"/><path class="icon-path icon-path--close fill" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>'
            }, t.templates.icon_heart = function(e) {
                return '<svg class="like-icon" viewBox="0 0 110 81" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M82.496 1c-14.698 0-25.969 11.785-27.496 13.457-1.526-1.672-12.798-13.457-27.494-13.457-16.299 0-27.506 15.037-27.506 27.885 0 12.795 12.562 22.558 22.245 27.592 9.186 4.771 30.601 18.349 32.755 24.523 2.154-6.174 23.57-19.752 32.755-24.523 9.684-5.034 22.245-14.797 22.245-27.592 0-12.848-11.206-27.885-27.504-27.885z"/></svg>'
            }, t.templates.icon_lock = function(e) {
                return '<svg viewBox="0 0 46 76" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill bolt" d="M5,42v-15C8,5 39,5 42,27v30h-7v-30C32,14 15,14 12,27v15z"/><rect class="fill" x="0" y="41" height="35" width="46" rx="4" ry="4"/></svg>'
            }, t.templates.icon_mail = function(e) {
                return '<svg class="mail-icon" viewBox="0 0 72 72" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="mail-icon-title" role="img"><title id="mail-icon-title">' + e.title + '</title><path class="fill" d="M71.754,57.6C71.9,57.169,72,56.718,72,56.241V16.759c0-0.453-0.092-0.881-0.225-1.291l-23.487,19.86L71.754,57.6z"/><path class="fill" d="M35.999,40.118l6.187-4.971l3.131-2.516L68.9,12.693c-0.387-0.113-0.789-0.193-1.213-0.193H4.312c-0.424,0-0.827,0.08-1.215,0.194l23.599,19.949l3.132,2.517L35.999,40.118z"/><path class="fill" d="M67.688,60.5c0.405,0,0.791-0.074,1.164-0.18L45.157,37.843l-9.159,7.361l-9.145-7.351L3.15,60.322C3.522,60.426,3.907,60.5,4.312,60.5H67.688z"/><path class="fill" d="M0.226,15.468C0.092,15.878,0,16.307,0,16.759v39.482c0,0.478,0.099,0.929,0.247,1.356l23.476-22.261L0.226,15.468z"/></svg>'
            }, t.templates.icon_prev = function(e) {
                return '<svg class="icon-prev" viewBox="0 0 27 48" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M7.243,24L26.414,4.828c0.781-0.781,0.781-2.047,0-2.828L25,0.586 c-0.781-0.781-2.047-0.781-2.828,0L0.879,21.879c-1.172,1.172-1.172,3.071,0,4.243l21.293,21.293c0.781,0.781,2.047,0.781,2.828,0 L26.414,46c0.781-0.781,0.781-2.047,0-2.828L7.243,24z"/></svg>'
            }, t.templates.icon_tumblr = function(e) {
                return '<svg class="tumblr-icon" viewBox="0 0 12 20" focusable="false" aria-labelledby="tumblr-icon-title" role="img"><title id="tumblr-icon-title">' + e.title + '</title><path class="fill" d="M7.865,19.958 C3.629,19.958 2.02,16.834 2.02,14.627 L2.02,8.105 L0,8.105 L0,5.527 C3.027,4.436 3.756,1.705 3.927,0.149 C3.938,0.042 4.022,0 4.07,0 L6.994,0 L6.994,5.084 L10.987,5.084 L10.987,8.105 L6.979,8.105 L6.979,14.318 C6.993,15.149 7.291,16.287 8.815,16.287 C8.843,16.287 8.872,16.287 8.9,16.286 C9.43,16.272 10.14,16.118 10.511,15.941 L11.471,18.788 C11.11,19.317 9.481,19.932 8.015,19.957 C7.964,19.958 7.915,19.958 7.865,19.958"/></svg>'
            }, t.templates.icon_twitter = function(e) {
                return '<svg class="twitter-icon" viewBox="0 0 274 223" preserveAspectRatio="xMidYMid" focusable="false" aria-labelledby="twitter-icon-title" role="img"><title id="twitter-icon-title">' + e.title + '</title><path class="fill" d="M85.98,222 C54.305,222 24.822,212.715 0,196.801 C4.388,197.319 8.853,197.584 13.38,197.584 C39.658,197.584 63.843,188.617 83.039,173.574 C58.495,173.121 37.781,156.905 30.644,134.621 C34.068,135.276 37.582,135.627 41.196,135.627 C46.312,135.627 51.267,134.942 55.974,133.66 C30.314,128.508 10.981,105.838 10.981,78.662 C10.981,78.426 10.981,78.191 10.985,77.957 C18.548,82.158 27.196,84.681 36.391,84.972 C21.341,74.914 11.438,57.746 11.438,38.287 C11.438,28.008 14.204,18.373 19.032,10.089 C46.696,44.023 88.025,66.353 134.641,68.692 C133.685,64.587 133.188,60.306 133.188,55.91 C133.188,24.935 158.302,-0.178 189.279,-0.178 C205.411,-0.178 219.988,6.634 230.22,17.535 C242.996,15.019 255,10.351 265.837,3.924 C261.649,17.021 252.756,28.013 241.175,34.955 C252.521,33.599 263.331,30.584 273.39,26.123 C265.87,37.371 256.36,47.25 245.402,55.158 C245.51,57.563 245.564,59.982 245.564,62.414 C245.564,136.533 189.148,222 85.98,222"/></svg>'
            }, t.templates.icon_vod = function(e) {
                return '<svg class="vod-icon" viewBox="0 0 21 23" focusable="false"><path class="fill" d="M19.602,4.716l-7.665-4.385C11.169-0.108,9.91-0.111,9.139,0.327L1.4,4.721C0.63,5.158,0,6.234,0,7.112v8.776c0,0.878,0.63,1.955,1.398,2.393l0.526,0.3l7.176,4.09c0.77,0.438,2.028,0.438,2.798,0l7.702-4.39c0.77-0.438,1.4-1.516,1.4-2.393V7.112C21,6.234,20.37,5.156,19.602,4.716z M7.336,15.761L7.337,7.24l8.008,4.26L7.336,15.761z"/></svg>'
            }, t.templates.icon_vod_download = function(e) {
                return '<svg class="vod-download-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M21.707 24.707l-5 5c-.39.39-1.024.39-1.414 0l-5-5c-.39-.39-.39-1.024 0-1.414l1.06-1.06c.392-.392 1.025-.392 1.415 0L14 23.462V15c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v8.464l1.232-1.232c.39-.39 1.024-.39 1.414 0l1.06 1.06c.392.39.392 1.025 0 1.415z"/><path class="fill" d="M27.894 12.31c.063-.43.106-.864.106-1.31 0-4.97-4.03-9-9-9-3.6 0-6.7 2.12-8.138 5.175C10.175 6.75 9.368 6.5 8.5 6.5 6.015 6.5 4 8.515 4 11c0 .445.067.874.187 1.28C1.76 13.05 0 15.318 0 18c0 3.314 2.686 6 6 6h1c0-2.42 1.718-4.436 4-4.9V15c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4v4.1c2.282.464 4 2.48 4 4.9h1c3.314 0 6-2.686 6-6 0-2.65-1.72-4.896-4.106-5.69z"/></svg>'
            }, t.templates.icon_vod_rent = function(e) {
                return '<svg class="vod-rent-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M23 11H9c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-8c0-.552-.448-1-1-1z"/><path class="fill" d="M32 22V10c-2.76 0-5-2.24-5-5H5c0 2.76-2.24 5-5 5v12c2.76 0 5 2.24 5 5h22c0-2.76 2.24-5 5-5zm-6-1c0 1.105-.895 2-2 2H8c-1.105 0-2-.895-2-2V11c0-1.105.895-2 2-2h16c1.105 0 2 .895 2 2v10z"/></svg>'
            }, t.templates.icon_vod_subscribe = function(e) {
                return '<svg class="vod-subscribe-icon" viewBox="0 0 32 32" focusable="false"><path class="fill" d="M20 9v2c0 .552.448 1 1 1h10c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1h-2c-.552 0-1 .448-1 1v4.445C24.98 2.01 20.523-.128 15.558.005 7.293.23.413 6.96.018 15.216-.42 24.41 6.905 32 16 32c8.47 0 15.404-6.583 15.964-14.912.04-.585-.413-1.088-1-1.088H28.96c-.514 0-.956.388-.994.9C27.506 23.107 22.326 28 16 28 9.217 28 3.748 22.37 4.01 15.53 4.246 9.284 9.47 4.147 15.72 4.003 19.38 3.92 22.674 5.483 24.926 8H21c-.552 0-1 .448-1 1z"/><path class="fill" d="M13 20v-8l8 4"/></svg>'
            }, t.templates.icon_warning = function(e) {
                return '<svg class="warning-icon" focusable="false" width="36" height="32.326" viewBox="287.915 380.297 36 32.326"><path d="M309.646 382.963c-2.052-3.555-5.41-3.555-7.462 0L288.79 406.16c-2.05 3.555-.372 6.463 3.732 6.463h26.786c4.104 0 5.783-2.908 3.73-6.463l-13.392-23.197zm-2 23.224c0 .983-.804 1.788-1.788 1.788-.983 0-1.788-.805-1.788-1.788 0-.984.805-1.79 1.788-1.79s1.79.805 1.788 1.79zm-.317-7.76c-.254 2.604-.916 4.735-1.472 4.735-.557 0-1.22-2.13-1.477-4.735-.255-2.604-.464-5.72-.464-6.925 0-1.204.87-2.19 1.935-2.19 1.066 0 1.936.986 1.936 2.19s-.205 4.32-.457 6.925z"/></svg>'
            }, t.templates.app_redirect = function(e) {
                var t = '<div class="vp-overlay-content"> ';
                return e.strings.title && (t += ' <div class="app-redirect-title">' + e.strings.title + "</div> "), e.hideRedirectButton || (t += ' <div class="' + (e.strings.title ? "" : "app-redirect--topspace") + '"><a class="app-redirect-button" href="' + e.redirectUrl + '" role="button"', e.newWindow && (t += ' data-new-window="1" target="_blank" rel="noopener"'), t += ' aria-describedby="new-window">' + e.strings.buttonText + "</a></div> "), e.strings.ignoreText && (t += ' <div class="app-redirect-ignore">' + e.strings.ignoreText + "</div> "), e.strings.bottomText && (t += ' <div class="app-redirect-bottom-text">' + e.strings.bottomText + "</div> "), t + "</div>"
            }, t.templates.email_capture = function(e) {
                var t = '<div class="vp-email-capture-wrapper ';
                return e.showWebinarForm && (t += "vp-webinar-wrapper"), t += '"><div class="vp-email-capture ', e.registrationFull && (t += "hidden"), t += '"> ', e.text || (t += ' <div class="vp-sr-only" id="vp-overlay-labelledby">' + e.aria_label + "</div> "), t += ' <form class="vp-email-capture-form" novalidate><div class="vp-email-capture-title-logo-wrap"> ', e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.showWebinarForm && (e.isWebinarStarted ? t += this.render("email_capture_start_time", {
                    startTime: e.strings.webinar.event_is_live
                }) || "" : e.webinarStartTime ? t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || "" : t += this.render("email_capture_start_time", {
                    startTime: e.strings.webinar.unscheduled
                }) || ""), t += ' <div class="vp-email-capture-title" id="vp-overlay-labelledby"> ', e.showWebinarForm && e.showWebinarLogin ? t += this.render("email_capture_title", {
                    title: e.reg_login_title
                }) || "" : e.text && (t += this.render("email_capture_title", {
                    title: e.text
                }) || ""), t += ' </div></div><div class="vp-email-capture-form-fields-bubble-wrapper"><div class="vp-email-capture-form-fields-wrapper"><div class="vp-email-capture-form-fields-slider"> ', t += this.render("email_capture_fields", {
                    customFields: e.customFields
                }) || "", t += ' </div></div><div class="vp-validation-bubble hidden"><div class="vp-validation-bubble-message"></div></div></div><div class="vp-email-capture-form-buttons"><input class="vp-email-capture-form-button vp-email-capture-form-button--back" tabIndex="-1" type="button" value="' + e.strings.back + '" aria-hidden="true"><div class="vp-email-capture-form-button--next-submit-wrapper"><div class="vp-email-capture-form-button--next-submit-slider"><input class="vp-email-capture-form-button vp-email-capture-form-button--next" tabIndex="-1" type="button" value="' + e.strings.next + '" aria-hidden="true"><input class="vp-email-capture-form-button vp-email-capture-form-button--submit" tabIndex="-1" type="submit" value="' + e.strings.submit + '" aria-hidden="true"></div></div></div> ', e.showWebinarForm ? t += this.render("webinar_disclaimer", {
                    text: e.strings.webinar,
                    url: e.privacyPolicy
                }) || "" : t += this.render("email_capture_disclaimer", {
                    text: e.strings,
                    url: e.privacyPolicy
                }) || "", e.showWebinarForm && (t += ' <div class="vp-email-capture-reg-bypass-wrapper"> ', t += this.render("webinar_registration_bypass_btn", {
                    showWebinarLogin: e.showWebinarLogin,
                    regBypass: e.strings.webinar.reg_bypass,
                    getGoBack: e.strings.webinar.reg_go_back
                }) || "", t += " </div> "), t += ' </form><div class="vp-email-capture-form-skip"> ', e.allowSkip && (t += this.render("email_capture_skip", {
                    position: e.position,
                    skipText: e.strings.skip,
                    skipToVideoText: e.strings.skip_to_video,
                    positionIsAfter: e.positionIsAfter
                }) || ""), t += ' </div><div class="vp-email-capture-progress-wrapper"><div class="vp-email-capture-steps"> ' + e.strings.step + ' <span class="vp-email-capture-current-step"></span> ' + e.strings.of + ' <span class="vp-email-capture-total-steps">' + e.customFields.length + '</span></div><div class="vp-email-capture-progress-bar"><span class="vp-email-capture-progress-meter"></span></div></div></div><div class="vp-email-capture-thank-you hidden"><div class="vp-email-capture-thank-you-box"><h1 class="vp-email-capture-thank-you-title">' + e.strings.thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.successful + "</p></div> ", e.positionIsAfter || (t += ' <div class="vp-email-capture-video-countdown vp-email-capture-video-countdown-meter-wrapper" aria-label="' + e.strings.video_starts + '"><div class="vp-email-capture-video-countdown-meter"></div><div class="vp-email-capture-video-countdown-meter-text"> ' + e.strings.video_starts + ' <span class="vp-email-capture-video-countdown-timer"></span></div></div> '), t += ' </div><div class="vp-email-capture-reg-thank-you hidden"><div class="vp-email-capture-thank-you-box"> ', e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.webinarStartTime && (t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || ""), t += ' <h1 class="vp-email-capture-thank-you-title">' + e.strings.webinar.reg_thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.webinar.reg_thank_you_subtitle + '</p></div></div><div class="vp-email-capture-login-thank-you hidden"><div class="vp-email-capture-thank-you-box"> ', e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.webinarStartTime && (t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || ""), t += ' <h1 class="vp-email-capture-thank-you-title">' + e.strings.webinar.login_thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.webinar.login_thank_you_subtitle + '</p></div></div><div class="vp-email-capture-reg-full ', e.registrationFull || (t += "hidden"), t += '"><div class="vp-email-capture-title-logo-wrap"> ', e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.showWebinarForm && (e.isWebinarStarted ? t += this.render("email_capture_start_time", {
                    startTime: e.strings.webinar.event_is_live
                }) || "" : e.webinarStartTime ? t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || "" : t += this.render("email_capture_start_time", {
                    startTime: e.strings.webinar.unscheduled
                }) || ""), t += " </div> ", t += this.render("webinar_full", {
                    text: e.strings.webinar.reg_full
                }) || "", t += ' <div class="vp-email-capture-reg-bypass-wrapper"> ', (t += this.render("webinar_registration_bypass_btn", {
                    showWebinarLogin: e.showWebinarLogin,
                    regBypass: e.strings.webinar.reg_bypass,
                    getGoBack: e.strings.webinar.reg_go_back
                }) || "") + ' </div></div></div><div class="vp-email-capture-dropdown-overlay"></div>'
            }, t.templates.email_capture_disclaimer = function(e) {
                var t = '<div class="vp-email-capture-disclaimer-wrapper"><div class="vp-email-capture-disclaimer" value="';
                return t += this.escape(e.text.disclaimer) || "", t += '">', t += this.escape(e.text.disclaimer) || "", t += "</div> ", e.url && (t += ' <a class="vp-email-capture-privacy-policy" href="', t += this.escape(e.url) || "", t += '" target="_blank" rel="noopener">' + e.text.privacy_policy + "</a> "), t + "</div>"
            }, t.templates.email_capture_field = function(e) {
                var t = "";
                if ("dropdown" === e.field.field_type && e.field.field_metadata && e.field.field_metadata.options) {
                    if (e.field.required) {
                        t += ' <div class="vp-email-capture-form-custom-field required vp-email-capture-form-dropdown-' + e.field.id + '" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input vp-email-capture-form-dropdown ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" tabIndex="-1" maxlength="30" readonly required /><div class="vp-email-capture-form-dropdown-icon"></div><div id="custom-field-options-overlay-' + e.field.id + '" class="vp-email-capture-form-dropdown-overlay" aria-labelledby="vp-email-capture-dropdown"><ul id="custom-field-options-' + e.field.id + '" class="vp-email-capture-form-dropdown-options" aria-role="listbox"><li class="vp-email-capture-form-dropdown-option-disabled" aria-role="option" aria-label="' + e.field.field_label + '" tabindex="-1"><div class="vp-option-check" aria-hidden="true">', t += this.render("icon_check") || "", t += "</div><strong>" + e.field.field_label + "</strong></li> ";
                        for (var n = 0; n < e.field.field_metadata.options.length; n++) t += ' <li class="vp-email-capture-form-dropdown-option" aria-role="option" aria-label="' + e.field.field_metadata.options[n].option_label + '" tabindex="-1"><div class="vp-option-check">', t += this.render("icon_check") || "", t += "</div>" + e.field.field_metadata.options[n].option_label + " </li> ";
                        t += " </ul></div></div> "
                    } else {
                        t += ' <div class="vp-email-capture-form-custom-field vp-email-capture-form-dropdown-' + e.field.id + '" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input vp-email-capture-form-dropdown ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" tabIndex="-1" maxlength="30" readonly /><div class="vp-email-capture-form-dropdown-icon"></div><div id="custom-field-options-overlay-' + e.field.id + '" class="vp-email-capture-form-dropdown-overlay" aria-labelledby="vp-email-capture-dropdown"><ul id="custom-field-options-' + e.field.id + '" class="vp-email-capture-form-dropdown-options" aria-role="listbox"><li class="vp-email-capture-form-dropdown-option" aria-role="option" aria-label="' + e.field.field_label + '" tabindex="-1"><div class="vp-option-check" aria-hidden="true">', t += this.render("icon_check") || "", t += "</div><strong>" + e.field.field_label + "</strong></li> ";
                        for (var i = 0; i < e.field.field_metadata.options.length; i++) t += ' <li class="vp-email-capture-form-dropdown-option" aria-role="option" aria-label="' + e.field.field_metadata.options[i].option_label + '" tabindex="-1"><div class="vp-option-check">', t += this.render("icon_check") || "", t += "</div>" + e.field.field_metadata.options[i].option_label + " </li> ";
                        t += " </ul></div></div> "
                    }
                    t += ""
                } else e.field.required ? (t += ' <div class="vp-email-capture-form-custom-field required" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" maxlength="180" tabIndex="-1" required /></div> ') : (t += ' <div class="vp-email-capture-form-custom-field" data-id="' + e.field.id + '" data-type="' + e.field.field_type + '" aria-hidden="true"><label class="vp-email-capture-form-input-label" for="custom-field-' + e.field.id + '"> ', t += this.escape(e.field.field_label) || "", t += ' </label><input id="custom-field-' + e.field.id + '" class="vp-email-capture-form-input ', e.field.locked && (t += "locked_field"), e.field.static_field && (t += "static_field"), t += '" name="', t += this.escape(e.field.field_name) || "", t += '" tabIndex="-1" maxlength="180" /></div> '), t += "";
                return t + ""
            }, t.templates.email_capture_fields = function(e) {
                for (var t = "", n = 0; n < e.customFields.length; n++) t += this.render("email_capture_field", {
                    field: e.customFields[n]
                }) || "", t += "";
                return t + ""
            }, t.templates.email_capture_logo = function(e) {
                var t = '<img src="';
                return (t += this.escape(e.url) || "") + '" alt="" class="vp-email-capture-logo">'
            }, t.templates.email_capture_skip = function(e) {
                var t = "";
                return e.positionIsAfter && (t += ' <input class="vp-email-capture-form-button vp-email-capture-form-button--cancel" type="button" value="' + e.skipText + '">'), t += "", e.positionIsAfter || (t += ' <input class="vp-email-capture-form-button vp-email-capture-form-button--cancel" type="button" value="' + e.skipToVideoText + '">'), t + ""
            }, t.templates.email_capture_start_time = function(e) {
                return '<div class="vp-email-capture-start-time"> ' + e.startTime + "</div>"
            }, t.templates.email_capture_title = function(e) {
                var t = "";
                return (t += this.escape(e.title) || "") + ""
            }, t.templates.error = function(e) {
                var t = '<div class="vp-overlay-content error"><div class="vp-sr-only" id="vp-overlay-labelledby">' + e.aria_label + "</div> ";
                return e.title && (t += " <h1>" + e.title + "</h1> "), e.message && (t += " <p>" + e.message + "</p> "), t + "</div>"
            }, t.templates.outro_email = function(e) {
                var t = '<div class="vp-outro-bg"';
                return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t + '></div><div class="vp-outro-content vp-outro-content--email vp-outro-shade js-outro-content"></div>'
            }, t.templates.outro_image = function(e) {
                var t = '<div class="vp-outro-content vp-outro-content--image js-outro-content"> ';
                return e.url && (t += '<a class="vp-outro-imageLink js-imageLink" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window">'), e.bgimage && (t += '<div class="vp-outro-image" style="background-image: url(' + e.bgimage + ');"', e.alt_text && (t += ' aria-label="', t += this.escape(e.alt_text) || "", t += '" role="img"'), t += "></div>"), e.url && (t += "</a>"), t + "</div>"
            }, t.templates.outro_link = function(e) {
                var t = '<div class="vp-outro-bg"';
                return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t += '></div><div class="vp-outro-content vp-outro-content--link vp-outro-shade js-outro-content"><div class="vp-outro-linkWrapper js-outro-linkWrapper"> ', e.title && (t += '<h1 class="vp-outro-textTitle js-outro-title">', t += this.escape(e.title) || "", t += "</h1>"), e.description && (t += '<p class="vp-outro-textDescription js-outro-text">', t += this.escape(e.description) || "", t += "</p>"), e.text && e.url && (t += ' <div class="vp-outro-buttonWrap"><a class="vp-outro-button js-cta" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window"><span>', t += this.escape(e.text) || "", t += "</span></a></div> "), e.text2 && e.url2 && (t += ' <div class="vp-outro-linkWrap js-outro-linkWrap"><a class="vp-outro-link js-link" href="' + e.url2 + '" target="_blank" rel="noopener" aria-describedby="new-window">', t += this.escape(e.text2) || "", t += "</a></div> "), t + " </div></div>"
            }, t.templates.outro_nothing = function(e) {
                return '<div class="vp-outro-bg"></div><div class="vp-outro-content vp-outro-content--nothing vp-outro-shade js-outro-content"></div>'
            }, t.templates.outro_share = function(e) {
                var t = '<div class="vp-outro-bg"';
                return e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t += '></div><div class="vp-outro-content vp-outro-content--share vp-outro-shade js-outro-content"></div><nav class="panel-nav"><button type="button" class="vp-nav-prevButton js-back cloaked" aria-label="' + e.strings.back + '">', (t += this.render("icon_prev") || "") + "</button></nav>"
            }, t.templates.outro_staticimage = function(e) {
                var t = '<div class="vp-outro-content vp-outro-content--staticImage js-outro-content"><div class="vp-outro-staticImageWrapper"> ';
                return e.url && (t += '<a class="vp-outro-staticImageLink" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window">'), t += ' <img class="vp-outro-staticImage" src="' + e.svg_url + '"> ', e.url && (t += "</a>"), t + " </div></div>"
            }, t.templates.outro_text = function(e) {
                return '<div class="vp-outro-content vp-outro-content--text vp-outro-shade js-outro-content"><div class="vp-outro-textWrapper"><div class="vp-outro-text">' + e.text + "</div></div></div>"
            }, t.templates.outro_videos = function(e) {
                var t = '<div class="vp-outro-bg"';
                e.bgimage && (t += ' style="background-image: url(' + e.bgimage + ');"'), t += '></div><div class="vp-outro-content vp-outro-content--videos vp-outro-shade js-outro-content"> ';
                for (var n = 0; n < e.contexts.length; n++) {
                    var i = e.contexts[n];
                    t += ' <div class="vp-outro-videosSection vp-outro-videosSection--' + i.videos.length, i.promoted && (t += " vp-outro-videosSection--promoted"), t += '"><div class="vp-outro-videosHeaderWrapper"><header class="vp-outro-videosHeader"><h1 class="vp-outro-videosTitle">' + i.context + "</h1> ", e.showFollowButton && !i.promoted && (t += ' <div class="vp-outro-followWrap js-outro-followWrap"><button type="button" class="vp-outro-follow js-outro-follow" aria-label="' + e.strings.follow + '" aria-pressed="', e.following ? t += "true" : t += "false", t += '"> ', t += this.render("icon_follow") || "", t += ' <span class="vp-outro-follow-text" data-label-follow="' + e.strings.follow + '" data-label-following="' + e.strings.following + '" data-label-unfollow="' + e.strings.unfollow + '"></span></button></div> '), t += ' </header></div><ul class="vp-outro-videos vp-outro-videos--' + i.videos.length + '"> ';
                    for (var o = 0; o < i.videos.length; o++) t += ' <li><a class="vp-outro-videoLink js-videoLink', 1 == n && (t += " hovered"), t += '" href="' + i.videos[o].url + '" ', e.target && (t += ' target="_blank" rel="noopener" '), t += ' data-video-id="' + i.videos[o].id + '" aria-describedby="new-window" ><div class="vp-outro-imgWrapper" style="background-image: url(' + i.videos[o].thumbnail + ')"></div><header class="vp-outro-videoHeader" id="vp-outro-videoHeader"><h1 class="vp-outro-videoTitle">', t += this.escape(i.videos[o].title) || "", t += "</h1> ", i.videos[o].byline && (t += ' <h2 class="vp-outro-videoByline">', t += this.escape(i.videos[o].byline) || "", t += "</h2> "), t += " </header></a> ";
                    t += " </ul></div> "
                }
                return t + "</div>"
            }, t.templates.outro_vod = function(e) {
                var t = '<div class="vp-outro-content vp-outro-content--vod vp-outro-shade js-outro-content"><div class="vp-outro-vodWrapper"><h1 class="vp-outro-vodHeader" aria-describedby="new-window"><a href="' + e.url + '" target="_blank" rel="noopener">';
                t += this.escape(e.title) || "", t += "</a></h1> ";
                var n = e.countries,
                    i = e.country;
                if (this.helpers.isAvailableInCountry(n, i))
                    if (e.purchased) t += ' <a class="vp-outro-vodButton vp-outro-vodButton--watch js-vod-watch" role="button" href="' + e.url + '" target="_blank" rel="noopener" aria-describedby="new-window">' + e.strings.watch + "</a> ";
                    else {
                        if (!e.isComingSoon) {
                            t += ' <ul class="vp-outro-vod"> ';
                            for (var o = 0; o < e.buttons.length; o++) {
                                t += ' <li class="vp-outro-vod-item"><a class="vp-outro-vodButton vp-outro-vodButton--' + e.buttons[o].type + ' js-vod-button" role="button" href="' + e.url + "#buy=" + e.buttons[o].product_id + '" target="_blank" rel="noopener" data-product-id="' + e.buttons[o].product_id + '" aria-describedby="new-window" ><div class="vp-outro-vodIcon"> ', "buy" === e.buttons[o].type ? t += this.render("icon_vod_download") || "" : "rent" === e.buttons[o].type ? t += this.render("icon_vod_rent") || "" : "subscribe" === e.buttons[o].type ? t += this.render("icon_vod_subscribe") || "" : t += this.render("icon_vod") || "", t += " </div> ";
                                var r = e.currency,
                                    a = e.buttons[o];
                                t += " <p>" + this.helpers.formatVodLabel(e.translationMap, "outro_string", r, a) + "</p></a></li> "
                            }
                            t += " </ul> "
                        }(e.isPreorder || e.isComingSoon) && (t += " <p>" + e.strings.preRelease + "</p> ")
                    }
                return t + " </div></div>"
            }, t.templates.password = function(e) {
                return '<div class="vp-overlay-content password form"><h1 class="header" id="vp-overlay-labelledby">' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + '</p><form action="' + e.action + '" method="post" novalidate><div class="vp-validation-bubble hidden"><div class="vp-validation-bubble-arrow-clipper"><div class="vp-validation-bubble-arrow"></div></div><div class="vp-validation-bubble-message"></div></div><input class="js-password" type="password" name="password" placeholder="' + e.strings.password + '" required aria-required="true" aria-label="' + e.strings.password + '"><input type="submit" value="' + e.strings.watch + '"></form></div>'
            }, t.templates.private_locked = function(e) {
                return '<div class="vp-overlay-content login"><h1 id="vp-overlay-labelledby">' + e.strings.title + '</h1><p class="subtitle">' + e.strings.subtitle + '</p><a href="' + e.action + '" class="popup js-login" target="_blank" rel="noopener" role="button" aria-describedby="new-window">' + e.strings.buttonText + "</a></div>"
            }, t.templates.share = function(e) {
                var t = '<div class="vp-share-wrapper js-share"><section class="vp-share-screen vp-share-screen--share' + (e.embedOnly ? " cloaked" : "") + ' js-share-screen"><h1 class="vp-share-title vp-share-title--share" id="vp-overlay-labelledby">' + e.strings.share + '</h1><ul class="vp-share-buttons"><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--facebook js-facebook" href="' + e.playerShareUrl + "/facebook" + e.unlistedHashParam + '" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + e.facebookIcon + ' </a><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--twitter js-twitter" href="' + e.playerShareUrl + "/twitter" + e.unlistedHashParam + '" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + e.twitterIcon + ' </a><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--tumblr js-tumblr" href="' + e.playerShareUrl + "/tumblr" + e.unlistedHashParam + '" target="_blank" rel="noopener" role="button" aria-describedby="new-window" > ' + e.tumblrIcon + " </a> ";
                return e.shareUrl && (t += ' <li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--email js-email" href="mailto:?subject=', t += encodeURIComponent(e.strings.emailSubject) || "", t += "&amp;body=", t += encodeURIComponent(e.strings.emailBody) || "", t += '" role="button" aria-describedby="new-window" > ' + e.emailIcon + " </a> "), t += " </ul> ", e.embed && (t += ' <ul class="vp-share-buttons"><li class="vp-share-buttons-item"><a class="vp-share-button vp-share-button--embed js-embed" href="' + e.url + '#share" target="_blank" rel="noopener" role="button" > ' + e.embedIcon + " </a></li></ul> "), e.shareUrl && (t += ' <p class="vp-share-footnote vp-share-footnote--share"><a class="clip_url" href="' + e.shareUrl + '" target="_blank" rel="noopener" aria-describedby="new-window">' + e.shareUrl + "</a></p> "), t += " </section> ", e.embed && (t += ' <section class="vp-share-screen vp-share-screen--embed' + (e.embedOnly ? "" : " cloaked") + ' js-embed-screen"><div class="vp-share-embedWrapper"><h1 class="vp-share-title vp-share-title--embed">' + e.strings.embedTitle + '</h1><p class="vp-share-subtitle vp-share-subtitle--embed">' + e.strings.embedSubtitle + '</p><div class="vp-share-embedCode form"><div><input class="vp-share-embedInput js-embed-input" type="text" name="embed_code" title="Embed code" value="' + e.embedCode + '" spellcheck="false" aria-readonly="true"', e.readOnly && (t += " readonly"), t += "></div> ", e.copyButton && (t += ' <button type="button" class="vp-share-embedCopy js-embedCopy" data-clipboard-text=\'' + e.embedCode + "' data-label=\"" + e.strings.copy + '" data-success-label="' + e.strings.copySuccess + '">' + e.strings.copy + "</button> "), t += " </div> ", e.customizeEmbed && (t += ' <p class="vp-share-footnote vp-share-footnote--embed">' + e.strings.customize + "</p> "), t += " </div></section> "), t + "</div>"
            }, t.templates.webinar_confirmation = function(e) {
                var t = '<div class="vp-email-capture-reg-thank-you"><div class="vp-email-capture-thank-you-box"> ';
                return e.customLogo && (t += this.render("email_capture_logo", {
                    url: e.customLogo
                }) || ""), e.webinarStartTime && (t += this.render("email_capture_start_time", {
                    startTime: e.webinarStartTime
                }) || ""), t + ' <h1 class="vp-email-capture-thank-you-title">' + e.strings.thank_you + '</h1><p class="vp-email-capture-thank-you-subtitle">' + e.strings.thank_you_subtitle + "</p></div></div>"
            }, t.templates.webinar_disclaimer = function(e) {
                var t = '<div class="vp-email-capture-disclaimer-wrapper vp-webinar-disclaimer-wrapper"> ';
                return t += ' <div class="vp-webinar-compliance-checkbox-border"><input type="checkbox" class="vp-disclaimer-checkbox"></div><div class="vp-disclaimer-text-wrapper"><label for="vp-disclaimer-checkbox" class="vp-email-capture-disclaimer vp-webinar-disclaimer"> ' + e.text.disclaimer + " </label> ", e.url && (t += ' <a class="vp-email-capture-privacy-policy" href="', t += this.escape(e.url) || "", t += '" target="_blank" rel="noopener">' + e.text.host_privacy_policy + "</a> "), t + ' <div class="vp-opt-in-bubble hidden"><p class="vp-opt-in-bubble-message">' + e.text.opt_in_error + "</p></div></div></div>"
            }, t.templates.webinar_ended = function(e) {
                var t = '<div class="vp-text-alert-wrapper "> ';
                return e.strings.title && (t += ' <div class="vp-alert-text">' + e.strings.title + "</div> "), t + "</div>"
            }, t.templates.webinar_full = function(e) {
                return '<div class="vp-reg-full-wrapper"><h2 class="vp-reg-full-text"> ' + e.text + " </h2></div>"
            }, t.templates.webinar_registration_bypass_btn = function(e) {
                var t = "";
                return e.showWebinarLogin ? e.showWebinarLogin && !e.registrationFull && (t += ' <button class="vp-email-capture-reg-go-back vp-webinar-email-capture-reg-go-back">' + e.regGoBack + "</button>") : t += ' <button class="vp-email-capture-reg-bypass">' + e.regBypass + "</button>", t + ""
            }, e.exports ? e.exports = t : window.Aftershave = t
        }()
    }));
const ro = function(e) {
    return (t, ...n) => (n.forEach(n => {
        for (const i in n) {
            const o = Object.getOwnPropertyDescriptor(n, i);
            Object.defineProperty(t, i, Object.assign(o, e))
        }
    }), t)
}({
    enumerable: !0,
    configurable: !0,
    writeable: !1
});

function ao() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function so(e) {
    return lo() - e
}

function lo() {
    return parseInt(ao() / 1e3, 10)
}

function co(e) {
    return parseInt(Date.now() / 1e3, 10) - e
}

function uo(e, t) {
    var n = Math.floor(e / 3600 % 60),
        i = Math.floor(e / 60 % 60);
    if (e = Math.floor(e % 60), t) {
        var o = e + " second" + (1 === e ? "" : "s");
        return i > 0 && (o = i + " minute" + (1 === i ? "" : "s") + ", " + o), n > 0 && (o = n + " hour" + (1 === n ? "" : "s") + ", " + o), o
    }
    return (n > 0 ? n + ":" : "") + po(i, 2) + ":" + po(e, 2)
}

function po(e, t, n) {
    return e = String(e), new Array(t - e.length + 1).join(n || "0") + e
}

function _o(e, t) {
    const n = new Intl.DateTimeFormat(t, {
        dateStyle: "full",
        timeStyle: "short"
    }).format(e);
    return n.charAt(0).toUpperCase() + n.slice(1)
}
const vo = e => {
    if (!e) return !1;
    const t = Date.now();
    return Date.parse(e) - t <= 0
};

function mo(e, t, n) {
    const i = c() ? n.parentElement : n,
        o = n.querySelector(".vp-video-wrapper"),
        r = Y(s, 150),
        a = Y(l, 150);

    function s() {
        const {
            width: e,
            height: n
        } = ct(i);
        t.dispatch(((e, t) => ({
            type: "CONTAINER_RESIZE",
            payload: {
                width: e,
                height: t
            }
        }))(e, n))
    }

    function l() {
        const {
            width: e,
            height: n
        } = ct(o);
        t.dispatch(((e, t) => ({
            type: "PLAYER_CONTAINER_RESIZE",
            payload: {
                width: e,
                height: t
            }
        }))(e, n))
    }

    function c() {
        return n.parentElement === document.body
    }

    function d({
        size: e,
        ratio: t,
        bottom: o
    }) {
        c() && (i.classList.toggle("vp-center", "contain" === e), function(e, t) {
            [].concat(["height", "max-width", "max-height", "bottom"]).map(t => e.style.removeProperty(t))
        }(n), "contain" !== e ? o > 0 && yt(n, {
            height: `calc(100% - ${o}px)`,
            bottom: `${o/2}px`
        }) : yt(n, o > 0 ? {
            maxWidth: `calc((100vh - ${o}px) / ${t})`,
            maxHeight: `calc(100vh - ${o}px)`,
            height: `calc(${t} * 100vw)`,
            bottom: `${o/2}px`
        } : {
            maxWidth: `calc(100vh / ${t})`,
            height: `calc(${t} * 100vw)`
        }))
    }
    t.watch("ui.appLayout.settings", d), d(t.get("ui.appLayout.settings")), new G(r).observe(i), new G(a).observe(o), window.addEventListener("orientationchange", r), window.addEventListener("orientationchange", a), e.events.on(Yt._didEnterFullscreen, r), e.events.on(Yt._didExitFullscreen, r), e.events.on(Yt._didEnterFullscreen, a), e.events.on(Yt._didExitFullscreen, a), s(), l()
}
const fo = /^(%20|\s)*(javascript|data)/im,
    ho = /[^\x20-\x7E]/gim,
    go = /^([^:]+):/gm,
    bo = [".", "/"];

function yo(e) {
    const t = e.match(go);
    return null == t ? void 0 : t[0]
}

function Eo(e) {
    return e ? decodeURI(encodeURI(function(e) {
        const t = yo(e = e.trim());
        return e && !t && (e = `https://${e}`), e
    }(function(e) {
        let t = e.replace(ho, "");
        if (function(e) {
                return bo.indexOf(e[0]) > -1
            }(t)) return t;
        const n = yo(t);
        return n && fo.test(n) ? "" : t
    }(e)))) : null
}

function Co(e = "") {
    return e.includes("?")
}

function wo(e) {
    return e.account_type && "basic" !== e.account_type && !/_lapsed|_expired/.test(e.account_type)
}

function To(e) {
    const {
        videoObject: t
    } = So();
    null == e || !e.length || null != t && t.transcript || Lo({
        transcript: e.map(({
            text: e
        }) => e).join(" ")
    })
}

function Lo(e) {
    const {
        videoObject: t,
        element: n
    } = So();
    if (t) try {
        Object.assign(t, e), n.textContent = JSON.stringify(t)
    } catch (i) {}
}

function So() {
    const e = document.body.querySelector("script[type='application/ld+json']");
    if (e) try {
        return {
            videoObject: JSON.parse(e.textContent),
            element: e
        }
    } catch (t) {}
    return {}
}

function ko(e, t) {
    switch (e.view) {
        case jt.privateLocked:
            throw new z("The video is private.", "PrivacyError", t);
        case jt.privatePassword:
            throw new z("The video is password-protected. The viewer must enter the password first.", "PasswordError", t);
        case jt.error:
            throw new z(e.message, "NotFoundError", t)
    }
}

function Ao(e) {
    let t = [];
    for (let n = 0; n < e.length; n++) t.push([e.start(n), e.end(n)]);
    return t
}

function Po() {
    try {
        return window.self !== window.top
    } catch (Ie) {
        return !0
    }
}
let Io, Ro, Oo, No, Mo, Do, xo, Bo, Vo, Uo, Fo, Ho, qo, $o, Wo;
! function(e) {
    e.VimeoPlayer = "VimeoPlayer", e.ChromelessPlayer = "Chromeless"
}(Io || (Io = {})),
function(e) {
    e.INLINE = "inline", e.PICTURE_IN_PICTURE = "picture-in-picture"
}(Ro || (Ro = {})),
function(e) {
    e.NORMAL = "normal", e.MINI = "mini", e.TINY = "tiny"
}(Oo || (Oo = {})),
function(e) {
    e[e.NONE = 0] = "NONE", e[e.LOADING = 1] = "LOADING", e[e.LOADED = 2] = "LOADED", e[e.ERROR = 3] = "ERROR"
}(No || (No = {})),
function(e) {
    e.FIELD_MARKERS = "markers", e.FIELD_CLIP_ID = "clip_id", e.FIELD_PROFILE_ID = "profile_id", e.FIELD_PLAYER_SIZE = "player_size", e.FIELD_DROPPED_FRAMES = "dropped_frames", e.FIELD_TOTAL_FRAMES = "total_frames", e.FIELD_BANDWIDTH = "bandwidth", e.FIELD_STREAMS = "streams", e.FIELD_FILES = "files", e.FIELD_VIDEO_DIMS = "video_dims", e.FIELD_MIN_BANDWIDTH = "min_bandwidth", e.FIELD_MAX_BANDWIDTH = "max_badwidth", e.FIELD_BUFFER_OCCUPANCY = "buffer_occupancy", e.FIELD_LIVE_LATENCY = "live_latency", e.FIELD_SCANNERS = "scanner", e.FIELD_VR_HEADSET = "vr_headset"
}(Mo || (Mo = {})),
function(e) {
    e.AUTO = "auto"
}(Do || (Do = {})),
function(e) {
    e.PRIVACY_PUBLIC = "anybody", e.PRIVACY_NOBODY = "nobody", e.PRIVACY_FOLLOW = "contacts", e.PRIVACY_PASSWORD = "password", e.PRIVACY_USER = "users", e.PRIVACY_PURGATORY = "purgatory", e.PRIVACY_HIDE_FROM_VIMEO = "disable", e.PRIVACY_PAYTOVIEW = "ptv", e.PRIVACY_PAYTOVIEWEXTRA = "ptv_extra", e.PRIVACY_UNLISTED = "unlisted", e.PRIVACY_STOCK = "stock"
}(xo || (xo = {})),
function(e) {
    e.MEDIA_SOURCE_SCANNER = "MediaSourceScanner", e.HLS_LIVE_SCANNER = "HLSLiveScanner"
}(Bo || (Bo = {})),
function(e) {
    e.PLAY = "play", e.PAUSE = "pause", e.REPLAY = "replay", e.TRAILER = "trailer"
}(Vo || (Vo = {})),
function(e) {
    e.FONT_SIZE = "fontSize", e.FONT_FAMILY = "fontFamily", e.FONT_OPACITY = "fontOpacity", e.COLOR = "color", e.EDGE_STYLE = "edgeStyle"
}(Uo || (Uo = {})),
function(e) {
    e.BG_OPACITY = "bgOpacity", e.BG_COLOR = "bgColor"
}(Fo || (Fo = {})),
function(e) {
    e.WINDOW_OPACITY = "windowOpacity", e.WINDOW_COLOR = "windowColor"
}(Ho || (Ho = {})),
function(e) {
    e[e.FONT_SIZE = Uo.FONT_SIZE] = "FONT_SIZE", e[e.FONT_FAMILY = Uo.FONT_FAMILY] = "FONT_FAMILY", e[e.FONT_OPACITY = Uo.FONT_OPACITY] = "FONT_OPACITY", e[e.COLOR = Uo.COLOR] = "COLOR", e[e.EDGE_STYLE = Uo.EDGE_STYLE] = "EDGE_STYLE", e[e.BG_OPACITY = Fo.BG_OPACITY] = "BG_OPACITY", e[e.BG_COLOR = Fo.BG_COLOR] = "BG_COLOR", e[e.WINDOW_OPACITY = Ho.WINDOW_OPACITY] = "WINDOW_OPACITY", e[e.WINDOW_COLOR = Ho.WINDOW_COLOR] = "WINDOW_COLOR"
}(qo || (qo = {})),
function(e) {
    e.CCMenu = "c", e.PrefsMenu = "h", e.Transcript = "T"
}($o || ($o = {})),
function(e) {
    e.SINGLE_VIDEO_VIEW_MANAGE = "single_video_view_manage", e.SINGLE_VIDEO_VIEW_RECIPIENT = "single_video_view_recipient", e.EMBEDDED_PAGE = "embedded_page", e.CLIP_PAGE = "clip_page"
}(Wo || (Wo = {}));
const {
    VIMEO_URL: Yo,
    SVV_RECIPIENT_URL: Go,
    SVV_MANAGE_URL: zo,
    CLIP_URL: jo,
    PROFILE_URL: Ko,
    VOD_URL: Xo,
    VOD_VIDEO_MANAGE_URL: Zo
} = {
    VIMEO_URL: "vimeoUrl",
    SVV_RECIPIENT_URL: "svvRecipientUrl",
    SVV_MANAGE_URL: "svvManageUrl",
    CLIP_URL: "clipUrl",
    PROFILE_URL: "profileUrl",
    VOD_URL: "vodUrl",
    VOD_VIDEO_MANAGE_URL: "vodVideoManageUrl"
}, Qo = {
    "vimeo-logo": {
        viewer: {
            unlisted: jo,
            password: jo,
            disable: Yo,
            nobody: jo,
            anybody: jo,
            ptv: Xo,
            privateMode: Yo
        },
        creator: {
            unlisted: zo,
            password: zo,
            disable: zo,
            nobody: zo,
            anybody: zo,
            ptv: Zo,
            privateMode: zo
        }
    },
    "video-title": {
        viewer: {
            unlisted: Go,
            password: jo,
            disable: Ko,
            nobody: zo,
            anybody: jo,
            ptv: Xo,
            privateMode: Yo
        },
        creator: {
            unlisted: zo,
            password: zo,
            disable: zo,
            nobody: zo,
            anybody: zo,
            ptv: Zo,
            privateMode: zo
        }
    },
    "video-portrait": {
        viewer: {
            unlisted: Ko,
            password: Ko,
            disable: Ko,
            nobody: Ko,
            anybody: Ko,
            ptv: Ko,
            privateMode: Yo
        },
        creator: {
            unlisted: Ko,
            password: Ko,
            disable: Ko,
            nobody: Ko,
            anybody: Ko,
            ptv: Zo,
            privateMode: zo
        }
    },
    "video-byline": {
        viewer: {
            unlisted: Ko,
            password: Ko,
            disable: Ko,
            nobody: Ko,
            anybody: Ko,
            ptv: Ko,
            privateMode: Yo
        },
        creator: {
            unlisted: Ko,
            password: Ko,
            disable: Ko,
            nobody: Ko,
            anybody: Ko,
            ptv: Zo,
            privateMode: zo
        }
    }
};

function Jo(e = {}) {
    const t = {
        selectDestination(e) {
            const n = Qo[e];
            if (!n) return "";
            const i = t.isOwner ? n.creator : n.viewer;
            return t.isPrivateMode ? i.privateMode : i[t.videoPrivacy]
        },
        get [jo]() {
            return function(e, t) {
                var n, i;
                const o = null == (n = t.video) ? void 0 : n.id,
                    r = null == (i = t.video) ? void 0 : i.unlisted_hash;
                return `${e}/${o}${r?"/"+r:""}`
            }(t[Yo], e)
        },
        get [Go]() {
            var n, i;
            return function(e, t, n) {
                return n ? `${e}/${t}/${n}` : `${e}/${t}`
            }(t[Yo], null == (n = e.video) ? void 0 : n.id, null == (i = e.video) ? void 0 : i.unlisted_hash)
        },
        get [zo]() {
            var n;
            return function(e, t) {
                return `${e}/manage/videos/${t}`
            }(t[Yo], null == (n = e.video) ? void 0 : n.id)
        },
        get [Yo]() {
            return `https://${e.vimeo_url}`
        },
        get [Ko]() {
            var t, n;
            return null == (t = e.video) || null == (n = t.owner) ? void 0 : n.url
        },
        get [Xo]() {
            var t, n;
            return null == (t = e.video) || null == (n = t.vod) ? void 0 : n.url
        },
        get [Zo]() {
            var t, n;
            return `https://${e.vimeo_url}/ondemand/${null==(t=e.video)||null==(n=t.vod)?void 0:n.id}/settings/basic`
        },
        get videoPrivacy() {
            var t;
            return null == (t = e.video) ? void 0 : t.privacy
        },
        get isPrivateMode() {
            var t;
            return !!(null == (t = e.user) ? void 0 : t.private_mode_enabled)
        },
        get isOwner() {
            var t, n, i;
            return (null == (t = e.user) ? void 0 : t.id) === (null == (n = e.video) || null == (i = n.owner) ? void 0 : i.id)
        }
    };
    return t
}

function er(e, t) {
    let n = "";
    const i = Jo(t),
        o = i.selectDestination(e);
    return i[o] && (n = i[o]), n
}

function tr(e, t, n) {
    (function(e, t) {
        return -1 !== e.indexOf(`?${t}=`) || -1 !== e.indexOf(`&${t}=`)
    })(e, t) || Co(e) && (e += `&${t}=`);
    const i = new RegExp("([?&])" + t + "=.*?(&|$)", "i");
    return e.replace(i, "$1" + t + "=" + n + "$2")
}

function nr(e, t = window.location.href) {
    const n = Jo(e),
        i = -1 !== e.embed.context.indexOf("VideoController"),
        o = -1 !== e.embed.context.indexOf("ClipController");
    if (i) {
        const e = -1 !== t.indexOf(n.svvManageUrl),
            i = -1 !== t.indexOf(n.svvRecipientUrl) || t === n.clipUrl;
        if (e) return Wo.SINGLE_VIDEO_VIEW_MANAGE;
        if (i) return Wo.SINGLE_VIDEO_VIEW_RECIPIENT
    } else if (o) return Wo.CLIP_PAGE;
    return Wo.EMBEDDED_PAGE
}
const ir = e => (Date.now() - e) / 1e3;
let or, rr, ar = function() {
    function e(e) {
        this.player = e, this._configure(), this._setupEventListeners()
    }
    var t = e.prototype;
    return t._configure = function() {
        const e = "PROD" === Si(this.player.config) ? j.Service.FRESNEL_PROD : j.Service.FRESNEL_DEV,
            t = lr("vimeo.web_global", this.player),
            n = new j.Configuration(e, t);
        j.BigPictureClient.configure(n)
    }, t._setupEventListeners = function() {
        this.player.events.on(p.TIME_UPDATE, ({
            currentTime: e
        }) => {
            rr = e
        }), this.player.events.on(Yt._transcriptSessionStarted, ({
            id: e,
            startTime: t,
            defaultLanguage: n
        }) => {
            or = {
                id: e,
                startTime: t,
                defaultLanguage: n
            }
        })
    }, e
}();

function sr(e, t = {}) {
    return e && (Object.keys(t).forEach(n => {
        e.includes(n) || delete t[n]
    }), e.forEach(e => {
        t.hasOwnProperty(e) || (t[e] = null)
    })), t
}

function lr(e, t, n = {}) {
    const i = function(e, t, n = {}) {
        let i = Object.assign({}, function(e, t) {
            var n, i, r, a, s;
            const {
                user: l = {},
                request: c = {},
                video: d = {},
                embed: u = {}
            } = t.config;
            switch (e) {
                case "vimeo.web_global":
                    return {
                        user: {
                            subscription_type: l.account_type || null,
                            is_mod: !!l.mod,
                            session_id: c.session || null,
                            teams: l.team || null,
                            user_id: l.id || null,
                            vuid: pi("vuid") || null,
                            flags: c.flags ? Object.keys(c.flags) : null,
                            is_free_trial: !1
                        },
                        application: {
                            application: "vimeo",
                            vimeo_language: c.lang || "en",
                            product: un(t),
                            build_environment: "production",
                            version: pn()
                        },
                        platform: {
                            device_language: null !== (n = null == (i = window.navigator) ? void 0 : i.language) && void 0 !== n ? n : "",
                            screen: {
                                dpi: screen.pixelDepth,
                                height: screen.height,
                                width: screen.width,
                                size: `${screen.width} x ${screen.height}`
                            },
                            network: null,
                            platform: "web"
                        }
                    };
                case "workflow.copy_video_embed_code":
                    return {
                        hash: d.unlisted_hash,
                        height: d.height,
                        is_video_password_protected: "password" === d.privacy,
                        product: "Workflow",
                        sizing: u.playsinline ? "fixed" : "responsive",
                        video_embed_privacy: d.embed_permission,
                        video_id: `${d.id||""}`,
                        video_privacy: d.privacy,
                        width: d.width
                    };
                case "vimeo.player_performance_measurement":
                    return {
                        module_player: !0,
                        device_type: vn(),
                        browser: Object.keys(o.browser).find(e => o.browser[e]),
                        device_os: mn(),
                        iframed: Po()
                    };
                case "vimeo.chapter_segment_click":
                    return {
                        video_id: d.id,
                        team_owner_id: d.owner.id,
                        is_creator_mode: !!l.owner
                    };
                case "vimeo.click":
                    return {
                        page: nr(t.config)
                    };
                case "vimeo.embedded_transcript_click":
                    return {
                        video_id: d.id,
                        team_owner_id: d.owner.id,
                        total_clip_duration: ht(d.duration, 2),
                        embedded_transcript_session_id: null == (r = or) ? void 0 : r.id,
                        session_duration: ht(ir(null == (a = or) ? void 0 : a.startTime), 2),
                        default_transcript_language: null == (s = or) ? void 0 : s.defaultLanguage,
                        video_timestamp: ht(rr, 2) || 0
                    };
                case "vimeo.closed_captions_click":
                    return {
                        video_id: d.id,
                        video_privacy: d.privacy
                    };
                case "vimeo.multi_audio_track_click":
                    return {
                        video_id: `${d.id||""}`,
                        video_privacy: d.privacy,
                        video_owner_id: `${d.owner.id}`,
                        page: nr(t.config)
                    };
                default:
                    return {}
            }
        }(e, t), n);
        return i = sr(At[e], i), i
    }(e, t, n);
    return new j.Event(e, kt[e] || -1, i)
}

function cr(e, t, n = {}, i = {}) {
    const r = lr(e, t, n),
        a = function(e, t, n = {}) {
            const i = It[e];
            return i ? i.reduce((e, i) => {
                const r = Ot[i],
                    a = n[i] || {},
                    s = function(e, t, n = {}) {
                        let i = Object.assign({}, function(e, t) {
                            var n;
                            const {
                                user: i,
                                request: r,
                                video: a
                            } = t.config;
                            switch (e) {
                                case "team_context":
                                    return {
                                        team_owner_id: i.team_origin_user_id,
                                        team_subscription_type: i.account_type,
                                        team_role: fn(t.config),
                                        team_id: i.team_id
                                    };
                                case "web_context":
                                    return {
                                        location: "player",
                                        page_name: nr(t.config),
                                        referrer: r.referrer
                                    };
                                case "video_context":
                                    return {
                                        video_id: a.id,
                                        title: a.title,
                                        video_privacy: a.privacy,
                                        video_embed_privacy: a.embed_permission,
                                        content_rating: `${null==(n=a.rating)?void 0:n.id}`,
                                        duration: Math.round(a.duration),
                                        resolution: `${a.width}x${a.height}`,
                                        video_height: a.height,
                                        video_width: a.width,
                                        orientation: hn(a.width, a.height)
                                    };
                                case "player_context":
                                    return {
                                        player_session_id: r.session,
                                        total_video_duration: a.duration,
                                        video_timestamp: ht(rr, 2) || 0
                                    };
                                case "action_context":
                                    return {
                                        feature: "player",
                                        action_type: o.touch ? "tap" : "click"
                                    };
                                case "view_context":
                                    return {
                                        feature: "player",
                                        view_type: "impression"
                                    };
                                default:
                                    return {}
                            }
                        }(e, t), n);
                        return i = sr(Rt[e], i), i
                    }(i, t, a);
                return e[i] = {
                    name: i,
                    version: r,
                    fields: s
                }, e
            }, {}) : {}
        }(e, t, i);
    j.BigPictureClient.sendEventWithContexts(r, a)
}

function dr(e) {
    const i = e.events;
    let o, r, a, s = f(),
        c = !1,
        u = !1,
        v = null,
        m = !1,
        h = null,
        g = null;

    function b(t) {
        r !== t && (r = t, e.config.embed.api = t)
    }

    function E() {
        o && o.emit("exitFullscreen"), e.events.halt()
    }

    function C() {
        var t = ht(e.config.request.cookie.volume);
        return 1 === r ? Math.round(100 * t) : t
    }

    function w(t, n, o, r = []) {
        const a = rn[n];
        let s = e.config.embed[a];
        s || n !== en || (s = e.config.embed.color);
        let l = e.config.embed.settings[`force_${a}`];
        if (l || n !== en || (l = e.config.embed.settings.color), l && !e.config.embed.on_site) throw new z(`The creator of the video has chosen to always use ${new J(s).hex}.`, "EmbedSettingsError", o);
        try {
            const o = new J(t);
            i.fire(Mt._changeColor, o.hex, n), r.forEach((function(t) {
                const n = rn[t],
                    i = e.config.embed[n];
                try {
                    new J(i).contrast(o).ratio
                } catch (Ie) {}
            }))
        } catch (Ie) {
            throw new z("The color should be a valid hex value.", "TypeError", o)
        }
    }
    let T = {
        ping: () => e.config.video.id,
        notifyTimingObjectConnect() {
            cr("timing-object-connect", e)
        },
        notifyTimingObjectDisconnect() {
            cr("timing-object-disconnect", e)
        },
        fullscreenchange(t) {
            e.element.classList.toggle("js-player-fullscreen-api", t), t ? (e.events.prependOn(Yt._fullscreenButtonPressed, E), o.listeners.exitFullscreen = !0, e.events.fire(Yt._willEnterFullscreen), e.events.fire(Yt._didEnterFullscreen, !0, !0)) : (e.events.off(Yt._fullscreenButtonPressed, E), o.listeners.exitFullscreen = !1, e.events.fire(Yt._willExitFullscreen), e.events.fire(Yt._didExitFullscreen, !0))
        },
        on(e, t) {
            e in Xt && (e = Xt[e]);
            const n = Ct(Kt);
            if (n.indexOf(e) < 0) throw new z(`“${e}” is not a valid event. Valid events are: ${n.join(", ")}.`, "TypeError", "on");
            t && s.on(e, t), o && (o.listeners[e] = !0), e === Kt.LOADED && R()
        },
        off(e, t) {
            t && s.off(e, t), o && (o.listeners[e] = !1)
        },
        play: () => new Promise((t, n) => {
            i.once(Yt._playResolved, t), i.once(Yt._playRejected, e => {
                n(new z(e.message, e.name, "play"))
            }), ko(e.config, "play"), i.fire(Gt._play), i.fire(Yt._playButtonPressed)
        }),
        destroy() {
            i.fire(Mt._destroy)
        },
        pause() {
            ko(e.config, "pause"), i.fire(Gt._pause), i.fire(Yt._pauseButtonPressed)
        },
        loadVideo(t) {
            const {
                id: n,
                url: i,
                params: o
            } = function(e) {
                if (!e) return {};
                if (it(e)) return {
                    id: parseInt(e, 10),
                    params: {}
                };
                if ("string" == typeof e) return 0 !== e.indexOf("https://") ? {} : {
                    url: e,
                    params: {}
                };
                if ("url" in e) {
                    if (0 !== e.url.indexOf("https://")) return {};
                    const t = e.url;
                    return delete e.url, {
                        url: t,
                        params: e
                    }
                }
                if ("id" in e) {
                    if (!it(e.id)) return {};
                    const t = e.id;
                    return delete e.id, {
                        id: parseInt(t, 10),
                        params: e
                    }
                }
                return {}
            }(t);
            if (!n && !i) throw new z("The video id must be an integer.", "TypeError", "loadVideo");
            if (i && i.match(null === new RegExp(`^https?://${e.config.player_url}/video/([0-9]+)/config`))) throw new z("The config url must be a valid Vimeo url.", "TypeError", "loadVideo");
            return e.loadVideo(i || n, o).then(() => t).catch(() => {
                throw ko(e.config, "loadVideo"), new z("An error occurred loading the video.", "Error", "loadVideo")
            })
        },
        unload() {
            e.config.view !== jt.main && e.config.view !== jt.privateUnlocked && e.config.view !== jt.webinarUnlocked || i.fire(Mt._reset)
        },
        addCuePoint(t, n) {
            if (t = parseFloat(t), isNaN(t) || t < 0 || t > e.config.video.duration) throw new z(`Cue point time must be positive number less than the duration of the video (${ht(e.config.video.duration)}).`, "RangeError", "addCuePoint");
            try {
                const o = e.backbone.addCuePoint(t, n);
                return setTimeout(() => {
                    i.fire(Yt._cuePointAdded, o)
                }, 0), o.id
            } catch (Ie) {
                if ("CuePointsNotSupported" === Ie.name) throw new z("Cue points are not supported in the current player.", "UnsupportedError", "addCuePoint");
                throw new z("Unable to add cue point", "InvalidCuePoint", "addCuePoint")
            }
        },
        removeCuePoint(t) {
            const n = e.backbone.cuePoints.filter(e => e.id === t)[0];
            if (!n) throw new z(`Cue point “${t}” was not found.`, "InvalidCuePoint", "removeCuePoint");
            e.backbone.removeCuePoint(n), setTimeout(() => {
                i.fire(Yt._cuePointRemoved, n)
            }, 0)
        },
        enableTextTrack(t, n = null) {
            let o = ("text_tracks" in e.config.request ? e.config.request.text_tracks : []).map(e => (e.language = e.lang, e));
            if (!o.some(e => e.language.toLowerCase() === t.toLowerCase())) throw new z(`There are no tracks for “${t.toUpperCase()}”.`, "InvalidTrackLanguageError", "enableTextTrack");
            const a = n ? `${t}.${n}` : t,
                {
                    track: s
                } = function(e, t = []) {
                    if (!e || "null" === e || 0 === t.length) return {
                        track: null
                    };
                    const [n, i] = e.split("."), [o] = n.split(/[-_]/), r = n !== o, a = t.filter(e => r && e.language === n || e.language === o).sort((e, t) => {
                        const r = 2 * (e.language === o && e.kind === i) + 2 * (e.language === n) + 1 * (e.kind === i);
                        return 2 * (t.language === o && t.kind === i) + 2 * (t.language === n) + 1 * (t.kind === i) - r
                    });
                    return a.length > 0 ? {
                        track: a[0],
                        exactMatch: a[0].language === n && a[0].kind === i
                    } : {
                        track: null
                    }
                }(a, o);
            if (!s || n && s.kind !== n) throw new z(`There are no ${n} tracks for “${t.toUpperCase()}”.`, "InvalidTrackError", "enableTextTrack");
            return i.fire(Mt._turnCaptionsOn, s.id), r < 3 ? null : new Promise((e, t) => {
                i.once(Yt._captionsChanged, (t, n) => {
                    e({
                        label: t.label,
                        language: t.language,
                        kind: t.kind
                    })
                })
            })
        },
        disableTextTrack() {
            i.fire(Mt._turnCaptionsOff)
        },
        toggleFullscreen(e) {
            const t = {
                not_supported: {
                    name: "UnsupportedError",
                    msg: "Fullscreen is not supported at all or for this element."
                },
                not_enabled: {
                    name: "Error",
                    msg: "The request was made from an iframe that does not allow fullscreen."
                },
                not_allowed: {
                    name: "NotAllowedError",
                    msg: "The request failed, probably because it was not called from a user-initiated event."
                }
            };
            return new Promise((n, o) => {
                if (!Z.element === e) {
                    const r = () => {
                            Z.off("enter", r), n()
                        },
                        a = (n, i) => {
                            Z.off("error", a);
                            const r = t[i] || t.not_supported;
                            o(new z(r.msg, r.name, `${e?"request":"exit"}Fullscreen`))
                        };
                    return Z.on("enter", r), Z.on("error", a), void i.fire(Yt._fullscreenButtonPressed)
                }
                n()
            })
        },
        requestFullscreen: () => T.toggleFullscreen(!0),
        exitFullscreen: () => T.toggleFullscreen(!1),
        get fullscreen() {
            return !!Z.element
        },
        requestPictureInPicture: () => e.backbone.requestPictureInPicture(),
        exitPictureInPicture: () => e.backbone.exitPictureInPicture(),
        remotePlaybackPrompt() {
            try {
                e.backbone.showExternalDisplayPicker()
            } catch (t) {
                throw new z("Remote playback is not available.", "NotFoundError", "remotePlaybackPrompt")
            }
        },
        appendVideoMetadata: i => new Promise((o, r) => {
            try {
                const r = Array.from(e.backbone.chapters);
                (function(e, i, o) {
                    const {
                        duration: r,
                        id: a,
                        privacy: s
                    } = e.video;
                    "disable" !== s && "anybody" !== s && "unlisted" !== s || Lo({
                        hasPart: function(e, i, o, r) {
                            if (i < 30 || 0 === r.length) return [];
                            const a = [];
                            return r.forEach((s, l) => {
                                const {
                                    startTime: c,
                                    text: u
                                } = s;
                                if (c < i) {
                                    var p;
                                    const i = null == r || null == (p = r[l + 1]) ? void 0 : p.startTime,
                                        s = `vimeo_t_${e}`,
                                        [_, v] = o.split("#"),
                                        [m, f] = _.split("?"),
                                        h = v ? `#${v}` : "",
                                        g = d(d({}, t(f)), {}, {
                                            [s]: c
                                        }),
                                        b = `${n(m,g)}${h}`;
                                    a.push({
                                        "@type": "Clip",
                                        name: u,
                                        startOffset: c,
                                        endOffset: i,
                                        url: b
                                    })
                                }
                            }), a.length && (a[a.length - 1].endOffset = i), a
                        }(a, r, i, o)
                    })
                })(e.config, i, r), o()
            } catch (a) {
                r(new z((null == a ? void 0 : a.message) || "", (null == a ? void 0 : a.name) || "", "appendVideoMetadata"))
            }
        }),
        get pictureInPicture() {
            return e.backbone.pictureInPictureActive
        },
        get autopause() {
            return !!e.config.embed.autopause
        },
        set autopause(t) {
            e.config.embed.autopause = !!t
        },
        get chromecasting() {
            return !!Dn.currentSession
        },
        get color() {
            var t;
            return e.config.embed.color_two ? e.config.embed.color_two.replace("#", "") : null == (t = e.config.embed.color) ? void 0 : t.replace("#", "")
        },
        get colorOne() {
            var t;
            return null == (t = e.config.embed.color_one) ? void 0 : t.replace("#", "")
        },
        get colorTwo() {
            var t;
            return e.config.embed.color_two ? e.config.embed.color_two.replace("#", "") : null == (t = e.config.embed.color) ? void 0 : t.replace("#", "")
        },
        get colorThree() {
            var t;
            return null == (t = e.config.embed.color_three) ? void 0 : t.replace("#", "")
        },
        get colorFour() {
            var t;
            return null == (t = e.config.embed.color_four) ? void 0 : t.replace("#", "")
        },
        set color(e) {
            w(e, en, "setColor")
        },
        set colorOne(e) {
            w(e, Jt, "setColorOne", [en, tn])
        },
        set colorTwo(e) {
            w(e, en, "setColorTwo", [Jt])
        },
        set colorThree(e) {
            w(e, tn, "setColorThree", [Jt])
        },
        set colorFour(e) {
            w(e, nn, "setColorFour")
        },
        get cuePoints() {
            return e.backbone.cuePoints.map(e => ({
                time: e.time,
                data: e.data,
                id: e.id
            }))
        },
        get currentTime() {
            return e.currentTime
        },
        set currentTime(t) {
            if (t = parseFloat(t), isNaN(t) || t < 0 || t > e.config.video.duration) throw new z(`Seconds must be a positive number less than the duration of the video (${ht(e.config.video.duration)}).`, "RangeError", "setCurrentTime");
            return i.fire(Gt._seek), i.fire(Mt._seek, t), i.fire(Yt._mousedOver), r < 3 ? null : new Promise((e, t) => {
                i.once(p.SEEKED, ({
                    currentTime: t
                }) => {
                    e(t)
                })
            })
        },
        get duration() {
            return ht(e.config.video.duration)
        },
        get ended() {
            return !!e.backbone.ended
        },
        get loop() {
            return !!e.config.embed.loop
        },
        set loop(e) {
            i.fire(Mt._changeLoop, e)
        },
        set muted(e) {
            i.fire(Mt._changeMuted, e, !0)
        },
        get muted() {
            return e.backbone.muted || 0 === C()
        },
        get paused() {
            return !(e.backbone && "paused" in e.backbone && !e.backbone.paused)
        },
        get buffered() {
            return Ao(e.backbone.buffered)
        },
        get played() {
            return Ao(e.backbone.played)
        },
        get seekable() {
            return Ao(e.backbone.seekable)
        },
        get seeking() {
            return e.backbone.seeking
        },
        get playbackRate() {
            return e.backbone ? e.backbone.playbackRate : 1
        },
        set playbackRate(t) {
            if (!e.config.embed.settings.speed) throw new z("Setting the playback rate is not enabled for this video.", "Error", "setPlaybackRate");
            if (isNaN(t) || t > 2) throw new z("Playback rate should be a number below or equal to 2.", "RangeError", "setPlaybackRate");
            i.fire(Mt._changePlaybackRate, t)
        },
        get remotePlaybackAvailability() {
            return e.backbone.externalDisplayAvailable
        },
        get remotePlaybackState() {
            return e.backbone.externalDisplayActive ? "connected" : "disconnected"
        },
        get textTracks() {
            return (e.backbone ? e.backbone.video.textTracks : []).map(e => ({
                label: e.label,
                language: e.language,
                kind: e.kind,
                mode: e === h ? "showing" : "disabled"
            }))
        },
        get videoEmbedCode() {
            return e.config.video.embed_code
        },
        get videoHeight() {
            return e.backbone.videoHeight || e.config.video.height
        },
        get videoId() {
            return e.config.video.id
        },
        get videoTitle() {
            return e.config.video.title
        },
        get videoWidth() {
            return e.backbone.videoWidth || e.config.video.width
        },
        get videoUrl() {
            if (!e.config.video.url) throw new z("The URL is not available because of the video’s privacy settings.", "PrivacyError", "getVideoUrl");
            return e.config.video.url
        },
        get volume() {
            return C()
        },
        set volume(t) {
            if (t = parseFloat(t), 1 === r && (t /= 100), isNaN(t) || t < 0 || t > 1) throw new z("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
            g = t, e.backbone.supportsSettingVolume || 0 !== t ? i.fire(Mt._changeVolume, t, !0) : i.fire(Mt._changeMuted, !0, !0)
        },
        get qualities() {
            return e.backbone.qualities
        },
        get quality() {
            return e.backbone.quality
        },
        set quality(t) {
            if (!wo(e.config.video.owner)) throw new z("Setting the quality is not enabled for this video.", "Error", "setQuality");
            t = t.toLowerCase();
            const n = e.backbone.qualities.map(e => e.id);
            if (!n.includes(t)) throw new z(`“${t}” is not a valid quality. Valid qualities are: ${n.join(", ")}.`, "TypeError", "on");
            e.backbone.quality = t
        },
        _loadVideo: (t, n) => e.loadVideo(t, n),
        get _like() {
            return !!e.config.user.liked
        },
        set _like(t) {
            if (e.config.embed.on_site) {
                if (e.config.user.liked === t) return;
                i.fire(Yt._likeButtonPressed, t)
            }
        },
        get _watchLater() {
            return !!e.config.user.watch_later
        },
        set _watchLater(t) {
            if (e.config.embed.on_site) {
                if (e.config.user.watch_later === t) return;
                i.fire(Yt._watchLaterButtonPressed, t)
            }
        },
        get currentChapter() {
            const t = e.backbone.currentChapterID;
            if (!t) return null;
            const n = Array.from(e.backbone.chapters),
                i = n.findIndex(e => t === e.id);
            return {
                startTime: n[i].startTime,
                title: n[i].text,
                index: i + 1
            }
        },
        get chapters() {
            return Array.from(e.backbone.chapters).map((e, t) => ({
                startTime: e.startTime,
                title: e.text,
                index: t + 1
            }))
        },
        _addChapter(t, n) {
            if (t = parseFloat(t), isNaN(t) || t < 0 || t > e.config.video.duration) throw new z(`Chapter timecode must be positive number less than the duration of the video (${ht(e.config.video.duration)}).`, "RangeError", "_addChapter");
            try {
                e.backbone.addChapter(t, n)
            } catch (Ie) {
                if ("ChaptersNotSupported" === Ie.name) throw new z(Ie.message, "UnsupportedError", "_addChapter");
                throw new z("Unable to add chapter", "InvalidChapter", "_addChapter")
            }
        },
        _removeChapter(t) {
            let n;
            try {
                n = e.backbone.chapters.getCueById(t)
            } catch (Ie) {
                throw new z("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter")
            }
            if (!n) throw new z("Chapter was not found.", "InvalidChapter", "_removeChapter");
            try {
                e.backbone.removeChapter(n)
            } catch (Ie) {
                if ("ChaptersNotSupported" === Ie.name) throw new z("Chapters are not supported in this browser.", "UnsupportedError", "_removeChapter");
                throw new z("Unable to remove chapter", "InvalidChapter", "_removeChapter")
            }
        },
        _addCard(e) {
            i.fire(Mt._addCard, e)
        },
        _removeCard(e) {
            i.fire(Mt._removeCard, e)
        },
        _setOutro(t, n) {
            e.config.embed.outro !== t ? (i.fire(Mt._hideOutro), setTimeout(() => {
                e.config.embed.outro = t, i.fire(Mt._showOutro, t, n)
            }, 400)) : i.fire(Mt._showOutro, t, n)
        },
        _hideOutro() {
            i.fire(Mt._hideOutro)
        },
        _setEmailCapture(t) {
            if (!t) return void T._unsetEmailCapture();
            let n = t.customFields ? e.config.embed.email_capture_form || {} : e.config.embed.email || {};
            n.position = t.position.toLowerCase(), n.timecode = t.timecode, t.nohide = !0, t.noblur = !0, t.nofocus = l(t, "nofocus", !0), T._showOverlay("email-capture", t)
        },
        _updateEmailCapture(t) {
            var n;
            t.custom_fields ? ($(null == (n = e.config.video.webinar) ? void 0 : n.registration_form) || (e.config.video.webinar.registration_form = t), i.fire(Mt._updateEmailCapture, t)) : this._setEmailCapture(t)
        },
        _updateWebinarStartTime(t) {
            e.config.video.webinar && (e.config.video.webinar.scheduled_start_time = t), i.fire(Mt._updateWebinarStartTime, t)
        },
        _setActiveEmailCapturePage(e) {
            i.fire(Mt._setActivePage, e)
        },
        _unsetEmailCapture() {
            e.config.embed.outro && (i.fire(Mt._hideOutro), delete e.config.embed.outro), e.config.embed.email && (i.fire(Mt._hideOverlay, {
                unmakeModal: !0
            }), delete e.config.embed.email)
        },
        _hideOverlay(e) {
            i.fire(Mt._hideOverlay, {
                name: e,
                unmakeModal: !0
            })
        },
        _showOverlay(e, t) {
            i.fire(Mt._showOverlay, e, t)
        },
        _fireEvent(...e) {
            i.fire.apply(null, e)
        },
        _setEmbedEditor(t) {
            e.config.embed.editor = !!t
        },
        _setLiveEventSettings(t) {
            e.config.embed.on_site && e.config.video.live_event && (Object.keys(t).forEach(n => {
                let o = t[n];
                o = "object" == typeof o ? o : Number(o), e.config.video.live_event.settings[n] = o, i.fire(Yt._liveEventSettingsChanged, n, o), i.fire(I.SETTINGS_UPDATED, n, o)
            }), i.fire(Yt._configChanged, !1, e.config))
        },
        _setEmbedSettings(t) {
            e.config.embed.on_site && (Object.keys(t).forEach(n => {
                let o = t[n];
                o = "object" == typeof o ? o : Number(o), "badge" === n && (o ? o = a : a = e.config.embed.settings.badge), e.config.embed.settings[n] = o, i.fire(Yt._embedSettingChanged, n, o)
            }), i.fire(Yt._configChanged, !1, e.config))
        },
        _setEmbedSetting(t, n) {
            e.config.embed.on_site && (n = "object" == typeof n ? n : Number(n), "badge" === t && (n ? n = a : a = e.config.embed.settings.badge), e.config.embed.settings[t] = n, i.fire(Yt._embedSettingChanged, t, n), i.fire(Yt._configChanged, !1, e.config))
        },
        _setOTTVideoMetadata(t) {
            e.config.request.flags.ott && (e.ottVideoMetadata = t, i.fire(Yt._ottMetadataSet, t))
        },
        _toggleDebugPanel() {
            i.fire(Yt._debugButtonPressed)
        },
        _overrideControlbarBehavior(e) {
            i.fire(Mt._overrideControlbarBehavior, e)
        },
        _setControlbarVisibility(e) {
            i.fire(Mt._setControlsVisibility, e)
        },
        get cameraProps() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new z("Camera props are not available in the current player.", "UnsupportedError", "getCameraProps");
            return t.cameraProps
        },
        set cameraProps(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new z("Camera props are not available in the current player.", "UnsupportedError", "setCameraProps");
            try {
                n.cameraProps = t
            } catch (Ie) {
                throw new z(Ie.message, Ie.name, "setCameraProps")
            }
        },
        get _fieldOfView() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new z("Field of view is not available in the current player.", "UnsupportedError", "getFieldOfView");
            return t.fieldOfView
        },
        set _fieldOfView(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new z("Field of view is not available in the current player.", "UnsupportedError", "setFieldOfView");
            n.fieldOfView = t
        },
        get _coordinates() {
            const t = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !t) throw new z("Coordinates are not available in the current player.", "UnsupportedError", "getCoordinates");
            return t.currentCoordinates
        },
        set _coordinates(t) {
            const n = e.backbone.getEffectByName("ThreeSixtyEffect");
            if (e.backbone && !n) throw new z("Coordinates are not available in the current player.", "UnsupportedError", "setCoordinates");
            try {
                n.currentCoordinates = t
            } catch (Ie) {
                throw new z(Ie.message, "RangeError", "setCoordinates")
            }
        },
        _setChromecastUI(e) {
            const t = Dn.currentSession;
            t && Q(e) && t.sendMessage("urn:x-cast:com.vimeo.cast.media", {
                action: "setCustomUIStyles",
                value: e
            })
        },
        get _controlSelectors() {
            return {
                details: ".vp-title",
                sidedock: ".vp-sidedock",
                controls: ".vp-controls",
                customLogo: ".custom-logo"
            }
        },
        get _controlAreas() {
            const t = e.element.offsetWidth,
                n = e.element.offsetHeight,
                i = {
                    get details() {
                        const e = ct(document.querySelector(".headers > h1")),
                            t = ct(document.querySelector(".sub-title")),
                            n = ct(document.querySelector(".vp-portrait")),
                            i = Math.max(e.width, t.width) + n.width,
                            o = Math.max(n.height, e.height + t.height);
                        return {
                            top: 10,
                            left: 10,
                            width: Math.max(200, i),
                            height: Math.max(60, o)
                        }
                    },
                    get sidedock() {
                        return {
                            top: 10,
                            left: t - 10 - 36,
                            width: 36,
                            height: 118
                        }
                    },
                    get controls() {
                        const e = i.customLogo,
                            o = Math.max(60, e.height);
                        return {
                            height: o,
                            top: n - 10 - o,
                            left: 10,
                            width: t - 20
                        }
                    },
                    get customLogo() {
                        const e = document.querySelector(".custom-logo"),
                            i = e ? ct(e) : {
                                width: 0,
                                height: 0
                            };
                        return {
                            top: n - 10 - i.height,
                            left: t - 10 - i.width,
                            width: i.width,
                            height: i.height
                        }
                    }
                };
            return i
        },
        set _lowLatencyMode(t) {
            e.backbone.lowLatencyMode = t
        },
        get _lowLatencyMode() {
            return e.backbone.lowLatencyMode
        },
        get _presentationDelay() {
            return e.backbone.presentationDelay
        },
        set _presentationDelay(t) {
            e.backbone.presentationDelay = t
        },
        get _liveLatency() {
            return e.backbone.latency
        },
        get _downloadSpeed() {
            return e.backbone.downloadSpeed
        },
        get _backbone() {
            return e.backbone
        },
        addEventListener(...e) {
            T.on.apply(T, e)
        },
        removeEventListener(...e) {
            T.off.apply(T, e)
        },
        seekTo(e) {
            T.currentTime = e
        },
        changeColor(e) {
            T.color = e
        }
    };
    const L = {
        addCuePoint: ({
            time: e,
            data: t
        }) => T.addCuePoint(e, t),
        enableTextTrack({
            language: e,
            kind: t = null
        }) {
            T.enableTextTrack(e, t)
        }
    };

    function S(e, t) {
        o && o.emit(e, t), s.fire(e, t)
    }
    const k = (e, t) => (...n) => {
        const i = t ? t.apply(void 0, n) : void 0;
        S(e, i)
    };

    function A({
        currentTime: e,
        duration: t,
        timeProgress: n
    }) {
        return {
            seconds: ht(e),
            percent: ht(n),
            duration: ht(t)
        }
    }

    function P(e) {
        return {
            playbackRate: e
        }
    }

    function R() {
        S(Kt.LOADED, m ? null : (m = !0, {
            id: e.config.video.id
        }))
    }

    function N(e) {
        return v = e, M(function(e) {
            switch (e) {
                case "BrowserNotSupported":
                case "FilesNotPlayable":
                case "MediaSrcNotSupportedError":
                    return new z("This video is not supported in this browser.", "NotSupportedError");
                case "FileError":
                    return new z("There was an error loading the files for this video.", "FileError")
            }
            return new z("An error occurred during playback.", "PlaybackError")
        }(v))
    }

    function M(e) {
        let t = {
            message: "An error occurred.",
            name: "Error",
            method: e.source
        };
        return "MessageApiError" === e.constructorName && (t = {
            message: e.message,
            name: e.name,
            method: e.source
        }), t
    }
    return function() {
            if (e.config.embed.on_site) return;
            b(e.config.embed.api);
            const t = e.config.request.referrer;
            o = new K(t), o.listeners = Ct(Kt).reduce((e, t) => d(d({}, e), {}, {
                [t]: !1
            }), {}), o.listeners[Kt.READY] = !0, o.listeners[Kt.ERROR] = !0, o.filter(e => o.listeners[e])
        }(),
        function() {
            if (!o) return;
            const t = ro({}, T, L);
            o.extendMethods(t), o.hooks({
                logError(e) {
                    S(Kt.ERROR, M(e))
                },
                parseMessage(e) {
                    if (!e || "" === e) return {};
                    if (Q(e)) return b(3), e;
                    try {
                        const t = JSON.parse(e);
                        return b(2), t
                    } catch (t) {
                        return b(null), S(Kt.ERROR, "The Vimeo Froogaloop v1 API is no longer supported.\n Please follow the upgrade instructions here: https://goo.gl/mueGRR"), {}
                    }
                },
                buildMessage(t) {
                    var n;
                    (null == (n = e.config.embed) ? void 0 : n.player_id) && (t.player_id = e.config.embed.player_id);
                    try {
                        2 === r && (t = function(e) {
                            if (e.event) {
                                for (const t in Xt)
                                    if (Xt[t] === e.event) {
                                        e.event = t;
                                        break
                                    }
                                "cuechange" === e.event && (e.data.text = e.data.cues[0].text, e.data.html = e.data.cues[0].html, delete e.data.cues)
                            }
                            return JSON.stringify(e)
                        }(t)), Q(t) && "ready" === t.event && (t = JSON.stringify(t))
                    } catch (Ie) {}
                    return t
                }
            })
        }(), i.on(_.BUFFER_STARTED, k(Kt.BUFFER_START)), i.on(_.BUFFER_ENDED, k(Kt.BUFFER_END)), i.on(_.CUE_POINT, k(Kt.CUEPOINT, (function({
            time: e,
            data: t,
            id: n
        }) {
            return {
                time: e,
                data: t,
                id: n
            }
        }))), i.on(y, k(Kt.CUE_CHANGE, (function(e, t = []) {
            const {
                language: n = null,
                label: i = null,
                kind: o = null
            } = e || {};
            return {
                label: i,
                language: n,
                kind: o,
                cues: t
            }
        }))), i.on(Yt._chapterChanged, k(Kt.CHAPTER_CHANGE, (function(t) {
            const n = Array.from(e.backbone.chapters).findIndex(e => t === e.id);
            return n >= 0 ? {
                startTime: e.backbone.chapters[n].startTime,
                title: e.backbone.chapters[n].text,
                index: n + 1
            } : null
        }))), i.on(Yt._ended, k(Kt.ENDED, (function() {
            return u = !1, {
                seconds: ht(e.config.video.duration),
                percent: 1,
                duration: ht(e.config.video.duration)
            }
        }))), i.on(Yt._paused, k(Kt.PAUSE, (function(t) {
            return u = !1, {
                seconds: ht(t),
                percent: ht(t / e.config.video.duration),
                duration: ht(e.config.video.duration)
            }
        }))), i.on(Yt._playbackRateChanged, k(Kt.PLAYBACK_RATE_CHANGE, P)), i.on(Yt._playbackRateChanged, k(Kt.RATE_CHANGE, P)), i.on(Yt._captionsChanged, k(Kt.TEXT_TRACK_CHANGE, (function(e) {
            h = e;
            const {
                language: t = null,
                label: n = null,
                kind: i = null
            } = e || {};
            return {
                label: n,
                language: t,
                kind: i
            }
        }))), i.on(Yt._volumeChanged, k(Kt.VOLUME_CHANGE, (function(e) {
            return {
                volume: ht(e)
            }
        }))), i.on(Yt._controlBarVisibilityChanged, k(Kt.CONTROL_BAR_VISIBILITY_CHANGED, (function(e) {
            return {
                visible: e
            }
        }))), i.on(Yt._configChanged, (function(t) {
            g && setTimeout((function() {
                e.backbone.supportsSettingVolume || 0 !== g ? i.fire(Mt._changeVolume, g, !0) : i.fire(Mt._changeMuted, !0, !0)
            }), 0), t && R()
        })), i.on(Yt._error, (function(e) {
            const t = N(e);
            c && S(Kt.ERROR, t)
        })), i.on(Yt._didEnterFullscreen, k(Kt.FULLSCREENCHANGE, (function() {
            return {
                fullscreen: !0
            }
        }))), i.on(Yt._didExitFullscreen, k(Kt.FULLSCREENCHANGE, (function() {
            return {
                fullscreen: !1
            }
        }))), i.on(Yt._qualityChanged, k(Kt.QUALITY_CHANGE, (function(e) {
            return {
                quality: e
            }
        }))), i.on(Yt._adStarted, k(Kt.AD_STARTED)), i.on(Yt._adComplete, k(Kt.AD_COMPLETED)), i.on(Yt._adError, k(Kt.AD_ERROR)), i.on(Yt._adSkipped, k(Kt.AD_SKIPPED)), i.on(Yt._allAdsCompleted, k(Kt.AD_ALL_COMPLETED)), i.on(Yt._adClicked, k(Kt.AD_CLICKED)), i.on(Yt._interactiveHotspotClicked, k(Kt.INTERACTIVE_HOTSPOT_CLICKED, (function({
            hotspotId: e,
            customPayloadData: t,
            actionPreference: n,
            currentTime: i,
            action: o
        }) {
            return {
                hotspotId: e,
                customPayloadData: t,
                actionPreference: n,
                currentTime: i,
                action: o
            }
        }))), i.on(Yt._interactiveOverlayPanelClicked, k(Kt.INTERACTIVE_OVERLAY_PANEL_CLICKED, (function({
            action: e,
            actionPreference: t,
            currentTime: n,
            customPayloadData: i,
            overlayId: o,
            panelId: r
        }) {
            return {
                action: e,
                actionPreference: t,
                currentTime: n,
                customPayloadData: i,
                overlayId: o,
                panelId: r
            }
        }))), i.once(Yt._ready, (function() {
            c = !0, S(Kt.READY), v && (S(Kt.ERROR, N(v)), v = null)
        })), i.on(I.EVENT_ENDED, k(Kt.LIVE_EVENT_ENDED)), i.on(I.EVENT_STARTED, k(Kt.LIVE_EVENT_STARTED)), i.on(I.STREAM_OFFLINE, k(Kt.LIVE_STREAM_OFFLINE)), i.on(I.STREAM_ONLINE, k(Kt.LIVE_STREAM_ONLINE)), i.on(O.CAMERA_CHANGE, k(Kt.CAMERA_CHANGE, (function(e) {
            return e
        }))), i.on(O.MOTION_END, k(Kt.MOTION_END)), i.on(O.MOTION_START, k(Kt.MOTION_START)), i.on(O.WEBVR_HARDWARE_AVAILABLE, k(Kt.WEBVR_HARDWARE_AVAILABLE)), i.on(O.WEBVR_ENTER, k(Kt.ENTER_WEBVR)), i.on(O.WEBVR_EXIT, k(Kt.EXIT_WEBVR)), i.on(O.SPATIAL_UNSUPPORTED, k(Kt.SPATIAL_UNSUPPORTED)), i.on(p.PLAY, k(Kt.PLAY, (function(t) {
            return u ? null : (u = !0, {
                seconds: ht(t),
                percent: ht(t / e.config.video.duration),
                duration: ht(e.config.video.duration)
            })
        }))), i.on(p.PLAYING, k(Kt.PLAYING, (function() {
            return u ? {
                seconds: ht(e.currentTime),
                percent: ht(e.currentTime / e.config.video.duration),
                duration: ht(e.config.video.duration)
            } : null
        }))), i.on(p.PROGRESS, k(Kt.PROGRESS, (function({
            loaded: e,
            duration: t,
            loadProgress: n
        }) {
            let i = {
                seconds: ht(e),
                percent: ht(n),
                duration: ht(t)
            };
            return r < 3 && (i.bytesLoaded = -1, i.bytesTotal = -1), i
        }))), i.on(p.SEEKING, k(Kt.SEEKING, A)), i.on(p.SEEKED, k(Kt.SEEKED, A)), i.on(p.TIME_UPDATE, k(Kt.TIME_UPDATE, (function({
            currentTime: e,
            duration: t,
            timeProgress: n
        }) {
            return {
                seconds: ht(e),
                percent: ht(n),
                duration: ht(t)
            }
        }))), i.on(p.LOADED_METADATA, k(Kt.LOADED_METADATA)), i.on(p.DURATION_CHANGE, k(Kt.DURATION_CHANGE, (function(t) {
            return {
                duration: e.backbone.duration
            }
        }))), i.on(p.WAITING, k(Kt.WAITING)), i.on(p.LOADED_DATA, k(Kt.LOADED_DATA)), i.on(p.LOAD_START, k(Kt.LOAD_START)), i.on(p.RESIZE, k(Kt.RESIZE, (function() {
            return {
                videoWidth: e.backbone.videoWidth,
                videoHeight: e.backbone.videoHeight
            }
        }))), i.on(p.ENTER_PICTURE_IN_PICTURE, k(Kt.ENTER_PICTURE_IN_PICTURE)), i.on(p.LEAVE_PICTURE_IN_PICTURE, k(Kt.LEAVE_PICTURE_IN_PICTURE)), i.on(Nn.connected, k(Kt.CHROMECAST_CONNECTED)), i.on(Yt._airPlayAvailable, k(Kt.REMOTE_PLAYBACK_AVAILABILITY_CHANGE, () => !0)), i.on(Yt._airPlayNotAvailable, k(Kt.REMOTE_PLAYBACK_AVAILABILITY_CHANGE, () => !1)), i.on(Yt._airPlayActivated, k(Kt.REMOTE_PLAYBACK_CONNECT)), i.on(Yt._airPlayDeactivated, k(Kt.REMOTE_PLAYBACK_DISCONNECT)), i.on(Mt._reset, (function() {
            v = null, m = !1
        })), e.doNotTrackEnabled || (i.on(Yt._emailCaptureSuccess, () => {
            S(Kt.EMAIL_CAPTURE)
        }), i.on(Yt._emailCaptureFailure, () => {
            S(Kt.EMAIL_CAPTURE_FAILED)
        })), i.on(Yt._spaceChanged, (function(e = {}) {
            o && (o.listeners[Kt.SPACE_CHANGE] = !0, S(Kt.SPACE_CHANGE, e))
        })), i.fire(Yt._apiModuleReady), T
}
let ur = function() {
    function e(e) {
        this.alertTextElement = e.querySelector(".vp-text-alert-wrapper"), this.alertContentElement = this.alertTextElement.querySelector(".vp-alert-text")
    }
    var t = e.prototype;
    return t.show = function(e) {
        this.alertContentElement.innerHTML = e, this.alertContentElement.classList.remove("hidden"), this.alertTextElement.classList.remove("hidden")
    }, t.hide = function() {
        this.alertContentElement.classList.add("hidden"), this.alertTextElement.classList.add("hidden")
    }, e
}();
const pr = d(d({}, ee), {}, {
    CAPTIONS_ENABLED: "captions-enabled",
    CAPTIONS_DISABLED: "captions-disabled",
    CHROMECAST_CONNECTED: "chromecast-connected",
    CHROMECAST_DISCONNECTED: "chromecast-disconnected",
    DRM_KEY_SWITCH: "drm-key-switch",
    MEDIASESSION_PLAY: "mediasession-play",
    MEDIASESSION_PAUSE: "mediasession-pause",
    MEDIASESSION_SEEK_FORWARD: "mediasession-seekforward",
    MEDIASESSION_SEEK_BACKWARD: "mediasession-seekbackward",
    SLATE_DISPLAYED: "slate-displayed",
    CLICK: "click",
    VIDEO_DURATION_MISMATCH: "video-duration-mismatch",
    VIDEO_FULLSCREEN_CHANGE: "video-fullscreen-change",
    VIDEO_MANIFEST_LOADED: "video-manifest-loaded",
    VIDEO_MANIFEST_TIMEOUT: "video-manifest-timeout",
    VIDEO_PICTURE_IN_PICTURE_CHANGE: "video-picture-in-picture-change",
    VIDEO_PLAYBACK_RATE_CHANGED: "video-playback-rate-changed",
    VIDEO_STREAM_CHANGE: "video-stream-change",
    VIDEO_SWITCH_BACK_TO_AUTO: "video-switch-back-to-auto",
    VIDEO_SWITCH_FROM_AUTO: "video-switch-from-auto",
    DOWNLOAD_TIMEOUT: "video-download-timeout",
    AD_BUFFERING: "ad-buffering",
    AD_COMPLETE: "ad-complete",
    AD_CLICKED: "ad-clicked",
    AD_ERROR: "ad-error",
    AD_PAUSED: "ad-paused",
    AD_RESUMED: "ad-resumed",
    AD_STARTED: "ad-started",
    AD_SKIPPED: "ad-skipped",
    ENTER_WEBVR: "enter-webvr",
    EXIT_WEBVR: "exit-webvr",
    WEBINAR_REGISTRANT_BLOCKED: "webinar-registrant-blocked",
    WEBINAR_REGISTRANT_UNBLOCKED: "webinar-registrant-unblocked"
});

function _r(e) {
    return wt("av01", e) ? "AV1" : wt("dvh1", e) ? "HEVC_DVH1" : wt("hvc1", e) ? "HEVC" : wt("avc1", e) ? "AVC" : null
}

function vr(e) {
    return wt("mp4a", e) ? "AAC" : wt("opus", e) ? "OPUS" : null
}

function mr(e, t) {
    var n, i;
    return (null == e || null == (n = e.request) || null == (i = n.ab_tests) ? void 0 : i[t]) ? e.request.ab_tests[t] : {}
}
const fr = (e, t) => e.split("/").slice(4).join("/"),
    hr = e => e.split("/")[4],
    gr = (e, t) => function(n) {
        try {
            const {
                type: i,
                url: o
            } = n;
            return i && o && o.includes(e) && (i === te.MANIFEST || i === te.SEGMENT) ? ne(n, t) : null
        } catch (Ie) {
            return Promise.reject(Ie)
        }
    },
    br = () => {
        const e = l(window, "Streamroot.instances[0].stats", {}),
            t = l(e, "realtime.dnaSources", {}) || 0;
        return {
            ecdnBytesByCdn: l(e, "currentContent.cdnDownload", 0),
            ecdnBytesPeered: l(e, "currentContent.dnaDownload", 1),
            ecdnPeers: t
        }
    },
    yr = () => {
        var e;
        const t = l(window, "_hiveStats", {
                cdnResponseBytes: 0,
                p2pResponseBytes: 0,
                partners: {}
            }),
            {
                cdnResponseBytes: n,
                p2pResponseBytes: i,
                partners: o
            } = t;
        return {
            ecdnBytesByCdn: n,
            ecdnBytesPeered: i,
            ecdnPeers: (null !== (e = Object.keys(o)) && void 0 !== e ? e : []).length
        }
    },
    Er = () => {
        const e = l(window, "_kollectiveStats", {
                originBytes: 0,
                ecdnBytes: 0,
                currentPeerConnections: 0
            }),
            {
                originBytes: t,
                ecdnBytes: n,
                currentPeerConnections: i
            } = e;
        return {
            ecdnBytesByCdn: t,
            ecdnBytesPeered: n,
            ecdnPeers: i
        }
    },
    Cr = e => {
        const t = {
            streamroot: br,
            hive: yr,
            kollective: Er
        };
        return t[e] ? t[e]() : {
            ecdnBytesByCdn: 0,
            ecdnBytesPeered: 0,
            ecdnPeers: 0
        }
    };

function wr(t, n, i, a) {
    const s = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (Ie) {
                return Promise.reject(Ie)
            }
        }
    }((function({
        identifier: e,
        data: {
            request: n,
            response: i,
            extraContext: o
        }
    }) {
        const a = i.headers;
        return function(e, t, n) {
            return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
        }(i.arrayBuffer(), (function(s) {
            if ("video" === e.type) {
                const a = t.backbone.representations.reverse(),
                    l = a[e.stream];
                if (!l) return;
                const c = function(e, n, i, o, r, a) {
                    const s = i.headers;
                    delete s[""];
                    let l = {};
                    Object.keys(s).forEach(e => {
                        const t = s[e],
                            n = e.replace(f, "_");
                        l[n] = t
                    });
                    let c = a.slice();
                    return c.forEach(e => {
                        e.profile = String(e.profile || "") || null, e.id = String(e.id || "") || null
                    }), {
                        host: le(n.data.url),
                        product: un(t),
                        duration: n.data.duration,
                        size: o.byteLength,
                        index: e.segment,
                        session_id: t.config.request.session,
                        profile_id: String(r.profile || "") || null,
                        quality: r.quality,
                        streams: c,
                        clip_id: t.config.video.id,
                        headers: l,
                        buffered: ht(re(t.backbone.currentTime, t.backbone.buffered), 2),
                        request_id: n.data.uuid ? n.data.uuid : ""
                    }
                }(e, n, i, s, l, a);
                let d = c;
                o && (d = ce({
                    extraContext: o
                }, c)), t.events.fire(Yt._logMetric, {
                    name: pr.CHUNK_DOWNLOADED,
                    data: d
                });
                const u = {
                    ak_reference_id: c.headers.akamai_reference_id || null,
                    akamai_edge_ip: c.headers.akamai_edge_ip || null,
                    content_length: c.headers.content_length || null,
                    content_type: c.headers.content_type || null,
                    x_vim_cachebc: c.headers.x_vim_cachebc || null,
                    x_cache: c.headers.x_cache || null,
                    x_cache_hits: c.headers.x_cache_hits || null
                };
                c.headers = u, mr(t.config, "chunk_logging").group && t.config.request.urls.fresnel_chunk_url && function(e, t, n) {
                    const i = Date.now(),
                        o = [{
                            uuid: gt(),
                            created_at: i,
                            event: {
                                name: "chunk_downloads",
                                version: 5,
                                ts_ms: i,
                                fields: t
                            },
                            tracker: {
                                name: "vimeo-player",
                                version: n
                            }
                        }];
                    new r(e).logRequestPromiseWithUrl(e, JSON.stringify(o), !0)
                }(t.config.request.urls.fresnel_chunk_url + "?beacon=1", c, Li(t.config)), J += s.byteLength
            }
            "x-akamai-request-id" in a && (W = a["x-akamai-request-id"]), "ak-reference-id" in a && (Y = a["ak-reference-id"]),
                function({
                    headers: e,
                    url: t
                }) {
                    if ("x-cache-hits" in e) {
                        let n = e["x-cache-hits"].match(/(0|1)(?:, (0|1))?/);
                        null !== n && (G = {
                            url: t,
                            servedBy: e["x-served-by"],
                            edge: n[1] ? !!parseInt(n[1], 10) : null,
                            tier1: n[2] ? !!parseInt(n[2], 10) : null,
                            tier2: null
                        })
                    } else if ("x-vim-cachebc" in e) {
                        let n = e["x-vim-cachebc"].match(/E:(m|h)(?:,TD0:(m|h))?(?:,TD1:(m|h))?(?:,TD2:(m|h))?/);
                        if (null !== n) {
                            G = {
                                url: t,
                                edge: n[1] ? n[1] : null,
                                tier1: n[2] ? n[2] : null,
                                tier2: n[3] ? n[3] : null
                            };
                            for (let e in G) "edge" !== e && "tier1" !== e && "tier2" !== e || ("h" === G[e] ? G[e] = !0 : "m" === G[e] && (G[e] = !1))
                        }
                    }
                }(i);
            let l = {};
            W && (l.akamai_request_id = W), Y && (l.akamai_reference_id = Y), l.manifest_load_durations = t.backbone.manifestLoadDurations, l.successful_segment_count = t.backbone.successfulSegments.length, l.failed_segment_count = t.backbone.failedSegments.length, j = l
        }))
    }));
    let c, d, v;
    const m = new WeakMap,
        f = new RegExp("-", "g");
    let h, g = null,
        b = null,
        y = !1,
        E = !1,
        C = !1,
        w = "auto",
        T = {},
        L = {},
        k = null,
        A = null,
        P = null,
        M = [],
        D = null,
        x = {},
        B = !1,
        V = !1,
        U = !1,
        F = 0,
        H = 0,
        q = 0,
        W = null,
        Y = null,
        G = null,
        z = !1,
        j = null,
        K = null,
        X = null,
        Z = !1,
        Q = !1,
        J = 0;

    function ee() {
        const e = m.get(t.backbone.videoElement);
        e ? ({
            _videoMonitor: d,
            _metricsBufferTracker: v
        } = e) : (v = new ae, d = new oe(t.backbone.videoElement, ne), te(), m.set(t.backbone.videoElement, {
            _videoMonitor: d,
            _metricsBufferTracker: v
        }))
    }

    function te() {
        const e = v;
        d.customizeHooks({
            bufferTracker: e,
            videoBufferCheck() {
                t.events.on(_.BUFFER_STARTED, () => {
                    y && (Z || z || (z = !0, e.trackBufferStart(d.logBufferStart, {
                        lower_profile_available: t.backbone.isLowerProfileAvailable
                    })))
                }), t.events.on(_.BUFFER_ENDED, () => {
                    y && z && (z = !1, e.trackBufferEnd(d.logBufferEnd, {
                        cdn_data: G
                    }), e.resetLastBufferTime())
                })
            },
            addEventData(e) {
                const t = Q;
                switch (Q = !1, e) {
                    case pr.VIDEO_START_TIME:
                        return j;
                    case pr.VIDEO_SEEK:
                        const e = K;
                        return K = null, e;
                    case pr.VIDEO_PLAYED:
                    case pr.VIDEO_PAUSED:
                        return {
                            api_call: t
                        }
                }
                return null
            }
        }), d.initHooks()
    }

    function ne(n, r = {}) {
        (function(e) {
            var n, i, o, r;
            switch (e) {
                case pr.VIDEO_SEEK:
                case pr.VIDEO_SEEKED:
                    return (null == (n = t.config.embed) ? void 0 : n.loop) || (null == (i = t.config.embed) || null == (o = i.settings) ? void 0 : o.background);
                case pr.VIDEO_PLAYBACK_RATE_CHANGED:
                    return null == (r = t.config.video.live_event) ? void 0 : r.low_latency;
                case pr.VIDEO_PLAYBACK_ERROR && (null == e ? void 0 : e.error_type) === _.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED:
                    return Cn(.1);
                default:
                    return !1
            }
        })(n) || ((r = Object.assign(d ? d.globalProperties() : {}, Object.assign(function() {
            var e, n, r, a, s;
            const l = {
                autoplay: 1 === t.config.embed.autoplay,
                background: !!t.config.embed.settings.background,
                clip_id: t.config.video.id,
                context: t.config.embed.context,
                device_pixel_ratio: window.devicePixelRatio || 1,
                drm: !!t.config.request.drm,
                embed: !t.config.embed.on_site,
                is_mod: !!t.config.user.mod,
                is_spatial: !(!o.spatialPlayback || !t.config.video.spatial),
                looping: !!t.config.embed.loop,
                owner_id: null == (e = t.config.video) || null == (n = e.owner) ? void 0 : n.id,
                product: un(t),
                referrer: t.config.request.referrer,
                session_id: t.config.request.session,
                version: Li(t.config),
                version_backend: t.config.request.build.backend,
                viewer_id: null == (r = t.config.user) ? void 0 : r.id,
                viewer_team_id: null == (a = t.config.user) ? void 0 : a.team_id,
                viewer_team_origin_user_id: null == (s = t.config.user) ? void 0 : s.team_origin_user_id,
                vuid: pi("vuid"),
                fps: t.config.video.fps
            };
            var c;
            return t.config.video.owner && (l.account_type = t.config.video.owner.account_type), t.config.embed.api && (l.api_version = t.config.embed.api), t.config.embed.app_id && (l.app_id = String(t.config.embed.app_id)), t.config.video.privacy && (l.privacy = t.config.video.privacy), i.get(Kn) && (l.live_session_id = null == (c = t.config.video.live_event) ? void 0 : c.id), t.config.video.webinar && (l.webinar_uuid = t.config.video.webinar.id), l
        }(), function() {
            var n, i;
            const o = t.backbone.video ? t.backbone.video.currentFile : {},
                r = function() {
                    const n = {},
                        i = ao(),
                        o = se("asc"),
                        r = "MediaSourceScanner" === t.backbone.currentScannerName,
                        a = "HTMLScanner" === t.backbone.currentScannerName,
                        s = "HLSLiveScanner" === t.backbone.currentScannerName;
                    let c = [];
                    a && (c = l(t.config, "request.files.progressive") || l(t.config, "request.files.hls") || []), r && (c = l(t.config, "request.files.dash.streams", [])), s && (c = t.backbone.video.currentFile.mime === Nt.dashMpd ? l(t.config, "request.files.dash.streams", []) : l(t.config, "request.files.hls.streams", []));
                    const d = Array.from(c).sort(o).map(e => e.profile);
                    let u = -1,
                        p = 0,
                        _ = null;
                    if (Object.keys(L).forEach(e => {
                            const t = d.indexOf(parseInt(e, 10));
                            t > u && (u = t);
                            const n = L[e].reduce((e, t) => ((t.end || i) - t.start) / 1e3 + e, 0);
                            n > p && (p = n, _ = e)
                        }), n.highest_profile = d[u], n.highest_available_profile = d[d.length - 1], n.most_used_profile = _, (r || s) && M) {
                        n.max_speed = Math.round(Math.max.apply(Math, e(M))) / 1e3, n.min_speed = Math.round(Math.min.apply(Math, e(M))) / 1e3;
                        const t = M.reduce((e, t) => e + t, 0);
                        n.average_speed = Math.round(t / M.length) / 1e3
                    }
                    return n
                }();
            let {
                id: a = 0,
                mime: s = Nt.h264,
                metadata: {
                    profile: c = null
                } = {}
            } = o, d = !1, u = !1;
            switch (s) {
                case Nt.dash:
                    0 === o.restrictedStreamIndexes.length && (d = !0), l(t.config, "request.files.dash.separate_av") && (u = !0), c = T ? T.profile : null;
                    break;
                case Nt.hls:
                    d = !0
            }
            let p = {
                audio_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "audio") / 1e3,
                auto: d,
                average_speed: r.average_speed || 0,
                cdn: o.metadata ? o.metadata.cdn : "akamai",
                delivery: "live" !== zt[s] ? zt[s] : "dash",
                display: t.expose.pictureInPicture ? "pip" : t.expose.fullscreen ? "fs" : null,
                dropped_frame_percent: q,
                event_time: g + so(b),
                fullscreen: V,
                picture_in_picture: U,
                highest_available_profile: r.highest_available_profile ? String(r.highest_available_profile) : null,
                highest_profile: r.highest_profile ? String(r.highest_profile) : null,
                max_speed: isFinite(r.max_speed) ? r.max_speed : 0,
                mime: o.mime || null,
                min_speed: isFinite(r.min_speed) ? r.min_speed : 0,
                most_used_profile: r.most_used_profile ? String(r.most_used_profile) : null,
                profile_id: c ? String(c) : null,
                codec: $(T) ? "" : _r(T.codecs),
                audio_codec: vr(null == (n = t.backbone) || null == n.getCurrentStream || null == (i = n.getCurrentStream("audio")) ? void 0 : i.codecs) || null,
                quality: T ? T.quality : null,
                quality_downswitch_count: H,
                quality_upswitch_count: F,
                separate_av: u,
                target_profile_id: X,
                video_bitrate: t.backbone.getBitrateAtTime(t.backbone.currentTime, "video") / 1e3,
                video_duration: ht(t.config.video.duration)
            };
            if (t.backbone.isLive && (void 0 !== t.backbone.latency && (p.latency = t.backbone.latency), void 0 !== t.backbone.lowLatencyMode && (p.is_low_latency = t.backbone.lowLatencyMode)), t.config.video.ecdn) {
                const e = t.config.video.ecdn.ecdn_provider,
                    {
                        ecdnBytesByCdn: n,
                        ecdnBytesPeered: i,
                        ecdnPeers: o
                    } = Cr(e);
                p.ecdn = !0, p.ecdn_provider = e, p.ecdn_bytes_via_cdn = n, p.ecdn_bytes_via_peering = i, p.ecdn_peers = o
            }
            return p
        }(), {
            ab_tests: t.abTests
        }), r)).name = n, t.events.fire(Yt._logMetric, {
            name: n,
            data: r
        }), c.log(r).catch(e => {}))
    }

    function de(e, t = {
        final: !0
    }, n = null) {
        const i = {
            error_type: e,
            error_reason: n
        };
        d.handleExternalError(i, t)
    }
    b = lo(), g = t.config.request.timestamp, t.config.request.drm, c = new r(function() {
        const e = `?beacon=1&session-id=${t.config.request.session}`;
        return t.config.request.urls.fresnel + e
    }()), t.events.on(Yt._error, de), t.events.on(Mt._reset, (function() {
        B = !1
    })), t.events.on(Mt._seek, (function() {
        Z = !0
    })), t.events.on(Yt._didEnterFullscreen, (function() {
        V = !0, ne(pr.VIDEO_FULLSCREEN_CHANGE)
    })), t.events.on(Yt._didExitFullscreen, (function() {
        V = !1, ne(pr.VIDEO_FULLSCREEN_CHANGE)
    })), t.events.on(p.ENTER_PICTURE_IN_PICTURE, (function() {
        U = !0, ne(pr.VIDEO_PICTURE_IN_PICTURE_CHANGE)
    })), t.events.on(p.LEAVE_PICTURE_IN_PICTURE, (function() {
        U = !1, ne(pr.VIDEO_PICTURE_IN_PICTURE_CHANGE)
    })), t.events.on(Yt._configChanged, (function() {
        g = t.config.request.timestamp, b = lo(), y = !1, E = !1, C = !1, w = "auto", T = {}, L = {}, k = null, A = null, P = null, M = [], D = null, x = {}, B = !1, V = !1, F = 0, H = 0, q = 0, G = null, X = null, J = 0, t.config.request.drm, d && (d.reset(), te())
    })), t.events.on(Yt._nudgeAttempted, (function() {
        K = {
            seek_type: "nudge"
        }
    })), t.events.on(Yt._scrubbingStarted, (function(e) {
        const t = null == e ? void 0 : e.seekType;
        K = {
            seek_type: t
        }
    })), t.events.on(Yt._chapterSeek, (function(e) {
        K = {
            seek_type: `chapter-${e}`
        }
    })), t.events.on(Yt._interactiveSeekCall, (function(e) {
        K = {
            seek_type: e.type
        }
    })), t.events.on(Yt._interactiveMarkerClicked, (function(e) {
        K = {
            seek_type: e.type,
            seek_action: e.action
        }
    })), t.events.on(u, (function() {
        B || Dn.isCastConnected || (t.performDelegateAction(Wt, (e, t = {}) => {
            B = !0, h.then(() => d.logStartRequest()).catch(() => {})
        }), mr(t.config, "chunk_logging").group && t.config.request.urls.fresnel_manifest_url && function(e, t, n, i) {
            const o = Date.now(),
                a = [{
                    uuid: gt(),
                    created_at: o,
                    event: {
                        name: "session_manifest",
                        version: 1,
                        ts_ms: o,
                        fields: {
                            sessionID: t,
                            manifest: n
                        }
                    },
                    tracker: {
                        name: "vimeo-player",
                        version: i
                    }
                }];
            new r(e).logRequestPromiseWithUrl(e, JSON.stringify(a), !0)
        }(t.config.request.urls.fresnel_manifest_url + "?beacon=1", t.config.request.session, t.backbone.manifest, Li(t.config)))
    })), t.events.on(Yt._overlayOpened, (function(e) {
        "email-capture" === e && ne(pr.SLATE_DISPLAYED, {
            slate_type: "email"
        }), "interactive" === e && ne(pr.SLATE_DISPLAYED, {
            slate_type: "interactive"
        })
    })), t.events.on(Yt._playbackRateChanged, (function(e, t) {
        ne(pr.VIDEO_PLAYBACK_RATE_CHANGED, {
            previous_playback_rate: t
        })
    })), t.events.on(Mt._changeQuality, (function(e) {
        t.backbone.video.currentFile.mime === Nt.dash && ("auto" === e || E ? "auto" === e && E && !C && (ne(pr.VIDEO_SWITCH_BACK_TO_AUTO, {
            quality: w,
            auto: 1
        }), C = !0) : (ne(pr.VIDEO_SWITCH_FROM_AUTO, {
            quality: e,
            auto: 0
        }), E = !0), w = e)
    })), t.events.on(Mt._turnCaptionsOn, (function(e) {
        D !== e && (D = e, ne(pr.CAPTIONS_ENABLED, {
            captions_id: String(e)
        }))
    })), t.events.on(Mt._turnCaptionsOff, (function() {
        D && (D = null, ne(pr.CAPTIONS_DISABLED))
    })), t.events.on(Nn.connected, (function() {
        ne(pr.CHROMECAST_CONNECTED)
    })), t.events.on(Nn.disconnected, (function() {
        ne(pr.CHROMECAST_DISCONNECTED)
    })), t.events.on(_.STREAM_CHANGE, (function(e, t, n, i) {
        T = e;
        const o = e.profile ? e.profile : e.id,
            r = ao();
        if (L[o] = L[o] || [], k) {
            const e = L[k].length - 1;
            L[k][e] && (L[k][e].end = r)
        }
        A && (n[t].bitrate > A ? F += 1 : H += 1), L[o].push({
            start: r
        }), x[o] = {
            bitrate: n[t].bitrate,
            width: n[t].width,
            height: n[t].height
        }, ne(pr.VIDEO_STREAM_CHANGE, {
            previous_audio_bitrate: P / 1e3,
            previous_video_bitrate: A / 1e3,
            previous_profile_id: String(k),
            reason: null == i ? void 0 : i.reasonForSwitch
        }), k = o, A = n[t].bitrate, P = n[t].audioBitrate
    })), t.events.on(_.STREAM_TARGET_CHANGE, (function(e) {
        e && (X = String(e.profile || "") || null)
    })), t.events.on(p.PLAYING, (function() {
        Z = !1
    })), t.events.once(Yt._firstTimeUpdate, (function() {
        y = !0
    })), t.events.on(Yt._adBuffering, (function() {
        ne(pr.AD_BUFFERING)
    })), t.events.on(Yt._adComplete, (function() {
        ne(pr.AD_COMPLETE)
    })), t.events.on(Yt._adClicked, (function() {
        ne(pr.AD_CLICKED)
    })), t.events.on(Yt._adError, (function(e) {
        ne(pr.AD_ERROR, {
            error_type: e.errorType,
            error_reason: e.errorReason
        })
    })), t.events.on(Yt._adPaused, (function() {
        ne(pr.AD_PAUSED)
    })), t.events.on(Yt._adResumed, (function() {
        ne(pr.AD_RESUMED)
    })), t.events.on(Yt._adStarted, (function(e) {
        ne(pr.AD_STARTED, {
            startup_duration: e.time ? ht(e.time / 1e3, 2) : null
        })
    })), t.events.on(Yt._adSkipped, (function() {
        ne(pr.AD_SKIPPED)
    })), t.events.on(Yt._pausedForAd, (function() {
        o.iPhone && d.setDisplayContext(1)
    })), t.events.on(Yt._resumedAfterAd, (function() {
        o.iPhone && d.setDisplayContext(0)
    })), t.events.on(Yt._webinarRegistrantBlocked, (function() {
        ne(pr.WEBINAR_REGISTRANT_BLOCKED)
    })), t.events.on(Yt._webinarRegistrantUnblocked, (function() {
        ne(pr.WEBINAR_REGISTRANT_UNBLOCKED)
    })), t.events.on(_.DROPPED_FRAMES, (function(e) {
        let t = e.dropped / e.total * 100;
        q = Math.round(100 * t) / 100
    })), t.events.on(_.BANDWIDTH, (function({
        speed: e
    }) {
        M.push(e), M.length > 500 && M.shift()
    })), t.events.on(_.MANIFEST_TIMEOUT, (function() {
        ne(pr.VIDEO_MANIFEST_TIMEOUT)
    })), t.events.on(_.MANIFEST_LOADED, (function() {
        ne(pr.VIDEO_MANIFEST_LOADED)
    })), t.events.on(_.DOWNLOAD_END, s), t.events.on(_.DOWNLOAD_TIMEOUT, (function() {
        ne(pr.DOWNLOAD_TIMEOUT)
    })), t.events.on(_.DRM_KEY_SWITCH, (function() {
        ne(pr.DRM_KEY_SWITCH)
    })), t.events.on(_.SCANNER_CHANGE, (function() {
        G = null
    })), t.events.on(_.AV_DURATION_MISMATCH, (function(e) {
        ne(pr.VIDEO_DURATION_MISMATCH, {
            duration_difference: Math.round(100 * e) / 100
        })
    })), t.events.on(_.QUOTA_EXCEEDED_ERROR, (function({
        buffered: e
    }) {
        let t = {
            error_type: _.QUOTA_EXCEEDED_ERROR
        };
        t.buffered = ht(re(0, e), 2), t.bytes_loaded = J, ne(pr.VIDEO_PLAYBACK_ERROR, t)
    })), t.events.on(_.DROPPED_FRAME_PERCENT_EXCEEDED, (function() {
        let e = {
            error_type: _.DROPPED_FRAME_PERCENT_EXCEEDED
        };
        ne(pr.VIDEO_PLAYBACK_ERROR, e)
    })), t.events.on(_.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, (function({
        incompatibleStreams: e,
        incompatibleStreamsAttributes: t
    }) {
        const n = ["codecs", "bitrate", "framerate", "quality", "width", "height", "mime_type"];
        e.forEach((e, i) => {
            const o = n.reduce((t, n) => (t.push(e[n]), t), []).concat(t[i].join(",")).join("|"),
                r = {
                    error_type: _.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED,
                    error_reason: o
                };
            ne(pr.VIDEO_PLAYBACK_ERROR, r)
        })
    })), t.events.on(R.MEDIASESSION_PLAY, (function() {
        ne(pr.MEDIASESSION_PLAY)
    })), t.events.on(R.MEDIASESSION_PAUSE, (function() {
        ne(pr.MEDIASESSION_PAUSE)
    })), t.events.on(R.MEDIASESSION_SEEK_FORWARD, (function() {
        ne(pr.MEDIASESSION_SEEK_FORWARD)
    })), t.events.on(R.MEDIASESSION_SEEK_BACKWARD, (function() {
        ne(pr.MEDIASESSION_SEEK_BACKWARD)
    })), t.events.on(Gt._seek, (function() {
        K = {
            seek_type: "api"
        }
    })), t.events.on(Gt._play, (function() {
        Q = !0
    })), t.events.on(Gt._pause, (function() {
        Q = !0
    })), t.events.on(O.WEBVR_ENTER, (function() {
        ne(pr.ENTER_WEBVR, !0)
    })), t.events.on(O.WEBVR_EXIT, (function() {
        ne(pr.EXIT_WEBVR, !0)
    })), t.events.on(N.BRAIN_ML_MODEL_INPUTS, (function(e) {
        var n;
        (null == (n = e.geolocation) ? void 0 : n.length) && e.geolocation[0].length ? e.geolocation = e.geolocation[0][0] : e.geolocation = "", t.config.request.urls.fresnel_mimir_inputs_url && function(e, t, n, i) {
            const o = {
                    chunk_request_id: n.chunkRequestID,
                    duration: n.duration,
                    available_qualities: n.availableQualities,
                    next_chunk_sizes: n.nextChunkSizes,
                    last_buffer_sizes: n.lastBufferSizes,
                    last_chunk_download_times: n.lastChunkDownloadTimes,
                    last_chunk_sizes: n.lastChunkSizes,
                    last_chunk_qualities: n.lastChunkQualities,
                    num_remaining_chunks: n.numRemainingChunks,
                    last_playback_heads: n.lastPlaybackHeads,
                    geolocation: n.geolocation,
                    session_id: t
                },
                a = Date.now(),
                s = [{
                    uuid: gt(),
                    created_at: a,
                    event: {
                        name: "mimir_inputs",
                        version: 1,
                        ts_ms: a,
                        fields: o
                    },
                    tracker: {
                        name: "vimeo-player",
                        version: i
                    }
                }];
            new r(e).logRequestPromiseWithUrl(e, JSON.stringify(s), !0)
        }(t.config.request.urls.fresnel_mimir_inputs_url + "?beacon=1", t.config.request.session, e, Li(t.config))
    })), t.events.on(I.STALL_JUMP, (function({
        msg: e
    }) {
        de("livestall", {
            final: !1
        }, e)
    })), t.events.on(I.LOW_LATENCY_FALLBACK, (function({
        msg: e
    }) {
        de("livefallback", {
            final: !1
        }, e)
    })), h = new Promise((e, n) => {
        var i;
        (null == (i = t.backbone) ? void 0 : i.video) && e(), t.events.on(S, e)
    }), h.then(ee).catch(() => {}), t.events.on(Yt._swapVideo, ee), ie.getFirstConsistentlyInteractive().then(e => {
        ht(e)
    }).catch(() => {})
}

function Tr(e) {
    let t, i, o = e.config.ott || {};
    const a = o.analytics_url || "https://collector.vhx.tv/events.gif",
        s = new r(a),
        l = Y((function() {
            u("timeupdate")
        }), 1e4, {
            leading: !1
        }),
        c = Y((function() {
            u("seeking")
        }), 500);

    function d() {
        o = e.config.ott || {}, i = !1, t = !1
    }

    function u(i, r) {
        (r = Object.assign({}, r, {
            name: o.video_title,
            user_id: o.viewer_user_id,
            user_email: o.viewer_user_email,
            site_id: o.site_id,
            user_agent: navigator.userAgent,
            url: top === self ? window.location.href : document.referrer,
            referrer: e.config.request.referrer,
            session_id: e.config.request.session,
            device: "html5",
            device_id: null,
            collection_id: o.collection_id,
            product_id: o.product_id,
            platform: o.platform,
            platform_id: null,
            platform_version: o.platform_version
        }, {
            type: "video",
            video_id: o.video_id,
            current_src: e.backbone.currentFile.src,
            current_subtitle: "none",
            current_type: o.video_content_type,
            duration: o.video_duration,
            is_drm: e.config.request.drm ? 1 : 0,
            is_fullscreen: t ? 1 : 0,
            is_trailer: o.is_trailer ? 1 : 0,
            is_chromecast: Dn.isCastConnected ? 1 : 0,
            is_live: e.config.video.live_event ? 1 : 0,
            seconds: 10,
            timecode: e.currentTime
        })).name = i, void 0 === r.timestamp && (r.timestamp = Math.round(.001 * Date.now()));
        const l = n(a, r);
        return s.logRequestPromiseWithUrl(l, {}, !0, "GET").catch(e => {})
    }

    function _() {
        e.events.on(p.ENDED, v), e.events.on(p.ERROR, m), e.events.on(p.PAUSE, f), e.events.on(p.PLAY, h), e.events.on(p.TIME_UPDATE, l), e.events.on(p.SEEKING, c), e.events.on(p.SEEKED, g), e.events.on(p.WAITING, b), e.events.on(Yt._didEnterFullscreen, y), e.events.on(Yt._didExitFullscreen, E), e.events.on(Yt._adComplete, C), e.events.on(Yt._adClicked, w), e.events.on(Yt._adError, T), e.events.on(Yt._adStarted, L), e.events.on(Yt._adSkipped, S)
    }

    function v() {
        l.cancel(), u("ended")
    }

    function m() {
        l.cancel(), u("error")
    }

    function f() {
        l.cancel(), u("pause")
    }

    function h() {
        if (!i) return i = !0, void u("firstplay");
        u("play")
    }

    function g() {
        c.cancel(), u("seeked")
    }

    function b() {
        u("waiting")
    }

    function y() {
        t = !0
    }

    function E() {
        t = !1
    }

    function C() {
        u(pr.AD_COMPLETE)
    }

    function w() {
        u(pr.AD_CLICKED)
    }

    function T() {
        u(pr.AD_ERROR)
    }

    function L() {
        u(pr.AD_STARTED)
    }

    function S() {
        u(pr.AD_SKIPPED)
    }
    e.events.on(Yt._configChanged, d), d(), e.config.ott ? _() : new Promise((t, n) => {
        e.ottVideoMetadata ? t() : e.events.on(Yt._ottMetadataSet, e => {
            t()
        })
    }).then(() => {
        o = e.ottVideoMetadata, _()
    }).catch(e => {})
}

function Lr(e, t) {
    let n, i, r, a, s, l, c, d, _, v, m, h, g = !1;
    const b = f();
    let y = {};

    function E() {
        i && (N(), i = null), a && (a.destroy(), a = null), r && clearInterval(r), s = null, l = !1, c = !1, _ = !1, d = !1, v = !1, g = !1, h = new Promise((e, t) => {
            m = e
        }), e.events.once(u, () => {
            v = !0
        }), e.events.on(p.ERROR, (function(e) {
            !e || "NotAllowedError" !== e.name && "AbortError" !== e.name || (v = !1)
        })), n = document.querySelector(".vp-ads-wrapper"), n || (n = document.createElement("div"), n.classList.add("vp-ads-wrapper"), document.querySelector(".player").appendChild(n), n.innerHTML = oo.render("adcountdown")), i = n.querySelector(".vp-ads-tag"), y = {
            adCode: e.config.request.ads.adcode || null,
            adUnit: e.config.request.ads.adunit || null,
            adUrl: e.config.request.ads.adurl || null,
            videoPlayer: e.backbone,
            width: {
                linear: 488,
                nonlinear: 488
            },
            height: {
                linear: 252,
                nonlinear: 150
            }
        }, a = new de(n, y), a.on(ue.ADS_MANAGER_LOADED, () => {
            a.on(ue.AD_BUFFERING, C), a.on(ue.AD_COMPLETE, T), a.on(ue.AD_CLICK, w), a.on(ue.AD_ERROR, L), a.on(ue.AD_STARTED, S), a.on(ue.AD_SKIPPED, k), a.on(ue.ALL_ADS_COMPLETED, A), a.on(ue.CONTENT_PAUSE_REQUESTED, P), a.on(ue.CONTENT_RESUME_REQUESTED, I),
                function() {
                    if (!v) {
                        if (g) return;
                        e.events.once(u, () => {
                            m(), v = !0
                        })
                    }
                    h.then(D).catch(e => {}), e.events.on(p.ENDED, () => {
                        g || (l = !0, a.setContentComplete())
                    })
                }(), e.store.watch("ui.player.width", x), e.events.on(Yt._didEnterFullscreen, x, !0), e.events.on(Yt._didExitFullscreen, x, !1), v && m()
        })
    }

    function C() {
        c && e.events.fire(Yt._adBuffering)
    }

    function w() {
        e.events.fire(Yt._adClicked)
    }

    function T() {
        o.iPhone && e.backbone.addVideoEventListeners(), r && clearInterval(r), c = !1, e.events.fire(Yt._adComplete)
    }

    function L(t) {
        const n = {
            errorType: t.o,
            errorReason: t.l
        };
        e.events.fire(Yt._adError, n), "adPlayError" === n.errorType && e.events.fire(Yt._resumedAfterAd)
    }

    function S(t) {
        o.iPhone && e.backbone.removeVideoEventListeners();
        let i = t.getAd();
        i.isLinear() && (r = setInterval(() => {
            let e = "AD " + function(e) {
                if (e < 0) return "00:00";
                let t = Math.floor(e / 60),
                    n = Math.round(e % 60);
                return t = t < 10 ? "0" + t : t, n = n < 10 ? "0" + n : n, t + ":" + n
            }(a.remainingTime);
            n.querySelector(".vp-ads-countdown").innerHTML = e
        }, 1e3), setTimeout(O, 1e3)), c = !0;
        let l = {
            type: i.isLinear() ? "linear" : "nonlinear"
        };
        s && (l.time = Date.now() - s, s = null), e.events.fire(Yt._adStarted, l)
    }

    function k(t) {
        e.events.fire(Yt._adSkipped, t)
    }

    function A(t) {
        _ = !0, o.iPhone || a.destroy(), e.events.fire(Yt._allAdsCompleted, t)
    }

    function P() {
        e.events.fire(Yt._pausedForAd), s = Date.now(), l || (d = !0, e.backbone.paused ? e.events.once(p.PLAYING, () => {
            e.backbone.pause()
        }) : e.backbone.pause())
    }

    function I() {
        N(), e.events.fire(Yt._resumedAfterAd), o.iPhone && _ && a.destroy(), l || R()
    }

    function R() {
        d = !1, e.backbone.play()
    }

    function O() {
        i = n.querySelector(".vp-ads-tag"), i.classList.remove("hidden"), i.removeAttribute("hidden")
    }

    function N() {
        i.classList.add("hidden"), i.setAttribute("hidden", "")
    }

    function M() {
        return {
            width: t.getBoundingClientRect().width,
            height: t.getBoundingClientRect().height
        }
    }

    function D() {
        const {
            width: t,
            height: n
        } = M();
        try {
            a.start(t, n)
        } catch (i) {
            l && e.events.fire(Yt._adComplete), d && R()
        }
    }

    function x(e) {
        const {
            width: t,
            height: n
        } = M();
        a.resize(t, n, e)
    }
    const B = {
        pause: () => (e.events.fire(Yt._adPaused), a.pause()),
        play: () => (e.events.fire(Yt._adResumed), a.play()),
        get volume() {
            return a.volume
        },
        set volume(e) {
            a.volume = e
        },
        toggleCastingState(e) {
            g = !!e, g && a.destroy()
        },
        events: b
    };
    return E(), e.events.on(Yt._configChanged, E), B
}
const Sr = ["clip_id", "profile_id", "player_size", "dropped_frames", "total_frames", "bandwidth", "markers", "streams", "files", "video_dims", "min_bandwidth", "max_badwidth", "buffer_occupancy", "live_latency", "scanner", "vr_headset"];
let kr = function() {
        function e(e) {
            this._player = e, this._seriesStore = {}, this._latencyInterval = null, this._clearAllFields(), this._attachEventHandlers(), this._watchPlayerSize(), this._setDefaults()
        }
        var t = e.prototype;
        return t.reset = function() {
            this._clearAllFields(), this._setDefaults(), this._player.events.fire(Yt._debugDataChange)
        }, t._setToSeries = function(e, t) {
            return this._seriesStore[e] = [t], this._player.events.fire(Yt._debugDataChange), this._seriesStore[e]
        }, t._addToSeries = function(e, t) {
            return this._seriesStore[e].push(t), this._seriesStore[e].length > 300 && this._seriesStore[e].splice(0, 25), this._player.events.fire(Yt._debugDataChange), this._seriesStore[e]
        }, t.getCurrent = function(e) {
            return this._seriesStore[e].slice(-1)[0]
        }, t.getSeries = function(e) {
            return this._seriesStore[e]
        }, t._onLogMetric = function(e = {}) {
            const t = e.name,
                n = s({}, e.data),
                i = this._filterMetricData(t, n);
            this._addMarker(t, t, i)
        }, t._filterMetricData = function(e, t) {
            if (e === pr.CHUNK_DOWNLOADED) {
                let e = {};
                e.host = t.host, e.duration = ht(t.duration, 2), e.size = t.size, e.index = t.index, e.profile_id = t.profile_id, e.quality = t.quality, e.buffered = ht(t.buffered, 2), e.ttfb = ht(t.ttfb, 2), e.extraContext = t.extraContext, e.headers = pe(t.headers, ["x_vim_cachebc", "x_cache", "akamai_edge_ip", "x_akamai_request_id", "ak_reference_id", "content_type"]);
                let n = 0,
                    i = 0,
                    o = 0;
                const r = e.headers.x_vim_cachebc,
                    a = e.headers.x_cache;
                return r ? r.split(",").forEach(e => {
                    let [t, n] = e.split(":");
                    "E" !== t || "h" !== n ? "h" !== n || (i = 1) : o = 1
                }) : a && (i = "HIT" === a.substr(0, 3), o = "HIT" === a.substr(-3)), o ? n = 2 : i && (n = 1), e.cache_hit = n, e
            }
            if (e === pr.VIDEO_PLAYBACK_ERROR || e === pr.VIDEO_LOAD_FAILURE || e === pr.VIDEO_START_FAILURE || e === pr.VIDEO_READY) return t;
            if (void 0 !== t.autoplay && void 0 !== t.looping) {
                let e = {};
                return e.cdn = t.cdn, e.quality = t.quality, e
            }
            return t
        }, t._addMarker = function(e, t, n = {}) {
            const i = this._player.backbone.currentTime,
                o = Date.now(),
                r = ht(re(i, this._player.backbone.buffered), 2);
            this._addToSeries("markers", {
                type: e,
                title: t,
                vt: i,
                t: o,
                bt: r,
                data: n
            })
        }, t._attachEventHandlers = function() {
            this._player.events.on(Yt._configChanged, () => {
                this.reset()
            }), this._player.events.on(_.BANDWIDTH, this._onBandwidthChange.bind(this)), this._player.events.on(_.BUFFER_OCCUPANCY, this._onBufferOccupancyChange.bind(this)), this._player.events.on(_.CURRENT_FILE_CHANGE, this._onFileChange.bind(this)), this._player.events.on(_.DROPPED_FRAMES, this._onDroppedFrames.bind(this)), this._player.events.on(_.SCANNER_CHANGE, this._onScannerChange.bind(this)), this._player.events.on(_.STREAM_CHANGE, this._onStreamChange.bind(this)), this._player.events.on(_.STREAM_CHANGE_START, this._onStreamChangeStart.bind(this)), this._player.events.on(p.TIME_UPDATE, this._onTimeUpdate.bind(this)), this._player.events.on(O.WEBVR_HARDWARE_AVAILABLE, this._onVRHeadsetAvailble.bind(this)), this._player.events.on(Yt._logMetric, this._onLogMetric.bind(this)), this._player.events.on(I.BUFFER_GAP_JUMP_PREVENT, this._onBufferGapJumpPrevent.bind(this)), this._player.events.on(I.BUFFER_GAP_JUMP, this._onBufferGapJump.bind(this)), this._player.events.on(I.STALL_JUMP, this._onStallJump.bind(this))
        }, t._onVRHeadsetAvailble = function(e) {
            e.displayName && this._setToSeries("vr_headset", e.displayName)
        }, t._setLatencyInterval = function() {
            this._latencyInterval = setInterval(() => {
                const e = this._player.backbone.buffered,
                    t = this._player.backbone.videoElement;
                if (e && e.length && t && t.currentTime) {
                    const e = this._player.backbone.latency;
                    this._setToSeries("live_latency", e)
                } else this._setToSeries("live_latency", 0)
            }, 500)
        }, t._removeLatencyInterval = function() {
            clearInterval(this._latencyInterval)
        }, t._watchPlayerSize = function() {
            this._player.store.watch("ui.player.boundingRect", e => {
                const t = this.getCurrent("video_dims"),
                    n = this._getVideoDimensionsString(e);
                this._addToSeries("video_dims", n);
                const i = t ? `Resized from ${t} to ${n}` : `Resized to ${n}`;
                this._addMarker("resize", i)
            })
        }, t._getVideoDimensionsString = function(e) {
            const t = `${Math.round(e.width)}px`,
                n = `${Math.round(e.height)}px`,
                i = window.devicePixelRatio && window.devicePixelRatio > 1 ? `@${ht(window.devicePixelRatio,3)}x` : "";
            return t && n ? `${parseInt(t,10)}×${parseInt(n,10)} ${i}` : ""
        }, t._clearAllFields = function() {
            this._seriesStore = Sr.reduce((e, t) => (e[t] = [], e), {})
        }, t._setDefaults = function() {
            const e = this._player.backbone.currentFile;
            this._addToSeries("files", e), this._addToSeries("scanner", this._player.backbone.currentScannerName), "HLSLiveScanner" === this._player.backbone.currentScannerName && this._setLatencyInterval(), this._setToSeries("min_bandwidth", 0), this._setToSeries("max_badwidth", 0);
            const t = this._player.store.get("ui.player.boundingRect"),
                n = this._getVideoDimensionsString(t);
            this._addToSeries("video_dims", n)
        }, t._onBandwidthChange = function(e) {
            const t = Math.round(100 * e.speed) / 100;
            this._addToSeries("bandwidth", {
                videoTime: this._player.backbone.currentTime,
                time: Date.now(),
                value: t
            });
            let n = this.getCurrent("max_badwidth"),
                i = this.getCurrent("min_bandwidth");
            (!i || t < i) && this._setToSeries("min_bandwidth", t), (!n || t > n) && this._setToSeries("max_badwidth", t)
        }, t._onDroppedFrames = function(e) {
            const {
                dropped: t,
                total: n
            } = e;
            this._setToSeries("total_frames", n), this._setToSeries("dropped_frames", t)
        }, t._onSeeked = function() {
            this._addMarker("seeked", `Seeked to ${this._player.backbone.currentTime}`)
        }, t._onEnded = function() {
            this._addMarker("ended", "Ended")
        }, t._onStreamChangeStart = function({
            previousStreamIndex: e,
            index: t,
            streams: n
        }) {
            const i = n[t],
                o = n[e],
                r = o ? o.bitrate : null;
            if (r !== i.bitrate && null !== r) {
                const e = this._getResolutionString(o),
                    t = this._getResolutionString(i);
                i.bitrate < r ? this._addMarker("downswitch", `Starting Downswitch from ${e} to ${t}`) : i.bitrate > r && this._addMarker("upswitch", `Starting Upswitch from ${e} to ${t}`)
            }
        }, t._onStreamChange = function(e, t, n) {
            var i, o, r, a;
            const s = n[t],
                l = this._getResolutionString(s),
                c = _r(s.codecs),
                d = null == (i = this._player.backbone) || null == i.getCurrentStream ? void 0 : i.getCurrentStream("audio"),
                u = vr(null == d ? void 0 : d.codecs),
                p = `${c}${u?` / ${u}`:""}`,
                _ = null == (o = this._player.backbone) ? void 0 : o.telecine.getEffectByName("AmbisonicEffect");
            this._addMarker("switchcomplete", `Completed switch to ${l}`), this._addToSeries("streams", {
                profile: void 0 !== e ? e.profile : null,
                quality: void 0 !== e ? e.quality : `${s.height}p`,
                bitrate: s.bitrate,
                ambisonicConnected: null == _ ? void 0 : _.connected,
                ambisonicOrder: null == d ? void 0 : d.ambisonic_order,
                audioBitrate: null == d ? void 0 : d.bitrate,
                audioChannels: null !== (r = null !== (a = null == d ? void 0 : d.channels) && void 0 !== a ? a : s.channels) && void 0 !== r ? r : void 0,
                framerate: s.framerate,
                height: s.height,
                width: s.width,
                id: s.id,
                codec: p
            })
        }, t._onFileChange = function() {
            const e = this.getCurrent("files"),
                t = this._player.backbone.currentFile;
            this._addToSeries("files", t);
            const n = t.metadata.cdn,
                i = e ? e.metadata.cdn : null,
                o = e ? zt[e.mime] : null,
                r = zt[t.mime];
            let a = `CDN to ${n}/${r}`;
            i && (a = `CDN from ${i}/${o} to ${n}/${r}`), this._addMarker("filechange", a)
        }, t._onBufferOccupancyChange = function(e) {
            const t = Math.round(1e3 * e) / 1e3;
            this._addToSeries("buffer_occupancy", {
                videoTime: this._player.backbone.currentTime,
                time: Date.now(),
                value: t
            })
        }, t._onScannerChange = function() {
            const e = this.getCurrent("scanner"),
                t = this._player.backbone.currentScannerName;
            this._setToSeries("scanner", t), e && this._addMarker("scannerchange", `Scanner change to ${t}`), "HLSLiveScanner" === t ? this._setLatencyInterval() : this._removeLatencyInterval()
        }, t._onBufferGapJump = function(e) {
            this._addMarker("buffergapjump", e.msg)
        }, t._onBufferGapJumpPrevent = function(e) {
            this._addMarker("buffergapjumpprevent", e.msg)
        }, t._onStallJump = function(e) {
            this._addMarker("stalljump", e.msg)
        }, t._onStalled = function() {
            this._addMarker("stalled", "Stalled")
        }, t._getResolutionString = function(e) {
            return `${e.width}×${e.height}@${Math.round(e.framerate)} ${Math.round(e.bitrate/1e3).toLocaleString()} Kbps`
        }, t._onTimeUpdate = function() {
            this._player.events.fire(Yt._debugDataChange)
        }, e
    }(),
    Ar = function() {
        function e(e) {
            this._player = e, this._currentFragment = null, this._attachEventHandlers()
        }
        var t = e.prototype;
        return t._attachEventHandlers = function() {
            this._player.events.on(Mt._reset, () => {
                this.reset()
            })
        }, t._getFragment = function(e, t, n) {
            if ($(n)) return {
                startTime: 0,
                endTime: t,
                duration: t
            };
            const i = 1e3 * e,
                o = n.findIndex((e, t) => {
                    const o = n[t + 1],
                        r = t === n.length - 1;
                    return e <= i && (i < o || r)
                }),
                r = o === n.length - 1,
                a = n[o] / 1e3,
                s = n[o + 1],
                l = r ? t : (s - 1) / 1e3;
            return {
                startTime: a,
                endTime: l,
                duration: l - a
            }
        }, t._handleTimeUpdate = function({
            currentTime: e,
            duration: t
        }) {
            this.checkForNewFragment(e, t)
        }, t.checkForNewFragment = function(e, t) {
            if (!(this._currentFragment && this._currentFragment.startTime <= e && e <= this._currentFragment.endTime)) {
                var n;
                const i = null == (n = this._player.config.embed.interactive) ? void 0 : n.fragments;
                this._currentFragment = this._getFragment(e, t, i), this._player.events.fire(Yt._fragmentChanged)
            }
        }, t.reset = function() {
            var e;
            this._currentFragment = null, this._player.events.off(p.TIME_UPDATE, this._handleTimeUpdate.bind(this));
            const t = this._player.config.video.duration;
            !$(null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments) && (this.checkForNewFragment(0, t), this._player.events.on(p.TIME_UPDATE, this._handleTimeUpdate.bind(this)))
        }, v(e, [{
            key: "firstFragmentDuration",
            get: function() {
                var e;
                const t = null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments;
                return !$(t) && t.length > 1 ? (t[1] - 1) / 1e3 : this._player.config.video.duration
            }
        }, {
            key: "currentFragment",
            get: function() {
                var e;
                return $(null == (e = this._player.config.embed.interactive) ? void 0 : e.fragments) ? {
                    startTime: 0,
                    endTime: this._player.config.video.duration,
                    duration: this._player.config.video.duration
                } : this._currentFragment
            }
        }]), e
    }();
var Pr;
! function(e) {
    e.FIRST_INPUT_DELAY = "firstInputDelay", e.CUMULATIVE_LAYOUT_SHIFT = "cumulativeLayoutShift", e.LARGEST_CONTENTFUL_PAINT = "largestContentfulPaint"
}(Pr || (Pr = {}));
const Ir = 4e-4 / Object.keys(Pr).length,
    Rr = {};
const Or = e => ({
        onClick: e,
        onKeyDown: t => {
            "Enter" === t.key && e(t)
        }
    }),
    Nr = e => {
        const t = document.createElement("textarea");
        t.value = e, document.body.appendChild(t), t.select();
        const n = document.execCommand("copy");
        return document.body.removeChild(t), n
    },
    Mr = (e, t, n) => {
        var i;
        return null !== (i = t[n]) && void 0 !== i ? i : e[n]
    };

function Dr(e, t) {
    return !e || 0 === e.length || -1 !== e.indexOf(t)
}
const xr = e => [jt.main, jt.privateUnlocked, jt.webinarUnlocked].includes(e),
    Br = (e, t) => e && (e.contains(t.target) || e === t.target),
    Vr = (...e) => e.reduce((e, t) => t ? e ? `${e} ${t}` : t : e, ""),
    Ur = {
        16: "shift",
        27: "esc",
        32: "space",
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    },
    Fr = (e = [], t) => e.map(e => (e.active = `${e.id}` === t, e)),
    Hr = e => {
        let t = 0,
            n = 0;
        if (e) {
            const {
                left: i,
                right: o
            } = ct(e), {
                borderLeftWidth: r,
                borderRightWidth: a
            } = window.getComputedStyle(e, "");
            t = i + parseInt(r, 10), n = o - parseInt(a, 10)
        }
        return {
            leftOffsetValue: t,
            rightOffsetValue: n
        }
    },
    qr = e => {
        let {
            clientX: t
        } = e;
        return e.targetTouches && e.targetTouches.length > 0 && (t = e.targetTouches[0].clientX, e.preventDefault()), t
    },
    $r = (e, t) => e - t.startTime,
    Wr = (e, t) => {
        const {
            startTime: n,
            endTime: i,
            duration: o
        } = t;
        return e < n ? 0 : e > i ? 1 : $r(e, t) / o
    },
    Yr = (e, t) => {
        const {
            startTime: n,
            endTime: i
        } = t;
        return e < n ? 0 : e > i ? 1 : (e - n) / (i - n)
    },
    Gr = (e, t = !0) => {
        const n = 100 * (t ? ht(e, 2) : e);
        return `${Math.min(n,100)}%`
    },
    zr = (e, t) => {
        const {
            startTime: n,
            duration: i
        } = t;
        return n + i * e
    },
    jr = (e, t) => e.filter(e => {
        const n = e.startTime >= t.startTime && e.startTime <= t.endTime,
            i = e.endTime >= t.startTime && e.endTime <= t.endTime,
            o = e.startTime < t.startTime && e.endTime >= t.endTime;
        return n || i || o
    });
let Kr, Xr, Zr, Qr, Jr, ea, ta;
! function(e) {
    e.VP_PLAYER_UI_OVERLAYS = "vp-player-ui-overlays", e.VP_PLAYER_UI_CONTAINER = "vp-player-ui-container", e.VP_VIDEO_WRAPPER = "vp-video-wrapper", e.VP_OVERLAY_WRAPPER = "vp-overlay-wrapper", e.VP_OVERLAY_LABELLEDBY = "vp-overlay-labelledby", e.VP_CONTROLS = "vp-controls", e.VP_CHAPTER_BUTTON = "vp-chapter-button", e.VP_CAST_BUTTON = "vp-cast-button", e.VP_PREFS = "vp-prefs", e.VP_MENU_INFO = "vp-menu-info", e.VP_INTERACTIVE_MARKER = "vp-interactive-marker", e.VP_PROGRESS = "vp-progress", e.VP_LIVE_STATUS = "vp-live-status", e.VP_LIVE_STATUS_CIRCLE = "vp-live-status-circle", e.VP_LIVE_VIEWER_COUNT = "vp-live-viewer-count", e.VP_PIP_OVERLAY = "vp-pip-overlay", e.VP_CAPTIONS = "vp-captions", e.VP_MENU = "vp-menu", e.VP_SPIN = "vp-spin", e.VP_TOOLTIP = "vp-tooltip", e.VP_SIDEDOCK = "vp-sidedock", e.VP_BADGE = "vp-badge", e.VP_TITLE = "vp-title", e.VP_UNMUTE = "vp-unmute", e.VP_CAPTIONS_LINE = "vp-captions-line", e.STEREOSCOPIC = "stereoscopic", e.VOD_BUTTON = "vod-button", e.VOD_ICON = "vod-icon", e.CC = "cc", e.AIRPLAY = "airplay", e.ON = "on", e.PIP = "pip", e.VOLUME = "volume", e.CUSTOM_LOGO = "custom-logo", e.FULLSCREEN = "fullscreen", e.LOGO = "logo", e.CUEPOINT = "cuepoint", e.THUMB_PREVIEW = "thumb-preview", e.THUMB = "thumb", e.COLLECTIONS_BUTTON = "collections-button", e.COLLECTIONS_ICON = "collections-icon", e.LIKE_BUTTON = "like-button", e.LIKE_ICON = "like-icon", e.WATCH_LATER_BUTTON = "watch-later-button", e.WATCH_LATER_ICON = "watch-later-icon", e.FILL = "fill", e.PIP_ICON = "pip-icon"
}(Kr || (Kr = {})),
function(e) {
    e.EXCLUDE_GLOBAL_BUTTON_STYLES = "exclude-global-button-styles", e.ENTER_FULLSCREEN_ICON = "enter-fullscreen-icon", e.EXIT_FULLSCREEN_ICON = "exit-fullscreen-icon", e.TITLE_TAG = "titleTag", e.BYLINE_TAG = "bylineTag", e.LONER_TAG = "lonerTag", e.CONTENT_AREA_BACKGROUND_CONTAINER = "vp-content-area-background"
}(Xr || (Xr = {})),
function(e) {
    e.RIGHT_CONTENT_AREA = "right-content-area"
}(Zr || (Zr = {})),
function(e) {
    e.TRANSCRIPT_LIST = "transcript-list", e.TRANSCRIPT_CUE_PREFIX = "transcript-cue", e.TRANSCRIPT_MENU = "transcript-menu", e.TRANSCRIPT_VIEWER = "transcript-viewer", e.TRANSCRIPT_CONTROL_BAR_BUTTON = "transcript-control-bar-button"
}(Qr || (Qr = {})),
function(e) {
    e.QOE_SURVEY_TEXT = "qoe-survey-text"
}(Jr || (Jr = {})),
function(e) {
    e.TEXT_TRACK_ID_PREFIX = "telecine-track-"
}(ea || (ea = {})),
function(e) {
    e.EMPTY = "empty", e.SHARE = "share", e.HELP = "help", e.ERROR = "error", e.APP_REDIRECT = "app-redirect", e.PRIVATE_LOCKED = "private-locked", e.WEBINAR_BLOCKED = "webinar-blocked", e.WEBINAR_CONFIRMATION = "webinar-confirmation", e.EMAIL_CAPTURE = "email-capture", e.NOT_SUPPORTED = "not-supported", e.INTERACTIVE = "interactive"
}(ta || (ta = {}));
const na = [ta.HELP],
    ia = `.${Kr.VP_OVERLAY_WRAPPER}`,
    oa = e => e.querySelector(ia),
    ra = e => {
        if (e) {
            const t = oa(e);
            if (t && !t.classList.contains("hidden") && !t.classList.contains("out")) return !0
        }
        return !1
    },
    aa = e => {
        const t = oa(e);
        return t && ra(e) ? t.getAttribute("name") : ta.EMPTY
    },
    sa = e => na.includes(e),
    la = e => (e => void 0 !== e.settings)(e) ? !e.settings.background && 0 !== e.settings.controls : !e.background && e.controls;
let ca, da, ua, pa, _a, va, ma, fa, ha, ga, ba, ya;

function Ea(e) {
    var t, n;
    const i = null == (t = e.embed) || null == (n = t.interactive) ? void 0 : n.demo_end,
        o = vo(i);
    return i && !o
}

function Ca(e) {
    return Ea(e)
}! function(e) {
    e.XXS = "xxs", e.XS = "xs", e.SM = "sm", e.MD = "md", e.LG = "lg", e.XL = "xl", e.XXL = "xxl"
}(ca || (ca = {})),
function(e) {
    e.MD = "md", e.SM = "sm", e.XS = "xs", e.CUSTOM = "custom"
}(da || (da = {})),
function(e) {
    e.PRIMARY = "primary", e.ALTERNATIVE = "alternative", e.CUSTOM = "custom"
}(ua || (ua = {})),
function(e) {
    e.LEFT = "left", e.RIGHT = "right"
}(pa || (pa = {})),
function(e) {
    e.RESET = "reset", e.BUTTON = "button", e.SUBMIT = "submit"
}(_a || (_a = {})),
function(e) {
    e.SM = "sm", e.MD = "md", e.LG = "lg", e.XL = "xl"
}(va || (va = {})),
function(e) {
    e.NORMAL = "normal", e.BOLD = "bold", e[e.NUM_500 = 500] = "NUM_500"
}(ma || (ma = {})),
function(e) {
    e.SM = "sm", e.LG = "lg"
}(fa || (fa = {})),
function(e) {
    e.SM = "sm", e.LG = "lg"
}(ha || (ha = {})),
function(e) {
    e.ONE = "--color-one", e.TWO = "--color-two", e.THREE = "--color-three", e.FOUR = "--color-four", e.ONE_MONOCHROME = "--color-one-monochrome", e.TWO_MONOCHROME = "--color-two-monochrome", e.ONE_OPACITY_NINETY = "--color-one-opacity-ninety", e.THREE_OPACITY_TWENTY = "--color-three-opacity-twenty", e.ONE_MONOCHROME_OPACITY_TWENTY = "--color-one-monochrome-opacity-twenty", e.TWO_MONOCHROME_OPACITY_TWENTY = "--color-two-monochrome-opacity-twenty", e.ONE_MONOCHROME_OPACITY_SIXTY = "--color-one-monochrome-opacity-sixty", e.ONE_MONOCHROME_OPACITY_TWENTY_EIGHTY = "--color-one-monochrome-opacity-twenty-eighty", e.TWO_MONOCHROME_OPACITY_TWENTY_EIGHTY = "--color-two-monochrome-opacity-twenty-eighty"
}(ga || (ga = {})),
function(e) {
    e[e.ZERO = 0] = "ZERO", e[e.TWENTY = .2] = "TWENTY", e[e.TWENTY_FIVE = .25] = "TWENTY_FIVE", e[e.FIFTY = .5] = "FIFTY", e[e.SIXTY = .6] = "SIXTY", e[e.SEVENTY_FIVE = .75] = "SEVENTY_FIVE", e[e.EIGHTY = .8] = "EIGHTY", e[e.NINETY = .9] = "NINETY", e[e.ONE_HUNDRED = 1] = "ONE_HUNDRED"
}(ba || (ba = {})),
function(e) {
    e.LIGHT = "light", e.DARK = "dark"
}(ya || (ya = {}));
const wa = (e = "") => 4 === (e = e.replace("#", "")).length || 8 === e.length,
    Ta = (e, t, n, i) => {
        let o;
        try {
            o = new J(e)
        } catch (a) {
            return ""
        }
        const r = (e => J.white.contrast(e).ratio >= 4.5 ? ya.DARK : ya.LIGHT)(o);
        return n && (o = fe(r === ya.DARK ? J.white : J.black)), null == t || i && wa(e) ? wa(e) ? o.hexWithAlpha : o.hex : ("object" == typeof t && (t = t[r]), o.alpha = t, o.hexWithAlpha)
    },
    La = e => e.map(([e, t]) => ((e, t) => e + ":" + t + ";")(e, t)).join("\n"),
    Sa = () => {};

function ka(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Aa(e, t) {
    try {
        var n = e()
    } catch (Ie) {
        return t(Ie)
    }
    return n && n.then ? n.then(void 0, t) : n
}
const Pa = function(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Ie) {
            return Promise.reject(Ie)
        }
    }
}((function(e) {
    return Aa(e, (function(e) {
        return ka(new Promise(e => setTimeout(e, 1e3)), (function() {
            let t;
            if (e instanceof Error) {
                const n = e.message,
                    i = null == n ? void 0 : n.split(" ").find(e => e.includes("http"));
                t = new URL(i), t.searchParams.set("t", `${Date.now()}`)
            }
            return Aa((function() {
                return ka(
                    import (t.href))
            }), (function() {
                throw e
            }))
        }))
    }))
}));

function Ia(e) {
    return !(!o.browser.chromium || e.video.spatial || "stock" === e.video.privacy || "https:" !== window.location.protocol)
}
const Ra = he("Storage Access", "color: #fff; background-color: #fc6203; padding: 2px; border-radius: 2px;"),
    Oa = () => o.storageAccessAPI;

function Na({
    element: t,
    delegate: n = {},
    cssLoadedPromise: i = Promise.resolve(null),
    name: s = null
}) {
    ge.set(Tn);
    let c = !1;
    const u = be(no, Ee(e => (...t) => {
            const n = e.apply(void 0, t),
                i = rt();

            function o(e, t) {
                return (e = [].concat(e)).map(e => t(n.createGetter(e)))
            }
            return d(d({}, n), {}, {
                watch: function(e, t) {
                    return o(e, e => {
                        let o = i.get({
                            selector: e,
                            listener: t
                        });
                        if (!o) {
                            const r = function(e, t) {
                                let i = e(n.getState());
                                return n.subscribe((function() {
                                    let o = e(n.getState());
                                    if (i !== o) {
                                        let e = i;
                                        i = o, t(i, e, n.getState())
                                    }
                                }))
                            }(e, t);
                            o = i.insert({
                                selector: e,
                                listener: t,
                                unsubscribe: r
                            })
                        }
                        return o.unsubscribe
                    })
                },
                unwatch: function(e, t) {
                    return o(e, e => {
                        const n = i.get({
                            selector: e,
                            listener: t
                        });
                        return n && n.unsubscribe()
                    })
                }
            })
        }, function(e = {}) {
            return t => (...n) => {
                const i = t.apply(void 0, n);

                function o() {
                    return e
                }
                const r = U(e => {
                    if (F(e)) return e;
                    const t = l(o(), e);
                    return F(t) ? t : t => l(t, e)
                });
                return d(d({}, i), {}, {
                    getSelectors: o,
                    createGetter: r,
                    get: function(e, t) {
                        let n = (e = r(e))(i.getState());
                        return void 0 !== t && (n = H(n, t)), n
                    }
                })
            }
        }(io), ye.apply(void 0, []))),
        v = new Map,
        m = f(),
        h = new Sn({
            events: m
        }),
        g = gt();
    t.classList.add(`player-${g}`), t.classList.add("loading"), t.id || (t.id = `player${g}`), t.innerHTML = oo.render("outer", {
        strings: {
            back: "Back",
            close: "Close overlay"
        }
    });
    const b = t.querySelector(".vp-telecine");
    if (o.iOS) {
        const e = document.createElement("video");
        b.appendChild(e);
        try {
            e.setAttribute("muted", ""), e.setAttribute("playsinline", ""), e.load()
        } catch (Ie) {
            Tn.captureException(Ie)
        }
    }
    let y, E, C, w, T, L = null,
        S = null,
        k = null,
        A = null,
        P = null,
        I = null,
        R = null,
        O = null,
        N = [],
        M = {};
    const D = new Promise((e, t) => {
        T = e
    }).then(() => (m.fire(Yt._ready), null));
    let x = {
        get config() {
            return h.config
        },
        set config(e) {
            h.config = e
        },
        get delegate() {
            return n
        },
        set delegate(e) {
            n = e
        },
        ready(e) {
            if (!e) return D;
            D.then(() => e()).catch(e => {
                Tn.captureException(e)
            })
        },
        get sessionId() {
            return h.config.request.session
        },
        get name() {
            return s
        }
    };

    function B(e) {
        var t;
        const {
            old: n,
            loaded: i
        } = e;
        if (function(e, t) {
                var n;
                null == (n = t.request) || n.ab_tests
            }(0, i), (null == (t = i.request) ? void 0 : t.urls.js) && we(i.request.urls.js), window.parent !== window) {
            var o;
            let e = "Private Video on Vimeo";
            i.view !== jt.main && i.view !== jt.privateUnlocked && i.view !== jt.webinarUnlocked || (e = `${i.video.title} from ${i.video.owner.name} on Vimeo`), document.title = e, (null == (o = history) ? void 0 : o.replaceState) && i.video && n && history.replaceState({
                id: i.video.id
            }, "", `/video/${i.video.id}${window.location.search}`)
        }
        if (i.view !== jt.main && i.view !== jt.privateUnlocked && i.view !== jt.webinarUnlocked) throw new Error(`Config not authorized: ${i.view}`);
        ! function(e, t) {
            (null == e ? void 0 : e.embed) && (null == t ? void 0 : t.embed) && [
                ["color", en],
                ["color_one", Jt],
                ["color_two", en],
                ["color_three", tn],
                ["color_four", nn]
            ].forEach(([n, i]) => {
                t.embed[n] && e.embed[n] !== t.embed[n] && m.fire(Mt._changeColor, t.embed[n], i)
            })
        }(n, i), A && A.reset();
        let r = !n || !n.video || n.video.id !== i.video.id || n.video.version.current !== i.video.version.current;
        return y = null, C = L, m.fire(Mt._reset), u.dispatch(Vn(i)), m.fire(Yt._configChanged, r, i), e
    }

    function V(e) {
        if ("opacity" === e.propertyName) {
            const e = document.querySelector(".vp-placeholder");
            e && (Le(e).off("transitionend", V), e.parentNode.removeChild(e))
        }
    }

    function q() {
        ! function() {
            const e = document.querySelector(".vp-placeholder");
            e && (Le(e).on("transitionend", V), e.classList.add("vp-placeholder-fadeout"))
        }(), t.classList.remove("loading"), T()
    }

    function $(e) {
        return i.then(() => {
            if (G(e), S && S.resetThumbnail(), "function" != typeof M.authorizationHandler) throw new Error("Config was not authorized.");
            return M.authorizationHandler(q)
        }).then(e => (h.config = e, y = null, u.dispatch(Vn(h.config)), m.fire(Mt._reset), m.fire(Yt._configChanged, !0, h.config), e))
    }

    function W() {
        c || (m.on(Yt._userLogIn, (function(e) {
            h.reload().then(t => {
                if (!h.config.user.logged_in) return m.fire(Yt._loginFailure), t;
                switch (m.fire(Yt._userLoggedIn, e), e) {
                    case "like":
                        h.config.user.liked && m.fire(Yt._liked);
                        break;
                    case "watch-later":
                        h.config.user.watch_later && m.fire(Yt._addedToWatchLater);
                        break;
                    case "private":
                        m.fire(Yt._privateUnlocked, t.loaded)
                }
                return t
            }).catch(e => {
                Tn.captureException(e)
            })
        })), m.on(Yt._userLoggedOut, () => {
            h.reload().catch(e => {
                Tn.captureException(e)
            })
        }), c = !0)
    }

    function Y(e) {
        (function() {
            const e = function(e, t) {
                    const n = new RegExp(`[?&]vimeo_t_${t}=([^&#]*)`).exec(e.href);
                    let i;
                    return n && (i = decodeURI(n[1])), i ? `#t=${i}` : e.hash
                }(document.location, h.config.video.id),
                t = function(e) {
                    var t;
                    let n = e.match(/\ba?t=([0-9hms:]+)/);
                    null !== n && (e = n[1]);
                    let i = !1,
                        o = 0,
                        r = 0,
                        a = 0;
                    return n = e.match(/^([0-9]+)$/), (null == (t = n) ? void 0 : t.length) && (i = !0, a = n[1]), !1 === i && (n = e.match(/^(?:([0-9]+)h)?(?:([0-9]+)m)?(?:([0-9]+)s)?/), null !== n && "" !== n[0] && (i = !0, [, o = 0, r = 0, a = 0] = n)), !1 === i && (n = e.match(/^([0-9:]+)/), null !== n && (i = !0, [a, r = 0, o = 0] = e.split(":").reverse())), i ? 60 * parseInt(o, 10) * 60 + 60 * parseInt(r, 10) + parseInt(a, 10) : null
                }(e);
            null !== t && (h.config.embed.time = pt(t, 0, h.config.video.duration), -1 !== e.indexOf("at=") && history && history.replaceState && history.replaceState("", "", window.location.pathname + window.location.search))
        })(), W(),
            function(e) {
                S = new Jn(e, u, t.querySelector(".vp-preview")), m.on([_.BUFFER_ENDED, p.PLAYING], () => {
                        S.hide()
                    }), L = new Ce(b, h.config), C = L, R = new kr(e), new bi(e, u, t.querySelector(".vp-video-wrapper")), z(e), e.doNotTrackEnabled || (h.config.request.urls.test_imp && function(e, t) {
                        if (!e.config.request.ab_tests) return;
                        const n = new r(t);
                        for (const i in e.config.request.ab_tests) {
                            const t = e.config.request.ab_tests[i];
                            if (!t.track) continue;
                            const o = {
                                session_id: e.config.request.session,
                                test_id: i,
                                test_group: String(t.group)
                            };
                            n.log(o, !0, !1).catch(e => {})
                        }
                    }(e, `${h.config.request.urls.test_imp}?beacon=1`), new wr(e, t, u, h.config.request.urls.fresnel), new ar(e), new ki(e, u), new Tr(e), function(e) {
                        function t(t) {
                            return function({
                                value: n
                            }) {
                                Rr[t] || (Rr[t] = !0, function(t, n) {
                                    cr("vimeo.player_performance_measurement", e, {
                                        measurement_type: t,
                                        measurement_value: n
                                    })
                                }(t, n))
                            }
                        }
                        Math.random() <= Ir && (_e(t(Pr.FIRST_INPUT_DELAY)), ve(t(Pr.CUMULATIVE_LAYOUT_SHIFT)), me(t(Pr.LARGEST_CONTENTFUL_PAINT)))
                    }(e)), A = new mi(e),
                    function(e) {
                        if (!Ia(e.config)) return;
                        const n = new Mn({
                            textAlert: new ur(t),
                            player: e
                        });
                        Dn.init({
                            chromecastPlayer: n
                        }), Dn.on([Nn.error, Nn.mediaLoadedFailed], e => {
                            Tn.captureException(e)
                        })
                    }(e), G(e)
            }(e)
    }

    function G(e) {
        k || (k = new dr(e), ro(x, k), Te.set(Tn))
    }

    function z(e) {
        const n = h.config.request.ads;
        n && (n.adcode && n.adunit || n.adurl) && (P = new Lr(e, t.querySelector(".vp-video-wrapper")), m.on(Yt._pausedForAd, () => {
            C = P, m.fire(Yt._displayContextChanged)
        }), m.on(Yt._resumedAfterAd, () => {
            C = L, m.fire(Yt._displayContextChanged)
        }), Dn && (Dn.on(Nn.connected, () => {
            P.toggleCastingState(!0)
        }), Dn.on(Nn.disconnected, () => {
            P.toggleCastingState(!1)
        })))
    }

    function j(e, t) {
        let n = e;
        return isNaN(e) && "string" != typeof e || (n = mt(vt(e), e, t)), n
    }
    let K = {
        get store() {
            return u
        },
        get config() {
            return h.config
        },
        get element() {
            return t
        },
        get events() {
            return m
        },
        get uuid() {
            return g
        },
        get expose() {
            return x
        },
        get backbone() {
            return L
        },
        get adHandler() {
            return P
        },
        get displayContext() {
            return C
        },
        get preview() {
            return S
        },
        get doNotTrackEnabled() {
            return h.config.embed.dnt || h.config.request.flags.dnt
        },
        get playLoggingEnabled() {
            return h.config.embed.log_plays && h.config.request.flags.plays
        },
        get currentTime() {
            return Dn.isCastConnected ? Dn.chromecastPlayer.currentTime : L.currentTime
        },
        get debugCollector() {
            return R
        },
        get fragmentsHandler() {
            return O
        },
        get ottVideoMetadata() {
            return I
        },
        get abTests() {
            return N
        },
        set ottVideoMetadata(e) {
            I = e
        },
        addABTest(e) {
            N.push(e)
        },
        init: (e, n) => E || (O = new Ar(K), new mo(K, u, t), M = n, E = h.load(e).then(B).catch(e => (W(), $(K))).then(() => "function" == typeof M.initializationHandler ? Promise.resolve(n.initializationHandler()) : null).then(() => (Y(K), "function" == typeof M.postInitializationHandler ? Promise.resolve(n.postInitializationHandler()) : null)).then(() => Promise.all([S.thumbnailPromise, i])).then(q).then(() => (Tn.setUp(K), null)).catch(e => {
            Tn.captureException(e)
        }), E),
        loadVideo(e, n) {
            if (w === e && y) return y;
            if (S && S.resetThumbnail(), null == n ? void 0 : n.video_version) {
                let e = h.config.video.version.available;
                if (!e || !Array.isArray(e)) return Promise.reject("No available video versions");
                if (e = e.map(e => e.id), -1 === e.indexOf(n.video_version)) return Promise.reject("Invalid version id specified")
            }
            m.fire(Yt._loadVideo), w = e, t.classList.add("loading");
            const i = j(e, n),
                o = v.get(i);
            return e = o ? o._config.loaded : e, y = h.load(e, n).then(e => {
                if (o) {
                    const e = L.element;
                    L = o._backbone, L.element.style.visibility = "visible", e.parentNode.replaceChild(L.element, e), m.fire(Yt._swapVideo)
                }
                return e = B(e), P || z(K), e
            }).catch(e => $(K)).then(e => {
                let t = S.loadThumbnail();
                return Promise.resolve(t)
            }).then(q), y
        },
        preloadVideo(e, t, n) {
            const i = j(t, n),
                o = v.get(i);
            return o ? Promise.resolve(o) : new Sn({
                events: m
            }).load(t, n).then(t => {
                t.loaded.preload = !0;
                const n = L.element.cloneNode(!1);
                n.style.visibility = "hidden", L.element.parentNode.insertBefore(n, L.element);
                const o = new Ce(n, t.loaded);
                o.loadVideo(t.loaded), o.preload = e;
                const r = {
                    _backbone: o,
                    _config: t
                };
                return v.set(i, r), r
            })
        },
        performDelegateAction(t, i = (() => {}), o = []) {
            var r, a;
            let s;
            var l;
            null != (r = n) && r[t.will] && (s = (l = n)[t.will].apply(l, [h.config.video.id].concat(e(o))), !1 === s) || (i.apply(void 0, [h.config.video.id].concat(e(o), [s])), (null == (a = n) ? void 0 : a[t.did]) && n[t.did]())
        },
        ready: () => D,
        verifyConfig: () => h.verify(),
        loadConfigRequestObject: () => h.loadRequest().then(e => {
            const t = d(d({}, h.config), {}, {
                request: e
            });
            return B({
                old: h.config,
                loaded: t
            })
        }).catch(e => $(K)),
        updatePhpTokens: () => new Promise((e, t) => {
            const {
                vimeo_api_client_token: n,
                vimeo_api_interaction_tokens: i,
                vimeo_live_client_token: o,
                vimeo_bucketed_live_client_token: r
            } = h.config.user;
            let s = !1;
            if (n) try {
                s = co(JSON.parse(atob(n.split(".")[1])).exp) >= 0
            } catch (Ie) {
                return void t(new Error("Failed to parse PHP client token expiration"))
            }
            if (i) try {
                const e = JSON.parse(atob(i.likes.split(".")[1])).exp,
                    t = JSON.parse(atob(i.watch_later.split(".")[1])).exp,
                    n = JSON.parse(atob(i.following.split(".")[1])).exp;
                s = co(e) >= 0 || co(t) >= 0 || co(n) >= 0
            } catch (Ie) {
                return void t(new Error("Failed to parse PHP interaction tokens expiration"))
            }
            if (o) try {
                s = co(JSON.parse(atob(o.split(".")[1])).exp) >= 0
            } catch (Ie) {
                return void t(new Error("Failed to parse PHP Live token expiration"))
            }
            if (r) try {
                s = co(JSON.parse(atob(r.split(".")[1])).exp) >= 0
            } catch (Ie) {
                return void t(new Error("Failed to parse PHP Live token expiration"))
            }
            if (s) {
                const {
                    signature: n,
                    session: i,
                    timestamp: o,
                    expires: r
                } = h.config.request, s = `https://${h.config.player_url}/video/${h.config.video.id}/token/refresh?signature=${n}&session=${i}&time=${o}&expires=${r}`;
                a(s, {
                    withCredentials: !0
                }).json().then(t => (h.config.user.vimeo_api_client_token = t ? t.vimeo_api_client_token : null, h.config.user.vimeo_api_interaction_tokens = t ? t.vimeo_api_interaction_tokens : null, h.config.user.vimeo_live_client_token = t ? t.vimeo_live_client_token : null, h.config.user.vimeo_bucketed_live_client_token = t ? t.vimeo_bucketed_live_client_token : null, e())).catch(e => {
                    Tn.captureBreadcrumb("Failed to refresh JWT token", {}, "auth", "error"), t(e)
                })
            } else e()
        })
    };
    return K
}
let Ma = function() {
    function e(e, t, n = 1) {
        f(this), this.version = n, this.visible = !1;
        var i = this._wrap = document.createElement("div");
        i.classList.add("compass-wrapper"), i.innerHTML = oo.render("compass", {
            version: n,
            label: "Reset view"
        }), i.classList.add("cloaked"), e.appendChild(i), t && i.addEventListener("click", t), this._layerSlice = i.querySelector(".compass-slice"), this._lineSlice = i.querySelector(".compass-line");
        const o = () => {
                this._mouseIn = !0
            },
            r = e => () => {
                setTimeout(() => {
                    this._mouseIn || (this.fade(), this._mouseIn = !1)
                }, e)
            };
        Le(this._wrap).on("mousein", o).on("pointerin", o).on("mouseout", r(1e3)).on("pointerout", r(1e3)), r(2500)()
    }
    var t = e.prototype;
    return t.setAngle = function(e, t) {
        this._animationFrame && window.cancelAnimationFrame(this._animationFrame);
        let n = 0;
        1 === this.version ? n = -45 : 2 === this.version && (n = -30);
        const i = `${n+t}`,
            o = (e + 85) / 170;
        this._animationFrame = window.requestAnimationFrame(() => {
            this._layerSlice.setAttribute("transform", `rotate(${i}, 18, 18)`), this._lineSlice && this._lineSlice.setAttribute("d", this._getLinePath(o, 18))
        })
    }, t._getLinePath = function(e, t) {
        const n = 2 * t - Math.round(2 * t * e),
            i = (2 * t - 2 * Math.sqrt(2 * n * t - Math.pow(n, 2))) / 2;
        return `M${i+5},${n} L${2*t-i-5},${n} z`
    }, t.reveal = function() {
        this._wrap.classList.remove("cloaked"), window.requestAnimationFrame(() => {
            this._wrap.classList.add("in")
        }), this.visible = !0
    }, t.fade = function() {
        this._wrap.classList.add("fade"), this.visible = !0
    }, t.hide = function() {
        this._wrap.classList.remove("in"), this._wrap.classList.remove("fade"), this._wrap.classList.add("leaving");
        const e = () => {
            "opacity" === event.propertyName && (this._wrap.classList.remove("leaving"), this._wrap.classList.add("cloaked"), this.visible = !1), Le(this._wrap).off("transitionend", e)
        };
        Le(this._wrap).on("transitionend", e)
    }, t.updatePosition = function(e) {
        if (!e) return;
        const t = ct(e);
        return t.height < 265 ? (this._wrap.classList.remove("align-bottom"), void this._wrap.classList.add("hidden")) : t.height < 336 ? (this._wrap.classList.remove("hidden"), void this._wrap.classList.add("align-bottom")) : (this._wrap.classList.remove("hidden"), void this._wrap.classList.remove("align-bottom"))
    }, t.getWrapper = function() {
        return this._wrap
    }, e
}();

function Da(e, t, n) {
    var i = null,
        r = o.touch ? 4500 : 2e3,
        a = !0,
        s = !0,
        l = !1,
        c = null,
        d = null,
        v = [],
        m = !1,
        f = null,
        h = null,
        g = null,
        b = !0,
        y = !1,
        E = !1,
        C = !1,
        w = !1,
        L = !1,
        S = n.querySelector(".vp-target"),
        k = n.querySelector(".vp-controls");
    let A = n.querySelector('button[class*="_playButton_"]');
    var P = n.querySelector(".vp-title"),
        I = n.querySelector(".vp-video");
    let R = n.querySelector(".vp-sidedock"),
        N = n.querySelectorAll(".vp-menu"),
        M = n.querySelector(".vp-ads-wrapper");
    const D = e.config.embed.autoplay && e.config.request.flags.autohide_controls,
        x = o.touch ? 300 : 0;
    let B = null;
    const V = mr(e.config, "webvr").group || !1;

    function U() {
        clearTimeout(i), i = null
    }

    function F() {
        "preact-menu" !== g && (g && g.isNewMenu && g.isFullwidth() || L && (clearTimeout(i), i = setTimeout(() => q(!1, !0), r)))
    }

    function H() {
        Z.element && Z.element.classList.contains("js-player-fullscreen") && (l || (n.classList.add("player-cursor-hide"), s = !0, l = !0))
    }

    function q(t, i) {
        var r, l, c;
        if ("preact-menu" === g && i) return;
        if (g && g.isNewMenu && g.isFullwidth()) return;
        if (!y && !b && !n.classList.contains("player-ad")) return;
        if (C) return;
        U(), k = J(), A = ee(), R = Q(), N = n.querySelectorAll(".vp-menu");
        const d = document.activeElement && document.body.classList.contains("showfocus") && ((null == (r = R) ? void 0 : r.contains(document.activeElement)) || (null == (l = k) ? void 0 : l.contains(document.activeElement)) || (null == (c = A) ? void 0 : c.contains(document.activeElement))),
            u = document.activeElement && "preact-menu" === g && Array.from(N).find(e => null == e ? void 0 : e.contains(document.activeElement));
        d || u || (e.events.fire(t ? Yt._mousedOut : Yt._mouseTimeout), s = !0, o.spatialPlayback && e.config.video.spatial || (S.classList.add("hidden"), S.setAttribute("hidden", "")), a = !0, H())
    }

    function $() {
        F(), w || y && b && !n.classList.contains("player-ad") || (e.events.fire(Yt._mousedOver), S.classList.remove("hidden"), S.removeAttribute("hidden"))
    }

    function W() {
        y || b ? n.removeAttribute("tabindex") : y || b || E || n.setAttribute("tabindex", "0")
    }

    function Y() {
        e.events.on([p.TIME_UPDATE, p.SEEKED], (function t({
            currentTime: n
        }) {
            n >= 1.75 && null === i && (e.events.fire(Yt._targetTimeReached), e.events.off([p.TIME_UPDATE, p.SEEKED], t))
        }))
    }

    function G() {
        I.classList.remove("threesixty-video"), e.element.classList.remove("grabbable"), e.element.classList.remove("grabbing"), c && c.hide()
    }

    function z() {
        v.forEach(e => clearTimeout(e)), v = []
    }

    function j(e) {
        e && (e.classList.remove("cloaked"), window.requestAnimationFrame(() => {
            e.classList.add("in")
        }))
    }

    function K(e) {
        e && (e.classList.add("leaving"), window.requestAnimationFrame(() => {
            Le(e).on("transitionend", (function t(n) {
                "opacity" === n.propertyName && (e.classList.remove("in"), e.classList.remove("leaving"), e.classList.add("cloaked"), Le(e).off("transitionend", t))
            }))
        }))
    }

    function X(e) {
        R = Q(), ct(R).width > 60 ? e.classList.add("vp-alert-bumpdown") : e.classList.remove("vp-alert-bumpdown")
    }

    function Q() {
        return R || (R = n.querySelector(".vp-sidedock"), R)
    }

    function J() {
        return k || (k = n.querySelector(".vp-controls"))
    }

    function ee() {
        return A || (A = n.querySelector('button[class*="_playButton_"]'), A)
    }
    return function() {
            var t = !0;

            function i() {
                $()
            }

            function d(i) {
                var c;
                if (r = 2e3, s) s = !1;
                else if (l && (n.classList.remove("player-cursor-hide"), l = !1), 0 !== i.screenX && i.screenX !== screen.width - 1 && 0 !== i.screenY && i.screenY !== screen.height - 1) {
                    if (t = !0, o.spatialPlayback && (null == (c = e.config.video) ? void 0 : c.spatial)) {
                        const t = ct(e.element),
                            n = i.clientX - t.left,
                            o = i.clientY - t.top,
                            r = 180,
                            a = o > e.element.clientHeight - 55,
                            s = n > e.element.clientWidth - 45 && o < r;
                        if (m || !a && !s) return
                    }
                    a && $(), F()
                } else U(), H(), t && (q(!0), t = !1)
            }

            function u(e) {
                var t;
                M = M || (M = n.querySelector(".vp-ads-wrapper"), M), null != (t = M) && t.contains(e.target) || q(!0)
            }

            function p(e) {
                var t, n, i;
                k = J(), R = Q(), A = ee();
                var o = (null == (t = k) ? void 0 : t.contains(e.target)) || (null == (n = R) ? void 0 : n.contains(e.target)) || (null == (i = A) ? void 0 : i.contains(e.target));
                let r = c && c.getWrapper().contains(e.target);
                y && b || r ? o || !y && !b || q(!0) : (clearTimeout(B), B = setTimeout($, x))
            }

            function _(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return d(e)
            }
            o.pointerEvents ? Le(n).on("pointerenter", (function(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return r = 2e3, i();
                r = 4500, p(e)
            })).on("pointermove", _).on("pointerleave", (function(e) {
                if ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE) return u(e)
            })) : Le(n).on("touchmove", (function() {
                r = 4500, F()
            })).on("touchend", p).on("mouseenter", i).on("mousemove", d).on("mouseleave", u), e.events.on(Yt._didEnterFullscreen, (function() {
                o.pointerEvents ? Le(Z.element).on("pointermove", _) : Le(Z.element).on("mousemove", d)
            })), e.events.on(Yt._didExitFullscreen, (function() {
                o.pointerEvents ? Le(Z.element).off("pointermove", _) : Le(Z.element).off("mousemove", d)
            }))
        }(), e.events.on(p.PLAY, (function(e) {
            D || 0 === e || $()
        })).on(Yt._paused, $).on([_.BUFFER_ENDED, p.SEEKED, Yt._scrubbingEnded, Yt._volumeChanged, Yt._menuPanelOpened], F).on(u, (function() {
            L = !0
        })), e.events.on(Yt._menuVisibilityChanged, (function(e) {
            e && F()
        })), e.events.on(Yt._overlayOpened, W).on(Yt._controlBarVisibilityChanged, (function(e) {
            b = e, W()
        })).on(Yt._sidedockVisibilityChanged, (function(e) {
            y = e, W()
        })), e.events.on(Yt._outroDisplayed, (function() {
            C = !0, $()
        })).on(Yt._outroHidden, (function() {
            C = !1
        })),
        function() {
            var i = !1,
                r = 0;
            e.events.on(Yt._menuVisibilityChanged, (function(e, t) {
                g = "preact-menu" === e ? e : e ? t : null
            })), Le(n).on(o.pointerEvents ? "pointerup" : "click", (function(i) {
                if (g) return;
                if (2 === i.button) return;
                if (!i.target.classList) return;
                if (! function(e) {
                        var t, i;
                        return R = Q(), P = P || (P = n.querySelector(".vp-title")), (e.classList.contains("vp-title") || e.classList.contains("vp-target") || (null == (t = P) ? void 0 : t.contains(e.parentNode)) && "HEADER" === e.parentNode.tagName || I.contains(e)) && !(null == (i = R) ? void 0 : i.contains(e))
                    }(i.target)) return;
                var a = ("pointerup" === i.type || "MSPointerUp" === i.type) && "mouse" !== i.pointerType && i.pointerType !== i.MSPOINTER_TYPE_MOUSE;
                const s = L && o.spatialPlayback && e.config.video.spatial && d;
                if (o.touch || a) {
                    const t = !o.mobileAndroid;
                    if (!s) {
                        if (L && t) return;
                        return void e.events.fire(Yt._playButtonPressed)
                    }
                }
                1 == ++r && setTimeout((function() {
                    if (s) {
                        let t = h && h.x === i.clientX && h.y === i.clientY;
                        return 1 === r && t && !o.mobileAndroid && e.events.fire(e.backbone.paused ? Yt._playButtonPressed : Yt._pauseButtonPressed), 1 !== r && e.backbone.getEffectByName("ThreeSixtyEffect").snapToCenter(), void(r = 0)
                    }
                    if (1 === r) {
                        if (t.get(Hn) && !t.get(zn)) return;
                        e.events.fire(e.backbone.paused ? Yt._playButtonPressed : Yt._pauseButtonPressed)
                    } else e.events.fire(Yt._fullscreenButtonPressed);
                    r = 0
                }), 200)
            })), Le(n).on("mousedown", ".vp-video-wrapper", (function(e) {
                var t;
                if (!i) return S.classList.remove("hidden"), S.removeAttribute("hidden"), 2 !== e.button && document.createEvent && ((t = document.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), S.dispatchEvent(t)), !1
            })).on("contextmenu", ".vp-video", (function(e) {
                return S.classList.remove("hidden"), S.removeAttribute("hidden"), !1
            })), e.events.on(Mt._toggleNativeControls, (function(e) {
                if (e) return i = !0, void S.classList.add("hidden");
                i = !1, S.classList.remove("hidden")
            }))
        }(),
        function() {
            var t, i;
            o.touch || (Le(n).on("focus", "a, button, input, [tabindex]", (function() {
                i = this, clearTimeout(t), t = null, document.activeElement === this && $()
            })), Le(n).on("blur", "a, button, input, [tabindex]", (function() {
                document.activeElement === this && (t = setTimeout(q, 50))
            })), n.addEventListener("focus", (function(e) {
                $(), i && i.focus()
            }), !1), e.events.on(Yt._overlayOpened, (function() {
                E = !0, n.removeAttribute("tabindex")
            })), e.events.on(Yt._overlayClosed, (function() {
                E = !1, W()
            })))
        }(), e.events.on(Yt._didEnterFullscreen, (function(e) {
            H(), d && d.adjustRenderSize(), C && $()
        })).on(Yt._didExitFullscreen, (function(e) {
            a = !0, d && d.adjustRenderSize(), e ? q() : ($(), U())
        })), Y(), e.events.on(Mt._reset, (function() {
            a = !0, s = !0, b = !0, y = !1, w = !1, L = !1, Y(), U()
        })), e.events.on(Mt._attachSpatialPlaybackEvents, (function() {
            const t = e => (...t) => {
                    d && e.apply(void 0, t)
                },
                i = t(t => {
                    const n = e.element.classList.contains("webvr");
                    d && n && d.toggleVR()
                }),
                r = t(t => {
                    d.isVRPresenting ? setTimeout(() => {
                        e.events.fire(O.WEBVR_ENTER)
                    }, 100) : setTimeout(() => {
                        e.events.fire(O.WEBVR_EXIT)
                    }, 100)
                });
            e.events.on(Mt._revealSpatialControls, t(() => {
                const t = e.element.classList.contains("webvr");
                t || e.element.classList.add("grabbable"), c && c.updatePosition(e.element), !c || c.visible || t || c.reveal()
            })), e.events.on(Yt._ended, t(() => {
                G(), o.webvr && d.isVRPresenting && V && d.toggleVR()
            })), e.events.on(O.CAMERA_UPDATE, t(e => {
                c && c.setAngle(e.pitch, e.yaw)
            })), e.events.on(u, t(() => {
                e.config.video.spatial ? function() {
                    function t(e) {
                        f && (f.innerHTML = oo.render("threesixty_reminder", e))
                    }
                    let i = e.backbone.getEffectByName("ThreeSixtyEffect");
                    e.config.embed.settings.spatial_compass ? (c || (c = new Ma(e.element.querySelector(".vp-controls-wrapper"), () => {
                            i.snapToCenter()
                        })), c.updatePosition(e.element), c.reveal()) : c && c.hide(), e.events.once(Yt._firstTimeUpdate, () => {
                            const n = e.config.embed.cards;
                            (null == n ? void 0 : n.length) && n[0].timecode < 15 || (v.push(setTimeout(() => {
                                t({
                                    showArrows: !1,
                                    text: o.android ? "Look around" : "Click and drag to look around"
                                }), X(f), j(f), setTimeout(() => K(f), 3e3)
                            }, 7e3)), o.android || v.push(setTimeout(() => {
                                t({
                                    showArrows: !1,
                                    text: o.android ? "Look around" : "Use arrow keys to see more"
                                }), X(f), j(f), setTimeout(() => K(f), 3e3)
                            }, 14e3)))
                        }),
                        function() {
                            const e = n;
                            if (f) return;
                            let t = f = document.createElement("div");
                            t.classList.add("cloaked"), t.classList.add("vp-alert-round"), t.classList.add("vp-alert-round--top"), t.classList.add("vp-alert-round--threesixty"), e.appendChild(t)
                        }()
                }() : !e.config.video.spatial && c && (G(), z())
            })), (o.webvr || o.stereoscopic || o.webxr) && (o.webvr && window.addEventListener("vrdisplaypresentchange", r, !1), e.events.on(Yt._stereoscopicButtonPressed, t(() => {
                z(), o.webvr && d.hasVRHeadset && V ? d.toggleVR() : e.events.fire(Yt._showAndroidVRDeepLink)
            })), e.events.on(O.WEBVR_HARDWARE_AVAILABLE, t(e => {
                const t = n.querySelector(".stereoscopic");
                t && t.classList.contains("off") && V && t.classList.remove("off")
            })), e.events.on(O.WEBVR_ENTER, t(t => {
                window.addEventListener("vrdisplaydisconnect", i, !1), window.addEventListener("vrdisplaydeactivate", i, !1), c && c.hide(), e.element.classList.remove("grabbable"), e.element.classList.add("webvr"), d.isUserInteracting = !1
            })), e.events.on(O.WEBVR_EXIT, t(t => {
                window.removeEventListener("vrdisplaydisconnect", i), window.removeEventListener("vrdisplaydeactivate", i), c && c.reveal(), e.element.classList.add("grabbable"), e.element.classList.remove("webvr"), d.isUserInteracting = !0
            })));
            let a = null;
            const s = t(t => {
                    const n = e.element.classList.contains("webvr");
                    m || n || (m = !0, t.preventDefault(), e.element.classList.add("grabbing"), h = {
                        x: t.clientX,
                        y: t.clientY
                    }, d.makeContact(h))
                }),
                l = t(t => {
                    const n = e.element.classList.contains("webvr");
                    m && !n && (z(), d.move({
                        x: t.clientX,
                        y: t.clientY
                    }))
                }),
                p = t(t => {
                    const n = e.element.classList.contains("webvr");
                    m && !n && (e.element.classList.remove("grabbing"), d.releaseContact(!1), m = !1)
                }),
                _ = t(t => {
                    t.preventDefault(), e.element.classList.contains("webvr") || (d.isUserInteracting || (d.isUserInteracting = !0), null !== a && clearTimeout(a), z(), a = setTimeout(() => {
                        e.element.classList.remove("player-cursor-hide"), e.element.classList.add("grabbable"), d.isUserInteracting = !1
                    }, 500), e.element.classList.add("player-cursor-hide"), e.element.classList.remove("grabbable"), d.moveWheel({
                        x: t.deltaX,
                        y: t.deltaY
                    }))
                }),
                g = t(e => {
                    m || (m = !0, d.makeContact({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }))
                }),
                b = t(e => {
                    m && (e.preventDefault(), z(), d.move({
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY
                    }))
                }),
                y = t(e => {
                    d.releaseContact(!0), m = !1
                }),
                E = t(e => {
                    m || z(), d.moveDevice(e.alpha, e.beta, e.gamma, e.orientation)
                }),
                C = t(t => {
                    m = !1, e.element.classList.remove("grabbing"), d.abandonMotion()
                });
            e.events.on(u, () => {
                o.android && d && window.addEventListener("deviceorientation", E, !1)
            }), e.events.once(u, () => {
                e.store.watch("ui.player.boundingRect", () => {
                    c && c.updatePosition(e.element), d && d.adjustRenderSize(), m = !1
                }), o.pointerEvents ? (Le(S).on("pointerdown", s), window.addEventListener("pointermove", l), window.addEventListener("pointerup", p), window.addEventListener("pointerleave", C)) : (Le(S).on("mousedown", s).on("wheel", _), window.addEventListener("touchstart", g, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("touchmove", b, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("touchend", y, !!o.passiveEvents && {
                    passive: !1
                }), window.addEventListener("mousemove", l), window.addEventListener("mouseup", p), window.addEventListener("mouseleave", C))
            })
        })), e.events.on(T, e => {
            G(), d = e, z()
        }), e.events.on(Yt._nudgeAttempted, () => {
            w = !0, clearTimeout(B), B = null
        }), e.events.on(Yt._nudgeEnded, () => {
            w = !1
        }), {}
}
let xa = function() {
    function e(e) {
        this.alertTextElement = e.querySelector(".vp-text-alert-wrapper"), this.alertContentTitle = this.alertTextElement.querySelector(".vp-live-start-time-title"), this.alertContentTime = this.alertTextElement.querySelector(".vp-live-start-time-body"), this.alertContentFooter = this.alertTextElement.querySelector(".vp-live-start-time-footer")
    }
    var t = e.prototype;
    return t.show = function(e = "", t = "", n = "") {
        this.alertContentTitle.innerHTML = e, this.alertContentTime.innerHTML = t, this.alertContentFooter.innerHTML = n, this.alertContentTitle.classList.remove("hidden"), this.alertContentTime.classList.remove("hidden"), this.alertContentFooter.classList.remove("hidden"), this.alertTextElement.classList.remove("hidden")
    }, t.hide = function() {
        this.alertContentTitle.classList.add("hidden"), this.alertContentTime.classList.add("hidden"), this.alertContentFooter.classList.add("hidden"), this.alertTextElement.classList.add("hidden")
    }, e
}();
let Ba = function() {
    function e(e, t, n) {
        this.textAlert = new ur(e), this.timeAlert = new xa(e), this.player = t, this.store = n, this.startTime = new Date(this.store.get($n, null)), this._disabled = !1, this._setUpLiveEvents(), this._checkStatus()
    }
    var t = e.prototype;
    return t.disable = function() {
        this.hide(), this._disabled = !0
    }, t.hide = function() {
        this.textAlert.hide(), this.timeAlert.hide()
    }, t._checkStatus = function() {
        (this.store.get(Yn) || this.store.get(Gn)) && this._onLiveEventActive(), this.store.get(jn) && this._onLiveStreamEnded()
    }, t._setUpLiveEvents = function() {
        this.player.events.on(I.EVENT_ACTIVE, this._onLiveEventActive.bind(this)), this.player.events.on(I.STREAM_ONLINE, this._onLiveStreamOnline.bind(this)), this.player.events.on(I.STREAM_OFFLINE, this._onLiveStreamOffline.bind(this)), this.player.events.on(I.SETTINGS_UPDATED, this._onLiveSettingsUpdate.bind(this)), this.player.events.once(I.EVENT_ENDED, this._onLiveStreamEnded.bind(this)), this.player.events.on(Yt._webinarRegistrantBlocked, this._onLiveStreamEnded.bind(this)), this.player.events.on(Yt._webinarRegistrantUnblocked, this._onLiveStreamOnline.bind(this))
    }, t._onLiveSettingsUpdate = function(e, t) {
        "event_schedule" === e && this.store.dispatch(Un({
            eventSchedule: t
        })), "hide_live_label" === e && this.store.dispatch(Un({
            hideLiveLabel: t
        }))
    }, t._onLiveEventActive = function() {
        this._setLiveEventSchedule(this.store.get(Zn))
    }, t._displayTimeAlert = function() {
        const e = this._timeToDisplayText(this.player.config.request.lang);
        this.timeAlert.show(e[0], e[1], e[2]), !this.store.get(Yn) && !this.store.get(Gn) || this._disabled || setTimeout(this._checkStatus.bind(this), 1e3)
    }, t._timeToEventStart = function() {
        return this.startTime - new Date
    }, t._timeToDisplayText = function(e) {
        const t = this._timeToEventStart(),
            n = Math.ceil(t / 1e3).toFixed(0),
            i = Math.ceil(t / 6e4).toFixed(0),
            o = Math.ceil(t / 36e5).toFixed(0),
            r = Math.ceil(t / 864e5).toFixed(0),
            a = (new Date).toDateString() === this.startTime.toDateString();
        if (r > 1 || !a) return ("This event is scheduled for\n" + new Intl.DateTimeFormat(e, {
            month: "long",
            day: "numeric"
        }).format(this.startTime) + "\nat " + new Intl.DateTimeFormat(e, {
            hour: "2-digit",
            minute: "2-digit"
        }).format(this.startTime)).split("\n");
        if (o > 1 && a) return ("This event is scheduled for\nToday\nat " + new Intl.DateTimeFormat(e, {
            hour: "numeric",
            minute: "numeric"
        }).format(this.startTime)).split("\n");
        let s;
        const l = i > 1;
        return s = l ? "minutes" : n > 1 ? "seconds" : "second", ("This event will start in\n" + (l ? i : n) + " " + s).split("\n")
    }, t._onLiveStreamOnline = function() {
        this.hide()
    }, t._onLiveStreamOffline = function() {
        this.textAlert.show("Live stream offline"), o.iOS && Z.element && (this.player.events.fire(Yt._willExitFullscreen), Z.exit())
    }, t._onLiveStreamEnded = function() {
        this.textAlert.show("Live event ended")
    }, t._setLiveEventSchedule = function(e) {
        e ? this._timeToEventStart() > 0 ? (this.textAlert.hide(), this._displayTimeAlert()) : (this.timeAlert.hide(), this.textAlert.show("This event hasn't started yet")) : (this.timeAlert.hide(), this.textAlert.hide())
    }, e
}();

function Va(e, t) {
    var n, i = t.querySelector(".vp-notification");

    function r(e, r) {
        if (null !== t.parentElement.offsetParent) {
            t.classList.remove("hidden"), t.removeAttribute("hidden"), t.setAttribute("data-name", e);
            var s = function(e) {
                    var n = "watchlater" === e || "unwatchlater" === e ? .5 : .4,
                        i = t.clientHeight;
                    return t.clientHeight > t.clientWidth && (i = t.clientWidth), {
                        height: Math.round(i * n),
                        width: Math.round(i * n * 1.6)
                    }
                }(e),
                l = "width:" + s.width + "px;height:" + s.height + "px";
            i.style.cssText = l, i.innerHTML = r, "watchlater" !== e && "unwatchlater" !== e || function(e, t) {
                var n = e.querySelector(".hour-hand"),
                    i = e.querySelector(".minute-hand");
                if (n && i) {
                    var r = t ? 1 : -1,
                        a = new Date,
                        s = Math.abs(a.getHours() - 12),
                        l = a.getMinutes(),
                        c = l / 60 * 360 - 135,
                        d = s / 12 * 360 + l / 60 * 5,
                        u = d + 45 * r,
                        p = c + 540 * r;
                    n.style[o.transformProperty] = "rotate(" + d + "deg)", i.style[o.transformProperty] = "rotate(" + c + "deg)", window.requestAnimationFrame((function() {
                        e.classList.add("animate"), o.browser.firefox || o.browser.opera || window.requestAnimationFrame((function() {
                            n.style[o.transformProperty] = "rotate(" + u + "deg)", i.style[o.transformProperty] = "rotate(" + p + "deg)"
                        }))
                    }))
                }
            }(i, "watchlater" === e), clearTimeout(n), t.classList.remove("animate"), window.requestAnimationFrame((function() {
                t.classList.remove("invisible"), n = setTimeout(a, 750)
            }))
        }
    }

    function a() {
        t.classList.add("animate"), t.classList.add("invisible")
    }

    function s() {
        t.classList.remove("animate"), t.classList.remove("invisible"), t.classList.add("hidden"), t.setAttribute("hidden", ""), t.removeAttribute("data-name"), i.innerHTML = "", i.classList.remove("filled"), i.classList.remove("animate"), e.events.fire(Yt._notificationHidden)
    }
    return Le(t).on("transitionend", (function(e) {
        i.contains(e.target) && "height" === e.propertyName ? setTimeout(a, 100) : e.target === t && "opacity" === e.propertyName && window.requestAnimationFrame(s)
    })), e.events.on(Yt._liked, (function(e) {
        e || r("like", oo.render("icon_heart"))
    })), e.events.on(Yt._unliked, (function(e) {
        e || r("unlike", oo.render("icon_broken_heart"))
    })), e.events.on(Yt._addedToWatchLater, (function(e) {
        e || r("watchlater", oo.render("icon_clock"))
    })), e.events.on(Yt._removedFromWatchLater, (function(e) {
        e || r("unwatchlater", oo.render("icon_clock"))
    })), e.events.fire(Yt._notificationModuleReady), {}
}

function Ua(e, t, n, i) {
    var o = !1;
    i = "function" == typeof t ? n : i, n = "function" == typeof t ? t : n;
    var r = function(e) {
            var t = !0;
            if (e.changedTouches) {
                var r = e.changedTouches[0].pageX - window.pageXOffset,
                    a = e.changedTouches[0].pageY - window.pageYOffset,
                    s = document.elementFromPoint(r, a);
                null !== s && this.contains(s) && (t = n.call(this, e))
            }
            return "function" == typeof i && i.call(this, e), o = !0, t
        },
        a = function(e) {
            if (!o) return n.call(this, e);
            o = !1
        };
    (t = "function" == typeof t ? null : t) ? Le(e).on("click", t, a).on("touchend", t, r): Le(e).on("click", a).on("touchend", r)
}

function Fa(t, n) {
    const i = f();
    let r = !1,
        a = !1;

    function s(e) {
        _t(e, "facebook", {
            width: 580,
            height: 400
        })
    }

    function l(e) {
        _t(e, "twitter", {
            width: 550,
            height: 420
        })
    }

    function c(e) {
        _t(e, "tumblr", {
            width: 540,
            height: 600
        })
    }

    function d(e) {
        const n = t.element.querySelector(".vp-outro-wrapper");
        return "player_embed" + (n && n.classList.contains("in") ? "_end_screen" : "_share_overlay") + (e ? "_button" : "_keyboard")
    }
    let u = {
        get events() {
            return i
        },
        setup() {
            var i;
            n.classList.remove("vp-share-embed-active", "vp-share-embed-only"), (null == (i = t.config.embed.settings.share) ? void 0 : i.embed_only) && n.classList.add("vp-share-embed-only");
            const o = n.querySelector(".js-embedCopy");
            o && (o.style.width = function(t, n, i = 2) {
                n = Object.keys(n).map(e => n[e]);
                const o = t.cloneNode();
                o.style.visibility = "hidden", o.style.padding = 0, t.parentElement.appendChild(o);
                let r = n.map(e => (o.innerText = e, o.clientWidth));
                const a = Math.max.apply(Math, e(r)),
                    s = window.getComputedStyle(t),
                    l = parseFloat(s.fontSize);
                return t.parentElement.removeChild(o), `${(a+i)/l}em`
            }(o, ["Copy", "Copied!"])), t.events.on(Yt._facebookButtonPressed, s).on(Yt._twitterButtonPressed, l).on(Yt._tumblrButtonPressed, c)
        },
        destroy() {
            t.events.off(Yt._facebookButtonPressed, s).off(Yt._twitterButtonPressed, l).off(Yt._tumblrButtonPressed, c)
        },
        getShareData(e = {}, n) {
            var i, a;
            const s = t.config.video.title,
                l = t.config.video.owner.name,
                c = t.config.video.share_url;
            r = document.queryCommandSupported && document.queryCommandSupported("copy");
            const d = t.config.video.unlisted_hash ? `?h=${t.config.video.unlisted_hash}` : "";
            return e.template = oo.render("share", {
                url: t.config.video.url,
                shareUrl: c,
                playerShareUrl: `https://${t.config.player_url}/video/${t.config.video.id}/share`,
                unlistedHashParam: d,
                title: s,
                owner: l,
                embed: "public" === t.config.video.embed_permission && t.config.embed.settings.embed,
                embedOnly: null == (i = t.config.embed.settings.share) ? void 0 : i.embed_only,
                embedCode: Se(t.config.video.embed_code),
                copyButton: r,
                customizeEmbed: !!t.config.video.url,
                readOnly: !o.touch,
                facebookIcon: oo.render("icon_facebook", {
                    title: "Share on Facebook"
                }),
                twitterIcon: oo.render("icon_twitter", {
                    title: "Share on Twitter"
                }),
                tumblrIcon: oo.render("icon_tumblr", {
                    title: "Share on Tumblr"
                }),
                emailIcon: oo.render("icon_mail", {
                    title: "Share via Email"
                }),
                embedIcon: oo.render("icon_embed", {
                    title: "Get embed code"
                }),
                strings: {
                    share: "Share",
                    emailSubject: "Check out “" + s + "” from " + l + " on Vimeo",
                    emailBody: "Check out “" + s + "” from " + l + " on Vimeo.\n\nThe video is available for your viewing pleasure at " + c + "\n\nIf you like this video, make sure you share it, too!\n\nVimeo is filled with lots of amazing videos. See more at https://vimeo.com.",
                    embedTitle: "Embed",
                    embedSubtitle: "Add this video to your site with the embed code below.",
                    copy: "Copy",
                    copySuccess: "Copied!",
                    customize: `<a href="${t.config.video.url}#embed" target="_blank" rel="noopener" aria-describedby="new-window">` + "Customize this embed</a> on Vimeo"
                }
            }), e._firstFocusElement = ".js-facebook", (null == (a = t.config.embed.settings.share) ? void 0 : a.embed_only) && (e.wrapperClass = "embed-only", e._firstFocusElement = ".js-embed-input"), e
        },
        showShareView() {
            n.querySelector(".js-share-screen").classList.remove("cloaked"), n.classList.remove("vp-share-embed-active"), i.fire(Yt._shareViewShown)
        },
        showEmbedView() {
            t.config.embed.settings.share.embed_only || (n.querySelector(".js-embed-screen").classList.remove("cloaked"), n.classList.add("vp-share-embed-active")), i.fire(Yt._embedViewShown)
        },
        buildBPLocationString: d
    };
    return function() {
        var e;
        Le(n).on("transitionend", ".js-share-screen", (function(e) {
            "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && (i.fire(Yt._embedViewEnd), this.classList.add("cloaked"))
        })).on("transitionend", ".js-embed-screen", (function(e) {
            "opacity" === e.propertyName && "0" === window.getComputedStyle(this, "").opacity && (i.fire(Yt._shareViewEnd), this.classList.add("cloaked"), ft(n))
        })).on(["copy", "cut"], "input[name=embed_code]", (function() {
            cr("workflow.copy_video_embed_code", t, {
                location: d(a),
                path: window.location.pathname
            }), a = !1, t.events.fire(Yt._embedCodeCopied)
        })), Ua(n, ".js-facebook", (function() {
            return t.events.fire(Yt._facebookButtonPressed, this.href), st(), !1
        })), Ua(n, ".js-twitter", (function() {
            return t.events.fire(Yt._twitterButtonPressed, this.href), st(), !1
        })), Ua(n, ".js-tumblr", (function() {
            return t.events.fire(Yt._tumblrButtonPressed, this.href), st(), !1
        })), Ua(n, ".js-email", (function() {
            return t.events.fire(Yt._emailButtonPressed), window.top.location = this.href, st(), !1
        })), Ua(n, ".js-embed", (function() {
            return t.events.fire(Yt._embedButtonPressed), u.showEmbedView(), st(), !1
        })), Ua(n, ".js-embedCopy", (function() {
            if (r) {
                n.querySelector("input[name=embed_code]").select(), a = !0;
                try {
                    document.execCommand("copy") && function() {
                        t.events.fire(Yt._embedCodeCopied);
                        var i = n.querySelector(".js-embedCopy");
                        i.innerHTML = i.getAttribute("data-success-label"), clearTimeout(e), e = setTimeout((function() {
                            i.innerHTML = i.getAttribute("data-label")
                        }), 2e3)
                    }()
                } catch (Ie) {
                    a = !1
                }
                return document.activeElement.blur(), !1
            }
        })), o.touch ? Le(n).on("focus", "input[name=embed_code]", (function() {
            var e = this;
            setTimeout((function() {
                e.setSelectionRange(0, 9999), e.setAttribute("readonly", "readonly")
            }), 0)
        })).on("blur", "input", (function() {
            this.removeAttribute("readonly")
        })) : Le(n).on("click", "input[name=embed_code]", (function() {
            this.setSelectionRange(0, 9999)
        }))
    }(), u
}

function Ha(e, t, n) {
    if (n) return t ? t(e()) : e();
    try {
        var i = Promise.resolve(e());
        return t ? i.then(t) : i
    } catch (Ie) {
        return Promise.reject(Ie)
    }
}

function qa() {}

function $a(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Ie) {
            return Promise.reject(Ie)
        }
    }
}

function Wa(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Ya(e, t, n) {
    const i = $a((function() {
            return v = !0, l === Qt.BEGINNING ? (d.innerHTML = "", void e.events.fire(Mt._reset)) : function(e, t) {
                var n = function() {
                    if (L()) return Ha(r, (function() {
                        i()
                    }))
                }();
                return n && n.then ? n.then(t) : t()
            }(0, (function() {
                let i = function() {
                    if ([Qt.VIDEOS, Qt.THREEVIDEOS, Qt.PROMOTED].includes(l)) {
                        var t;
                        if (0 === ((null == (t = _) ? void 0 : t.contexts) || []).reduce((function(e, t) {
                                return e + t.videos.length
                            }), 0)) return null;
                        _.showFollowButton = !e.config.user.owner && e.config.user.logged_in, _.strings = {
                            follow: "Follow",
                            following: "Following",
                            unfollow: "Unfollow"
                        }
                    }
                    return _ && (_.target = !e.config.embed.on_site), C = l, [Qt.THREEVIDEOS, Qt.PROMOTED].includes(l) && (C = Qt.VIDEOS), oo.render("outro_" + C, _)
                }();
                i && (d.innerHTML = i, d.setAttribute("data-type", C), n.classList.remove("hidden"), n.removeAttribute("hidden"), f = !0, [Qt.VIDEOS, Qt.THREEVIDEOS].includes(l) ? function() {
                    const e = document.querySelector(".js-outro-followWrap");
                    if (e) {
                        const t = window.getComputedStyle(e),
                            n = parseFloat(t.fontSize);
                        e.style.width = `${e.clientWidth/n}em`
                    }
                }() : l === Qt.LINK ? (t.watch("ui.outro.isLinkTitleVisible", k), t.watch("ui.outro.isLinkDescriptionVisible", A), k(t.get("ui.outro.isLinkTitleVisible")), A(t.get("ui.outro.isLinkDescriptionVisible"))) : l === Qt.SHARE && function() {
                    const e = n.querySelector(".js-outro-content"),
                        t = s.getShareData();
                    e.innerHTML = t.template, s.setup()
                }(), window.requestAnimationFrame((function() {
                    window.requestAnimationFrame((function() {
                        n.classList.add("in"), I()
                    }))
                })))
            }))
        })),
        r = $a((function() {
            if (e.config.embed.outro === Qt.VOD) return l = Qt.VOD, void(_ = S(l));
            b = !0;
            const t = e.config.embed.email_capture_form || e.config.embed.email || {},
                n = e.config.video.unlisted_hash ? `h=${e.config.video.unlisted_hash}&` : "",
                i = `https://${e.config.player_url}/video/${e.config.video.id}/outro?${n}on_site=${e.config.embed.on_site}&type=${e.config.embed.outro}&email=${t?1:0}`;
            return function(e) {
                if (e && e.then) return e.then(qa)
            }(function(t, n) {
                try {
                    var o = Wa(a(i, {
                        withCredentials: !0
                    }), (function(t) {
                        return Wa(t.json(), (function(t) {
                            l = t.type, (_ = S(l, t.data)) && (_.bgimage && Pn(_.bgimage), _.contexts && _.contexts.forEach(e => {
                                e.videos.forEach(e => {
                                    Pn(e.thumbnail)
                                })
                            })), wo(e.config.video.owner) && function(t, n) {
                                [Qt.VIDEOS, Qt.THREEVIDEOS, Qt.PROMOTED].includes(t) && n.contexts && n.contexts.forEach(t => {
                                    t.videos.reduce((t, n) => t.then(function(t) {
                                        return () => e.preloadVideo("auto", t.id, {
                                            autoplay: !0
                                        }).catch(e => {})
                                    }(n)), Promise.resolve())
                                })
                            }(l, _)
                        }))
                    }))
                } catch (Ie) {
                    return
                }
                return o && o.then ? o.then(void 0, n) : o
            }(0, (function(e) {})))
        }));
    var s, l, c, d = n.querySelector(".vp-outro"),
        _ = null,
        v = !1,
        f = !1,
        h = !1,
        g = !1,
        b = !1,
        y = m(I, 250);
    let E = !1,
        C = null,
        w = e.config.request.ads instanceof Object,
        T = !1;
    const L = () => !b && null === _ && !e.config.embed.loop;

    function S(t, n = {}) {
        const {
            width: i,
            height: r
        } = kn(e.element.clientWidth * o.devicePixelRatio, e.element.clientHeight * o.devicePixelRatio);
        if (n.img_base && (n.bgimage = An({
                width: i,
                height: r,
                baseUrl: n.img_base
            })), t === Qt.VOD) {
            const t = void 0 !== e.config.video.vod.is_preorder ? e.config.video.vod.is_preorder : !!e.config.video.vod.date_available,
                i = e.config.video.vod.is_coming_soon,
                o = e.config.video.vod.date_available_formatted_datetime || e.config.video.vod.date_available;
            let r = "Coming soon to Vimeo On Demand.";
            i && o && (r = "Coming soon to Vimeo On Demand on " + o + "."), t && (r = "Pre-order now. Watch on " + o + "."), n = {
                purchased: e.config.user.purchased,
                title: e.config.video.vod.feature_title,
                url: e.config.video.vod.url,
                currency: e.config.request.currency,
                countries: e.config.video.vod.countries,
                country: e.config.request.country,
                buttons: e.config.video.vod.purchase_options,
                translationMap: e.config.request.dynamic_translation_map,
                isPreorder: t,
                isComingSoon: i,
                releaseDate: o,
                strings: {
                    watch: t ? "Watch on " + o : "Watch Now",
                    preRelease: r
                }
            }
        }
        return [Qt.VIDEOS, Qt.THREEVIDEOS, Qt.PROMOTED].includes(t) && (e.config.user.following = n.following, (n = {
            contexts: Array.isArray(n) ? n : [n],
            owner: e.config.video.owner.id,
            bgimage: n.bgimage,
            following: n.following
        }).contexts && n.contexts.forEach(e => {
            e.videos.forEach(t => {
                if (t.fullTitle = t.title, t.byline = "", t.owner.id !== n.owner && (t.fullTitle = t.title + " from " + t.owner.name, t.byline = "from " + t.owner.name), t.thumbnail_base) {
                    const n = Math.round(i / e.videos.length);
                    t.thumbnail = An({
                        width: n,
                        height: Math.round(n / 1.778),
                        baseUrl: t.thumbnail_base
                    })
                }
            })
        })), t === Qt.LINK && (n.url = Eo(n.url), n.url2 = Eo(n.url2)), t === Qt.SHARE && (n.strings = {
            back: "Back"
        }), n
    }

    function k(e) {
        d.classList.toggle("vp-outro--link-medium", e)
    }

    function A(e) {
        d.classList.toggle("vp-outro--link-large", e)
    }

    function P() {
        if (f) return s.destroy(), v = !1, h = !1, f = !1, void window.requestAnimationFrame((function() {
            n.classList.remove("in"), e.events.fire(Yt._outroHidden), O()
        }));
        v && (v = !1, e.events.fire(Yt._outroHidden))
    }

    function I() {
        var t;
        if (!h && n.clientWidth) {
            Le(window).off("resize", y), h = !0;
            var i = [];
            (null == (t = _) ? void 0 : t.contexts) && _.contexts.forEach(e => {
                e.videos && e.videos.forEach(e => {
                    var t = e.id,
                        n = d.querySelector('[data-video-id="' + t + '"]');
                    n && n.clientWidth > 0 && i.push(t)
                })
            }), e.events.fire(Yt._outroDisplayed, i)
        }
    }

    function R() {
        const t = e.config.embed.email_capture_form || e.config.embed.email || {};
        "after-video" !== t.position && "after" !== t.position || E ? e.events.fire(Mt._showOutro) : (E = !0, c = setTimeout(() => {
            e.events.fire(Yt._showEmailCaptureForm), e.events.once(Yt._emailCaptureEnd, () => {
                e.events.fire(Mt._showOutro)
            })
        }, 250))
    }

    function O() {
        Le(window).off("resize", y), Le(window).on("resize", y)
    }
    return e.events.on(u, (function() {
        [Qt.NOTHING, Qt.BEGINNING, Qt.EMAIL].includes(e.config.embed.outro) && (l = e.config.embed.outro, _ = !1)
    })), e.events.on(Yt._allAdsCompleted, () => {
        T = !0
    }), e.events.on(p.TIME_UPDATE, $a((function({
        currentTime: e,
        duration: t
    }) {
        return g = !1, E = !1,
            function(n) {
                var i = function() {
                    if (e >= t - 10 && L()) return Ha(r, (function() {
                        g && R()
                    }))
                }();
                if (i && i.then) return i.then(qa)
            }()
    }))), e.events.on(Yt._ended, () => {
        if (g = !0, w && !T) return e.events.once(Yt._allAdsCompleted, R), void(w = !1);
        R()
    }), e.events.on(Yt._loadVideo, () => {
        clearTimeout(c)
    }), e.events.on(Yt._webinarRegistrantBlocked, () => {
        e.config.video.webinar && clearTimeout(c)
    }), e.events.on(Mt._showOutro, (function(t, n) {
        e.performDelegateAction($t, () => {
            t && (l = t, _ = null, b = !1), n && n.data && (_ = S(t, n.data)), i()
        })
    })), Le(n).on("click", ".js-videoLink", (function(t) {
        const n = parseInt(this.getAttribute("data-video-id"), 10);
        e.events.fire(Yt._outroVideoPressed, n);
        const i = nr(e.config),
            o = [Wo.SINGLE_VIDEO_VIEW_MANAGE, Wo.SINGLE_VIDEO_VIEW_RECIPIENT].includes(i);
        wo(e.config.video.owner) && !o && (t.preventDefault(), e.loadVideo(n, {
            autoplay: !0
        }))
    })), Le(n).on("click", ".js-cta", (function(t) {
        e.events.fire(Yt._outroCtaPressed, this.href)
    })), Le(n).on("click", ".js-link", (function(t) {
        e.events.fire(Yt._outroLinkPressed, this.href)
    })), Le(n).on("click", ".js-imageLink", (function(t) {
        e.events.fire(Yt._outroImagePressed, this.href)
    })), Le(n).on("transitionend", (function(e) {
        n.classList.contains("in") || (n.classList.add("hidden"), n.setAttribute("hidden", ""))
    }), !1), e.events.on([Mt._hideOutro, Mt._reset, p.PLAY, p.SEEKED, Yt._scrubbingStarted], P), e.events.on(Yt._outroDisplayed, (function() {
        e.element.classList.add("player-outroVisible")
    })).on(Yt._outroHidden, (function() {
        e.element.classList.remove("player-outroVisible")
    })), Ua(n, ".js-outro-follow", (function() {
        e.events.fire(Yt._followButtonPressed)
    })), Le(n).on("mouseleave", ".js-outro-follow", (function(e) {
        const t = document.querySelector(".js-outro-follow");
        t && t.classList.remove("vp-outro-follow--activated")
    })), e.events.on(Yt._followed, (function() {
        const e = document.querySelector(".js-outro-follow");
        e && (e.setAttribute("aria-pressed", !0), e.classList.add("vp-outro-follow--activated"))
    })), e.events.on(Yt._unfollowed, (function() {
        const e = document.querySelector(".js-outro-follow");
        e && e.setAttribute("aria-pressed", !1)
    })), e.events.on(Mt._showOverlay, (function() {
        setTimeout((function() {
            n.classList.add("hidden")
        }), 150)
    })), e.events.on(Yt._overlayClosed, (function() {
        n.classList.contains("in") && n.classList.remove("hidden")
    })), e.events.on(Mt._reset, (function() {
        _ = null, b = !1, w = e.config.request.ads instanceof Object
    })), Ua(n, ".js-vod-button", (function() {
        var t = this.getAttribute("data-product-id");
        return e.events.fire(Yt._vodButtonPressed, t), !1
    })), Ua(n, ".js-vod-watch", (function() {
        if (!("date_available" in e.config.video.vod)) return P(), e.events.fire(Yt._vodButtonPressed), !1
    })), d && ((s = new Fa(e, d)).events.on(Yt._embedViewShown, (function() {
        e.config.embed.settings.share.embed_only || (n.querySelector(".js-back").classList.remove("cloaked"), n.classList.add("embed-active"))
    })).on(Yt._shareViewShown, (function() {
        n.classList.remove("embed-active")
    })), Ua(n, ".js-back", (function() {
        return s.showShareView(), !1
    })), s.events.on(Yt._shareViewEnd, (function() {
        n.querySelector(".js-back").classList.add("cloaked")
    }))), O(), {}
}
let Ga = 0;

function za(e = "b") {
    return `${e}${++Ga}`
}
za(), za(), za(), za(), za(), za(), za();
const ja = za(),
    Ka = za(),
    Xa = za(),
    Za = za(),
    Qa = za(),
    Ja = za(),
    es = za(),
    ts = za(),
    ns = za(),
    is = za(),
    os = za(),
    rs = za();
var as = Object.freeze({
        __proto__: null,
        CONFIG_CHANGED: ja,
        TELECINE_READY: Ka,
        TELECINE_VIDEO_INIT: Xa,
        PLAY_INITIATED: Za,
        QUALITY_CHANGED: Qa,
        FORCED_QUALITY: Ja,
        CUE_CHANGED: es,
        CAPTIONS_CHANGED: ts,
        SPATIAL_PLAYBACK_TOGGLED: ns,
        PICTURE_IN_PICTURE_AVAILABLE_SAFARI: is,
        HLS_QUALITY_CHANGED: os,
        AUDIO_TRACK_CHANGED: rs
    }),
    ss = Object.freeze({
        __proto__: null,
        EVENT_PENDING: "liveeventpending",
        EVENT_ACTIVE: "liveeventactive",
        EVENT_STARTING: "liveeventstarting",
        EVENT_STARTED: "liveeventstarted",
        EVENT_ENDED: "liveeventended",
        ARCHIVE_STARTED: "livearchivestarted",
        ARCHIVE_DONE: "livearchivedone",
        ARCHIVE_ERROR: "livearchiveerror",
        SETTINGS_UPDATED: "livesettingsupdated",
        LOW_LATENCY_FALLBACK: "lowlatencyfallback",
        LIVE_STATS_SUCCESS: "livestatssuccess",
        LIVE_STATS_FAILURE: "livestatsfailure"
    });
d(d(d(d(d(d(d(d(d({}, p), _), ke), ss), O), P), R), N), as);
const ls = d(d({}, ke), ss);

function cs(e, t = null) {
    return "after-video" === (t = t || e.position) || "after" === t
}

function ds(e) {
    return An({
        height: 72 * o.devicePixelRatio,
        width: 640 * o.devicePixelRatio,
        baseUrl: e
    })
}
let us = function() {
    function e(e) {
        this.element = e, this.cachedElements = {}
    }
    var t = e.prototype;
    return t.getElement = function(e) {
        return this.cachedElements[e] || (this.cachedElements[e] = this.element.querySelector(e)), this.cachedElements[e]
    }, t.removeElement = function(e) {
        this.getElement(e) && (this.cachedElements[e].remove(), this.cachedElements[e] = null)
    }, t.updateAll = function(e, t) {
        this.updateTitle(e.text || e.custom_message), this.updateSkipBtn(e.allow_skip || e.skippable, e.position), this.updatePrivacyPolicy(e.privacy_policy), this.updateCustomLogo(e.custom_logo), this.updateFields(e.custom_fields, t)
    }, t.updateTitle = function(e) {
        const t = this.getElement(".vp-email-capture-title");
        e && t ? t.textContent = Es(e) : !e && t && (t.textContent = "")
    }, t.updateSkipBtn = function(e, t) {
        const n = this.getElement(".vp-email-capture-form-button--cancel");
        if (e && n) n.value = cs(null, t) ? "Skip" : "Skip to video";
        else if (e && !n) {
            const e = this.getElement(".vp-email-capture-form-skip");
            let n = oo.render("email_capture_skip", {
                position: t,
                skipText: "Skip",
                skipToVideoText: "Skip to video",
                positionIsAfter: cs(null, t)
            });
            e.insertAdjacentHTML("afterbegin", n)
        } else !e && n && this.removeElement(".vp-email-capture-form-button--cancel")
    }, t.updatePrivacyPolicy = function(e) {
        const t = this.getElement(".vp-email-capture-privacy-policy");
        if (e && t) t.href = encodeURI(e);
        else if (e && !t) {
            const t = this.getElement(".vp-email-capture-disclaimer-wrapper"),
                n = oo.render("email_capture_privacy_policy", {
                    text: "Privacy policy",
                    url: e
                });
            t.insertAdjacentHTML("beforeend", n)
        } else !e && t && this.removeElement(".vp-email-capture-privacy-policy")
    }, t.updateCustomLogo = function(e) {
        const t = this.getElement(".vp-email-capture-title-logo-wrap"),
            n = this.getElement(".vp-email-capture-logo");
        if (e && n) n.src = ds(e);
        else if (e && !n && t) {
            const n = oo.render("email_capture_logo", {
                url: ds(e)
            });
            t.insertAdjacentHTML("afterbegin", n)
        } else !e && n && this.removeElement(".vp-email-capture-logo")
    }, t.updateFields = function(e, t) {
        if (e) {
            let n = this.getElement(".vp-email-capture-form-fields-slider").children;
            n.length && Array.from(n).forEach(t => {
                e.some(e => t.dataset.id === String(e.id)) || t.remove()
            }), e.forEach(e => {
                this.updateField(e, t)
            })
        }
        t()
    }, t.updateField = function(e) {
        const {
            id: t,
            position_in_form: n
        } = e, i = this.getElement(".vp-email-capture-form-fields-slider");
        let o = this.element.querySelector(`[for=custom-field-${t}]`),
            r = this.element.querySelector(`#custom-field-${t}`);
        if (o && r) {
            let t = r.parentElement,
                o = i.children;
            const s = Array.from(o).indexOf(t),
                l = oo.render("email_capture_field", {
                    field: e
                });
            var a = document.createElement("div");
            a.innerHTML = l, i.children[s].replaceWith(a.children[0]), s !== n && i.insertBefore(o[s], o[n])
        } else {
            const t = oo.render("email_capture_field", {
                field: e
            });
            n === i.children.length ? i.insertAdjacentHTML("beforeend", t) : i.children[n].insertAdjacentHTML("beforebegin", t)
        }
    }, t.updateWebinarStartTime = function(e, t) {
        const n = this.getElement(".vp-email-capture-wrapper"),
            i = n.querySelectorAll(".vp-email-capture-start-time"),
            o = _o(new Date(e), t);
        if (e && i.length) Array.from(i).forEach(e => {
            e.textContent = o
        });
        else if (e && !i.length) {
            const e = this.getElement(".vp-email-capture-title-logo-wrap"),
                t = n.querySelectorAll(".vp-email-capture-thank-you-title");
            let i = oo.render("email_capture_start_time", {
                startTime: o
            });
            e.insertAdjacentHTML("afterbegin", i), Array.from(t).forEach(e => {
                i = oo.render("email_capture_start_time", {
                    startTime: o
                }), e.insertAdjacentHTML("afterbegin", i)
            })
        } else !e && i.length && Array.from(i).forEach(e => {
            e.parentNode.removeChild(e)
        })
    }, t.clearCachedElements = function() {
        this.cachedElements = {}
    }, e
}();

function ps(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function _s(e, t) {
    try {
        var n = e()
    } catch (Ie) {
        return t(Ie)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function vs() {}
const ms = "vp-email-capture-form-dropdown-option-active";

function fs(e) {
    if (e && e.then) return e.then(vs)
}

function hs(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (Ie) {
            return Promise.reject(Ie)
        }
    }
}
const gs = {
    skip_to_video: "Skip to video",
    skip: "Skip",
    next: "Next",
    back: "Back",
    submit: "Submit",
    disclaimer: "Share your information with the owner of this video",
    privacy_policy: "Privacy policy",
    thank_you: "Thank you!",
    video_starts: "Video starts in",
    successful: "Your information was successfully submitted.",
    step: "Step",
    of: "of",
    aria_label: "Email capture form",
    webinar: {
        disclaimer: 'I agree that the host will see my viewing activities for this webinar, and I agree to <a class="vp-vimeo-privacy-policy" href="https://vimeo.com/terms" target="_blank" rel="noopener">Vimeo\'s Terms of Service</a> and <a class="vp-vimeo-privacy-policy" href="https://vimeo.com/privacy" target="_blank" rel="noopener">Privacy Policy</a>',
        host_privacy_policy: "and the webinar host's Privacy Policy",
        reg_full: "Sorry, registration is full.",
        reg_login_title: "Enter your email to see if you’re registered",
        reg_thank_you: "Thanks for registering!",
        reg_thank_you_subtitle: "Check your email for your registration confirmation. We'll also send you a reminder and a link to the event 24 hours before it begins.",
        reg_bypass: "Already registered?",
        reg_go_back: "Register for this event",
        login_thank_you: "Great news! You’re already registered.",
        login_thank_you_subtitle: "Check your email for your registration confirmation.",
        email_not_valid: "Email address not valid. Please try another email address.",
        email_not_registered: "Email not registered for this event",
        opt_in: "Opt into emails from this event host",
        event_is_live: "This event is live",
        unscheduled: "Unscheduled",
        add_to_calendar: "Add to calendar",
        opt_in_error: "Opting in is required to register for this webinar.",
        opt_in_login_error: "Opting in is required to check your registration status."
    }
};

function bs(e = []) {
    return e.map(e => d(d({}, e), {}, {
        field_label: ys(e.field_name)
    })).sort((e, t) => e.position_in_form - t.position_in_form)
}

function ys(e) {
    switch (e) {
        case "Email address":
            return "Email address";
        case "First name":
            return "First name";
        case "Last name":
            return "Last name";
        default:
            return e
    }
}

function Es(e) {
    switch (e) {
        case "Sign up for our mailing list":
            return "Sign up for our mailing list";
        case "Register to watch live":
            return "Register to watch live";
        default:
            return e
    }
}

function Cs(e, t, n) {
    var i, o, r, s;
    const l = hs((function() {
            ft(n);
            const i = X(y),
                {
                    timestamp: o,
                    expires: r
                } = e.config.request;

            function s(t) {
                A.classList.remove("loading"), 3152 === (null == t ? void 0 : t.error_code) ? z(!1) : (T.setCustomValidity("Uh oh. There was a problem. Please try again."), T.setAttribute("aria-invalid", "true"), e.events.fire(Yt._emailCaptureFailure), U())
            }
            const l = `https://${e.config.player_url}/video/${e.config.video.id}/webinar/login?context=${encodeURIComponent(_)}&time=${o}&expires=${r}`;
            return A.classList.add("loading"), fs(_s((function() {
                return ps(a(l, {
                    method: "POST",
                    body: i,
                    headers: {
                        "Content-type": "application/json"
                    },
                    withCredentials: !0
                }), (function(n) {
                    return ps(n.json(), (function(n) {
                        ! function(n) {
                            t.dispatch(yi(!0, n.video.webinar.registrant)), e.events.fire(Yt._webinarFormSuccess, n), p ? (G(), e.events.fire(Yt._playButtonPressed)) : z(!1)
                        }(n)
                    }))
                }))
            }), (function(e) {
                return fs(_s((function() {
                    return ps(e.response.json(), (function(e) {
                        s(e)
                    }))
                }), (function() {
                    s()
                })))
            })))
        })),
        c = hs((function() {
            ft(n);
            const i = X(y, {
                    isRegistration: !0
                }),
                {
                    timestamp: o,
                    expires: r
                } = e.config.request;

            function s(t) {
                A.classList.remove("loading"), 3152 === (null == t ? void 0 : t.error_code) ? z(!0) : 3158 === (null == t ? void 0 : t.error_code) ? j() : (T.setCustomValidity("Uh oh. There was a problem. Please try again."), T.setAttribute("aria-invalid", "true"), e.events.fire(Yt._emailCaptureFailure), U())
            }
            const l = `https://${e.config.player_url}/video/${e.config.video.id}/webinar/registration?context=${encodeURIComponent(_)}&time=${o}&expires=${r}`;
            return A.classList.add("loading"), fs(_s((function() {
                return ps(a(l, {
                    method: "PUT",
                    body: i,
                    headers: {
                        "Content-type": "application/json"
                    },
                    withCredentials: !0
                }), (function(n) {
                    return ps(n.json(), (function(n) {
                        ! function(n) {
                            t.dispatch(yi(!0, n.video.webinar.registrant)), e.events.fire(Yt._webinarFormSuccess, n), p ? (G(), e.events.fire(Yt._playButtonPressed)) : z(!0)
                        }(n)
                    }))
                }))
            }), (function(e) {
                return fs(_s((function() {
                    return ps(e.response.json(), (function(e) {
                        s(e)
                    }))
                }), (function() {
                    s()
                })))
            })))
        })),
        d = f(),
        u = !$(null == (i = e.config.video.webinar) ? void 0 : i.registration_form),
        p = "started" === (null == (o = e.config.video.webinar) ? void 0 : o.status),
        _ = e.config.embed.context,
        v = ["Vimeo\\Controller\\VideoSettings\\ServiceController.getInteractions", "Vimeo\\Controller\\Api\\Resources\\Webinar\\WebinarController."].includes(_);
    let m, h, g, b, y, E, C, w, T, L, S, k, A, P, I, R, O = new us(n),
        N = !1,
        M = !1,
        D = V(e.config),
        x = null == (r = D) || null == (s = r.custom_fields) ? void 0 : s[C - 1],
        B = e.config.view === jt.webinarFull;

    function V(e) {
        var t, n, i;
        return u ? (null == (i = e.video.webinar) ? void 0 : i.registration_form) || {} : (null == (t = e.embed) ? void 0 : t.email_capture_form) || (null == (n = e.embed) ? void 0 : n.email) || {}
    }

    function U() {
        var e;
        const t = S.querySelector(".vp-validation-bubble-message"),
            n = null == (e = x) ? void 0 : e.field_type;
        t.innerHTML = T.validationMessage || ("dropdown" === n ? "This field is required." : "There is an error with this input."), S.classList.remove("hidden"), S.classList.remove("vp-validation-bubble-animate"), window.requestAnimationFrame((function() {
            S.classList.add("vp-validation-bubble-animate")
        })), T.focus()
    }

    function F() {
        w.classList.add("vp-email-capture-input-invalid"), U()
    }

    function H() {
        S.classList.remove("vp-validation-bubble-animate"), w.classList.remove("vp-email-capture-input-invalid"), k && (I.classList.remove("vp-webinar-compliance-checkbox-invalid"), k.classList.remove("vp-opt-in-bubble-animate"), k.classList.add("hidden"))
    }
    const q = ({
        target: e
    }) => {
        e === g && (g.removeEventListener("transitionend", q), T.focus())
    };

    function W(e, t = !0) {
        var i, o;
        const r = n.querySelector(".vp-email-capture-disclaimer-wrapper"),
            a = n.querySelector(".vp-email-capture-current-step"),
            s = n.querySelector(".vp-email-capture");
        w && (w.setAttribute("aria-hidden", !0), T.tabIndex = -1), C && (!h && !v || v) && (h = ct(m).height), C = e, x = null == (i = D) || null == (o = i.custom_fields) ? void 0 : o[C - 1], w = b[C - 1], T = y[C - 1], w && T && (w.setAttribute("aria-hidden", !1), T.tabIndex = 0), window.requestAnimationFrame(() => {
                g.style.transform = `translateY(-${h*(C-1)}px)`, a.textContent = C, L.style.width = `${C/b.length*100}%`
            }), t && g.addEventListener("transitionend", q), s.classList.toggle("vp-email-capture-first-step", 1 === C), u && (r.classList.toggle("hidden", C < b.length), M ? r.classList.add("vp-email-capture-login-disclaimer-wrapper") : (P.classList.toggle("hidden", C === b.length), r.classList.remove("vp-email-capture-login-disclaimer-wrapper"))),
            function() {
                const e = n.querySelector(".vp-email-capture-form-button--back"),
                    t = n.querySelector(".vp-email-capture-form-button--next");
                1 === C && (E.classList.remove("half"), e.classList.remove("show"), e.classList.add("hidden"), e.tabIndex = -1), C > 1 && (E.classList.add("half"), e.classList.remove("hidden"), e.tabIndex = 0, e.setAttribute("aria-hidden", !1), window.requestAnimationFrame(() => {
                    e.classList.add("show")
                })), C < b.length ? (t.tabIndex = 0, t.setAttribute("aria-hidden", !1), A.tabIndex = -1, A.setAttribute("aria-hidden", !0), E.classList.remove("showSubmitBtn")) : (A.tabIndex = 0, A.setAttribute("aria-hidden", !1), t.tabIndex = 1, t.setAttribute("aria-hidden", !0), E.classList.add("showSubmitBtn"))
            }()
    }

    function Y() {
        if (!T.required) return !0;
        var e;
        if (u && "dropdown" === (null == (e = x) ? void 0 : e.field_type)) return !(x.required && !T.value.length && (T.setCustomValidity("This field is required."), 1));
        return "email" !== T.type || /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(T.value) ? !(T.checkValidity && !T.checkValidity() && ((T.validity.valueMissing || T.validity.typeMismatch) && T.setCustomValidity("This field is required."), T.validity.typeMismatch && T.setCustomValidity("Please enter a valid response."), 1)) : (T.setCustomValidity("Please enter a valid email address."), !1)
    }
    const G = () => {
        Le(n).off(["click", "touchend"], ".vp-email-capture-form-button--cancel"), Le(n).off(["click", "keydown"], ".vp-email-capture-form-button--next"), Le(n).off(["click", "keydown"], ".vp-email-capture-form-button--back"), Le(n).off(["click"], ".vp-email-capture-form-button--submit"), Le(n).off(["keyup", "blur"], ".vp-email-capture-form-button--next-submit-wrapper"), Le(n).off("click", ".vp-email-capture-wrapper"), Le(n).off(["keyup", "input", "focus", "blur"], ".vp-email-capture-form-input"), Le(n).off("submit", ".vp-email-capture-form"), Le(n).off(["keyup", "click", "focus", "blur"], ".vp-disclaimer-checkbox"), Le(window).off("resize"), N = !1, d.fire(Yt._emailCaptureEnd)
    };

    function z(t = !0) {
        let i;
        const o = n.querySelector(".vp-email-capture");
        i = t ? n.querySelector(".vp-email-capture-reg-thank-you") : n.querySelector(".vp-email-capture-login-thank-you"), o.classList.add("hidden"), i.classList.remove("hidden"), e.events.once(ls.EVENT_STARTED, () => {
            G()
        })
    }

    function j(e = !1) {
        const t = n.querySelector(".vp-email-capture"),
            i = n.querySelector(".vp-email-capture-reg-full");
        e ? (t.classList.remove("hidden"), i.classList.add("hidden")) : (t.classList.add("hidden"), i.classList.remove("hidden")), B = !0
    }

    function K() {
        function t(t) {
            A.classList.remove("loading"), T.setCustomValidity("Uh oh. There was a problem. Please try again."), T.setAttribute("aria-invalid", "true"), e.events.fire(Yt._emailCaptureFailure), U()
        }
        A.classList.add("loading"),
            function(i, o) {
                ft(n);
                const r = Array.from(y),
                    a = new XMLHttpRequest,
                    {
                        referrer: s,
                        signature: l,
                        timestamp: c,
                        expires: d
                    } = e.config.request,
                    u = `https://${e.config.player_url}/video/${e.config.video.id}/submit-email?signature=${l}&time=${c}&expires=${d}&referrer=${s}`;
                a.open("POST", u + window.location.search, !0);
                const p = {};
                r.forEach(e => {
                    p[e.name] = e.value
                });
                const _ = JSON.stringify(p);
                a.setRequestHeader("Content-Type", "application/json"), a.withCredentials = !0, a.timeout = 3e3, a.onload = function() {
                    var i;
                    try {
                        i = JSON.parse(a.responseText)
                    } catch (Ie) {}! function(i, o) {
                        !1 !== i ? (e.config.embed.email_capture_form = null, e.config.embed.email = null, e.events.fire(Yt._emailCaptureSuccess), function() {
                            const e = n.querySelector(".vp-email-capture"),
                                t = n.querySelector(".vp-email-capture-thank-you");
                            e.classList.add("hidden"), t.classList.remove("hidden"), window.requestAnimationFrame(() => {
                                const e = n.querySelector(".vp-email-capture-video-countdown-timer"),
                                    i = n.querySelector(".vp-email-capture-video-countdown-meter");
                                t.classList.add("in"), e && (i.classList.add("vp-email-capture-video-countdown-meter--active"), e.textContent = 3);
                                let o = 2;
                                const r = setInterval(() => {
                                    o <= 0 ? (G(), clearInterval(r)) : (e && (e.textContent = o), o -= 1)
                                }, 1e3)
                            })
                        }()) : t(o.status)
                    }(i, a)
                }, a.onerror = function(e) {
                    o(e)
                }, a.send(_)
            }(0, t)
    }

    function X(e, t = {}) {
        const n = {},
            {
                isRegistration: i
            } = t;
        if (Array.from(e).forEach(e => {
                const t = e.name,
                    i = e.value;
                switch (t) {
                    case "email":
                        n.email = i;
                        break;
                    case "First name":
                        n.first_name = i;
                        break;
                    case "Last name":
                        n.last_name = i;
                        break;
                    default:
                        n.data || (n.data = {}), n.data[t] = i
                }
            }), i) {
            let e;
            const {
                timeZone: t
            } = (new Intl.DateTimeFormat).resolvedOptions();
            n.time_zone = t;
            try {
                e = Po() && (() => {
                    try {
                        return window.parent.origin === window.origin
                    } catch (e) {
                        return !1
                    }
                })() ? Co(window.top.location.href) ? window.top.location.href : window.location.href : window.location.href ? window.location.href : document.referrer
            } catch (Ie) {
                e = ""
            }
            e && (n.webinarRegistrantSource = {
                metadata: {
                    url: e
                },
                type: "Player"
            })
        }
        return JSON.stringify(n)
    }
    const Z = e => Y() ? (H(), W(C + 1), !0) : (F(), !1),
        Q = () => {
            var t, i;
            return C === b.length && (u && !R.getAttribute("checked") ? (R.classList.add("vp-disclaimer-checkbox-invalid"), n.querySelector(".vp-opt-in-bubble-message").innerText = M ? gs.webinar.opt_in_login_error : gs.webinar.opt_in_error, k.classList.remove("hidden"), k.classList.remove("vp-opt-in-bubble-animate"), window.requestAnimationFrame((function() {
                k.classList.add("vp-opt-in-bubble-animate")
            })), I.classList.add("vp-webinar-compliance-checkbox-invalid"), R.focus(), !1) : Y() ? ((function(e, t = null) {
                return "before-video" === (t = t || e.position) || "before" === t
            }(D) && !e.config.video.live_event || "started" === (null == (t = e.config.video.live_event) ? void 0 : t.status)) && (e.events.fire(Yt._playButtonPressed), e.events.fire(Yt._pauseButtonPressed)), H(), e.events.fire(Yt._emailCaptureSubmitted), u ? M ? l() : c() : (K(), (cs(D) || e.config.video.live_event) && "started" !== (null == (i = e.config.video.live_event) ? void 0 : i.status) || e.events.fire(Yt._playButtonPressed)), !1) : (F(), !1))
        };

    function J(e) {
        M = e;
        let t = D.custom_fields;
        M && (t = [{
                field_name: "Email address",
                required: 1,
                position_in_form: 0,
                id: 1,
                locked: 1
            }]),
            function(e) {
                const t = oo.render("email_capture_fields", {
                    customFields: bs(e),
                    strings: gs
                });
                document.querySelector(".vp-email-capture-form-fields-slider").innerHTML = t, n.querySelector(".vp-email-capture-total-steps").innerText = e.length, b = n.querySelectorAll(".vp-email-capture-form-custom-field"), y = n.querySelectorAll(".vp-email-capture-form-input"), w = b[C - 1], T = y[C - 1], h = null, oe(), W(C > b.length ? b.length : C, !1)
            }(t), P.innerHTML = oo.render("webinar_registration_bypass_btn", {
                showWebinarLogin: M,
                regBypass: gs.webinar.reg_bypass,
                regGoBack: gs.webinar.reg_go_back,
                registrationFull: B
            });
        let i = M ? gs.webinar.reg_login_title : D.custom_message;
        document.querySelector(".vp-email-capture-title").innerHTML = oo.render("email_capture_title", {
            title: i
        }), H(), B && j(M), M || ne()
    }
    const ee = () => {
            const e = n.querySelectorAll(".vp-email-capture-form-dropdown-options"),
                t = n.querySelector(".vp-email-capture-form-custom-field");
            e.forEach(e => {
                if ((null == t ? void 0 : t.offsetWidth) && e) {
                    const n = `${Math.ceil(.85*t.offsetWidth)}px`;
                    e.style.width !== n && (e.style.width = n)
                }
            })
        },
        te = e => {
            const t = n.querySelector(`.vp-email-capture-form-dropdown-${e}`),
                i = n.querySelector(`#custom-field-${e}`),
                o = n.querySelector(".vp-email-capture-dropdown-overlay"),
                r = n.querySelector(`#custom-field-options-overlay-${e}`),
                a = n.querySelector(`#custom-field-options-${e}`),
                s = null == a ? void 0 : a.querySelectorAll(".vp-email-capture-form-dropdown-option");
            if (!(i && o && a && s && r)) return;
            let l = -1,
                c = !1;
            ee();
            const d = (e, t) => {
                    for (let n = 0; n < e.length; n++) e[n].classList.remove(t)
                },
                u = (e, t) => {
                    d(e, t), e[l].classList.add(t), e[l].focus()
                },
                p = () => {
                    c && (c = !1, o.classList.remove("active"), o.setAttribute("aria-expanded", "false"), o.removeChild(a), r.appendChild(a), T.focus(), T.readOnly = !0)
                },
                _ = (e, t) => {
                    ! function(e) {
                        e.forEach((function(e) {
                            e.classList.remove("selected")
                        }))
                    }(s), 0 !== t || x.required ? (i.value = e.innerText, w.classList.add("active"), e.classList.add("selected")) : (i.value = "", w.classList.remove("focus"), w.classList.remove("active")), p()
                },
                v = () => {
                    var e;
                    S.classList.add("hidden"), w.classList.remove("vp-email-capture-input-invalid"), o.classList.contains("active") ? (i.value.length ? w.classList.add("focus") : w.classList.remove("focus"), o.classList.remove("active"), o.removeChild(a), r.appendChild(a)) : (o.classList.add("active"), o.appendChild(a), null == (e = s[0]) || e.focus()), c = !0, T.readOnly = !0, o.setAttribute("aria-expanded", "true");
                    const t = Array.from(s).findIndex(e => e.classList.contains("selected"));
                    l = t < 0 ? 0 : t, u(s, ms)
                },
                m = e => {
                    (null == a ? void 0 : a.contains(e.target)) || p()
                };
            o.removeEventListener("click", m), o.addEventListener("click", m), t.removeEventListener("click", v), t.addEventListener("click", v);
            const f = e => {
                if (c && s.length > 0) {
                    switch (e.code) {
                        case "Escape":
                            p();
                            break;
                        case "ArrowUp":
                            l--, l < 0 && (l = s.length - 1), u(s, ms);
                            break;
                        case "ArrowDown":
                        case "Tab":
                            l++, l > s.length - 1 && (l = 0), u(s, ms);
                            break;
                        case "Enter":
                        case "Space":
                            d(s, ms), l > -1 && (s[l].click(), l = -1)
                    }
                    e.preventDefault()
                }
            };
            a.removeEventListener("keydown", f), a.addEventListener("keydown", f);
            const h = e => {
                c || "Enter" !== e.code && "Space" !== e.code || (v(), e.preventDefault(), e.stopPropagation())
            };
            i.removeEventListener("keydown", h), i.addEventListener("keydown", h), s.forEach((function(e, t) {
                const n = () => {
                        _(e, t)
                    },
                    i = n => {
                        "Enter" === n.key && _(e, t)
                    };
                e.removeEventListener("click", n), e.addEventListener("click", n), e.removeEventListener("keydown", i), e.addEventListener("keydown", i)
            }))
        };

    function ne() {
        D.custom_fields.forEach(e => {
            "dropdown" === e.field_type && te(e.id)
        })
    }
    let ie = {
        get events() {
            return d
        },
        getData(t = {}, n = {}) {
            var i;
            D = V(e.config);
            const o = n.custom_logo || D.custom_logo,
                r = n.custom_fields || D.custom_fields || [{
                    field_name: "Email address",
                    required: 1,
                    position_in_form: 0,
                    id: 1,
                    locked: 1
                }, {
                    field_name: "Name",
                    required: 0,
                    position_in_form: 1,
                    id: 2,
                    static_field: 1
                }];
            r.sort((e, t) => e.position_in_form - t.position_in_form);
            const a = n.privacy_policy || D.privacy_policy,
                s = (null == (i = e.config.video.webinar) ? void 0 : i.scheduled_start_time) || null,
                l = s ? _o(new Date(s), e.config.request.lang) : "";
            return t.template = oo.render("email_capture", {
                allowSkip: n.allow_skip || D.skippable || D.allow_skip,
                customLogo: o ? ds(o) : null,
                text: Es(n.text || D.custom_message || D.text),
                customFields: bs(r),
                privacyPolicy: a,
                positionIsAfter: cs(D),
                strings: gs,
                showWebinarForm: u,
                showWebinarLogin: M,
                webinarStartTime: l,
                isWebinarStarted: p,
                registrationFull: n.registration_full || B
            }), O.clearCachedElements(), t._firstFocusElement = ".vp-email-capture-form-input", t.modal = !0, t.logo = !1, t.preventBackgroundClose = !0, t.noblur = n.noblur, t.nofocus = n.nofocus, t
        }
    };

    function oe() {
        const e = n.querySelector(".locked_field"),
            t = n.querySelectorAll(".static_field");
        e && (e.type = "email", e.name = "email"), t && Array.from(t).forEach(e => {
            "Name" === e.name && (e.name = "name")
        })
    }
    return e.events.on(Yt._overlayOpened, i => {
                if ("email-capture" === i) {
                    if (m = n.querySelector(".vp-email-capture-form-fields-wrapper"), g = n.querySelector(".vp-email-capture-form-fields-slider"), b = n.querySelectorAll(".vp-email-capture-form-custom-field"), y = n.querySelectorAll(".vp-email-capture-form-input"), E = n.querySelector(".vp-email-capture-form-button--next-submit-wrapper"), L = n.querySelector(".vp-email-capture-progress-meter"), S = n.querySelector(".vp-validation-bubble"), k = n.querySelector(".vp-opt-in-bubble"), A = n.querySelector(".vp-email-capture-form-button--submit"), P = document.querySelector(".vp-email-capture-reg-bypass-wrapper"), I = document.querySelector(".vp-webinar-compliance-checkbox-border"), R = n.querySelector(".vp-disclaimer-checkbox"), R) {
                        const e = function(e) {
                                return `${(e=(e=(e=e.replace(/"/g,"'")).replace(/>\s{1,}</g,"><")).replace(/\s{2,}/g,"")).replace(/[\r\n%#()<>?\\[\\\]^` { |
                                }] / g,
                            encodeURIComponent)
                }
                `}(oo.render("icon_check"));R.style.backgroundImage=`
                url("data:image/svg+xml;,${e}")
                `}oe(),W(1,!1),function(){var i;if(N)return;t.watch("ui.player.breakpoint",()=>{h=ct(m).height,window.requestAnimationFrame(()=>{g.style.transform=`
                translateY(-$ {
                        h * (C - 1)
                    }
                    px)
                `})});let o=!1;Ua(n,".vp-email-capture-form-button--cancel",()=>{var t;G(),(cs(D)||e.config.video.live_event)&&"started"!==(null==(t=e.config.video.live_event)?void 0:t.status)||e.events.fire(Yt._playButtonPressed)}),Le(n).on("click",".vp-email-capture-form-button--next",Z),Le(n).on("click",".vp-email-capture-form-button--back",e=>{H(),W(C-1)}),Le(n).on("keyup",".vp-email-capture-form-button--next-submit-wrapper",e=>{E.classList.add("showfocus")}),Le(n).on("blur",".vp-email-capture-form-button--next-submit-wrapper",e=>{E.classList.remove("showfocus")}),Le(n).on("click",".vp-email-capture-wrapper",()=>{E.classList.remove("showfocus"),T.classList.remove("showfocus")}),Le(n).on("keydown",".vp-email-capture-form-button--back",e=>{o=!0}),Le(n).on("keydown",".vp-email-capture-form-button--next",e=>{o=!0}),Le(n).on("keyup",".vp-email-capture-form-input",e=>{var t;"dropdown"!==(null==(t=x)?void 0:t.field_type)&&("Enter"===e.key&&C<b.length&&!o&&Z(),9!==e.which||T.classList.contains("showfocus")||T.classList.add("showfocus"),o=!1)}),Le(n).on("submit",".vp-email-capture-form",e=>!1),Le(n).on("click",".vp-email-capture-form-button--submit",Q),Le(n).on("input",".vp-email-capture-form-input",()=>{T.value.length?(w.classList.add("active"),T.setCustomValidity(""),Y()&&H()):w.classList.remove("active")}),Le(n).on("focus",".vp-email-capture-form-input",()=>{const e=n.querySelector(".vp-email-capture-dropdown-overlay");if(null==e?void 0:e.classList.contains("active")){const t=x.id,i=n.querySelector(`#
                custom - field - options - overlay - $ {
                    t
                }
                `),o=n.querySelector(`#
                custom - field - options - $ {
                    t
                }
                `);e.classList.remove("active"),e.removeChild(o),i.appendChild(o)}w.classList.add("focus")}),Le(n).on("blur",".vp-email-capture-form-input",()=>{const e=n.querySelector(".vp-email-capture-dropdown-overlay");e&&e.classList.contains("active")||w.classList.remove("focus"),T.value.length?w.classList.add("active"):w.classList.remove("active")}),Le(n).on("focus",".vp-disclaimer-checkbox",()=>{I.classList.add("showFocus")}),Le(n).on("blur",".vp-disclaimer-checkbox",()=>{I.classList.remove("showFocus")}),Le(n).on("click",".vp-disclaimer-checkbox",()=>{if(R.getAttribute("checked"))return R.removeAttribute("checked"),void H();R.setAttribute("checked","checked"),H()}),u&&(Le(n).on("click",".vp-email-capture-reg-bypass",()=>{J(!0)}),Le(n).on("click",".vp-email-capture-reg-go-back",()=>{J(!1)})),null==(i=D.custom_fields)||i.forEach(e=>{"dropdown"===e.field_type&&Le(window).on("resize",ee)}),N=!0}(),u&&ne()}}),u&&e.events.on(Mt._updateWebinarStartTime,t=>{O.updateWebinarStartTime(t,e.config.request.lang)}),e.events.on(Mt._setActivePage,e=>{W(e,!1)}),e.events.on(Mt._updateEmailCapture,e=>{if(!n.querySelector(".vp-email-capture-form"))return;u&&M&&J(!1);const t=Object.assign(e,{custom_fields:bs(e.custom_fields)});O.updateAll(t,()=>{const e=n.querySelector(".vp-email-capture-form-fields-slider").children;e.length&&Array.from(e).forEach(e=>{"dropdown"===e.dataset.type&&te(e.dataset.id)}),b=n.querySelectorAll(".vp-email-capture-form-custom-field"),y=n.querySelectorAll(".vp-email-capture-form-input"),n.querySelector(".vp-email-capture-total-steps").innerText=b.length,w=b[C-1],T=y[C-1],W(C>b.length?b.length:C,!1)})}),e.events.on(Yt._configChanged,()=>{const n=V(e.config);t.get(Ci)||!$(D)&&!$(n)&&D.id===n.id||e.events.fire(Mt._hideOverlay,{name:"email-capture",unmakeModal:!0})}),ie}var ws;!function(e){e.NOT_LOGGED_IN="not_logged_in",e.LOGGED_IN_STORAGE_ACCESS_REQUIRED="logged_in_storage_access_required",e.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED="storage_access_granted_login_unconfirmed",e.ALL_ACCESS_ATTEMPTS_FAILED="all_access_attempts_failed"}(ws||(ws={}));var Ts=ws;function Ls(e,i,r){var a,s,l,c=r.querySelector(".vp-overlay-cell"),d=r.querySelector(".vp-overlay"),u=r.querySelector(".vp-overlay-icon-wrapper"),_=u.querySelector(".vp-overlay-icon"),v=r.querySelector(".vp-overlay-logo"),m=!1,f=null,h=null;const g=new Fa(e,d),b=new Cs(e,i,d);let y=!1,E=!1,C=ln.POPUP;function w(){var e=ct(r),t=ct(d),n=ct(v),i=t.bottom+(e.height-t.bottom)/2;return e.height-i-n.height/2+"px"}function T(){var e=ct(r),t=ct(d),n=ct(u),i=e.height/2,o=e.height-(e.bottom-t.bottom)/2;return{top:i-n.height/2+"px",transform:"translateY("+(o-i)+"px)"}}function L(t,n){r.setAttribute("data-name",t),d.innerHTML=n.template,o.iOS&&Z.element&&(e.events.fire(Yt._willExitFullscreen),Z.exit()),n.noblur||st(l=document.activeElement),n.modal&&(r.classList.add("modal"),r.setAttribute("data-modal","true")),n.preventBackgroundClose&&r.setAttribute("data-background-close","false"),n.wrapperClass&&r.classList.add(n.wrapperClass),n.icon.type&&(n.logo?(v.classList.remove("hidden"),u.classList.add("cloaked"),window.requestAnimationFrame((function(){v.innerHTML=oo.render("logo"),v.style.bottom=w()}))):u.classList.remove("cloaked"),u.classList.remove("hidden"),_.innerHTML=n.icon.html,window.requestAnimationFrame((function(){var e=T();u.style.top=e.top,u.style[o.transformProperty]=e.transform})),r.setAttribute("data-icon",n.icon.type),u.setAttribute("data-icon",n.icon.type),_.setAttribute("data-icon",n.icon.type)),r.classList.add("invisible"),r.classList.remove("hidden"),r.removeAttribute("hidden"),r.classList.remove("out"),r.classList.add("in"),h=n,f=t,m=!0,e.events.fire(Yt._overlayOpened,t),e.element.classList.add("player-overlayVisible"),window.requestAnimationFrame((function(){r.classList.remove("invisible"),!n.nofocus&&e.element.contains(l)&&function(e){if(e){const t=r.querySelector(e);t&&t.focus()}}(n._firstFocusElement),window.requestAnimationFrame((function(){d.classList.add("in"),c.classList.add("in")}))}))}function S(){d.classList.remove("in"),d.classList.add("out")}function k(t){if("true"!==r.getAttribute("data-modal")&&m){r.removeAttribute("data-background-close"),c.classList.remove("in"),c.classList.add("out"),S(),r.classList.remove("in"),r.classList.add("out"),clearTimeout(a),a=setTimeout(A,200),(null==t?void 0:t.preventDefault)&&t.preventDefault();var n=r.querySelector(".js-back");n&&n.classList.add("cloaked"),g.destroy(),e.events.fire(Yt._overlayClosed,f),e.element.classList.remove("player-overlayVisible"),m=!1,f=null,h=null,window.requestAnimationFrame((function(){l&&(lt(l),l=null)}))}}function A(){m||(r.setAttribute("hidden",""),r.removeAttribute("data-name"),r.removeAttribute("data-icon"),r.classList.add("hidden"),r.classList.remove("out"),r.classList.remove("embed-active"),r.classList.remove("modal"),r.classList.remove("embed-only"),c.classList.remove("out"),c.classList.remove("in"),u.removeAttribute("data-icon"),u.classList.add("hidden"),u.classList.remove("animate"),_.removeAttribute("data-icon"),_.innerHTML="",v.classList.add("hidden"),d.classList.remove("out"),d.innerHTML="",e.events.fire(Yt._overlayCleared))}function P(){r.classList.remove("modal"),r.setAttribute("data-modal","false")}function R(e){if("yes"===e.form.getAttribute("data-bubble")){e.form.setAttribute("data-bubble","no");var t=r.querySelector(".vp-validation-bubble");t.querySelector(".vp-validation-bubble-message").innerHTML=e.validationMessage||"There is an error with this input.";var n=ct(e),i=ct(e.form);t.style.left=n.left-i.left+"px",t.style.top=n.height+1+"px",t.classList.remove("hidden"),e.focus(),window.requestAnimationFrame((function(){t.classList.add("vp-validation-bubble-animate")})),O()}}function O(e){var t=r.querySelector(".vp-validation-bubble");if(t){if(e)return clearTimeout(s),void t.classList.remove("vp-validation-bubble-animate");clearTimeout(s),s=setTimeout((function(){t.classList.remove("vp-validation-bubble-animate")}),5e3)}}function N(e){var t=r.querySelector("input[type=password]");return t.form.classList.contains("submitted")?(t.setAttribute("aria-invalid","false"),t.setCustomValidity(""),t.checkValidity&&!t.checkValidity()?(t.setAttribute("aria-invalid","true"),t.validity.valueMissing&&t.setCustomValidity("Please enter the password."),e||R(t),!1):(O(!0),!0)):null}function M(){_.classList.add("open")}function D(){_.classList.add("pulled-back")}function x(t,n={}){t.icon={type:"lock",html:oo.render("icon_lock")},t._firstFocusElement=".js-login",t.modal=!0,t.logo=!0;const{loginText:i,buttonTarget:o}=((e=Ts.NOT_LOGGED_IN)=>{const t={loginText:Oa()?{title:"Sign in to Vimeo to watch this video",subtitle:"You may need to allow cookies first. If asked, select <b>Allow</b> to continue.",buttonText:"Sign in"}:{title:"Sign in to Vimeo",subtitle:"This video is private. Sign in to watch.",buttonText:"Sign in"}};switch(e){case Ts.LOGGED_IN_STORAGE_ACCESS_REQUIRED:t.loginText={title:"Allow cookies",subtitle:"Your browser will ask if you want to allow cookies. Select <b>Allow</b> to continue.",buttonText:"Continue"};break;case Ts.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED:t.loginText={title:"Continue to sign in",subtitle:"You may now sign in to watch this video.",buttonText:"Continue"};break;case Ts.ALL_ACCESS_ATTEMPTS_FAILED:t.loginText={title:"Video unavailable",subtitle:"Try watching on vimeo.com.",buttonText:"Watch on Vimeo"},t.buttonTarget=ln.ON_SITE}return t})(n.loginState);return t.template=oo.render("private_locked",{action:`
                https: //${e.config.vimeo_url}/log_in`,strings:i}),C=null!=o?o:C,t}function B(){const t=e.config.embed.email_capture_form||e.config.embed.email||{};if(e.backbone){const n=t.timecode||0;y=e.backbone.currentTime>n}("before-video"===t.position||"before"===t.position)&&!y&&V()}function V(){i.get("ui.overlay.isEmailCaptureVisible")?e.events.fire(Mt._showOverlay,"email-capture"):E=!0}return e.events.on(Mt._hideOverlay,(function(e={}){e.name&&f!==e.name||(e.unmakeModal&&P(),k())})),e.events.on(Mt._showOverlay,(function(t,n={}){var i=function(){var i={modal:!1,template:null,logo:!1,icon:{type:null,html:null}};switch(t){case"help":return f=t,void(m=!0);case"share":return L(t,g.getShareData(i,n)),void g.setup();case"private-locked":return void L(t,x(i));case"password":return void L(t,function(t){return t.icon={type:"lock",html:oo.render("icon_lock")},t.template=oo.render("password",{action:`https://${e.config.player_url}/video/${e.config.video.id}/check-password?referrer=${e.config.request.referrer}`,strings:{title:"Password Required",subtitle:"If you’ve got it, enter it below.",password:"Password",watch:"Watch Video"}}),t._firstFocusElement=".js-password",t.modal=!0,t.logo=!!e.config.embed.settings.logo,t}(i));case"error":return void L(t,function(e,t){return e.template=oo.render("error",{title:t.title,message:t.message,aria_label:"Error"}),e._firstFocusElement=".js-close",e.modal=!!t.modal,e.logo=!!t.logo,t.icon&&"lock"===t.icon&&(e.icon={type:"lock",html:oo.render("icon_lock")}),e}(i,n));case"email-capture":return void L(t,b.getData(i,n));case"app-redirect":return void L(t,function(t,{redirectUrl:n,title:i,buttonText:o,ignoreText:r,bottomText:a,newWindow:s}={}){const l=bt(e.config.video.privacy,["disable","unlisted"]);return t.template=oo.render("app_redirect",{hideRedirectButton:l,redirectUrl:n,newWindow:s,strings:{title:i,buttonText:o,ignoreText:r,bottomText:a}}),t.modal=!1,t.logo=!1,t.preventBackgroundClose=!0,t}(i,n));case"webinar-confirmation":return void L(t,function(t){var n,i;const o=(null==(n=e.config.video.webinar)?void 0:n.scheduled_start_time)||null,r=o?_o(new Date(o),e.config.request.lang):"",a=null==(i=e.config.video.webinar)?void 0:i.custom_logo;return t.template=oo.render("webinar_confirmation",{customLogo:a?ds(a):null,webinarStartTime:r,strings:{thank_you:gs.webinar.login_thank_you,thank_you_subtitle:gs.webinar.login_thank_you_subtitle}}),t.modal=!0,t}(i));case"webinar-blocked":L(t,function(e){return e.template=oo.render("webinar_ended",{strings:{title:"Live event ended"}}),e.modal=!0,e}(i))}};if(m&&!n.nohide)return"share"!==f&&"help"!==f||f!==t?(e.events.once(Yt._overlayCleared,i),P(),void k()):void k();i()})),e.events.on(Mt._updateOverlay,(function(e,t={}){const n={modal:!1,template:null,logo:!1,icon:{type:null,html:null}};if("private-locked"===e){const{template:e}=x(n,t);d.innerHTML=e}})),Le(r).on("input","input",(function(){this.form.classList.add("interacted")})).on("transitionend",".vp-validation-bubble",(function(e){"opacity"===e.propertyName&&"0"===window.getComputedStyle(this,"").opacity&&this.classList.add("hidden")})),e.events.on([Yt._overlayCloseButtonPressed,p.PLAY],k),e.events.on(Yt._privateUnlocked,(function(){"private-locked"===f&&(P(),k())})),e.events.on(Yt._configChanged,(function(){"share"===f&&(h=g.getShareData({modal:!1,template:null,logo:!1,icon:{type:null,html:null}}),d.innerHTML=h.template,g.setup())})),Le(window).on("resize",(function(){if(m){v.style.bottom=w();var e=T();u.style.top=e.top,u.style[o.transformProperty]=e.transform}})),Le(r).on("transitionend",".vp-overlay-logo",(function(e){"opacity"===e.propertyName&&this.classList.contains("animate")&&(v.classList.add("hidden"),v.classList.remove("animate"))})),Le(r).on("transitionend",".vp-overlay-icon-wrapper",(function(e){e.propertyName.indexOf("transform")>-1&&(""===this.style[o.transformProperty]?(this.classList.remove("centered"),"lock"!==this.getAttribute("data-icon")||_.classList.contains("open")||_.querySelector("canvas")?D():setTimeout(M,100)):"translateY(-10px)"===this.style[o.transformProperty]&&(u.classList.add("centered"),u.style[o.transformProperty]=""))})),Le(r).on("transitionend",".vp-overlay-icon",(function(e){e.propertyName.indexOf("transform")>-1&&(this.classList.contains("out")?(P(),k()):this.classList.contains("pulled-back")?(_.classList.add("out"),_.classList.remove("pulled-back")):this.classList.contains("open")&&D())})),i.watch("ui.overlay.isEmailCaptureVisible",(function(t){!t&&m&&"email-capture"===f?(E=m,P(),k()):t&&E&&(E=!1,e.events.fire(Mt._showOverlay,"email-capture"))})),e.events.on(Yt._ready,B),e.events.on(Yt._configChanged,B),e.events.on(p.TIME_UPDATE,(function({currentTime:t=0}){const n=e.config.embed.email_capture_form||e.config.embed.email||{};("during-video"===n.position||"during"===n.position)&&(t<n.timecode&&(y=!1),t>=n.timecode&&!y&&(y=!0,V()))})),e.events.on(Yt._showEmailCaptureForm,(function(){V()})),b.events.on(Yt._emailCaptureEnd,()=>{e.events.fire(Yt._emailCaptureEnd),P(),k()}),g.events.on(Yt._embedViewShown,(function(){e.config.embed.settings.share.embed_only||(r.querySelector(".js-back").classList.remove("cloaked"),r.classList.add("embed-active"))})).on(Yt._shareViewShown,(function(){r.classList.remove("embed-active")})),Ua(r,".js-back",(function(){return g.showShareView(),!1})),g.events.on(Yt._shareViewEnd,(function(){r.querySelector(".js-back").classList.add("cloaked")})),o.stereoscopic&&(e.events.on(Yt._showAndroidVRDeepLink,(function(){e.events.fire(Mt._showOverlay,"app-redirect",{redirectUrl:e.doNotTrackEnabled?e.config.video.share_url:fi(e.config.video.id,"player-spatial-redirect"),title:"Headset viewing isn’t currently supported in your mobile browser.",buttonText:"Watch in the Vimeo app",ignoreText:null,bottomText:null,newWindow:!e.config.embed.on_site})})),Le(d).on("click",".app-redirect-ignore",(function(){k()})),Le(d).on("click","[data-new-window]",(function(e){return window.open(document.querySelector(".app-redirect-button").getAttribute("href")),!1}))),Le(d).on("click",".popup",(function(){if(C===ln.POPUP&&e.events.fire(Mt._openPopup,"login-private-locked"),C===ln.ON_SITE){const{video:t,vimeo_url:n}=e.config,i=`https://${n}/${t.id}`;window.open(i,"_blank")}return!1})),Le(d).on("click",".password input[type=submit]",(function(){this.form.classList.add("submitted"),this.form.setAttribute("data-bubble","yes"),N(!0)})).on("submit",".password form",(function(){return function(i){if(!N())return!1;var a=i.querySelector("input[type=password]"),s=i.querySelector("input[type=submit]");function l(e){s.classList.remove("loading"),a.setCustomValidity("Uh oh. There was a problem. Please try again."),a.setAttribute("aria-invalid","true"),R(a)}s.classList.add("loading"),function(e,i,o){ft(r);var a=Array.from(e.querySelectorAll("input")).map((function(e){return e.name?encodeURIComponent(e.name)+"="+encodeURIComponent(window.btoa(function(e){return encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,(e,t)=>String.fromCharCode("0x"+t))}(e.value))):encodeURIComponent(e.value)})).join("&"),s=new XMLHttpRequest;const l=n(e.action,t(window.location.search));s.open(e.method,l,!0),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.withCredentials=!0,s.timeout=3e3,s.onload=function(){var e;try{e=JSON.parse(s.responseText)}catch(Ie){}i(e,s)},s.onerror=function(e){o(e)},s.send(a)}(i,(function(t,n){if(!1!==t){if(e.events.fire(Yt._passwordUnlocked,t),"icon-hidden"===window.getComputedStyle(c,":after").content)return P(),void k();v.classList.add("animate"),u.classList.remove("cloaked"),u.classList.add("animate"),window.requestAnimationFrame((function(){u.style[o.transformProperty]="translateY(-10px)"})),P(),S()}else l(n.status)}),l)}(this),!1})).on(["focus","input"],[".password input[type=email]",".password input[type=password]"],(function(){N()})),e.events.on(Yt._error,(function(t,n={modal:!0,final:!0}){if(!1===n.final)return;let i={modal:!1,template:null,logo:!1,icon:{type:null,html:null}};if(i.modal=n.modal,i.template=oo.render("error",{title:n.title,message:n.message}),i._firstFocusElement=".js-close",m)return k(),void e.events.once(Yt._overlayCleared,()=>L(t,i));L(t,i)})),e.events.on(Yt._configChanged,(function(){window.requestAnimationFrame((function(){"email-capture"!==f&&"webinar-confirmation"!==f&&(P(),k())}))})),Ua(r,".js-close",(function(){e.events.fire(Yt._overlayCloseButtonPressed)})),Le(r).on(["click","touchend"],[".vp-overlay-content",".js-share",".vp-overlay-logo"],(function(e){e.stopPropagation()})).on(["click","touchend"],[".vp-overlay-cell","nav"],(function(){return"false"===r.getAttribute("data-background-close")||(e.events.fire(Yt._overlayCloseButtonPressed),!1)})),e.events.on(Mt._showOutro,(function(){r.classList.add("hidden")})),e.events.on(Yt._outroHidden,(function(){r.classList.contains("in")&&r.classList.remove("hidden")})),function(){var t;e.config.view!==jt.webinarUnlocked||(null==(t=e.config.video.webinar)?void 0:t.status)||(e.events.fire(Mt._showOverlay,"webinar-confirmation"),e.events.once(I.EVENT_STARTED,()=>{e.events.fire(Mt._hideOverlay,{unmakeModal:!0})}))}(),e.events.fire(Yt._overlayModuleReady),{}}const Ss=["a",".button-link",".vp-overlay-wrapper .footnote.share a:hover",".menu li:hover",".menu li.active",".vp-outro-link:hover",".vp-outro-videosTitle a:hover","li.vp-panel-item:hover","li.vp-panel-item-on",".vp-share-footnote a:hover",".vp-panel-collapsible button.vp-panel-button:hover"],ks=["a:hover",".button-link:hover"],As=[".vp-overlay-wrapper .close:hover .fill",".vp-overlay-wrapper .back:hover .fill"],Ps=[".controls-outro a:hover .fill",".vp-panel-collapsible button.vp-panel-button:hover .fill"],Is=[".vp-overlay .buttons li",".vp-overlay .vp-overlay-content button",'.vp-overlay .vp-overlay-content input[type="submit"]','.vp-overlay .vp-overlay-content a[role="button"]',"li.vp-panel-item-on:before",".vp-share-buttons li","button.vp-share-embedCopy",".vp-outro-button","a.vp-outro-vodButton",".vp-email-capture-progress-meter",".vp-chapters-active-indicator"],Rs=["li.vp-panel-item-on:before"],Os=[".vp-overlay .vp-overlay-content button",'.vp-overlay .vp-overlay-content input[type="submit"]','.vp-overlay .vp-overlay-content a[role="button"]',".vp-share-footnote--embed a",".vp-outro-button",".vp-outro-button:hover",".vp-outro-wrapper .vp-outro-link:hover","button.vp-share-embedCopy",".vp-outro-vodWrapper a.vp-outro-vodButton",".vp-outro-vodWrapper a.vp-outro-vodButton:hover","li.vp-panel-item:hover","li.vp-panel-item-on",".vp-panel-collapsible button.vp-panel-button:hover","input.vp-email-capture-form-button--next","input.vp-email-capture-form-button--submit"],Ns=['.vp-share-wrapper a[role="button"] .fill',".vp-outro-vodButton .fill",".vp-panel-collapsible button.vp-panel-button:hover .fill"],Ms=["li.vp-panel-item-on:before"],Ds=["li.vp-panel-item-on:before"],xs=['.vp-overlay-wrapper .vp-overlay a[role="button"]',"button.vp-share-embedCopy",".vp-outro-button",".vp-outro-button:hover",".vp-outro-vodWrapper a.vp-outro-vodButton",".vp-outro-vodWrapper a.vp-outro-vodButton:hover","input.vp-email-capture-form-button--next","input.vp-email-capture-form-button--submit"],Bs=[".vp-share-button .fill",".vp-outro-vodButton .fill"],Vs=["li.vp-panel-item-on:before",".vp-email-capture-form-fields-slider .vp-email-capture-form-custom-field.focus",".vp-email-capture-disclaimer-wrapper .vp-webinar-compliance-checkbox-border.showFocus"],Us=['.vp-overlay .vp-overlay-content input[type="submit"]:active','.vp-overlay a[role="button"]:active',".vp-outro-vodWrapper a.vp-outro-vodButton:active",".vp-email-capture-form-button--next:hover",".vp-email-capture-form-button--next:focus",".vp-email-capture-form-button--submit:hover",".vp-email-capture-form-button--submit:focus"],Fs=[".vp-email-capture-form-button--next",".vp-email-capture-form-button--submit"],Hs=['.vp-overlay-wrapper .vp-overlay a[role="button"]',"button.vp-share-embedCopy",".vp-outro-button",".vp-outro-button:hover",".vp-outro-vodWrapper a.vp-outro-vodButton",".vp-outro-vodWrapper a.vp-outro-vodButton:hover","input.vp-email-capture-form-button--next","input.vp-email-capture-form-button--submit"],qs=[".vp-share-button .fill",".vp-outro-vodButton .fill"];function $s(e,{uuid:t,id:n,isMobileDevice:i}){var o=null;function r(e,o){var r=`.player-${t} `,a=r+e.join(","+r);if(o){var s=`${n} `;a+=`,${s}${e.join(","+s)}`}return i&&(a=a.replace(/:hover/g,":active")),a.replace(/ &/g,"")}return e.events.on(Mt._changeColor,(n,i)=>{let a;const s=rn[i],l=on[i];try{a=new J(n)}catch(d){a=new J(l)}if(i===en){let n=function(e){o?function(){for(;o.cssRules.length>0;)o.deleteRule(0)}():function(){var e=document.createElement("style");e.setAttribute("data-player",t),document.querySelector("head").appendChild(e),o=e.sheet}();var n=e.complement,i=new J(30,30,30,.9),a=new J(0,0,0,.15).overlayOn(e);i.contrast(n).ratio<3&&n.lighten(5,3,i);var s,l=e.lightness<40?e.clone().lighten(15,3,e):e.clone().darken(15,3,e),c=J.white.contrast(e).ratio<4.5?J.black:J.white;at(r(Vs),"border-color:"+a.hex,o),at(r(Ss),"color:"+e.hex,o),at(r(Ps),"fill:"+e.hex,o),at(r(Is),"background-color:"+e.hex,o),at(r(Rs),"border-color:"+e.hex,o),at(r(ks),"color:"+n.hex,o),at(r(As),"fill:"+n.hex,o),at(r(Us),"background-color:"+a.hex,o),e.luminance>.95&&(n=e.clone().darken(15,3,e),at(r(Os),"color:"+n.hex,o),at(r(Ns),"fill:"+n.hex,o),at(r(Ms),"background-color:"+n.hex,o),at(r(Ds),"border-color:"+n.hex,o),l=n.clone().darken(15,3,n)),e.yiq>175&&e.luminance<.95&&(s=l.clone().darken(15,3,l),at(r(xs),"color:"+l.hex,o),at(r(Bs),"fill:"+l.hex,o));let d=new J(e.hex);return d.alpha=.8,at(r(Fs),"background-color:"+d.rgba,o),at(r(Hs),"color:"+c.hex,o),at(r(qs),"fill:"+c.hex,o),{main:e.hex,selected:l.hex,sidedockHover:s?l.hex:e.luminance>.95?n.hex:J.white.hex,sidedockSelected:e.luminance>.95?n.hex:e.hex,sidedockSelectedHover:s?s.hex:l.hex}}(a);e.config._colors=n}const c=wa(n)?a.hexWithAlpha:a.hex;e.config.embed[s]=c.replace("#","")}),e.events.fire(Mt._changeColor,e.config.embed.color_one,Jt),e.events.fire(Mt._changeColor,e.config.embed.color_two||e.config.embed.color,en),e.events.fire(Mt._changeColor,e.config.embed.color_three,tn),e.events.fire(Mt._changeColor,e.config.embed.color_four,nn),{}}const Ws={storageAccessRequired:Oa,requestCookieAccess:e=>new Promise((t,n)=>document.requestStorageAccess().then(()=>{Ra("User granted storage access"),t(!0)},()=>{e(),Ra("User storage access denied:"),t(!1)}).catch(n))};function Ys(e){let t=null;return function(){const n=function({player:e,dependencies:t=Ws}){const n={onLoginRequested:function(t){c=t,!i()||a?(d(),u()):(s++,o(d).then(t=>t?(a=!0,r||u(),void e.events.fire(Yt._userLogIn,"private")):void(m(1)?_(Ts.ALL_ACCESS_ATTEMPTS_FAILED):u())).catch(e=>{}))}},{storageAccessRequired:i,requestCookieAccess:o}=t;let r=!1,a=!1,s=0,l=0,c=Sa;function d(){r=!0,c()}function u(){e.events.once(Yt._loginFailure,p)}function p(){l++;const e=v();m()?_(Ts.ALL_ACCESS_ATTEMPTS_FAILED):_(!e&&r?Ts.LOGGED_IN_STORAGE_ACCESS_REQUIRED:Ts.STORAGE_ACCESS_GRANTED_LOGIN_UNCONFIRMED)}function _(t){e.events.fire(Mt._updateOverlay,"private-locked",{loginState:t})}function v(){return s>=2}function m(e=2){const t=!i()&&r&&l>0,n=l>=e,o=v();return n&&o||t}return n}({player:e});e.events.on(Mt._openPopup,(function(i,o){let r=`https://${e.config.player_url}`,a=`${r}/video/${e.config.video.id}`;switch(i){case"login-like":t=_t(`${a}/login/like`,"login",{width:670,height:545}),e.events.fire(Yt._popupOpened,i);break;case"login-watch-later":t=_t(`${a}/login/watch-later`,"login",{width:670,height:545}),e.events.fire(Yt._popupOpened,i);break;case"login-private-locked":n.onLoginRequested((function(){t=_t(`${a}/login/private`,"login",{width:670,height:545}),e.events.fire(Yt._popupOpened,i)}));break;case"purchase":let s=`${r}/video/${e.config.video.vod.feature_id||e.config.video.id}/purchase/vod`;(null==o?void 0:o.productId)&&(s+=`/${o.productId}`),s+=`?referrer=${encodeURIComponent(e.config.request.referrer)}`,t=_t(s,"purchase",{width:790,height:670}),e.events.fire(Yt._popupOpened,i)}})),window.closePopup=function(n){if(t){try{t.close(),e.events.fire(Yt._popupClosed,n)}catch(Ie){}t=null}}}(),e.config.embed.on_site||(window.confirmPurchase=function(t,n,i){n?e.loadVideo(t):i&&e.events.fire(Yt._playButtonPressed)}),e.config.embed.on_site||(window.confirmLoginAction=function(t,n){e.events.fire(Yt._userLogIn,n)}),{}}const Gs={16:"shift",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down",74:"j",75:"k",76:"l"},zs={106:"j",107:"k",108:"l"},js=["up","down","left","right"],Ks=["right","l"],Xs=["left","j"],Zs=[Qr.TRANSCRIPT_LIST];function Qs(e,t,n){var i,r=!!e.config.embed.on_site,a=n.querySelector(".volume"),s=!1,l=null,c=!1,d=e.config.video.fps/5,u=Math.max(d,.618*e.config.video.duration),p=d,_=0,v=!1,m=Y(E,80);function f(){return!r&&(e.config.view===jt.main||e.config.view===jt.privateUnlocked||e.config.view===jt.webinarUnlocked)}function h(){s&&"help"===i&&e.events.fire(Yt._overlayCloseButtonPressed)}function g(e){return"number"!=typeof e.which&&(e.which=e.keyCode),e}function b(e){if("keypress"===e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return e.which in Gs?Gs[e.which]:String.fromCharCode(e.which).toLowerCase()}function y(t){if(e.config.embed.settings.background)return!0;var n=t.target||t.srcElement;return"INPUT"===n.tagName||"SELECT"===n.tagName||"TEXTAREA"===n.tagName||n.isContentEditable}function E(n,i){var o,r;const a=Ks.includes(n);if(t.get(Hn))return;if((null==(o=e.backbone)||null==(r=o.telecine)?void 0:r.ended)&&a)return;v||(i&&!e.backbone.paused&&e.events.fire(Yt._pauseButtonPressed),e.events.fire(Yt._scrubbingStarted,{seekType:"keyboard",isFrameByFrame:i}),v=!0),function(e){var t=e,n=Math.ceil(d),i=Math.ceil(u-d);p=function(e,t,n,i){return e/=100,n*(--e*e*e+1)+t}(t,n,i)}(_),1==++_&&(p=5*e.config.video.fps);const s=i?1:p,l=a?s:-s,c=e.currentTime*e.config.video.fps;!function(t,n){const{startTime:i,endTime:o}=e.fragmentsHandler.currentFragment;let r=t/e.config.video.fps;r<i?r=i:r>=o?r=o-.001:e.events.fire(Yt._showNudgeNotification,{direction:r-e.currentTime>0?"forward":"backward",time:1!==_||n?null:5}),e.events.fire(Mt._seek,r)}((a?Math.ceil(c):Math.floor(c))+l,i)}function C(e){if("preact-menu"===l)return!1;var t=l.getTabIndexItems(),n=t.indexOf(document.activeElement),i="up"===e?n-1:n+1,o=null;return!(o=i>=t.length?t[0]:i<0?t[t.length-1]:t[i])||(o.focus(),!1)}function w(){if(l)return!0;if(t.get(Hn)&&!t.get(zn))return!0;if(!document.activeElement||document.activeElement===document.body){const t=e.backbone.paused?Yt._playButtonPressed:Yt._pauseButtonPressed;return e.events.fire(t),h(),!1}}function T(){const t=e.backbone.muted,n=e.backbone.volume;return t?(e.events.fire(Mt._changeMuted,!1),0===n&&e.events.fire(Mt._changeVolume,1)):t||0!==n?!t&&n>0&&e.events.fire(Mt._changeMuted,!0):e.events.fire(Mt._changeVolume,1),!1}function L(){return"preact-menu"!==l&&(l?(l.element.contains(document.activeElement)&&l.button.focus(),l.hide(),!1):s?(e.events.fire(Yt._overlayCloseButtonPressed),!1):void 0)}function S(){return!c&&("preact-menu"===l||(l?!l.element.contains(document.activeElement)||C("up"):o.spatialPlayback&&e.config.video.spatial?(e.backbone.getEffectByName("ThreeSixtyEffect").keyPress("up"),!1):!(!e.config.embed.on_site||!document.activeElement||n.contains(document.activeElement))||(h(),e.events.fire(Mt._changeVolume,.05,!1,!0),!1)))}function k(){return!c&&("preact-menu"===l||(l?!l.element.contains(document.activeElement)||C("down"):o.spatialPlayback&&e.config.video.spatial?(e.backbone.getEffectByName("ThreeSixtyEffect").keyPress("down"),!1):!(!e.config.embed.on_site||!document.activeElement||n.contains(document.activeElement))||(h(),e.events.fire(Mt._changeVolume,-.05,!1,!0),!1)))}function A(t,n){const r=js.includes(n);if("preact-menu"===l)return!0;if(e.displayContext===e.adHandler)return!0;if(l)return!l.element.contains(document.activeElement)||!r||C("left"===n?"up":"down");if(s&&"help"!==i)return!0;if(h(),o.spatialPlayback&&e.config.video.spatial&&r)return e.backbone.getEffectByName("ThreeSixtyEffect").keyPress(n),!1;if(document.activeElement&&document.activeElement===a&&r){var c="left"===n?-.05:.05;return e.events.fire(Mt._changeVolume,c,!1,!0),!1}t.shiftKey||0===_?E(n,t.shiftKey):m(n,t.shiftKey)}return e.events.on(Yt._overlayOpened,(function(e){s=!0,i=e,"not-supported"!==e&&"email-capture"!==e||(r=!0)})),e.events.on(Yt._overlayClosed,(function(){s=!1,i=null})),e.events.on(Yt._menuVisibilityChanged,(function(e,t){l=e?t||e:null})),e.events.on(Yt._transcriptNavActive,(function(e){c=e})),e.events.on(Yt._configChanged,(function(e){e&&(r=!1)})),function(){const{like:n,watch_later:r,share:a}=e.config.embed.settings;var c={c:[Yt._ccButtonPressed,!0],h:[Yt._prefsButtonPressed,!0],T:Yt._transcriptKeyPressed,f:Yt._fullscreenButtonPressed,d:Yt._debugButtonPressed,k:w,j:A,l:A,m:T,space:w,up:S,down:k,left:A,right:A,esc:L,"?":[Mt._showOverlay,"help"]};function u(t){if(g(t),function(e){return!(e.ctrlKey||e.metaKey||e.altKey||"keypress"===e.type&&e.charCode in zs||(e.which in Gs?"keydown"!==e.type:"keypress"!==e.type))}(t)&&!y(t)&&f()){var n=b(t);if(n in c){if("function"==typeof c[n]){if(!1===c[n](t,n)){var o;if(t.preventDefault(),Zs.includes(null==(o=t.target)?void 0:o.id))return;t.stopPropagation()}return}if(!1===function(t){if(t=Array.isArray(t)?t:[t],s&&"help"===i){if(e.events.fire(Yt._overlayCloseButtonPressed),t[0]===Mt._showOverlay&&"help"===t[1])return!1;if(t[0]!==Mt._openVimeo)return setTimeout((function(){e.events.fire.apply(null,t)}),250),!1}return e.events.fire.apply(null,t),!1}(c[n])){var r;if(t.preventDefault(),Zs.includes(null==(r=t.target)?void 0:r.id))return;t.stopPropagation()}}}}e.config.embed.on_site||(c.v=Mt._openVimeo),n&&(c.x=Yt._likeButtonPressed),r&&(c.w=Yt._watchLaterButtonPressed),a&&(c.s=Yt._shareButtonPressed),e.config.embed.keyboard&&(document.addEventListener("keydown",u,!1),document.addEventListener("keypress",u,!1),document.addEventListener("keyup",(function(n){if("preact-menu"!==l&&(g(n),!y(n)&&f())){var i=b(n);o.spatialPlayback&&e.config.video.spatial&&js.includes(i)?e.backbone.getEffectByName("ThreeSixtyEffect").keyUp(i):t.get(Hn)||(Xs.includes(i)||Ks.includes(i))&&function(t){m.cancel(),p=d,_=0;var n=t.shiftKey;e.events.fire(Yt._scrubbingEnded,n),v=!1}(n)}}),!1))}(),e.events.on(Yt._becameActive,(function(){r=!1})).on(Yt._becameInactive,(function(){r=!0})),e.config.embed.on_site&&document.querySelector(".player")===n&&(r=!1),function(){let e,t=!1;document.body.addEventListener("keyup",e=>{9!==e.which||document.body.classList.contains("showfocus")||document.body.classList.add("showfocus")}),document.body.addEventListener("keydown",n=>{32!==n.which&&13!==n.which||(t=!0,clearTimeout(e),e=setTimeout(()=>{t=!1},200))}),document.body.addEventListener("click",e=>{t||document.body.classList.remove("showfocus")})}(),e.events.on(Mt._destroy,()=>{r=!0}),{pause:function(){r=!0},unpause:function(){r=!1}}}function Js(e,t,n){let i=n.USD;return t in n&&(i=n[t]),-1!==e.indexOf("${price}")?e.replace("${price}",i):-1!==e.indexOf("{PRICE}")?e.replace("{PRICE}",i):e}function el(e,t){return void 0!==e&&void 0!==e[t]?e[t]:t}var tl=Object.freeze({__proto__:null,formatVodLabel:function(e,t,n,i){var o=i[t];return o?(o=Js(o=el(e,o),n,i.prices),i.expires_in_duration_str&&(o=o.replace("{TIME}",i.expires_in_duration_str)),i.available_on_formatted&&(o=o.replace("{DATE}",i.available_on_formatted)),o):null},getDisplayPrice:Js,isAvailableInCountry:function(e,t){return!e||0===e.length||-1!==e.indexOf(t)},translateFromRequest:el});function nl(){}let il=function(){function e(e,t){this._player=e,this._store=t,this._playbackBlocked=!1,this._disabled=!1,this._setupPolling()}var t=e.prototype;return t.disable=function(){this._disabled=!0},t._blockRegistrant=function(){this._player.backbone.endLive(),this._player.events.fire(Yt._webinarRegistrantBlocked),this._player.events.fire(Mt._showOverlay,"webinar-blocked"),this._playbackBlocked=!0},t._unblockRegistrant=function(){this._player.backbone.reactivate(),this._player.events.fire(Yt._webinarRegistrantUnblocked),this._player.events.fire(Mt._hideOverlay,{unmakeModal:!0}),this._playbackBlocked=!1},t._pollRegistrantStatus=function(){try{const e=this,t=e._player.config.video.webinar.id,n=e._store.get(wi),i=`https://${e._player.config.player_url}/video/${e._player.config.video.id}/webinar/${t}/registrant/${n}/status`;return function(e){if(e&&e.then)return e.then(nl)}(function(t,n){try{var o=function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(a(i,{withCredentials:!0}).json(),(function(t){t.is_blocked&&!e._playbackBlocked?e._blockRegistrant():e._playbackBlocked&&!t.is_blocked&&e._unblockRegistrant()}))}catch(Ie){return n(Ie)}return o&&o.then?o.then(void 0,n):o}(0,(function(e){Tn.captureException(e)})))}catch(Ie){return Promise.reject(Ie)}},t._shouldPoll=function(){return!!(this._player.config.video.webinar&&this._player.config.video.webinar.id&&"ended"!==this._player.config.video.webinar.status&&this._store.get(wi))},t._setupPolling=function(){this._disabled||(this._shouldPoll()&&this._pollRegistrantStatus(),setTimeout(this._setupPolling.bind(this),this._playbackBlocked?6e4:3e4))},e}(),ol=function(){function e(e,{displayTimeout:t=0,label:n="Alert"}={}){f(this),this._container=e,this._visible=!1,this._message=null,this._alert=null,this._alertLabel=n;const i=Math.round(t/1e3);0!==i&&(this._alertLabel=`${n} Will be dismissed in ${i} seconds`),this._displayTimer=null,this._displayTimeout=t,this._renderTemplate(),this._attachEvents()}var t=e.prototype;return t.show=function(e,t=this._displayTimeout){!0!==this._visible&&(clearTimeout(this._displayTimer),this._alert.classList.remove("hidden"),this._alert.removeAttribute("hidden"),window.requestAnimationFrame(()=>{this._alert.classList.add("in")}),(this._alert.querySelector("[data-alert-autofocus]")||this._alert).focus(),this._visible=!0,this.fire("show",e),0!==t&&(this._displayTimer=setTimeout(()=>{this.hide("timeout")},t)))},t.hide=function(e){!1!==this._visible&&(clearTimeout(this._displayTimer),this._alert.classList.add("leaving"),window.requestAnimationFrame(()=>{const e=this;this._setHideAttributes(),Le(this._alert).on("transitionend",(function t(n){"opacity"===n.propertyName&&(e._alert.classList.remove("leaving"),e._alert.classList.add("hidden"),e._alert.setAttribute("hidden",""),Le(e._alert).off("transitionend",t))}))}),this._visible=!1,this.fire("hide",e))},t._setHideAttributes=function(){this._alert.classList.remove("in")},t._renderTemplate=function(){this._alert||(this._alert=document.createElement("div"),this._alert.classList.add("vp-alert"),this._alert.setAttribute("role","alertdialog"),this._alert.setAttribute("aria-atomic","true"),this._alert.classList.add("hidden"),this._alert.setAttribute("hidden",""),this._container.appendChild(this._alert),this._setHideAttributes()),this._message instanceof HTMLElement?(this._alert.innerHTML="",this._alert.appendChild(this._message)):(this._alert.textContent=this._message,this._alert.innerHTML=this._message);const e=document.createElement("button");e.setAttribute("data-close",""),e.setAttribute("aria-label","Close alert"),e.classList.add("close"),e.innerHTML=oo.render("icon_close"),this._alert.appendChild(e)},t._attachEvents=function(){Le(this._alert).on("click","[data-close]",e=>{this.hide(e)})},v(e,[{key:"visible",get:function(){return this._visible}},{key:"message",get:function(){return this._message},set:function(e){e instanceof HTMLElement&&this._message&&e.textContent===this._message.textContent||e!==this._message&&(this._message=e,this._renderTemplate())}}]),e}(),rl=function(){function e(e,t,n){this.player=e,this.backbone=t,this.isBufferingTooLong=!1,this.isBufferingTooFrequent=!1,this.autoAlertWasDismissed=!1,this.bufferCount=-1,this.badPlaybackTimer=null,this._setUpAlertUI(n),this._attachEventHandlers()}var t=e.prototype;return t.handleBufferStarted=function(){this.bufferCount+=1,this._startBadPlaybackTimer()},t.handleBufferEnded=function(){clearTimeout(this.badPlaybackTimer),this.badPlaybackTimer=null,this.isBufferingTooLong=!1},t._attachEventHandlers=function(){this.player.events.on(Yt._debugPayloadCopied,()=>{this._showDebugPayloadCopied()}),this.player.events.on(St._spatialUnsupported,e=>{this._showSpatialUnsupportedAlert(e)}),this.player.events.on(St._spatialFailure,e=>{this._showSpatialFailureAlert(e)}),this.player.events.on(St._bufferStarted,this.handleBufferStarted.bind(this)),this.player.events.on(_.BUFFER_ENDED,this.handleBufferEnded.bind(this)),this.player.events.on(St._badPlayback,()=>{this.autoAlertWasDismissed||(this.showAlert("stream_studder"),Tn.captureBreadcrumb("Alert shown",{message:"stream_studder"},"video"))}),this.player.events.on(Yt._qualityChanged,e=>{"auto"===e&&this.alertUI.hide("qualitymenuauto")})},t._showSpatialUnsupportedAlert=function(e){e||this.showAlert("warning_alert",{strings:{text:'See a <a href="https://help.vimeo.com/hc/en-us/articles/115001878167#browsers" target="_blank" rel="noopener" aria-describedby="new-window">list of browsers</a> that support 360 viewing.'}})},t._showDebugPayloadCopied=function(){this.showAlert("notice",{strings:{text:"Debug Payload Copied"}},5e3)},t._showSpatialFailureAlert=function(e){e||this.showAlert("warning_alert",{strings:{text:'Looking to watch a 360 video? See <a href="https://help.vimeo.com/hc/en-us/articles/115001878167#browsers" target="_blank" rel="noopener" aria-describedby="new-window">supported browsers and settings</a>.'}})},t.showAlert=function(e,t=null,n){this.alertUI&&!this.player.config.embed.settings.background&&(this.alertUI.message=oo.render(e,t),this.alertUI.show(null,n))},t._setUpAlertUI=function(e){this.alertUI=new ol(e,{displayTimeout:1e3}),this.alertUI.on("show",e=>{this.player.events.fire(Yt._alertVisibilityChanged,!0,e)}),this.alertUI.on("hide",e=>{const t=e.target,n=t&&"function"==typeof t.getAttribute;if(n)switch(t.getAttribute("data-context")){case"suggestion":this.player.events.fire(Mt._changeQuality,"auto"),e="suggestion";break;default:e="close"}(n||"qualitymenuauto"===e)&&(this.autoAlertWasDismissed=!0),this.player.events.fire(Yt._alertVisibilityChanged,!1,e)})},t._startBadPlaybackTimer=function(){null===this.badPlaybackTimer&&0!==this.bufferCount&&(this.badPlaybackTimer=setTimeout(()=>{this.isBufferingTooLong=!0,this._notifyBadPlayback()},1e4))},t._notifyBadPlayback=function(){"MediaSourceScanner"===this.backbone.currentScannerName&&(this.isBufferingTooLong||this.isBufferingTooFrequent)&&(this.backbone.video.currentFile.restrictedStreamIndexes.length<=0||(this.isBufferingTooLong,this.isBufferingTooFrequent,this.player.events.fire(St._badPlayback),this.bufferCount=0,this.badPlaybackTimer=null,this.isBufferingTooFrequent=!1,this.isBufferingTooLong=!1))},e}();function al(e,t,n){return n?t?t(e):e:(e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e)}function sl(e,t){try{var n=e()}catch(Ie){return t(Ie)}return n&&n.then?n.then(void 0,t):n}function ll(){}let cl=function(){function e(e,t){this._player=e,this._store=t,this._failedRequests=0,this._viewerCount=0,this._setUpEvents()}var t=e.prototype;return t._setUpEvents=function(){this._player.events.on(I.STREAM_ONLINE,()=>{this._getViewerCount()})},t._getViewerCount=function(){try{const e=this;if(!e._store.get(zn)||!e._player.config.video.live_event.show_viewer_count)return;const t=setTimeout(()=>{e._getViewerCount()},3e4);let n=`${e._player.config.video.id}`;"unlisted"===e._player.config.video.privacy&&(n+=`:${e._player.config.video.unlisted_hash}`);let i=`https://${e._player.config.vimeo_api_url}/videos/${n}/stats/live`,o={jwt_token:e._player.config.user.vimeo_bucketed_live_client_token};return dl(sl((function(){return al(e._player.updatePhpTokens(),(function(){return dl(sl((function(){return al(a({url:i,searchParams:o}).json(),(function(t){t.viewers?(e._failedRequests=0,e._viewerCount=t.viewers.current,e._player.events.fire(I.LIVE_STATS_SUCCESS,{viewerCount:e._viewerCount})):e._failedRequests++}))}),(function(){e._failedRequests++,e._hideViewerCount()&&clearTimeout(t),e._player.events.fire(I.LIVE_STATS_FAILURE)})))}))}),(function(n){Tn.captureException(n),e._failedRequests++,e._hideViewerCount()&&clearTimeout(t),e._player.events.fire(I.LIVE_STATS_FAILURE)})))}catch(Ie){return Promise.reject(Ie)}},t._hideViewerCount=function(){return this._failedRequests>3},e}();function dl(e){if(e&&e.then)return e.then(ll)}let ul=function(){function e(e){let t;t="PROD"===Si(e.config)?"https://embedder-sdk.wirewax.com/latest/wirewax-embedder-sdk@beta.umd.js":"https://embedder-sdk.wirewax.tv/latest/wirewax-embedder-sdk@beta.umd.js";const n=window.WIREWAX?Promise.resolve():Ae(t);this.embedders={},this.player=e,this.playerContainer=e.element.querySelector(".vp-wirewax-wrapper"),this.wirewaxContainer=(()=>{const e=document.createElement("div");return e.classList.add("vp-wirewax-container"),e})(),this.playerContainer.appendChild(this.wirewaxContainer),this.playHandlerCalled=!1,this.playHandler=this.handlePlay.bind(this),this.pauseHandler=this.handlePause.bind(this),this.seekedHandler=this.handleSeeked.bind(this),this.endedHandler=this.handleEnded.bind(this),n.then(()=>{this.init()}).catch(e=>{})}var t=e.prototype;return t.init=function(){var e;this.setupEmbedder(this.player.config.embed.interactive_id,null==(e=this.player.config.embed)?void 0:e.interactive_params)},t.setupEmbedder=function(e,t){try{t=JSON.parse(t)}catch(n){}return this.embedder=window.WIREWAX("vp-wirewax-container",{vidId:e,interactiveParams:t||null}),this.embedder.ready().then(()=>{this.registerWIREWAX();const e=this.embedder.getInteractiveData("hotspots");this.player.events.fire(Yt._interactiveReady,{hotspots:e})}).catch(e=>{})},t.registerWIREWAX=function(){this.setWIREWAXCurrentTime=()=>{this.embedder.setCurrentTime(this.player.backbone.currentTime),this.animationId=window.requestAnimationFrame(this.setWIREWAXCurrentTime)},this.player.events.on(p.PLAY,this.playHandler),this.player.events.on(p.PAUSE,this.pauseHandler),this.player.events.on(p.SEEKED,this.seekedHandler),this.player.events.on(p.ENDED,this.endedHandler),this.player.events.once(p.TIME_UPDATE,()=>{this.playHandlerCalled||this.playHandler()}),this.player.config.embed.autoplay&&(this.startTimeUpdate(),this.embedder.play()),this.addWIREWAXListeners(),this.embedders[this.player.backbone.element.id]=this.embedder},t.addWIREWAXListeners=function(){this.embedder.on("play",()=>{this.player.backbone.play()}),this.embedder.on("pause",()=>{this.player.backbone.pause()}),this.embedder.on("seeked",({seekTo:e,seekType:t})=>{this.player.events.fire(Yt._interactiveSeekCall,{type:t}),this.player.backbone.currentTime=e}),this.embedder.on("hotspotClick",this.handleHotspotClick.bind(this)),this.embedder.on("overlayPanelClick",this.handleOverlayPanelClick.bind(this)),this.embedder.on("toggleOverlay",this.handleToggleOverlay.bind(this))},t.destroyWirewax=function(){this.stopTimeUpdate(),this.embedder.destroy(),this.embedders[this.player.backbone.element.id]={},this.playerContainer.removeChild(this.wirewaxContainer),this.playHandlerCalled=!1,this.player.events.off(p.PLAY,this.playHandler),this.player.events.off(p.PAUSE,this.pauseHandler),this.player.events.off(p.SEEKED,this.seekedHandler),this.player.events.off(p.ENDED,this.endedHandler)},t.resetWirewax=function(){var e;this.destroyWirewax(),this.player.config.embed.wirewax&&(this.playerContainer.appendChild(this.wirewaxContainer),this.setupEmbedder(this.player.config.embed.interactive_id,null==(e=this.player.config.embed)?void 0:e.interactive_params))},t.handlePlay=function(){this.startTimeUpdate(),this.embedder.play(),this.playHandlerCalled=!0},t.handlePause=function(){this.stopTimeUpdate(),this.embedder.pause()},t.handleSeeked=function(e){const{currentTime:t}=e;this.embedder.setCurrentTime(t)},t.handleEnded=function(){this.embedder.setEnded(!0),this.embedder.setCurrentTime(this.player.backbone.duration)},t.startTimeUpdate=function(){window.cancelAnimationFrame(this.animationId),this.animationId=window.requestAnimationFrame(this.setWIREWAXCurrentTime)},t.stopTimeUpdate=function(){window.cancelAnimationFrame(this.animationId)},t.handleHotspotClick=function(e){this.player.events.fire(Yt._interactiveHotspotClicked,e)},t.handleOverlayPanelClick=function(e){this.player.events.fire(Yt._interactiveOverlayPanelClicked,e)},t.handleToggleOverlay=function(e){e.overlayOnDisplay?(this.player.events.fire(Yt._overlayOpened,"interactive"),this.wirewaxContainer.classList.add("vp-interactive-overlay-open")):(this.player.events.fire(Yt._overlayClosed,"interactive"),this.wirewaxContainer.classList.remove("vp-interactive-overlay-open"))},e}();let pl,_l,vl;!function(e){e.PQ="PQ",e.DV5="DV5",e.DV81="DV81",e.DV82="DV82",e.DV84="DV84",e.HDR10="HDR10",e.HDR10_PLUS="HDR10_PLUS",e.HLG="HLG"}(pl||(pl={})),function(e){e.FREE="free",e.BASIC="basic",e.STARTER="starter",e.STANDARD="standard",e.ADVANCED="advanced",e.BUSINESS="business",e.PLUS="plus",e.PLUS_LAPSED="plus_lapsed",e.PRO="pro",e.PRO_LAPSED="pro_lapsed",e.PRO_EXPIRED="pro_expired",e.PRODUCER="producer",e.PRODUCER_LAPSED="producer_lapsed",e.LIVE_PRO="live_pro",e.LIVE_BUSINESS="live_business",e.LIVE_BUSINESS_LAPSED="live_business_lapsed",e.LIVE_PREMIUM="live_premium",e.LIVE_PREMIUM_LAPSED="live_premium_lapsed",e.ENTERPRISE="enterprise",e.ENTERPRISE_LAPSED="enterprise_lapsed",e.CUSTOM="custom",e.GUEST="none"}(_l||(_l={})),function(e){e.STREAMROOT="streamroot",e.KOLLECTIVE="kollective",e.HIVE="hive"}(vl||(vl={}));const ml={[vl.STREAMROOT]:"Lumen",[vl.KOLLECTIVE]:"Kollective",[vl.HIVE]:"Hive"};function fl({config:e,debugCollector:t,currentTime:n,backbone:i}){var r,a,s,l,c;const d=e.request.session,u=t.getCurrent(Mo.FIELD_VIDEO_DIMS),p=t.getCurrent(Mo.FIELD_TOTAL_FRAMES)||0,_=t.getCurrent(Mo.FIELD_DROPPED_FRAMES)||0,v=t.getCurrent(Mo.FIELD_FILES),m=t.getCurrent(Mo.FIELD_STREAMS),f=t.getCurrent(Mo.FIELD_SCANNERS),h=t.getCurrent(Mo.FIELD_BANDWIDTH),g=f===Bo.HLS_LIVE_SCANNER,b=f===Bo.MEDIA_SOURCE_SCANNER,y=Pe(n,i.buffered),E=n+y,C=function(e){if(!e)return null;const t=e.length;let n=0,i=[];for(;n<t;n++){const t=e.start(n),o=e.end(n);i.push({i:n,start:t,end:o})}return i}(i.buffered),w=e.embed.dnt||e.request.flags.dnt,T={isLive:g,isDash:b,embedSize:u,sessionId:d,testGroup:Object.keys(e.request.ab_tests).map(t=>{var n;return`${t}: ${null==(n=e.request.ab_tests[t])?void 0:n.group}`}).join(", "),isDNTEnabled:w,totalFrames:p,droppedFrames:_,ua:null==(r=navigator)?void 0:r.userAgent,clipId:e.video.id,readyState:i.readyState,support:JSON.stringify(o),bufferEnd:ht(E,3),bufferAhead:ht(y,3),currentTime:ht(n,3),clientIp:null==(a=e.request)||null==(s=a.client)?void 0:s.ip,playerVersion:Li(e),bufferedRanges:JSON.stringify(C),brainDebug:JSON.stringify(i.brainDebug),codec:m?m.codec:null,hideCloseButton:!!e.embed.settings.background,isCopyDisabled:!!w,vrHeadsetName:t.getCurrent(Mo.FIELD_VR_HEADSET),droppedFramesPercent:0!==p?`${(_/p*100).toFixed(2)}%`:0,resolution:m?`${m.width}×${m.height}@${Math.round(m.framerate)} ${Math.round(m.bitrate/1e3).toLocaleString()} Kbps ${m.audioBitrate?` / ${Math.round(m.audioBitrate/1e3).toLocaleString()} Kbps`:""}`:null,payloadId:`${e.video.owner.id}_${e.video.id}_${e.request.session}_${Math.floor(Date.now()/1e3)}`,bandwidthKbps:h?`${Math.floor(h.value/1e3).toLocaleString()} Kbps`:0,bandwidthMinKbps:`${Math.floor(t.getCurrent(Mo.FIELD_MIN_BANDWIDTH)/1e3).toLocaleString()} Kbps`,bandwidthMaxKbps:`${Math.floor(t.getCurrent(Mo.FIELD_MAX_BANDWIDTH)/1e3).toLocaleString()} Kbps`,separateAudioVideo:!(null==(l=e.request.files)||!l.dash||!e.request.files.dash.separate_av)};(null==m?void 0:m.audioChannels)&&(T.resolution+=m.ambisonicConnected&&m.ambisonicOrder?` ambisonic ${m.ambisonicOrder} (${m.audioChannels}ch)`:` ${m.audioChannels}ch`),v&&(T.delivery=v.mime),e.request.drm&&Object.assign(T,{drmEnabled:!0,drmFastly:!!e.request.drm.fastly});const L=null==(c=e.video.ecdn)?void 0:c.ecdn_provider;if(L){const{ecdnBytesByCdn:e,ecdnBytesPeered:t,ecdnPeers:n}=Cr(L),i={p2pSources:n.toString(),p2pOffload:`${hl(t,e)}%`,ecdnVendor:ml[L]};Object.assign(T,i)}return g&&Object.assign(T,function(e,t){var n;const i=(null==(n=e.video.live_event)?void 0:n.id)||null;let o="";try{o=`${t.getCurrent(Mo.FIELD_LIVE_LATENCY).toFixed(2)} seconds`}catch(Ie){}return{liveLatency:o,liveSessionID:i}}(e,t)),b||g?Object.assign(T,{bandwidthSeriesData:gl(t)}):Object.assign(T,{bandwidthSeriesData:{max:1,debugMarkers:[],timeSeries:[]}}),T}function hl(e,t){return 0===e&&0===t?0:ht(e/(t+e)*100,1)}function gl(e){const t=e.getSeries(Mo.FIELD_BANDWIDTH),n=e.getCurrent(Mo.FIELD_MAX_BANDWIDTH);return{debugMarkers:e.getSeries(Mo.FIELD_MARKERS),timeSeries:t,max:n}}let bl=function(){function e(e=((e,t)=>e<t)){this._data={},this._sortedKeys=[],this._sort=e}var t=e.prototype;return t._insert=function(e){var t=this._sortedKeys.length;if(0===t)this._sortedKeys.push(e);else{for(var n=0;n<t;n++)if(this._sort(e,this._sortedKeys[n])){this._sortedKeys[n-1]!==e&&this._sortedKeys.splice(n,0,e);break}n===t&&this._sortedKeys[n-1]!==e&&this._sortedKeys.splice(n,0,e)}},t._binarySearch=function(e,t,n,i){if(i<n)return-1;let o=parseInt(n+(i-n)/2,10);return e[o]>t?this._binarySearch(e,t,n,o-1):e[o]<t?this._binarySearch(e,t,o+1,i):o},t.delete=function(e){const t=this._binarySearch(this._sortedKeys,e,0,this._sortedKeys.length);if(-1===t)throw new Error("key does not exist");this._sortedKeys.splice(t,1),delete this._data[e]},t.set=function(e,t){return this._data[e]=t,this._insert(e),this},t.get=function(e){return this._data[e]},t.keys=function(){return this._sortedKeys.slice()},t.values=function(){return this.keys().map(e=>this._data[e])},t.forEach=function(e){const t=this._sortedKeys.length;for(let n=0;n<t&&!1!==e(this._data[this._sortedKeys[n]],this._sortedKeys[n],this);n++);},v(e,[{key:"size",get:function(){return this._sortedKeys.length}}]),e}();const yl=e=>{var t,n;const i=new bl;return(null==(t=e.embed)||null==(n=t.cards)?void 0:n.length)&&e.embed.cards.forEach(e=>{const t=e.url?d(d({},e),{},{url:Eo(e.url)}):e;i.set(e.timecode,Bn(t))}),i},El=e=>{const{events:t,set:n}=e,i=function(e){return{cardsMap:yl(e.config),activeCard:null,hoveredCard:null,displayedCard:null,cardPressed:void 0}}(e),o=e=>{const{hoveredCard:t,activeCard:n}=e,i=null!==t?t:n;return{cards:d(d({},e),{},{displayedCard:i})}},r=e=>{e&&t.fire(Yt._cardDisplayed,e.id,e)},a=e=>e.timecode;return t.on(Yt._configChanged,(e,t)=>{n(e=>{const n=d(d({},e.cards),{},{cardsMap:yl(t),activeCard:null,hoveredCard:null});return o(n)})}),t.on(Mt._addCard,e=>{n(t=>{let{cardsMap:n}=t.cards;n.set(e.timecode,e),r(e);const i=d(d({},t.cards),{},{cardsMap:n,activeCard:e.timecode});return o(i)})}),t.on(Mt._removeCard,e=>{n(t=>{let{cardsMap:n}=t.cards;n.delete(e.timecode);const i=d(d({},t.cards),{},{cardsMap:n,activeCard:null,hoveredCard:null});return o(i)})}),t.on(p.TIME_UPDATE,({currentTime:e})=>{n(t=>{const n=((e,t)=>{const{cardsMap:n}=e.cards;let i=n.values().filter(e=>((e,t)=>t>=a(e)&&t<(e=>a(e)+(e.displayTime||6))(e))(e,t)).slice(-1)[0];return(null==i?void 0:i.timecode)||null})(t,e),i=t.cards.cardsMap.get(n);if(n===t.cards.activeCard)return{};const s=d(d({},t.cards),{},{activeCard:n});return r(i),o(s)})}),t.on(Yt._ended,()=>{n(e=>{const t=d(d({},e.cards),{},{activeCard:null,hoveredCard:null});return o(t)})}),{cards:i,setCards:(e,i)=>{"cardPressed"!==e?((e,t)=>{n(n=>{const i=d(d({},n.cards),{},{[e]:t});return o(i)})})(e,i):t.fire(Yt._cardPressed,i)}}};function Cl({config:e}){var t,n,i,r;const{title:a}=e.video,{title:s,portrait:l}=e.embed.settings,c=0===e.embed.on_site,u=e.embed.settings.spatial_label,p=!(!e.video.spatial||!u),_=e.request.file_codecs||e.video.file_codecs,v=!$(_),m=e.request.hdr_formats||[],f=v&&(null==(t=_.hevc)||null==(n=t.hdr)?void 0:n.length)>0,h=m.includes(pl.HDR10_PLUS),g=m.includes(pl.DV84)||v&&(null==(i=_.hevc)||null==(r=i.dvh1)?void 0:r.length)>0,b=e.video.channel_layout||"stereo",y=e.video.owner[o.devicePixelRatio>1?"img_2x":"img"],E=e.video.owner.name,C=er("video-portrait",e),w=er("video-title",e),T=er("video-byline",e),L=function(e){let t={displayByline:!1,displayBadge:!1};if(e.embed.settings.byline){const{type:n,url:i}=e.embed.settings.byline_badge||{};Object.assign(t,{displayByline:!0,displayBadge:!e.video.live_event,bylineBadgeType:n,bylineBadgeUrl:i})}return t}(e);return d({ownerLinkUrl:C,titleLinkUrl:w,bylineLinkUrl:T,displayTitle:!!s,displayPortrait:!!l,ownerName:E,targetBlank:c,portraitImg:y,title:a,is360:p,hasHDR:f,hasHDR10Plus:h,hasDolbyVision:g,channelLayout:b},L)}const wl=e=>`opacity ${e}ms ease-out`,Tl=({children:e,visible:t,duration:n=250,styleOverrides:i={},onFaded:o})=>{const r=wl(n),a={enter:{opacity:0},enterActive:{opacity:1,transition:r},exit:{opacity:1},exitActive:{opacity:0,transition:r},exitDone:{display:"none"}};return Object.keys(i).forEach(e=>{e in a&&Object.assign(a[e],i[e])}),Ie(Re,{in:t,duration:n,styles:a,alwaysMounted:!0,onExited:()=>{o&&o()},children:e})};let Ll;function Sl(e){var t;const{request:n,video:i}=e.config,o=er("vimeo-logo",e.config);return{overrideBehavior:!1,trailerButtonText:null==(t=i.vod)?void 0:t.button_text,vimeoLogoUrl:o,thumbnailPreview:n.thumb_preview}}const kl=({config:e,element:t})=>{var n;const{embed:i}=e;return!(t.classList.contains("player-tiny")||ra(t)||e.view&&!xr(e.view)||null!=(n=e.embed)&&n.autoplay||!la(i))},Al=e=>{var t;const{view:n,video:i,embed:r,request:a}=e.config,{vod:s}=i,l=n!==jt.main&&n!==jt.privateUnlocked&&n!==jt.webinarUnlocked,c=!!r.settings.instant_sidedock,d=(null==(t=e.store)?void 0:t.get("ui.player.mode"))===Oo.TINY,u=s&&"purchase_options"in s&&!!s.purchase_options.length,p=s&&Dr(s.countries,a.country);return!ra(e.element)&&!d&&!!la(r)&&(o.touch||l||c||u&&p)},Pl=e=>{var t;const{view:n,embed:i,request:o}=e.config;return!(ra(e.element)||n&&!xr(n)||i.autoplay&&(null==(t=o.flags)?void 0:t.autohide_controls)||!la(i))};function Il({element:e}){return{purpose:aa(e)}}const Rl={},Ol=({element:e,config:t})=>{if(e.classList.contains("player-mini")||e.classList.contains("player-tiny"))return!1;const{embed:n}=t;return!(!n.settings.badge||n.autoplay&&16!==n.settings.badge.id)},Nl=({config:e,element:t})=>{var n;return!ra(t)&&!(e.view&&!xr(e.view))&&(null==(n=e.embed)||!n.background)&&Ca(e)},Ml=e=>e.replace(/<\/?[\w\s]*>|<.+[\W]>/g,""),Dl=(e,t=20,n=20,i=10)=>{if(0===e.length)return[];let o,r,a,s,l;return c(e[0]),e.reduce((function(a,s,l,d){var p;const{text:_,endTime:v}=s,m=function(e,t){return e+1===t.length}(l,d);if(r+=`${_} `,m)return u(v,a);const f=_.split(" "),h=function(e){return function(e){return[".","?","!"].some(t=>e.trim().endsWith(t))}(e[e.length-1])}(f);o+=f.length;const g=o>=n,b=o>=t&&h,y=function(e,t,n){return t-e>n}(s.endTime,null==(p=d[l+1])?void 0:p.startTime,i);return(g||b||y)&&(a=u(v,a),c(e[l+1])),a}),[]).map((e,t)=>d(d({},e),{},{originalIndex:t}));function c(e){e&&(o=0,r="",a=e.startTime,s=e.originalIndex,l=e.startTimeDisplay)}function u(e,t){return t.concat({originalIndex:s,text:r.trim(),startTime:a,startTimeDisplay:l,endTime:e})}},xl=e=>e.map((e,t)=>({startTime:e.startTime,endTime:e.endTime,startTimeDisplay:"",text:Ml(e.text),originalIndex:t})),Bl=(e,t)=>{let n;return n=t?e.reduce((e,n)=>(n.startTime>=t.startTime&&n.endTime<=t.endTime&&e.push(d(d({},n),{},{startTimeDisplay:uo($r(n.startTime,t))})),e),[]):(e=>e.map(e=>d(d({},e),{},{startTimeDisplay:uo(e.startTime)})))(e),n},Vl=e=>e?e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""):"",Ul=(e,t)=>{const{lang:n,cookie:i}=e.request,{captions:o,transcript:r}=i,[a]=(r||"").split("."),[s]=(o||"").split(".");return r&&t.find(e=>e.language.includes(a))||s&&t.find(e=>e.language.includes(s))||n&&t.find(e=>n.includes(e.language))||t.find(e=>e.language.includes("en"))||t[0]},Fl=e=>e.map((e,t,n)=>{const i=n[t+1];return i&&i.startTime<e.endTime?d(d({},e),{},{endTime:i.startTime}):e}),Hl=(e,t)=>e.findIndex(e=>e.startTime<=t&&e.endTime>t),ql=(e,t)=>!!e.find(e=>e.index===t),$l=()=>o.isGoogleBot,Wl=[ta.EMPTY,ta.HELP,ta.SHARE,ta.INTERACTIVE],Yl=({element:e,config:t})=>{const{embed:n}=t;return!!n.settings.playbar&&!!la(n)&&!e.classList.contains("player-tiny")},Gl=()=>{const e=$l();return o.isGoogleBot&&e},zl=e=>{const{set:t}=e;return{displayList:function(e){const t=Al(e),n=kl(e),i=(e=>Il(e).purpose!==ta.EMPTY)(e),o=(({store:e,config:t,events:n,set:i})=>{var o,r;return n.on(Yt._configChanged,(e,t)=>{i(e=>{var n,i;return{displayList:d(d({},e.displayList),{},{cards:!!(null==(n=t.embed)||null==(i=n.cards)?void 0:i.length)&&!e.appearance.isMenuBlockingUI})}})}),!!(null==(o=t.embed)||null==(r=o.cards)?void 0:r.length)&&!e.get("ui.controlbar.isMenuFullWidth")})(e),r=Ol(e),a=Pl(e),s=Nl(e),l=Yl(e),c=Gl(),_=$l();return(({set:e,events:t})=>{const n=t=>{e(e=>({displayList:d(d({},e.displayList),{},{outro:t})}))};t.on(Yt._outroDisplayed,()=>n(!0)),t.on([Yt._outroHidden,p.PLAY,p.SEEKED,Yt._scrubbingStarted,Mt._reset],()=>n(!1))})(e),(({store:e,config:t,set:n})=>{e.watch("ui.controlbar.isMenuFullWidth",e=>{n(n=>{var i,o;return{displayList:d(d({},n.displayList),{},{cards:!!(null==(i=t.embed)||null==(o=i.cards)?void 0:o.length)&&!e})}})})})(e),(({set:e,events:t,store:n})=>{n.watch("ui.player.mode",t=>{t===Oo.TINY&&e(e=>({displayList:d(d({},e.displayList),{},{debugPanel:!1})}))}),t.on(Yt._debugButtonPressed,()=>{e(e=>n.get("ui.player.mode")===Oo.TINY?{}:{displayList:d(d({},e.displayList),{},{debugPanel:!e.displayList.debugPanel})})})})(e),(({set:e,get:t,store:n,subscribe:i,events:o})=>{function r(n={}){t().displayList.sideDock&&e(e=>{const{playback:t,displayList:i,appearance:r,embed:a,cards:s}=e,{overlay:l,alert:c,menu:p,toast:_}=i,{playInitiated:v,targetTimeReached:m}=t,{forceExitedFullscreen:f}=r,h=Mr(r,n,"mousedOverSidedock"),g=l||c||p&&r.isMenuBlockingUI||!!s.displayedCard||_&&u();return f?{}:v&&m||g||a.autoHideControls?h?{}:!r.externalDisplay&&!r.pictureInPictureActive||g?(o.fire(Yt._sidedockVisibilityChanged,!1),{appearance:d(d({},e.appearance),{},{mousedOverSidedock:h}),displayList:d(d({},e.displayList),{},{sideDock:!1})}):{}:{}})}function a(i={}){t().displayList.sideDock||e(e=>{const{displayList:t,appearance:r,embed:a,cards:s}=e,{menu:l,overlay:c,alert:p,toast:_}=t,v=c||p||l&&r.isMenuBlockingUI||!!s.displayedCard||_&&u();return la(a)?v||n.get("ui.player.mode")===Oo.TINY?{}:(o.fire(Yt._sidedockVisibilityChanged,!0),{appearance:d(d({},e.appearance),{},{shouldRestoreSidedock:!1,mousedOverSidedock:Mr(e.appearance,i,"mousedOverSidedock")}),displayList:d(d({},e.displayList),{},{sideDock:!0})}):{}})}function s(){return r({mousedOverSidedock:!1})}function l(e,t){e&&t&&s()}function c(e,t){!e&&t&&a()}function u(){return[ca.XXS,ca.XS].includes(t().appearance.playerBreakpoint)}o.on([Yt._mousedOut,Yt._mouseTimeout,Yt._nudgeAttempted],r),o.on([Yt._mousedOver,Yt._airPlayActivated,p.ENTER_PICTURE_IN_PICTURE],a),o.on(Yt._configChanged,(function(t,n){const i=Al({config:n});e(e=>({displayList:d(d({},e.displayList),{},{sideDock:i})}))})),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.targetTimeReached},e=>e&&r()),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.fullscreen},e=>!e&&s()),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.alert},e=>e&&r()),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.menu},e=>e?l(e,t().appearance.isMenuBlockingUI):c(e,t().appearance.isMenuBlockingUI)),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.isMenuBlockingUI},e=>e?l(t().displayList.menu,e):c(t().displayList.menu,e)),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>e?s():a()),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},n=>{n?e(e=>({displayList:d(d({},e.displayList),{},{sideDock:!1})})):t().displayList.sideDock||a()}),i(e=>{var t;return null==e||null==(t=e.cards)?void 0:t.displayedCard},e=>e&&s()),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.toast},e=>e&&u()&&s()),n.watch("ui.player.mode",n=>{n===Oo.TINY&&t().displayList.sideDock?e(e=>({displayList:d(d({},e.displayList),{},{sideDock:!1}),appearance:d(d({},e.appearance),{},{shouldRestoreSidedock:!0})})):t().appearance.shouldRestoreSidedock&&a()})})(e),(e=>{const{set:t,get:n,subscribe:i,events:o,config:r,element:a}=e;function s(){t(e=>{const{displayList:t,appearance:n,playback:i,embed:o}=e,{menu:a,overlay:s,outro:l,toast:c}=t,{isMenuBlockingUI:u,externalDisplay:p}=n,{scrubbing:_,paused:v}=i,m=s||l||a&&u||c,{embed:f}=r;return la(o)?n.playerSizeMode===Oo.TINY?{}:f.settings.title?m?{}:p?{displayList:d(d({},e.displayList),{},{title:!0})}:!v||_?{}:{displayList:d(d({},e.displayList),{},{title:!0})}:{}:{}})}function l(){t(e=>{const{displayList:t,appearance:n,playback:i}=e,{menu:o,overlay:r,outro:a,toast:s}=t,{isMenuBlockingUI:l,externalDisplay:c}=n,{playInitiated:u}=i,p=r||a||o&&l||s;return n.playerSizeMode===Oo.TINY||p?{displayList:d(d({},e.displayList),{},{title:!1})}:c||!u?{}:{displayList:d(d({},e.displayList),{},{title:!1})}})}function c(e,t){e&&t&&l()}function u(e,t){!e&&t&&s()}i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.playInitiated},e=>e&&l()),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.paused},e=>{e?s():l()}),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.fullscreen},e=>{e?l():s()}),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.externalDisplay},e=>{e?s():l()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.outro},e=>{e?l():s()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>{!e&&s()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.menu},e=>e?c(e,n().appearance.isMenuBlockingUI):u(e,n().appearance.isMenuBlockingUI)),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.isMenuBlockingUI},e=>e?c(n().displayList.menu,e):u(n().displayList.menu,e)),i(e=>{var t;return null==e||null==(t=e.overlay)?void 0:t.purpose},e=>{[ta.NOT_SUPPORTED,ta.HELP,ta.EMPTY].includes(e)||l()}),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.playerSizeMode},e=>{e===Oo.TINY?l():s()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.toast},e=>e?l():s()),o.on(Yt._ended,l).on(Mt._reset,s).on(Yt._configChanged,(e,n)=>{t(e=>({displayList:d(d({},e.displayList),{},{title:kl({config:n,element:a})})}))})})(e),(({set:e,subscribe:t})=>{t(e=>{var t;return null==e||null==(t=e.overlay)?void 0:t.purpose},t=>(t=>{e(e=>({displayList:d(d({},e.displayList),{},{overlay:t})}))})(t!==ta.EMPTY))})(e),(({set:e,events:t})=>{t.on(Yt._alertVisibilityChanged,t=>{e(e=>({displayList:d(d({},e.displayList),{},{alert:t})}))})})(e),(({events:e,subscribe:t,set:n,get:i})=>{function o(){n(e=>{const{menu:t}=e.displayList;return t?{displayList:d(d({},e.displayList),{},{menu:!1})}:Rl})}e.on(Mt._reset,o),t(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.menu},t=>{const n=t?"preact-menu":"";e.fire(Yt._menuVisibilityChanged,n)}),t(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.transcript},e=>{var t,n,r,a;return e&&((null==(t=i())?void 0:t.appearance.appBreakpoint)===ca.XS||(null==(n=i())?void 0:n.appearance.appBreakpoint)===ca.XXS||(null==(r=i())?void 0:r.appearance.appSizeMode)===Oo.MINI||(null==(a=i())?void 0:a.appearance.appSizeMode)===Oo.TINY)&&o()}),t(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.appBreakpoint},e=>{var t;return(null==(t=i())?void 0:t.displayList.transcript)&&(e===ca.XS||e===ca.XXS)&&o()}),t(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.appSizeMode},e=>{var t;return(null==(t=i())?void 0:t.displayList.transcript)&&(e===Oo.MINI||e===Oo.TINY)&&o()})})(e),(({set:e,events:t})=>{const n=t=>e(e=>({displayList:d(d({},e.displayList),{},{ad:t})}));t.on(Yt._pausedForAd,()=>n(!0)),t.on([Yt._resumedAfterAd,Mt._reset],()=>n(!1))})(e),(({set:e,get:t,config:n,events:i,subscribe:o,store:r,element:a})=>{let s=n;const l=(t={})=>{var n,i,o;(16!==(null==(n=s.embed)||null==(i=n.settings)||null==(o=i.badge)?void 0:o.id)||t.isStockBadgeBehavior)&&e(e=>({displayList:d(d({},e.displayList),{},{badge:!1})}))},c=(t={})=>{var n,i,o;(16!==(null==(n=s.embed)||null==(i=n.settings)||null==(o=i.badge)?void 0:o.id)||t.isStockBadgeBehavior)&&e(e=>{const{appearance:t}=e;return[Oo.MINI,Oo.TINY].includes(t.playerSizeMode)?{}:s.embed.settings.badge?{displayList:d(d({},e.displayList),{},{badge:!0}),appearance:d(d({},e.appearance),{},{shouldRestoreBadge:!1})}:{}})};function u(t){e(e=>({displayList:d(d({},e.displayList),{},{badge:Ol({config:t,element:a})})}))}i.on(Yt._controlBarVisibilityChanged,e=>{var t,n,i;16===(null==(t=s.embed)||null==(n=t.settings)||null==(i=n.badge)?void 0:i.id)&&(e?c({isStockBadgeBehavior:!0}):l({isStockBadgeBehavior:!0}))}),i.on(Yt._ended,l),i.on(Yt._configChanged,(e,t)=>{s=t,u(t)}),i.on(Mt._reset,()=>{u(s)}),r.watch("ui.player.mode",n=>{n!==Oo.TINY&&n!==Oo.MINI||!t().displayList.badge?t().appearance.shouldRestoreBadge&&c():e(e=>({displayList:d(d({},e.displayList),{},{badge:!1}),appearance:d(d({},e.appearance),{},{shouldRestoreBadge:!0})}))}),o(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.paused},e=>!e&&l()),o(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.playInitiated},e=>e&&l()),o(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>{(function(e){return[ta.NOT_SUPPORTED,ta.HELP,null].includes(e)})(e)||l(),e||t().playback.playInitiated||c()})})(e),(({set:e,events:t})=>{const n=t=>e(e=>({displayList:d(d({},e.displayList),{},{notification:t})}));t.on([Yt._liked,Yt._unliked,Yt._addedToWatchLater,Yt._removedFromWatchLater],e=>{e||n(!0)}),t.on([Yt._notificationHidden,Mt._reset],()=>n(!1))})(e),(({set:e,events:t})=>{const n=t=>{e(e=>({displayList:d(d({},e.displayList),{},{pipOverlay:t})}))};t.on(p.ENTER_PICTURE_IN_PICTURE,()=>n(!0)),t.on(p.LEAVE_PICTURE_IN_PICTURE,()=>n(!1))})(e),(({set:e,events:t,config:n,subscribe:i,element:o})=>{function r(n={}){e(e=>{const{controlBar:i,embed:o,playback:r,displayList:a,appearance:s}=e,l=Mr(s,n,"mousedOverControlBar");return i.overrideBehavior||s.forceExitedFullscreen?{}:r.playInitiated&&r.targetTimeReached||a.overlay||o.autoHideControls||a.ad?l?{}:!s.externalDisplay&&!s.pictureInPictureActive||a.overlay?r.buffering||r.scrubbing?{}:(t.fire(Yt._controlBarVisibilityChanged,!1),{appearance:d(d({},e.appearance),{},{mousedOverControlBar:l}),displayList:d(d({},e.displayList),{},{controlBar:!1})}):{}:{}})}function a(){e(e=>{const{displayList:n,controlBar:i,embed:o}=e;return la(o)?i.overrideBehavior||n.overlay?{}:(t.fire(Yt._controlBarVisibilityChanged,!0),{displayList:d(d({},e.displayList),{},{controlBar:!0})}):{}})}function s(){return r({mousedOverControlBar:!1})}function l(t){const n=Pl({config:t,element:o});e(e=>({displayList:d(d({},e.displayList),{},{controlBar:n})}))}t.on([Yt._mousedOver,Yt._scrubbingStarted,Mt._changeVolume,Mt._reset],a),t.on(Yt._mousedOut,s),t.on(Yt._mouseTimeout,r),t.on(Yt._configChanged,(function(e,t){l(t)})),t.on([I.STREAM_ONLINE,I.STREAM_OFFLINE,I.EVENT_ENDED],(function(){l(n)})),t.on(Mt._setControlsVisibility,(function(t){e(e=>e.controlBar.overrideBehavior?{displayList:d(d({},e.displayList),{},{controlBar:t})}:{})})),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.externalDisplay},e=>e&&a()),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.targetTimeReached},e=>e&&r()),i(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.fullscreen},e=>{e?s():a()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>{e?r():a()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.menu},e=>{e&&a()})})(e),(e=>{const{set:t,subscribe:n,events:i}=e;function o(){t(e=>{const{playback:t,displayList:n,appearance:i}=e,{targetTimeReached:o,paused:r}=t,{menu:a,overlay:s,outro:l,controlBar:c}=n,{isMenuBlockingUI:u}=i;return s||l||a&&u?{displayList:d(d({},e.displayList),{},{banner:!1})}:!o||r&&c?{}:{displayList:d(d({},e.displayList),{},{banner:!1})}})}function r(){t(e=>{const{displayList:t,appearance:n,playback:i,config:o}=e,{scrubbing:r,paused:a}=i,{menu:s,overlay:l,outro:c}=t,{isMenuBlockingUI:u}=n,p=l||c||s&&u;return Ca(o)?p||!a||r?{}:{displayList:d(d({},e.displayList),{},{banner:!0})}:{}})}n(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.paused},e=>{e?r():o()}),n(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.controlBar},e=>{e?r():o()}),n(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.outro},e=>{e?o():r()}),n(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>{e?o():r()}),i.on(Yt._ended,o).on(Mt._reset,r).on(Yt._configChanged,n=>{t(t=>({displayList:d(d({},t.displayList),{},{banner:Nl(d(d({},e),{},{config:n}))})}))})})(e),(({events:e,subscribe:t,set:n,config:i})=>{const o=e=>{la(i.embed)&&n(t=>({displayList:d(d({},t.displayList),{},{unmuteButton:e})}))};e.once(Yt._muteAutoplayed,()=>o(!0)),t(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.volume},e=>{e>0&&o(!1)}),t(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.muted},e=>{e||o(!1)}),t(e=>{var t;return null==e||null==(t=e.liveEvent)?void 0:t.isEnded},e=>{e&&o(!1)})})(e),(e=>{const{get:t,set:n,events:i,subscribe:o,config:r}=e;function a(){n(e=>{const{transcript:t}=e.displayList;return t?s(e,!1):Rl})}function s(e,t){return{displayList:d(d({},e.displayList),{},{transcript:t})}}i.on(Yt._configChanged,()=>{n(e=>s(e,$l()))}),i.on(Yt._transcriptKeyPressed,(function(){var e,i,o,a,s;const l=null==(e=t())||null==(i=e.overlay)?void 0:i.purpose,c=null==(o=t().displayList)?void 0:o.transcript,u=null==(a=t())||null==(s=a.displayList)?void 0:s.outro,p=!!c||!u&&Wl.includes(l);t().embed.transcript&&p&&(n(e=>d(d({},e),{},{displayList:d(d({},e.displayList),{},{transcript:!e.displayList.transcript})})),cr("vimeo.embedded_transcript_click",{config:r},{name:c?"exit_embed_transcript":"open_embed_transcript",copy:null,location:"keyboard_shortcut",element:"",current_transcript_language:""}))})),i.on(Yt._rightContentAreaDisabled,a),o(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.outro},e=>e&&a()),o(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},e=>e&&a()),o(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.stereoscopicEnabled},e=>e&&a()),o(e=>{var t,n;return(null==e||null==(t=e.displayList)?void 0:t.overlay)&&!Wl.includes(null==e||null==(n=e.overlay)?void 0:n.purpose)},e=>e&&a()),o(e=>null==e?void 0:e.displayList.transcript,e=>{var n,o;const a=null==(n=t())||null==(o=n.captions)?void 0:o.textTrackEls;e&&(({config:e,events:t},n)=>{var i;const o=n.map(e=>({id:e.id,label:e.label,language:e.srclang})),r=null==(i=Ul(e,o))?void 0:i.language;t.fire(Yt._transcriptSessionStarted,{id:gt(),startTime:Date.now(),defaultLanguage:r})})({config:r,events:i},a)})})(e),(e=>{const{set:t,subscribe:n,events:i}=e;function o(){t(e=>({displayList:d(d({},e.displayList),{},{progressBar:!1})}))}function r(){t(e=>e.embed.playbar?e.displayList.ad||e.appearance.playerSizeMode===Oo.TINY?{}:{displayList:d(d({},e.displayList),{},{progressBar:!0})}:{})}n(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.playerSizeMode},e=>{e===Oo.TINY?o():r()}),n(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},e=>{e?o():r()}),i.on(Yt._configChanged,(n,i)=>{t(t=>({displayList:d(d({},t.displayList),{},{progressBar:Yl(d(d({},e),{},{config:i}))})}))})})(e),(e=>{const{subscribe:t,set:n,get:i,events:o}=e;let r;function a(){clearTimeout(r),r=setTimeout((function(){n(e=>({appearance:d(d({},e.appearance),{},{rightContentAreaAnimating:!1})}))}),400)}t(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.transcript},e=>{var t,r;const s=null==(t=i())||null==(r=t.displayList)?void 0:r.rightContentArea;e&&!s?(o.fire(Yt._rightContentAreaVisibilityChange,!0),n(e=>({displayList:d(d({},e.displayList),{},{rightContentArea:!0}),appearance:d(d({},e.appearance),{},{rightContentAreaAnimating:!0})})),a()):!e&&s&&(o.fire(Yt._rightContentAreaVisibilityChange,!1),n(e=>({displayList:d(d({},e.displayList),{},{rightContentArea:!1}),appearance:d(d({},e.appearance),{},{rightContentAreaAnimating:!0})})),a())}),Gl()&&o.fire(Yt._rightContentAreaVisibilityChange,!0)})(e),(({set:e,get:t,events:n,subscribe:i,config:o,backbone:r})=>{function a(){e(e=>({displayList:d(d({},e.displayList),{},{captions:!1})}))}function s(){e(e=>{const{appearance:t,embed:n}=e;return n.cc?t.pictureInPictureActive||n.background?Rl:{displayList:d(d({},e.displayList),{},{captions:!0})}:(r.disableTextTrack(),Rl)})}n.on(u,s),n.on(p.ENTER_PICTURE_IN_PICTURE,a),n.on(p.LEAVE_PICTURE_IN_PICTURE,s),n.on(Yt._ended,()=>{o.embed.outro!==Qt.NOTHING&&a()}),n.on(Mt._reset,a),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>{e?a():s()}),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.paused},e=>{!e&&s()}),i(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.scrubbing},e=>{e&&s()}),i(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},e=>{e?a():s()}),i(e=>{var t;return null==e||null==(t=e.captions)?void 0:t.activeCues},e=>{var n,i;e.length&&(null==(n=t())||null==(i=n.playback)?void 0:i.playInitiated)?s():a()})})(e),{debugPanel:!1,cards:o,sideDock:t,title:n,controlBar:a,outro:!1,overlay:i,alert:!1,menu:!1,ad:!1,badge:r,notification:!1,nudgeNotification:!1,pipOverlay:!1,banner:s,unmuteButton:!1,transcript:_,progressBar:l,rightContentArea:c,captions:!1,toast:!1}}(e),setDisplayList:(e,n)=>{t(t=>({displayList:d(d({},t.displayList),{},{[e]:n})}))}}};function jl(e){var t;const{config:i,store:o}=e,{embed:r,video:a}=i,s=o.get("ui.player.width"),l=o.get("ui.player.height"),c=a.width,d=a.height,{videoHeight:u}=Kl(s,l,c,d);return{playerBreakpoint:o.get("ui.player.breakpoint"),appBreakpoint:o.get("ui.app.breakpoint"),playerSizeMode:o.get("ui.player.mode"),appSizeMode:o.get("ui.app.mode"),transcriptNavActive:!1,fullscreen:!1,forceExitedFullscreen:!1,pictureInPictureActive:!1,externalDisplay:!1,mousedOverSidedock:!1,mousedOverControlBar:!1,isMenuBlockingUI:o.get("ui.controlbar.isMenuFullWidth"),isMenuVerticalVideoMode:o.get("ui.controlbar.isMenuVerticalVideoMode"),shouldRestoreSidedock:!1,shouldRestoreBadge:!1,isVerticalVideo:o.get("ui.player.isVerticalVideo"),boundingClientRect:ct(e.element),isDisplayContextBackbone:e.displayContext===e.backbone,showAirPlayPicker:!1,shouldMenuItemsWrap:o.get("ui.controlbar.doMenuItemsWrap"),stereoscopicEnabled:!1,videoHeight:u,containerHeight:o.get("ui.container.height"),colorOne:Ta(r.color_one)||Ta(on[Jt]),colorTwo:Ta(r.color_two)||Ta(r.color)||Ta(on[en]),colorThree:Ta(r.color_three)||Ta(on[tn]),colorFour:Ta(r.color_four)||Ta(on[nn]),placeholderThumbnail:n(null==a||null==(t=a.thumbs)?void 0:t.base,{mw:"80",q:"85"}),rightContentAreaAnimating:!1}}function Kl(e,t,n,i){const o=n/i,r=o>e/t;return{videoWidth:r?e:Math.round(t*o),videoHeight:r?Math.round(e/o):t}}const Xl=(e,t)=>{Oe(()=>{!function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(Ie){return Promise.reject(Ie)}}}((function(){return function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(t.ready(),(function(){e()}))}))()})},Zl=({isMenuDisplayed:e,defaultPanel:t,setPanel:n})=>{Oe(()=>{e||setTimeout(()=>{n(t)},250)},[e])};const Ql=e=>{let{href:t,children:n,element:i="div",className:o="",targetBlank:r=!0}=e,a=Ne(e,["href","children","element","className","targetBlank"]);const s=Me(i,d(d({},a),{},{className:o}),n);return t?Ie("a",d(d(d({href:t,className:`${o} Link_module_link__b2eb3a07`},r?{target:"_blank",rel:"noopener"}:{}),a),{},{children:n})):s};let Jl;!function(e){e.DOLBY_VISION="dolbyVision",e.CLOSE="close",e.PIP="pip",e.AIRPLAY="airPlay",e.ENTER_FULLSCREEN="enterFullscreen",e.EXIT_FULLSCREEN="exitFullscreen",e.GEAR="gear",e.VIMEO="vimeo",e.VIMEO_SMALL="vimeoSmall",e.ENTER_PICTURE_IN_PICTURE="enterPictureInPicture",e.EXIT_PICTURE_IN_PICTURE="exitPictureInPicture",e.PAUSE="pause",e.PLAY="play",e.REPLAY="replay",e.CHAPTERS="chapters",e.POINT="point",e.CC="cc",e.CC_FILLED="ccFilled",e.CHECKMARK="checkmark",e.STEREOSCOPIC="stereoscopic",e.PERSON_FILLED="personFilled",e.CHEVRON_DOWN="chevronDown",e.CHEVRON_RIGHT="chevronRight",e.CLOCK="clock",e.CLOCK_FILLED="clockFilled",e.COLLECTIONS="collections",e.DISMISS_X="dismissX",e.HEART="heart",e.HEART_FILLED="heartFilled",e.ONDEMAND="ondemand",e.PAPER_PLANE="paperPlane",e.POP_OUT="popOut",e.VOLUME_OFF_FILLED="volumeOffFilled",e.VOLUME_ON_FILLED="volumeOnFilled",e.FAST_FORWARD="fastForward",e.INFO_CIRCLE="infoCircle",e.TRANSCRIPT_ON="transcriptOn",e.TRANSCRIPT_OFF="transcriptOff",e.SEARCH="search",e.CHEVRON_UP="chevronUp",e.CLOSE_CIRCLE="closeCircle",e.SPINNER="spinner",e.SLIDERS="sliders",e.SWITCH_CONTAINER="switchContainer",e.SWITCH_CIRCLE="switchCircle",e.WARN_CIRCLE="warnCircle",e.THUMBS_UP="thumbsUp",e.THUMBS_DOWN="thumbsDown",e.THUMBS_UP_FILLED="thumbsUpFilled",e.THUMBS_DOWN_FILLED="thumbsDownFilled",e.REACT="react"}(Jl||(Jl={}));const ec={[Jl.CLOSE]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 20 20"},t),{},{children:Ie("path",{d:"M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",fill:"#fff",fillRule:"evenodd"})}))},[Jl.AIRPLAY]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg","data-airplay-icon":!0},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.6666 4.99992H3.33329V13.3333H5.43825L4.0911 14.9999H3.33329C2.41282 14.9999 1.66663 14.2537 1.66663 13.3333V4.99992C1.66663 4.07944 2.41282 3.33325 3.33329 3.33325H16.6666C17.5871 3.33325 18.3333 4.07944 18.3333 4.99992V13.3333C18.3333 14.2537 17.5871 14.9999 16.6666 14.9999H15.9088L14.5617 13.3333H16.6666V4.99992ZM10.7777 12.6288C10.3774 12.1336 9.62249 12.1336 9.22224 12.6288L6.26454 16.288C5.73597 16.9419 6.2014 17.9166 7.04225 17.9166H12.9577C13.7985 17.9166 14.2639 16.9419 13.7354 16.288L10.7777 12.6288Z"})}))},[Jl.DOLBY_VISION]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 844 126","aria-labelledby":"dv-logo-title"},t),{},{children:[Ie("title",{id:"dv-logo-title",children:"Dolby Vision"}),Ie("path",{d:"M478.94 30.12l-18.96 42.63-18.95-42.63h-15.9l26.9 60.48-6.59 14.85a7.77 7.77 0 01-10.25 3.94l-2.08-.93-5.88 13.19h.03l5.04 2.26a18.86 18.86 0 0024.85-9.56l37.69-84.23h-15.9zm-66.52 33.04c0-11-9.05-20.05-20.06-20.05a20.08 20.08 0 00-19.02 26.37 20.05 20.05 0 0039.08-6.32zm13.2.13a33.3 33.3 0 01-33.26 33.26 33.08 33.08 0 01-19.02-6v6.02h-14.58V.47h14.58v35.55c5.4-3.77 11.96-6 19.02-6a33.3 33.3 0 0133.27 33.27zm-93.64 33.29h14.55V.48h-14.55v96.1zm-22.62-33.4c0-11-9.05-20.06-20.06-20.06a20.07 20.07 0 000 40.11c11 0 20.06-8.92 20.06-20.05zm13.2.03a33.3 33.3 0 01-33.26 33.26 33.3 33.3 0 01-33.26-33.26 33.3 33.3 0 0133.26-33.27 33.3 33.3 0 0133.27 33.27zM234.1 48.47a33.5 33.5 0 00-33.44-33.45h-20.12v66.9h20.12a33.5 33.5 0 0033.44-33.45zm14.56 0c0 26.47-21.54 48-48 48h-34.68v-96h34.68c26.46 0 48 21.53 48 48zM136.92.47h-14.17c-26.44 0-48 21.56-48 48s21.56 48 48 48h14.17v-96zM.36 96.47h14.16c26.45 0 48-21.56 48-48s-21.55-48-48-48H.36v96zm789.18-66.35c.4 4.2.54 12.61.54 16.14v50.32h7.46V62.8c0-17.63 9.9-26.44 20.88-26.44 13.96 0 17.9 10.3 17.9 22.78v37.44h7.32V56.43c0-14.92-7.05-26.3-23.6-26.3-9.48 0-18.97 5.55-22.63 14.23h-.27c0-3.39-.28-10.7-.55-14.24h-7.05zM769.7 63.28c0 15.02-9.88 26.65-25.7 26.65-15.7 0-25.57-11.63-25.57-26.65 0-15.01 9.88-26.78 25.57-26.78 15.82 0 25.7 11.77 25.7 26.78zm7.57 0c0-19.2-13.66-33.14-33.27-33.14-19.48 0-33.14 13.94-33.14 33.14 0 19.07 13.66 33.28 33.14 33.28 19.61 0 33.27-14.2 33.27-33.28zm-78.51-33.16h-7.85v66.44h7.85V30.12zm1.57-24.1a5.58 5.58 0 00-5.56-5.55 5.55 5.55 0 000 11.12c2.85 0 5.56-2.3 5.56-5.56zm-24.88 34.81c-4.06-6.91-12.04-10.7-21.24-10.7-10.96 0-21.51 5.42-21.51 17.62 0 23.46 36.66 13.01 36.66 30.24 0 8.8-7.71 12.33-15.56 12.33a21.65 21.65 0 01-18.13-9.76l-5.81 4.2c5.4 8 14.47 11.8 23.94 11.8 11.5 0 22.87-5.7 22.87-19.12 0-10.3-7.71-15.18-21.1-18.17-10.43-2.3-15.84-4.74-15.84-12.06 0-7.87 7.58-10.98 14.21-10.98 7.03 0 12.72 3.38 15.83 8.67l5.68-4.07zM617.6 30.1h-7.46v66.48h7.46V30.1zm1.76-23.96A5.58 5.58 0 00613.8.6a5.56 5.56 0 000 11.11c2.85 0 5.56-2.3 5.56-5.56zm-61.1 80.8h.27L590.92.47h8.27l-36.6 96.1h-8.68L517.44.48h8.4l32.4 86.47z",fill:"currentColor",fillRule:"nonzero"})]}))},[Jl.PIP]:e=>{let{direction:t="enter"}=e,n=Ne(e,["direction"]);return Ie("svg",d(d({className:Kr.PIP_ICON,viewBox:"0 0 16 12"},n),{},{children:[Ie("polygon",{className:Kr.FILL,points:"6 8 1 8 1 1 14 1 14 6 15 6 15 0 0 0 0 9 6 9 6 8"}),Ie("rect",{className:Kr.FILL,x:"7",y:"7",width:"9",height:"5"}),Ie("polyline",{className:Kr.FILL,transform:"enter"===t?"translate(4, 4) rotate(180) translate(-4, -4)":"",points:"5.33 2 5.33 3 3.67 3 5.67 5 5 5.67 3 3.67 3 5.33 2 5.33 2 2"})]}))},[Jl.ENTER_FULLSCREEN]:()=>Ie("svg",{className:Xr.ENTER_FULLSCREEN_ICON,width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","data-enter-fullscreen":!0,children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 5L17.5858 5L14.2929 8.29292C13.9024 8.68345 13.9024 9.31661 14.2929 9.70714C14.6834 10.0977 15.3166 10.0977 15.7071 9.70714L19 6.41426V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.73478 20.8946 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3H16C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5ZM5 8.00002V6.4142L8.29292 9.70712C8.68345 10.0976 9.31661 10.0976 9.70714 9.70712C10.0977 9.3166 10.0977 8.68343 9.70714 8.29291L6.41424 5.00001L8 5.00002C8.55228 5.00002 9 4.5523 9 4.00002C9 3.44773 8.55228 3.00002 8 3.00002H4C3.73478 3.00002 3.48043 3.10537 3.29289 3.29291C3.10536 3.48044 3 3.7348 3 4.00002V8.00002C3 8.5523 3.44772 9.00001 4 9.00001C4.55228 9.00001 5 8.5523 5 8.00002ZM8.00002 19H6.4142L9.70712 15.7071C10.0976 15.3166 10.0976 14.6834 9.70712 14.2929C9.3166 13.9024 8.68343 13.9024 8.29291 14.2929L5.00001 17.5858V16C5.00001 15.4477 4.5523 15 4.00001 15C3.44773 15 3.00002 15.4477 3.00002 16L3.00002 20C3.00002 20.2652 3.10537 20.5196 3.29291 20.7071C3.48044 20.8947 3.7348 21 4.00002 21H8.00002C8.5523 21 9.00001 20.5523 9.00001 20C9.00001 19.4477 8.5523 19 8.00002 19ZM19 17.5858V16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8947 20.2652 21 20 21H16C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19H17.5858L14.2929 15.7071C13.9023 15.3166 13.9023 14.6834 14.2929 14.2929C14.6834 13.9024 15.3166 13.9024 15.7071 14.2929L19 17.5858Z"})}),[Jl.EXIT_FULLSCREEN]:()=>Ie("svg",{className:Xr.EXIT_FULLSCREEN_ICON,width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","data-exit-fullscreen":!0,children:[Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.41425 7.00003L8.41425 4.41425L10.4142 4.41425L10.4142 9.41425C10.4142 9.67946 10.3089 9.93382 10.1214 10.1214C9.93382 10.3089 9.67946 10.4142 9.41425 10.4142L4.41425 10.4142L4.41425 8.41425L7.00003 8.41425L3 4.41422L4.41422 3L8.41425 7.00003Z"}),Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.0097 8.41425L21 4.42398L19.5858 3.00977L15.5858 7.0098L15.5858 4.42401L13.5858 4.42401L13.5858 9.41424C13.5858 9.67946 13.6911 9.93382 13.8787 10.1214C14.0662 10.3089 14.3205 10.4142 14.5858 10.4142L19.5858 10.4142L19.5858 8.41425L17.0097 8.41425Z"}),Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.41419 17L4.41421 21L3 19.5858L6.99997 15.5858L4.41419 15.5858L4.41419 13.5858L9.41419 13.5858C9.96647 13.5858 10.4142 14.0335 10.4142 14.5858L10.4142 19.5858L8.41419 19.5858L8.41419 17Z"}),Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.5858 16.9986L19.5855 21L21 19.5861L17.0015 15.5858L19.5813 15.5858L19.5813 13.5858L14.5858 13.5858C14.3206 13.5858 14.0662 13.6912 13.8787 13.8787C13.6912 14.0662 13.5858 14.3206 13.5858 14.5858L13.5858 19.5858L15.5858 19.5858L15.5858 16.9986Z"})]}),[Jl.GEAR]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.16668 1.66699C8.2462 1.66699 7.50001 2.41318 7.50001 3.33366V4.72835C7.21484 4.86382 6.94241 5.02175 6.68499 5.19984L5.46953 4.4981C4.68103 4.04285 3.66009 4.31415 3.20034 5.11047L2.36526 6.55686C1.90707 7.35046 2.17605 8.3701 2.96953 8.82822L4.18535 9.53017C4.17298 9.68526 4.16668 9.84206 4.16668 10.0003C4.16668 10.1586 4.17298 10.3154 4.18535 10.4705L2.96953 11.1724C2.17605 11.6306 1.90707 12.6502 2.36526 13.4438L3.20034 14.8902C3.66009 15.6865 4.68103 15.9578 5.46953 15.5026L6.685 14.8008C6.94241 14.9789 7.21484 15.1368 7.50001 15.2723V16.667C7.50001 17.5875 8.2462 18.3337 9.16668 18.3337H10.8333C11.7538 18.3337 12.5 17.5875 12.5 16.667V15.2723C12.7851 15.1369 13.0574 14.979 13.3147 14.801L14.5298 15.5026C15.3183 15.9578 16.3393 15.6865 16.799 14.8902L17.6341 13.4438C18.0923 12.6502 17.8233 11.6306 17.0298 11.1724L15.8146 10.4708C15.827 10.3156 15.8333 10.1587 15.8333 10.0003C15.8333 9.84193 15.827 9.68501 15.8146 9.52981L17.0298 8.82822C17.8233 8.3701 18.0923 7.35046 17.6341 6.55686L16.799 5.11047C16.3393 4.31415 15.3183 4.04285 14.5298 4.4981L13.3147 5.19963C13.0574 5.02162 12.7851 4.86377 12.5 4.72835V3.33366C12.5 2.41318 11.7538 1.66699 10.8333 1.66699H9.16668ZM12.5 10.0003C12.5 11.381 11.3807 12.5003 10 12.5003C8.6193 12.5003 7.50001 11.381 7.50001 10.0003C7.50001 8.61961 8.6193 7.50033 10 7.50033C11.3807 7.50033 12.5 8.61961 12.5 10.0003Z"})}))},[Jl.VIMEO]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"54",height:"18",viewBox:"0 0 54 18",role:"img",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.1192 1.32529C17.1011 1.76753 16.8758 2.19197 16.4427 2.59836C15.9559 3.05781 15.3789 3.28759 14.7119 3.28759C13.6845 3.28759 13.1881 2.84607 13.2245 1.96218C13.2418 1.50286 13.5168 1.06061 14.0487 0.636176C14.5808 0.21258 15.1711 0 15.8207 0C16.1992 0 16.5146 0.146412 16.7675 0.437671C17.0197 0.729653 17.1367 1.02548 17.1192 1.32529ZM17.7011 13.0761C17.6 13.1708 17.4962 13.2641 17.3896 13.3562C16.181 14.3855 14.9735 14.9003 13.766 14.9003C13.2063 14.9003 12.778 14.7228 12.4809 14.3676C12.1837 14.0126 12.0438 13.5517 12.062 12.9831C12.0794 12.3977 12.2642 11.4922 12.6159 10.2672C12.9677 9.04241 13.1439 8.3853 13.1439 8.29652C13.1439 7.83551 12.981 7.60428 12.6571 7.60428C12.555 7.60428 12.2769 7.77023 11.8227 8.10073C11.4798 9.10988 10.7329 10.3442 9.58186 11.8036C7.94436 13.9012 6.5589 14.9501 5.42559 14.9501C4.72371 14.9501 4.1294 14.3115 3.64413 13.0338L2.67201 9.5206C2.31167 8.24356 1.92519 7.60426 1.51184 7.60426C1.42173 7.60426 1.10644 7.79121 0.566591 8.16344L0 7.44389C0.59431 6.92922 1.18068 6.41456 1.75765 5.89905C2.55027 5.22401 3.14543 4.86899 3.54217 4.83314C4.47949 4.74436 5.05646 5.37584 5.27308 6.72759C5.50692 8.18593 5.66896 9.09304 5.75981 9.44818C6.03016 10.6581 6.32726 11.2625 6.65219 11.2625C6.90423 11.2625 7.28277 10.87 7.78781 10.0852C8.29201 9.3002 8.56236 8.70301 8.59875 8.29265C8.67067 7.61521 8.40032 7.2757 7.78781 7.2757C7.49939 7.2757 7.20217 7.34115 6.89641 7.47036C7.48828 5.55955 8.61926 4.63151 10.2884 4.68432C11.403 4.71661 11.9869 5.3614 12.04 6.6187C12.3087 6.37895 12.5773 6.1391 12.846 5.89907C13.6213 5.22403 14.1982 4.86889 14.5776 4.83316C15.1719 4.78023 15.609 4.95226 15.8887 5.35096C16.1677 5.74953 16.2713 6.2666 16.2001 6.90362C15.9654 7.9836 15.7124 9.35472 15.4422 11.0178C15.424 11.7794 15.7037 12.1594 16.2807 12.1594C16.5328 12.1594 16.9833 11.897 17.6329 11.3707L17.6568 11.3514C17.6982 10.9804 17.7648 10.5395 17.8569 10.029C18.0055 9.20512 18.0884 8.56353 18.1059 8.10264C18.1414 7.78419 18.06 7.62455 17.8624 7.62455C17.7541 7.62455 17.4475 7.8044 16.9425 8.16339L16.2936 7.44397C16.3838 7.37383 16.9512 6.85832 17.9976 5.899C18.7546 5.20689 19.2684 4.85174 19.5387 4.83382C20.0074 4.79809 20.3859 4.98877 20.6745 5.40623C20.9629 5.82357 21.1075 6.3078 21.1075 6.85832C21.1075 7.03589 21.0894 7.2048 21.0539 7.36457C21.3241 6.95649 21.6394 6.60063 22.0006 6.29854C22.8296 5.58837 23.7584 5.18812 24.7858 5.09933C25.6694 5.02847 26.3001 5.23251 26.6795 5.71217C26.9852 6.10304 27.1291 6.66294 27.1117 7.39091C27.2382 7.28504 27.3733 7.16907 27.518 7.04443C27.9322 6.56489 28.3376 6.18329 28.7343 5.899C29.4013 5.41935 30.096 5.15311 30.8168 5.09933C31.6822 5.02847 32.3041 5.23179 32.6828 5.70988C33.0067 6.09919 33.1514 6.65669 33.1159 7.38165C33.0976 7.87755 32.976 8.59866 32.7508 9.54546C32.5246 10.4923 32.4124 11.0358 32.4124 11.1775C32.3943 11.5498 32.4307 11.8059 32.5207 11.9476C32.6108 12.0893 32.8266 12.1593 33.1696 12.1593C33.3237 12.1593 33.5517 12.0614 33.8539 11.8652C33.8254 11.6415 33.8136 11.4089 33.8184 11.1674C33.8359 9.72924 34.4855 8.36197 35.7659 7.06471C37.1718 5.64451 38.8307 4.9335 40.7418 4.9335C42.5089 4.9335 43.4462 5.64282 43.5545 7.06002C43.6264 7.96328 43.1214 8.89372 42.0402 9.85075C40.8856 10.8964 39.4338 11.5607 37.6855 11.844C38.0096 12.2871 38.4964 12.5083 39.146 12.5083C40.4438 12.5083 41.8593 12.1836 43.3925 11.5326C43.4607 11.5043 43.528 11.4758 43.5944 11.4474C43.5823 11.339 43.5733 11.2286 43.5673 11.1161C43.4765 9.5907 44.0351 8.18902 45.2443 6.9121C46.5421 5.49333 48.1733 4.78413 50.1388 4.78413C51.4003 4.78413 52.3559 5.20147 53.0054 6.03459C53.6187 6.79769 53.8977 7.78179 53.8439 8.98725C53.7714 10.6192 53.1587 12.0294 52.0049 13.2175C50.851 14.4058 49.4173 15 47.7047 15C46.2805 15 45.1985 14.5475 44.4596 13.6427C44.2931 13.4353 44.1496 13.2118 44.0292 12.9724C43.8357 13.0907 43.6324 13.209 43.4193 13.3273C41.5083 14.4097 39.5697 14.9501 37.605 14.9501C36.1444 14.9501 35.098 14.4704 34.4673 13.512C34.4211 13.4446 34.3774 13.3759 34.3361 13.3059L34.2784 13.3561C33.0701 14.3856 31.8623 14.9003 30.6549 14.9003C29.4819 14.9003 28.9146 14.2618 28.9507 12.9832C28.9682 12.4147 29.0813 11.7319 29.2882 10.9331C29.4953 10.1341 29.6084 9.51274 29.6266 9.06893C29.6448 8.39462 29.4368 8.05668 29.0021 8.05668C28.532 8.05668 27.9716 8.60792 27.3204 9.70896C26.6328 10.8637 26.2614 11.9826 26.2076 13.0657C26.1712 13.8304 26.2471 14.4168 26.4352 14.8247C25.177 14.8606 24.2956 14.6558 23.793 14.2119C23.3426 13.821 23.1363 13.1733 23.1727 12.2669C23.1901 11.6985 23.2786 11.13 23.4382 10.5617C23.597 9.99324 23.6856 9.48711 23.7038 9.04247C23.7402 8.38536 23.4959 8.05668 22.9727 8.05668C22.5206 8.05668 22.0329 8.56353 21.5098 9.57578C20.9866 10.588 20.6974 11.6455 20.6436 12.7466C20.6072 13.7416 20.672 14.4338 20.8372 14.8247C19.5995 14.8606 18.7207 14.6035 18.2006 14.0538C17.9631 13.8005 17.7966 13.4746 17.7011 13.0761ZM40.3632 7.9913C40.3807 7.51477 40.183 7.27573 39.7689 7.27573C39.2283 7.27573 38.6798 7.64254 38.1219 8.37592C37.5638 9.10942 37.2754 9.81177 37.2579 10.483C37.2477 10.483 37.2477 10.5982 37.2579 10.8279C38.1399 10.5101 38.9051 10.0243 39.5531 9.37024C40.0748 8.80505 40.345 8.34476 40.3632 7.9913ZM50.5847 7.56539C50.738 7.96564 50.8059 8.40644 50.7877 8.88682C50.7515 9.74099 50.4905 10.5593 50.0038 11.3426C49.4268 12.2864 48.7321 12.7574 47.9212 12.7574C47.56 12.7574 47.2802 12.562 47.0827 12.1703C46.9026 11.8324 46.8212 11.4408 46.8393 10.9953C46.8748 10.0882 47.1452 9.23414 47.6511 8.43291C48.2453 7.4541 49.0025 6.96434 49.9223 6.96434C50.2102 6.96434 50.4313 7.16513 50.5847 7.56539Z"})}))},[Jl.VIMEO_SMALL]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18.7781 6.00913C18.6943 7.81161 17.4171 10.2795 14.9465 13.4122C12.3922 16.6841 10.231 18.3203 8.46324 18.3203C7.36838 18.3203 6.44133 17.3242 5.68438 15.331C5.17905 13.5043 4.67352 11.6776 4.168 9.85093C3.60591 7.8589 3.00305 6.86167 2.35829 6.86167C2.21771 6.86167 1.7259 7.1533 0.88381 7.73392L0 6.61152C0.927048 5.80871 1.84171 5.00589 2.74171 4.20176C3.9781 3.14879 4.90648 2.59501 5.52533 2.53908C6.98743 2.40059 7.88743 3.38562 8.22533 5.49419C8.5901 7.76902 8.84286 9.18398 8.98457 9.73796C9.40629 11.6253 9.86971 12.5681 10.3766 12.5681C10.7697 12.5681 11.3602 11.9557 12.148 10.7316C12.9345 9.50713 13.3562 8.57558 13.413 7.93547C13.5251 6.87875 13.1034 6.34917 12.148 6.34917C11.6981 6.34917 11.2345 6.45126 10.7575 6.65281C11.6808 3.67218 13.445 2.22456 16.0486 2.30695C17.9792 2.36287 18.8891 3.59693 18.7781 6.00913Z"})}))},[Jl.ENTER_PICTURE_IN_PICTURE]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{"data-enter-pip":!0,children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.33329 4.99992H16.6666V9.99992H18.3333V4.99992C18.3333 4.07944 17.5871 3.33325 16.6666 3.33325H3.33329C2.41282 3.33325 1.66663 4.07944 1.66663 4.99992V13.3333C1.66663 14.2537 2.41282 14.9999 3.33329 14.9999H8.33329V13.3333H3.33329V4.99992ZM9.99996 12.6666C9.99996 12.1143 10.4477 11.6666 11 11.6666H17.3333C17.8856 11.6666 18.3333 12.1143 18.3333 12.6666V17.3333C18.3333 17.8855 17.8856 18.3333 17.3333 18.3333H11C10.4477 18.3333 9.99996 17.8855 9.99996 17.3333V12.6666ZM7.91663 7.60408V8.59492L6.17079 6.84909C6.05829 6.73659 5.90163 6.66659 5.72913 6.66659C5.38413 6.66659 5.10413 6.94575 5.10413 7.29159C5.10413 7.46409 5.17413 7.61992 5.28746 7.73325L7.03246 9.47909H6.04163C5.69663 9.47909 5.41663 9.75825 5.41663 10.1041C5.41663 10.4491 5.69663 10.7291 6.04163 10.7291H8.54163C8.88663 10.7291 9.16663 10.4491 9.16663 10.1041V7.60408C9.16663 7.25825 8.88663 6.97909 8.54163 6.97909C8.19663 6.97909 7.91663 7.25825 7.91663 7.60408Z",fill:"white"})}))},[Jl.EXIT_PICTURE_IN_PICTURE]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","data-exit-pip":!0},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 6H20V12H22V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H10V16H4V6ZM12 15C12 14.4477 12.4477 14 13 14H21C21.5523 14 22 14.4477 22 15V21C22 21.5523 21.5523 22 21 22H13C12.4477 22 12 21.5523 12 21V15ZM7.625 11.75V10.561L9.72 12.656C9.855 12.791 10.043 12.875 10.25 12.875C10.664 12.875 11 12.54 11 12.125C11 11.918 10.916 11.731 10.78 11.595L8.686 9.5H9.875C10.289 9.5 10.625 9.165 10.625 8.75C10.625 8.336 10.289 8 9.875 8L6.875 8C6.461 8 6.125 8.336 6.125 8.75V11.75C6.125 12.165 6.461 12.5 6.875 12.5C7.289 12.5 7.625 12.165 7.625 11.75Z"})}))},[Jl.PAUSE]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","data-pause-icon":!0},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",className:Kr.FILL,d:"M8 4C6.89543 4 6 4.89543 6 6V18C6 19.1046 6.89543 20 8 20C9.10457 20 10 19.1046 10 18V6C10 4.89543 9.10457 4 8 4ZM16 4C14.8954 4 14 4.89543 14 6V18C14 19.1046 14.8954 20 16 20C17.1046 20 18 19.1046 18 18V6C18 4.89543 17.1046 4 16 4Z"})}))},[Jl.PLAY]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","data-play-icon":!0},t),{},{children:Ie("path",{d:"M19 12C19 12.3557 18.8111 12.6846 18.5039 12.8638L6.50387 19.8638C6.19458 20.0442 5.81243 20.0455 5.50194 19.8671C5.19145 19.6888 5 19.3581 5 19L5 5C5 4.64193 5.19145 4.3112 5.50194 4.13286C5.81243 3.95452 6.19458 3.9558 6.50387 4.13622L18.5039 11.1362C18.8111 11.3154 19 11.6443 19 12Z",className:Kr.FILL})}))},[Jl.REPLAY]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("path",{className:Kr.FILL,d:"M0 1V5C0 5.6 0.4 6 1 6H5C5.6 6 6 5.6 6 5C6 4.4 5.6 4 5 4H3.5C4.6 2.8 6.2 2 8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14C5.7 14 3.60001 12.7 2.60001 10.6C2.40001 10.1 1.79999 9.89998 1.29999 10.1C0.799988 10.3 0.599988 10.9 0.799988 11.4C2.09999 14.2 5 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0C5.7 0 3.5 1.00001 2 2.70001V1C2 0.4 1.6 0 1 0C0.4 0 0 0.4 0 1Z"})}))},[Jl.CHAPTERS]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.6665 4.1665V4.99984V5.83317H2.49984H3.33317V4.99984V4.1665H2.49984H1.6665ZM5.83317 4.99984C5.83317 4.5396 6.20627 4.1665 6.6665 4.1665H17.4998C17.9601 4.1665 18.3332 4.5396 18.3332 4.99984C18.3332 5.46007 17.9601 5.83317 17.4998 5.83317H6.6665C6.20627 5.83317 5.83317 5.46007 5.83317 4.99984ZM5.83317 9.99984C5.83317 9.5396 6.20627 9.1665 6.6665 9.1665H17.4998C17.9601 9.1665 18.3332 9.5396 18.3332 9.99984C18.3332 10.4601 17.9601 10.8332 17.4998 10.8332H6.6665C6.20627 10.8332 5.83317 10.4601 5.83317 9.99984ZM6.6665 14.1665C6.20627 14.1665 5.83317 14.5396 5.83317 14.9998C5.83317 15.4601 6.20627 15.8332 6.6665 15.8332H17.4998C17.9601 15.8332 18.3332 15.4601 18.3332 14.9998C18.3332 14.5396 17.9601 14.1665 17.4998 14.1665H6.6665ZM1.6665 9.99984V9.1665H2.49984H3.33317V9.99984V10.8332H2.49984H1.6665V9.99984ZM3.33317 14.9998V14.1665H2.49984H1.6665V14.9998V15.8332H2.49984H3.33317V14.9998Z"})}))},[Jl.POINT]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("circle",{className:Kr.FILL,cx:"4",cy:"4",r:"4"})}))},[Jl.CC]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 24 24","data-cc-icon":!0},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 6H4V18H20V6ZM4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM11.486 12.8238C11.3743 13.5215 11.0859 14.0974 10.6307 14.5377C10.1676 14.9833 9.56909 15.2094 8.85284 15.2094C7.97089 15.2094 7.26496 14.9058 6.7557 14.3063C6.25372 13.7133 6 12.8972 6 11.8775C6 10.7761 6.28832 9.91206 6.85646 9.30664C7.36026 8.77164 8.00852 8.5 8.78364 8.5C9.81431 8.5 10.5828 8.86515 11.0677 9.58479C11.3306 9.98486 11.475 10.3944 11.4963 10.801L11.5054 10.9803H11.3215H10.1026H9.96788L9.93328 10.8536C9.86226 10.5844 9.77364 10.3826 9.66802 10.2535C9.48229 10.0281 9.21096 9.91857 8.83402 9.91857C8.46012 9.91857 8.17059 10.0766 7.95146 10.4027C7.7202 10.7465 7.60305 11.2484 7.60305 11.897C7.60305 12.5403 7.72445 13.0226 7.9636 13.3304C8.19547 13.6292 8.48015 13.7748 8.83342 13.7748C9.197 13.7748 9.46468 13.6541 9.65285 13.4038C9.75968 13.2659 9.85073 13.0475 9.92478 12.7569L9.95634 12.6285H10.0941H11.313H11.5169L11.486 12.8238ZM17.1137 14.5377C17.569 14.0974 17.8567 13.5215 17.9684 12.8238L17.9999 12.6285H17.796H16.5766H16.44L16.4078 12.7569C16.3344 13.0475 16.2427 13.2659 16.1353 13.4038C15.9477 13.6541 15.6794 13.7748 15.3158 13.7748C14.9632 13.7748 14.6791 13.6292 14.4472 13.3304C14.2081 13.0226 14.0855 12.5403 14.0855 11.897C14.0855 11.2484 14.2032 10.7465 14.4351 10.4027C14.653 10.0766 14.9425 9.91857 15.3171 9.91857C15.6934 9.91857 15.9659 10.0281 16.1504 10.2535C16.2561 10.3826 16.3459 10.5844 16.4169 10.8536L16.4503 10.9803H16.5863H17.8045H17.9878L17.9799 10.801C17.9574 10.3944 17.8136 9.98486 17.5502 9.58479C17.0652 8.86515 16.2979 8.5 15.2673 8.5C14.4909 8.5 13.8433 8.77164 13.3395 9.30664C12.7707 9.91206 12.483 10.7761 12.483 11.8775C12.483 12.8972 12.7368 13.7133 13.2381 14.3063C13.748 14.9058 14.4533 15.2094 15.3359 15.2094C16.0521 15.2094 16.65 14.9833 17.1137 14.5377Z"})}))},[Jl.CC_FILLED]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 24 24","data-cc-filled-icon":!0},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM11.486 12.8238C11.3743 13.5215 11.0859 14.0974 10.6307 14.5377C10.1676 14.9833 9.56909 15.2094 8.85284 15.2094C7.97089 15.2094 7.26496 14.9058 6.7557 14.3063C6.25372 13.7133 6 12.8972 6 11.8775C6 10.7761 6.28832 9.91206 6.85646 9.30664C7.36026 8.77164 8.00852 8.5 8.78364 8.5C9.81431 8.5 10.5828 8.86515 11.0677 9.58479C11.3306 9.98486 11.475 10.3944 11.4963 10.801L11.5054 10.9803H11.3215H10.1026H9.96788L9.93328 10.8536C9.86226 10.5844 9.77364 10.3826 9.66802 10.2535C9.48229 10.0281 9.21096 9.91857 8.83402 9.91857C8.46012 9.91857 8.17059 10.0766 7.95146 10.4027C7.7202 10.7465 7.60305 11.2484 7.60305 11.897C7.60305 12.5403 7.72445 13.0226 7.9636 13.3304C8.19547 13.6292 8.48015 13.7748 8.83342 13.7748C9.197 13.7748 9.46468 13.6541 9.65285 13.4038C9.75968 13.2659 9.85073 13.0475 9.92478 12.7569L9.95634 12.6285H10.0941H11.313H11.5169L11.486 12.8238ZM17.9684 12.8238C17.8567 13.5215 17.569 14.0974 17.1137 14.5377C16.65 14.9833 16.0521 15.2094 15.3359 15.2094C14.4533 15.2094 13.748 14.9058 13.2381 14.3063C12.7368 13.7133 12.483 12.8972 12.483 11.8775C12.483 10.7761 12.7707 9.91206 13.3395 9.30664C13.8433 8.77164 14.4909 8.5 15.2673 8.5C16.2979 8.5 17.0652 8.86515 17.5502 9.58479C17.8136 9.98486 17.9574 10.3944 17.9799 10.801L17.9878 10.9803H17.8045H16.5863H16.4503L16.4169 10.8536C16.3459 10.5844 16.2561 10.3826 16.1504 10.2535C15.9659 10.0281 15.6934 9.91857 15.3171 9.91857C14.9425 9.91857 14.653 10.0766 14.4351 10.4027C14.2032 10.7465 14.0855 11.2484 14.0855 11.897C14.0855 12.5403 14.2081 13.0226 14.4472 13.3304C14.6791 13.6292 14.9632 13.7748 15.3158 13.7748C15.6794 13.7748 15.9477 13.6541 16.1353 13.4038C16.2427 13.2659 16.3344 13.0475 16.4078 12.7569L16.44 12.6285H16.5766H17.796H17.9999L17.9684 12.8238Z"})}))},[Jl.CHECKMARK]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.66668 6.39041L10.1953 0.861816L11.1381 1.80463L5.13808 7.80463C4.87773 8.06498 4.45562 8.06498 4.19527 7.80463L0.861938 4.47129L1.80475 3.52848L4.66668 6.39041Z",fill:"white"})}))},[Jl.STEREOSCOPIC]:()=>Ie("svg",{viewBox:"0 0 64 64",children:Ie("path",{d:"M55.3066 16H8.53325C6.79992 16 5.33325 17.52 5.33325 19.3867V47.28C5.33325 49.1467 6.79992 50.6667 8.61325 50.6667H21.3333C22.7733 50.6667 23.9999 49.8133 24.4266 48.56L28.1333 39.3067C28.7733 37.76 30.2666 36.6667 31.9999 36.6667C33.7333 36.6667 35.2266 37.76 35.8666 39.3067L39.5733 48.56C40.0799 49.8133 41.2266 50.6667 42.5333 50.6667H55.3066C57.1999 50.6667 58.6666 49.1467 58.6666 47.28V19.3867C58.6666 17.52 57.1999 16 55.3066 16ZM19.2533 38.88C15.9999 38.88 13.3333 36.1333 13.3333 32.7733C13.3333 29.3333 15.9999 26.6667 19.2533 26.6667C22.5066 26.6667 25.1466 29.3333 25.1466 32.7733C25.1466 36.1333 22.5066 38.88 19.2533 38.88ZM44.7466 38.88C41.4933 38.88 38.8533 36.1333 38.8533 32.7733C38.8533 29.4133 41.4933 26.6667 44.7466 26.6667C47.9999 26.6667 50.6666 29.4133 50.6666 32.7733C50.6666 36.1333 47.9999 38.88 44.7466 38.88Z"})}),[Jl.PERSON_FILLED]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("path",{fill:"white",fillRule:"evenodd",clipRule:"evenodd",d:"M7.99999 1.33398C6.15904 1.33398 4.66666 2.82637 4.66666 4.66732C4.66666 6.50827 6.15904 8.00065 7.99999 8.00065C9.84094 8.00065 11.3333 6.50827 11.3333 4.66732C11.3333 2.82637 9.84094 1.33398 7.99999 1.33398ZM2.66666 12.0007C2.66666 10.1597 4.15904 8.66732 5.99999 8.66732H9.99999C11.8409 8.66732 13.3333 10.1597 13.3333 12.0007V14.6673H2.66666V12.0007Z"})}))},[Jl.CHEVRON_DOWN]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"24",height:"24",viewBox:"0 0 24 24"},t),{},{children:Ie("path",{d:"M12 15.5a1 1 0 0 1-.67-.26l-5-4.5 1.34-1.48L12 13.15l4.33-3.9 1.34 1.49-5 4.5a1 1 0 0 1-.67.26z",fill:"#1a2e3b"})}))},[Jl.CHEVRON_RIGHT]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 24 24"},t),{},{children:Ie("path",{d:"M9.71 17.71l-1.42-1.42 4.3-4.29-4.3-4.29 1.42-1.42 5 5a1 1 0 0 1 0 1.41z",fill:"#1a2e3b"})}))},[Jl.CLOCK]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 20 20"},t),{},{children:Ie("path",{d:"M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17zM10.75 5v4.69l3.075 3.075a.75.75 0 1 1-1.06 1.06L9.25 10.311V5a.75.75 0 0 1 1.5 0z"})}))},[Jl.CLOCK_FILLED]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10 4C10.5523 4 11 4.44772 11 5V9.49995L14.6001 12.2C15.0419 12.5314 15.1314 13.1582 14.8001 13.6C14.4687 14.0418 13.8419 14.1314 13.4001 13.8L9.41174 10.8088C9.38636 10.7903 9.36189 10.7706 9.3384 10.7499C9.24863 10.6708 9.17612 10.5786 9.12159 10.4783C9.04406 10.3362 9 10.1733 9 10V9.99923V5C9 4.44772 9.44772 4 10 4Z"})}))},[Jl.COLLECTIONS]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 20 20"},t),{},{children:Ie("path",{d:"M20 10a1 1 0 0 0-.52-.88L17.44 8l2-1.13A1 1 0 0 0 20 6a1 1 0 0 0-.52-.87l-8-4.45a3 3 0 0 0-2.9 0l-8 4.45A1 1 0 0 0 0 6a1 1 0 0 0 .51.88L2.56 8l-2 1.13a1 1 0 0 0 0 1.75l2 1.13-2 1.12a1 1 0 0 0 0 1.75l8 4.46a3 3 0 0 0 2.92 0l8-4.46a1 1 0 0 0 0-1.75l-2-1.12 2-1.13A1 1 0 0 0 20 10zM9.52 2.41a1 1 0 0 1 1 0L16.94 6l-6.45 3.57a1 1 0 0 1-1 0L3.06 6zm-1 8.91a3 3 0 0 0 2.92 0l3.92-2.18 1.56.86-6.45 3.59a1.06 1.06 0 0 1-1 0L3.06 10l1.56-.86zM16.94 14l-6.45 3.59a1.06 1.06 0 0 1-1 0L3.06 14l1.54-.86 3.94 2.19a3 3 0 0 0 2.92 0l3.94-2.18z",fill:"#1a2e3b"})}))},[Jl.DISMISS_X]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 20 20"},t),{},{children:Ie("path",{d:"M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z",fill:"#1A2E3B",fillRule:"evenodd"})}))},[Jl.HEART]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 20 20"},t),{},{children:Ie("path",{d:"M10 18a1 1 0 0 1-.81-.42 15.8 15.8 0 0 0-4.35-3.71C2.46 12.3 0 10.68 0 7.5a5.38 5.38 0 0 1 1.61-3.92A6 6 0 0 1 6 2a5.54 5.54 0 0 1 4.05 1.88A5.74 5.74 0 0 1 14 2c2.9 0 6 2.21 6 5.5s-2.46 4.8-4.84 6.37a15.8 15.8 0 0 0-4.35 3.71A1 1 0 0 1 10 18zM5.78 4A4 4 0 0 0 3 5a3.37 3.37 0 0 0-1 2.5c0 2 1.5 3.09 3.94 4.7A20.94 20.94 0 0 1 10 15.42a20.94 20.94 0 0 1 4.06-3.22C16.5 10.59 18 9.5 18 7.5 18 5.22 15.68 4 14 4c-1.44 0-2.78 1.49-3.17 2.06a1 1 0 0 1-.92.44 1 1 0 0 1-.82-.58A3.65 3.65 0 0 0 6 4z",fill:"#1a2e3b"})}))},[Jl.HEART_FILLED]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 20 20"},t),{},{children:Ie("path",{d:"M10 18a1.23 1.23 0 0 1-.8-.4 14.25 14.25 0 0 0-4.4-3.7C2.5 12.3 0 10.7 0 7.5a5.52 5.52 0 0 1 1.6-3.9A5.73 5.73 0 0 1 6 2a5.25 5.25 0 0 1 4 1.9A5.85 5.85 0 0 1 14 2c2.9 0 6 2.2 6 5.5s-2.5 4.8-4.8 6.4a15.51 15.51 0 0 0-4.4 3.7 1.23 1.23 0 0 1-.8.4z",fill:"#1a2e3b"})}))},[Jl.ONDEMAND]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 20 20"},t),{},{children:Ie("path",{d:"M17.44 3.83L11.6.4a3.33 3.33 0 0 0-3.14 0l-5.9 3.43A3.41 3.41 0 0 0 1 6.57v6.86a3.41 3.41 0 0 0 1.56 2.74l5.87 3.43A3.08 3.08 0 0 0 10 20a3.18 3.18 0 0 0 1.57-.39l5.87-3.44A3.41 3.41 0 0 0 19 13.43V6.57a3.41 3.41 0 0 0-1.56-2.74zm-8-1.71A1.13 1.13 0 0 1 10 2a1.19 1.19 0 0 1 .56.12l5.84 3.43a1.47 1.47 0 0 1 .57 1v2.71a1 1 0 0 0-.38-.26L8.08 4.13 8 4.11V3zM8 6.4l6.3 3.6L8 13.66zm-5 7V6.57a1.43 1.43 0 0 1 .57-1L6 4.14v10.68l-.9.52-1.53-.9A1.43 1.43 0 0 1 3 13.43zm13.43 1l-5.87 3.44a1.37 1.37 0 0 1-1.12 0L7.08 16.5l9.22-5.32.7.4v1.85a1.43 1.43 0 0 1-.57 1.01z",fill:"#1a2e3b"})}))},[Jl.PAPER_PLANE]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 18.1 20.95"},t),{},{children:Ie("path",{d:"M18.11 0L-.01 12.07l8 4v4.88l2.26-3.75 6.65 3.32zm-3 17.37l-3.93-2 1.81-6.42-5 4.91-4-2.03 11.9-7.93z",fill:"#1a2e3b"})}))},[Jl.POP_OUT]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 20 20"},t),{},{children:[Ie("path",{d:"M16 17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5V2H3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5h-2z",fill:"#1a2e3b"}),Ie("path",{d:"M19 0h-7v2h4.59l-8 8L10 11.41l8-8V8h2V1a1 1 0 0 0-1-1z",fill:"#1a2e3b"})]}))},[Jl.VOLUME_OFF_FILLED]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 24 24"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14 2.20001C15.1263 2.42863 16.1838 2.84654 17.1379 3.41908L15.5513 4.82943C15.0606 4.58595 14.5414 4.39136 14 4.25201V2.20001ZM21.1249 7.90287L19.5378 9.31361C19.8371 10.1532 20 11.0576 20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 10.5401 21.6872 9.15325 21.1249 7.90287ZM12 4.00396V7.98614L3.17811 15.8278C2.48346 15.5143 2 14.8156 2 14.004V10.004C2 8.89939 2.89543 8.00396 4 8.00396H6.58579L10.2929 3.29685C10.9229 2.66689 12 3.11305 12 4.00396ZM12 10.662L5.99037 16.004L2.33565 19.2526C1.92286 19.6195 1.88568 20.2516 2.2526 20.6644C2.61952 21.0772 3.25159 21.1143 3.66437 20.7474L21.6644 4.74742C22.0772 4.3805 22.1143 3.74843 21.7474 3.33565C21.3805 2.92286 20.7484 2.88568 20.3356 3.2526L12 10.662ZM10.2929 20.7111L8.81985 18.8407L12 16.0139V20.004C12 20.8949 10.9229 21.341 10.2929 20.7111ZM14 15.4648C15.0633 14.8498 15.8172 13.7593 15.971 12.4841L17.8778 10.7892C17.9579 11.1803 18 11.5852 18 12C18 14.6124 16.3304 16.8349 14 17.6586V15.4648Z"})}))},[Jl.VOLUME_ON_FILLED]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 24 24"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 12C20 15.7277 17.4505 18.8599 14 19.7479V21.7999C18.5645 20.8734 22 16.8379 22 12C22 7.16206 18.5645 3.12655 14 2.20001V4.25201C17.4505 5.1401 20 8.2723 20 12ZM18 12C18 9.38754 16.3304 7.16506 14 6.34139V8.53511C15.1956 9.22672 16 10.5194 16 12C16 13.4805 15.1956 14.7732 14 15.4648V17.6586C16.3304 16.8349 18 14.6124 18 12ZM6.58579 8.00396H4C2.89543 8.00396 2 8.89939 2 10.004V14.004C2 15.1085 2.89543 16.004 4 16.004H6.58579L10.2929 20.7111C10.9229 21.341 12 20.8949 12 20.004V4.00396C12 3.11305 10.9229 2.66689 10.2929 3.29685L6.58579 8.00396Z"})}))},[Jl.FAST_FORWARD]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 64 64"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.4506 12.0055L32.4643 30.0179C33.6413 31.0772 33.6413 32.9228 32.4643 33.9821L12.4506 51.9945C10.7345 53.5389 8 52.3211 8 50.0124V13.9876C8 11.6789 10.7345 10.4611 12.4506 12.0055ZM39.1172 12.0055L59.131 30.0179C60.308 31.0772 60.308 32.9228 59.131 33.9821L39.1172 51.9945C37.4012 53.5389 34.6667 52.3211 34.6667 50.0124V13.9876C34.6667 11.6789 37.4012 10.4611 39.1172 12.0055Z"})}))},[Jl.INFO_CIRCLE]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.6667 6C10.6667 8.57733 8.57733 10.6667 6 10.6667C3.42267 10.6667 1.33333 8.57733 1.33333 6C1.33333 3.42267 3.42267 1.33333 6 1.33333C8.57733 1.33333 10.6667 3.42267 10.6667 6ZM12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 4.66667C6.36819 4.66667 6.66667 4.36819 6.66667 4C6.66667 3.63181 6.36819 3.33333 6 3.33333C5.63181 3.33333 5.33333 3.63181 5.33333 4C5.33333 4.36819 5.63181 4.66667 6 4.66667ZM6 5.33333C6.36819 5.33333 6.66667 5.54653 6.66667 5.80952V8.19048C6.66667 8.45347 6.36819 8.66667 6 8.66667C5.63181 8.66667 5.33333 8.45347 5.33333 8.19048V5.80952C5.33333 5.54653 5.63181 5.33333 6 5.33333Z",fill:"white"})}))},[Jl.TRANSCRIPT_ON]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 24 24"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.5 3C3.39543 3 2.5 3.89543 2.5 5V19C2.5 20.1046 3.39543 21 4.5 21H14.7547C14.0868 20.7085 13.461 20.2895 12.9142 19.7426C10.5711 17.3995 10.5711 13.6005 12.9142 11.2574C14.4297 9.74185 16.5543 9.20655 18.5 9.65145V5C18.5 3.89543 17.6046 3 16.5 3H4.5ZM18.5 11.7313C17.0907 11.2301 15.4565 11.5435 14.3284 12.6716C14.1332 12.8668 13.9623 13.0773 13.8159 13.2991C12.7907 14.8517 12.9616 16.9616 14.3284 18.3284C15.4515 19.4515 17.0762 19.7671 18.4812 19.2754C18.725 19.19 18.9622 19.0804 19.1891 18.9464L21.3995 21.1569C21.79 21.5474 22.4232 21.5474 22.8137 21.1569C23.2042 20.7663 23.2042 20.1332 22.8137 19.7426L20.6033 17.5322C21.5092 15.9983 21.3032 13.9895 19.9853 12.6716C19.5512 12.2375 19.0423 11.9241 18.5 11.7313ZM7.5 7C6.94772 7 6.5 7.44772 6.5 8C6.5 8.55228 6.94772 9 7.5 9H12.5C13.0523 9 13.5 8.55228 13.5 8C13.5 7.44772 13.0523 7 12.5 7H7.5ZM7.5 11C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13H9.5C10.0523 13 10.5 12.5523 10.5 12C10.5 11.4477 10.0523 11 9.5 11H7.5ZM6.5 16C6.5 15.4477 6.94772 15 7.5 15H8.5C9.05228 15 9.5 15.4477 9.5 16C9.5 16.5523 9.05228 17 8.5 17H7.5C6.94772 17 6.5 16.5523 6.5 16Z"})}))},[Jl.TRANSCRIPT_OFF]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 24 24"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.5 5H16.5V9.53585C17.1669 9.46283 17.8436 9.50136 18.5 9.65145V5C18.5 3.89543 17.6046 3 16.5 3H4.5C3.39543 3 2.5 3.89543 2.5 5V19C2.5 20.1046 3.39543 21 4.5 21H14.7547C14.0868 20.7085 13.461 20.2895 12.9142 19.7426C12.6802 19.5086 12.4696 19.2601 12.2823 19H4.5V5ZM15.2182 19C16.2222 19.5567 17.415 19.6485 18.4812 19.2754C18.725 19.19 18.9622 19.0804 19.1891 18.9464L21.3995 21.1569C21.79 21.5474 22.4232 21.5474 22.8137 21.1569C23.2042 20.7663 23.2042 20.1332 22.8137 19.7426L20.6033 17.5322C21.5092 15.9983 21.3032 13.9895 19.9853 12.6716C19.5512 12.2375 19.0423 11.9241 18.5 11.7313C17.857 11.5026 17.1672 11.4435 16.5 11.554C15.7048 11.6857 14.9418 12.0582 14.3284 12.6716C12.7663 14.2337 12.7663 16.7663 14.3284 18.3284C14.5992 18.5992 14.8992 18.8231 15.2182 19ZM6.5 8C6.5 7.44772 6.94772 7 7.5 7H12.5C13.0523 7 13.5 7.44772 13.5 8C13.5 8.55228 13.0523 9 12.5 9H7.5C6.94772 9 6.5 8.55228 6.5 8ZM6.5 12C6.5 11.4477 6.94772 11 7.5 11H10.5C11.0523 11 11.5 11.4477 11.5 12C11.5 12.5523 11.0523 13 10.5 13H7.5C6.94772 13 6.5 12.5523 6.5 12ZM7.5 15C6.94772 15 6.5 15.4477 6.5 16C6.5 16.5523 6.94772 17 7.5 17H8.5C9.05228 17 9.5 16.5523 9.5 16C9.5 15.4477 9.05228 15 8.5 15H7.5Z"})}))},[Jl.SEARCH]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("path",{className:Kr.FILL,d:"M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.5725 18 14.0238 17.4815 15.1925 16.6062L18.298 19.7076C18.6888 20.0978 19.3219 20.0974 19.7122 19.7066C20.1025 19.3159 20.1021 18.6827 19.7113 18.2924L16.6066 15.1919C17.4817 14.0233 18 12.5722 18 11C18 7.13401 14.866 4 11 4ZM6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11Z"})}))},[Jl.CHEVRON_UP]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"24",height:"24",viewBox:"0 0 24 24"},t),{},{children:Ie("path",{d:"M12 11.3454L16.331 15.2433L17.6689 13.7567L12.6689 9.25671C12.2886 8.91443 11.7113 8.91443 11.331 9.25671L6.33102 13.7567L7.66895 15.2433L12 11.3454Z",fill:"#1a2e3b"})}))},[Jl.CLOSE_CIRCLE]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"24",height:"24",viewBox:"0 0 24 24"},t),{},{children:Ie("path",{clipRule:"evenodd",d:"M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM14.7071 9.26251C14.3571 8.9125 13.7896 8.9125 13.4396 9.26251L12 10.7023L10.5604 9.26252C10.2104 8.9125 9.64292 8.9125 9.29293 9.26252L9.26302 9.29244C8.91306 9.64243 8.91306 10.2099 9.26302 10.5599L10.7027 11.9997L9.26247 13.4401C8.91251 13.7901 8.91251 14.3576 9.26247 14.7076L9.29239 14.7375C9.64237 15.0875 10.2098 15.0875 10.5598 14.7375L12 13.2971L13.4402 14.7375C13.7902 15.0875 14.3576 15.0875 14.7076 14.7375L14.7375 14.7076C15.0875 14.3576 15.0875 13.7901 14.7375 13.4401L13.2973 11.9997L14.737 10.5599C15.0869 10.2099 15.0869 9.64243 14.737 9.29244L14.7071 9.26251Z",fill:"#fff",fillRule:"evenodd"})}))},[Jl.SPINNER]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",fill:"none","data-spinner":!0},t),{},{children:[Ie("circle",{"data-spinner-trace":!0,cx:"24",cy:"24",r:"22",stroke:"white"}),Ie("circle",{"data-spinner-circle":!0,cx:"24",cy:"24",r:"22",stroke:"white"})]}))},[Jl.SLIDERS]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17 7C16.4477 7 16 6.55228 16 6C16 5.44772 16.4477 5 17 5C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7ZM19.8293 5C19.4175 3.83481 18.3062 3 17 3C15.6938 3 14.5825 3.83481 14.1707 5H3C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H14.1707C14.5825 8.16519 15.6938 9 17 9C18.3062 9 19.4175 8.16519 19.8293 7H21C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5H19.8293ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H4.17071C4.58254 14.1652 5.69378 15 7 15C8.30622 15 9.41746 14.1652 9.82929 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H9.82929C9.41746 9.83481 8.30622 9 7 9C5.69378 9 4.58254 9.83481 4.17071 11H3ZM7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H14.1707C14.5825 20.1652 15.6938 21 17 21C18.3062 21 19.4175 20.1652 19.8293 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H19.8293C19.4175 15.8348 18.3062 15 17 15C15.6938 15 14.5825 15.8348 14.1707 17H3ZM18 18C18 17.4477 17.5523 17 17 17C16.4477 17 16 17.4477 16 18C16 18.5523 16.4477 19 17 19C17.5523 19 18 18.5523 18 18Z"})}))},[Jl.SWITCH_CIRCLE]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"12",height:"12",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",fill:"none","data-toggle-container":!0},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z",fill:"white"})}))},[Jl.SWITCH_CONTAINER]:e=>{let{containerFill:t}=e,n=Ne(e,["containerFill"]);return Ie("svg",d(d({width:"32",height:"16",viewBox:"0 0 32 16",xmlns:"http://www.w3.org/2000/svg",fill:"none","data-toggle-container":!0},n),{},{children:Ie("rect",{width:"32",height:"16",rx:"8",fill:t||"#2F8363"})}))},[Jl.WARN_CIRCLE]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 14C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14ZM11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z",fill:"white"})}))},[Jl.THUMBS_UP]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0514 9H19.0738C20.0444 9 20.8299 9.35394 21.3493 9.99618C21.8401 10.6031 22 11.3518 22 12V15C22 16.9967 21.2949 18.6828 20.5308 19.8635C20.1484 20.4545 19.7394 20.9376 19.3716 21.2847C19.1892 21.4569 19.0014 21.6105 18.8178 21.7283C18.7263 21.787 18.6199 21.8471 18.5035 21.8953C18.3992 21.9384 18.2213 22 18.0043 22H12C10.837 22 9.83327 21.7103 9.12861 21.4285C8.99855 21.3765 8.87772 21.3243 8.76692 21.2737C8.25906 21.7332 7.59078 22 6.88197 22H4C2.89543 22 2 21.1046 2 20V11C2 9.89643 2.89367 9 3.99924 9H7.90182C8.9732 8.60827 9.61763 8.20384 10.1078 7.63449C10.6376 7.01903 11.0675 6.11901 11.5331 4.57534L11.5413 4.53968C11.6279 4.16374 11.7631 3.57633 12.062 3.09009C12.2335 2.81089 12.4762 2.53151 12.8223 2.32587C13.1723 2.11782 13.5711 2.01926 14 2.01926C14.8534 2.01926 15.466 2.41723 15.8386 2.78144C16.0237 2.9623 16.1588 3.14255 16.2496 3.28199C16.2954 3.35222 16.3322 3.41568 16.3605 3.4686C16.3951 3.5336 16.4261 3.60015 16.4492 3.67019C16.5013 3.82791 16.5197 4.0011 16.5373 4.167L16.5425 4.21554C16.5696 4.46535 16.5931 4.81409 16.583 5.23366C16.5627 6.07019 16.4078 7.208 15.8625 8.40636C15.7274 8.70327 15.7031 8.87123 15.7005 8.94441C15.741 8.96116 15.8033 8.97895 15.8838 8.99016C15.9396 8.99795 15.9952 9 16.0514 9ZM13.4759 5.05072L13.4741 5.05871C13.4693 5.07933 13.4638 5.09979 13.4577 5.12006C12.9658 6.75821 12.4366 7.99485 11.6235 8.93936C10.9182 9.75858 10.0581 10.2914 9 10.7202V19.2174C9.08899 19.2196 9.17122 19.2384 9.24448 19.2784C9.38703 19.3561 9.60104 19.4634 9.87139 19.5715C10.4167 19.7897 11.163 20 12 20H17.8014C17.8514 19.9621 17.9179 19.9067 17.9987 19.8304C18.2399 19.6027 18.5483 19.2459 18.8517 18.777C19.4594 17.8379 20 16.5239 20 15V12C20 11.6482 19.9099 11.3969 19.7942 11.2538C19.707 11.1461 19.5294 11 19.0738 11H16.0654C16.0365 11.0006 15.9909 11.0009 15.9325 10.999C15.8501 10.9964 15.7377 10.9891 15.6076 10.971C15.3617 10.9367 14.9841 10.8544 14.6237 10.6345C14.2372 10.3985 13.8666 9.99723 13.7424 9.38864C13.6261 8.81811 13.7562 8.20634 14.0421 7.57802C14.4491 6.68359 14.568 5.82532 14.5835 5.18521C14.5913 4.86647 14.5732 4.60676 14.5541 4.43084C14.55 4.39233 14.5458 4.35787 14.5418 4.32773C14.5154 4.29227 14.4815 4.25162 14.4407 4.21169C14.323 4.09673 14.1856 4.01926 14 4.01926C13.8867 4.01926 13.8489 4.04221 13.8443 4.04499C13.8371 4.04925 13.8089 4.06724 13.7659 4.13728C13.7194 4.21297 13.6697 4.32623 13.6182 4.49311C13.5668 4.65929 13.5255 4.83727 13.4759 5.05072ZM7 19.9889V11H4V20H6.88197C6.91933 20 6.95876 19.9961 7 19.9889Z",fill:"white"})}))},[Jl.THUMBS_DOWN]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.94864 15.0193H4.9262C3.95557 15.0193 3.17013 14.6653 2.65073 14.0231C2.15987 13.4161 2 12.6675 2 12.0193V9.01926C2 7.02253 2.70509 5.33649 3.46916 4.15574C3.85161 3.56472 4.26059 3.08171 4.62837 2.73451C4.81075 2.56233 4.99859 2.40877 5.18217 2.291C5.27374 2.23225 5.38005 2.17217 5.49649 2.12398C5.60076 2.08082 5.77867 2.01926 5.99567 2.01926L12 2.01926C13.163 2.01926 14.1667 2.30892 14.8714 2.59078C15.0015 2.64281 15.1223 2.69495 15.2331 2.74553C15.7409 2.28605 16.4092 2.01926 17.118 2.01926H20C21.1046 2.01926 22 2.91469 22 4.01926L22 13.0193C22 14.1228 21.1063 15.0193 20.0008 15.0193H16.0982C15.0268 15.411 14.3824 15.8154 13.8922 16.3848C13.3624 17.0002 12.9325 17.9003 12.4669 19.4439L12.4587 19.4796C12.3721 19.8555 12.2369 20.4429 11.938 20.9292C11.7665 21.2084 11.5238 21.4878 11.1777 21.6934C10.8277 21.9014 10.4289 22 10 22C9.14656 22 8.53398 21.602 8.16136 21.2378C7.97632 21.057 7.84124 20.8767 7.7504 20.7373C7.70464 20.667 7.66777 20.6036 7.63954 20.5507C7.60486 20.4857 7.57388 20.4191 7.55075 20.3491C7.49868 20.1913 7.48029 20.0182 7.46266 19.8523L7.45748 19.8037C7.43043 19.5539 7.40687 19.2052 7.41704 18.7856C7.43731 17.9491 7.59222 16.8113 8.13751 15.6129C8.27262 15.316 8.29694 15.148 8.29953 15.0748C8.25898 15.0581 8.19666 15.0403 8.11624 15.0291C8.06037 15.0213 8.00485 15.0193 7.94864 15.0193ZM10.5241 18.9685L10.5259 18.9606C10.5307 18.9399 10.5362 18.9195 10.5423 18.8992C11.0342 17.2611 11.5634 16.0244 12.3765 15.0799C13.0818 14.2607 13.9419 13.7279 15 13.2991L15 4.80189C14.911 4.79964 14.8288 4.78086 14.7555 4.7409C14.613 4.66315 14.399 4.55587 14.1286 4.44773C13.5833 4.2296 12.837 4.01926 12 4.01926L6.1986 4.01926C6.14859 4.05717 6.08207 4.11258 6.00131 4.18882C5.76012 4.41652 5.4517 4.77339 5.14827 5.24229C4.54059 6.18137 4 7.49534 4 9.01926V12.0193C4 12.371 4.09013 12.6224 4.20582 12.7654C4.29297 12.8732 4.47062 13.0193 4.9262 13.0193H7.93463C7.96345 13.0186 8.00911 13.0183 8.06745 13.0202C8.14991 13.0229 8.26226 13.0301 8.39236 13.0483C8.63827 13.0825 9.01586 13.1648 9.37627 13.3848C9.76282 13.6207 10.1334 14.022 10.2576 14.6306C10.3739 15.2012 10.2438 15.8129 9.95791 16.4412C9.55092 17.3357 9.43197 18.1939 9.41645 18.834C9.40873 19.1528 9.4268 19.4125 9.44585 19.5884C9.45002 19.6269 9.45424 19.6614 9.45823 19.6915C9.48457 19.727 9.5185 19.7676 9.55935 19.8076C9.67696 19.9225 9.81438 20 10 20C10.1133 20 10.1511 19.9771 10.1557 19.9743C10.1629 19.97 10.1911 19.952 10.2341 19.882C10.2806 19.8063 10.3303 19.693 10.3818 19.5262C10.4332 19.36 10.4745 19.182 10.5241 18.9685ZM17 4.03039V13.0193H20L20 4.01926H17.118C17.0807 4.01926 17.0412 4.02315 17 4.03039Z",fill:"white"})}))},[Jl.THUMBS_UP_FILLED]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.0514 9H19.0738C20.0444 9 20.8299 9.35394 21.3493 9.99618C21.8401 10.6031 22 11.3518 22 12V15C22 16.9967 21.2949 18.6828 20.5308 19.8635C20.1484 20.4545 19.7394 20.9376 19.3716 21.2847C19.1892 21.4569 19.0014 21.6105 18.8178 21.7283C18.7263 21.787 18.6199 21.8471 18.5035 21.8953C18.3992 21.9384 18.2213 22 18.0043 22H12C10.837 22 9.83327 21.7103 9.12861 21.4285C9.08468 21.4109 9.0418 21.3933 9 21.3758V8.51408C9.46407 8.25834 9.8137 7.9761 10.1078 7.63449C10.6376 7.01903 11.0675 6.11901 11.5331 4.57534L11.5413 4.53968C11.6279 4.16374 11.7631 3.57633 12.062 3.09009C12.2335 2.81089 12.4762 2.53151 12.8223 2.32587C13.1723 2.11782 13.5711 2.01926 14 2.01926C14.8534 2.01926 15.466 2.41723 15.8386 2.78144C16.0237 2.9623 16.1588 3.14255 16.2496 3.28199C16.2954 3.35222 16.3322 3.41568 16.3605 3.4686C16.3951 3.5336 16.4261 3.60015 16.4492 3.67019C16.5013 3.82791 16.5197 4.0011 16.5373 4.167L16.5425 4.21554C16.5696 4.46535 16.5931 4.81409 16.583 5.23366C16.5627 6.07019 16.4078 7.208 15.8625 8.40636C15.7274 8.70327 15.7031 8.87123 15.7005 8.94441C15.741 8.96116 15.8033 8.97895 15.8838 8.99016C15.9396 8.99795 15.9952 9 16.0514 9ZM7 9H3.99924C2.89367 9 2 9.89643 2 11V20C2 21.1046 2.89543 22 4 22H6.88197C6.92144 22 6.96079 21.9992 7 21.9975V9Z",fill:"white"})}))},[Jl.THUMBS_DOWN_FILLED]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),{},{children:Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.94864 15.0193H4.9262C3.95557 15.0193 3.17013 14.6653 2.65073 14.0231C2.15987 13.4161 2 12.6675 2 12.0193V9.01926C2 7.02253 2.70509 5.33649 3.46916 4.15574C3.85161 3.56472 4.26059 3.08171 4.62837 2.73451C4.81075 2.56233 4.99859 2.40877 5.18217 2.291C5.27374 2.23225 5.38006 2.17217 5.49649 2.12398C5.60076 2.08082 5.77867 2.01926 5.99567 2.01926H12C13.163 2.01926 14.1667 2.30892 14.8714 2.59078C14.9153 2.60835 14.9582 2.62594 15 2.64348V15.5052C14.5359 15.7609 14.1863 16.0432 13.8922 16.3848C13.3624 17.0002 12.9325 17.9003 12.4669 19.4439L12.4587 19.4796C12.3721 19.8555 12.2369 20.4429 11.938 20.9292C11.7665 21.2084 11.5238 21.4878 11.1777 21.6934C10.8277 21.9014 10.4289 22 10 22C9.14656 22 8.53398 21.602 8.16136 21.2378C7.97632 21.057 7.84124 20.8767 7.7504 20.7373C7.70464 20.667 7.66777 20.6036 7.63954 20.5507C7.60486 20.4857 7.57388 20.4191 7.55075 20.3491C7.49868 20.1913 7.48029 20.0182 7.46266 19.8523L7.45748 19.8037C7.43043 19.5539 7.40687 19.2052 7.41704 18.7856C7.43731 17.9491 7.59222 16.8113 8.13751 15.6129C8.27262 15.316 8.29694 15.148 8.29953 15.0748C8.25898 15.0581 8.19666 15.0403 8.11624 15.0291C8.06037 15.0213 8.00485 15.0193 7.94864 15.0193ZM17 15.0193H20.0008C21.1063 15.0193 22 14.1228 22 13.0193V4.01926C22 2.91469 21.1046 2.01926 20 2.01926H17.118C17.0786 2.01926 17.0392 2.02008 17 2.02173V15.0193Z",fill:"white"})}))},[Jl.REACT]:e=>{let t=Object.assign({},e);return Ie("svg",d(d({width:"24",height:"24",viewBox:"0 0 24 24",style:{width:"20px",height:"20px"}},t),{},{fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z",fill:"white"}),Ie("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.38786 14.0077C7.5653 13.694 7.89785 13.5 8.2583 13.5H15.7419C16.1023 13.5 16.4349 13.694 16.6123 14.0077C16.7897 14.3215 16.7846 14.7064 16.5988 15.0153C15.6625 16.5725 13.9539 17.6178 12.0001 17.6178C10.0463 17.6178 8.33766 16.5725 7.40131 15.0153C7.21556 14.7064 7.21042 14.3215 7.38786 14.0077Z",fill:"white"}),Ie("path",{d:"M14.75 8.49991C14.0596 8.49991 13.5 9.05955 13.5 9.74991C13.5 10.4403 14.0596 10.9999 14.75 10.9999C15.4404 10.9999 16 10.4403 16 9.74991C16 9.05955 15.4404 8.49991 14.75 8.49991Z",fill:"#11191D"}),Ie("path",{d:"M9.25003 8.49991C8.55967 8.49991 8.00003 9.05955 8.00003 9.74991C8.00003 10.4403 8.55967 10.9999 9.25003 10.9999C9.94039 10.9999 10.5 10.4403 10.5 9.74991C10.5 9.05955 9.94039 8.49991 9.25003 8.49991Z",fill:"#11191D"})]}))}},tc=e=>{let{name:t,className:n}=e,i=Ne(e,["name","className"]);const o=ec[t];return o&&Ie(o,d({className:n},i))},nc=De({menuEventFromKeyboard:!1,isAccordionToggling:!1,activeAccordion:"",setMenuEventFromKeyboard:()=>{},setAccordionToggling:()=>{},setActiveAccordion:()=>{}}),ic=({children:e})=>{const[t,n]=xe(!1),[i,o]=xe(!1),[r,a]=xe(""),s={menuEventFromKeyboard:t,isAccordionToggling:i,activeAccordion:r,setMenuEventFromKeyboard:n,setAccordionToggling:o,setActiveAccordion:a};return Ie(nc.Provider,{value:s,children:e})},oc=({children:t,menuRef:n,panelRef:i,headerRef:o,buttonRef:r,panel:a,isMenuDisplayed:s,setMenuDisplayed:l,toggleKey:c})=>{const{menuEventFromKeyboard:d,setMenuEventFromKeyboard:u}=Be(nc),p=Id(e=>e.embed.keyboard),_=Id(e=>e.embed.background),v=Id(e=>e.config.view),m=Ve((t,n)=>{let i=[];const o=(null==t?void 0:t.children)||[],r=(null==n?void 0:n.children)||[];return[].concat(e(o),e(r)).forEach(e=>{var t;const n=window.getComputedStyle(e);!n.display||"none"===n.display||(e.tabIndex>-1&&i.push(e),(null==(t=e.children)?void 0:t.length)&&(i=i.concat(m(e,[]))))}),i},[]),f=Ve(()=>{var e,t;((null==o||null==(e=o.current)?void 0:e.contains(document.activeElement))||(null==i||null==(t=i.current)?void 0:t.contains(document.activeElement)))&&(null==r?void 0:r.current)&&(document.body.classList.add("showfocus"),r.current.focus())},[r,o,i]),h=Ve(e=>{let t=m(o.current,i.current),n=t.indexOf(document.activeElement),r="up"===e?n-1:n+1,a=null;a=r>=t.length?t[0]:r<0?t[t.length-1]:t[r],a&&a.focus()},[m,o,i]),g=Ve(e=>!(e.ctrlKey||e.metaKey||e.altKey)&&(e.which in Ur?"keydown"===e.type:"keypress"===e.type),[]),b=Ve(e=>{if(_)return!0;const t=e.target||e.srcElement;return"INPUT"===t.tagName||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable},[_]),y=Ve(()=>xr(v),[v]),E=Ve(e=>{if(!g(e)||b(e)||!y())return;const t=()=>{var e;(null==n||null==(e=n.current)?void 0:e.contains(document.activeElement))&&h("up")},i=()=>{var e;(null==n||null==(e=n.current)?void 0:e.contains(document.activeElement))&&h("down")},o=(e=>{if("keypress"===e.type){var t=String.fromCharCode(e.which);return e.shiftKey||(t=t.toLowerCase()),t}return e.which in Ur?Ur[e.which]:String.fromCharCode(e.which).toLowerCase()})(e),r={up:t,down:i,left:t,right:i,esc:()=>{(null==n?void 0:n.current)&&(f(),l(!1))}};c&&(r[c]=()=>{u(!0),l(!s)}),"function"==typeof r[o]&&r[o]()},[s,c,n,h,f,l,u,b,g,y]);return Oe(()=>(p&&(document.addEventListener("keydown",E,!1),document.addEventListener("keypress",E,!1)),()=>{document.removeEventListener("keydown",E,!1),document.removeEventListener("keypress",E,!1)}),[p,E]),Oe(()=>{d&&s&&(()=>{const e=m(o.current,i.current);e.length>0&&(document.body.classList.add("showfocus"),e[0].focus())})()},[i,o,a,s]),Oe(()=>{s||f()},[s]),Ie(Ue,{children:t})};const rc=Fe(({isMenuDisplayed:e,isMenuBlockingUI:t,setMenuDisplayed:n=Sa,panel:i,buttonRef:o,progressBarAndButtonsRef:r,panelContent:a,headerContent:s,toggleKey:l,className:c,id:u,type:p},_)=>{const v=He(null);_=_||v;const f=He(null),h=He(null),g=He(null),b=He(null),[y,E]=xe({height:"auto"}),[C,w]=xe({}),[T,L]=xe(!1),[S,k]=xe(!1),A=Id(e=>e.appearance.isMenuBlockingUI);t=void 0===t?A:t;const P=Id(e=>e.appearance.isMenuVerticalVideoMode),I=Id(e=>e.appearance.boundingClientRect),R=Id(e=>e.displayList.controlBar),{isAccordionToggling:O}=Be(nc),N=e=>{const t=window.getComputedStyle(e);return parseFloat(t.fontSize)},M=()=>{L(!1),cancelAnimationFrame(null==b?void 0:b.current)},D=()=>{var n;if(!((null==(n=_)?void 0:n.current)&&e))return;if(t)return k(!1),void E(e=>d(d({},e),{},{height:"100%"}));let i="auto";const o=ct(_.current),r=N(_.current),a=o.bottom-_.current.scrollHeight,s=Math.max(I.top,0)-a;if(s>0){let e=_.current.scrollHeight-s-r;i=`${e/r}em`}E(e=>d(d({},e),{},{height:i})),k(s>0)},x=()=>{if(!(null==h?void 0:h.current))return;if(t)return void w({});if(!e)return void w({height:"0"});const n=N(h.current),i=`${(h.current.scrollHeight+16)/n}em`;w({height:i})},B=()=>{D(),T&&(b.current=requestAnimationFrame(B))},V=()=>{M(),x(),D()},U=m(i=>{var r;(null==(r=_)?void 0:r.current)&&(null==o?void 0:o.current)&&e&&(o.current.contains(i.target)||_.current.contains(i.target)||!document.contains(i.target)||t||n(!1))},200),F=m(()=>{t||n(!1)},200);Oe(()=>(document.addEventListener("click",U,!1),window.addEventListener("blur",F,!1),()=>{document.removeEventListener("click",U,!1),window.removeEventListener("blur",F,!1)}),[_,o,e]),Oe(()=>((()=>{var n;if(!((null==(n=_)?void 0:n.current)&&(null==o?void 0:o.current)&&(null==r?void 0:r.current)&&e))return;if(t||P)return void E(e=>d(d({},e),{},{right:""}));const i=ct(o.current),a=ct(r.current),s=ct(_.current);let l=-8;const c=i.right-i.width/2+s.width/2+8;c<a.right&&(l=a.right-c);const u=N(_.current);E(e=>d(d({},e),{},{right:`${l/u}em`}))})(),!e||t?V():(x(),L(!0),B()),()=>{M()}),[e,i,null==I?void 0:I.width,t]),Oe(()=>{R||n(!1)},[R]),Oe(()=>{(null==f?void 0:f.current)&&(O?t?D():(w(e=>d(d({},e),{},{height:"auto"})),L(!0),B()):t?(L(!1),V()):(x(),B()))},[O]);const H=Vr(Kr.VP_MENU,"Menu_module_menu__ff3bd248",c,S&&"Menu_module_scroll__ff3bd248",t&&"Menu_module_fullWidth__ff3bd248",P&&"Menu_module_verticalVideo__ff3bd248");return Ie(oc,{menuRef:_,panelRef:h,headerRef:g,buttonRef:o,panel:i,isMenuDisplayed:e,setMenuDisplayed:n,toggleKey:l,children:Ie(Tl,{visible:e,children:Ie("div",{id:u,className:H,ref:_,style:y,onTransitionEnd:e=>{e.target===(null==f?void 0:f.current)&&"height"===e.propertyName&&(D(),M())},"data-menu":p||!0,children:[s&&Ie("div",{ref:g,children:s}),Ie("div",{ref:f,className:"Menu_module_menuBody__ff3bd248",style:C,children:Ie("div",{className:"Menu_module_menuPanel__ff3bd248",ref:h,children:a})})]})})})});const ac=({buffer:e=!1})=>Ie("div",{className:`Divider_module_divider__700c72a0 ${e?"Divider_module_buffer__700c72a0":""}`});const sc=({onBack:e=null,title:t,isMenuBlockingUI:n,setMenuDisplayed:i=Sa,hasCloseButton:o=!0,onClose:r=(()=>i(!1)),size:a=va.MD})=>{var s;const l=Id(e=>e.appearance.isMenuBlockingUI);n=null!==(s=n)&&void 0!==s?s:l;const c=Vr("MenuHeader_module_menuHeader__3019d1cc",n&&"MenuHeader_module_fullWidth__3019d1cc",e&&"MenuHeader_module_hasBack__3019d1cc",!o&&"MenuHeader_module_hideCloseButton__3019d1cc");return Ie("div",{className:c,children:[Ie("header",{className:"MenuHeader_module_header__3019d1cc",children:[Ie("div",{className:"MenuHeader_module_backButtonWrapper__3019d1cc",children:Ie(Oc,{className:`${Xr.EXCLUDE_GLOBAL_BUTTON_STYLES} MenuHeader_module_backButton__3019d1cc`,onClick:e,"aria-label":"Back",color:ua.ALTERNATIVE,icon:Ie(tc,{name:Jl.CHEVRON_RIGHT}),iconSize:da.MD})}),Ie(Sc,{size:a,className:"MenuHeader_module_title__3019d1cc",children:t}),Ie("div",{className:"MenuHeader_module_closeButtonWrapper__3019d1cc",children:Ie(Oc,{className:`${Xr.EXCLUDE_GLOBAL_BUTTON_STYLES} MenuHeader_module_closeButton__3019d1cc`,"aria-label":"Close menu",onClick:r,color:ua.ALTERNATIVE,icon:Ie(tc,{name:Jl.DISMISS_X}),iconSize:da.MD})})]}),Ie(ac,{})]})};const lc=e=>{let{className:t,id:n,active:i,withActive:o=!0,onSelect:r,onMouseEnter:a,onMouseLeave:s,element:l="div",styled:c=!0,children:u}=e,p=Ne(e,["className","id","active","withActive","onSelect","onMouseEnter","onMouseLeave","element","styled","children"]);const{onClick:_,onKeyDown:v}=$c(r),m=Vr("MenuOption_module_option__268a8f13",o&&"MenuOption_module_withActive__268a8f13",c&&"MenuOption_module_styled__268a8f13",t),f=d({className:m,role:"menuitemradio","aria-checked":i,"data-id":n,tabIndex:0,onClick:_,onKeyDown:v,onMouseDown:e=>e.preventDefault(),onMouseEnter:a,onMouseLeave:s},p);return Me(l,f,u)};let cc,dc,uc;!function(e){e.PREFS="prefs",e.CHAPTERS="chapters",e.CC="cc",e.TRANSCRIPT="transcript"}(cc||(cc={})),function(e){e.EMPTY="empty",e.PREFS="prefs",e.QUALITY="quality",e.SPEED="speed",e.AUDIO="audio",e.CHAPTERS="chapters",e.LANGUAGES="languages",e.CUSTOMIZE="customize",e.FONT="font",e.BACKGROUND="background",e.WINDOW="window",e.PREVIEW="preview",e.TRANSCRIPT_SETTINGS="transcriptSettings",e.TRANSCRIPT_LANGUAGES="transcriptLanguages"}(dc||(dc={})),function(e){e.SMALL="small",e.MEDIUM="medium",e.LARGE="large"}(uc||(uc={}));const pc=({className:e,onSelect:t,label:n,value:i,valueComponent:o,id:r,isAccordion:a=!1,isOpened:s=!1,size:l=uc.MEDIUM})=>{let c,d=va.MD;return l===uc.LARGE?(d=va.LG,c=va.MD):a&&(d=va.SM),Ie(lc,{className:Vr("MenuOptionButton_module_optionButton__c91efbc0",l===uc.SMALL&&"MenuOptionButton_module_small__c91efbc0",e),onSelect:t,id:r,withActive:!1,children:[Ie(Sc,{size:d,className:"MenuOptionButton_module_label__c91efbc0",children:n}),Ie("div",{className:"MenuOptionButton_module_valueContainer__c91efbc0",children:[i&&Ie(Sc,{weight:ma.NORMAL,size:c,className:"MenuOptionButton_module_value__c91efbc0",children:i}),o||Ie("div",{className:Vr("MenuOptionButton_module_icon__c91efbc0",s&&"MenuOptionButton_module_open__c91efbc0"),children:Ie(tc,{name:a?Jl.CHEVRON_DOWN:Jl.CHEVRON_RIGHT})})]})]})};const _c=va.MD,vc=va.SM,mc=({onSelect:e,onMouseEnter:t,onMouseLeave:n,label:i,active:o,id:r,ordered:a=!1,index:s,isAccordion:l=!1,tabIndex:c})=>{const d=Vr("MenuOptionListItem_module_listItem__f8959de6",a&&"MenuOptionListItem_module_ordered__f8959de6",o&&"MenuOptionListItem_module_active__f8959de6",l&&"MenuOptionListItem_module_accordion__f8959de6");return Ie(lc,{element:"li",className:d,onSelect:e,onMouseEnter:t,onMouseLeave:n,active:o,id:r,tabIndex:c,children:[Ie("div",a?{className:"MenuOptionListItem_module_number__f8959de6",children:s}:{className:`MenuOptionListItem_module_check__f8959de6 ${o?"MenuOptionListItem_module_activeCheck__f8959de6":""}`,children:Ie(tc,{name:Jl.CHECKMARK})}),Ie(Sc,{className:"MenuOptionListItem_module_text__f8959de6",weight:ma.NORMAL,size:l?vc:_c,children:i}),a&&o&&Ie("div",{className:"MenuOptionListItem_module_point__f8959de6",children:Ie(tc,{name:Jl.POINT})})]})};const fc=({items:e,onSelect:t,onMenuOptionMouseEnter:n,onMenuOptionMouseLeave:i,ordered:o=!1,isAccordion:r=!1,listItemTabIndex:a=0})=>{const s=o?"ol":"ul",l={className:"MenuOptionList_module_list__087838b4",role:"group"},c=e.map(e=>Ie(mc,{id:e.id,active:e.active,label:e.label,onSelect:t,onMouseEnter:n,onMouseLeave:i,ordered:o,index:e.index,isAccordion:r,tabIndex:a},e.id));return Me(s,l,c)};const hc=({label:e,items:t=[],onSelect:n})=>{var i;const o=He(null),r=He(null),{setAccordionToggling:a,activeAccordion:s,setActiveAccordion:l}=Be(nc),[c,d]=xe(!1),[u,p]=xe({}),_=null==(i=t.find(e=>e.active))?void 0:i.label,v=t=>{const n=void 0!==t?t:!c;d(n),a(!0),n&&l(e)},m=e=>{e.target===r.current&&"height"===e.propertyName&&a(!1)},f=e=>{(null==o?void 0:o.current)&&!o.current.contains(e.target)&&o.current!==e.target&&v(!1)};return Oe(()=>(document.addEventListener("click",f),document.addEventListener("transitionend",m),()=>{l(""),document.removeEventListener("click",f),document.removeEventListener("transitionend",m)}),[]),Oe(()=>{p((()=>{let e={};if(c&&(null==r?void 0:r.current)){const t=window.getComputedStyle(r.current),n=parseFloat(t.fontSize);e={height:`${r.current.scrollHeight/n}em`}}return e})())},[c,r]),Oe(()=>{s&&s!==e&&v(!1)},[s]),t.length&&Ie("div",{className:"Accordion_module_accordion__6525797b",role:"menu",ref:o,children:[Ie(pc,{label:e,value:_,onSelect:()=>v(),isAccordion:!0,isOpened:c}),Ie("div",{className:"Accordion_module_content__6525797b",ref:r,style:u,children:Ie(fc,{items:t,onSelect:n,isAccordion:!0,listItemTabIndex:c?0:-1})})]})};const gc=({label:e,className:t=""})=>Ie("div",{className:`MenuFieldLabel_module_menuField__7a3a0ef4 ${t}`,children:Ie(Sc,{className:"MenuFieldLabel_module_label__7a3a0ef4",children:e})}),bc=({items:e=[],label:t,onSelect:n})=>{const i=Id(e=>e.appearance.shouldMenuItemsWrap);return Ie(Ue,{children:[Ie(gc,{label:t}),Ie("ul",{className:`ButtonRow_module_buttonRow__8bddd606 ${i?"ButtonRow_module_wrap__8bddd606":""}`,role:"menu","aria-label":t,children:e.map(e=>Ie(lc,{element:"li",className:`ButtonRow_module_filledButton__8bddd606 ${e.active?"ButtonRow_module_active__8bddd606":""}`,active:e.active,id:e.id,onSelect:n,styled:!1,children:Ie(Sc,{className:"ButtonRow_module_label__8bddd606",children:e.label})},e.id))})]})};const yc=({items:e=[],label:t,onSelect:n})=>{const i=Id(e=>e.appearance.shouldMenuItemsWrap);return Ie(Ue,{children:[Ie(gc,{label:t}),Ie("ul",{className:`ColorSwabs_module_colorSwabs__63fe80c1 ${i?"ColorSwabs_module_wrap__63fe80c1":""}`,role:"menu","aria-label":t,children:e.map(e=>Ie(lc,{id:e.id,element:"li",className:`ColorSwabs_module_colorSwab__63fe80c1 ${e.active?"ColorSwabs_module_active__63fe80c1":""}`,active:e.active,"aria-label":e.label,onSelect:n,styled:!1,children:Ie("div",{className:"ColorSwabs_module_inner__63fe80c1",style:{backgroundColor:e.id}})},e.id))})]})};let Ec;!function(e){e.TOP="top",e.BOTTOM="bottom",e.LEFT="left",e.RIGHT="right"}(Ec||(Ec={}));const Cc=({children:t,tooltipText:n,className:i="",containerEl:r,position:a,margin:s})=>{var l,c,u;const p=Id(e=>e.displayList.menu),_=!o.touch&&!p,[v,m]=xe(!1);let f=null==t?void 0:t.ref;const h=He(null);f=f||h;const g=He(null),b=d(d({},null==t?void 0:t.props),{},{className:`Tooltip_module_tooltipContainer__21ae5b80 ${null==t||null==(l=t.props)?void 0:l.className}`,ref:f,onMouseEnter:e=>{var n;(null==t||null==(n=t.props)?void 0:n.onMouseEnter)&&t.props.onMouseEnter(e),m(!0)},onMouseLeave:e=>{var n;(null==t||null==(n=t.props)?void 0:n.onMouseEnter)&&t.props.onMouseLeave(e),m(!1)}}),y=(({tooltipEl:e,wrappedEl:t,hovered:n,containerEl:i,position:o=Ec.TOP,margin:r=0})=>{const[a,s]=xe("50%"),[l,c]=xe(null),d=Id(e=>e.element);return function(){if(e&&t&&n){const{left:n,right:i}=d.getBoundingClientRect(),{left:o,right:a,width:l}=t.getBoundingClientRect(),{width:c}=e.getBoundingClientRect(),u=(c-l)/2,p=o-u,_=a+u,v=Math.max(n+r-p,0),m=Math.max(_+r-i,0);s(`calc(50% + ${v-m}px)`)}}(),function(){if(e&&i&&n){const{bottom:e}=i.getBoundingClientRect(),{top:t}=d.getBoundingClientRect();switch(o){case Ec.BOTTOM:const n=e-t-r;isNaN(n)||c(`${n}px`)}}}(),{left:a,top:l}})({tooltipEl:null==g?void 0:g.current,wrappedEl:null==(c=f)?void 0:c.current,hovered:v,containerEl:null==r?void 0:r.current,position:a,margin:s}),E=Vr("Tooltip_module_tooltip__21ae5b80",Kr.VP_TOOLTIP,i),C=_&&Ie("span",{ref:g,style:y,className:E,children:n}),w=(null==t||null==(u=t.props)?void 0:u.children)?[C].concat(e(t.props.children)):[C];return qe(t,b,w)};var wc={text:"Text_module_text__751cabd6",sm:"Text_module_sm__751cabd6",md:"Text_module_md__751cabd6",lg:"Text_module_lg__751cabd6",xl:"Text_module_xl__751cabd6",bpxxs_fontsm:"Text_module_bpxxs_fontsm__751cabd6",bpxxs_fontmd:"Text_module_bpxxs_fontmd__751cabd6",bpxxs_fontlg:"Text_module_bpxxs_fontlg__751cabd6",bpxxs_fontxl:"Text_module_bpxxs_fontxl__751cabd6",bpxs_fontsm:"Text_module_bpxs_fontsm__751cabd6",bpxs_fontmd:"Text_module_bpxs_fontmd__751cabd6",bpxs_fontlg:"Text_module_bpxs_fontlg__751cabd6",bpxs_fontxl:"Text_module_bpxs_fontxl__751cabd6",bpsm_fontsm:"Text_module_bpsm_fontsm__751cabd6",bpsm_fontmd:"Text_module_bpsm_fontmd__751cabd6",bpsm_fontlg:"Text_module_bpsm_fontlg__751cabd6",bpsm_fontxl:"Text_module_bpsm_fontxl__751cabd6",bpmd_fontsm:"Text_module_bpmd_fontsm__751cabd6",bpmd_fontmd:"Text_module_bpmd_fontmd__751cabd6",bpmd_fontlg:"Text_module_bpmd_fontlg__751cabd6",bpmd_fontxl:"Text_module_bpmd_fontxl__751cabd6",bplg_fontsm:"Text_module_bplg_fontsm__751cabd6",bplg_fontmd:"Text_module_bplg_fontmd__751cabd6",bplg_fontlg:"Text_module_bplg_fontlg__751cabd6",bplg_fontxl:"Text_module_bplg_fontxl__751cabd6",bpxl_fontsm:"Text_module_bpxl_fontsm__751cabd6",bpxl_fontmd:"Text_module_bpxl_fontmd__751cabd6",bpxl_fontlg:"Text_module_bpxl_fontlg__751cabd6",bpxl_fontxl:"Text_module_bpxl_fontxl__751cabd6",bpxxl_fontsm:"Text_module_bpxxl_fontsm__751cabd6",bpxxl_fontmd:"Text_module_bpxxl_fontmd__751cabd6",bpxxl_fontlg:"Text_module_bpxxl_fontlg__751cabd6",bpxxl_fontxl:"Text_module_bpxxl_fontxl__751cabd6",bold:"Text_module_bold__751cabd6",normal:"Text_module_normal__751cabd6",medium:"Text_module_medium__751cabd6"};const Tc={[va.SM]:"sm",[va.MD]:"md",[va.LG]:"lg",[va.XL]:"xl"},Lc={[ma.BOLD]:wc.bold,[ma.NORMAL]:wc.normal,[ma.NUM_500]:wc.medium},Sc=({element:e="span",children:t,size:n=va.SM,sizeMap:i,weight:o=ma.BOLD,className:r="",id:a=""})=>{let s=[];i?Object.keys(i).forEach(e=>{const t=Tc[i[e]];s.push(wc[`bp${e}_font${t}`])}):s.push(wc[Tc[n]]);const l=Vr.apply(void 0,[wc.text].concat(s,[Lc[o],r]));return Me(e,{className:l,id:a},t)},kc=e=>Ie(Ql,{className:e.classNames,href:e.url,tabIndex:e.url?"0":"-1","aria-describedby":"new-window",style:e.style,children:Ie("img",{className:e.imgClassNames,src:e.img,alt:e.imgAlt})});var Ac={roundedBox:"shared_module_roundedBox__63d26f6d",hidden:"shared_module_hidden__63d26f6d",focusable:"shared_module_focusable__63d26f6d",focusableMarker:"shared_module_focusableMarker__63d26f6d",focusableCircle:"shared_module_focusableCircle__63d26f6d",focusableButton:"shared_module_focusableButton__63d26f6d"};const Pc={[ua.PRIMARY]:"Button_module_primary__f5fb72bd",[ua.ALTERNATIVE]:"Button_module_alternative__f5fb72bd",[ua.CUSTOM]:"Button_module_customColor__f5fb72bd"},Ic={[da.MD]:"Button_module_md__f5fb72bd",[da.SM]:"Button_module_sm__f5fb72bd",[da.XS]:"Button_module_xs__f5fb72bd",[da.CUSTOM]:"Button_module_customSize__f5fb72bd"},Rc={[da.MD]:"Button_module_iconMd__f5fb72bd",[da.SM]:"Button_module_iconSm__f5fb72bd"},Oc=Fe((e,t)=>{let{children:n,className:i,color:o=ua.PRIMARY,size:r=da.MD,focusable:a=!0,icon:s,iconPosition:l=pa.LEFT,iconSize:c=da.SM,type:u}=e,p=Ne(e,["children","className","color","size","focusable","icon","iconPosition","iconSize","type"]);const _=Vr("Button_module_button__f5fb72bd",a&&Ac.focusable,Pc[o],Ic[r],s&&"Button_module_icon__f5fb72bd",s&&Rc[c],s&&l===pa.RIGHT&&"Button_module_iconRight__f5fb72bd",i);return Ie("button",d(d({className:_,ref:t,type:u||_a.BUTTON},p),{},{children:[l===pa.LEFT&&s,n&&Ie("span",{className:"Button_module_buttonChildren__f5fb72bd",children:n}),l===pa.RIGHT&&s]}))});const Nc=({children:e,className:t,color:n,style:i,type:o})=>{const r=Id(e=>e.displayList.progressBar),a=Vr("Banner_module_banner__8c1c5dd5",!r&&"Banner_module_progressBarHidden__8c1c5dd5",t);return Ie("div",{className:a,style:d(d({},i),{},{background:n}),"data-banner-type":o,children:e})};const Mc=["Shift","Tab"],Dc=!!o.iOS&&"SearchInput_module_mobileSafari__a1ee8a63",xc=Fe(({ariaLabel:e,onChange:t,onEnter:n,onSearchIterate:i,initialValue:o,numSearchResults:r,minSearchLen:a=0,ariaControls:s,ariaExpanded:l,disabled:c,placeholder:u},p)=>{var _,v;const[m,f]=xe(o),[h,g]=xe(!1),[b,y]=xe(0),E=He(null),C=(null==m?void 0:m.length)>0,w=Kc("Shift");u=null!==(_=u)&&void 0!==_?_:"Search",e=null!==(v=e)&&void 0!==v?v:"Search";const T=()=>{E.current&&E.current.focus()};$e(p,()=>({inputElement:E.current,setInputValue:f}));const L=()=>{f(""),t&&t(""),n&&n(""),y(0),T()},S=e=>{let t;null==e||e.preventDefault(),null==e||e.stopPropagation(),t=b<r-1?b+1:0,y(t),i&&i(t)},k=e=>{let t;null==e||e.preventDefault(),null==e||e.stopPropagation(),t=b>0?b-1:r-1,y(t),i&&i(t)},A=Vr("SearchInput_module_inputForm__a1ee8a63",C&&"SearchInput_module_active__a1ee8a63"),P=Vr(Xr.EXCLUDE_GLOBAL_BUTTON_STYLES,"SearchInput_module_searchButton__a1ee8a63",Ac.focusableButton),I=0===r?"0/0":`${b+1}/${r}`;return(Ie("form",{role:"search","aria-label":e,className:A,"data-component-type":"SearchInput","data-focused":`${h}`,"data-disabled":`${c}`,onReset:()=>L(),onSubmit:e=>{e.preventDefault(),n&&n(m),w?k():S()},onClick:T,children:[!C&&Ie("div",d(d({"data-icon":"search",className:"SearchInput_module_searchIcon__a1ee8a63"},Or(T)),{},{children:Ie(tc,{name:Jl.SEARCH})})),Ie("input",{dir:"auto",ref:E,role:"combobox",className:Dc,onFocus:()=>g(!0),onBlur:()=>g(!1),onKeyDown:e=>{Mc.includes(e.key)||e.stopPropagation()},"aria-expanded":l,"aria-controls":s,onInput:e=>{e.preventDefault(),f(e.target.value),e.target.value.length>a&&y(0),t&&t(e.target.value)},value:m,placeholder:u,disabled:c}),C&&Ie(Ue,{children:[Ie("div",{"data-purpose":"search-item",className:"SearchInput_module_searchItem__a1ee8a63",children:I}),Ie(Oc,d(d({},Or(k)),{},{"data-purpose":"decrement-search","aria-label":"Go to previous search result",icon:Ie(tc,{name:Jl.CHEVRON_UP}),size:da.CUSTOM,className:P,disabled:c})),Ie(Oc,d(d({},Or(S)),{},{"data-purpose":"increment-search","aria-label":"Go to next search result",icon:Ie(tc,{name:Jl.CHEVRON_DOWN}),size:da.CUSTOM,className:P,disabled:c})),Ie(Oc,d(d({},Or(L)),{},{"data-icon":"close","data-purpose":"close","aria-label":"Clear Search Results",icon:Ie(tc,{name:Jl.CLOSE_CIRCLE,"data-icon":"close"}),size:da.CUSTOM,type:_a.RESET,className:P,disabled:c}))]})]}))});const Bc=e=>{let{className:t="",size:n=ha.SM}=e,i=Ne(e,["className","size"]);const o=Vr(Kr.VP_SPIN,n===ha.LG&&"Spinner_module_lg__8e25942d",n===ha.SM&&"Spinner_module_sm__8e25942d",t);return Ie(tc,d({name:Jl.SPINNER,className:`Spinner_module_spinner__8e25942d ${o}`},i))};const Vc=({checked:e,label:t="",onClick:n,className:i,containerFill:o})=>{const r=Vr("Switch_module_switch__781932c5",i,e&&"Switch_module_checked__781932c5");return Ie("div",d(d({role:"checkbox","aria-checked":e,"aria-label":t,className:r},Or(e=>null==n?void 0:n(e))),{},{children:[Ie(tc,{name:Jl.SWITCH_CONTAINER,containerFill:o}),Ie(tc,{name:Jl.SWITCH_CIRCLE,className:"Switch_module_handle__781932c5"})]}))};let Uc;!function(e){e.RTL="rtl",e.LTR="ltr"}(Uc||(Uc={}));const Fc={black:"#000",red:"#f00",yellow:"#ff0",green:"#0f0",blue:"#00f",white:"#fff",cyan:"#0ff",magenta:"#f0f"};const Hc=({cues:e,language:t,direction:n,className:i,fontSize:o,fontFamily:r,fontOpacity:a,color:s,windowOpacity:l,windowColor:c,bgOpacity:u,bgColor:p,edgeStyle:_,height:v,style:m={}})=>{const f=ci(),h=(e,t)=>{const n=new J(Fc[e]||e);return n.alpha=t/100,n.rgba},g=d(d(d(d(d({},{fontSize:`${(e=>Math.max(10,Math.round(.045*v*e)))(o)}px`}),(()=>{const e=((e,t)=>f.fontFamily.items.find(e=>e.id===t))(0,r);return{fontVariant:"small_capitals"===e.id?"small-caps":"initial",fontFamily:e.value}})()),{color:h(s,a)}),(()=>{const e=`0, 0, 0, ${Number(a)/100}`;let t="none";switch(_){case"shadow":t=`2px 2px 2px rgba(${e})`;break;case"outline":t=`1px 1px 0 rgba(${e}), -1px 1px 0 rgba(${e}), 1px -1px 0 rgba(${e}), -1px -1px 0 rgba(${e})`;break;case"raised":t=`rgba(${e}) 1px 1px, rgba(${e}) 1.5px 1.5px`;break;case"depressed":t=`rgba(${e}) -1px -1px, rgba(${e}) -1.5px -1.5px`;break;default:t="none"}return{textShadow:t}})()),m),b=d({},{backgroundColor:h(c,l)}),y=d({},{background:h(p,u)}),E=Vr(Kr.VP_CAPTIONS,"CaptionsRenderer_module_captions__63d9c011",i),C=(()=>{let t=[];return e.forEach(e=>{const n=e.html.split("<br>");t=t.concat(n)}),t})();return Ie("div",{className:E,"aria-live":"assertive",lang:t,dir:n,style:g,children:Ie("span",{className:"CaptionsRenderer_module_captionsWindow__63d9c011",style:b,children:C.map(e=>Ie("span",{className:`CaptionsRenderer_module_captionsLine__63d9c011 ${Kr.VP_CAPTIONS_LINE}`,style:y,dangerouslySetInnerHTML:{__html:e}},e))})})};const qc=Fe(({children:e,visible:t,ariaLabelledby:n},i)=>Ie("div",{role:"dialog","aria-labelledby":n,className:`ToastBase_module_toast__8e90acbc ${t?"ToastBase_module_visible__8e90acbc":""}`,ref:i,children:e})),$c=e=>{const{setMenuEventFromKeyboard:t}=Be(nc);return{onClick:n=>{t(!1),n.preventDefault(),n.stopPropagation(),e(n)},onKeyDown:n=>{t(!0),["Enter"," "].includes(n.key)&&(n.preventDefault(),n.stopPropagation(),e(n))}}},Wc=()=>{const e=Id(e=>e.playback.paused),t=Id(e=>e.playback.scrubbing),n=Id(e=>e.playback.scrubbingByFrame),i=Id(e=>e.playback.playInitiated),o=Id(e=>e.playback.isChromecastPlaying),r=Id(e=>e.playback.isChromecastConnected),a=Id(e=>e.playback.buffering),s=Id(e=>e.playback.isAdPlaying),l=Id(e=>e.embed.isTrailer),c=Id(e=>e.embed.autoPlay),d=Id(e=>e.displayList.outro),u=Id(e=>e.displayList.ad),p=l&&!i;let _=Vo.PLAY;p?_=Vo.TRAILER:c&&(_=Vo.PAUSE);const[v,m]=xe(_);return r&&m(o?Vo.PAUSE:Vo.PLAY),u&&m(s?Vo.PAUSE:Vo.PLAY),Oe(()=>{d?m(Vo.REPLAY):t&&!d&&m(e?Vo.PLAY:Vo.PAUSE)},[d]),Oe(()=>{t&&!n||a||p||r||d||u||m(e?Vo.PLAY:Vo.PAUSE)},[e,a,p,r,d,u]),Oe(()=>{i&&m(Vo.PAUSE)},[i]),{buttonState:v,setButtonState:m}};let Yc;function Gc(){}!function(e){e.IDLE="idle",e.LOADING="loading",e.LOADED="loaded",e.ERROR="error"}(Yc||(Yc={}));const zc=e=>{const[t,n]=xe(Yc.IDLE),i=He();return{readyState:t,load:Ve(function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(Ie){return Promise.reject(Ie)}}}((function(){if(null==i||!i.current)return function(e){if(e&&e.then)return e.then(Gc)}(function(t,o){try{var r=function(){let t;return n(Yc.LOADING),function(n,i){var o=function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(Pa(e),(function(e){t=e}));return o&&o.then?o.then(i):i()}(0,(function(){i.current=t,n(Yc.LOADED)}))}()}catch(Ie){return o()}return r&&r.then?r.then(void 0,o):r}(0,(function(e){n(Yc.ERROR)})))})),[e]),module:(null==i?void 0:i.current)||null}},jc=(e,t,n)=>{Oe(()=>{function i(n){n.key!==e&&n.code!==e||t(n)}function o(t){t.key!==e&&t.code!==e||!n||n(t)}return window.addEventListener("keydown",i),n&&window.addEventListener("keyup",o),()=>{window.removeEventListener("keydown",i),n&&window.removeEventListener("keyup",o)}},[t,n,e])},Kc=e=>{const[t,n]=xe(!1);return jc(e,()=>{n(!0)},()=>{n(!1)}),t};let Xc,Zc;!function(e){e.WEB_GLOBAL="vimeo.web_global",e.COPY_VIDEO_EMBED_CODE="workflow.copy_video_embed_code",e.PLAYER_PERFORMANCE_MEASUREMENT="vimeo.player_performance_measurement",e.CHAPTER_SEGMENT_CLICK="vimeo.chapter_segment_click",e.CLICK="vimeo.click",e.CLOSED_CAPTIONS_CLICK="vimeo.closed_captions_click",e.EMBEDDED_TRANSCRIPT_CLICK="vimeo.embedded_transcript_click",e.MULTI_AUDIO_TRACK_CLICK="vimeo.multi_audio_track_click",e.VIEW_PLAYER_CSAT_V1="vimeo.view_player_csat_v1",e.SELECT_THUMBS_UP_PLAYER_CSAT_V1="vimeo.select_thumbs_up_player_csat_v1",e.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1="vimeo.select_thumbs_down_player_csat_v1",e.DISMISS_PLAYER_CSAT_V1="vimeo.dismiss_player_csat_v1"}(Xc||(Xc={})),function(e){e.TEAM="team_context",e.ACTION="action_context",e.VIEW="view_context",e.WEB="web_context",e.VIDEO="video_context",e.PLAYER="player_context"}(Zc||(Zc={}));const Qc=()=>{const e=Id(e=>e.config);return Ve((t,n,i={})=>{cr(t,{config:e},n,i)},[e])};let Jc;!function(e){e[e.AUTO=0]="AUTO",e[e.BOTTOM=1]="BOTTOM",e[e.CENTER=2]="CENTER"}(Jc||(Jc={}));const ed=e=>{const t=Id(e=>e.embed.playButtonPosition),n=Id(e=>e.embed.playbar),i=Id(e=>e.appearance.playerSizeMode),o=Id(e=>e.appearance.isVerticalVideo),r=i===Oo.TINY,a=i===Oo.MINI&&o;return e===Vo.REPLAY?Jc.BOTTOM:r||a||t===Jc.CENTER?Jc.CENTER:t===Jc.BOTTOM||t!==Jc.AUTO||n?Jc.BOTTOM:Jc.CENTER};function td(e){var t,n,i,r,a,s,l;const{config:c,events:u,subscribe:p,set:_,get:v}=e,{embed:m,request:f,video:h,user:g}=c,b=!!m.autoplay,y=!!(m.autoplay&&(null==(t=f.flags)?void 0:t.autohide_controls)),E=!!m.settings.playbar,C=!!m.settings.like,w=!!m.settings.reaction,T=!!m.settings.share,L=!!(null==(n=m.settings.share)?void 0:n.embed_only),S=!!m.settings.collections,k=!!m.settings.watch_later,A=!(null==(i=m.settings)||!i.watch_trailer||m.autoplay||!m.on_site),P=!(!m.settings.speed||!e.backbone.supportsPlaybackRate),I=!!m.keyboard,R=!!m.settings.logo,O=!!m.settings.volume,N=!!m.settings.fullscreen,M=!!(null==(r=h.live_event)||null==(a=r.settings)?void 0:a.hide_live_label),D=!!(null==(s=h.live_event)?void 0:s.show_viewer_count),x=!!m.settings.custom_logo,B=function(e){var t;const{config:n}=e;let i={customLogoUrl:null,customLogoImg:null,customLogoSticky:!1,customLogoWidth:null,customLogoHeight:null};if(!(null==(t=n.embed.settings.custom_logo)?void 0:t.img))return i;const r=n.embed.settings.custom_logo;let a=r.img;return o.devicePixelRatio>=2&&(a=a.replace(/(mw|mh)=(\d+)/g,(function(e,t,n){return t+"="+2*parseInt(n,10)}))),i={customLogoUrl:Eo(r.url),customLogoImg:a,customLogoSticky:r.sticky,customLogoWidth:r.width,customLogoHeight:r.height},i}(e),V=!!m.settings.background,U=0!==m.settings.controls,F=!!m.transparent,H=!!m.on_site,q=nd(e),$=1===g.mod&&(null==(l=e.backbone.audioTracks)?void 0:l.length)>0&&!!m.settings.audio_tracks,W=!!m.settings.airplay,Y=!!m.settings.chapters,G=!!m.settings.chromecast,z=!!m.settings.cc,j=m.settings.play_button_position,K=!!q;return K&&u.fire(Yt._rightContentAreaEnabled),p(e=>{var t;return null==e||null==(t=e.appearance)?void 0:t.fullscreen},t=>{var n,i;const o=null==(n=v())||null==(i=n.embed)?void 0:i.transcript;let r=nd(e);const a=t&&id(e)&&!o,s=!t&&!r&&o;a?(r=!0,u.fire(Yt._rightContentAreaEnabled)):s&&u.fire(Yt._rightContentAreaDisabled),_(e=>({embed:d(d({},e.embed),{},{rightContentAreaEnabled:r,transcript:r})}))}),{autoPlay:b,autoHideControls:y,playbar:E,like:C,reaction:w,share:T,embedOnlyShare:L,collections:S,watchLater:k,isTrailer:A,speedChangeEnabled:P,keyboard:I,showVimeoLogo:R,volume:O,fullscreen:N,hideLiveLabel:M,showViewerCount:D,customLogo:x,customLogoFields:B,background:V,controls:U,transparent:F,transcript:q,rightContentAreaEnabled:K,onsite:H,multipleAudioTracks:$,airplay:W,chapters:Y,cc:z,chromecast:G,playButtonPosition:j}}function nd(e){const t=id(e);return function({config:e}){return nr(e)!==Wo.SINGLE_VIDEO_VIEW_RECIPIENT}(e)&&t}function id(e){var t;const{config:n,backbone:i}=e,{embed:o}=n;return!!o.settings.transcript&&(null==(t=i.textTracks)?void 0:t.length)>0}const od=[{id:.5,label:"0.5x"},{id:.75,label:"0.75x"},{id:1,label:"Normal"},{id:1.25,label:"1.25x"},{id:1.5,label:"1.5x"},{id:2,label:"2x"}],rd=Dn;function ad(e){var t;const{config:n,backbone:i,fragmentsHandler:r}=e,a=sd(e),s=!!o.airPlay,l=!i||i.supportsTextTracks,c=n.embed.quality?Fr(i.qualities,n.embed.quality):i.qualities,d=ld(i.qualities,n.embed.quality),u=!$(null==(t=n.embed.interactive)?void 0:t.fragments);return{playInitiated:!1,targetTimeReached:!1,scrubbing:!1,scrubbingByFrame:!1,paused:!n.embed.autoplay,buffering:!1,loadedTime:0,currentTime:i.currentTime,hasFragments:u,currentFragment:r.currentFragment,duration:n.video.duration,qualities:c,currentQuality:d,playbackRates:a,loadedMetadata:!1,pictureInPictureEnabled:null==i?void 0:i.pictureInPictureEnabled,supportsAirPlay:s,supportsTextTracks:l,supportsStereoscopic:cd(e),supportsChromecast:Ia(e.config),isChromecastConnected:!1,isChromecastPlaying:!1,isChromecastBuffering:!1,isAdPlaying:!1,supportsSettingVolume:!i||i.supportsSettingVolume,volume:i.volume,muted:i.muted||!!n.embed.muted,audioTracks:i.audioTracks}}function sd(e){const{backbone:t,config:n}=e;let i=[];return t.supportsPlaybackRate&&n.embed.settings.speed&&(i=Fr(od,`${t.playbackRate}`)),i}function ld(e,t){var n;if(t){var i;const n="string"==typeof t?t:t.quality||`${t.height}p`,o=null==e||null==(i=e.find(e=>e.id===n))?void 0:i.label;if(o)return o}return null==e||null==(n=e.find(e=>e.active))?void 0:n.label}function cd(e){const{config:t}=e;return"disable"!==t.video.privacy&&(o.webvr||o.stereoscopic)&&t.video.spatial&&mr(t,"webvr").group}function dd({config:e}){const{user:t,video:n}=e;return{liked:t.liked,loggedIn:t.logged_in,watchLater:t.watch_later,ownerName:n.owner.name,collected:!1,shared:!1}}const ud={isVOD:!1,vodButtonVisible:!1};function pd(e){const{video:t,embed:n,user:i,request:o}=e.config;let r=d({},ud);if(t.vod&&"purchase_options"in t.vod&&t.vod.purchase_options.length){const e=!0,a=t.vod.is_coming_soon,s="ondemand.main"===n.context||"Vimeo\\Controller\\OnDemandController.main"===n.context,l=t.vod&&i.purchased;let c=n.settings.vod&&Dr(t.vod.countries,o.country);c&&a&&s&&(c=!1);const[d]=t.vod.purchase_options;let u=null;d&&(u=function(e,t,n,i){var o=i.label_string;return o?(o=function(e,t,n){let i=n.USD;return t in n&&(i=n[t]),-1!==e.indexOf("${price}")?e.replace("${price}",i):-1!==e.indexOf("{PRICE}")?e.replace("{PRICE}",i):e}(o=function(e,t){return void 0!==e&&void 0!==e[t]?e[t]:t}(e,o),n,i.prices),i.expires_in_duration_str&&(o=o.replace("{TIME}",i.expires_in_duration_str)),i.available_on_formatted&&(o=o.replace("{DATE}",i.available_on_formatted)),o):null}(o.dynamic_translation_map,0,o.currency,d)),r.isVOD=e,r.vodLabel=u,r.purchased=!!l,r.productId=d.product_id,r.isExpiring=!!d.expiring,r.vodButtonVisible=c}return r}function _d({config:e}){const{badge:t}=e.embed.settings;let n=o.devicePixelRatio>1?"img_2x":"img";return o.svg&&t.svg&&(n="svg"),{link:t.link,img:t[n],margin:t.margin||!1,width:t.width,height:t.height,name:t.name,shadow:!!t.shadow,id:t.id}}function vd(e){return{chapters:Array.from(e.backbone.chapters),activeChapterId:null}}function md(e){var t,n,i,o,r;const{backbone:a,config:s}=e,l=a.enabledTextTrack,c=a.textTracks,u=!!s.video.live_event,{textTracks:p,activeTextTrackId:_,language:v,direction:m}=fd(c,u,l),f=hd(e),h=(null==c||null==(t=c.filter(e=>e.trackElement))?void 0:t.map(e=>e.trackElement))||[],g=1===(null==s||null==(n=s.request)||null==(i=n.flags)?void 0:i.ott)||"dev"===(null==s||null==(o=s.request)||null==(r=o.build)?void 0:r.js)||"gedevplayer.vimeows.com"===(null==s?void 0:s.player_url),b=(c||[]).reduce((e,t)=>t.rtl?e.concat(t.id):e,[]);return d({textTracks:p,textTrackEls:h,activeTextTrackId:_,requiresCrossOrigin:g,activeCues:[],language:v,direction:m,rtlTracks:b},f)}function fd(e,t,n){let i=[],o=null==n?void 0:n.id;return(null==e?void 0:e.length)&&(o||(o="off"),i.push({label:"Off",id:"off",active:"off"===o}),e.forEach(e=>{let o="CC"===e.label.substring(e.label.length-2),r="captions"!==e.kind||o?"":" CC",a=t?"Display Captions":e.label+r;const s=`${e.id}`,l={label:a,id:s,active:(null==n?void 0:n.id)===s};i.push(l)})),{textTracks:i,activeTextTrackId:o,language:null==n?void 0:n.language,direction:gd(n)}}function hd(e){const{store:t}=e,n=ci();return Object.keys(n).forEach(e=>{const i=t.get(`ui.captions.${e}`);n[e]=i}),n}function gd(e){return e?e.rtl?Uc.RTL:Uc.LTR:null}let bd,yd;function Ed(e){var t;const{config:n}=e,i=n.video.live_event,o=null==i?void 0:i.status,r=!!o,a=null==i||null==(t=i.archive)?void 0:t.status;return d(d(d({isLiveEvent:r},wd(o)),Cd(a)),{},{viewerCount:nt(0),liveStatsRequestSucceeded:null})}function Cd(e){return{isArchived:"done"===e}}function wd(e){return{isStarted:e===yd.started,isEnded:e===yd.ended}}!function(e){e.started="started",e.done="done",e.error="error"}(bd||(bd={})),function(e){e.pending="pending",e.active="active",e.started="started",e.ended="ended"}(yd||(yd={}));function Td(e){const{config:t}=e,{interactive:n,wirewax:i}=t.embed;return{hotspots:[],demoEnd:null==n?void 0:n.demo_end,enabled:!!i,ready:!1,showMarkers:!!(null==n?void 0:n.markers)}}let Ld;!function(e){e.EMPTY="empty",e.QOE_SURVEY="qoe_survey"}(Ld||(Ld={}));const Sd="qoe_survey_test",kd={control:"control",variant:"variant"},Ad=.5,{Provider:Pd,useStore:Id,useStoreApi:Rd}=Ye(),Od=({player:e,children:t})=>{const[n,i]=xe(!1);return Xl(()=>i(!0),e),n?Ie(Pd,{createStore:()=>Ge(ze((t,n,{subscribe:i})=>{const o=d(d({set:t,get:n,subscribe:i},e),{},{get backbone(){return e.backbone},get displayContext(){return e.displayContext},get config(){return e.config}}),{config:r,element:a,expose:s,uuid:l,verifyConfig:c,events:v}=e;return d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d({},(e=>{const{set:t,events:n}=e,i=fl(e);return n.on(Yt._debugDataChange,()=>{t(()=>({debug:fl(e)}))}),{debug:i}})(o)),(e=>{const{set:t,events:n}=e,i=Sl(e),o=(e,n)=>{t(t=>({controlBar:d(d({},t.controlBar),{},{[e]:n})}))};return n.on(Yt._configChanged,()=>{t(()=>({controlBar:Sl(e)}))}),n.on(Mt._overrideControlbarBehavior,e=>{o("overrideBehavior",e)}),{controlBar:i,setControlBar:o}})(o)),zl(o)),(e=>{const{store:t,set:n,events:i,element:o,backbone:r,config:a}=e,s=jl(e),l=(e,t)=>n(n=>({appearance:d(d({},n.appearance),{},{[e]:t})}));return t.watch("ui.player.breakpoint",e=>l("playerBreakpoint",e)),t.watch("ui.player.mode",e=>l("playerSizeMode",e)),t.watch("ui.app.breakpoint",e=>l("appBreakpoint",e)),t.watch("ui.app.mode",e=>l("appSizeMode",e)),t.watch("ui.controlbar.isMenuFullWidth",e=>l("isMenuBlockingUI",e)),t.watch("ui.player.isVerticalVideo",e=>{l("isVerticalVideo",e)}),t.watch("ui.controlbar.isMenuVerticalVideoMode",e=>l("isMenuVerticalVideoMode",e)),t.watch("ui.player.width",()=>{l("boundingClientRect",ct(o))}),t.watch("ui.controlbar.doMenuItemsWrap",e=>{l("shouldMenuItemsWrap",e)}),t.watch("ui.player.width",e=>{const{videoHeight:n}=Kl(e,t.get("ui.player.height"),a.video.width,a.video.height);l("videoHeight",n)}),t.watch("ui.player.height",e=>{const{videoHeight:n}=Kl(t.get("ui.player.width"),e,a.video.width,a.video.height);l("videoHeight",n)}),t.watch("ui.container.height",e=>{l("containerHeight",e)}),i.on(Yt._willEnterFullscreen,()=>l("fullscreen",!0)),i.on(Yt._didExitFullscreen,e=>{n(t=>{const n={fullscreen:!1,forceExitedFullscreen:t.appearance.forceExitedFullscreen};return e||(n.forceExitedFullscreen=!0),{appearance:d(d({},t.appearance),n)}})}),i.on(p.WEBKIT_END_FULLSCREEN,()=>{l("fullscreen",!1)}),i.on(Yt._airPlayActivated,()=>{n(e=>({appearance:d(d({},e.appearance),{},{showAirPlayPicker:!0})}))}),i.on(Yt._airPlayDeactivated,()=>{n(e=>({appearance:d(d({},e.appearance),{},{showAirPlayPicker:!1})}))}),i.on(Mt._reset,()=>{n(()=>({appearance:jl(e)}))}),i.on(Yt._airPlayActivated,()=>{n(e=>({appearance:d(d({},e.appearance),{},{externalDisplay:!0})}))}),i.on(Yt._airPlayDeactivated,()=>{n(e=>({appearance:d(d({},e.appearance),{},{externalDisplay:!1})}))}),i.on(p.ENTER_PICTURE_IN_PICTURE,()=>{n(e=>({appearance:d(d({},e.appearance),{},{pictureInPictureActive:!0})}))}),i.on(p.LEAVE_PICTURE_IN_PICTURE,()=>{n(e=>({appearance:d(d({},e.appearance),{},{pictureInPictureActive:!1})}))}),i.on(O.WEBVR_ENTER,()=>{n(e=>({appearance:d(d({},e.appearance),{},{stereoscopicEnabled:!0})}))}),i.on(O.WEBVR_EXIT,()=>{n(e=>({appearance:d(d({},e.appearance),{},{stereoscopicEnabled:!1})}))}),i.on(Mt._changeColor,(e,t)=>{const i=an[t];n(t=>({appearance:d(d({},t.appearance),{},{[i]:Ta(e)})}))}),{appearance:s,setAppearance:(e,t)=>{"fullscreen"!==e?"pictureInPictureActive"!==e?"showAirPlayPicker"!==e?("stereoscopicEnabled"===e&&i.fire(Yt._stereoscopicButtonPressed),"transcriptNavActive"===e&&i.fire(Yt._transcriptNavActive,t),l(e,t)):i.fire(Yt._airPlayButtonPressed):i.fire(r.pictureInPictureActive?Mt._deactivatePictureInPicture:Mt._activatePictureInPicture):i.fire(Yt._fullscreenButtonPressed)}}})(o)),(e=>{const{set:t,events:n}=e,i=td(e);return n.on(Yt._configChanged,()=>{t(()=>({embed:td(e)}))}),{embed:i}})(o)),El(o)),(e=>{const{events:t,set:n}=e,i=()=>{clearTimeout(Ll),Ll=setTimeout(()=>{n(e=>({displayList:d(d({},e.displayList),{},{nudgeNotification:!1})})),t.fire(Yt._nudgeEnded)},1050)},o=e=>{i(),n(t=>({displayList:d(d({},t.displayList),{},{nudgeNotification:!0}),nudge:e}))};return t.on(Yt._showNudgeNotification,({direction:e,time:t})=>{o({direction:e,time:t})}),{nudge:{direction:null,time:null},setNudge:(e,t)=>{i(),n(n=>({nudge:d(d({},n.nudge),{},{[e]:t})}))},setNudgeProperties:o}})(o)),(e=>{const{events:t,set:n,get:i,fragmentsHandler:o,backbone:r}=e,a=(e,t)=>{n(n=>({playback:d(d({},n.playback),{},{[e]:t})}))},s=ad(e);return t.on(Mt._reset,()=>{n(()=>({playback:ad(e)}))}),t.on(Yt._configChanged,()=>{n(()=>({playback:ad(e)}))}),t.on(u,()=>a("playInitiated",!0)),t.on(p.PLAY,()=>{n(e=>({playback:d(d({},e.playback),{},{scrubbing:!1,scrubbingByFrame:!1,paused:!1,playInitiated:!0})}))}),t.on(Yt._playButtonPressed,()=>a("paused",!1)),t.on([p.PAUSE,Yt._paused,Yt._pauseButtonPressed],()=>a("paused",!0)),t.on(Yt._targetTimeReached,()=>a("targetTimeReached",!0)),t.on(_.BUFFER_STARTED,()=>a("buffering",!0)),t.on(_.BUFFER_ENDED,()=>a("buffering",!1)),t.on(Yt._scrubbingStarted,e=>{a("scrubbing",!0),"keyboard"===(null==e?void 0:e.seekType)&&(null==e?void 0:e.isFrameByFrame)&&a("scrubbingByFrame",!0)}),t.on(Yt._scrubbingEnded,()=>{a("scrubbing",!1),a("scrubbingByFrame",!1)}),t.on(Mt._setTime,e=>{n(t=>{const n=pt(e,0,t.playback.duration);return{playback:d(d({},t.playback),{},{currentTime:n})}})}),t.on(p.TIME_UPDATE,({currentTime:e,timeProgress:t})=>{n(n=>{const i=Math.min(ht(100*t),100);return e=e||n.playback.duration*i||0,{playback:d(d({},n.playback),{},{currentTime:e})}})}),t.on(Yt._ended,()=>{n(e=>({playback:d(d({},e.playback),{},{currentTime:e.playback.currentFragment.duration})}))}),t.on(p.PROGRESS,({loaded:e})=>{n(t=>({playback:d(d({},t.playback),{},{loadedTime:e})}))}),t.on([Yt._fragmentChanged,p.DURATION_CHANGE],()=>{const e=i().playback.currentFragment;We(e,o.currentFragment)||n(e=>({playback:d(d({},e.playback),{},{currentFragment:o.currentFragment})}))}),t.on(p.LOADED_METADATA,()=>{n(e=>({playback:d(d({},e.playback),{},{loadedMetadata:!0})}))}),t.on([_.STREAM_CHANGE,k],e=>{const t={currentQuality:ld(r.qualities,e)};i().liveEvent.isLiveEvent&&Object.assign(t,{qualities:r.qualities}),n(e=>({playback:d(d({},e.playback),t)}))}),t.on(Yt._qualityChanged,e=>{n(t=>({playback:d(d({},t.playback),{},{qualities:r.qualities,currentQuality:ld(r.qualities,e)})}))}),t.on(A,()=>a("audioTracks",r.audioTracks)),t.once(C,()=>a("pictureInPictureEnabled",r.pictureInPictureEnabled)),t.on(Yt._airPlayAvailable,()=>{n(e=>({playback:d(d({},e.playback),{},{supportsAirPlay:!0})}))}),t.on(Yt._airPlayNotAvailable,()=>{n(e=>({playback:d(d({},e.playback),{},{supportsAirPlay:!1})}))}),t.on(Yt._playbackRateChanged,()=>{n(t=>({playback:d(d({},t.playback),{},{playbackRates:sd(e)})}))}),t.on(Yt._volumeChanged,e=>{n(t=>({playback:d(d({},t.playback),{},{volume:e})}))}),t.on(Yt._mutedChanged,e=>{n(t=>({playback:d(d({},t.playback),{},{muted:e})}))}),t.on(_.AVAILABLE_STREAMS_CHANGED,()=>{n(e=>({playback:d(d({},e.playback),{},{qualities:r.qualities,currentQuality:ld(r.qualities)})}))}),rd.on(Nn.connected,()=>{n(e=>({playback:d(d({},e.playback),{},{isChromecastConnected:!0})}))}),rd.on(Nn.disconnected,()=>{n(e=>({playback:d(d({},e.playback),{},{isChromecastConnected:!1})}))}),rd.on(Nn.playing,()=>{n(e=>({playback:d(d({},e.playback),{},{isChromecastPlaying:!0,isChromecastBuffering:!1})}))}),rd.on(Nn.buffering,()=>{n(e=>({playback:d(d({},e.playback),{},{isChromecastBuffering:!0})}))}),rd.on([Nn.error,Nn.idle,Nn.paused,Nn.ended,Nn.disconnected],()=>{n(e=>({playback:d(d({},e.playback),{},{isChromecastPlaying:!1,isChromecastBuffering:!1})}))}),rd.on(Nn.error,()=>{n(e=>({playback:d(d({},e.playback),{},{supportsChromecast:!1})}))}),t.on([Yt._adClicked,Yt._adPaused,Yt._adComplete,Yt._adError,Yt._adSkipped,Yt._allAdsCompleted],()=>{n(e=>({playback:d(d({},e.playback),{},{isAdPlaying:!1})}))}),t.on([Yt._adStarted,Yt._adResumed],()=>{n(e=>({playback:d(d({},e.playback),{},{isAdPlaying:!0})}))}),{playback:s,setPlayback:(e,o,s)=>{if("paused"!==e){if("qualities"===e)return t.fire(Mt._changeQuality,o),void n(e=>{const t=Fr(e.playback.qualities,o);return{playback:d(d({},e.playback),{},{qualities:t,currentQuality:ld(t)})}});if("playbackRates"===e)return t.fire(Mt._changePlaybackRate,o),void n(e=>{const t=Fr(e.playback.playbackRates,o);return{playback:d(d({},e.playback),{},{playbackRates:t})}});if("scrubbing"!==e)if("currentTime"!==e)if("volume"!==e)if("muted"!==e)if("audioTracks"!==e)a(e,o);else{const e=r.audioTracks.find(e=>e.id===`${o}`);e&&(r.enableAudioTrack(e),t.fire(Mt._changeAudioTrack,e))}else t.fire(Mt._changeMuted,o);else t.fire(Mt._changeVolume,o);else switch(null==s?void 0:s.seekType){case"interactive-marker":t.fire(Mt._seek,o),t.fire(Yt._playButtonPressed),t.fire(Yt._interactiveMarkerClicked,{type:"interactive-marker",action:null==s?void 0:s.action});break;case"nudge":t.fire(Yt._nudgeAttempted),t.fire(Mt._seek,o),i().playback.playInitiated||t.fire(Yt._playButtonPressed);break;default:t.fire(Mt._seek,o)}else o?t.fire(Yt._scrubbingStarted):t.fire(Yt._scrubbingEnded)}else!1===o?t.fire(Yt._playButtonPressed):t.fire(Yt._pauseButtonPressed)}}})(o)),(e=>{const{events:t}=e,n=(t,n)=>{e.set(e=>({user:d(d({},e.user),{},{[t]:n})}))};return t.on(Yt._liked,()=>n("liked",!0)),t.on(Yt._unliked,()=>n("liked",!1)),t.on(Yt._addedToWatchLater,()=>n("watchLater",!0)),t.on(Yt._removedFromWatchLater,()=>n("watchLater",!1)),t.on(Yt._configChanged,(t,n)=>{e.set(()=>({user:dd({config:n})}))}),{user:dd(e),setUser:(i,o)=>{if("liked"!==i||!0!==o)if("watchLater"!==i||!0!==o)if("collected"!==i)if("shared"!==i)n(i,o);else{const{share:n}=e.config.embed.settings,i=(null==n?void 0:n.embed_only)?Yt._embedButtonPressed:Yt._shareButtonPressed;t.fire(i)}else t.fire(Yt._collectionsButtonPressed);else t.fire(Yt._watchLaterButtonPressed);else t.fire(Yt._likeButtonPressed)}}})(o)),(e=>{const{set:t,get:n,events:i,config:o,subscribe:r}=e,a=pd(e);function s(e){e&&n().vod.vodButtonVisible?t(e=>({vod:d(d({},e.vod),{},{vodButtonVisible:!1})})):e||!n().vod.isVOD||n().vod.vodButtonVisible||t(e=>({vod:d(d({},e.vod),{},{vodButtonVisible:!0})}))}return r(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.overlay},e=>{s(e)}),r(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.ad},e=>s(e)),i.on(Yt._configChanged,(n,i)=>{t(()=>({vod:pd(d(d({},e),{},{config:i}))}))}),{vod:a,setVod:(e,n)=>{if("purchased"!==e||!0!==n)t(t=>({vod:d(d({},t.vod),{},{[e]:n})}));else{const[e]=o.video.vod.purchase_options;i.fire(Yt._vodButtonPressed,e.product_id)}}}})(o)),(e=>{const{set:t,get:n,events:i,config:o}=e,r=Il(e),a=(e,i)=>{if("purpose"!==e)t(t=>({overlay:d(d({},t.overlay),{},{[e]:i})}));else{const e=n().overlay.purpose===i?ta.EMPTY:i;t(t=>({overlay:d(d({},t.overlay),{},{purpose:e})}))}};return i.on(Yt._overlayOpened,e=>{a("purpose",e)}),i.on(Yt._overlayClosed,()=>{a("purpose",ta.EMPTY)}),i.on(Mt._showOverlay,e=>{sa(e)&&i.fire(Yt._overlayOpened,e)}),i.on(Yt._overlayCloseButtonPressed,()=>{sa(n().overlay.purpose)&&i.fire(Yt._overlayClosed)}),{overlay:r,setOverlay:(t,r)=>{if("purpose"!==t||r!==ta.SHARE){if("purpose"===t&&r===ta.EMPTY){if(sa(n().overlay.purpose))return void i.fire(Yt._overlayClosed);r=aa(e.element)}a(t,r)}else{var s;const{embed:e}=o,t=(null==(s=e.settings.share)?void 0:s.embed_only)?Yt._embedButtonPressed:Yt._shareButtonPressed;i.fire(t)}}}})(o)),(e=>{const{set:t,events:n}=e,i=Cl(e);return n.on(Yt._configChanged,(n,i)=>{t(()=>({title:Cl(d(d({},e),{},{config:i}))}))}),{title:i}})(o)),(e=>{const{events:t,set:n}=e,i=_d(e);return t.on(Yt._configChanged,(e,t)=>{n(()=>({badge:_d({config:t})}))}),{badge:i,setBadge:(e,i)=>{"id"!==e?((e,t)=>{n(n=>({badge:d(d({},n.badge),{},{[e]:t})}))})(e,i):t.fire(Yt._badgePressed,i)}}})(o)),(e=>{const{set:t,events:n}=e,i=(e,n)=>{t(t=>({chapters:d(d({},t.chapters),{},{[e]:n})}))},o=vd(e),r=({backbone:e})=>{if(e.chaptersTrack){const t=()=>n.fire(Yt._chapterChanged,null==e?void 0:e.currentChapterID);e.chaptersTrack.addEventListener("cuechange",t)}};return r(e),n.on(Yt._chapterChanged,e=>{t(t=>({chapters:d(d({},t.chapters),{},{activeChapterId:e})}))}),n.on(_.CHAPTER_CUES_UPDATED,()=>i("chapters",Array.from(e.backbone.chapters))),n.on(Yt._configChanged,()=>{t(()=>({chapters:vd(e)})),r(e)}),{chapters:o,setChapters:(e,t,o)=>{"activeChapterId"!==e||"string"!=typeof t?i(e,t):n.fire(Yt._chapterSeekAttempted,parseFloat(t)+.001,null==o?void 0:o.type)}}})(o)),(e=>{const{set:t,get:n,events:i,backbone:o}=e,r=ci(),a=e=>{var i,r;const a=fd(o.textTracks,null==(i=n())||null==(r=i.liveEvent)?void 0:r.isLiveEvent,e);t(e=>({captions:d(d({},e.captions),a)}))},s=md(e);return i.on(Yt._captionsChanged,e=>{a(e)}),i.on(_.TEXT_TRACKS_AVAILABLE,()=>{a()}),i.on(Yt._configChanged,()=>{t(()=>({captions:md(e)}))}),i.on(y,(e,n=[])=>{o.enabledTextTrack&&"disabled"!==(null==e?void 0:e.mode)&&t(e=>({captions:d(d({},e.captions),{},{activeCues:fe(n)})}))}),i.on(Mt._turnCaptionsOff,()=>{t(e=>({captions:d(d({},e.captions),{},{activeCues:[]})}))}),{captions:s,setCaptions:(n,o)=>{if("activeTextTrackId"===n)return"off"!==o&&o?void i.fire(Mt._turnCaptionsOn,o):void i.fire(Mt._turnCaptionsOff);if(qo.hasOwnProperty(n)){const a=r[n];return i.fire(Mt._changeCaptionsStyles,a,o),void t(t=>({captions:d(d({},t.captions),hd(e))}))}((e,n)=>{t(t=>({captions:d(d({},t.captions),{},{[e]:n})}))})(n,o)},resetCaptionsStyles:()=>{i.fire(Mt._resetCaptionsStyles),t(t=>({captions:d(d({},t.captions),hd(e))}))}}})(o)),(e=>{const{events:t,set:n}=e,i=Ed(e);t.on(Yt._configChanged,()=>{n(()=>({liveEvent:Ed(e)}))});const{EVENT_ACTIVE:o,EVENT_PENDING:r,EVENT_STARTED:a,EVENT_ENDED:s}=I,l={[o]:yd.active,[r]:yd.pending,[a]:yd.started,[s]:yd.ended};Object.keys(l).forEach(e=>t.on(e,()=>n(t=>({liveEvent:d(d({},t.liveEvent),wd(l[e]))}))));const{ARCHIVE_STARTED:c,ARCHIVE_DONE:u,ARCHIVE_ERROR:p}=I,_={[c]:bd.started,[u]:bd.done,[p]:bd.error};return Object.keys(_).forEach(e=>t.on(e,()=>n(t=>({liveEvent:d(d({},t.liveEvent),Cd(_[e]))})))),t.on(I.LIVE_STATS_SUCCESS,({viewerCount:e})=>{n(t=>({liveEvent:d(d({},t.liveEvent),{},{viewerCount:nt(e),liveStatsRequestSucceeded:!0})}))}),t.on(I.LIVE_STATS_FAILURE,()=>{n(e=>({liveEvent:d(d({},e.liveEvent),{},{liveStatsRequestSucceeded:!1})}))}),{liveEvent:i,setLiveEvent:(e,t)=>{n(n=>({liveEvent:d(d({},n.liveEvent),{},{[e]:t})}))}}})(o)),(e=>{const{events:t,set:n}=e;return t.on(Yt._webinarRegistrantBlocked,()=>{n(e=>({webinar:d(d({},e.webinar),{},{webinarRegistrantBlocked:!0})}))}),t.on(Yt._webinarRegistrantUnblocked,()=>{n(e=>({webinar:d(d({},e.webinar),{},{webinarRegistrantBlocked:!1})}))}),{webinar:{webinarRegistrantBlocked:!1},setWebinar:(e,t)=>{n(n=>({webinar:d(d({},n.webinar),{},{[e]:t})}))}}})(o)),(e=>{const{set:t,events:n}=e,i=Td(e),o=e=>{e.embed.wirewax&&n.once(Yt._interactiveReady,({hotspots:e})=>{t(t=>({interactive:d(d({},t.interactive),{},{hotspots:e,ready:!0})}))})};return o(e.config),n.on(Yt._configChanged,(n,i)=>{n&&(n=>{o(n),t(()=>({interactive:Td(e)}))})(i)}),{interactive:i,setInteractive:(e,n)=>{t(t=>({interactive:d(d({},t.interactive),{},{[e]:n})}))}}})(o)),(e=>{const{set:t,events:n,config:i}=e;return n.on(Yt._configChanged,()=>{t(()=>({cuePoints:{cuePoints:[]}}))}),i.embed.on_site&&(n.on(Yt._cuePointAdded,e=>{t(t=>{const n=t.cuePoints.cuePoints.concat(e);return{cuePoints:d(d({},t.cuePoints),{},{cuePoints:n})}})}),n.on(Yt._cuePointRemoved,e=>{t(t=>{const n=t.cuePoints.cuePoints.filter(t=>t.id!==e.id);return{cuePoints:d(d({},t.cuePoints),{},{cuePoints:n})}})})),{cuePoints:{cuePoints:[]},setCuePoints:(e,n)=>{t(t=>({cuePoints:d(d({},t.cuePoints),{},{[e]:n})}))}}})(o)),(e=>{const{set:t,get:n,events:i,subscribe:o,element:r,addABTest:a,config:s}=e,l={purpose:Ld.EMPTY};let c=function(e){const{request:t,video:n,embed:i}=e.config,{qoe_survey_forced:o,ott:r}=t.flags,{qoe_survey_vote:a}=t.cookie,{duration:s,live_event:l}=n;return!(!o&&(s<60&&!l||!la(i)||r||ir(7776e6)<a/1e3||!(Math.random()<.01)))}(e);const u=(e,n)=>{t(t=>({toast:d(d({},t.toast),{},{[e]:n})}))},p=()=>{var e,t;c&&(null==(e=n())||null==(t=e.toast)?void 0:t.purpose)!==Ld.QOE_SURVEY&&(e=>{if(!e)return!1;const t=e.getBoundingClientRect(),n=t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth),i="visible"===document.visibilityState;return n&&i})(r)&&(Math.random()>Ad&&!s.request.flags.qoe_survey_forced?a({test:Sd,group:kd.control}):(a({test:Sd,group:kd.variant}),u("purpose",Ld.QOE_SURVEY),i.fire(Yt._qoeSurveyPresented),c=!1))};return o(e=>{var t;return null==e||null==(t=e.playback)?void 0:t.playInitiated},e=>{var t,i,o,r;const a=function(e,t){return t?6e5:Math.round(.4*e*1e3)}(null==(t=n())||null==(i=t.playback)?void 0:i.duration,null==(o=n())||null==(r=o.liveEvent)?void 0:r.isLiveEvent);e&&a&&setTimeout(p,a)}),{toast:l,setToast:u}})(o)),(e=>{const{set:t}=e;return{reactions:{showReactionsOnProgressBar:!0},setReactions:(e,n)=>{t(t=>({reactions:d(d({},t.reactions),{},{[e]:n})}))}}})(o)),{},{config:r,element:a,name:(null==s?void 0:s.name)||Io.VimeoPlayer,uuid:l,verifyConfig:c,events:v,subscribe:i})})),children:t}):null};const Nd=({children:e,text:t,visible:n=!0})=>{const i=He(t),[r,a]=xe(!1),[s,l]=xe(!1),c=()=>{s||l(!0)},u=()=>{r&&(c(),a(!1))},p=()=>{r||o.touch||!n||(c(),a(!0))},_=Ve(()=>{s&&l(!1)},[s]),v=d({className:"LabeledButton_module_box__e0f241d2",onMouseEnter:p,onMouseLeave:u,onFocus:p,onBlur:u},Or(()=>{r?u():p()})),m=d({className:"LabeledButton_module_labeledButton__e0f241d2"},Or(t=>{u(),e.props.onClick&&e.props.onClick(t)})),f=`${wl(250)} transform 250 ease-out`,h={visible:r,styleOverrides:{enterActive:{transform:"translateX(0)",transition:f},exitActive:{transform:"translateX(5px)",transition:f}},duration:n?250:0};return i.current!==t&&(s?h.onFaded=_:i.current=t),Ie("div",d(d({},v),{},{children:[Ie(Tl,d(d({},h),{},{children:Ie("label",d(d({},m),{},{role:"presentation",children:Ie("span",{children:i.current})}))})),e]}))},Md=Fe((e,t)=>{let{on:n,label:i,icon:o,onClick:r,className:a="",children:s}=e,l=Ne(e,["on","label","icon","onClick","className","children"]);return Ie(Oc,d(d({ref:t,size:da.SM,icon:o,"aria-label":i,onClick:r,className:`${Xr.EXCLUDE_GLOBAL_BUTTON_STYLES} ${n&&Kr.ON} ${a}`},l),{},{children:s}))}),Dd=()=>{const e=Id(e=>e.embed.collections),t=Id(e=>e.setUser);return e&&Ie(Nd,{text:"Add to collections",children:Ie(Md,{label:"Add to collections",className:Kr.COLLECTIONS_BUTTON,onClick:()=>t("collected",!0),icon:Ie(tc,{name:Jl.COLLECTIONS,className:Kr.COLLECTIONS_ICON,focusable:"false"})})})},xd=()=>{const e=Id(e=>e.setUser),t=Id(e=>e.user.liked);let n=t?"Unlike":"Like",i=n;return Id(e=>e.user.loggedIn)||(i="Like (this opens in a new window)"),Id(e=>e.embed.like)&&Ie(Nd,{text:n,children:Ie(Md,{label:i,className:Kr.LIKE_BUTTON,on:t,icon:Ie(tc,{name:t?Jl.HEART_FILLED:Jl.HEART,className:Kr.LIKE_ICON,focusable:"false"}),"data-like-button":!0,onClick:()=>e("liked",!0)})})};const Bd=()=>{const e=Id(e=>e.setOverlay),t={share:Id(e=>e.embed.embedOnlyShare)?"Embed":"Share"};return Id(e=>e.embed.share)&&Ie(Nd,{text:t.share,children:Ie(Md,{label:t.share,"data-share-button":!0,onClick:()=>e("purpose",ta.SHARE),icon:Ie(tc,{name:Jl.PAPER_PLANE,className:"share-icon ShareButton_module_shareIcon__da819942",focusable:"false"})})})};const Vd=()=>{const{vodLabel:e,purchased:t,isExpiring:n,vodButtonVisible:i}=Id(e=>e.vod),o=Id(e=>e.setVod),r=Or(()=>o("purchased",!0));return i&&Ie("div",d(d({},r),{},{className:`VODButton_module_vodButtonContainer__65824b9e ${n?"VODButton_module_expiring__65824b9e":""}`,"data-vod-expiring":n,"data-vod-purchased":t,"data-vod-button":!0,children:Ie(Oc,{size:da.SM,iconPosition:pa.RIGHT,className:`${Xr.EXCLUDE_GLOBAL_BUTTON_STYLES} ${Kr.VOD_BUTTON} VODButton_module_vodButton__65824b9e ${t&&Kr.ON}`,"data-vod-button":!0,icon:Ie(tc,{name:Jl.ONDEMAND,className:Kr.VOD_ICON,"data-vod-icon":!0}),children:Ie("span",{"data-vod-button-label":!0,children:e})})}))},Ud=()=>{const e=Id(e=>e.embed.watchLater),t=Id(e=>e.user.watchLater),n=Id(e=>e.user.loggedIn),i=Id(e=>e.setUser);let o=t?"Remove from Watch Later":"Add to Watch Later",r=o;return n||(r="Add to Watch Later (this opens in a new window)"),e&&Ie(Nd,{text:o,children:Ie(Md,{label:r,className:Kr.WATCH_LATER_BUTTON,on:t,onClick:()=>i("watchLater",!0),icon:Ie(tc,{name:t?Jl.CLOCK_FILLED:Jl.CLOCK,className:Kr.WATCH_LATER_ICON,focusable:"false"}),"data-watch-later-button":!0})})};const Fd=({onClick:e})=>{const{module:t,load:n,readyState:i}=zc(function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(Ie){return Promise.reject(Ie)}}}((function(){return import("./EmojiPicker.lazy.module.js")})));Oe(()=>{n()},[n]);const o=null==t?void 0:t.EmojiPicker;return Ie("div",{className:"EmojiPickerLoader_module_emojiPicker__e9d1700e","data-emoji-picker":!0,children:[(i===Yc.LOADING||i===Yc.ERROR)&&Ie(Bc,{className:"EmojiPickerLoader_module_spinner__e9d1700e"}),i===Yc.LOADED&&Ie(o,{closeEmojiPicker:e})]})};const Hd=()=>{const e=Id(e=>e.user.loggedIn),[t,n]=xe(!1);let i="React";return e?Ie("div",{className:"ReactionButton_module_emojiBar__00afa452",children:[Ie(Nd,{text:"React",visible:!t,children:Ie(Md,{label:i,icon:Ie(tc,{name:Jl.REACT,focusable:"false","data-reaction-icon":!0}),"data-reaction-button":!0,onClick:()=>{n(e=>!e)}})}),t&&Ie(Fd,{onClick:()=>n(!1)})]}):(i="React (this opens in a new window)",null)},qd=()=>{const e=Id(e=>e.displayList.sideDock),t=Id(e=>e.setAppearance),n=Id(e=>e.appearance.fullscreen),i=Id(e=>e.displayList.outro),o=Id(e=>e.vod.vodButtonVisible),r=Id(e=>e.vod.purchased),a=Id(e=>e.embed.reaction),s={className:`${Kr.VP_SIDEDOCK} SideDock_module_root__07ab40b6 ${i?"SideDock_module_outroVisible__07ab40b6":""} ${n?"SideDock_module_fullscreen__07ab40b6":""}`,onPointerEnter:()=>t("mousedOverSidedock",!0),onMouseEnter:()=>t("mousedOverSidedock",!0),onPointerLeave:()=>t("mousedOverSidedock",!1),onMouseLeave:()=>t("mousedOverSidedock",!1)};return o&&!r?Ie("div",d(d({},s),{},{"data-sidedock":!0,children:[Ie(Vd,{}),Ie(Tl,{visible:e,children:Ie("div",{className:"SideDock_module_sidedockInner__07ab40b6","data-sidedock-inner":!0,children:[Ie(xd,{}),Ie(Ud,{}),Ie(Dd,{}),Ie(Bd,{})]})})]})):Ie(Tl,{visible:e,children:Ie("div",d(d({},s),{},{"data-sidedock":!0,children:[o&&r&&Ie(Vd,{}),a&&Ie(Hd,{}),Ie(xd,{}),Ie(Ud,{}),Ie(Dd,{}),Ie(Bd,{})]}))})};let $d,Wd;!function(e){e.MARKER_SEEKED="seeked",e.MARKER_ENDED="ended",e.MARKER_UPSWITCH="upswitch",e.MARKER_DOWNSWITCH="downswitch",e.MARKER_SWITCH_COMPLETE="switchcomplete",e.MARKER_RESIZE="resize",e.MARKER_SCANNER_CHANGE="scannerchange",e.MARKER_FILE_CHANGE="filechange",e.MARKER_STALLED="stalled",e.MARKER_BUFFER_GAP_JUMP="buffergapjump",e.MARKER_BUFFER_GAP_JUMP_PREVENT="buffergapjumpprevent",e.MARKER_STALL_JUMP="stalljump"}($d||($d={})),function(e){e.MARKER_SEEKED="#0088cc",e.MARKER_ENDED="#503873",e.MARKER_UPSWITCH="#5a9e02",e.MARKER_DOWNSWITCH="#d93636",e.MARKER_RESIZE="#FF8A00",e.MARKER_SCANNER_CHANGE="#e9ff00",e.MARKER_FILE_CHANGE="#b5d3e2",e.MARKER_STALLED="#f44283"}(Wd||(Wd={}));const Yd=Object.entries($d).reduce((e,[t,n])=>(e[n]=Wd[t],e),{}),Gd=({max:e=1,timeSeries:t=[],debugMarkers:n=[]})=>{const i=t.length,o=i<100?0:i-100,r=t[o],a=t[i-1],s=r?r.time:0,l=a?a.time:0,c=t.slice(o).map(t=>{let n=(t.time-s)/(l-s)*250,i=14-14*t.value/e;return isNaN(i)&&(i=0),isNaN(n)&&(n=0),`${n},${function(e,t,n){return Math.min(Math.max(e,0),14)}(i)}`}).join(" ");return Ie("svg",{width:250,height:14,viewBox:"0 0 250 14",children:[Ie("g",{children:Ie("polyline",{stroke:"white",fill:"none",points:c})}),Ie("g",{children:!!n.length&&n.filter(e=>e.t>=s&&e.t<=l).map((e,t)=>{let n=(e.t-s)/(l-s)*250;return isNaN(n)&&(n=0),Ie("g",{children:Ie("line",{className:"BandwidthSeriesDisplay_module_marker__718ed0d2",x1:n,y1:"0",x2:n,y2:14,strokeWidth:"1",stroke:Yd[e.type]})},`${e.t}-${t}`)})})]})};const zd=({title:e="",children:t})=>Ie("p",{children:[Ie("span",{children:e}),Ie("b",{children:t})]}),jd=({payloadId:e,showSessionId:t})=>{const{codec:n,isLive:i,isDash:o,delivery:r,resolution:a,embedSize:s,drmEnabled:l,drmFastly:c,sessionId:d,ecdnVendor:u,p2pSources:p,p2pOffload:_,totalFrames:v,liveLatency:m,currentTime:f,bufferEnd:h,bufferAhead:g,droppedFrames:b,vrHeadsetName:y,liveSessionID:E,bandwidthKbps:C,bandwidthMinKbps:w,bandwidthMaxKbps:T,separateAudioVideo:L,bandwidthSeriesData:S,droppedFramesPercent:k}=Id(e=>e.debug),{max:A,debugMarkers:P,timeSeries:I}=S;return Ie("div",{className:"DebugValues_module_values__cf9b5b97",children:[!!r&&Ie(zd,{title:"Delivery:",children:r}),!!n&&Ie(zd,{title:"Codec:",children:n}),!!a&&Ie(zd,{title:"Playing:",children:a}),!!s&&Ie(zd,{title:"Embed Size:",children:s}),o&&Ie(zd,{title:"Separate AV:",children:`${L}`}),(o||i)&&Ie(zd,{title:"Dropped Frames:",children:[b," / ",v," - ",k]}),!!y&&Ie(zd,{title:"VR Hardware:",children:y}),i&&Ie(zd,{title:"Live Latency:",children:m}),i&&!!E&&Ie(zd,{title:"Live Session ID:",children:E}),!!u&&Ie(Ue,{children:[Ie(zd,{title:"eCDN Vendor:",children:u}),Ie(zd,{title:"Peers - P2P Delivery:",children:[p," - ",_]})]}),l&&Ie(zd,{title:"DRM:",children:["Enabled; Fastly DRM: ",`${c}`]}),Ie(zd,{title:"Playhead / Buffer:",children:[f," / ",h," / ",g]}),(o||i)&&Ie(Ue,{children:[Ie("p",{children:[Ie("span",{children:"Bandwidth:"}),Ie("b",{children:C}),Ie("div",{className:"DebugValues_module_bandwidthMinMax__cf9b5b97",children:["(",Ie("b",{className:"DebugValues_module_bandwidthMin__cf9b5b97",children:w}),Ie("b",{className:"DebugValues_module_bandwidthMax__cf9b5b97",children:T}),")"]})]}),Ie("div",{className:"DebugValues_module_timeSeries__cf9b5b97",children:Ie(Gd,{max:A,debugMarkers:P,timeSeries:I})})]}),d&&t&&Ie("p",{children:[Ie("span",{children:"Debug Key:"}),Ie("br",{}),Ie("b",{className:"DebugValues_module_sessionId__cf9b5b97",children:d})]}),e&&Ie("p",{children:[Ie("span",{children:"Debug Key:"}),Ie("br",{}),Ie("b",{className:"DebugValues_module_payloadId__cf9b5b97",children:e})]})]})};let Kd;const Xd=Fe(({onCopyFailed:e,labelResetDelay:t,className:n},i)=>{const[o,r]=xe(!1),a=Id(e=>e.debug),{bandwidthSeriesData:s}=a,l=Ne(a,["bandwidthSeriesData"]);return Ie(Oc,{ref:i,className:n,onClick:()=>{const n={version:2,tpl:l,mark:s.debugMarkers};clearTimeout(Kd);try{const o=btoa(JSON.stringify(n));Nr(o)?(r(!0),Kd=setTimeout(()=>{clearTimeout(Kd),r(!1)},t)):e(),i.current.focus()}catch(Ie){e()}},color:ua.CUSTOM,children:o?"Copied":"Copy Debug Payload"})});let Zd;function Qd(){}const Jd=({onSendSuccess:e,labelResetDelay:t,className:n})=>{const{player_url:i,request:o}=Id(e=>e.config),[r,a]=xe(!1),[s,l]=xe(!1),c=Id(e=>e.debug),{bandwidthSeriesData:d}=c,u=Ne(c,["bandwidthSeriesData"]),{signature:p,expires:_,timestamp:v}=o,m=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(Ie){return Promise.reject(Ie)}}}((function(){const{clipId:n,payloadId:o}=u,r=`https://${i}${`/debug_payload/${n}/${o}?s=${p}&expires=${_}&time=${v}`}`,s={version:2,tpl:u,mark:d.debugMarkers};return clearTimeout(Zd),function(e){if(e&&e.then)return e.then(Qd)}(function(t,n){try{var i=function(t,n){try{var i=function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(je({url:r,method:"post",json:s,timeout:1e4}).json(),(function({ID:t}){e(t),a(!0)}))}catch(Ie){return n()}return i&&i.then?i.then(void 0,n):i}(0,(function(){l(!0)}))}catch(Ie){return n(!0,Ie)}return i&&i.then?i.then(n.bind(null,!1),n.bind(null,!0)):n(!1,i)}(0,(function(e,n){return Zd=setTimeout(()=>{clearTimeout(Zd),a(!1),l(!1)},t),function(e,t){if(e)throw t;return t}(e,n)})))}));let f="Send Debug Payload";return r?f="Sent":s&&(f="Something Went Wrong"),Ie(Oc,{className:n,onClick:m,color:ua.CUSTOM,children:f})},eu=()=>{const e=Id(e=>e.name),t=Id(e=>e.appearance.playerBreakpoint),n=Id(e=>e.displayList.debugPanel),i=Id(e=>e.setDisplayList),{isDNTEnabled:o,hideCloseButton:r,isCopyDisabled:a,clipId:s}=Id(e=>e.debug),[l,c]=xe(void 0),[u,p]=xe(!1),[_,v]=xe(null),m=He(null),f=He(null),h=He(null),g=!r&&e!==Io.ChromelessPlayer,b=!a&&e!==Io.ChromelessPlayer,y=Vr("DebugPanel_module_root__56861123",Ac.roundedBox,(t===ca.XS||t===ca.XXS)&&"DebugPanel_module_smallPlayer__56861123");return Oe(()=>{n?h.current?h.current.focus():f.current&&f.current.focus():_&&(_.focus(),document.body.classList.add("showfocus"))},[n,_]),n&&Ie("div",{ref:m,className:y,onFocus:e=>{var t;(null==(t=m.current)?void 0:t.contains(e.relatedTarget))||v(e.relatedTarget)},children:[s&&Ie("p",d(d({},Or(()=>{Nr(`${s}`)})),{},{children:[Ie("span",{children:"Clip ID: "}),Ie("b",{className:"DebugPanel_module_clipId__56861123",children:s})]})),Ie(jd,{payloadId:l,showSessionId:u}),Ie("input",{type:"text",className:"DebugPanel_module_debugCode__56861123"}),b&&Ie(Ue,{children:[Ie(Xd,{labelResetDelay:1500,onCopyFailed:()=>p(!0),className:"DebugPanel_module_button__56861123",ref:h}),Ie(Jd,{labelResetDelay:1500,onSendSuccess:e=>c(e),className:"DebugPanel_module_button__56861123"})]}),g&&Ie("button",d(d({},Or(()=>i("debugPanel",!1))),{},{className:"DebugPanel_module_closeButton__56861123","aria-label":"Close stats debug panel",ref:f,children:Ie(tc,{name:Jl.DISMISS_X})})),!!o&&"No Debug Key available as Do Not Track is enabled."]})};const tu=()=>{const{link:e,img:t,margin:n,width:i,height:o,name:r,id:a}=Id(e=>e.badge),s=Id(e=>e.setBadge),l=Id(e=>e.displayList.badge),c={};return n&&Object.assign(c,{margin:n}),Ie(Tl,{visible:l,children:Ie("div",{className:`${Kr.VP_BADGE} Badge_module_badge__5ccfc853`,style:c,"data-badge":!0,children:Ie(Ql,{href:e,onClick:()=>s("id",a),targetBlank:!0,className:`Badge_module_badgeLink__5ccfc853 ${Ac.focusable}`,children:Ie("img",{src:t,width:i,height:o,alt:`${r} Badge`})})})})};var nu={tagsWrapper:"TitleTags_module_tagsWrapper__6695c0c0",tag:"TitleTags_module_tag__6695c0c0",titleTag:"TitleTags_module_titleTag__6695c0c0",dolbyVisionTag:"TitleTags_module_dolbyVisionTag__6695c0c0",bylineTag:"TitleTags_module_bylineTag__6695c0c0",lonerTag:"TitleTags_module_lonerTag__6695c0c0"};const iu=({is360:e,hasHDR:t,hasHDR10Plus:n,hasDolbyVision:i,channelLayout:o,className:r})=>{const a="5.1"===o||"7.1"===o,s=o.startsWith("ambisonic");return Ie("div",{className:nu.tagsWrapper,"data-title-tags":!0,children:[e&&Ie("span",{className:`${nu.tag} ${nu[r]}`,children:s?"360 ambisonic":"360"}),t&&!n&&Ie("span",{className:`${nu.tag} ${nu[r]}`,children:"HDR"}),n&&Ie("span",{className:`${nu.tag} ${nu[r]}`,children:"HDR10+"}),i&&Ie("span",{className:`${nu.tag} ${nu.dolbyVisionTag} ${nu[r]}`,children:Ie(tc,{name:Jl.DOLBY_VISION})}),a&&Ie("span",{className:`${nu.tag} ${nu[r]}`,children:o})]})};const ou=()=>{const{displayTitle:e,displayPortrait:t,ownerLinkUrl:n,targetBlank:i,portraitImg:o,titleLinkUrl:r,title:a,ownerName:s,is360:l,hasHDR:c,hasHDR10Plus:d,hasDolbyVision:u,channelLayout:p,bylineLinkUrl:_,displayByline:v}=Id(e=>e.title),m=Id(e=>e.displayList.title),f=Id(e=>e.displayList.badge),[h,g]=xe(t&&!f);return Oe(()=>{let e;return!f&&t?e=setTimeout(()=>g(!0),250):g(!1),()=>clearTimeout(e)},[f,t]),Ie(Ue,{children:[Ie(tu,{}),Ie(Tl,{visible:m,children:Ie("div",{className:`${Kr.VP_TITLE} Title_module_title__1f69cee0`,"aria-hidden":!m,children:Ie("header",{className:"Title_module_header__1f69cee0",children:[h&&Ie("div",{className:"Title_module_portrait__1f69cee0",children:Ie(Ql,{href:n,targetBlank:i,variant:"minimal",className:`Title_module_portraitLink__1f69cee0 ${Ac.focusableCircle}`,children:Ie("img",{src:o,alt:"Link to video owner's profile",width:"60",height:"60","data-trackClick":"video-portrait"})})}),Ie("div",{className:"Title_module_headers__1f69cee0",children:[e&&Ie(Ql,{href:r,targetBlank:i,"data-track-click":"video-title",variant:"minimal",className:Ac.focusable,children:Ie(Sc,{sizeMap:{[ca.XXS]:va.MD,[ca.XS]:va.LG,[ca.SM]:va.XL},className:"Title_module_headerText__1f69cee0 Title_module_mainTitle__1f69cee0",children:[a,Ie(iu,{is360:l,hasHDR:c,hasHDR10Plus:d,hasDolbyVision:u,channelLayout:p,className:Xr.TITLE_TAG})]})}),v&&Ie(Ql,{href:_,targetBlank:i,variant:"minimal",className:`Title_module_subtitleLink__1f69cee0 ${Ac.focusable}`,children:Ie(Sc,{className:"Title_module_headerText__1f69cee0 Title_module_subtitle__1f69cee0",children:[s,!a&&Ie(iu,{is360:l,hasHDR:c,hasHDR10Plus:d,hasDolbyVision:u,channelLayout:p,className:Xr.BYLINE_TAG})]})}),!a&&!v&&Ie(iu,{is360:l,hasHDR:c,hasHDR10Plus:d,hasDolbyVision:u,channelLayout:p,className:Xr.TITLE_TAG})]})]})})})]})};const ru=({id:e,timecode:t,className:n,teaser:i,url:o,imageUrl:r,headline:a,inView:s})=>{const l=Id(e=>e.appearance.isVerticalVideo),c=Id(e=>e.setCards),d=Id(e=>e.setPlayback),u=()=>{c("hoveredCard",null),c("cardPressed",e),o&&d("paused",!0)},p=Vr("Card_module_card__5758713b",n,s&&"Card_module_active__5758713b",r&&"Card_module_hasThumbnail__5758713b",l&&"Card_module_vertical__5758713b");return Ie("div",{className:p,onMouseEnter:()=>c("hoveredCard",t),onMouseLeave:()=>c("hoveredCard",null),onClick:u,onKeyUp:e=>{"Enter"===e.key&&u()},role:"link",tabIndex:-1,children:Ie(Ql,{href:o,className:"Card_module_inner__5758713b",children:[!!r&&Ie("div",{className:"Card_module_imageWrap__5758713b",children:Ie("img",{className:"Card_module_image__5758713b",src:r,alt:a})}),Ie("div",{className:"Card_module_body__5758713b",children:[Ie(Sc,{size:va.MD,className:"Card_module_text__5758713b Card_module_title__5758713b",children:a}),!!i&&Ie(Sc,{weight:ma.NORMAL,element:"p",className:"Card_module_text__5758713b Card_module_detail__5758713b",children:i})]}),!!o&&Ie("div",{className:"Card_module_popOutWrapper__5758713b",children:Ie(tc,{name:Jl.POP_OUT,className:"Card_module_popOut__5758713b"})})]})})};const au=()=>{const e=Id(e=>e.cards.cardsMap),t=Id(e=>e.cards.displayedCard),n=Id(e=>e.displayList.cards),i=Id(e=>e.displayList.overlay),o=e=>t===e&&!i;return n&&Ie("div",{className:"Cards_module_cardsWrapper__e224f7b9",children:e.values().map(e=>Ie(ru,{id:e.id,timecode:e.timecode,className:e.className,teaser:e.teaser,url:e.url,imageUrl:e.imageUrl,headline:e.headline,inView:o(e.timecode)},e.id))})};const su=({show:e})=>{const{buffering:t,currentTime:n,loadedTime:i,currentFragment:o}=Id(e=>e.playback),r=Wr(n,o),a=Wr(i,o);return e&&Ie("div",{className:"TinyProgressBar_module_tinyBar__f8a567ff",children:Ie("svg",{className:"TinyProgressBar_module_tinyBarSVG__f8a567ff",width:"100%",height:"100%",viewBox:"0 0 70 40",focusable:"false",children:[Ie("defs",{children:[Ie("clipPath",{id:"rounded-border",children:Ie("rect",{height:"100%",width:"100%",x:"0",y:"0",rx:"5"})}),Ie("pattern",{id:"tiny-buffer","data-tiny-buffer-pattern":!0,className:"TinyProgressBar_module_bufferPattern__f8a567ff",patternUnits:"userSpaceOnUse",x:"0",y:"0",width:"10",height:"10",viewBox:"0 0 10 10",children:[Ie("line",{x1:"5",y1:"-1",x2:"-5",y2:"10",strokeWidth:"2",strokeLinecap:"butt"}),Ie("line",{x1:"10",y1:"-1",x2:"0",y2:"10",strokeWidth:"2",strokeLinecap:"butt"}),Ie("line",{x1:"15",y1:"-1",x2:"5",y2:"10",strokeWidth:"2",strokeLinecap:"butt"})]})]}),Ie("g",{clipPath:"url(#rounded-border)",children:t?Ie("rect",{className:"TinyProgressBar_module_buffer__f8a567ff",height:"3",width:"110%",x:"0",y:"37",fill:"url(#tiny-buffer)"}):Ie(Ue,{children:[Ie("rect",{className:"TinyProgressBar_module_loaded__f8a567ff","data-tiny-loaded":!0,height:"3",width:Gr(a),x:"0",y:"37"}),Ie("rect",{className:"TinyProgressBar_module_played__f8a567ff","data-tiny-played":!0,height:"3",width:Gr(r),x:"0",y:"37"})]})})]})})};const lu=({className:e,controlBarVisibilityHandlers:t})=>{const n=Id(e=>e.displayList.controlBar),i=Id(e=>e.embed.playbar),o=Id(e=>e.appearance.playerSizeMode),r=Id(e=>e.liveEvent.isLiveEvent),a=Id(e=>e.liveEvent.isStarted),s=Id(e=>e.liveEvent.isArchived),l=Id(e=>e.setPlayback),c=Id(e=>e.controlBar.trailerButtonText),d=!r||a||s,u=o===Oo.TINY||!i,{buttonState:p,setButtonState:_}=Wc(),v=p===Vo.TRAILER,m=ed(p),f={[Vo.PLAY]:{icon:Jl.PLAY,onClick:()=>{l("paused",!1),_(Vo.PAUSE)},label:"Play",className:"PlayButton_module_playIcon__fa23e59d"},[Vo.PAUSE]:{icon:Jl.PAUSE,onClick:()=>{l("paused",!0),_(Vo.PLAY)},label:"Pause",className:"PlayButton_module_pauseIcon__fa23e59d"},[Vo.REPLAY]:{icon:Jl.REPLAY,onClick:()=>{l("paused",!1),_(Vo.PAUSE)},label:"Play",className:"PlayButton_module_replayIcon__fa23e59d"},[Vo.TRAILER]:{icon:Jl.PLAY,onClick:()=>{l("paused",!1)},label:"Play",className:"PlayButton_module_trailerIcon__fa23e59d"}}[p],h=Vr("PlayButton_module_playButtonWrapper__fa23e59d",m===Jc.CENTER&&"PlayButton_module_center__fa23e59d",m===Jc.BOTTOM&&"PlayButton_module_bottom__fa23e59d",v&&"PlayButton_module_trailer__fa23e59d"),g=Vr(Xr.EXCLUDE_GLOBAL_BUTTON_STYLES,"PlayButton_module_playButton__fa23e59d",v&&"PlayButton_module_trailer__fa23e59d",Ac.focusable,e||"");return d&&Ie(Tl,{visible:n,children:Ie("div",{className:h,children:Ie(Cc,{tooltipText:f.label,className:`Tooltip_module_playTooltip__21ae5b80 ${v?"Tooltip_module_trailerPlayTooltip__21ae5b80":""}`,children:Ie(Oc,{className:g,"aria-label":f.label,onClick:f.onClick,icon:Ie(tc,{className:f.className,name:f.icon}),iconSize:da.CUSTOM,color:ua.CUSTOM,onTouchStart:t.onTouchStart,onTouchEnd:t.onTouchEnd,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,children:[Ie(su,{show:u}),v&&Ie("span",{className:"PlayButton_module_text__fa23e59d",children:c||"Watch Trailer"})]})})})})};const cu=Fe((e,t)=>{let{className:n="",icon:i,children:o,tooltipLabel:r,hasTooltip:a=!0,id:s}=e,l=Ne(e,["className","icon","children","tooltipLabel","hasTooltip","id"]);const c=Id(e=>e.appearance.playerBreakpoint),u=Vr(Xr.EXCLUDE_GLOBAL_BUTTON_STYLES,"ControlBarButton_module_controlBarButton__7898f20c",Ac.focusable,n),p=["xl","xxl"].includes(c)?16:8;return a?Ie(Cc,{tooltipText:r,margin:p,children:Ie(Oc,d(d({id:s,color:ua.CUSTOM,size:da.XS,ref:t,className:u,icon:i,iconSize:da.CUSTOM},l),{},{children:o}))}):Ie(Oc,d({id:s,color:ua.CUSTOM,size:da.XS,ref:t,className:u,icon:i,iconSize:da.CUSTOM},l))});const du=()=>{const e=Id(e=>e.appearance.fullscreen),t=Id(e=>e.setAppearance),n=Id(e=>e.embed.fullscreen),i=Id(e=>{var t;return null==(t=e.interactive.hotspots)?void 0:t.length}),r=(n||e)&&!(o.iOS&&i),a=Vr(Kr.FULLSCREEN,"FullscreenButton_module_fullscreen__e0e92a4f"),s={tooltip:e?"Exit full screen":"Fullscreen",exitFullscreen:"Exit full screen",enterFullscreen:"Enter full screen"},l=e?s.exitFullscreen:s.enterFullscreen,c=e?Jl.EXIT_FULLSCREEN:Jl.ENTER_FULLSCREEN;return r&&Ie(cu,{onClick:()=>t("fullscreen",!e),className:a,"aria-label":l,icon:Ie(tc,{name:c}),tooltipLabel:s.tooltip,"data-fullscreen-button":!0})};const uu=Fe(({isMenuDisplayed:e,setMenuDisplayed:t},n)=>{const{onClick:i,onKeyDown:o}=$c(()=>t(!e));return Ie(cu,{ref:n,className:`${Kr.VP_PREFS} PrefsButton_module_prefsButton__61ec289e`,"aria-expanded":e,"aria-label":"Settings",icon:Ie(tc,{name:Jl.GEAR,className:"PrefsButton_module_gearIcon__61ec289e"}),onClick:i,onKeyDown:o,tooltipLabel:"Settings","data-prefs-button":!0})}),pu=()=>{const e=Id(e=>e.appearance.pictureInPictureActive),t=Id(e=>e.playback.pictureInPictureEnabled),n=Id(e=>e.displayList.ad),i=Id(e=>e.setAppearance),o=e?"Exit Picture-in-Picture":"Enter Picture-in-Picture",r=e?Jl.EXIT_PICTURE_IN_PICTURE:Jl.ENTER_PICTURE_IN_PICTURE;return t&&!n&&Ie(cu,{className:Kr.PIP,"aria-label":o,icon:Ie(tc,{name:r,className:e?Kr.ON:""}),onClick:()=>i("pictureInPictureActive",!e),tooltipLabel:"Picture-in-Picture","data-pip-button":!0})};const _u=({children:e,volumeButtonRef:t})=>{const n=He(null),i=Id(e=>e.setPlayback),r=Id(e=>e.setDisplayList),a=Id(e=>e.playback.volume),s=Id(e=>e.playback.muted)?0:a,l=Id(e=>e.playback.supportsSettingVolume),c=Id(e=>e.displayList.controlBar),u=Id(e=>e.appearance.playerSizeMode),p=u===Oo.TINY||u===Oo.MINI,[_,v]=xe(!1),m=100*s,[f,h]=xe(!1),[g,b]=xe(!1),y=_&&l&&!p;Oe(()=>{c||v(!1)},[c]);const E=e=>{A(e)},C=()=>{v(!0),r("menu",!1)},w=e=>{Br(n.current,e)||Br(null==t?void 0:t.current,e)||v(!1),h(!1),document.removeEventListener("mouseup",w),document.removeEventListener("mousemove",E),document.removeEventListener("pointerup",w),document.removeEventListener("pointermove",E)},T=e=>{h(!0),A(e),o.pointerEvents?(document.addEventListener("pointerup",w),document.addEventListener("pointermove",E)):(document.addEventListener("mouseup",w),document.addEventListener("mousemove",E))},L=()=>{f||v(!1)},S=()=>b(!0),k=()=>b(!1);function A(e){let t=e.clientY;e.targetTouches&&e.targetTouches.length&&(t=e.targetTouches[0].clientY,e.preventDefault());const o=function(e){const t=ct(n.current).top,i=ct(n.current).bottom;return pt((i-e)/(i-t),0,1)}(t);i("volume",o)}const P=Vr("VolumeControl_module_volumeControl__7dca4d92",Kr.VOLUME,Ac.focusable),I=Vr("VolumeControl_module_volumeBar__7dca4d92",g||f?"VolumeControl_module_mouseEnteredSlider__7dca4d92":""),R=o.pointerEvents?{onPointerEnter:C,onPointerLeave:L}:{onMouseEnter:C,onMouseLeave:L},O=o.pointerEvents?{onPointerDown:T,onPointerEnter:S,onPointerLeave:k}:{onMouseDown:T,onMouseEnter:S,onMouseLeave:k};return Ie("div",d(d({className:"VolumeControl_module_volumeControlContainer__7dca4d92",onFocus:()=>{v(!0),r("menu",!1)}},R),{},{"data-volume-control-container":!0,children:[e,Ie(Tl,{visible:y,children:Ie("div",d(d({role:"slider",className:P,ref:n,tabIndex:0,"aria-valuenow":s,"aria-valuetext":Math.round(100*s)+"%","aria-label":"Volume (use up/down arrow keys to change)","aria-valuemin":0,"aria-valuemax":1,onBlur:()=>{f||v(!1)},onTouchMove:A},O),{},{"data-volume-control":!0,children:Ie("div",{className:I,children:[Ie("div",{className:"VolumeControl_module_volumeBarFill__7dca4d92",style:{height:`${m}%`}}),Ie("div",{className:"VolumeControl_module_sliderHandle__7dca4d92",style:{bottom:`${m}%`}})]})}))})]}))},vu=()=>{const e=He(),t=Id(e=>e.setPlayback),n=Id(e=>e.playback.volume),i=Id(e=>e.playback.muted);return Id(e=>e.embed.volume)&&Ie(_u,{volumeButtonRef:e,children:Ie(cu,{ref:e,onClick:()=>{i?(t("muted",!1),0===n&&t("volume",1)):i||0!==n?!i&&n>0&&t("muted",!0):t("volume",1)},icon:Ie(tc,!i&&n>0?{name:Jl.VOLUME_ON_FILLED,"data-volume-icon":!0}:{name:Jl.VOLUME_OFF_FILLED,"data-volume-muted-icon":!0}),"aria-label":"Volume (use up/down arrow keys to change)","data-volume-button":!0,hasTooltip:!1})})};const mu=()=>{const e=Id(e=>e.embed.showVimeoLogo),t=Id(e=>e.controlBar.vimeoLogoUrl),n=Id(e=>e.appearance.playerBreakpoint),i=Id(e=>e.appearance.playerSizeMode),o=Id(e=>e.displayList.ad),r=[Oo.MINI,Oo.TINY].includes(i)||[ca.XS,ca.XXS].includes(n),a=Ie(tc,r?{name:Jl.VIMEO_SMALL,"data-vimeo-small-icon":!0}:{name:Jl.VIMEO,"data-vimeo-icon":!0});return e&&!o&&Ie(Ql,{className:Kr.LOGO,tabIndex:"-1",href:t,variant:"minimal",children:Ie(cu,{className:"VimeoLogoButton_module_vimeoLogoButton__3d853800",icon:a,"aria-label":"Watch on vimeo.com",hasTooltip:!1,"data-vimeo-logo-button":!0})})},fu=()=>{const e=Id(e=>e.appearance.showAirPlayPicker),t=Id(e=>e.setAppearance),n=e?"Turn off AirPlay":"Choose an AirPlay device";return Ie(cu,{onClick:()=>t("showAirPlayPicker",!e),className:Kr.AIRPLAY,"aria-label":n,tooltipLabel:"AirPlay","data-airplay-button":!0,icon:Ie(tc,{name:Jl.AIRPLAY,className:e?Kr.ON:""})})},hu=Fe(({isMenuDisplayed:e,setMenuDisplayed:t},n)=>{const{onClick:i,onKeyDown:o}=$c(()=>t(!e));return Ie(cu,{ref:n,className:Kr.VP_CHAPTER_BUTTON,onClick:i,onKeyDown:o,"aria-expanded":e,"aria-label":"Chapters",icon:Ie(tc,{name:Jl.CHAPTERS}),tooltipLabel:"Chapters","data-chapter-button":!0})}),gu=Fe(({isMenuDisplayed:e,setMenuDisplayed:t},n)=>{const i=Id(e=>e.captions.activeTextTrackId),{onClick:o,onKeyDown:r}=$c(()=>t(!e)),a=i&&"off"!==i?Jl.CC_FILLED:Jl.CC;return Ie(cu,{ref:n,className:Kr.CC,"aria-label":"Choose captions","aria-haspopup":!0,icon:Ie(tc,{name:a}),onClick:o,onKeyDown:r,tooltipLabel:"CC/Subtitles","data-cc-button":!0})}),bu=()=>{const e=Id(e=>e.setAppearance),t=Id(e=>e.appearance.stereoscopicEnabled),n=t?"Disable stereoscopic playback":"Enable stereoscopic playback";return Ie(cu,{className:Kr.STEREOSCOPIC,onClick:()=>e("stereoscopicEnabled",!t),"aria-label":n,icon:Ie(tc,{name:Jl.STEREOSCOPIC}),tooltipLabel:"Stereoscopic","data-stereoscopic-button":!0})};const yu=()=>{const e=Vr(Xr.EXCLUDE_GLOBAL_BUTTON_STYLES,"ChromecastButton_module_chromecastButton__9ec33deb","ControlBarButton_module_controlBarButton__7898f20c",Ac.focusable,Kr.VP_CAST_BUTTON);return(()=>{const[e,t]=xe(!1);Oe(()=>{setTimeout(()=>t(!0),500)},[])})(),Ie(Cc,{tooltipText:"GoogleCast",children:Ie("button",{className:e,"aria-label":"Cast",is:"google-cast-button","data-chromecast-button":!0})})},Eu=()=>{const e=Qc(),t=Id(e=>e.displayList.transcript),n=Id(e=>e.setDisplayList),i="Transcript",{onClick:o,onKeyDown:r}=$c(()=>{n("transcript",!t),e(Xc.EMBEDDED_TRANSCRIPT_CLICK,{name:t?"exit_embed_transcript":"open_embed_transcript",copy:i,location:"control_bar",element:"transcript_button",current_transcript_language:""})}),a=Ie(tc,{name:t?Jl.TRANSCRIPT_ON:Jl.TRANSCRIPT_OFF}),s=t?[Qr.TRANSCRIPT_VIEWER,Zr.RIGHT_CONTENT_AREA].join(" "):Zr.RIGHT_CONTENT_AREA;return Ie(cu,{id:Qr.TRANSCRIPT_CONTROL_BAR_BUTTON,onClick:o,onKeyDown:r,icon:a,"aria-label":i,tooltipLabel:i,"aria-controls":s})};const Cu=({className:e})=>{const t=Id(e=>e.displayList.controlBar),n=Id(e=>e.appearance.playerSizeMode)===Oo.TINY,i=Id(e=>e.embed.customLogo),o=Id(e=>e.displayList.ad),{customLogoUrl:r,customLogoImg:a,customLogoSticky:s}=Id(e=>e.embed.customLogoFields),l=Id(e=>e.user.ownerName),c=i&&!n&&!o,d=Vr(Kr.CUSTOM_LOGO,"CustomLogo_module_customLogo__29e363fc",r?"CustomLogo_module_link__29e363fc":"",Ac.focusable,e);return c&&Ie(Tl,{visible:s||t,children:Ie(kc,{classNames:d,imgClassNames:"CustomLogo_module_customLogoImg__29e363fc",url:r,img:a,imgAlt:l})})},wu=({className:e,marker:t})=>{const n=Id(e=>e.setPlayback),i=Id(e=>e.playback.currentFragment),o=(t.startTime-i.startTime)/i.duration*100,r=e=>n("currentTime",e.path[0].dataset.time),a="Seek to "+Math.round(100*t.startTime)/100+" seconds.";return Ie("div",{id:`cuepoint-${t.id}`,className:e,style:{left:`${o}%`},"data-time":t.startTime,role:"button","aria-label":a,tabIndex:0,onClick:r,onKeyUp:e=>{["Space","Enter"].includes(e.code)&&r(e)},"data-cue-point-marker":!0})};const Tu=()=>{const e=Id(e=>e.playback.currentFragment),t=Id(e=>e.cuePoints.cuePoints),n=Vr("CuePointMarkers_module_cuePoints__c121afd2",Ac.focusableMarker,Kr.CUEPOINT),i=t.filter(t=>e.startTime<=t.time&&t.time<=e.endTime).map(e=>({id:e.id,startTime:e.time}));return Ie(Ue,{children:!!i.length&&i.map(e=>Ie(wu,{className:n,marker:e},e.startTime))})};const Lu=()=>{const{currentTime:e,currentFragment:t}=Id(e=>e.playback),n=$r(e,t),i={progressBar:"Progress Bar",ariaText:uo(n)+" of "+uo(t.duration)};return Ie("div",{className:`FocusTarget_module_focusTarget__02e194b8 ${Ac.focusable}`,role:"slider","aria-label":i.progressBar,"aria-valuemin":0,"aria-valuemax":t.duration,"aria-valuenow":Math.round(n),"aria-valuetext":i.ariaText,tabIndex:0,"data-progress-bar-focus-target":!0})};const Su=({hotspot:e,setTabFocusedHotspotMarker:t,setHoverFocusedHotspotMarker:n})=>{const i=Id(e=>e.setPlayback),o=Id(e=>e.playback.currentFragment),r=(e.start-o.startTime)/o.duration,a={label:e.name,id:e.hotspotId,startTime:e.start,left:r},s=Vr("HotspotMarker_module_interactiveMarker__a53a1a54",Kr.VP_INTERACTIVE_MARKER,Ac.focusableMarker);function l(e){i("currentTime",e.path[0].dataset.time,{action:e.type,seekType:"interactive-marker"})}return Ie("div",{className:s,role:"button",style:{left:Gr(r,!1)},"aria-label":null==e?void 0:e.ariaLabel,"data-time":e.start,tabIndex:0,onClick:l,onKeyUp:e=>{["Space","Enter"].includes(e.code)&&l(e)},onMouseEnter:()=>n(a),onMouseLeave:()=>n(null),onFocus:()=>t(a),onBlur:()=>t(null),"data-hotspot-marker":!0})},ku=({hotspots:e,setHoverFocusedHotspotMarker:t,setTabFocusedHotspotMarker:n})=>Ie(Ue,{children:e.map(e=>Ie(Su,{hotspot:e,setTabFocusedHotspotMarker:n,setHoverFocusedHotspotMarker:t},e.start))});const Au=({time:e,left:t,visible:n=!0,disabled:i=!1})=>Ie(Tl,{visible:n,children:Ie("div",{className:"Timecode_module_timecodeContainer__6a968513",role:"presentation",style:{left:t},"data-progress-bar-timecode-container":!0,children:Ie("div",{className:`Timecode_module_timecode__6a968513 ${i?"Timecode_module_disabled__6a968513":""}`,"data-progress-bar-timecode":!0,children:uo(e)})})}),Pu=()=>{const{currentTime:e,currentFragment:t,playInitiated:n,paused:i,buffering:o}=Id(e=>e.playback),r=Id(e=>e.liveEvent.isLiveEvent),a=Id(e=>e.liveEvent.isArchived),[s,l]=xe(t.duration),c=r&&!a?1:0,[d,u]=xe(c);Oe(()=>{n||0!==e?(l($r(e,t)),r&&!a||u(Wr(e,t))):(l(t.duration),u(c))},[e,n,t,r,a]);const p=!r||a||!i&&!o;return Ie(Au,{time:s,left:Gr(d,!1),disabled:r,visible:p})};function Iu(e,t,n){return e/t*n}const Ru={xs:120,md:160,xl:200},Ou=({visible:e=!1,mousePercent:t=0,progressBarWidth:n,isMousedOverProgress:i=!1,tabOrHoverFocusedHotspotMarker:o=null})=>{const r=Id(e=>e.displayList.menu),a=Id(e=>e.playback.currentFragment),s=Id(e=>e.playback.duration),l=Id(e=>e.liveEvent.isLiveEvent),c=Id(e=>e.appearance.boundingClientRect),u=Id(e=>e.appearance.isVerticalVideo),p=Id(e=>e.appearance.playerBreakpoint),_=Id(e=>e.verifyConfig),v=Id(e=>e.chapters.chapters),m=Id(e=>e.embed.chapters),f=Id(e=>e.controlBar.thumbnailPreview),[h,g]=xe({width:0,height:0,backgroundImage:"",backgroundSize:"",backgroundPosition:""}),[b,y]=xe(!1),E=c.height>300&&n>=185;let C=E&&!r&&!l&&e;const[w,T]=xe(0);i?T(t):o?T(o.left):C=!1;const L=zr(w,a),S=((e,t)=>{const{duration:n}=t;return n*e||0})(w,a);let k="";if(v.length&&m){const e=v.find(e=>e.startTime<=L&&e.endTime>=L);k=(null==e?void 0:e.text)||""}const A=(null==o?void 0:o.label)||"",P=((e,t)=>Ru[e]*(t?9/16:1))((e=>{switch(e){case ca.XL:case ca.XXL:return"xl";case ca.SM:case ca.MD:case ca.LG:return"md";default:return"xs"}})(p),u),I=P/(null==f?void 0:f.frame_width);return Oe(()=>{!b&&E&&e&&f&&_().then(()=>Pn(f.url).then(()=>{y(!0),g({width:f.frame_width*I,height:f.frame_height*I,backgroundImage:`url(${f.url})`,backgroundSize:`${f.width*I}px ${f.height*I}px`,backgroundPosition:""})})).catch(()=>{})},[e,b,E,f,I,_]),Oe(()=>{y(!1)},[f]),Oe(()=>{f&&g(e=>d(d({},e),{},{width:f.frame_width*I,height:f.frame_height*I,backgroundSize:`${f.width*I}px ${f.height*I}px`}))},[p]),Oe(()=>{if(f&&E){let e=0,t=0;if(f){const n=s/f.frames,i=Math.min(f.frames-1,Math.ceil(L/n)),o=i%f.columns,r=Math.floor(i/f.columns);e=-o*f.frame_width*I,t=-r*f.frame_height*I}g(n=>d(d({},n),{},{backgroundPosition:`${e}px ${t}px`}))}},[w,c,f,E,s,I,L]),Ie(Tl,{visible:C,children:Ie("div",{className:`${Kr.THUMB_PREVIEW} ThumbnailPreview_module_thumbnailPreview__c559a995`,role:"presentation","aria-hidden":"true",style:{left:Gr(w,!1),maxWidth:P},children:[!!h.backgroundImage&&b&&Ie("div",{className:`${Kr.THUMB} ThumbnailPreview_module_thumbnailPreviewImage__c559a995`,style:{width:`${h.width}px`,height:`${h.height}px`,backgroundImage:h.backgroundImage,backgroundSize:h.backgroundSize,backgroundPosition:h.backgroundPosition}}),Ie("div",{className:"ThumbnailPreview_module_thumbnailPreviewText__c559a995",children:[A&&Ie("span",{className:"ThumbnailPreview_module_text__c559a995",children:A}),A&&k&&Ie("span",{className:"ThumbnailPreview_module_separator__c559a995"}),k&&Ie("span",{className:"ThumbnailPreview_module_text__c559a995",children:k}),Ie("span",{className:"ThumbnailPreview_module_time__c559a995",children:uo(S)})]})]})})};const Nu=({segment:e,isExpanded:t})=>{let n,i,o;const r=Id(e=>e.playback.currentFragment),a=Id(e=>e.playback.loadedTime),s=Id(e=>e.playback.currentTime),l=Id(e=>e.liveEvent.isLiveEvent),c=Id(e=>e.liveEvent.isStarted),d=Id(e=>e.liveEvent.isArchived),u=l&&!d;u?(n=c?1:0,i=0,o=1):(n=Yr(a,e),o=((e,t)=>(e.endTime-e.startTime)/t.duration)(e,r),i=Yr(s,e));const p=Gr(o,!1),_=Gr(i,!1),v=Gr(n),m=Vr("ChapterSegment_module_chapterWrapper__d4d891b5",u&&"ChapterSegment_module_disabled__d4d891b5",t&&"ChapterSegment_module_expanded__d4d891b5"),f=e.startTime===r.startTime?0:2;return Ie("div",{className:m,style:{width:`calc(${p} - ${f}px)`},children:Ie("div",{className:"ChapterSegment_module_chapter__d4d891b5",children:[Ie("div",{className:`ChapterSegment_module_loaded__d4d891b5 ${r.duration<60?"ChapterSegment_module_shortVideo__d4d891b5":""}`,style:{width:v},"data-progress-bar-loaded":!0}),Ie("div",{className:"ChapterSegment_module_played__d4d891b5",style:{width:_},"data-progress-bar-played":!0})]})})};const Mu=({hoveredChapterId:e})=>{const t=Id(e=>e.playback.currentFragment),n=Id(e=>e.chapters.chapters),i=Id(e=>e.embed.chapters);let o;return o=Id(e=>e.appearance.playerBreakpoint)!==ca.XXS&&i?((e,t)=>{const n=jr(e,t);let i=[];return 0===n.length?i.push({startTime:t.startTime,endTime:t.endTime}):n.forEach((e,o)=>{let r=e.startTime,a=e.endTime;0===o&&e.startTime>t.startTime&&i.push({startTime:t.startTime,endTime:e.startTime}),0===o&&e.startTime<t.startTime&&(r=t.startTime),o===n.length-1&&e.endTime>t.endTime&&(a=t.endTime),i.push({startTime:r,endTime:a,chapterId:e.startTime})}),i})(n,t):[{startTime:t.startTime,endTime:t.endTime}],Ie("div",{className:"ChapterSegments_module_chapterSegmentsWrapper__6e982b76",children:o.map(t=>Ie(Nu,{segment:t,isExpanded:t.chapterId===e},t.startTime))})};const Du=({hoveredChapterId:t})=>{const n=Id(e=>e.chapters.chapters),i=Id(e=>e.embed.chapters),r=Id(e=>e.playback.currentFragment),a=Id(e=>e.liveEvent.isLiveEvent),s=Id(e=>e.liveEvent.isArchived),l=Id(e=>e.setPlayback),c=Id(e=>e.element),u=Id(e=>e.interactive.hotspots),p=Id(e=>e.interactive.showMarkers),_=Qc(),[v,f]=xe(!1),[h,g]=xe(!1),[b,y]=xe(0),[E,C]=xe(null),[w,T]=xe(null),[L,S]=xe(null),k=He(null),[A,P]=xe(Hr(null==k?void 0:k.current)),I=A.rightOffsetValue-A.leftOffsetValue,R=m(()=>{P(Hr(null==k?void 0:k.current))},300),O=He(new G(R));Oe(()=>{const e=O.current,t=null==k?void 0:k.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}},[]);const N=(e,t=3)=>ht(pt((e-A.leftOffsetValue)/I,0,1),t),M=e=>{e?c.classList.add("scrubbing"):c.classList.remove("scrubbing")};function D(e){if(2===(null==e?void 0:e.button)||(null==e?void 0:e.ctrlKey))return;if(l("scrubbing",!0),M(!0),"pointerdown"===e.type||"MSPointerDown"===e.type){C(e.pointerId);try{e.target.msSetPointerCapture?e.target.msSetPointerCapture(E):e.target.setPointerCapture(E)}catch(Ie){}document.addEventListener("pointermove",x),document.addEventListener("pointerup",B)}else"touchstart"===e.type?(document.addEventListener("touchmove",x),document.addEventListener("touchend",B)):(document.addEventListener("mousemove",x),document.addEventListener("mouseup",B));const t=qr(e),o=N(t),a=zr(o,r);l("currentTime",a),(e=>{if(!n.length||!i)return;const t=((e,t)=>t.reduce((t,n)=>{if(null===t)return n;const i=n.startTime-e,o=t.startTime-e;return Math.abs(i)>Math.abs(o)?t:n},null))(e,n);if(!t)return;const o=t.startTime,a=e-o,s=Math.abs(a)<=5,l=jr(n,r);_(Xc.CHAPTER_SEGMENT_CLICK,{seek_event_start_time:e,is_chapter_seek:s,nearest_chapter_start_time:o,chapter_seek_event_delta:a,total_no_chapters_at_seek:n.length,fragment_no_chapters_at_seek:l.length})})(a)}function x(e){if(E&&E!==e.pointerId||!1===e.isPrimary)return;const t=qr(e),n=N(t),i=zr(n,r);l("currentTime",i),y(n)}function B(e){const t=e.type;"pointerup"===t||"MSPointerUp"===t?(document.removeEventListener("pointermove",x),document.removeEventListener("pointerup",B),C(null)):"touchend"===t?(document.removeEventListener("touchmove",x),document.removeEventListener("touchend",B)):(document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",B)),l("scrubbing",!1),M(!1)}Oe(()=>()=>{document.removeEventListener("touchmove",x),document.removeEventListener("touchend",B),document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",B),document.removeEventListener("pointermove",x),document.removeEventListener("pointerup",B)},[]);let V={};(!a||s)&&(V=o.pointerEvents?{onPointerDown:D}:{onTouchStart:D,onMouseDown:D});const U=function(t,n,i){let o=1;return(e(t).sort((e,t)=>e.start-t.start).reduce((e,t)=>{let r=Object.assign({},t);if(!(n.startTime<=r.start&&r.start<=n.endTime))return e;let a=r.name,s=r.start,l=a+". Seek to "+Math.round(100*s)/100+" seconds.";if(r.ariaLabel=l,r.leftPositionInProgressBar=(r.start-n.startTime)/n.duration*100,!e.length)return e.push(r),e;const c=e.length-1,d=function(e,t,n,i){const o=Iu(e,n,i),r=Iu(t,n,i);return Math.floor(r-o)}(e[c].start-n.startTime,r.start-n.startTime,n.duration,i);return!isNaN(d)&&d<=5?(o+=1,a=o+" hotspots",s=e[c].start,e[c].name=a,l=a+". Seek to "+Math.round(100*s)/100+" seconds.",e[c].ariaLabel=l):isNaN(d)||(o=1,e.push(r)),e},[]))}(u,r,I),F=!!U.length&&p;return Ie("div",d(d({className:"ProgressBar_module_progressBarContainer__4c917885",ref:k,onMouseEnter:()=>{P(Hr(null==k?void 0:k.current)),g(!0)},onMouseMove:e=>{const{clientX:t}=e,n=N(t);y(n),f(!1),T(null)},onMouseLeave:()=>g(!1),onFocus:()=>f(!0),onBlur:()=>f(!1),role:"presentation"},V),{},{children:Ie("div",{className:`${Kr.VP_PROGRESS} ProgressBar_module_progressBar__4c917885`,"data-progress-bar":!0,children:[Ie(Lu,{}),Ie(Mu,{hoveredChapterId:t}),Ie(Tu,{}),F&&Ie(ku,{hotspots:U,setTabFocusedHotspotMarker:T,setHoverFocusedHotspotMarker:S}),Ie(Ou,{visible:h||v,mousePercent:b,isMousedOverProgress:h,progressBarWidth:I,tabOrHoverFocusedHotspotMarker:w||L}),Ie(Pu,{})]})}))};let xu;!function(e){e.PLAYER_UI="player_ui",e.CONTROL_BAR="control_bar"}(xu||(xu={}));const Bu=({setMenuDisplayed:e})=>{const t=Id(e=>e.setDisplayList);return Ie(Oc,{className:`${Kr.VP_MENU_INFO} DebugPanelButton_module_debugPanelButton__b625b798`,onClick:()=>{e(!1),t("debugPanel",!0)},icon:Ie(tc,{className:"DebugPanelButton_module_debugPanelButtonIcon__b625b798",name:Jl.INFO_CIRCLE}),color:ua.CUSTOM,children:Ie("span",{className:"DebugPanelButton_module_debugPanelButtonText__b625b798",children:"Debug log"})})};const Vu={[dc.EMPTY]:()=>Ie(Ue,{}),[dc.PREFS]:({setPanel:e,setMenuDisplayed:t})=>{const n=Id(e=>e.embed.speedChangeEnabled),i=Id(e=>e.embed.multipleAudioTracks),r=Id(e=>e.embed.reaction),a=Id(e=>e.playback.qualities),s=Id(e=>e.playback.currentQuality),l=Id(e=>e.playback.playbackRates),c=Id(e=>e.playback.audioTracks),u=Id(e=>e.appearance.colorTwo),p=Id(e=>e.reactions.showReactionsOnProgressBar),_=Id(e=>e.setReactions),v=(null==a?void 0:a.length)>0,m=(e=[])=>{var t;return null==(t=e.find(e=>e.active))?void 0:t.label},f={quality:{label:"Quality",value:s,onSelect:()=>e(dc.QUALITY)},speed:{label:"Speed",value:m(l),onSelect:()=>e(dc.SPEED)},audio:{label:"Audio",value:m(c),onSelect:()=>e(dc.AUDIO)},reaction:{label:"Show reactions",value:p?"On":"Off",onSelect:()=>_("showReactionsOnProgressBar",!p),valueComponent:Ie(Vc,{className:"PrefsPanel_module_switch__7f599513",checked:p,containerFill:u})}};return Ie(Ue,{children:[v&&Ie(pc,d({},f.quality)),n&&Ie(pc,d({},f.speed)),i&&Ie(pc,d({},f.audio)),r&&Ie(pc,d({},f.reaction)),o.touch&&Ie(Ue,{children:[Ie(ac,{buffer:!0}),Ie(Bu,{setMenuDisplayed:t})]})]})},[dc.QUALITY]:()=>{const{qualities:e}=Id(e=>e.playback),t=Id(e=>e.setPlayback);return Ie(fc,{items:e,onSelect:e=>t("qualities",e.currentTarget.dataset.id)})},[dc.SPEED]:()=>{const{playbackRates:e}=Id(e=>e.playback),t=Id(e=>e.setPlayback);return Ie(fc,{items:e,onSelect:e=>t("playbackRates",e.currentTarget.dataset.id)})},[dc.AUDIO]:()=>{var e;const t=Id(e=>e.playback.audioTracks),n=Id(e=>e.setPlayback),i=Qc(),o=He(!1),r=He(null==(e=t.find(e=>e.enabled))?void 0:e.label);return Oe(()=>(i(Xc.MULTI_AUDIO_TRACK_CLICK,{event_name:"audio_menu_opened",has_selected_track:o.current,initial_track:r.current}),()=>{i(Xc.MULTI_AUDIO_TRACK_CLICK,{event_name:"audio_menu_closed",has_selected_track:o.current,initial_track:r.current})}),[i]),Ie(fc,{items:t,onSelect:e=>{n("audioTracks",e.currentTarget.dataset.id),o.current=!0,i(Xc.MULTI_AUDIO_TRACK_CLICK,{event_name:"select_audio_track",track_selected:e.currentTarget.innerText,has_selected_track:o.current,initial_track:r.current})}})}},Uu={[dc.EMPTY]:()=>Ie(Ue,{}),[dc.QUALITY]:({setPanel:e,setMenuDisplayed:t})=>Ie(sc,{title:"Quality",onBack:()=>e(dc.PREFS),setMenuDisplayed:t}),[dc.SPEED]:({setPanel:e,setMenuDisplayed:t})=>Ie(sc,{title:"Speed",onBack:()=>e(dc.PREFS),setMenuDisplayed:t}),[dc.PREFS]:({setMenuDisplayed:e})=>{const{isMenuBlockingUI:t,isMenuVerticalVideoMode:n}=Id(e=>e.appearance);return(t||n)&&Ie(sc,{title:"Settings",setMenuDisplayed:e})},[dc.AUDIO]:({setPanel:e,setMenuDisplayed:t})=>Ie(sc,{title:"Audio",onBack:()=>e(dc.PREFS),setMenuDisplayed:t})},Fu=({isMenuDisplayed:e,setMenuDisplayed:t,buttonRef:n,progressBarAndButtonsRef:i})=>{const o=dc.PREFS,[r,a]=xe(o);Zl({isMenuDisplayed:e,defaultPanel:o,setPanel:a});const s=(e=>Vu[e]||Vu[dc.EMPTY])(r),l=(e=>Uu[e]||Uu[dc.EMPTY])(r);return Ie(rc,{type:cc.PREFS,isMenuDisplayed:e,setMenuDisplayed:t,panel:r,buttonRef:n,progressBarAndButtonsRef:i,toggleKey:$o.PrefsMenu,panelContent:Ie(s,{setPanel:a,setMenuDisplayed:t}),headerContent:Ie(l,{setPanel:a,setMenuDisplayed:t})})},Hu=({setMenuDisplayed:e})=>{const{isMenuBlockingUI:t,isMenuVerticalVideoMode:n}=Id(e=>e.appearance);return(t||n)&&Ie(sc,{title:"Chapters",setMenuDisplayed:e})},qu=({setMenuDisplayed:e,onMenuOptionMouseEnter:t,onMenuOptionMouseLeave:n})=>{const{chapters:i,activeChapterId:o}=Id(e=>e.chapters),r=Id(e=>e.setChapters),a=i.map((e,t)=>({index:t+1,label:e.text,id:e.id,active:e.id===o}));return Ie(fc,{items:a,onSelect:t=>{r("activeChapterId",t.currentTarget.dataset.id,{type:"menu"}),e(!1)},onMenuOptionMouseEnter:t,onMenuOptionMouseLeave:n,ordered:!0})},$u=({isMenuDisplayed:e,setMenuDisplayed:t,buttonRef:n,progressBarAndButtonsRef:i,onMenuOptionMouseEnter:o,onMenuOptionMouseLeave:r})=>Ie(rc,{type:cc.CHAPTERS,isMenuDisplayed:e,setMenuDisplayed:t,panel:dc.CHAPTERS,buttonRef:n,progressBarAndButtonsRef:i,panelContent:Ie(qu,{setMenuDisplayed:t,onMenuOptionMouseEnter:o,onMenuOptionMouseLeave:r}),headerContent:Ie(Hu,{setMenuDisplayed:t})});const Wu=()=>{const e=Id(e=>e.captions.fontSize),t=Id(e=>e.captions.fontFamily),n=Id(e=>e.captions.fontOpacity),i=Id(e=>e.captions.color),o=Id(e=>e.captions.bgColor),r=Id(e=>e.captions.bgOpacity),a=Id(e=>e.captions.windowOpacity),s=Id(e=>e.captions.windowColor),l=Id(e=>e.captions.edgeStyle),c=Id(e=>e.appearance.videoHeight);return Ie("div",{className:"PreviewWindow_module_previewWindow__ca393743",children:Ie("div",{className:"PreviewWindow_module_checkeredBackground__ca393743",children:Ie(Hc,{cues:[{html:"This is a preview\n of a caption"}],className:"PreviewWindow_module_previewCaption__ca393743",fontSize:e,fontFamily:t,fontOpacity:n,color:i,bgColor:o,bgOpacity:r,windowOpacity:a,windowColor:s,edgeStyle:l,height:c})})})};const Yu=({updateMetricsPayload:e})=>{const t=Id(e=>e.resetCaptionsStyles);return Ie(lc,{element:"button",className:`${Xr.EXCLUDE_GLOBAL_BUTTON_STYLES} ResetButton_module_resetButton__37a472cb ${Ac.focusable}`,onSelect:()=>{t(),e({has_reset_all:!0,final_action_reset_all:!0})},withActive:!1,styled:!1,children:Ie("span",{children:"Reset all"})})},Gu={[dc.EMPTY]:()=>Ie(Ue,{}),[dc.LANGUAGES]:({setPanel:e,updateMetricsPayload:t})=>{const n=Id(e=>e.captions.textTracks),i=Id(e=>e.setCaptions),{isMenuBlockingUI:o,isMenuVerticalVideoMode:r}=Id(e=>e.appearance),a=o||r,s={customize:{label:"Customize",onSelect:()=>{e(dc.CUSTOMIZE),t({has_clicked_customize:!0})}},preview:{label:"Preview",onSelect:()=>e(dc.PREVIEW)}};return Ie(Ue,{children:[Ie(fc,{items:n,onSelect:e=>{i("activeTextTrackId",e.currentTarget.dataset.id)}}),Ie(ac,{buffer:!0}),Ie(pc,d({},s.customize)),a&&Ie(Ue,{children:[Ie(ac,{buffer:!0}),Ie(pc,d({},s.preview))]})]})},[dc.CUSTOMIZE]:({setPanel:e,updateMetricsPayload:t})=>{const n=Id(e=>e.appearance.isMenuBlockingUI),i=Id(e=>e.appearance.isMenuVerticalVideoMode),o=n||i,r={font:{label:"Font",onSelect:()=>{e(dc.FONT),t({has_clicked_font:!0})},size:uc.SMALL},background:{label:"Background",onSelect:()=>{e(dc.BACKGROUND),t({has_clicked_background:!0})},size:uc.SMALL},window:{label:"Window",onSelect:()=>{e(dc.WINDOW),t({has_clicked_window:!0})},size:uc.SMALL},preview:{label:"Preview",onSelect:()=>e(dc.PREVIEW)}};return Ie(Ue,{children:[Ie(pc,d({},r.font)),Ie(pc,d({},r.background)),Ie(pc,d({},r.window)),Ie(Yu,{updateMetricsPayload:t}),o&&Ie(Ue,{children:[Ie(ac,{buffer:!0}),Ie(pc,d({},r.preview))]})]})},[dc.FONT]:({setPanel:e,updateMetricsPayload:t})=>{const n=Id(e=>e.setCaptions),i=Id(e=>e.captions.fontSize),o=Id(e=>e.captions.fontFamily),r=Id(e=>e.captions.fontOpacity),a=Id(e=>e.captions.color),s=Id(e=>e.captions.edgeStyle),l=Id(e=>e.appearance.isMenuBlockingUI),c=Id(e=>e.appearance.isMenuVerticalVideoMode),u=l||c,p=ci(),_=()=>t({has_changed_font:!0,has_customized:!0,final_action_reset_all:!1}),v={fontFamily:{label:p.fontFamily.title,items:Fr(p.fontFamily.items,o),onSelect:e=>{n("fontFamily",e.currentTarget.dataset.id),_()}},color:{label:p.color.title,items:Fr(p.color.items,a),onSelect:e=>{n("color",e.currentTarget.dataset.id),_()}},fontSize:{label:p.fontSize.title,items:Fr(p.fontSize.items,`${i}`),onSelect:e=>{n("fontSize",e.currentTarget.dataset.id),_()}},fontOpacity:{label:p.fontOpacity.title,items:Fr(p.fontOpacity.items,r),onSelect:e=>{n("fontOpacity",e.currentTarget.dataset.id),_()}},edgeStyle:{label:p.edgeStyle.title,items:Fr(p.edgeStyle.items,s),onSelect:e=>{n("edgeStyle",e.currentTarget.dataset.id),_()}},preview:{label:"Preview",onSelect:()=>e(dc.PREVIEW)}};return Ie(Ue,{children:[Ie(hc,d({},v.fontFamily)),Ie(yc,d({},v.color)),Ie(bc,d({},v.fontSize)),Ie(bc,d({},v.fontOpacity)),Ie(hc,d({},v.edgeStyle)),Ie(Yu,{updateMetricsPayload:t}),u&&Ie(Ue,{children:[Ie(ac,{}),Ie(pc,d({},v.preview))]})]})},[dc.BACKGROUND]:({setPanel:e,updateMetricsPayload:t})=>{const n=Id(e=>e.setCaptions),i=Id(e=>e.captions.bgColor),o=Id(e=>e.captions.bgOpacity),r=Id(e=>e.appearance.isMenuBlockingUI),a=Id(e=>e.appearance.isMenuVerticalVideoMode),s=r||a,l=ci(),c=()=>t({has_changed_background:!0,final_action_reset_all:!1,has_customized:!0}),u={bgColor:{label:l.bgColor.title,items:Fr(l.bgColor.items,i),onSelect:e=>{n("bgColor",e.currentTarget.dataset.id),c()}},bgOpacity:{label:l.bgOpacity.title,items:Fr(l.bgOpacity.items,o),onSelect:e=>{n("bgOpacity",e.currentTarget.dataset.id),c()}},preview:{label:"Preview",onSelect:()=>e(dc.PREVIEW)}};return Ie(Ue,{children:[Ie(yc,d({},u.bgColor)),Ie(bc,d({},u.bgOpacity)),Ie(Yu,{updateMetricsPayload:t}),s&&Ie(Ue,{children:[Ie(ac,{}),Ie(pc,d({},u.preview))]})]})},[dc.WINDOW]:({setPanel:e,updateMetricsPayload:t})=>{const n=Id(e=>e.setCaptions),i=Id(e=>e.captions.windowOpacity),o=Id(e=>e.captions.windowColor),r=Id(e=>e.appearance.isMenuBlockingUI),a=Id(e=>e.appearance.isMenuVerticalVideoMode),s=r||a,l=ci(),c=()=>t({has_changed_window:!0,final_action_reset_all:!1,has_customized:!0}),u={windowColor:{label:l.windowColor.title,items:Fr(l.windowColor.items,o),onSelect:e=>{n("windowColor",e.currentTarget.dataset.id),c()}},windowOpacity:{label:l.windowOpacity.title,items:Fr(l.windowOpacity.items,i),onSelect:e=>{n("windowOpacity",e.currentTarget.dataset.id),c()}},preview:{label:"Preview",onSelect:()=>e(dc.PREVIEW)}};return Ie(Ue,{children:[Ie(yc,d({},u.windowColor)),Ie(bc,d({},u.windowOpacity)),Ie(Yu,{updateMetricsPayload:t}),s&&Ie(Ue,{children:[Ie(ac,{}),Ie(pc,d({},u.preview))]})]})},[dc.PREVIEW]:({updateMetricsPayload:e})=>Ie(Ue,{children:[Ie(Wu,{}),Ie(Yu,{updateMetricsPayload:e})]})},zu={[dc.EMPTY]:()=>Ie(Ue,{}),[dc.LANGUAGES]:({setMenuDisplayed:e})=>Ie(sc,{title:"CC/Subtitles",setMenuDisplayed:e}),[dc.CUSTOMIZE]:({setPanel:e,setMenuDisplayed:t})=>Ie(sc,{title:"Customize",onBack:()=>e(dc.LANGUAGES),setMenuDisplayed:t}),[dc.FONT]:({setPanel:e,setMenuDisplayed:t})=>Ie(sc,{title:"Font",onBack:()=>e(dc.CUSTOMIZE),setMenuDisplayed:t}),[dc.BACKGROUND]:({setPanel:e,setMenuDisplayed:t})=>Ie(sc,{title:"Background",onBack:()=>e(dc.CUSTOMIZE),setMenuDisplayed:t}),[dc.WINDOW]:({setPanel:e,setMenuDisplayed:t})=>Ie(sc,{title:"Window",onBack:()=>e(dc.CUSTOMIZE),setMenuDisplayed:t}),[dc.PREVIEW]:({previousPanel:e,setPanel:t,setMenuDisplayed:n})=>Ie(sc,{title:"Preview",onBack:()=>t(e),setMenuDisplayed:n})},ju=({isMenuDisplayed:e,setMenuDisplayed:t,buttonRef:n,progressBarAndButtonsRef:i,updateMetricsPayload:o})=>{const r=dc.LANGUAGES,[a,s]=xe(r),[l,c]=xe(r),d=(e=>Gu[e]||Gu[dc.EMPTY])(a),u=(e=>zu[e]||zu[dc.EMPTY])(a),p=e=>{c(a),s(e)};return Zl({isMenuDisplayed:e,defaultPanel:r,setPanel:s}),Ie(rc,{type:cc.CC,isMenuDisplayed:e,setMenuDisplayed:t,panel:a,buttonRef:n,progressBarAndButtonsRef:i,toggleKey:$o.CCMenu,panelContent:Ie(d,{setPanel:p,setMenuDisplayed:t,previousPanel:l,updateMetricsPayload:o}),headerContent:Ie(u,{setPanel:p,setMenuDisplayed:t,previousPanel:l})})},Ku=({withButtons:e,withMenus:t,menuProps:n})=>{const i=(()=>{const e=Id(e=>e.captions.textTracks),t=Id(e=>e.playback.supportsTextTracks),n=Id(e=>e.appearance.isDisplayContextBackbone),i=Id(e=>e.displayList.ad),o=Id(e=>e.embed.speedChangeEnabled),r=Id(e=>e.embed.playbar),a=Id(e=>e.playback.qualities),s=Id(e=>e.playback.isChromecastConnected),l=Id(e=>e.chapters.chapters),c=Id(e=>e.embed.transcript),d=Id(e=>e.embed.cc),u=Id(e=>e.embed.chapters),p=t&&!!e.length&&n&&!i&&d,_=n&&!!(o||(null==a?void 0:a.length))&&!s&&!i&&r,v=!!(null==l?void 0:l.length)&&u&&!i;return{[cc.CC]:p,[cc.PREFS]:_,[cc.CHAPTERS]:v,[cc.TRANSCRIPT]:c}})(),o=Id(e=>e.embed.airplay),r=Id(e=>e.playback.supportsAirPlay),a=Id(e=>e.embed.chromecast),s=Id(e=>e.playback.supportsChromecast),l=Id(e=>e.appearance.stereoscopicEnabled),c=Id(e=>e.playback.supportsStereoscopic),u=Id(e=>e.displayList.ad),p=Id(e=>e.playback.loadedMetadata),_=Id(e=>{var t;return null==(t=e.interactive.hotspots)?void 0:t.length}),v=Id(e=>e.interactive.enabled),m=Id(e=>e.interactive.ready),f=!!v&&(!m||_),h=r&&p&&!u&&!f&&o,g=a&&s&&!u&&!f,b=l&&c&&!u;return Ie(Ue,{children:[e&&Ie(vu,{}),e&&i[cc.CC]&&Ie(gu,d(d({},n[cc.CC]),{},{ref:n[cc.CC].buttonRef})),t&&i[cc.CC]&&Ie(ju,d({},n[cc.CC])),e&&i[cc.TRANSCRIPT]&&Ie(Eu,{}),e&&i[cc.PREFS]&&Ie(uu,d(d({},n[cc.PREFS]),{},{ref:n[cc.PREFS].buttonRef})),t&&i[cc.PREFS]&&Ie(Fu,d({},n[cc.PREFS])),e&&i[cc.CHAPTERS]&&Ie(hu,d(d({},n[cc.CHAPTERS]),{},{ref:n[cc.CHAPTERS].buttonRef})),t&&i[cc.CHAPTERS]&&Ie($u,d({},n[cc.CHAPTERS])),e&&g&&Ie(yu,{}),e&&h&&Ie(fu,{}),e&&b&&Ie(bu,{}),e&&Ie(pu,{}),e&&Ie(du,{}),e&&Ie(mu,{})]})},Xu=()=>{const e=He(null),t=Id(e=>e.displayList.controlBar),n=Id(e=>e.displayList.progressBar),i=Id(e=>e.displayList.outro),o=Id(e=>e.playback.playInitiated),r=Id(e=>e.embed.isTrailer),a=Id(e=>e.appearance.isMenuBlockingUI),s=(()=>{const e=Id(e=>e.setAppearance),[t,n]=xe(!1);return{onMouseEnter:()=>{t||e("mousedOverControlBar",!0),n(!1)},onMouseLeave:()=>{t||e("mousedOverControlBar",!1),n(!1)},onTouchStart:()=>{e("mousedOverControlBar",!0),n(!0)},onTouchEnd:()=>{e("mousedOverControlBar",!1),n(!0)}}})(),{buttonState:l}=Wc(),c=ed(l)===Jc.CENTER,u=r&&!o,[p,_]=xe(null),v=(({setHoveredChapterId:e,progressBarAndButtonsRef:t})=>{const n=Id(e=>e.displayList.menu),i=Id(e=>e.setDisplayList),o=He(null),r=He(null),a=He(null),{sendBPClosedCaptionsClickEvent:s,updateCCMetricsPayload:l,resetCCMetricsPayload:c}=(()=>{const e=Id(e=>e.captions.language),t=Id(e=>e.captions.fontSize),n=Id(e=>e.captions.fontOpacity),i=Id(e=>e.captions.fontFamily),o=Id(e=>e.captions.color),r=Id(e=>e.captions.edgeStyle),a=Id(e=>e.captions.bgColor),s=Id(e=>e.captions.bgOpacity),l=Id(e=>e.captions.windowColor),c=Id(e=>e.captions.windowOpacity),u=He({fontSize:t,fontOpacity:n,fontColor:o,fontFamily:i,edgeStyle:r,bgColor:a,bgOpacity:s,windowColor:l,windowOpacity:c}),p=He({language_selected:e||"off",has_clicked_customize:!1,has_customized:!1,has_clicked_font:!1,has_changed_font:!1,has_clicked_background:!1,has_changed_background:!1,has_clicked_window:!1,has_changed_window:!1,has_reset_all:!1,final_action_reset_all:!1}),_=Ve(e=>{p.current=d(d({},p.current),e)},[]),v=Qc();return Oe((function(){_({language_selected:e||"off"})}),[e,_]),Oe((function(){const e=t!==u.current.fontSize||o!==u.current.fontColor||i!==u.current.fontFamily||n!==u.current.fontOpacity||r!==u.current.edgeStyle||a!==u.current.bgColor||s!==u.current.bgOpacity||l!==u.current.windowColor||c!==u.current.windowOpacity;_({has_customized:e})}),[t,n,o,i,r,a,s,l,c,_]),{sendBPClosedCaptionsClickEvent:()=>v(Xc.CLOSED_CAPTIONS_CLICK,p.current),updateCCMetricsPayload:_,resetCCMetricsPayload:()=>{p.current={language_selected:e||"off",has_clicked_customize:!1,has_customized:!1,has_clicked_font:!1,has_changed_font:!1,has_clicked_background:!1,has_changed_background:!1,has_clicked_window:!1,has_changed_window:!1,has_reset_all:!1,final_action_reset_all:!1},u.current={fontSize:t,fontOpacity:n,fontColor:o,fontFamily:i,edgeStyle:r,bgColor:a,bgOpacity:s,windowColor:l,windowOpacity:c}}}})(),[u,p]=xe(!1),[_,v]=xe(!1),[m,f]=xe(!1),h=e=>t=>{e===v&&_&&!t&&(s(),c()),e(t),i("menu",t),e!==p&&p(!1),e!==v&&v(!1),e!==f&&f(!1)};n||(p(!1),v(!1),f(!1));const g=h(p),b=h(f),y=h(v);return{[cc.CC]:{isMenuDisplayed:_,setMenuDisplayed:y,buttonRef:a,progressBarAndButtonsRef:t,updateMetricsPayload:l},[cc.PREFS]:{isMenuDisplayed:u,setMenuDisplayed:g,buttonRef:o,progressBarAndButtonsRef:t},[cc.CHAPTERS]:{isMenuDisplayed:m,setMenuDisplayed:b,buttonRef:r,progressBarAndButtonsRef:t,onMenuOptionMouseEnter:t=>{var n,i;return e(parseInt(null==t||null==(n=t.currentTarget)||null==(i=n.dataset)?void 0:i.id,10))},onMenuOptionMouseLeave:()=>e(null)}}})({setHoveredChapterId:_,progressBarAndButtonsRef:e}),m=Vr("ControlBar_module_controlBarWrapper__1988764d",c&&"ControlBar_module_centerPlayButton__1988764d",!n&&"ControlBar_module_noProgressBar__1988764d"),f=Vr(Kr.VP_CONTROLS,"ControlBar_module_controls__1988764d",u&&"ControlBar_module_trailer__1988764d");return Ie(ic,{children:[Ie("div",{className:m,children:[Ie(lu,{controlBarVisibilityHandlers:s}),Ie(Tl,{visible:t,styleOverrides:{exitDone:{display:"flex",visibility:"hidden"}},children:Ie("div",d(d({className:f},s),{},{"data-control-bar":!0,children:!i&&!u&&Ie("div",{className:"ControlBar_module_progressBarAndButtons__1988764d",ref:e,children:[n&&Ie(Ue,{children:[Ie(up,{context:xu.CONTROL_BAR}),Ie(_p,{context:xu.CONTROL_BAR}),Ie(Du,{hoveredChapterId:p})]}),Ie(Ku,{withButtons:!0,menuProps:v,withMenus:!a})]})}))}),Ie(Cu,{})]}),Ie(Ku,{menuProps:v,withMenus:a,withButtons:!1})]})};const Zu=()=>{const e=Id(e=>e.displayList.notification);return Ie("div",{className:`Notification_module_root__8c1db022 ${e?"Notification_module_active__8c1db022":""}`})};let Qu;!function(e){e.Backward="backward",e.Forward="forward"}(Qu||(Qu={}));const Ju=()=>{const e=Id(e=>e.displayList.nudgeNotification),t=Id(e=>e.nudge.direction),n=Id(e=>e.nudge.time);return Ie(Tl,{visible:e,children:Ie("div",{className:`NudgeNotification_module_nudge__d98d80a9 ${t===Qu.Backward&&"NudgeNotification_module_nudgeBackward__d98d80a9"}`,children:Ie("div",{className:"NudgeNotification_module_nudgeInfo__d98d80a9",children:[Ie("div",{className:"NudgeNotification_module_nudgeIcon__d98d80a9",children:Ie(tc,{name:Jl.FAST_FORWARD})}),Ie("div",{className:"NudgeNotification_module_nudgeTime__d98d80a9",children:n?n+" seconds":""})]})})})};let ep;const tp=()=>{const e=He(Rd().getState().playback.currentFragment),t=He(Rd().getState().playback.currentTime);Rd().subscribe(t=>e.current=t.playback.currentFragment),Rd().subscribe(e=>t.current=e.playback.currentTime);const n=Id(e=>e.displayList.overlay),i=Id(e=>e.displayList.ad),r=Id(e=>e.liveEvent.isLiveEvent),a=Id(e=>e.liveEvent.isArchived),s=r&&!a,l=Id(e=>e.embed.background),c=Id(e=>e.embed.controls),d=Id(e=>e.displayList.outro),u=Id(e=>e.config.video.spatial),p=!(!o.spatialPlayback||!u),_=o.touch&&!n&&!i&&!s&&!l&&c&&!d&&!p,v=Id(e=>e.setPlayback),m=Id(e=>e.setNudgeProperties),[f,h]=xe({left:0,right:0}),g=n=>i=>{let o;i.preventDefault(),n===Qu.Forward?(o=f.left+1,h({left:o,right:0})):(o=f.right+1,h({left:0,right:o})),clearTimeout(ep),ep=setTimeout(b,250),o>=2&&function(n,i){const{startTime:o,endTime:r}=e.current;let a=0;a=n===Qu.Forward?t.current+10:t.current-10,a<o?a=o:a>=r?a=r-.001:m({direction:n,time:10+10*(i-2)}),v("currentTime",a,{seekType:"nudge"})}(n,o)};function b(){h({left:0,right:0})}return _&&Ie(Ue,{children:[Ie("div",{className:"NudgeArea_module_nudgeArea__1e671f9b NudgeArea_module_nudgeBackwardArea__1e671f9b",onTouchEnd:g(Qu.Backward)}),Ie("div",{className:"NudgeArea_module_nudgeArea__1e671f9b NudgeArea_module_nudgeForwardArea__1e671f9b",onTouchEnd:g(Qu.Forward)})]})},np=({player:e,children:t})=>(Ke(e=>{}),Ie(Od,{player:e,children:[Ie(gp,{}),t]})),ip=({element:e,children:t})=>Xe(Ie(Ue,{children:t}),e);const op=()=>{const e=Id(e=>e.embed.like),t=Id(e=>e.embed.watchLater),n=[{key:"↑",text:"Volume up",className:"HelpOverlay_module_arrow__584c584b HelpOverlay_module_hideOnSmall__584c584b"},{key:"↓",text:"Volume down",className:"HelpOverlay_module_arrow__584c584b HelpOverlay_module_hideOnSmall__584c584b"},{key:"→",text:"Scrub forward",className:"HelpOverlay_module_arrow__584c584b HelpOverlay_module_hideOnSmall__584c584b"},{key:"←",text:"Scrub backwards",className:"HelpOverlay_module_arrow__584c584b HelpOverlay_module_hideOnSmall__584c584b"},{key:"X",text:"Like",ignore:!e},{key:"S",text:"Share",ignore:!Id(e=>e.embed.share)},{key:"W",text:"Watch Later",ignore:!t},{key:"C",text:"Toggle Captions"},{key:"H",text:"Toggle Preferences Menu"},{key:"F",text:"Toggle fullscreen"},{key:"⇧T",text:"Toggle Transcript",ignore:!Id(e=>e.embed.transcript)},{key:"V",text:"View on Vimeo",ignore:Id(e=>e.embed.onsite)},{key:"J",text:"Scrub backwards"},{key:"K",text:"Play/Pause"},{key:"L",text:"Scrub forward"},{key:"M",text:"Toggle Mute"}];return Ie(Ue,{children:[Ie("h1",{id:Kr.VP_OVERLAY_LABELLEDBY,children:"Keyboard Shortcuts"}),Ie("div",{className:"HelpOverlay_module_keysWrapper__584c584b","data-help-keys":!0,children:n.map(e=>!e.ignore&&Ie("div",{className:`HelpOverlay_module_keyWrapper__584c584b ${e.className||""}`,children:[Ie("div",{className:"HelpOverlay_module_keySymbol__584c584b",children:e.key}),Ie("div",{className:"HelpOverlay_module_keyText__584c584b",children:e.text})]}))})]})};const rp=Fe((e,t)=>{const n=Id(e=>e.setOverlay),i=Or(()=>n("purpose",ta.EMPTY));return Ie("button",d(d({ref:t,className:`CloseOverlayButton_module_closeOverlayButton__64883c67 ${Ac.focusableButton}`},i),{},{children:Ie(tc,{name:Jl.CLOSE})}))});const ap=({children:e,visible:t,style:n})=>{const i=Id(e=>e.element),o=He(null),r=He(null);return Oe((function(){t&&r.current&&i.contains(document.activeElement)?(o.current=document.activeElement,lt(r.current)):!t&&o.current&&(lt(o.current),o.current=null)}),[t,r,i]),Ie("div",{className:`OverlayBase_module_overlayWrapper__226bd2d4 ${t?"":"OverlayBase_module_hidden__226bd2d4"}`,role:"dialog","aria-modal":"true","aria-labelledby":Kr.VP_OVERLAY_LABELLEDBY,"data-content-area-sibling-eligible":!0,style:n,"data-overlay":!0,children:[Ie("div",{className:"OverlayBase_module_overlayCell__226bd2d4",children:Ie("div",{className:`OverlayBase_module_overlay__226bd2d4 ${t?"OverlayBase_module_visible__226bd2d4":""}`,children:e})}),Ie("nav",{className:"OverlayBase_module_overlayNav__226bd2d4",children:Ie(rp,{ref:r})})]})},sp=()=>{const e=Id(e=>e.overlay.purpose),t=Id(e=>e.displayList.overlay),[n,i]=xe(e),o=t&&sa(e);return o&&i(e),Ie(Tl,{visible:o,duration:o?200:105,styleOverrides:{exitDone:{display:"block",visibility:"hidden"}},onFaded:()=>{i(e)},children:Ie(ap,{visible:o,children:n===ta.HELP&&Ie(op,{})})})};const lp=()=>{const{pipOverlay:e}=Id(e=>e.displayList);return Ie(Tl,{visible:e,children:Ie("div",{className:`${Kr.VP_PIP_OVERLAY} PipOverlay_module_overlay__4ebce77e`,children:[Ie(tc,{name:Jl.PIP}),Ie("div",{className:"PipOverlay_module_title__4ebce77e",children:"Playing in picture-in-picture"})]})})};const cp=()=>{const e=Id(e=>e.liveEvent.isLiveEvent),t=Id(e=>e.liveEvent.isStarted),n=Id(e=>e.liveEvent.isEnded),i=e&&!n,o=Id(e=>e.webinar.webinarRegistrantBlocked),r=i&&!o,a=Id(e=>e.displayList.controlBar),s=Id(e=>e.playback.paused),l=Id(e=>e.appearance.playerSizeMode)===Oo.TINY;return r&&Ie(Tl,{visible:!a&&!s||a&&l&&t,children:Ie("div",{className:"LiveStatusLabelAndViewerCounter_module_liveStatusLabelAndViewerCounter__df50a84b",children:[Ie(up,{context:xu.PLAYER_UI}),Ie(_p,{context:xu.PLAYER_UI})]})})};const dp={[xu.PLAYER_UI]:"LiveStatusLabel_module_playerUI__c53a9f1c",[xu.CONTROL_BAR]:"LiveStatusLabel_module_controlBar__c53a9f1c"},up=({className:e,context:t})=>{const n=Id(e=>e.embed.hideLiveLabel),i=Id(e=>e.webinar.webinarRegistrantBlocked),o=Id(e=>e.liveEvent.isLiveEvent),r=Id(e=>e.liveEvent.isStarted),a=Id(e=>e.liveEvent.isArchived),s=dp[t],l=Vr(Kr.VP_LIVE_STATUS,"LiveStatusLabel_module_liveStatusLabel__c53a9f1c",s,e),c=Vr(Kr.VP_LIVE_STATUS_CIRCLE,"LiveStatusLabel_module_liveStatusCircle__c53a9f1c",r?"LiveStatusLabel_module_live__c53a9f1c":"LiveStatusLabel_module_offline__c53a9f1c"),d=Vr("LiveStatusLabel_module_liveStatusText__c53a9f1c",r?"LiveStatusLabel_module_live__c53a9f1c":"LiveStatusLabel_module_offline__c53a9f1c");return o&&!a&&!n&&!i&&Ie("div",{className:l,"data-live-status-label":!0,children:[Ie("div",{className:c}),Ie("span",{className:d,children:"LIVE"})]})};const pp={[xu.PLAYER_UI]:"LiveViewerCounter_module_playerUI__6c695e18",[xu.CONTROL_BAR]:"LiveViewerCounter_module_controlBar__6c695e18"},_p=({className:e="",context:t})=>{const n=Id(e=>e.liveEvent.isStarted),i=Id(e=>e.embed.showViewerCount),o=Id(e=>e.liveEvent.viewerCount),r=Id(e=>e.webinar.webinarRegistrantBlocked),a=Id(e=>e.liveEvent.liveStatsRequestSucceeded),s=pp[t],l=Vr(Kr.VP_LIVE_VIEWER_COUNT,"LiveViewerCounter_module_liveViewerCounter__6c695e18",s,e);return n&&i&&!r&&a&&Ie("div",{className:l,"data-live-viewer-counter":!0,children:[Ie(tc,{className:"LiveViewerCounter_module_liveViewerCounterIcon__6c695e18",name:Jl.PERSON_FILLED}),Ie("span",{className:"LiveViewerCounter_module_liveViewerCountValue__6c695e18",children:o})]})};const vp=()=>{const e=Id(e=>e.setPlayback);return Id(e=>e.displayList.unmuteButton)&&Ie(Oc,{className:`${Kr.VP_UNMUTE} ${Xr.EXCLUDE_GLOBAL_BUTTON_STYLES} ${Ac.focusable} UnmuteButton_module_container__18e31eb9`,onClick:t=>{t.preventDefault(),e("muted",!1)},icon:Ie(tc,{className:"UnmuteButton_module_icon__18e31eb9",name:Jl.VOLUME_OFF_FILLED}),color:ua.CUSTOM,size:da.CUSTOM,"data-unmute-button":!0,children:Ie(Sc,{className:"UnmuteButton_module_text__18e31eb9",size:va.MD,children:"Unmute"})})};const mp=({style:e})=>{const t=Id(e=>e.interactive.demoEnd),n=Id(e=>e.appearance.playerBreakpoint),i=Id(e=>e.displayList.progressBar),o=Id(e=>e.appearance.playerSizeMode),r=Qc(),a=o===Oo.TINY,s=(e=>{switch(e){case ca.XXL:case ca.XL:case ca.LG:case ca.MD:return fa.LG;default:return fa.SM}})(n),l=(e=>{const t=Date.now(),n=Date.parse(e);return Math.floor((n-t)/864e5)})(t),c=1===l?"There is 1 day of interactivity remaining on this demo.":"There are "+l+" days of interactivity remaining on this demo.";let d;d=a||[ca.XS,ca.XXS].includes(n)&&!i?"Demo":s===fa.LG?"Learn More":"Interactive demo";const u=Vr("InteractiveDemoUpsellBanner_module_button__111d9322",Xr.EXCLUDE_GLOBAL_BUTTON_STYLES),p=Ie(tc,{name:Jl.INFO_CIRCLE,className:"InteractiveDemoUpsellBanner_module_infoIcon__111d9322"});return Ie(Nc,{color:"linear-gradient(270deg, #0095d5 0%, #00b285 49.59%, #00be4c 100%)",style:e,type:"interactive-demo",children:[s===fa.LG&&Ie(Sc,{size:va.MD,weight:ma.NUM_500,className:"InteractiveDemoUpsellBanner_module_text__111d9322",children:[p,c]}),Ie(Ql,{tabIndex:"-1",href:"https://vimeo.com/features/interactive-video",children:Ie(Oc,{className:u,icon:s===fa.SM&&p,iconSize:da.CUSTOM,color:ua.CUSTOM,onClick:()=>r(Xc.CLICK,{location:"player_demo_banner",target:"view_interactive_homepage",name:"interactive_demo_banner_view",copy:"Learn_more",feature:"interactive_demo_banner",type:"upsell"}),children:Ie(Sc,{size:va.MD,weight:s===fa.SM?ma.NUM_500:ma.BOLD,children:d})})})]})},fp=()=>{const e=Id(e=>e.displayList.banner),t=Id(e=>e.config);return Ca(t)?Ie(Tl,{visible:e,children:Ea(t)&&Ie(mp,{})}):null},hp={[ya.LIGHT]:ba.EIGHTY,[ya.DARK]:ba.TWENTY},gp=()=>{const e=Id(e=>e.uuid),t=Id(e=>e.embed.transparent),n=Id(e=>e.appearance.fullscreen),i=Id(e=>e.appearance.colorOne),o=Id(e=>e.appearance.colorTwo),r=Id(e=>e.appearance.colorThree),a=Id(e=>e.appearance.colorFour),s=[[ga.ONE,Ta(i,ba.ONE_HUNDRED)],[ga.TWO,Ta(o,ba.ONE_HUNDRED)],[ga.THREE,Ta(r,ba.ONE_HUNDRED)],[ga.FOUR,Ta(a,ba.ONE_HUNDRED,!1,!0)],[ga.ONE_MONOCHROME,Ta(i,ba.ONE_HUNDRED,!0)],[ga.TWO_MONOCHROME,Ta(o,ba.ONE_HUNDRED,!0)],[ga.ONE_OPACITY_NINETY,Ta(i,ba.NINETY,!1,!0)],[ga.THREE_OPACITY_TWENTY,Ta(r,ba.TWENTY)],[ga.ONE_MONOCHROME_OPACITY_TWENTY,Ta(i,ba.TWENTY,!0)],[ga.TWO_MONOCHROME_OPACITY_TWENTY,Ta(o,ba.TWENTY,!0)],[ga.ONE_MONOCHROME_OPACITY_SIXTY,Ta(i,ba.SIXTY,!0)],[ga.ONE_MONOCHROME_OPACITY_TWENTY_EIGHTY,Ta(i,hp,!0)],[ga.TWO_MONOCHROME_OPACITY_TWENTY_EIGHTY,Ta(o,hp,!0)]];let l,c;return n?(l="#000 !important",c="transparent !important"):t?(l="transparent !important",c="transparent !important"):(l=`var(${ga.FOUR})`,c=`var(${ga.FOUR})`),Ie("style",{type:"text/css","data-player-colors":e,children:[`.player-${e} {\n                ${La(s)}\n            }`,`.player-${e} {\n                background-color: ${l};\n            }`,`.player-${e} .${Kr.VP_VIDEO_WRAPPER} {\n                background-color: ${c};\n            }`]})};const bp=({children:e})=>{let t=Id(e=>e.element);const n=Id(e=>e.embed.rightContentAreaEnabled),i=Id(e=>e.displayList.rightContentArea),r=Id(e=>e.displayList.transcript),a=["RightContentArea_module_rightContentArea__25340be4"];var s;return i&&a.push("RightContentArea_module_visible__25340be4"),o.isGoogleBot&&r&&(t=null==(s=t)?void 0:s.parentElement,a.push("RightContentArea_module_googleBot__25340be4")),n&&Xe(Ie("div",{id:Zr.RIGHT_CONTENT_AREA,className:Vr.apply(void 0,a),"aria-hidden":!i,children:e}),t)};const yp=()=>{const[e,t]=xe(!1),n=Id(e=>e.appearance.placeholderThumbnail),i=Id(e=>e.appearance.appSizeMode),r=Id(e=>e.appearance.appBreakpoint),a=Id(e=>e.embed.rightContentAreaEnabled),s=Id(e=>e.displayList.rightContentArea),l=Id(e=>e.appearance.rightContentAreaAnimating),c=Id(e=>e.element),u=a&&(s||l),p=r===ca.XS||r===ca.XXS||i===Oo.MINI||i===Oo.TINY,_=Vr("ContentAreaBackground_module_img__90d1a7f8",e&&"ContentAreaBackground_module_loaded__90d1a7f8"),v=p?{visible:s,duration:400}:{visible:u,duration:0};return o.isGoogleBot?null:Xe(Ie(Tl,d(d({},v),{},{children:Ie("div",{className:"ContentAreaBackground_module_imgContainer__90d1a7f8",children:Ie("img",{onLoad:()=>t(!0),alt:"video thumbnail",className:_,src:n})})})),null==c?void 0:c.querySelector(`.${Xr.CONTENT_AREA_BACKGROUND_CONTAINER}`))};let Ep,Cp,wp,Tp;Ze(".TranscriptError_lazy_module_refresh__82862687{border:none;padding:4px 12px;gap:4px;height:32px;background:hsla(0,0%,100%,.1);border-radius:4px}.TranscriptError_lazy_module_icon__82862687{width:40px;height:40px}",{}),function(e){e.IDLE="idle",e.LOADED="loaded",e.ERROR="error",e.LOADING="loading"}(Ep||(Ep={})),function(e){e.MAIN="main",e.LANGUAGE="language"}(Cp||(Cp={})),function(e){e.SMALL="small",e.MEDIUM="medium",e.LARGE="large"}(wp||(wp={})),function(e){e.PREV="prev",e.NEXT="down",e.FIRST="first",e.LAST="last"}(Tp||(Tp={}));const{Provider:Lp,useStore:Sp}=Ye(),kp={timecodeDisplayed:!0,selectedSettingsMenu:Cp.MAIN,settingsDisplayed:!1,currentSearchResultIndex:0,searchTerms:"",searchResults:[],transcriptDisabled:!1,autofollowEnabled:!0},Ap=({children:e})=>{const t=Id(e=>e.subscribe),n=Id(e=>e.captions.textTrackEls),i=Id(e=>e.captions.rtlTracks),o=Id(e=>e.config),r=Id(e=>e.events),a=Id(e=>e.displayList.transcript),s=Id(e=>e.displayList.overlay),l=Id(e=>e.appearance.appBreakpoint),c=Id(e=>e.appearance.appSizeMode),u=Qc(),p=((e,t)=>e.map(e=>{const n=e.id.replace(ea.TEXT_TRACK_ID_PREFIX,""),i=t.includes(n);return{id:e.id,label:e.label,language:e.srclang,rtl:i}}))(n,i),_=Ul(o,p),v=He(null==_?void 0:_.language);return Ie(Lp,{createStore:()=>Ge((e,n)=>{const i=(t,n)=>e(e=>d(d({},e),{},{[t]:n})),o=kp.selectedSettingsMenu,m=e=>i("selectedSettingsMenu",e),f=kp.settingsDisplayed,h=t=>{var i,o;const a={};if(t!==(null==(i=n())?void 0:i.settingsDisplayed)){var s,l;a.settingsDisplayed=t;const e=null==(s=n())||null==(l=s.selectedTrack)?void 0:l.language;t?u(Xc.EMBEDDED_TRANSCRIPT_CLICK,{name:"open_embed_transcript_setting",copy:"settings",location:"player_embedded_transcript",element:"embedded_transcript_settings_menu",current_transcript_language:e}):t||e===v.current||(u(Xc.EMBEDDED_TRANSCRIPT_CLICK,{name:"change_language_settings",copy:e,location:"player_embedded_transcript_settings",element:"language_select_panel",current_transcript_language:e}),v.current=e)}(null==(o=n())?void 0:o.settingsDisplayed)&&!t&&(a.selectedSettingsMenu=kp.selectedSettingsMenu),Object.keys(a).length&&e(e=>d(d({},e),a));const c=t?"preact-menu":"";r.fire(Yt._menuVisibilityChanged,c)},g=kp.timecodeDisplayed,b=kp.currentSearchResultIndex,y=e=>i("currentSearchResultIndex",e),E=kp.searchResults,C=e=>{0===e.length&&i("currentSearchResultIndex",0),i("searchResults",e)},w=kp.searchTerms,T=e=>i("searchTerms",e),L=!a||s,S=Pp(l,c),k=kp.autofollowEnabled;function A(){T(kp.searchTerms),C(kp.searchResults),y(kp.currentSearchResultIndex)}return t(e=>{var t;return null==e||null==(t=e.displayList)?void 0:t.transcript},e=>{e||(h(kp.settingsDisplayed),m(kp.selectedSettingsMenu))}),t(e=>{var t,n;return{transcriptVisible:null==e||null==(t=e.displayList)?void 0:t.transcript,overlayVisible:null==e||null==(n=e.displayList)?void 0:n.overlay}},({transcriptVisible:e,overlayVisible:t})=>{i("transcriptDisabled",!(e&&!t))}),t(e=>{var t,n;return{breakpoint:null==e||null==(t=e.appearance)?void 0:t.appBreakpoint,sizeMode:null==e||null==(n=e.appearance)?void 0:n.appSizeMode}},({breakpoint:t,sizeMode:i})=>{const o=Pp(t,i);o!==n().transcriptSizeMode&&e(e=>d(d({},e),{},{transcriptSizeMode:o}))}),t(e=>{var t,n;return{outroDisplayed:null==e||null==(t=e.displayList)?void 0:t.outro,animationActive:null==e||null==(n=e.appearance)?void 0:n.rightContentAreaAnimating}},({outroDisplayed:e,animationActive:t})=>{e&&!t&&A()}),{timecodeDisplayed:g,searchTerms:w,setSearchTerms:T,currentSearchResultIndex:b,setCurrentSearchResultIndex:y,settingsDisplayed:f,setSettingsDisplayed:h,selectedTrack:_,availableTracks:p,setSelectedTrack:e=>{const t=p.find(t=>t.id===e);i("selectedTrack",t),A(),r.fire(Yt._transcriptChanged,t)},selectedSettingsMenu:o,setSelectedSettingsMenu:m,searchResults:E,setSearchResults:C,toggleTimecodeDisplayed:()=>{var e;return i("timecodeDisplayed",!(null==(e=n())?void 0:e.timecodeDisplayed))},toggleSettingsDisplayed:()=>{var e;return h(!(null==(e=n())?void 0:e.settingsDisplayed))},transcriptDisabled:L,transcriptSizeMode:S,autoFollowEnabled:k,setAutoFollowEnabled:e=>i("autoFollowEnabled",e)}}),children:e})};function Pp(e,t){const n=e===ca.XS||e===ca.XXS,i=t===Oo.MINI||t===Oo.TINY;return n||i?wp.SMALL:e===ca.XL||e===ca.XXL?wp.LARGE:wp.MEDIUM}Ze(".TranscriptMessage_lazy_module_container__da8aac6c{display:flex;justify-content:center;flex-direction:column;align-items:center;height:100%;padding:0 48px;gap:24px;width:100%}.TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_messageText__da8aac6c{text-align:center}.TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_icon__da8aac6c{width:40px;height:40px}.TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c{position:absolute;top:16px;right:16px}.TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c,.TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c:active,.TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c:focus,.TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c:hover{background-color:initial!important}.right-content-area-supported.app-mini .TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c,.right-content-area-supported.app-tiny .TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c,.right-content-area-supported.app-xs .TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c,.right-content-area-supported.app-xxs .TranscriptMessage_lazy_module_container__da8aac6c .TranscriptMessage_lazy_module_closeMessageButton__da8aac6c{top:8px;right:8px}",{});Ze(".TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54{margin-left:8px;border:none;background-color:hsla(0,0%,100%,.1)}.TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54 svg path{fill:#fff}.TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54:hover:not(:disabled){background-color:hsla(0,0%,100%,.12)}.TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54:hover:not(:disabled):active{background-color:hsla(0,0%,100%,.3)}.TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54 .TranscriptControlButton_lazy_module_tooltip__0a363e54{top:3.6em;bottom:auto;z-index:1;pointer-events:none}.TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54 .TranscriptControlButton_lazy_module_tooltip__0a363e54.TranscriptControlButton_lazy_module_tooltipDisabled__0a363e54,.TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54 .TranscriptControlButton_lazy_module_tooltip__0a363e54.TranscriptControlButton_lazy_module_tooltipHidden__0a363e54{display:none}.player.app-xl .TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54,.player.app-xxl .TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54{width:48px;height:48px}.player.app-xl .TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54 .TranscriptControlButton_lazy_module_tooltip__0a363e54,.player.app-xxl .TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54 .TranscriptControlButton_lazy_module_tooltip__0a363e54{top:4.5em}.right-content-area-supported.app-mini .TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54,.right-content-area-supported.app-tiny .TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54,.right-content-area-supported.app-xs .TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54,.right-content-area-supported.app-xxs .TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54{border-radius:4px}",{});const Ip=Fe((e,t)=>{let{icon:n,onClick:i,label:o,tooltipLabel:r,disabled:a,className:s}=e,l=Ne(e,["icon","onClick","label","tooltipLabel","disabled","className"]);const c=Id(e=>e.appearance.appBreakpoint),u=Sp(e=>e.transcriptDisabled),p=Sp(e=>e.settingsDisplayed),_=Sp(e=>e.autoFollowEnabled),{onClick:v,onKeyDown:m}=$c(i),f="boolean"!=typeof a?u:a,h=Vr(s,Xr.EXCLUDE_GLOBAL_BUTTON_STYLES,"TranscriptControlButton_lazy_module_transcriptControlButton__0a363e54",Ac.focusableButton);let g=da.MD;c!==ca.XL&&c!==ca.XXL||(g=da.CUSTOM);const b=Ie(Oc,d({ref:t,onClick:v,onKeyDown:m,size:g,icon:n,"aria-label":o,disabled:f,color:ua.CUSTOM,className:h},l)),y=Vr("TranscriptControlButton_lazy_module_tooltip__0a363e54",f&&"TranscriptControlButton_lazy_module_tooltipDisabled__0a363e54",(p||!_)&&"TranscriptControlButton_lazy_module_tooltipHidden__0a363e54");return Ie(Cc,{tooltipText:r,className:y,children:b})}),Rp=({className:e})=>{const t=Sp(e=>e.selectedTrack),n=Id(e=>e.displayList.transcript),i=Id(e=>e.setDisplayList),o=Qc(),r=!n;return Ie(Ip,{icon:Ie(tc,{name:Jl.CLOSE,focusable:"false"}),label:"Close Transcript",tooltipLabel:"Close",onClick:()=>{i("transcript",!1),o(Xc.EMBEDDED_TRANSCRIPT_CLICK,{name:"exit_embed_transcript",copy:"Close Transcript",location:"player_embedded_transcript",element:"x_button",current_transcript_language:t.language})},disabled:r,"aria-controls":Qr.TRANSCRIPT_VIEWER,className:e})},Op=({message:e,icon:t,componentType:n,children:i})=>Ie("div",{className:"TranscriptMessage_lazy_module_container__da8aac6c","data-component-type":n,children:[Ie(Rp,{className:"TranscriptMessage_lazy_module_closeMessageButton__da8aac6c"}),t||Ie(tc,{name:Jl.INFO_CIRCLE,className:"TranscriptMessage_lazy_module_icon__da8aac6c"}),Ie(Sc,{size:va.LG,weight:ma.BOLD,className:"TranscriptMessage_lazy_module_messageText__da8aac6c",children:e}),i]}),Np=({onRetry:e})=>{const t=Qc(),n=Sp(e=>e.selectedTrack),i=Ie(tc,{name:Jl.WARN_CIRCLE,className:"TranscriptError_lazy_module_icon__82862687"}),o=Vr(Xr.EXCLUDE_GLOBAL_BUTTON_STYLES,"TranscriptError_lazy_module_refresh__82862687");return Ie(Op,{message:"There was a problem loading the transcript.",componentType:"transcript-error",icon:i,children:Ie(Oc,{className:o,size:da.CUSTOM,onClick:()=>{e(),t(Xc.EMBEDDED_TRANSCRIPT_CLICK,{name:"click_refresh_error",copy:"Refresh",location:"player_embedded_transcript_error",element:"refresh_transcript_button",current_transcript_language:n.language})},"data-component-type":"retry-request",children:Ie(Sc,{size:va.MD,weight:ma.BOLD,children:"Refresh"})})})},Mp=()=>{const e=He(!0),{module:t,load:n,readyState:i}=zc(function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];try{return Promise.resolve(e.apply(this,t))}catch(Ie){return Promise.reject(Ie)}}}((function(){return import("./Transcript.lazy.module.js")}))),o=null==t?void 0:t.Transcript,r=Id(e=>e.displayList.transcript),a=Id(e=>e.embed.transcript);return r&&e.current&&(n(),e.current=!1),!a||i!==Yc.LOADED&&!r?null:Ie(Ue,{children:[i===Yc.LOADING&&Ie(Bc,{}),i===Yc.ERROR&&Ie(Np,{onRetry:n}),i===Yc.LOADED&&Ie(o,{})]})};let Dp;const xp=()=>{const e=Id(e=>e.playback.buffering),t=Id(e=>e.playback.isChromecastBuffering),n=Id(e=>e.playback.isChromecastConnected),i=Id(e=>e.displayList.progressBar),[o,r]=xe(!1);return e||t?Dp=setTimeout(()=>{r(!0)},600):(clearTimeout(Dp),r(!1)),i&&Ie(Ue,{children:[Ie(Tl,{visible:n||o,styleOverrides:{enterActive:{opacity:.4},exit:{opacity:.4}},children:Ie("div",{className:"BufferHandler_module_shade__cb05e8a3","data-shade":!0})}),Ie(Tl,{visible:o,children:Ie(Bc,{size:ha.LG})})]})};const Bp=()=>{const e=Id(e=>e.captions.activeCues),t=Id(e=>e.captions.language),n=Id(e=>e.captions.direction),i=Id(e=>e.displayList.captions),o=Id(e=>e.displayList.controlBar),r=Id(e=>e.displayList.progressBar),a=Id(e=>e.appearance.fullscreen),s=Id(e=>e.embed.rightContentAreaEnabled),l=Id(e=>e.captions.fontSize),c=Id(e=>e.captions.fontFamily),d=Id(e=>e.captions.fontOpacity),u=Id(e=>e.captions.color),p=Id(e=>e.captions.bgColor),_=Id(e=>e.captions.bgOpacity),v=Id(e=>e.captions.windowOpacity),m=Id(e=>e.captions.windowColor),f=Id(e=>e.captions.edgeStyle),h=Id(e=>e.appearance.videoHeight),g=Id(e=>e.appearance.containerHeight),b=Id(e=>e.embed.transparent);let y=null,E={};!a&&b||h<g-58&&(y=`translateY(-${(g-h)/2}px)`,E.transform=y);const C=Vr("Captions_module_captions__5a5f9181",!i&&"Captions_module_hide__5a5f9181",o&&!y&&"Captions_module_withControls__5a5f9181",!r&&"Captions_module_noPlaybar__5a5f9181",a&&"Captions_module_fullscreen__5a5f9181",s&&"Captions_module_contentAreaSibling__5a5f9181");return Ie(Hc,{cues:e,language:t,direction:n,className:C,fontSize:l,fontFamily:c,fontOpacity:d,color:u,bgColor:p,bgOpacity:_,windowOpacity:v,windowColor:m,edgeStyle:f,height:h,style:E})};const Vp=e=>{let{tooltipLabel:t,icon:n,onClick:i,containerRef:o,className:r}=e,a=Ne(e,["tooltipLabel","icon","onClick","containerRef","className"]);const s=Id(e=>e.appearance.playerBreakpoint),l=["xl","xxl"].includes(s)?16:8,c=Vr("ToastButton_module_toastButton__2645584b",Xr.EXCLUDE_GLOBAL_BUTTON_STYLES,r);return t?Ie(Cc,{tooltipText:t,position:Ec.BOTTOM,containerEl:o,margin:l,children:Ie(Oc,d({color:ua.ALTERNATIVE,size:da.CUSTOM,icon:n,iconSize:da.CUSTOM,onClick:i,className:c},a))}):Ie(Oc,d({color:ua.ALTERNATIVE,size:da.CUSTOM,icon:n,iconSize:da.CUSTOM,onClick:i,className:c},a))};const Up=({transitionTime:e,delay:t=400,ariaLabelledby:n})=>{const i=`width ${e-t}ms linear`,[o,r]=xe({});return Oe(()=>{const e=setTimeout(()=>{r({transition:i,width:"100%"})},t);return()=>{clearTimeout(e)}},[r,i,t]),Ie("div",{className:"Progress_module_progressWrapper__64de5bf5",role:"progressbar","aria-labelledby":n,children:Ie("div",{className:"Progress_module_progress__64de5bf5",style:o})})};const Fp=()=>Ie("div",{className:"Divider_module_divider__ab2a5c61"});let Hp;const qp=({containerRef:e})=>{const t=Id(e=>e.setToast),[n,i]=xe(!1),[o,r]=xe(!1),[a,s]=xe(!1),l=Qc();Oe(()=>{l(Xc.VIEW_PLAYER_CSAT_V1),Hp=setTimeout(()=>{t("purpose",Ld.EMPTY)},1e4)},[l,t]);return Ie(Ue,{children:[Ie(Up,{transitionTime:1e4,ariaLabelledby:Jr.QOE_SURVEY_TEXT}),Ie(Sc,{id:Jr.QOE_SURVEY_TEXT,weight:ma.NORMAL,className:"QoESurvey_module_label__d95c990a",sizeMap:{[ca.XXS]:va.SM,[ca.SM]:va.MD,[ca.XL]:va.LG,[ca.XXL]:va.XL},children:"How's the viewing experience?"}),Ie(Vp,{className:`QoESurvey_module_thumbsUp__d95c990a ${n?"QoESurvey_module_selected__d95c990a":""}`,tooltipLabel:"Good","aria-label":"Good","aria-describedby":Jr.QOE_SURVEY_TEXT,icon:Ie(tc,{name:n?Jl.THUMBS_UP_FILLED:Jl.THUMBS_UP}),onClick:()=>{n||o||a||(l(Xc.SELECT_THUMBS_UP_PLAYER_CSAT_V1),i(!0),clearTimeout(Hp),setTimeout(()=>{t("purpose",Ld.EMPTY)},200))},containerRef:e}),Ie(Vp,{className:`QoESurvey_module_thumbsDown__d95c990a ${o?"QoESurvey_module_selected__d95c990a":""}`,tooltipLabel:"Poor","aria-label":"Poor","aria-describedby":Jr.QOE_SURVEY_TEXT,icon:Ie(tc,{name:o?Jl.THUMBS_DOWN_FILLED:Jl.THUMBS_DOWN}),onClick:()=>{n||o||a||(l(Xc.SELECT_THUMBS_DOWN_PLAYER_CSAT_V1),r(!0),clearTimeout(Hp),setTimeout(()=>{t("purpose",Ld.EMPTY)},200))},containerRef:e}),Ie(Fp,{}),Ie(Vp,{className:`QoESurvey_module_close__d95c990a ${a?"QoESurvey_module_selected__d95c990a":""}`,icon:Ie(tc,{name:Jl.DISMISS_X}),onClick:()=>{n||o||a||(l(Xc.DISMISS_PLAYER_CSAT_V1),s(!0),clearTimeout(Hp),t("purpose",Ld.EMPTY))},"aria-label":"Close","aria-describedby":Jr.QOE_SURVEY_TEXT})]})},$p={[Ld.QOE_SURVEY]:Jr.QOE_SURVEY_TEXT},Wp=()=>{const e=He(null),t=Id(e=>e.toast.purpose),n=Id(e=>e.setDisplayList),[i,o]=xe(t),r=t!==Ld.EMPTY,a=$p[t];return r?(o(t),n("toast",!0)):setTimeout(()=>{o(t),n("toast",!1)},400),Ie(qc,{ref:e,visible:r,ariaLabelledby:a,children:i===Ld.QOE_SURVEY&&Ie(qp,{containerRef:e})})};let Yp;!function(e){e.FACE_WITH_OPEN_MOUTH="face_with_open_mouth",e.FIRE="fire",e.HEART="heart",e.HEART_EYES="heart_eyes",e.THINKING_FACE="thinking_face",e.THUMBS_UP="thumbs_up"}(Yp||(Yp={}));const Gp=[Yp.THUMBS_UP,Yp.FIRE,Yp.HEART,Yp.FACE_WITH_OPEN_MOUTH,Yp.THINKING_FACE,Yp.HEART_EYES];function zp(e,t){const n=t.querySelector(`.${Kr.VP_PLAYER_UI_CONTAINER}`),i=t.querySelector(`.${Kr.VP_PLAYER_UI_OVERLAYS}`);Qe(Ie(np,{player:e,children:[Ie(Ju,{}),Ie(lp,{}),Ie(ip,{element:i,children:[Ie(Wp,{}),Ie(fp,{}),Ie(cp,{}),Ie(ou,{}),Ie(qd,{}),Ie(eu,{}),Ie(au,{}),Ie(Zu,{}),Ie(sp,{}),Ie(Xu,{}),Ie(tp,{}),Ie(vp,{}),Ie(xp,{}),Ie(Bp,{})]}),Ie(yp,{}),Ie(bp,{children:Ie(Mp,{})})]}),n)}function jp(e,t,n,i){oo.helpers=tl;const r=function(e){if(!0===e)return Promise.resolve(null);let t=!1;return new Promise((n,i)=>{e.link.addEventListener("load",()=>{if(!t){t=!0;const i=(new Date).getTime()-e.startTime;setTimeout(()=>n(i),100)}},!1)})}(n),s=new Na({element:e,delegate:i,cssLoadedPromise:r}),l=s.store;e.classList.add("js-player-fullscreen");let c=s.expose,d=null,u=null,p=null,_=null,v=null,m=null,f=null,h=null,g=null,b=null,y=null;const E=e.querySelector(".vp-controls"),C={tiny:Yt._enteredTinyMode,mini:Yt._enteredMiniMode,normal:Yt._enteredNormalMode,none:Yt._enteredNormalMode};function w(t){t&&void 0!==C[t]&&(s.events.fire(C[t]),e.classList.toggle("player-normal","normal"===t),e.classList.toggle("player-mini","mini"===t),e.classList.toggle("player-tiny","tiny"===t))}function T(t){t&&void 0!==C[t]&&(e.classList.toggle("app-normal","normal"===t),e.classList.toggle("app-mini","mini"===t),e.classList.toggle("app-tiny","tiny"===t))}function L(t){Object.keys($i).forEach(n=>e.classList.toggle(`player-${n}`,t===n))}function S(t){Object.keys($i).forEach(n=>e.classList.toggle(`app-${n}`,t===n))}function k(){const t=s.config.embed.settings,n=(s.config.view===jt.main||s.config.view===jt.privateUnlocked||jt.webinarUnlocked)&&t&&!t.playbar;e.classList.toggle("no-playbar",n),e.classList.toggle("with-fullscreen",!!t.fullscreen);const i=t.custom_logo;e.classList.toggle("with-custom-logo",!!i),e.classList.toggle("with-sticky-custom-logo",i&&i.sticky),e.classList.toggle("hide-controls-mode",!!t.background||0===t.controls),e.classList.toggle("touch-support",o.touch),e.classList.toggle("is-google-bot",o.isGoogleBot)}function A(e,t=s.config.video.url){if(!(!t||e&&e.metaKey)){if(-1===t.indexOf("#")&&s.backbone.currentTime>0&&s.backbone.currentTime<s.config.video.duration-30&&!s.backbone.paused&&(t+=`#at=${Math.floor(s.backbone.currentTime)}`),!s.config.embed.on_site)return window.open(t),function(e){if(e&&e.detail>0)try{document.activeElement.blur()}catch(Ie){}}(e),s.events.fire(Yt._pauseButtonPressed),!1;window.location=t}}function P(){f||(w(l.get("ui.player.mode")),f=l.watch("ui.player.mode",w)),h||(w(l.get("ui.app.mode")),h=l.watch("ui.app.mode",T))}function I(){v||(L(l.get("ui.player.breakpoint")),v=l.watch("ui.player.breakpoint",L)),m||(S(l.get("ui.app.breakpoint")),m=l.watch("ui.app.breakpoint",S))}function R(){s.config.video.live_event?l.get(jn)||l.get(Xn)?b&&(b.disable(),b=null):(b=new Ba(e,s,l),new cl(s,l)):b&&(b.disable(),b=null)}function O(){k(),g=new Promise((e,t)=>{let n=null;const i=()=>{clearTimeout(n),window.innerWidth>0&&window.innerHeight>0?e():n=setTimeout(i,250)};s.events.once(Yt._ready,i),s.events.once(Yt._error,i)}),function(){const e=(e,t)=>s.verifyConfig().then(()=>{const{signature:n,session:i,timestamp:o,expires:r}=s.config.request,l=`https://${s.config.player_url}/video/${s.config.video.id}/${e}?signature=${n}&session=${i}&time=${o}&expires=${r}`;return a(l,{method:t,withCredentials:!0})}).catch(n=>{Tn.captureException(n,{extra:{action:e,method:t}})}),t=(e,t)=>s.updatePhpTokens().then(()=>{const n="following"===e?s.config.video.owner.id:s.config.video.id,i=s.config.user.vimeo_api_interaction_tokens;let o="";if(i)switch(o="?auth=",e){case"likes":o+=i.likes;break;case"watchlater":o+=i.watch_later;break;case"following":o+=i.following}const r=s.config.video.unlisted_hash&&"following"!==e?`:${s.config.video.unlisted_hash}`:"",l=`https://${s.config.vimeo_api_url}/users/${s.config.user.id}/${e}/${n}${r}${o}`;return a(l,{method:t,jwt:s.config.user.vimeo_api_client_token}).catch(n=>{Tn.captureException(n,{extra:{action:e,method:t}})})}).catch(e=>{Tn.captureException(e)});s.events.on(Yt._vodButtonPressed,e=>{if(s.config.user.purchased)return!s.config.video.vod.is_feature&&s.config.video.vod.feature_id?void s.loadVideo(s.config.video.vod.feature_id).then(()=>(s.events.fire(Yt._playButtonPressed),s.config.video.vod.feature_id)).catch(e=>{Tn.captureException(e),s.events.fire(Mt._showOverlay,"error",{title:"Sorry",message:"There was a problem. Please try again."})}):void s.events.fire(Yt._playButtonPressed);s.config.video.vod&&s.config.video.vod.is_coming_soon?A(null,s.config.video.vod.url):s.performDelegateAction(Ut,()=>{s.events.fire(Mt._openPopup,"purchase",{productId:e})},[e])}),s.events.on(Yt._likeButtonPressed,()=>{s.config.user.logged_in?s.config.user.id!==s.config.video.owner.id&&(s.config.user.liked?s.performDelegateAction(xt,(function(){"disable"!==s.config.video.privacy?t("likes","DELETE"):e("like","DELETE"),s.config.user.liked=!1,s.events.fire(Yt._unliked)})):s.performDelegateAction(Dt,(function(){"disable"!==s.config.video.privacy?t("likes","PUT"):e("like","PUT"),s.config.user.liked=!0,s.events.fire(Yt._liked)}))):s.performDelegateAction(Ht,()=>{s.events.fire(Mt._openPopup,"login-like")})}),s.events.on(Yt._watchLaterButtonPressed,()=>{(s.config.video.url||"unlisted"===s.config.video.privacy)&&(s.config.user.logged_in?s.config.user.watch_later?s.performDelegateAction(Vt,()=>{t("watchlater","DELETE"),s.config.user.watch_later=!1,s.events.fire(Yt._removedFromWatchLater)}):s.performDelegateAction(Bt,()=>{t("watchlater","PUT"),s.config.user.watch_later=!0,s.events.fire(Yt._addedToWatchLater)}):s.performDelegateAction(Ht,()=>{s.events.fire(Mt._openPopup,"login-watch-later")}))}),s.events.on(Yt._collectionsButtonPressed,()=>{s.performDelegateAction(qt,()=>{s.config.video.vod&&s.config.video.vod.url?A(null,`${s.config.video.vod.url}#collections`):s.config.video.url&&A(null,`${s.config.video.url}#collections`)})}),s.events.on(Yt._shareButtonPressed,()=>{const e=s.config.embed.settings.share&&s.config.embed.settings.share.embed_only,t=()=>{s.events.fire(Mt._showOverlay,"share",e)};Z.element?t():s.performDelegateAction(Ft,t)}),s.events.on(Yt._embedButtonPressed,()=>{s.config.embed.settings.share.embed_only&&s.performDelegateAction(Ft,()=>{s.events.fire(Mt._showOverlay,"share",!0)})}),s.events.on(Yt._followButtonPressed,()=>{if(s.config.user.logged_in&&s.config.user.id!==s.config.video.owner.id){if(s.config.user.following)return t("following","DELETE"),s.config.user.following=!1,void s.events.fire(Yt._unfollowed);t("following","PUT"),s.config.user.following=!0,s.events.fire(Yt._followed)}})}(),s.events.on(Yt._pausedForAd,()=>{e.classList.add("player-ad")}),s.events.on([Yt._resumedAfterAd,Mt._reset],()=>{e.classList.remove("player-ad")}),function(){const t=function(){return function(e,t,n){return e&&e.then||(e=Promise.resolve(e)),t?e.then(t):e}(g,(function(){const t=function(){const{width:t,height:n}=ct(e);return _n?n<=200?"10px":t<450?"12px":t<=1024?"11px":"10px":"10px"}();E&&(E.style.fontSize=t);const n=e.querySelector(".vp-sidedock");n&&(n.style.fontSize=t)}))};s.events.on(Yt._didEnterFullscreen,t),s.events.on(Yt._didExitFullscreen,t),window.addEventListener("orientationchange",t),_n&&(e.classList.add("mobile"),t())}(),P(),I(),function(){function t(){let t=e;if(i&&i.getFullscreenElement&&"function"==typeof i.getFullscreenElement){const n=i.getFullscreenElement();n&&n instanceof HTMLElement&&n.contains(e)&&n.classList.contains("js-player-fullscreen")&&(t=n)}return t}s.config.embed.fullscreen=!0,o.iPad&&e.classList.add("no-fullscreen-api-support");const n=s.config.embed.playsinline&&(o.iOS>=10||Zt),r=o.iPad||n;Z.enabled||r||(e.classList.add("no-fullscreen-support"),o.iOS||(s.config.embed.fullscreen=!1));let a=!1,l=!1;s.events.on(Mt._forceFullscreen,(function(){Z.enabled||Z.videoEnabled(e)?(s.events.fire(Yt._willEnterFullscreen),l=!1,Z.request(t())):s.events.fire(Mt._toggleNativeControls,!0)})),s.events.on(Yt._fullscreenButtonPressed,(function(){s.backbone.pictureInPictureActive&&s.backbone.exitPictureInPicture(),Z.element?(s.events.fire(Yt._willExitFullscreen),Z.exit()):(s.events.fire(Yt._willEnterFullscreen),l=!0,Z.request(t()))}));var c=Z.onenter,d=Z.onexit;if(Z.onenter=function(e){null!==document.webkitFullScreenElement&&(a||(t().contains(e)?function(e,n){a||(a=!0,s.events.fire(Yt._didEnterFullscreen,t()===e,l))}(e):"function"==typeof c&&c(e)))},Z.onexit=function(){document.webkitFullScreenElement||(a?a&&(a=!1,s.events.fire(Yt._didExitFullscreen,l),l||s.events.fire(Mt._toggleNativeControls,!1),l=!1):"function"==typeof d&&d())},Le(e).on("click","a",(function(e){Z.element===t()&&Z.exit()})),Le(e).on("gestureend",(function(e){e.scale>1&&s.events.fire(Yt._fullscreenButtonPressed)})),"undefined"!=typeof MSGesture){var u=1,p=new MSGesture;p.target=e,Le(e).on("pointerdown",(function(e){p.addPointer(e.pointerId)})).on(["MSGestureChange"],(function(e){u*=e.scale})).on(["MSGestureEnd"],(function(){(!a&&u>=2||a&&u<1)&&s.events.fire(Yt._fullscreenButtonPressed),u=1}))}}(),function(){const t=er("vimeo-logo",s.config);Ua(e,"a[data-clip-link]",e=>A(e,t)),s.events.on(Mt._openVimeo,A)}(),R(),s.config.video.webinar?y=new il(s,l):y&&(y.disable(),y=null),s.events.on(Yt._configChanged,()=>{k(),R()}),s.events.on(Mt._destroy,()=>{var e;null==(e=b)||e.disable()})}function N(){d||(d=new Ls(s,l,e.querySelector(".vp-overlay-wrapper")))}function M(){u||(u=new $s(s,{uuid:s.uuid,id:e.id,isMobileDevice:!1}))}function D(){p||(p=new Ys(s))}let x;function B(e=400){var t,n;x&&clearTimeout(x),null==(t=s.element)||null==(n=t.classList)||n.add("animating"),x=setTimeout(()=>{var e,t;null==(e=s.element)||null==(t=e.classList)||t.remove("animating")},e)}function V(e){var t;const{embed:n}=e;return!!n.wirewax&&!!n.interactive_id&&!vo(null==(t=n.interactive)?void 0:t.demo_end)}const U={initializationHandler:()=>(function(){N(),M(),D(),o.browser.ie||(V(s.config)&&(_=new ul(s)),s.events.on(Yt._configChanged,e=>{e&&(!_&&V(s.config)?_=new ul(s):_&&V(s.config)?_.resetWirewax():_&&!V(s.config)&&(_.destroyWirewax(),_=null))})),s.events.on(Yt._rightContentAreaVisibilityChange,e=>{e&&!s.element.classList.contains("right-content-area-open")?(B(),s.element.classList.add("right-content-area-open")):!e&&s.element.classList.contains("right-content-area-open")&&(B(),s.element.classList.remove("right-content-area-open"))}),s.events.on(Yt._rightContentAreaEnabled,()=>{var e,t;null==(e=s.element)||null==(t=e.classList)||t.add("right-content-area-supported"),Array.from(s.element.querySelectorAll("[data-content-area-sibling-eligible]")).forEach(e=>{var t;return null==e||null==(t=e.classList)?void 0:t.add("content-area-sibling-enabled")})}),s.events.on(Yt._rightContentAreaDisabled,()=>{var e,t;null==(e=s.element)||null==(t=e.classList)||t.remove("right-content-area-supported"),Array.from(s.element.querySelectorAll("[data-content-area-sibling-eligible]")).forEach(e=>{var t;return null==e||null==(t=e.classList)?void 0:t.remove("content-area-sibling-enabled")})}),new Da(s,l,e);const t=new Qs(s,l,e);new Va(s,e.querySelector(".vp-notification-wrapper")),new Ya(s,l,e.querySelector(".vp-outro-wrapper")),new zp(s,e),Object.defineProperties(c,{pauseKeyboard:{enumerable:!0,value:t.pause},unpauseKeyboard:{enumerable:!0,value:t.unpause}})}(),O(),Promise.resolve()),postInitializationHandler:()=>(s.backbone&&new rl(s,s.backbone,e),Promise.resolve()),authorizationHandler(e){var t,n;I(),P(),e(),N(),M();let i="Error",o="Unhandled video privacy";switch(s.config.view){case jt.privatePassword:return new Promise((e,t)=>{s.events.fire(Mt._showOverlay,"password"),s.events.once(Yt._passwordUnlocked,t=>{e(t)})});case jt.privateLocked:D();const e={loggedIn:{name:"error",data:{title:"Private Video",message:"Sorry, you don’t have permission to watch.",modal:!0,logo:!!s.config.embed.settings.logo,icon:"lock"}},notLoggedIn:{name:"private-locked",data:null}};let r,a;return s.config.user.logged_in?(r=e.loggedIn,a=Promise.reject()):(r=e.notLoggedIn,a=new Promise((t,n)=>{s.events.once(Yt._privateUnlocked,i=>{if(i.view===jt.privateLocked)return r=e.loggedIn,s.events.fire(Mt._showOverlay,r.name,r.data),void n();t(i)})})),s.events.fire(Mt._showOverlay,r.name,r.data),a;case jt.error:i=s.config.title,o=s.config.message;break;case jt.webinarBlocked:return D(),s.events.fire(Mt._showOverlay,"webinar-confirmation"),Promise.reject();case jt.webinarLocked:if(null==(t=s.config.video.webinar)?void 0:t.registration_form)return new Promise((e,t)=>{s.events.fire(Mt._showOverlay,"email-capture"),s.events.once(Yt._webinarFormSuccess,t=>{e(t)})});break;case jt.webinarFull:if(null==(n=s.config.video.webinar)?void 0:n.registration_form)return new Promise((e,t)=>{s.events.fire(Mt._showOverlay,"email-capture",{registration_full:!0}),s.events.once(Yt._webinarFormSuccess,t=>{e(t)})})}return s.events.fire(Mt._showOverlay,"error",{title:i,message:o,modal:!0}),Promise.reject()}};return s.init(t,U).catch(t=>{Tn.captureException(t),N(),M(),e.classList.remove("loading"),s.events.fire(Yt._error,cn.id,cn)}),c}window.requestModule=window.requestModule||Je,window.BigScreen=window.BigScreen||Z;export{sc as A,Xc as B,Xr as C,dc as D,rc as E,Tp as F,Jl as G,Ip as H,tc as I,xc as J,Op as K,To as L,uc as M,Ap as N,Np as O,ic as P,Rp as Q,Bc as R,Cp as S,Ep as T,hr as U,gr as V,jp as VimeoPlayer,fr as W,Yp as X,Gp as Y,No as a,tr as b,Fl as c,Sp as d,Qr as e,Bl as f,Dl as g,Or as h,jc as i,tt as j,Qc as k,ql as l,Hl as m,Vl as n,wp as o,xl as p,Tl as q,Oc as r,da as s,Vr as t,Id as u,Ac as v,pc as w,Vc as x,fc as y,va as z};