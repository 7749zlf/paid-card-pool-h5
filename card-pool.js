const unlockKey = "paid-card-pool-unlocked";
const orderKey = "paid-card-pool-order";
const historyKey = "paid-card-pool-history";
const unlockedCardsKey = "paid-card-pool-unlocked-cards";

const paymentConfig = {
  pool: {
    title: "解锁朝花夕遇卡池",
    itemLabel: "卡池入口",
    itemValue: "开放抽取权限",
    amount: "¥18.00",
    buttonText: "确认支付并解锁",
    loadingText: "正在创建订单",
    rule: "支付后开放卡池入口，之后每次抽取仍需单独付费。",
    orderTitle: "卡池入口解锁"
  },
  draw: {
    title: "付费抽取一次",
    itemLabel: "抽取内容",
    itemValue: "随机解锁 1 个未解锁内容",
    amount: "¥6.00",
    buttonText: "确认支付并抽取",
    loadingText: "正在创建抽取订单",
    rule: "每次支付成功后随机解锁 1 个未解锁内容。",
    orderTitle: "单次抽取"
  }
};

const cards = [
  {
    id: "ssr-01",
    name: "晨樱之约",
    rarity: "SSR",
    rate: 1.2,
    tag: "限定主卡",
    description: "春日晨光中的主线卡面，解锁后可查看完整插画。",
    image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=800&q=82"
  },
  {
    id: "ssr-02",
    name: "星桥回望",
    rarity: "SSR",
    rate: 1.2,
    tag: "限定主卡",
    description: "星桥场景的高稀有卡面，适合作为付费卡池展示位。",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=82"
  },
  {
    id: "sr-01",
    name: "花影来信",
    rarity: "SR",
    rate: 5.6,
    tag: "剧情卡",
    description: "承接剧情片段的中稀有卡面。",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=82"
  },
  {
    id: "sr-02",
    name: "月下剪影",
    rarity: "SR",
    rate: 5.6,
    tag: "剧情卡",
    description: "夜色主题卡面，解锁后展示清晰内容。",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=82"
  },
  {
    id: "sr-03",
    name: "微风停驻",
    rarity: "SR",
    rate: 5.6,
    tag: "场景卡",
    description: "轻剧情场景卡，可用于补充卡池内容。",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=82"
  },
  {
    id: "sr-04",
    name: "花火回声",
    rarity: "SR",
    rate: 5.6,
    tag: "剧情卡",
    description: "节日花火下的支线剧情卡面。",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=82"
  },
  {
    id: "r-01",
    name: "白昼花径",
    rarity: "R",
    rate: 13.6,
    tag: "基础卡",
    description: "普通卡池内容，解锁后可见卡面详情。",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=82"
  },
  {
    id: "r-02",
    name: "暖色窗边",
    rarity: "R",
    rate: 13.6,
    tag: "基础卡",
    description: "日常氛围卡面。",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=82"
  },
  {
    id: "r-03",
    name: "雨后石阶",
    rarity: "R",
    rate: 13.6,
    tag: "基础卡",
    description: "低稀有度场景卡。",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=82"
  },
  {
    id: "r-04",
    name: "旧梦书页",
    rarity: "R",
    rate: 13.6,
    tag: "基础卡",
    description: "可作为剧情补充的普通卡。",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=82"
  },
  {
    id: "r-05",
    name: "回廊灯火",
    rarity: "R",
    rate: 13.6,
    tag: "基础卡",
    description: "灯光主题普通卡面。",
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=82"
  },
  {
    id: "r-06",
    name: "薄暮便签",
    rarity: "R",
    rate: 13.6,
    tag: "基础卡",
    description: "记录日常线索的普通卡面。",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=82"
  }
];

const videoOptions = [
  {
    label: "视频 1",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=82"
  },
  {
    label: "视频 2",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=82"
  },
  {
    label: "视频 3",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    poster: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=82"
  }
];

const state = {
  unlocked: localStorage.getItem(unlockKey) === "true",
  order: readJson(orderKey, null),
  history: readJson(historyKey, []),
  unlockedCards: readJson(unlockedCardsKey, []),
  activeTab: "pool",
  view: "player",
  previousView: "player",
  currentVideo: 0,
  paymentMode: "pool",
  payPromptVisible: false,
  payPromptVideo: null,
  drawAnimationCard: null,
  paying: false,
  currentEpisode: 3,
  saved: false,
  liked: false,
  videoMuted: true,
  speedIndex: 0,
  touchStartY: 0,
  touchStartX: 0,
  touchDeltaY: 0,
  isDraggingVideo: false,
  wheelLocked: false
};

