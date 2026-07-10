const unlockKey = "paid-card-pool-unlocked";
const orderKey = "paid-card-pool-order";
const historyKey = "paid-card-pool-history";
const unlockedCardsKey = "paid-card-pool-unlocked-cards";

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
  paying: false,
  currentEpisode: 3,
  saved: false,
  liked: false,
  speedIndex: 0
};

const elements = {
  playerView: document.getElementById("player-view"),
  poolView: document.getElementById("pool-view"),
  profileView: document.getElementById("profile-view"),
  dramaVideo: document.getElementById("drama-video"),
  videoButtons: document.querySelectorAll(".video-switch-button"),
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
  agreeCheckbox: document.getElementById("agree-checkbox"),
  paymentSheet: document.getElementById("payment-sheet"),
  cardGrid: document.getElementById("card-grid"),
  rateList: document.getElementById("rate-list"),
  historyList: document.getElementById("history-list"),
  orderCard: document.getElementById("order-card"),
  drawButton: document.getElementById("draw-button"),
  resetButtons: document.querySelectorAll("[data-reset-demo]"),
  resultToast: document.getElementById("result-toast"),
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

elements.openPayButton.addEventListener("click", openPaymentSheet);
elements.playerPayButton.addEventListener("click", handlePlayerPay);
elements.goPoolButton.addEventListener("click", () => setView("pool"));
elements.openProfileButton.addEventListener("click", openProfile);
elements.backFromProfileButton.addEventListener("click", closeProfile);
elements.backToPlayerButton.addEventListener("click", () => setView("player"));
elements.closePayButton.addEventListener("click", closePaymentSheet);
elements.confirmPayButton.addEventListener("click", confirmPayment);
elements.drawButton.addEventListener("click", drawCard);
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
  openPaymentSheet();
});

elements.videoButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switchVideo(Number(button.dataset.videoIndex));
  });
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

elements.dramaVideo.addEventListener("click", toggleVideoPlayback);
elements.dramaVideo.addEventListener("timeupdate", syncVideoProgress);
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
    elements.drawButton.textContent = "抽取一次";
    elements.drawButton.disabled = false;
    return;
  }

  const unlockedCount = state.unlockedCards.length;
  elements.poolUnlockTitle.textContent = `已解锁 ${unlockedCount}/${cards.length} 个内容`;
  elements.drawButton.textContent = unlockedCount >= cards.length ? "已全部解锁" : "抽取一次";
  elements.drawButton.disabled = unlockedCount >= cards.length;
}

function renderView() {
  elements.playerView.hidden = state.view !== "player";
  elements.poolView.hidden = state.view !== "pool";
  elements.profileView.hidden = state.view !== "profile";
}

