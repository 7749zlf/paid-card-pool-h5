const unlockKey = "paid-card-pool-unlocked";
const orderKey = "paid-card-pool-order";
const historyKey = "paid-card-pool-history";

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
  }
];

const state = {
  unlocked: localStorage.getItem(unlockKey) === "true",
  order: readJson(orderKey, null),
  history: readJson(historyKey, []),
  activeTab: "pool",
  paying: false
};

const elements = {
  status: document.getElementById("unlock-status"),
  lockedPanel: document.getElementById("locked-panel"),
  unlockedPanel: document.getElementById("unlocked-panel"),
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
  resetButton: document.getElementById("reset-button"),
  resultToast: document.getElementById("result-toast"),
  cardDetail: document.getElementById("card-detail"),
  closeDetailButton: document.getElementById("close-detail-button"),
  detailImage: document.getElementById("detail-image"),
  detailRarity: document.getElementById("detail-rarity"),
  detailTitle: document.getElementById("detail-title"),
  detailDescription: document.getElementById("detail-description")
};

elements.openPayButton.addEventListener("click", openPaymentSheet);
elements.closePayButton.addEventListener("click", closePaymentSheet);
elements.confirmPayButton.addEventListener("click", confirmPayment);
elements.drawButton.addEventListener("click", drawCard);
elements.resetButton.addEventListener("click", resetDemo);
elements.closeDetailButton.addEventListener("click", closeCardDetail);

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

elements.cardDetail.addEventListener("click", (event) => {
  if (event.target === elements.cardDetail) {
    closeCardDetail();
  }
});

render();

function render() {
  elements.status.textContent = state.unlocked ? "已解锁" : "待解锁";
  elements.lockedPanel.hidden = state.unlocked;
  elements.unlockedPanel.hidden = !state.unlocked;
  renderCards();
  renderRates();
  renderHistory();
  renderOrder();
  renderTabs();
}

function renderCards() {
  elements.cardGrid.innerHTML = cards.map((card) => {
    const lockedClass = state.unlocked ? "" : " is-locked";
    const rarityClass = card.rarity.toLowerCase();
    const lockedMarkup = state.unlocked ? "" : `<div class="lock-veil"><span>LOCKED</span></div>`;

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
    state.activeTab = "pool";
    render();
    showToast("支付成功，卡池已解锁");
  }, 900);
}

function drawCard() {
  if (!state.unlocked) {
    openPaymentSheet();
    return;
  }

  const card = pickCard();
  state.history.unshift({
    cardId: card.id,
    method: "单抽",
    time: Date.now()
  });
  state.history = state.history.slice(0, 20);
  localStorage.setItem(historyKey, JSON.stringify(state.history));
  renderHistory();
  openCardDetail(card);
}

function pickCard() {
  const roll = Math.random() * 100;
  let rarity = "R";
  if (roll < 2.4) {
    rarity = "SSR";
  } else if (roll < 19.2) {
    rarity = "SR";
  }

  const pool = cards.filter((card) => card.rarity === rarity);
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
  state.unlocked = false;
  state.order = null;
  state.history = [];
  state.activeTab = "pool";
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