const elements = {
  playerView: document.getElementById("player-view"),
  poolView: document.getElementById("pool-view"),
  profileView: document.getElementById("profile-view"),
  videoStage: document.querySelector(".video-stage"),
  videoRail: document.getElementById("video-rail"),
  promptRail: document.getElementById("prompt-rail"),
  dramaVideos: document.querySelectorAll(".drama-video"),
  videoSlides: document.querySelectorAll(".video-slide"),
  promptSlides: document.querySelectorAll(".prompt-slide"),
  videoProgress: document.getElementById("video-progress"),
  muteButton: document.getElementById("mute-button"),
  saveButton: document.getElementById("save-button"),
  likeButton: document.getElementById("like-button"),
  episodeButton: document.getElementById("episode-button"),
  moreButton: document.getElementById("more-button"),
  speedButton: document.getElementById("speed-button"),
  introButton: document.getElementById("intro-button"),
  episodeTitle: document.getElementById("episode-title"),
  episodeMeta: document.getElementById("episode-meta"),
  playerLockCard: document.getElementById("player-lock-card"),
  goPoolButton: document.getElementById("go-pool-button"),
  playerPayButton: document.getElementById("player-pay-button"),
  openProfileButton: document.getElementById("open-profile-button"),
  backFromProfileButton: document.getElementById("back-from-profile-button"),
  backToPlayerButton: document.getElementById("back-to-player-button"),
  status: document.getElementById("unlock-status"),
  lockedPanel: document.getElementById("locked-panel"),
  unlockedPanel: document.getElementById("unlocked-panel"),
  poolUnlockTitle: document.getElementById("pool-unlock-title"),
  openPayButton: document.getElementById("open-pay-button"),
  closePayButton: document.getElementById("close-pay-button"),
  confirmPayButton: document.getElementById("confirm-pay-button"),
  payButtonText: document.getElementById("pay-button-text"),
  paymentTitle: document.getElementById("payment-title"),
  paymentItemLabel: document.getElementById("payment-item-label"),
  paymentItemValue: document.getElementById("payment-item-value"),
  paymentAmount: document.getElementById("payment-amount"),
  paymentRule: document.getElementById("payment-rule"),
  agreeCheckbox: document.getElementById("agree-checkbox"),
  paymentSheet: document.getElementById("payment-sheet"),
  cardGrid: document.getElementById("card-grid"),
  rateList: document.getElementById("rate-list"),
  historyList: document.getElementById("history-list"),
  orderCard: document.getElementById("order-card"),
  drawButton: document.getElementById("draw-button"),
  resetButtons: document.querySelectorAll("[data-reset-demo]"),
  resultToast: document.getElementById("result-toast"),
  drawAnimation: document.getElementById("draw-animation"),
  drawCardReveal: document.getElementById("draw-card-reveal"),
  drawCardImage: document.getElementById("draw-card-image"),
  drawCardRarity: document.getElementById("draw-card-rarity"),
  drawCardTitle: document.getElementById("draw-card-title"),
  drawSkipButton: document.getElementById("draw-skip-button"),
  episodeSheet: document.getElementById("episode-sheet"),
  closeEpisodeButton: document.getElementById("close-episode-button"),
  episodeGrid: document.getElementById("episode-grid"),
  moreSheet: document.getElementById("more-sheet"),
  closeMoreButton: document.getElementById("close-more-button"),
  moreProfileButton: document.getElementById("more-profile-button"),
  morePoolButton: document.getElementById("more-pool-button"),
  morePayButton: document.getElementById("more-pay-button"),
  profileBalance: document.getElementById("profile-balance"),
  emailStatus: document.getElementById("email-status"),
  profileSaveStatus: document.getElementById("profile-save-status"),
  profileLikeStatus: document.getElementById("profile-like-status"),
  rechargeStatus: document.getElementById("recharge-status"),
  consumptionStatus: document.getElementById("consumption-status"),
  linkEmailButton: document.getElementById("link-email-button"),
  profileSaveButton: document.getElementById("profile-save-button"),
  profileLikeButton: document.getElementById("profile-like-button"),
  profileHistoryButton: document.getElementById("profile-history-button"),
  profileRechargeButton: document.getElementById("profile-recharge-button"),
  profileRechargeRecordButton: document.getElementById("profile-recharge-record-button"),
  profileConsumptionRecordButton: document.getElementById("profile-consumption-record-button"),
  cardDetail: document.getElementById("card-detail"),
  closeDetailButton: document.getElementById("close-detail-button"),
  detailImage: document.getElementById("detail-image"),
  detailRarity: document.getElementById("detail-rarity"),
  detailTitle: document.getElementById("detail-title"),
  detailDescription: document.getElementById("detail-description")
};

const playbackSpeeds = [1, 1.25, 1.5, 2];
let drawAnimationTimer = null;

