﻿const generatedBibEntries = {
    "Chen2024musicldm": {
        "abstract": "Diffusion models have shown promising results in cross-modal generation tasks, including text-to-image and text-to-audio generation.. However, generating music, as a special type of audio, presents unique challenges due to limited availability of music data and sensitive issues related to copyright and plagiarism. In this paper, to tackle these challenges, we first construct a state-of-the-art text-to-music model, MusicLDM, that adapts Stable Diffusion and AudioLDM architectures to the music domain. We achieve this by retraining the contrastive language-audio pretraining model (CLAP) and the Hifi-GAN vocoder, as components of MusicLDM, on a collection of music data samples. Then, to address the limitations of training data and to avoid plagiarism, we leverage a beat tracking model and propose two different mixup strategies for data augmentation: beat-synchronous audio mixup and beat-synchronous latent mixup, which recombine training audio directly or via a latent embeddings space, respectively. Such mixup strategies encourage the model to interpolate between musical training samples and generate new music within the convex hull of the training data, making the generated music more diverse while still staying faithful to the corresponding style. In addition to popular evaluation metrics, we design several new evaluation metrics based on CLAP score to demonstrate that our proposed MusicLDM and beat-synchronous mixup strategies improve both the quality and novelty of generated music, as well as the correspondence between input text and generated music.",
        "author": "Chen, Ke and Wu, Yusong and Liu, Haohe and Nezhurina, Marianna and Berg-Kirkpatrick, Taylor and Dubnov, Shlomo",
        "booktitle": "ICASSP 2024-2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
        "doi": "https://doi.org/10.1109/ICASSP48485.2024.10447265",
        "keywords": "type:text-to-music_generation, diffusion_models, beat-synchronous_mixup, musicldm, audio_synthesis, latent_space_interpolation}\uff0c",
        "organization": "IEEE}\uff0c",
        "pages": "1206--1210",
        "title": "MusicLDM: Enhancing novelty in text-to-music generation using beat-synchronous mixup strategies",
        "type": "inproceedings",
        "year": "2024"
    },
    "D.Parker2024STEMGEN": {
        "abstract": "End-to-end generation of musical audio using deep learning techniques has seen an explosion of activity recently. However, most models concentrate on generating fully mixed music in response to abstract conditioning information. In this work, we present an alternative paradigm for producing music generation models that can listen and respond to musical context. We describe how such a model can be constructed using a non-autoregressive, transformer-based model architecture and present a number of novel architectural and sampling improvements. We train the described architecture on both an open-source and a proprietary dataset. We evaluate the produced models using standard quality metrics and a new approach based on music information retrieval descriptors. The resulting model reaches the audio quality of state-of-the-art text-conditioned models, as well as exhibiting strong musical coherence with its context.",
        "author": "Parker, Julian D. and Spijkervet, Janne and Kosta, Katerina and Yesiler, Furkan and Kuznetsov, Boris and Wang, Ju-Chiang and Avent, Matt and Chen, Jitong and Le, Duc",
        "booktitle": "ICASSP 2024 - 2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
        "doi": "https://doi.org/10.1109/ICASSP48485.2024.10446088",
        "keywords": "type:measurement, training, music, transformers, speech_processing, standards, context_modeling, music_generation, deep_learning, llms, generative_models",
        "number": "",
        "pages": "1116-1120",
        "title": "STEMGEN: A Music Generation Model That Listens",
        "type": "INPROCEEDINGS",
        "volume": "",
        "year": "2024"
    },
    "Imasato2023Generate": {
        "abstract": "This work proposes a transformer-based model capable of generating music in its symbolic domain, in a controllable fashion. The ultimate goal of this is to build a system with which people can compose music collaboratively with a computer. Using an NLP model as a base (GPT-2), we take advantage of the similarities across symbolic music representation and written language to build a model capable of conditionally predicting musical sequences. Controllability is achieved without explicit programming for it, and does not require extensive retraining of the model. A study with 939 participants was performed to evaluate this controllability. The results of this suggest the proposed method is indeed effective and can be used to control the generation of music in its symbolic domain. The method itself is flexible to any desired \u201ccontrol\u201d, but this work focuses specifically on the emotion conveyed when one listens to a piece of music.",
        "author": "Imasato, Naomi and Miyazawa, Kazuki and Duncan, Caitlin and Nagai, Takayuki",
        "doi": "https://doi.org/10.1109/ACCESS.2023.3280603",
        "journal": "IEEE Access",
        "keywords": "type:transformers, deep_learning, predictive_models, data_models, computational_modeling, artificial_intelligence, computer_generated_music, music, ai_music_composition, controlled_music_generation, language_model, autoregressive_model",
        "number": "",
        "pages": "52412-52428",
        "title": "Using a Language Model to Generate Music in Its Symbolic Domain While Controlling Its Perceived Emotion",
        "type": "ARTICLE",
        "volume": "11",
        "year": "2023"
    },
    "Jiang2019Music": {
        "abstract": "With the development of deep learning, neural networks are increasingly used in various art fields such as music, literature and pictures, and even comparable to humans. This paper proposes a music generation model based on bidirectional recurrent neural network, which can effectively explore the complex relationship between notes and obtain the conditional probability from time and pitch dimensions. The existing system usually ignored the information in the negative time direction, however which is non-trivial in the music prediction task, so we propose a bidirectional LSTM model to generate the note sequence. Experiments with classical piano datasets have demonstrated that we achieve high performance in music generation tasks compared to the existing unidirectional biaxial LSTM method.",
        "author": "Jiang, Tianyu and Xiao, Qinyin and Yin, Xueyuan",
        "booktitle": "2019 IEEE 2nd International Conference on Electronics Technology (ICET)",
        "doi": "https://doi.org/10.1109/ELTECH.2019.8839399",
        "keywords": "type:recurrent_neural_networks, deep_learning, task_analysis, music, logic_gates, predictive_models, computer_architecture, music_generation, bidirectional_recurrent_neural_network",
        "number": "",
        "pages": "564-569",
        "title": "Music Generation Using Bidirectional Recurrent Network",
        "type": "article",
        "volume": "",
        "year": "2019"
    },
    "Lan2024Stack-and-Delay": {
        "abstract": "Language modeling based music generation relies on discrete representations of audio frames. An audio frame (e.g. 20ms) is typically represented by a set of discrete codes (e.g. 4) computed by a neural codec. Autoregressive decoding typically generates a few thousands of codes per song, which is prohibitively slow and implies introducing some parallel decoding. In this paper we compare different decoding strategies that aim to understand what codes can be decoded in parallel without penalizing the quality too much. We propose a novel stack-and-delay style of decoding to improve upon the vanilla (flattened codes) decoding, with a 4 fold inference speedup. This brings inference speed close to that of the previous state of the art (delay strategy). For the same inference efficiency budget the proposed approach outperforms in objective evaluations, almost closing the gap with vanilla quality-wise. The results are supported by spectral analysis and listening tests, which demonstrate that the samples produced by the new model exhibit improved high-frequency rendering and better maintenance of harmonics and rhythm patterns.",
        "author": "Le Lan, Gael and Nagaraja, Varun and Chang, Ernie and Kant, David and Ni, Zhaoheng and Shi, Yangyang and Iandola, Forrest and Chandra, Vikas",
        "booktitle": "ICASSP 2024 - 2024 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)",
        "doi": "https://doi.org/10.1109/ICASSP48485.2024.10447392",
        "keywords": "type:schedules, codes, stacking, signal_processing, rhythm, rendering, computer_graphics, decoding, music_generation, audio_generation, efficient_decoding, transformer_decoder",
        "number": "",
        "pages": "796-800",
        "title": "Stack-and-Delay: A New Codebook Pattern for Music Generation",
        "type": "INPROCEEDINGS",
        "volume": "",
        "year": "2024"
    },
    "Lang2020SSCL": {
        "abstract": "Deep neural networks have been used in music related applications such as polyphony music generation, music style transfer and hidden emotions identification. However, it's still challenge to generate long-term music with harmonious structures. In this paper, we propose a Self-similarity Clustering Learning (SSCL) model to meet the above challenge. Our main idea is to reduce the dimensionality of the self-similarity matrix followed by clustering, so that the generated music samples in one cluster have similar long-term strucutres. We built a music dataset by collecting 198 hours music data from Internet to evaluate the quality of the generated music. Experimental results show that our model can synthesize music with better long-term properties which are closer to real music.",
        "author": "Lang, Runnan and Wu, Songsong and Zhu, Songhao and Li, Zuoyong",
        "booktitle": "2020 IEEE 4th Information Technology, Networking, Electronic and Automation Control Conference (ITNEC)",
        "doi": "https://doi.org/10.1109/ITNEC48623.2020.9085207",
        "keywords": "type:deep_learning, automation, conferences, neural_networks, internet, information_technology, music_generation, lstm, clustering, neural_networks",
        "number": "",
        "pages": "77-81",
        "title": "SSCL: Music Generation in Long-term with Cluster Learning",
        "type": "INPROCEEDINGS",
        "volume": "1",
        "year": "2020"
    },
    "Mao2018DeepJ": {
        "abstract": "Recent advances in deep neural networks have enabled algorithms to compose music that is comparable to music composed by humans. However, few algorithms allow the user to generate music with tunable parameters. The ability to tune properties of generated music will yield more practical benefits for aiding artists, filmmakers, and composers in their creative tasks. In this paper, we introduce DeepJ - an end-to-end generative model that is capable of composing music conditioned on a specific mixture of composer styles. Our innovations include methods to learn musical style and music dynamics. We use our model to demonstrate a simple technique for controlling the style of generated music as a proof of concept. Evaluation of our model using human raters shows that we have improved over the Biaxial LSTM approach.",
        "author": "Huanru Henry Mao and Taylor Shin and Garrison W. Cottrell\\\"org",
        "bibsource": "dblp computer science bibliography, https://dblp.org",
        "biburl": "https://dblp.org/rec/journals/corr/abs-1801-00887.bib",
        "doi": "https://doi.org/10.1109/ICSC.2018.00077",
        "eprint": "1801.00887",
        "eprinttype": "arXiv",
        "journal": "CoRR",
        "keywords": "type:music_generation, deep_learning, polyphonic_music, style_conditioning, neural_networks, dynamics_modeling",
        "number": "",
        "publisher": "IEEE",
        "timestamp": "Mon, 13 Aug 2018 16:48:58 +0200",
        "title": "DeepJ: Style-Specific Music Generation",
        "type": "article",
        "url": "http://arxiv.org/abs/1801.00887",
        "volume": "abs/1801.00887",
        "year": "2018"
    },
    "O.Lopez-Rincon2018Algoritmic": {
        "abstract": "Abstract: We present a taxonomy of the Artificial Intelligence (AI) methods currently applied for algorithmic music composition. The area known as algorithmic music composition concerns the research on processes of composing music pieces automatically by a computer system. The use of AI for algorithmic music consists on the application of AI techniques as the main tools for the composition generation. There are several models of AI used in music composition such as: heuristics in evolutionary algorithms, neural networks, stochastic methods, generative models, agents, decision trees, declarative programming and grammatical representation. In this survey we present the trending in techniques for automatic music composition. We summarized several research projects of the last seven years and highlight the directions of music composition based on AI techniques.",
        "author": "Lopez-Rincon, Omar and Starostenko, Oleg and Mart\u00edn, Gerardo Ayala-San",
        "booktitle": "2018 International Conference on Electronics, Communications and Computers (CONIELECOMP)",
        "doi": "https://doi.org/10.1109/CONIELECOMP.2018.8327197",
        "keywords": "type:artificial_intelligence, hidden_markov_models, signal_processing_algorithms, markov_processes, taxonomy, computational_modeling, entropy, generative_models, algoritmic_music_composition",
        "number": "",
        "pages": "187-193",
        "title": "Algoritmic music composition based on artificial intelligence: A survey",
        "type": "INPROCEEDINGS",
        "volume": "",
        "year": "2018"
    },
    "T.Liang2017Automatic": {
        "abstract": "This paper presents \u201cBachBot\u201d: an end-to-end automatic composition system for composing and completing music in the style of Bach\u2019s chorales using a deep long short-term memory (LSTM) generative model. We propose a new sequential encoding scheme for polyphonic music and a model for both composition and harmonization which can be efficiently sampled without expensive Markov Chain Monte Carlo (MCMC). Analysis of the trained model provides evidence of neurons specializing without prior knowledge or explicit supervision to detect common music-theoretic concepts such as tonics, chords, and cadences. To assess BachBot\u2019s success, we conducted one of the largest musical discrimination tests on 2336 participants. Among the results, the proportion of responses correctly differentiating BachBot from Bach was only 1% better than random guessing.",
        "author": "Feynman T. Liang and Mark Gotham and Matthew Johnson 0003 and Jamie Shotton",
        "booktitle": "{Proceedings of the 18th International Society for Music Information Retrieval Conference}",
        "doi": "10.5281/zenodo.1416208",
        "keywords": "type:deep_lstm, music_generation, lstm, polyphonic_music, sequential_encoding, music_discrimination_test, harmonization",
        "month": "sep,",
        "pages": "449-456",
        "publisher": "ISMIR",
        "title": "{Automatic Stylistic Composition of Bach Chorales with Deep LSTM.}",
        "type": "inproceedings",
        "url": "https://doi.org/10.5281/zenodo.1416208",
        "venue": "Suzhou, China",
        "year": "2018,"
    },
    "Zhao2019Emotional": {
        "abstract": "With the development of AI technology in recent years, Neural Networks have been used in the task of algorithmic music composition and have achieved desirable results. Music is highly associated with human emotion, however, there are few attempts of intelligent music composition in the scene of expressing different emotions. In this work, Biaxial LSTM networks have been used to generate polyphonic music, and the thought of LookBack is also introduced into the architecture to improve the long-term structure. Above all, we design a novel system for emotional music generation with a manner of steerable parameters for 4 basic emotions divided by Russell\u2019s 2- demonsion valence-arousal (VA) emotional space. The evaluation indices of generated music by this model is closer to real music, and via human listening test, it shows that the different affects expressed by the generated emotional samples can be distinguished correctly in majority.",
        "author": "Zhao, Kun and Li, Siqi and Cai, Juanjuan and Wang, Hui and Wang, Jingling",
        "booktitle": "2019 IEEE 3rd Information Technology, Networking, Electronic and Automation Control Conference (ITNEC)",
        "doi": "https://doi.org/10.1109/ITNEC.2019.8729266",
        "keywords": "type:task_analysis, training, bars, rhythm, recurrent_neural_networks, algorithmic_composition, music_generation, emotional_music, neural_networks, lstm",
        "number": "",
        "pages": "2039-2043",
        "title": "An Emotional Symbolic Music Generation System based on LSTM Networks",
        "type": "INPROCEEDINGS",
        "volume": "",
        "year": "2019"
    },
    "garcia2023vampnet": {
        "abstract": "We introduce VampNet, a masked acoustic token modeling approach to music synthesis, compression, inpainting, and variation. We use a variable masking schedule during training which allows us to sample coherent music from the model by applying a variety of masking approaches (called prompts) during inference. VampNet is non-autoregressive, leveraging a bidirectional transformer architecture that attends to all tokens in a forward pass. With just 36 sampling passes, VampNet can generate coherent high-fidelity musical waveforms. We show that by prompting VampNet in various ways, we can apply it to tasks like music compression, inpainting, outpainting, continuation, and looping with variation (vamping). Appropriately prompted, VampNet is capable of maintaining style, genre, instrumentation, and other high-level aspects of the music. This flexible prompting capability makes VampNet a powerful music co-creation tool. Code 3 and audio samples 4 are available online.",
        "author": "Garcia, Hugo Flores and Seetharaman, Prem and Kumar, Rithesh and Pardo, Bryan",
        "doi": "https://doi.org/10.48550/arXiv.2307.04686",
        "journal": "arXiv preprint arXiv:2307.04686",
        "keywords": "type:masked_acoustic_token_modeling, non-autoregressive_generation, music_synthesis, parallel_iterative_decoding, music_inpainting_and_compression, bidirectional_transformer}\uff0c",
        "title": "Vampnet: Music generation via masked acoustic token modeling",
        "type": "article",
        "year": "2023"
    }
};