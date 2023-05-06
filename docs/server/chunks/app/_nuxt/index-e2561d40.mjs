import { ref, resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import VueScrollTo from 'vue-scrollto';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import '@oruga-ui/oruga-next';
import '@oruga-ui/theme-bulma';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$2 = {
  __name: "navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const showNav = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "navbar is-dark is-tab is-transparent is-spaced",
        role: "navigation",
        "aria-label": "main navigation"
      }, _attrs))}><div class="navbar-brand"><a class="navbar-item" href="/"><p class="title has-text-primary has-text-weight-bold">Huawei <span class="has-text-white">Open Day</span></p></a><a role="button" aria-label="menu" aria-expanded="false" class="${ssrRenderClass([{ "is-active": showNav.value }, "navbar-burger"])}"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></a></div><div class="${ssrRenderClass([{ "is-active": showNav.value }, "navbar-menu has-text-weight-bold"])}"><div class="navbar-end"><a class="navbar-item is-tab"> Home </a><a class="navbar-item is-tab"> About </a><a class="navbar-item is-tab"> Speakers </a><a class="navbar-item is-tab"> Schedule </a><a class="navbar-item is-tab"> Venue </a><a class="navbar-item is-tab"> Booth </a><a class="navbar-item is-tab"> Partners </a><a class="navbar-item is-tab"> Contact </a><div class="navbar-item"><a class="button is-primary is-rounded" href="https://docs.google.com/forms/d/e/1FAIpQLSfjhr9bv0SeIVUE2k9uNqkrbcj3UZ2W2SCC-_APKPmoerL8MQ/viewform?usp=sf_link" target="_blank"><strong>Join Now</strong></a></div></div></div></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const navbar = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="content has-text-centered"><p> Copyright \xA9 ${ssrInterpolate(( new Date()).getFullYear())} <strong>Huawei Open Day: Intelligent World 2030</strong>. All rights reserved. </p></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ofooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isVideoModalActive = ref(false);
    const scrollToElement = (id, duration) => {
      VueScrollTo.scrollTo(id, {
        duration: 500
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_o_button = resolveComponent("o-button");
      const _component_o_modal = resolveComponent("o-modal");
      _push(`<!--[--><div class="hero is-fullheight" id="home"><div class="hero-head overlay-50">`);
      _push(ssrRenderComponent(navbar, null, null, _parent));
      _push(`</div><div class="hero-body is-justify-content-center has-text-centered overlay-50"><div class="container"><div class="columns is-multiline"><div class="column is-full"><p class="title is-1 has-text-weight-bold has-text-white">Huawei Open Day: </p><p class="title is-1 has-text-weight-bold has-text-white"><span class="px-3 has-text-primary has-background-white" style="${ssrRenderStyle({ "border-radius": "5px", "padding-top": "" })}">Intelligent World</span> 2030 </p><p class="title has-text-weight-bold has-text-white">9th May 2023, 9 am to 5 pm, Auditorium Library &amp; Pusat Akademik Pelajar, UMP Pekan</p></div><div class="column is-full">`);
      _push(ssrRenderComponent(_component_o_button, {
        size: "large",
        variant: "primary",
        onClick: ($event) => isVideoModalActive.value = true,
        "icon-left": "play",
        rounded: ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_o_modal, {
        active: isVideoModalActive.value,
        "onUpdate:active": ($event) => isVideoModalActive.value = $event,
        closeIconSize: "small"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<figure class="image is-16by9"${_scopeId}><iframe class="has-ratio" src="https://www.huawei.com/mediafiles/MediaFiles/2/1/2/{2121536E-2920-4260-AAEE-59DD37B7ECEB}intelligent-2030-en-720.mp4" frameborder="0" allowfullscreen${_scopeId}></iframe></figure>`);
          } else {
            return [
              createVNode("figure", { class: "image is-16by9" }, [
                createVNode("iframe", {
                  class: "has-ratio",
                  src: "https://www.huawei.com/mediafiles/MediaFiles/2/1/2/{2121536E-2920-4260-AAEE-59DD37B7ECEB}intelligent-2030-en-720.mp4",
                  frameborder: "0",
                  allowfullscreen: ""
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="column is-full">`);
      _push(ssrRenderComponent(_component_o_button, {
        variant: "primary",
        class: "has-text-weight-semibold has-text-white",
        outlined: "",
        rounded: "",
        onClick: ($event) => scrollToElement("#about")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About The Event`);
          } else {
            return [
              createTextVNode("About The Event")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div></div></div></div></div><div class="hero has-text-white" id="about"><div class="hero-body overlay-75"><div class="container"><div class="columns is-multiline"><div class="column is-6"><p class="title has-text-white">About The Event</p><p>Huawei&#39;s Intelligent World 2030 vision aims to improve quality of life through technology and sustainability. It includes sustainable diets, comfortable living spaces, and eliminating city traffic congestion and pollution.</p></div><div class="column is-3"><p class="title is-5 has-text-white">WHERE</p><p> Auditorium Library &amp; Pusat Akademik Pelajar, UMP Pekan </p></div><div class="column is-3"><p class="title is-5 has-text-white">WHEN</p><p> 9th May 2023, 9 am to 5 pm </p></div></div></div></div></div>`);
      _push(ssrRenderComponent(ofooter, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-e2561d40.mjs.map