elements.openPayButton.addEventListener("click", () => openPaymentSheet("pool"));
elements.playerPayButton.addEventListener("click", handlePlayerPay);
elements.goPoolButton.addEventListener("click", () => setView("pool"));
elements.openProfileButton.addEventListener("click", openProfile);
elements.backFromProfileButton.addEventListener("click", closeProfile);
elements.backToPlayerButton.addEventListener("click", () => setView("player"));
elements.closePayButton.addEventListener("click", closePaymentSheet);
elements.confirmPayButton.addEventListener("click", confirmPayment);
elements.drawButton.addEventListener("click", drawCard);
elements.drawSkipButton.addEventListener("click", finishDrawAnimation);
elements.resetButtons.forEach((button) => button.addEventListener("click", resetDemo));
elements.closeDetailButton.addEventListener("click", closeCardDetail);
elements.muteButton.addEventListener("click", toggleMute);
elements.saveButton.addEventListener("click", toggleSave);
elements.likeButton.addEventListener("click", toggleLike);
elements.episodeButton.addEventListener("click", openEpisodeSheet);
elements.moreButton.addEventListener("click", openMoreSheet);
elements.speedButton.addEventListener("click", cycleSpeed);
elements.introButton.addEventListener("click", () => showToast("霸总短剧第 3 集，付费节点后开放限定卡池。"));
elements.closeEpisodeButton.addEventListener("click", closeEpisodeSheet);
elements.closeMoreButton.addEventListener("click", closeMoreSheet);
elements.moreProfileButton.addEventListener("click", () => {
  closeMoreSheet();
  openProfile();
});
elements.morePoolButton.addEventListener("click", () => {
  closeMoreSheet();
  setView("pool");
});
elements.morePayButton.addEventListener("click", () => {
  closeMoreSheet();
  openPaymentSheet(state.unlocked ? "draw" : "pool");
});

elements.linkEmailButton.addEventListener("click", () => {
  elements.emailStatus.textContent = "已绑定";
  showToast("邮箱已绑定");
});
elements.profileSaveButton.addEventListener("click", () => {
  state.saved = true;
  elements.saveButton.querySelector("span").textContent = "★";
  renderProfile();
  renderPlayer();
  showToast("已同步收藏");
});
elements.profileLikeButton.addEventListener("click", () => {
  state.liked = true;
  elements.likeButton.querySelector("span").textContent = "♥";
  renderProfile();
  renderPlayer();
  showToast("已同步点赞");
});
elements.profileHistoryButton.addEventListener("click", () => setView("player"));
elements.profileRechargeButton.addEventListener("click", () => showToast("演示余额无需真实充值"));
elements.profileRechargeRecordButton.addEventListener("click", () => {
  state.activeTab = "order";
  setView("pool");
  renderTabs();
});
elements.profileConsumptionRecordButton.addEventListener("click", () => {
  state.activeTab = "history";
  setView("pool");
  renderTabs();
});

elements.videoStage.addEventListener("touchstart", handleVideoTouchStart, { passive: true });
elements.videoStage.addEventListener("touchmove", handleVideoTouchMove, { passive: false });
elements.videoStage.addEventListener("touchend", handleVideoTouchEnd);
elements.videoStage.addEventListener("touchcancel", handleVideoTouchCancel);
elements.videoStage.addEventListener("wheel", handleVideoWheel, { passive: false });
elements.dramaVideos.forEach((video) => {
  video.addEventListener("click", toggleVideoPlayback);
  video.addEventListener("timeupdate", syncVideoProgress);
  video.addEventListener("ended", handleVideoEnded);
});
elements.videoProgress.addEventListener("input", seekVideo);

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.activeTab = button.dataset.tab;
    renderTabs();
  });
});

elements.paymentSheet.addEventListener("click", (event) => {
  if (event.target === elements.paymentSheet && !state.paying) {
    closePaymentSheet();
  }
});

elements.episodeSheet.addEventListener("click", (event) => {
  if (event.target === elements.episodeSheet) {
    closeEpisodeSheet();
  }
});

elements.moreSheet.addEventListener("click", (event) => {
  if (event.target === elements.moreSheet) {
    closeMoreSheet();
  }
});

elements.cardDetail.addEventListener("click", (event) => {
  if (event.target === elements.cardDetail) {
    closeCardDetail();
  }
});

render();

function render() {
  renderView();
  renderPlayer();
  elements.status.textContent = state.unlocked ? "已解锁" : "待解锁";
  elements.lockedPanel.hidden = state.unlocked;
  elements.unlockedPanel.hidden = !state.unlocked;
  renderPoolStatus();
  renderCards();
  renderRates();
  renderHistory();
  renderOrder();
  renderEpisodes();
  renderProfile();
  renderTabs();
}

