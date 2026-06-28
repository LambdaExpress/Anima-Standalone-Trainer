// Simplified Chinese localization for the Anima Training UI.
// Technical product names and option enum values intentionally stay in English.
(() => {
  const TRANSLATIONS = {
    "(PyTorch ≥ 2.4). Parameters are always exposed as originals (no FlatParameter), making it compatible with LoRA. Backward prefetch, forward prefetch, and limit-all-gathers are handled automatically. Sharding strategy is replaced by the single Reshard After Forward toggle.": "(PyTorch ≥ 2.4)。参数始终以原始形式公开（无 FlatParameter），因此与 LoRA 兼容。反向预取、前向预取和 limit-all-gathers 会自动处理。分片策略由单个“前向后重新分片”开关取代。",
    "+ Add Dataset": "+ 添加数据集",
    "+ Add Prompt": "+ 添加提示词",
    "+ New": "+ 新建",
    ".": ".",
    "0px": "0px",
    "100%": "100%",
    "10px": "10px",
    "70%": "70%",
    "<job>/logs/": "<job>/logs/",
    "Activation Checkpointing": "激活 Checkpoint",
    "Activation Offload": "激活卸载",
    "Adafactor": "Adafactor",
    "AdamW": "AdamW",
    "AdamW8bit": "AdamW8bit",
    "AdamWScheduleFree": "AdamWScheduleFree",
    "All standard training configs (LR, batch size, optimizer, network dim, etc.) work. Sample generation during training is disabled. Backend is selected above. Torch Compile is incompatible.": "所有标准训练配置（LR、批量大小、优化器、网络维度等）均可使用。训练期间禁用样本生成。后端在上方选择。与 Torch Compile 不兼容。",
    "Allows DDP to overlap communication and computation more aggressively. Recommended when model structure does not change between steps.": "允许 DDP 更积极地重叠通信和计算。建议在模型结构在各步骤之间不变时使用。",
    "Alpha Mask": "Alpha 遮罩",
    "Also print per-microbatch fwd/bwd times within each step (only available with step profiling enabled).": "同时打印每个步骤内各 microbatch 的前向/反向耗时（仅在启用步骤性能分析时可用）。",
    "Always enabled for this mode. Spatial tokens are split across GPUs alongside weight sharding.": "此模式始终启用。空间 token 会随权重分片一起拆分到各 GPU。",
    "Anima LoRA Training": "Anima LoRA 训练",
    "Apply to All": "应用到全部",
    "Are you sure?": "确定吗？",
    "Auto": "自动",
    "Auto Wrap Policy": "自动包装策略",
    "Auto-resume from last saved state": "从上次保存状态自动恢复",
    "Automatically resumes from the most recent saved state in the output folder.": "自动从输出文件夹中最近保存的状态恢复。",
    "BACKWARD_POST": "BACKWARD_POST",
    "BACKWARD_PRE": "BACKWARD_PRE",
    "BACKWARD_PRE (Recommended)": "BACKWARD_PRE（推荐）",
    "BFloat16": "BFloat16",
    "Backdrop Blur:": "背景模糊：",
    "Backend": "后端",
    "Background Image": "背景图像",
    "Backward Prefetch": "反向预取",
    "Base Model (No LoRA)": "基础模型（无 LoRA）",
    "Batch Size(s)": "批量大小",
    "Better Multi-GPU support.": "更好的多 GPU 支持。",
    "Blocks to Swap": "要交换的块数",
    "Bucket Resolution Steps": "分桶分辨率步长",
    "Bucketing": "分桶",
    "CPU": "CPU",
    "CPU Offload (blocking transfers)": "CPU 卸载（阻塞传输）",
    "CPU Offloading": "CPU 卸载",
    "CPU RAM Efficient Loading": "CPU RAM 高效加载",
    "Cache Latents to Disk": "将 Latents 缓存到磁盘",
    "Cache Text Encoder Outputs to Disk": "将文本编码器输出缓存到磁盘",
    "Caching": "缓存",
    "Cancel": "取消",
    "Caption Extension": "标注文件扩展名",
    "Checkpoint": "Checkpoint",
    "Cherry Pink": "樱桃粉",
    "Clear": "清除",
    "Click \"Launch\" to start TensorBoard and view training metrics.": "点击“启动”以启动 TensorBoard 并查看训练指标。",
    "Clone": "克隆",
    "Clone Job": "克隆任务",
    "Comma-separate to assign varying batch sizes per resolution.": "用逗号分隔，为每个分辨率分配不同的批量大小。",
    "Confirm": "确认",
    "Connecting...": "正在连接...",
    "Console": "控制台",
    "Constant": "Constant",
    "Cosine": "Cosine",
    "Cosine w/ Min LR": "Cosine w/ Min LR",
    "Cosine w/ Restarts": "Cosine w/ Restarts",
    "Create": "创建",
    "Create New Training Job": "创建新训练任务",
    "Create a new training job or select one from the sidebar": "创建新训练任务，或从侧边栏选择一个",
    "DDP Options": "DDP 选项",
    "DDP replicates the full model on each GPU and syncs gradients. FSDP1/FSDP2 shard parameters to reduce VRAM (FSDP2 is the newer, simpler API).": "DDP 会在每个 GPU 上复制完整模型并同步梯度。FSDP1/FSDP2 对参数进行分片以减少 VRAM（FSDP2 是更新、更简单的 API）。",
    "DDP — Data Parallel (standard)": "DDP — 数据并行（标准）",
    "Danger Zone": "危险区域",
    "DataLoader Workers": "DataLoader 工作线程",
    "Dataset": "数据集",
    "Dataset Folders": "数据集文件夹",
    "Debug option. Leaves attention q/k/v projections unfused instead of using the packed QKV/KV TP path.": "调试选项。保持注意力 q/k/v 投影未融合，而不使用打包的 QKV/KV TP 路径。",
    "Decouple Weight Decay": "解耦权重衰减",
    "DeepSpeed Options": "DeepSpeed 选项",
    "DeepSpeed note:": "DeepSpeed 注意：",
    "DeepSpeed — ZeRO Optimizer Sharding": "DeepSpeed — ZeRO 优化器分片",
    "Delete all TensorBoard event files for this job.": "删除此任务的所有 TensorBoard 事件文件。",
    "Determines how FSDP clusters parameters into sharded units. TRANSFORMER_BASED_WRAP is recommended for large models.": "决定 FSDP 如何将参数聚类为分片单元。大型模型建议使用 TRANSFORMER_BASED_WRAP。",
    "Determines how FSDP2 groups parameters into sharded units. TRANSFORMER_BASED_WRAP is recommended for large DiT/UNet models: each transformer block is all-gathered and reduce-scattered independently, enabling communication/computation overlap.": "决定 FSDP2 如何将参数分组为分片单元。大型 DiT/UNet 模型建议使用 TRANSFORMER_BASED_WRAP：每个 transformer 块都会独立执行 all-gather 和 reduce-scatter，从而实现通信/计算重叠。",
    "Diagnostics": "诊断",
    "Dim Level (Overlay Opacity):": "变暗程度（叠加层不透明度）：",
    "Disable Bucket Shuffle": "禁用分桶打乱",
    "Disable Fused QKV": "禁用融合 QKV",
    "Discard": "放弃",
    "Do Not Upscale Images": "不要放大图像",
    "Drag the focal point in the preview above. Auto-scales to fit.": "在上方预览中拖动焦点。会自动缩放以适配。",
    "Dropout rate (0-1). Randomly zeroes LoRA neurons to reduce overfitting. 0 = off.": "Dropout 率 (0-1)。随机将 LoRA 神经元置零以减少过拟合。0 = 关闭。",
    "Duration Unit": "时长单位",
    "Each fraction is the portion of total steps for that resolution. Must sum to 1.0.": "每个比例表示该分辨率占总步数的份额，总和必须为 1.0。",
    "Enable Aspect Ratio Bucketing": "启用宽高比分桶",
    "Enable FSDP Activation Checkpointing": "启用 FSDP 激活 Checkpointing",
    "Enable Resharding After Forward": "启用前向传播后重新分片",
    "Enable Sampling": "启用采样",
    "Enable Step Profiling": "启用步骤分析",
    "Enable ZeRO-3 Init": "启用 ZeRO-3 初始化",
    "Epochs": "轮数",
    "Exact class name of the transformer block to wrap per-layer. Required for TRANSFORMER_BASED_WRAP.": "要逐层包装的 transformer 块的精确类名。TRANSFORMER_BASED_WRAP 需要。",
    "FP16 Master Weights and Gradients": "FP16 主权重和梯度",
    "FSDP1 — Fully Sharded Data Parallel v1": "FSDP1 — Fully Sharded Data Parallel v1",
    "FSDP2 uses": "FSDP2 使用",
    "FSDP2 vs FSDP1:": "FSDP2 与 FSDP1：",
    "FSDP2 — Fully Sharded Data Parallel v2 (Linux only)": "FSDP2 — Fully Sharded Data Parallel v2（仅 Linux）",
    "FULL_SHARD (1)": "FULL_SHARD (1)",
    "Flash Attention": "Flash Attention",
    "Float16": "Float16",
    "Float32": "Float32",
    "Flow Shift": "Flow Shift",
    "For more information, please refer to the": "更多信息请参阅",
    "Forward Prefetch": "前向预取",
    "Frees gathered parameters after the forward pass. Highly recommended for maximizing VRAM savings.": "在前向传播后释放已收集的参数。强烈建议启用以最大限度节省 VRAM。",
    "Frees intermediate activations during forward and recomputes them in backward. Reduces VRAM at the cost of extra compute. Combine with Reshard After Forward for maximum VRAM savings.": "在前向传播期间释放中间激活，并在反向传播中重新计算。以额外计算为代价降低 VRAM 占用。与“前向传播后重新分片”结合可最大限度节省 VRAM。",
    "Freeze LLM Adapter": "冻结 LLM 适配器",
    "Freeze text encoder. Recommended for most LoRA training.": "冻结文本编码器。建议用于大多数 LoRA 训练。",
    "Full Finetune": "完整微调",
    "Full Finetune Options": "完整微调选项",
    "GPU Selection": "GPU 选择",
    "Generate": "生成",
    "Generated Samples": "生成的样本",
    "GitHub Dark": "GitHub 深色",
    "GitHub Light": "GitHub 浅色",
    "Global Dataset Settings": "全局数据集设置",
    "Gloo (Windows)": "Gloo (Windows)",
    "Gradient Accumulation": "梯度累积",
    "Gradient Checkpointing": "梯度 Checkpointing",
    "Gradient as Bucket View": "梯度作为桶视图",
    "Groups images by aspect ratio for efficient training.": "按宽高比对图像分组，以提高训练效率。",
    "H": "高",
    "HYBRID_SHARD (4) (Non-Windows only)": "HYBRID_SHARD (4)（仅非 Windows）",
    "HYBRID_SHARD_ZERO2 (5) (Non-Windows only)": "HYBRID_SHARD_ZERO2 (5)（仅非 Windows）",
    "Hardware Allocation": "硬件分配",
    "Higher = more capacity, more VRAM.": "越高 = 容量越大，VRAM 占用越多。",
    "Higher stage saves more VRAM but can increase communication overhead.": "更高阶段可节省更多 VRAM，但可能增加通信开销。",
    "Image Brightness:": "图像亮度：",
    "Images smaller than the bucket resolution will not be upscaled, saving VRAM and disk space.": "小于分桶分辨率的图像不会被放大，从而节省 VRAM 和磁盘空间。",
    "In-Training Sampling": "训练中采样",
    "Initialize from an existing LoRA. Often used for fine-tuning the lora. Usually not needed.": "从现有 LoRA 初始化。常用于微调 LoRA。通常不需要。",
    "Job Maintenance": "任务维护",
    "Job Name": "任务名称",
    "Keep Model Loaded": "保持模型加载",
    "Keep the LLM adapter weights frozen during training. Recommended — the adapter is pre-trained and retraining it risks degrading text understanding and causes DDP graph errors.": "训练期间保持 LLM 适配器权重冻结。推荐这样做——该适配器已预训练，重新训练可能会降低文本理解能力并导致 DDP 图错误。",
    "Keeps DataLoader order within resolution buckets.": "保持分辨率桶内的 DataLoader 顺序。",
    "Keeps workers alive between epochs (less startup lag).": "在各轮训练之间保持 worker 存活（减少启动延迟）。",
    "LR Scheduler": "LR 调度器",
    "LR Warmup Steps": "LR 预热步数",
    "Learning Rate": "学习率",
    "Limit All-Gathers": "限制 All-Gather",
    "Linear": "Linear",
    "Linux only.": "仅 Linux。",
    "Lion8bit": "Lion8bit",
    "LoRA": "LoRA",
    "LoRA (Anima)": "LoRA (Anima)",
    "LoRA (Lumina)": "LoRA (Lumina)",
    "LoRA (Standard)": "LoRA（标准）",
    "LoRA Configuration": "LoRA 配置",
    "LoRA Strength": "LoRA 强度",
    "LoRA trains lightweight adapter weights. Full Finetune trains the entire DiT model.": "LoRA 训练轻量级适配器权重。完整微调会训练整个 DiT 模型。",
    "Loading GPUs...": "正在加载 GPUs...",
    "Loads model to VRAM to save system RAM.": "将模型加载到 VRAM 以节省系统 RAM。",
    "Logging": "日志记录",
    "Logit Normal": "Logit Normal",
    "Logs directory:": "日志目录：",
    "Low RAM Optimization": "低 RAM 优化",
    "Max Bucket Resolution": "最大分桶分辨率",
    "Max Epochs": "最大轮数",
    "Max Steps": "最大步数",
    "Max resolution(s) for bucketing. Comma-separate for multi-resolution caching (e.g. 512, 1024).": "用于分桶的最大分辨率。多分辨率缓存请用逗号分隔（例如 512, 1024）。",
    "Midnight Blue": "午夜蓝",
    "Min Bucket Resolution": "最小分桶分辨率",
    "Min LR Ratio": "最小 LR 比率",
    "Minimum LR as a fraction of the initial LR (e.g. 0.1 = decays to 10%).": "最小 LR 占初始 LR 的比例（例如 0.1 = 衰减到 10%）。",
    "Mixed Precision": "混合精度",
    "Moves parameters to Main System RAM when not in use. Slows down training but drastically reduces VRAM requirements.": "未使用时将参数移动到主系统 RAM。会减慢训练速度，但可大幅降低 VRAM 需求。",
    "Moves sharded parameters and gradients to CPU when not in use. Drastically reduces VRAM at the cost of H2D/D2H copy overhead per step.": "未使用时将分片参数和梯度移动到 CPU。以每步 H2D/D2H 拷贝开销为代价，大幅降低 VRAM 占用。",
    "Moves transformer blocks to RAM to save VRAM. 0=Off.": "将 transformer 块移动到 RAM 以节省 VRAM。0=关闭。",
    "Multi-GPU Mode": "多 GPU 模式",
    "Multi-GPU Optimization": "多 GPU 优化",
    "Multi-GPUs": "多 GPU",
    "NCCL (WSL/Linux)": "NCCL (WSL/Linux)",
    "NO_SHARD (3)": "NO_SHARD (3)",
    "NO_WRAP": "NO_WRAP",
    "NO_WRAP — Wrap root module only": "NO_WRAP — 仅包装根模块",
    "NVMe": "NVMe",
    "Negative Prompt": "负向提示词",
    "Network": "网络",
    "Network Alpha": "网络 Alpha",
    "Network Args": "网络参数",
    "Network Dim (Rank)": "网络维度 (Rank)",
    "Network Dropout": "网络 Dropout",
    "Network Module": "网络模块",
    "Network Weights (LoRA checkpoint)": "网络权重 (LoRA checkpoint)",
    "New Job Name": "新任务名称",
    "No Job Selected": "未选择任务",
    "No sample images yet. They will appear here during training.": "暂无示例图像。训练期间它们会显示在这里。",
    "No sample prompts yet. Click \"+ Add Prompt\" to add one.": "暂无示例提示词。点击“+ 添加提示词”添加一个。",
    "None": "无",
    "None (No Prefetch)": "无（不预取）",
    "Not running": "未运行",
    "Number of GPUs for tensor parallelism. Must equal the number of selected GPUs above.": "用于张量并行的 GPU 数量。必须等于上面所选 GPU 的数量。",
    "Number of times the learning rate restarts from max to min.": "学习率从最大值重启到最小值的次数。",
    "Offloads activations to CPU during backward pass. Requires Gradient Checkpointing.": "在反向传播期间将激活值卸载到 CPU。需要 Gradient Checkpointing。",
    "Only rank 0 loads the model checkpoint; other ranks receive weights via broadcast. Reduces peak system RAM by ~50% during startup.": "仅 rank 0 加载模型 checkpoint；其他 rank 通过广播接收权重。启动期间可将系统 RAM 峰值降低约 50%。",
    "Only rank 0 loads the model from disk; other ranks receive weights via broadcast. Reduces peak system RAM by ~50% during startup. Automatically enables Sync Module States (required by accelerate).": "仅 rank 0 从磁盘加载模型；其他 rank 通过广播接收权重。启动期间可将系统 RAM 峰值降低约 50%。会自动启用 Sync Module States（accelerate 所需）。",
    "Only shards modules with at least this many parameters. Default is 100M (1e8).": "仅对参数量至少达到此值的模块进行分片。默认值为 100M (1e8)。",
    "Open the job's directory in file explorer.": "在文件资源管理器中打开该任务的目录。",
    "Optimization": "优化",
    "Optimizer": "优化器",
    "Optimizer NVMe Path": "优化器 NVMe 路径",
    "Optimizer Offload Device": "优化器卸载设备",
    "Output Name": "输出名称",
    "Overlaps parameter all-gather with gradient computation in the backward pass.": "在反向传播中将参数 all-gather 与梯度计算重叠执行。",
    "PagedAdamW": "PagedAdamW",
    "PagedAdamW32bit": "PagedAdamW32bit",
    "PagedAdamW8bit": "PagedAdamW8bit",
    "PagedLion8bit": "PagedLion8bit",
    "Parallel CFG (Speed) - run pos/neg on separate GPUs": "并行 CFG（速度）- 在不同 GPU 上运行正/负提示",
    "Parallelism Mode": "并行模式",
    "Parameter NVMe Path": "参数 NVMe 路径",
    "Parameter Offload Device": "参数卸载设备",
    "Parameters Threshold": "参数阈值",
    "Path to the Python virtual environment with training dependencies.": "包含训练依赖的 Python 虚拟环境路径。",
    "Performance": "性能",
    "Persistent DataLoader Workers": "持久 DataLoader Worker",
    "Polynomial": "Polynomial",
    "Positioning (Drag to focal point)": "定位（拖动到焦点）",
    "Pre-encode captions. Required if text encoder is frozen.": "预编码标题。如果冻结文本编码器则必须启用。",
    "Pre-encode images as .safetensors files for faster training.": "将图像预编码为 .safetensors 文件以加快训练。",
    "Pre-fetches the next layer's parameters during the forward pass to overlap communication with computation. Safe for DiT/UNet (static graphs). Speeds up forward pass at a small VRAM cost.": "在前向传播期间预取下一层参数，使通信与计算重叠。对 DiT/UNet（静态图）安全。以少量 VRAM 为代价加快前向传播。",
    "Prevents too many simultaneous all-gather ops from piling up, reducing CUDA malloc retries and potential OOM spikes. Recommended on.": "防止过多同时进行的 all-gather 操作堆积，减少 CUDA malloc 重试和潜在 OOM 峰值。建议开启。",
    "Primarily useful for ZeRO-Offload configurations that support this mode.": "主要适用于支持此模式的 ZeRO-Offload 配置。",
    "Prints per-step timing breakdown (forward, backward, communication, optimizer, Python overhead) to the training log.": "将每步耗时明细（前向、反向、通信、优化器、Python 开销）打印到训练日志。",
    "Prodigy": "Prodigy",
    "Progressive Resolution Schedule": "渐进式分辨率计划",
    "Prompts": "提示词",
    "Python Venv Path": "Python 虚拟环境路径",
    "RAdamScheduleFree": "RAdamScheduleFree",
    "Reduces gradient memory overhead by eliminating a copy per step. Recommended for DDP training.": "通过消除每步的一次拷贝来降低梯度内存开销。推荐用于 DDP 训练。",
    "Remove": "移除",
    "Required for LoRA training. Keeps original parameter references so FSDP handles mixed frozen/trainable parameters (frozen UNet + LoRA hooks) correctly. Disable only if you know the entire model has uniform requires_grad.": "LoRA 训练必需。保留原始参数引用，使 FSDP 能正确处理混合的冻结/可训练参数（冻结的 UNet + LoRA hooks）。仅当你确定整个模型的 requires_grad 一致时才禁用。",
    "Requires flash-attn package.": "需要 flash-attn 包。",
    "Requires flash-attn.": "需要 flash-attn。",
    "Reshard After Forward": "前向传播后重新分片",
    "Resolution(s)": "分辨率",
    "Restart Cycles": "重启周期",
    "Resume State Folder": "恢复状态文件夹",
    "Resume Training": "恢复训练",
    "Resume training state (optimizer, scheduler, step count). Leave blank when auto-resume is enabled.": "恢复训练状态（优化器、调度器、步数）。启用自动恢复时请留空。",
    "Revert all settings to template defaults.": "将所有设置恢复为模板默认值。",
    "SGDNesterov8bit": "SGDNesterov8bit",
    "SGDScheduleFree": "SGDScheduleFree",
    "SHARD_GRAD_OP (2)": "SHARD_GRAD_OP (2)",
    "SIZE_BASED_WRAP": "SIZE_BASED_WRAP",
    "SIZE_BASED_WRAP — Wrap modules above a parameter threshold": "SIZE_BASED_WRAP — 包装超过参数阈值的模块",
    "Safetensors": "Safetensors",
    "Sage Attention": "Sage Attention",
    "Sample Every N Epochs": "每 N 轮采样",
    "Sample Every N Steps": "每 N 步采样",
    "Sample Prompts": "采样提示词",
    "Samples": "样本",
    "Save 16-bit Model with ZeRO-3": "使用 ZeRO-3 保存 16-bit 模型",
    "Save Every N Epochs": "每 N 轮保存",
    "Save Every N Steps": "每 N 步保存",
    "Save Format": "保存格式",
    "Save Precision": "保存精度",
    "Save Settings": "保存设置",
    "Scale": "缩放",
    "Scaling factor. Usually same as dim.": "缩放因子。通常与 dim 相同。",
    "Seed": "种子",
    "Select a strategy to see details.": "选择一种策略以查看详情。",
    "Separates weight penalty from gradient scaling to prevent overfitting when using Weight Decay.": "将权重惩罚与梯度缩放分离，以在使用权重衰减时防止过拟合。",
    "Sequence Parallel (SP)": "序列并行 (SP)",
    "Sharding (VRAM) - split model across GPUs": "分片 (VRAM) - 将模型拆分到多个 GPU",
    "Sharding Strategy": "分片策略",
    "Space-separated key=value pairs passed to the network module.": "传递给网络模块的以空格分隔的 key=value 对。",
    "Stage 0 (No ZeRO)": "阶段 0（无 ZeRO）",
    "Stage 1 (Optimizer State Sharding)": "阶段 1（优化器状态分片）",
    "Stage 2 (Optimizer + Gradient Sharding)": "阶段 2（优化器 + 梯度分片）",
    "Stage 3 (Full Parameter + Optimizer + Gradient Sharding)": "阶段 3（完整参数 + 优化器 + 梯度分片）",
    "Static Graph": "静态图",
    "Steps": "步数",
    "TP Degree": "TP 度数",
    "TP/SP Options": "TP/SP 选项",
    "TP/SP notes:": "TP/SP 注意事项：",
    "TP/SP — Tensor + Sequence Parallel": "TP/SP — 张量 + 序列并行",
    "TRANSFORMER_BASED_WRAP": "TRANSFORMER_BASED_WRAP",
    "TRANSFORMER_BASED_WRAP — Wrap per transformer block": "TRANSFORMER_BASED_WRAP — 按每个 transformer 块包装",
    "TensorBoard": "TensorBoard",
    "Test Generation": "测试生成",
    "Text Encoder LR": "文本编码器学习率",
    "Text Shadow Intensity:": "文本阴影强度：",
    "The exact class name of the transformer block. Required for TRANSFORMER_BASED_WRAP.": "transformer 块的确切类名。TRANSFORMER_BASED_WRAP 需要此项。",
    "Theme": "主题",
    "This is not available on Windows.": "此功能在 Windows 上不可用。",
    "This mode uses Accelerate DeepSpeed launch options plus existing training arguments.": "此模式使用 Accelerate DeepSpeed 启动选项以及现有训练参数。",
    "Timestep Sample Method": "时间步采样方法",
    "Torch Compile": "Torch Compile",
    "Track Microbatches": "跟踪微批次",
    "Trades compute for VRAM savings. Recommended on.": "用计算量换取 VRAM 节省。建议开启。",
    "Train UNet Only": "仅训练 UNet",
    "Train at each resolution sequentially (low → high) instead of mixing them. Requires at least 2 resolutions above. Works with both epochs and max steps.": "按每个分辨率依次训练（低 → 高），而不是混合训练。需要上方至少 2 个分辨率。适用于按轮数和最大步数训练。",
    "Training": "训练",
    "Training Console": "训练控制台",
    "Training Schedule": "训练计划",
    "Training Type": "训练类型",
    "Transformer Layer to Wrap": "要包装的 Transformer 层",
    "Uniform": "均匀",
    "Unload Model": "卸载模型",
    "Unsloth Offload (async, faster)": "Unsloth 卸载（异步，更快）",
    "Use CUDA Direct Backend": "使用 CUDA Direct 后端",
    "Use Gloo on native Windows. Use NCCL from WSL/Linux. Auto lets the TP/SP script choose.": "在原生 Windows 上使用 Gloo。在 WSL/Linux 上使用 NCCL。Auto 让 TP/SP 脚本选择。",
    "Use Original Parameters": "使用原始参数",
    "Use image alpha channel as loss mask. Images without alpha train normally.": "使用图像 alpha 通道作为损失掩码。没有 alpha 的图像将正常训练。",
    "Uses FSDP's native activation checkpointing. Can be used alongside standard gradient checkpointing for maximum VRAM savings.": "使用 FSDP 原生激活 Checkpoint。可与标准梯度 Checkpoint 一起使用，以最大限度节省 VRAM。",
    "Uses dynamo inductor backend. Slower first step, faster training after.": "使用 dynamo inductor 后端。第一步较慢，之后训练更快。",
    "VAE Batch Size": "VAE 批大小",
    "W": "宽",
    "Waiting for training to start...": "等待训练开始...",
    "Weight Decay": "权重衰减",
    "When enabled (default), frees unsharded parameters after each forward pass and re-all-gathers them in backward. Maximizes VRAM savings. Disable to keep parameters unsharded between forward and backward — saves one backward all-gather at the cost of higher VRAM.": "启用时（默认），每次前向传递后释放未分片参数，并在反向传播中重新 all-gather。可最大限度节省 VRAM。禁用后会在前向和反向之间保持参数未分片——可省去一次反向 all-gather，但会占用更多 VRAM。",
    "Windows-only custom backend replacing NCCL for native multi-GPU. Auto-detected in TP/SP mode. Incompatible with Torch Compile.": "仅限 Windows 的自定义后端，用于在原生多 GPU 中替代 NCCL。在 TP/SP 模式下自动检测。与 Torch Compile 不兼容。",
    "ZeRO Stage": "ZeRO 阶段",
    "gives the best throughput by fetching the next layer while computing current gradients. Costs a small VRAM peak.": "通过在计算当前梯度时预取下一层来获得最佳吞吐量。会增加少量 VRAM 峰值。",
    "official PyTorch docs": "官方 PyTorch 文档",
    "torch.distributed.fsdp.fully_shard": "torch.distributed.fsdp.fully_shard",
    "↗ Open": "↗ 打开",
    "⏹ Stop": "⏹ 停止",
    "▶ Train": "▶ 训练",
    "▼": "▼",
    "⚙️": "⚙️",
    "⚙️ Global Settings": "⚙️ 全局设置",
    "⚠️ Reset Config to Defaults": "⚠️ 将配置重置为默认值",
    "✕": "✕",
    "🎯 Jobs": "🎯 任务",
    "💾 Save": "💾 保存",
    "📁 Choose Image": "📁 选择图像",
    "📂 Open Job Folder": "📂 打开任务文件夹",
    "📊": "📊",
    "📊 TensorBoard": "📊 TensorBoard",
    "🔄": "🔄",
    "🔄 Refresh": "🔄 刷新",
    "🗑": "🗑",
    "🗑️ Clear TensorBoard Logs": "🗑️ 清除 TensorBoard 日志",
    "🗑️ Delete Selected": "🗑️ 删除所选项",
    "🚀 Launch": "🚀 启动",
    "🧠": "🧠",
    "No jobs yet": "暂无任务",
    "Unsaved changes. Switch anyway?": "有未保存的更改，仍要切换吗？",
    "Hardware Monitor": "硬件监控",
    "Error deleting samples": "删除样图失败",
    "Please enter a directory path first": "请先输入目录路径",
    "Job saved": "任务已保存",
    "Changes discarded": "已放弃更改",
    "TensorBoard launched": "TensorBoard 已启动",
    "TensorBoard stopped": "TensorBoard 已停止",
    "Global settings saved": "全局设置已保存",
    "Background updated!": "背景已更新！",
    "Background removed": "背景已移除",
    "Job created": "任务已创建",
    "Job cloned": "任务已克隆",
    "Job deleted": "任务已删除",
    "Training started": "训练已开始",
    "Add sample prompts first": "请先添加采样提示词",
    "Generation started": "生成已开始",
    "Unloading model...": "正在卸载模型...",
    "Model unloaded": "模型已卸载",
    "No model loaded": "没有已加载的模型",
    "Checkpoints refreshed": "Checkpoint 列表已刷新",
    "Training stopped": "训练已停止",
    "Logs cleared": "日志已清空",
    "Config reset to defaults": "配置已重置为默认值",
    "Delete Image": "删除图片",
    "Delete Job": "删除任务",
    "Stop Training": "停止训练",
    "Stop TensorBoard": "停止 TensorBoard",
    "Clear Logs": "清空日志",
    "Reset Config": "重置配置",
    "Stop the TensorBoard server for this job?": "要停止此任务的 TensorBoard 服务吗？",
    "Delete all TensorBoard logs for this job?": "要删除此任务的所有 TensorBoard 日志吗？",
    "Reset all settings to template defaults?": "要将所有设置重置为模板默认值吗？",
    "Sampling is enabled but no prompts are defined.\n\nContinue training without generating samples...\n\n": "已启用采样，但尚未定义提示词。\n\n将继续训练，但不会生成样图...\n\n",
    "Starting generation...": "开始生成...",
    "Using LoRA": "使用 LoRA",
    "(Using base model)": "（使用基础模型）",
    "Uncategorized": "未分类",
    "Delete Dataset": "删除数据集",
    "Open folder": "打开文件夹",
    "Empty Path": "空路径",
    "REG": "正则",
    "Image Directory": "图片目录",
    "Num Repeats": "重复次数",
    "Keep Tokens": "保留 Token",
    "Caption Prefix": "Caption 前缀",
    "Caption Dropout Rate": "Caption Dropout 比例",
    "Tag Dropout Rate": "标签 Dropout 比例",
    "Dropout Every N Epochs": "每 N 轮执行 Dropout",
    "0 = disabled": "0 = 禁用",
    "Shuffle Captions": "打乱 Caption",
    "Flip Augmentations": "翻转增强",
    "Regularization Dataset": "正则化数据集",
    "Images in this folder are used as regularization (class images) to prevent overfitting.": "此文件夹中的图片将作为正则化图片（class images），用于防止过拟合。",
    "Enter prompt text...": "输入提示词...",
    "Skip": "跳过",
    "Use Arrow Keys to navigate | ESC to close": "使用方向键切换，按 ESC 关闭",
    "Running on port": "运行端口",
    "Starting...": "正在启动...",
    "Application": "应用",
    "Use as All-in-One Checkpoint": "作为 All-in-One Checkpoint 使用",
    "Copies the first path to all other fields for this architecture.": "将第一个路径复制到此架构的其他所有字段。",
    "No supported accelerator detected (CPU only).": "未检测到支持的加速器（仅 CPU）。",
    "No supported accelerator detected.": "未检测到支持的加速器。",
    "Error": "错误",
    "Idle": "空闲",
    "Sampling": "采样",
    "Enter at least 2 resolutions above to configure phases.": "请在上方至少输入 2 个分辨率以配置阶段。",
    "Sum": "总和",
    "of steps": "步数",
    "Name required": "请输入名称",
    "Job already exists": "任务已存在",
    "Job not found": "任务不存在",
    "Stop job before deleting": "删除前请先停止任务",
    "Source job not found": "源任务不存在",
    "GPU IDs must be valid numbers.": "GPU ID 必须是有效数字。",
    "macOS MPS supports single-device training only. Select one accelerator or leave GPU selection empty.": "macOS MPS 仅支持单设备训练。请选择一个加速器，或留空 GPU 选择。",
    "Job not running": "任务未运行",
    "Job is running. Stop it first.": "任务正在运行，请先停止。",
    "No sample prompts found. Add prompts in the Prompts tab.": "未找到采样提示词，请在“提示词”标签页添加。",
    "macOS MPS supports single-device generation only.": "macOS MPS 仅支持单设备生成。",
    "macOS MPS does not support multi-GPU generation modes.": "macOS MPS 不支持多 GPU 生成模式。",
    "File not found": "文件不存在",
    "Folder not found": "文件夹不存在",
    "Failed to start persistent generation server (timeout)": "持久生成服务启动失败（超时）",
    "Generation completed (Server kept running)": "生成完成（服务保持运行）",
    "No image data": "没有图片数据",
    "DiT Model Path": "DiT 模型路径",
    "Qwen3 Text Encoder Path": "Qwen3 文本编码器路径",
    "VAE Path": "VAE 路径",
    "Lumina DiT Model Path": "Lumina DiT 模型路径",
    "Gemma 2 Text Encoder Path": "Gemma 2 文本编码器路径",
    "Lumina VAE Path": "Lumina VAE 路径",
    "Discrete Flow Shift": "Discrete Flow Shift",
    "CFG Truncation Ratio": "CFG 截断比例",
    "Renorm CFG": "Renorm CFG",
    "System Prompt": "System Prompt",
    "Enter negative prompt tags...": "输入负向提示词标签...",
    "e.g. 512, 1024, 1536": "例如 512, 1024, 1536",
    "e.g. 4, 2, 1": "例如 4, 2, 1",
    "e.g. conv_dim=4 conv_alpha=4": "例如 conv_dim=4 conv_alpha=4",
    "e.g. Block": "例如 Block",
    "e.g. Aemeath_copy": "例如 Aemeath_copy",
    "e.g. A photo of,": "例如 A photo of,",
    "Choose Image": "选择图像",
    "Open": "打开",
    "Stop": "停止",
    "Save": "保存",
    "Train": "训练",
    "Delete": "删除",
    "Unified memory": "统一内存",
    "LORA Configuration": "LoRA 配置"
};

  const RULES = [
    [/^Failed to load job: (.+)$/u, "加载任务失败：$1"],
    [/^Error: (.+)$/u, "错误：$1"],
    [/^Running on port (\d+)$/u, "运行中，端口 $1"],
    [/^Prompt (\d+)$/u, "提示词 $1"],
    [/^Dataset (\d+)(.*)$/u, "数据集 $1$2"],
    [/^(.+) Models$/u, "$1 模型"],
    [/^Delete "(.+)"\?$/u, "删除“$1”？"],
    [/^Delete "(.+)" and all its files\? This cannot be undone\.$/u, "删除“$1”及其所有文件？此操作无法撤销。"],
    [/^Stop training for "(.+)"\?$/u, "停止“$1”的训练吗？"],
    [/^(.+) paths synced!$/u, "$1 路径已同步！"],
    [/^Error deleting (\d+) sample\(s\)$/u, "删除 $1 张样图失败"],
    [/^Delete \((\d+)\)$/u, "删除（$1）"],
    [/^(\d+)% of steps$/u, "占步数的 $1%"],
    [/^Sum: ([0-9.]+)$/u, "总和：$1"],
  ];

  const PATH_PLACEHOLDERS = {
    "win32": {
        "image_dir": "C:\\path\\to\\images",
        "lora": "C:\\path\\to\\lora.safetensors",
        "resume": "C:\\path\\to\\saved_state",
        "venv": "C:\\Anima-Standalone-Trainer\\venv",
        "nvme": "D:\\local_nvme"
    },
    "darwin": {
        "image_dir": "/Users/you/datasets/images",
        "lora": "/Users/you/models/lora.safetensors",
        "resume": "/Users/you/outputs/saved_state",
        "venv": "/Users/you/Anima-Standalone-Trainer/venv",
        "nvme": "/Volumes/local_nvme"
    },
    "linux": {
        "image_dir": "/home/you/datasets/images",
        "lora": "/home/you/models/lora.safetensors",
        "resume": "/home/you/outputs/saved_state",
        "venv": "/home/you/Anima-Standalone-Trainer/venv",
        "nvme": "/local_nvme"
    }
};
  let systemInfo = { platform: "unknown", pathPlaceholders: null };

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function preserveOuterWhitespace(raw, translated) {
    const leading = raw.match(/^\s*/)?.[0] || "";
    const trailing = raw.match(/\s*$/)?.[0] || "";
    return `${leading}${translated}${trailing}`;
  }

  function translate(value) {
    if (value == null) return value;
    const raw = String(value);
    const normalized = normalizeText(raw);
    if (!normalized) return raw;
    if (TRANSLATIONS[normalized]) {
      return preserveOuterWhitespace(raw, TRANSLATIONS[normalized]);
    }
    for (const [pattern, replacement] of RULES) {
      if (pattern.test(normalized)) {
        return preserveOuterWhitespace(raw, normalized.replace(pattern, replacement));
      }
    }
    return raw;
  }

  function shouldSkipTextNode(node) {
    const parent = node.parentElement;
    if (!parent) return true;
    return !!parent.closest("script, style, textarea, code, pre");
  }

  function translateTextNodes(root) {
    const start = root && root.nodeType === Node.ELEMENT_NODE ? root : document.body;
    if (!start) return;
    const walker = document.createTreeWalker(start, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      if (shouldSkipTextNode(node)) continue;
      const next = translate(node.nodeValue);
      if (next !== node.nodeValue) node.nodeValue = next;
    }
  }

  function translateAttributes(root) {
    const start = root && root.nodeType === Node.ELEMENT_NODE ? root : document.body;
    if (!start) return;
    const elements = start.querySelectorAll("[placeholder], [title], [aria-label]");
    for (const el of elements) {
      for (const attr of ["placeholder", "title", "aria-label"]) {
        if (!el.hasAttribute(attr)) continue;
        const current = el.getAttribute(attr);
        const next = translate(current);
        if (next !== current) el.setAttribute(attr, next);
      }
    }
  }

  function platformKey() {
    const platform = systemInfo.platform || "";
    if (platform === "win32") return "win32";
    if (platform === "darwin") return "darwin";
    if (platform === "linux") return "linux";
    const browser = navigator.platform || "";
    if (/Mac/i.test(browser)) return "darwin";
    if (/Win/i.test(browser)) return "win32";
    return "linux";
  }

  function pathPlaceholder(kind) {
    const serverValue = systemInfo.pathPlaceholders?.[kind];
    if (serverValue) return serverValue;
    return PATH_PLACEHOLDERS[platformKey()]?.[kind] || PATH_PLACEHOLDERS.linux[kind] || "";
  }

  function applyPlatformPlaceholders(root = document) {
    const mappings = [
      ["#cfg-network-weights", "lora"],
      ["#cfg-resume", "resume"],
      ["#cfg-global-venv", "venv"],
      ["#cfg-ds-offload-optimizer-nvme-path", "nvme"],
      ["#cfg-ds-offload-param-nvme-path", "nvme"],
      [".sub-image-dir", "image_dir"],
    ];
    for (const [selector, kind] of mappings) {
      root.querySelectorAll?.(selector).forEach((el) => {
        el.setAttribute("placeholder", pathPlaceholder(kind));
      });
    }
  }

  function apply(root = document.body) {
    translateTextNodes(root);
    translateAttributes(root);
    applyPlatformPlaceholders(root.nodeType === Node.DOCUMENT_NODE ? document : root);
  }

  async function loadSystemInfo() {
    try {
      const res = await fetch("/api/system/info");
      if (!res.ok) return;
      systemInfo = await res.json();
      apply(document);
    } catch (_) {
      // Localization must not block the UI if the endpoint is unavailable.
    }
  }

  function installDialogHooks() {
    const nativeAlert = window.alert.bind(window);
    const nativeConfirm = window.confirm.bind(window);
    window.alert = (message) => nativeAlert(translate(message));
    window.confirm = (message) => nativeConfirm(translate(message));
  }

  function start() {
    installDialogHooks();
    apply(document);
    loadSystemInfo();
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          const node = mutation.target;
          if (!shouldSkipTextNode(node)) {
            const next = translate(node.nodeValue);
            if (next !== node.nodeValue) node.nodeValue = next;
          }
          continue;
        }
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.TEXT_NODE) {
            if (!shouldSkipTextNode(node)) {
              const next = translate(node.nodeValue);
              if (next !== node.nodeValue) node.nodeValue = next;
            }
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            apply(node);
          }
        }
      }
    });
    if (document.body) observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  window.I18N = {
    t: translate,
    apply,
    pathPlaceholder,
    applyPlatformPlaceholders,
    get systemInfo() { return systemInfo; },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