function renderPlayer() {
  const video = videoOptions[state.currentVideo];
  elements.episodeTitle.textContent = `第 ${state.currentEpisode} 集`;
  elements.episodeMeta.textContent = `${video.label} · 短剧 · 现代 · 第 ${state.currentEpisode} 集`;
  elements.episodeButton.querySelector("strong").textContent = `Ep.${state.currentEpisode}`;
  elements.videoButtons.forEach((button) => {
    const isActive = Number(button.dataset.videoIndex) === state.currentVideo;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  elements.saveButton.classList.toggle("is-active", state.saved);
  elements.likeButton.classList.toggle("is-active", state.liked);
  elements.playerLockCard.classList.toggle("is-unlocked", state.unlocked);
  elements.playerPayButton.textContent = state.unlocked ? "去抽卡" : "¥18 解锁";

  const lockTitle = elements.playerLockCard.querySelector("h2");
  const lockText = elements.playerLockCard.querySelector("span");
  if (state.unlocked) {
    lockTitle.textContent = "限定卡池已开放";
    lockText.textContent = "每次抽取会随机解锁 1 个未解锁内容。";
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
        openPaymentSheet();
        return;
      }
      if (!state.unlockedCards.includes(card.id)) {
        showToast("该内容尚未抽到，点击抽取一次随机解锁");
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
    <strong>卡池已解锁</strong>
    <span>订单号：${state.order.id}</span>
    <span>支付方式：${state.order.method}</span>
    <span>支付金额：¥18.00</span>
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
        openPaymentSheet();
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

function openPaymentSheet() {
  if (state.unlocked) {
    showToast("卡池已解锁");
    setView("pool");
    return;
  }
  elements.paymentSheet.hidden = false;
}

function closePaymentSheet() {
  if (state.paying) {
    return;
  }
  elements.paymentSheet.hidden = true;
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
  elements.payButtonText.textContent = "正在创建订单";

  window.setTimeout(() => {
    const methodInput = document.querySelector("input[name='pay-method']:checked");
    state.order = {
      id: createOrderId(),
      method: getMethodLabel(methodInput.value),
      time: Date.now()
    };
    state.unlocked = true;
    localStorage.setItem(unlockKey, "true");
    localStorage.setItem(orderKey, JSON.stringify(state.order));

    state.paying = false;
    elements.confirmPayButton.classList.remove("is-loading");
    elements.confirmPayButton.disabled = false;
    elements.payButtonText.textContent = "确认支付并解锁";
    elements.paymentSheet.hidden = true;
    state.view = "pool";
    state.activeTab = "pool";
    render();
    showToast("支付成功，卡池已解锁");
  }, 900);
}

function setView(view) {
  state.view = view;
  renderView();
  if (view === "player") {
    elements.dramaVideo.play().catch(() => {});
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
  openPaymentSheet();
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
  if (elements.dramaVideo.paused) {
    elements.dramaVideo.play().catch(() => {});
    return;
  }
  elements.dramaVideo.pause();
}

function switchVideo(index) {
  if (index === state.currentVideo || !videoOptions[index]) {
    return;
  }

  const nextVideo = videoOptions[index];
  state.currentVideo = index;
  state.speedIndex = 0;
  elements.dramaVideo.pause();
  elements.dramaVideo.src = nextVideo.src;
  elements.dramaVideo.poster = nextVideo.poster;
  elements.dramaVideo.currentTime = 0;
  elements.dramaVideo.playbackRate = 1;
  elements.videoProgress.value = "0";
  elements.speedButton.textContent = "Speed";
  elements.dramaVideo.load();
  elements.dramaVideo.play().catch(() => {});
  renderPlayer();
  showToast(`已切换到${nextVideo.label}`);
}

function toggleMute() {
  elements.dramaVideo.muted = !elements.dramaVideo.muted;
  elements.muteButton.querySelector("span").textContent = elements.dramaVideo.muted ? "🔇" : "🔈";
  elements.muteButton.classList.toggle("is-active", !elements.dramaVideo.muted);
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
  elements.dramaVideo.playbackRate = speed;
  elements.speedButton.textContent = speed === 1 ? "Speed" : `${speed}x`;
}

function syncVideoProgress() {
  if (!Number.isFinite(elements.dramaVideo.duration) || !elements.dramaVideo.duration) {
    return;
  }
  elements.videoProgress.value = String((elements.dramaVideo.currentTime / elements.dramaVideo.duration) * 100);
}

function seekVideo() {
  if (!Number.isFinite(elements.dramaVideo.duration) || !elements.dramaVideo.duration) {
    return;
  }
  elements.dramaVideo.currentTime = (Number(elements.videoProgress.value) / 100) * elements.dramaVideo.duration;
}

function drawCard() {
  if (!state.unlocked) {
    openPaymentSheet();
    return;
  }

  const card = pickLockedCard();
  if (!card) {
    showToast("所有内容都已解锁");
    return;
  }

  state.unlockedCards.unshift(card.id);
  localStorage.setItem(unlockedCardsKey, JSON.stringify(state.unlockedCards));
  state.history.unshift({
    cardId: card.id,
    method: "随机解锁",
    time: Date.now()
  });
  state.history = state.history.slice(0, 20);
  localStorage.setItem(historyKey, JSON.stringify(state.history));
  render();
  openCardDetail(card);
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
  state.currentEpisode = 3;
  state.saved = false;
  state.liked = false;
  state.speedIndex = 0;
  elements.saveButton.querySelector("span").textContent = "☆";
  elements.likeButton.querySelector("span").textContent = "♡";
  elements.dramaVideo.muted = true;
  elements.dramaVideo.playbackRate = 1;
  elements.muteButton.querySelector("span").textContent = "🔇";
  elements.muteButton.classList.remove("is-active");
  elements.speedButton.textContent = "Speed";
  render();
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