function renderPoolStatus() {
  if (!state.unlocked) {
    elements.poolUnlockTitle.textContent = "卡池已开放";
    elements.drawButton.textContent = "先解锁卡池";
    elements.drawButton.disabled = false;
    return;
  }

  const unlockedCount = state.unlockedCards.length;
  elements.poolUnlockTitle.textContent = `已解锁 ${unlockedCount}/${cards.length} 个内容`;
  elements.drawButton.textContent = unlockedCount >= cards.length ? "已全部解锁" : "¥6 抽取一次";
  elements.drawButton.disabled = unlockedCount >= cards.length;
}

function renderView() {
  elements.playerView.hidden = state.view !== "player";
  elements.poolView.hidden = state.view !== "pool";
  elements.profileView.hidden = state.view !== "profile";
  if (state.view !== "player") {
    pauseAllVideos();
  }
}

function renderPlayer() {
  const video = videoOptions[state.currentVideo];
  renderVideoSlides();
  renderPromptSlides();
  syncVideoRail(state.isDraggingVideo ? state.touchDeltaY : 0);
  elements.episodeTitle.textContent = `第 ${state.currentEpisode} 集`;
  elements.episodeMeta.textContent = `${video.label} · 短剧 · 现代 · 第 ${state.currentEpisode} 集`;
  elements.episodeButton.querySelector("strong").textContent = `Ep.${state.currentEpisode}`;
  elements.saveButton.classList.toggle("is-active", state.saved);
  elements.likeButton.classList.toggle("is-active", state.liked);
  elements.playerLockCard.classList.toggle("is-unlocked", state.unlocked);
  elements.playerPayButton.textContent = state.unlocked ? "去抽卡" : "¥18 解锁";
  elements.morePayButton.textContent = state.unlocked ? "付费抽取一次" : "付费解锁内容";

  const lockTitle = elements.playerLockCard.querySelector("h2");
  const lockText = elements.playerLockCard.querySelector("span");
  if (state.unlocked) {
    lockTitle.textContent = "限定卡池已开放";
    lockText.textContent = "每次抽取都需要单独付费，支付后随机解锁 1 个内容。";
  } else {
    lockTitle.textContent = "解锁限定卡池内容";
    lockText.textContent = "继续观看专属片段，并查看 12 张限定卡面。";
  }
}

function renderProfile() {
  elements.profileBalance.textContent = state.unlocked ? "18 枚" : "0 枚";
  elements.profileSaveStatus.textContent = state.saved ? "1" : "0";
  elements.profileLikeStatus.textContent = state.liked ? "1" : "0";
  elements.rechargeStatus.textContent = state.order ? "1 条" : "暂无";
  elements.consumptionStatus.textContent = state.history.length ? `${state.history.length} 条` : "暂无";
}

function renderCards() {
  elements.cardGrid.innerHTML = cards.map((card) => {
    const cardUnlocked = state.unlockedCards.includes(card.id);
    const contentVisible = state.unlocked && cardUnlocked;
    const lockedClass = contentVisible ? "" : " is-locked";
    const rarityClass = card.rarity.toLowerCase();
    const lockedText = state.unlocked ? "抽取解锁" : "付费解锁";
    const lockedMarkup = contentVisible ? "" : `<div class="lock-veil"><span>${lockedText}</span></div>`;

    return `
      <button class="pool-card${lockedClass}" type="button" data-card-id="${card.id}" aria-label="${card.name}">
        <img src="${card.image}" alt="${card.name}">
        <span class="card-rarity ${rarityClass}">${card.rarity}</span>
        <span class="card-meta">
          <strong>${card.name}</strong>
          <span>${card.tag}</span>
        </span>
        ${lockedMarkup}
      </button>
    `;
  }).join("");

  elements.cardGrid.querySelectorAll(".pool-card").forEach((button) => {
    button.addEventListener("click", () => {
      const card = cards.find((item) => item.id === button.dataset.cardId);
      if (!state.unlocked) {
        openPaymentSheet("pool");
        return;
      }
      if (!state.unlockedCards.includes(card.id)) {
        openPaymentSheet("draw");
        return;
      }
      openCardDetail(card);
    });
  });
}

function renderRates() {
  elements.rateList.innerHTML = [
    { label: "SSR", value: 2.4 },
    { label: "SR", value: 16.8 },
    { label: "R", value: 80.8 }
  ].map((item) => `
    <div class="rate-row">
      <strong>${item.label}</strong>
      <div class="rate-track" aria-hidden="true"><span style="width: ${item.value}%"></span></div>
      <span>${item.value}%</span>
    </div>
  `).join("");
}

function renderHistory() {
  if (!state.unlocked) {
    elements.historyList.innerHTML = `<div class="empty-state">解锁后可查看抽取记录</div>`;
    return;
  }

  if (!state.history.length) {
    elements.historyList.innerHTML = `<div class="empty-state">暂无抽取记录</div>`;
    return;
  }

  elements.historyList.innerHTML = state.history.map((entry) => {
    const card = cards.find((item) => item.id === entry.cardId);
    if (!card) {
      return "";
    }

    return `
      <div class="history-row">
        <img src="${card.image}" alt="${card.name}">
        <div>
          <strong>${card.name}</strong>
          <span>${card.rarity} · ${formatTime(entry.time)}</span>
        </div>
        <span>${entry.method}</span>
      </div>
    `;
  }).join("");
}

function renderOrder() {
  if (!state.order) {
    elements.orderCard.innerHTML = `
      <div class="empty-state">暂无订单</div>
    `;
    return;
  }

  elements.orderCard.innerHTML = `
    <strong>${state.order.title || "卡池已解锁"}</strong>
    <span>订单号：${state.order.id}</span>
    <span>支付方式：${state.order.method}</span>
    <span>支付金额：${state.order.amount || "¥18.00"}</span>
    <span>完成时间：${formatTime(state.order.time)}</span>
  `;
}

function renderEpisodes() {
  elements.episodeGrid.innerHTML = Array.from({ length: 10 }, (_, index) => {
    const episode = index + 1;
    const isLocked = episode > 3 && !state.unlocked;
    const activeClass = episode === state.currentEpisode ? " is-active" : "";
    const lockedClass = isLocked ? " is-locked" : "";
    return `
      <button class="episode-item${activeClass}${lockedClass}" type="button" data-episode="${episode}">
        ${episode}
      </button>
    `;
  }).join("");

  elements.episodeGrid.querySelectorAll(".episode-item").forEach((button) => {
    button.addEventListener("click", () => {
      const episode = Number(button.dataset.episode);
      if (episode > 3 && !state.unlocked) {
        closeEpisodeSheet();
        openPaymentSheet("pool");
        return;
      }
      state.currentEpisode = episode;
      closeEpisodeSheet();
      renderPlayer();
      renderEpisodes();
      showToast(`已切换到第 ${episode} 集`);
    });
  });
}

function renderTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === state.activeTab);
  });

  document.querySelectorAll(".tab-panel").forEach((panel) => {
    panel.hidden = panel.id !== `tab-${state.activeTab}`;
  });
}

function openPaymentSheet(mode = "pool") {
  if (mode === "pool" && state.unlocked) {
    setView("pool");
    state.activeTab = "pool";
    renderTabs();
    return;
  }

  if (mode === "draw" && !state.unlocked) {
    mode = "pool";
  }

  if (mode === "draw" && !pickLockedCard()) {
    showToast("所有内容都已解锁");
    return;
  }

  state.paymentMode = mode;
  renderPaymentSheet();
  elements.paymentSheet.hidden = false;
}

function closePaymentSheet() {
  if (state.paying) {
    return;
  }
  elements.paymentSheet.hidden = true;
}

function renderPaymentSheet() {
  const config = paymentConfig[state.paymentMode] || paymentConfig.pool;
  elements.paymentTitle.textContent = config.title;
  elements.paymentItemLabel.textContent = config.itemLabel;
  elements.paymentItemValue.textContent = config.itemValue;
  elements.paymentAmount.textContent = config.amount;
  elements.paymentRule.textContent = config.rule;
  elements.payButtonText.textContent = config.buttonText;
}

function confirmPayment() {
  if (state.paying) {
    return;
  }

  if (!elements.agreeCheckbox.checked) {
    showToast("请先确认解锁规则");
    return;
  }

  state.paying = true;
  elements.confirmPayButton.classList.add("is-loading");
  elements.confirmPayButton.disabled = true;
  const config = paymentConfig[state.paymentMode] || paymentConfig.pool;
  elements.payButtonText.textContent = config.loadingText;

  window.setTimeout(() => {
    const methodInput = document.querySelector("input[name='pay-method']:checked");
    state.order = {
      id: createOrderId(),
      method: getMethodLabel(methodInput.value),
      title: config.orderTitle,
      amount: config.amount,
      time: Date.now()
    };

    let unlockedCard = null;
    if (state.paymentMode === "draw") {
      unlockedCard = unlockRandomCard();
    } else {
      state.unlocked = true;
      localStorage.setItem(unlockKey, "true");
    }

    localStorage.setItem(orderKey, JSON.stringify(state.order));

    state.paying = false;
    elements.confirmPayButton.classList.remove("is-loading");
    elements.confirmPayButton.disabled = false;
    elements.payButtonText.textContent = config.buttonText;
    elements.paymentSheet.hidden = true;
    state.view = "pool";
    state.activeTab = "pool";
    render();
    if (unlockedCard) {
      startDrawAnimation(unlockedCard);
    } else {
      showToast("支付成功，卡池已开放");
    }
  }, 900);
}

function getActiveVideo() {
  return elements.dramaVideos[state.currentVideo];
}

function getPayPromptVideo() {
  if (!state.payPromptVisible || state.payPromptVideo === null) {
    return null;
  }
  return state.payPromptVideo;
}

function isActivePayPromptVisible() {
  return getPayPromptVideo() === state.currentVideo;
}

function renderVideoSlides() {
  elements.videoSlides.forEach((slide, index) => {
    const isActive = index === state.currentVideo;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });

  elements.dramaVideos.forEach((video, index) => {
    video.muted = state.videoMuted;
    video.tabIndex = index === state.currentVideo ? 0 : -1;
  });

  elements.muteButton.querySelector("span").textContent = state.videoMuted ? "🔇" : "🔈";
  elements.muteButton.classList.toggle("is-active", !state.videoMuted);
}

function renderPromptSlides() {
  const promptVideo = getPayPromptVideo();
  elements.promptSlides.forEach((slide, index) => {
    const hasPrompt = index === promptVideo;
    slide.classList.toggle("has-pay-prompt", hasPrompt);
    slide.setAttribute("aria-hidden", String(!hasPrompt));
  });

  const promptSlide = promptVideo === null ? null : elements.promptSlides[promptVideo];
  if (promptSlide && elements.playerLockCard.parentElement !== promptSlide) {
    promptSlide.appendChild(elements.playerLockCard);
  }

  elements.playerLockCard.classList.toggle("is-visible", promptVideo !== null);
  elements.playerLockCard.setAttribute("aria-hidden", String(promptVideo === null));
}

function syncVideoRail(offset = 0) {
  const transform = `translate3d(0, calc(${-state.currentVideo * 100}% + ${Math.round(offset)}px), 0)`;
  elements.videoRail.style.transform = transform;
  elements.promptRail.style.transform = transform;
}

function pauseAllVideos() {
  elements.dramaVideos.forEach((video) => video.pause());
}

function playActiveVideo() {
  const activeVideo = getActiveVideo();
  if (!activeVideo || state.view !== "player" || isActivePayPromptVisible()) {
    return;
  }

  activeVideo.playbackRate = playbackSpeeds[state.speedIndex];
  activeVideo.play().catch(() => {});
}

function resetVideo(video) {
  if (!video) {
    return;
  }

  video.pause();
  video.playbackRate = 1;
  try {
    video.currentTime = 0;
  } catch {
    // Some browsers block seeking before metadata is ready.
  }
}

function setView(view) {
  state.view = view;
  renderView();
  if (view === "player") {
    if (isActivePayPromptVisible()) {
      pauseAllVideos();
      return;
    }
    playActiveVideo();
  }
}

function openProfile() {
  state.previousView = state.view === "profile" ? "player" : state.view;
  state.view = "profile";
  renderView();
  renderProfile();
}

function closeProfile() {
  setView(state.previousView || "player");
}

function handlePlayerPay() {
  if (state.unlocked) {
    setView("pool");
    state.activeTab = "pool";
    renderTabs();
    return;
  }
  openPaymentSheet("pool");
}

function openEpisodeSheet() {
  renderEpisodes();
  elements.episodeSheet.hidden = false;
}

function closeEpisodeSheet() {
  elements.episodeSheet.hidden = true;
}

function openMoreSheet() {
  elements.moreSheet.hidden = false;
}

function closeMoreSheet() {
  elements.moreSheet.hidden = true;
}

function toggleVideoPlayback() {
  if (isActivePayPromptVisible()) {
    return;
  }

  const activeVideo = getActiveVideo();
  if (!activeVideo) {
    return;
  }

  if (activeVideo.paused) {
    playActiveVideo();
    return;
  }
  activeVideo.pause();
}

function handleVideoTouchStart(event) {
  if (isInteractiveTarget(event.target)) {
    return;
  }

  const touch = event.changedTouches[0];
  state.touchStartY = touch.clientY;
  state.touchStartX = touch.clientX;
  state.touchDeltaY = 0;
  state.isDraggingVideo = true;
  elements.videoRail.classList.add("is-dragging");
  elements.promptRail.classList.add("is-dragging");
}

function handleVideoTouchMove(event) {
  if (!state.isDraggingVideo || !state.touchStartY) {
    return;
  }

  const touch = event.touches[0];
  const deltaY = touch.clientY - state.touchStartY;
  const deltaX = touch.clientX - state.touchStartX;

  if (Math.abs(deltaY) < 8 || Math.abs(deltaY) < Math.abs(deltaX) * 1.15) {
    return;
  }

  event.preventDefault();
  const draggingPastFirst = state.currentVideo === 0 && deltaY > 0;
  const draggingPastLast = state.currentVideo === videoOptions.length - 1 && deltaY < 0;
  state.touchDeltaY = draggingPastFirst || draggingPastLast ? deltaY * 0.28 : deltaY;
  syncVideoRail(state.touchDeltaY);
}

function handleVideoTouchEnd(event) {
  if (!state.isDraggingVideo || !state.touchStartY) {
    return;
  }

  const touch = event.changedTouches[0];
  const swipeY = state.touchStartY - touch.clientY;
  const deltaX = state.touchStartX - touch.clientX;
  state.touchStartY = 0;
  state.touchStartX = 0;
  state.touchDeltaY = 0;
  state.isDraggingVideo = false;
  elements.videoRail.classList.remove("is-dragging");
  elements.promptRail.classList.remove("is-dragging");

  if (Math.abs(swipeY) < 54 || Math.abs(swipeY) < Math.abs(deltaX) * 1.2) {
    syncVideoRail();
    return;
  }

  switchVideoByStep(swipeY > 0 ? 1 : -1);
}

function handleVideoTouchCancel() {
  state.touchStartY = 0;
  state.touchStartX = 0;
  state.touchDeltaY = 0;
  state.isDraggingVideo = false;
  elements.videoRail.classList.remove("is-dragging");
  elements.promptRail.classList.remove("is-dragging");
  syncVideoRail();
}

function handleVideoWheel(event) {
  if (isInteractiveTarget(event.target) || Math.abs(event.deltaY) < 28) {
    return;
  }

  event.preventDefault();
  if (state.wheelLocked) {
    return;
  }

  state.wheelLocked = true;
  switchVideoByStep(event.deltaY > 0 ? 1 : -1);
  window.setTimeout(() => {
    state.wheelLocked = false;
  }, 520);
}

function switchVideoByStep(step) {
  const nextIndex = state.currentVideo + step;
  if (nextIndex < 0 || nextIndex >= videoOptions.length) {
    syncVideoRail();
    showToast(step > 0 ? "已经是最后一个视频" : "已经是第一个视频");
    return false;
  }
  switchVideo(nextIndex);
  return true;
}

function switchVideo(index) {
  if (index === state.currentVideo || !videoOptions[index]) {
    return;
  }

  const previousVideo = getActiveVideo();
  resetVideo(previousVideo);
  state.currentVideo = index;
  state.speedIndex = 0;
  state.touchDeltaY = 0;
  state.isDraggingVideo = false;
  elements.videoRail.classList.remove("is-dragging");
  elements.promptRail.classList.remove("is-dragging");
  pauseAllVideos();
  elements.videoProgress.value = "0";
  elements.speedButton.textContent = "Speed";
  resetVideo(getActiveVideo());
  syncVideoRail();
  renderPlayer();
  playActiveVideo();
}

function handleVideoEnded(event) {
  if (event.target !== getActiveVideo()) {
    return;
  }

  state.payPromptVisible = true;
  state.payPromptVideo = state.currentVideo;
  pauseAllVideos();
  elements.videoProgress.value = "100";
  renderPlayer();
}

function isInteractiveTarget(target) {
  return Boolean(target.closest("button, input, textarea, select, a, label"));
}

function toggleMute() {
  state.videoMuted = !state.videoMuted;
  renderVideoSlides();
}

function toggleSave() {
  state.saved = !state.saved;
  elements.saveButton.querySelector("span").textContent = state.saved ? "★" : "☆";
  renderPlayer();
  showToast(state.saved ? "已收藏" : "已取消收藏");
}

function toggleLike() {
  state.liked = !state.liked;
  elements.likeButton.querySelector("span").textContent = state.liked ? "♥" : "♡";
  renderPlayer();
  showToast(state.liked ? "已点赞" : "已取消点赞");
}

function cycleSpeed() {
  state.speedIndex = (state.speedIndex + 1) % playbackSpeeds.length;
  const speed = playbackSpeeds[state.speedIndex];
  const activeVideo = getActiveVideo();
  if (activeVideo) {
    activeVideo.playbackRate = speed;
  }
  elements.speedButton.textContent = speed === 1 ? "Speed" : `${speed}x`;
}

function syncVideoProgress(event) {
  const activeVideo = getActiveVideo();
  if (event && event.target !== activeVideo) {
    return;
  }

  if (!activeVideo || !Number.isFinite(activeVideo.duration) || !activeVideo.duration) {
    return;
  }
  elements.videoProgress.value = String((activeVideo.currentTime / activeVideo.duration) * 100);
}

function seekVideo() {
  const activeVideo = getActiveVideo();
  if (!activeVideo || !Number.isFinite(activeVideo.duration) || !activeVideo.duration) {
    return;
  }
  activeVideo.currentTime = (Number(elements.videoProgress.value) / 100) * activeVideo.duration;
}

function drawCard() {
  if (!state.unlocked) {
    openPaymentSheet("pool");
    return;
  }

  openPaymentSheet("draw");
}

function unlockRandomCard() {
  const card = pickLockedCard();
  if (!card) {
    return null;
  }

  state.unlockedCards.unshift(card.id);
  localStorage.setItem(unlockedCardsKey, JSON.stringify(state.unlockedCards));
  state.history.unshift({
    cardId: card.id,
    method: "付费抽取",
    time: Date.now()
  });
  state.history = state.history.slice(0, 20);
  localStorage.setItem(historyKey, JSON.stringify(state.history));
  return card;
}

function pickLockedCard() {
  const lockedCards = cards.filter((card) => !state.unlockedCards.includes(card.id));
  if (!lockedCards.length) {
    return null;
  }

  const roll = Math.random() * 100;
  let rarity = "R";
  if (roll < 2.4) {
    rarity = "SSR";
  } else if (roll < 19.2) {
    rarity = "SR";
  }

  let pool = lockedCards.filter((card) => card.rarity === rarity);
  if (!pool.length) {
    pool = lockedCards;
  }
  return pool[Math.floor(Math.random() * pool.length)];
}

function openCardDetail(card) {
  if (!card) {
    return;
  }

  elements.detailImage.src = card.image;
  elements.detailImage.alt = card.name;
  elements.detailRarity.textContent = `${card.rarity} · ${card.tag}`;
  elements.detailTitle.textContent = card.name;
  elements.detailDescription.textContent = card.description;
  elements.cardDetail.hidden = false;
}

function startDrawAnimation(card) {
  if (!card) {
    return;
  }

  window.clearTimeout(drawAnimationTimer);
  state.drawAnimationCard = card;
  const rarityClass = card.rarity.toLowerCase();
  elements.drawCardReveal.className = `draw-card-reveal ${rarityClass}`;
  elements.drawCardImage.src = card.image;
  elements.drawCardImage.alt = card.name;
  elements.drawCardRarity.textContent = card.rarity;
  elements.drawCardTitle.textContent = card.name;
  elements.drawAnimation.hidden = false;

  // Restart CSS animations for consecutive draws in the same session.
  void elements.drawAnimation.offsetWidth;
  drawAnimationTimer = window.setTimeout(finishDrawAnimation, 3300);
}

function finishDrawAnimation() {
  if (!state.drawAnimationCard) {
    return;
  }

  const card = state.drawAnimationCard;
  state.drawAnimationCard = null;
  window.clearTimeout(drawAnimationTimer);
  elements.drawAnimation.hidden = true;
  openCardDetail(card);
  showToast("支付成功，已随机解锁 1 个内容");
}

function closeCardDetail() {
  elements.cardDetail.hidden = true;
}

function resetDemo() {
  const shouldReset = window.confirm("重置后会清空本地解锁状态和抽取记录。");
  if (!shouldReset) {
    return;
  }

  localStorage.removeItem(unlockKey);
  localStorage.removeItem(orderKey);
  localStorage.removeItem(historyKey);
  localStorage.removeItem(unlockedCardsKey);
  state.unlocked = false;
  state.order = null;
  state.history = [];
  state.unlockedCards = [];
  state.activeTab = "pool";
  state.view = "player";
  state.currentVideo = 0;
  state.payPromptVisible = false;
  state.payPromptVideo = null;
  state.drawAnimationCard = null;
  state.currentEpisode = 3;
  state.saved = false;
  state.liked = false;
  state.videoMuted = true;
  state.speedIndex = 0;
  state.touchDeltaY = 0;
  state.isDraggingVideo = false;
  elements.saveButton.querySelector("span").textContent = "☆";
  elements.likeButton.querySelector("span").textContent = "♡";
  elements.dramaVideos.forEach(resetVideo);
  elements.videoRail.classList.remove("is-dragging");
  elements.promptRail.classList.remove("is-dragging");
  elements.drawAnimation.hidden = true;
  window.clearTimeout(drawAnimationTimer);
  elements.speedButton.textContent = "Speed";
  render();
  playActiveVideo();
  showToast("已重置为未解锁状态");
}

function showToast(message) {
  elements.resultToast.textContent = message;
  elements.resultToast.hidden = false;

  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    elements.resultToast.hidden = true;
  }, 1800);
}

function createOrderId() {
  const now = new Date();
  const stamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
    String(now.getHours()).padStart(2, "0"),
    String(now.getMinutes()).padStart(2, "0"),
    String(now.getSeconds()).padStart(2, "0")
  ].join("");
  return `CP${stamp}${Math.floor(Math.random() * 900 + 100)}`;
}

function getMethodLabel(value) {
  const labels = {
    paypal: "PayPal",
    card: "银行卡",
    balance: "余额"
  };
  return labels[value] || "PayPal";
}

function formatTime(time) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(time));
}

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}
