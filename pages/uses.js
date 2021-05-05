import Head from 'next/head'

export default function About () {
  return (
    <>
      <Head>
        <title>Uses</title>
      </Head>
      <main>
        <p>I get often asked what software or hardware I use. So I decided to make a separate page listing everything I use daily.</p>

        <b>Main Setup</b>
        <ul>
          <li>M1 Macbook Pro 13" with 16 GB RAM & 512 GB SSD</li>
          <li>LG 38WK95C-C Ultra-Wide</li>
          <li>Apple Magic Keyboard & Trackpad 2</li>
          <li>Blue Yeti Blackout microphone</li>
        </ul>

        <b>Software (macOS)</b>
        <ul>
          <li>Rectangle for window management.</li>
          <li>Most of my development is done with <a href='https://code.visualstudio.com/'>Visual Studio Code</a>. I have my own <a href='https://github.com/emilnuutinen/fresh-dark'>theme</a> for it.</li>
          <li>Vim for quick edits.</li>
          <li>I also write my thoughts in markdown using Vim. I made templates and scripts automating my daily journals and weekly reflections.</li>
          <li>Terminal client is iTerm2 with <a href='https://ohmyz.sh/'>Oh My ZSH</a> & <a href='https://github.com/denysdovhan/spaceship-prompt'>Spaceship prompt</a>.</li>
          <li>My favorite font is <a href='https://rubjo.github.io/victor-mono/'>Victor Mono</a>.</li>
          <li>Matrix (Element), Slack & Microsoft Teams for communication.</li>
          <li>Firefox for browsing the internet. (Safari & Chrome for testing)</li>
          <li><a href='https://justgetflux.com/'>f.lux</a> to save me from headaches during the nights.</li>
          <li>Mendeley to organize research papers.</li>
        </ul>

        <b>Desktop Setup</b>
        <ul>
          <li>Some old Fractal Design Case, Intel i5-6500 @ 3.600GHz, 32 GB DDR4, NVIDIA GeForce GTX 1060 3 GB, Kingston 480 GB & 120 GB SSD, Kingston 1 TB HDD</li>
          <li>Dual boot Ubuntu and Windows 10&#185;</li>
          <li>LG 38WK95C-C Ultra-Wide</li>
          <li>Corsair K65 LUX RGB Tenkeyless</li>
          <li>Logitech MX Master 2S</li>
        </ul>

        <b>Software (Ubuntu)</b>
        <ul>
          <li>Pop!_OS Shell for window management.</li>
          <li>Development environment is the same as with macOS. (VSCode & Vim)</li>
          <li>Terminal client is Kitty with <a href='https://ohmyz.sh/'>Oh My ZSH</a> & <a href='https://github.com/denysdovhan/spaceship-prompt'>Spaceship prompt</a>.</li>
          <li>My favorite font is <a href='https://rubjo.github.io/victor-mono/'>Victor Mono</a>.</li>
          <li>Matrix (Element), Slack & Microsoft Teams for communication.</li>
          <li>Firefox & Lynx for browsing the internet.</li>
          <li><a href='http://jonls.dk/redshift/'>Redshift</a> to save me from headaches during the nights.</li>
          <li>Mendeley to organize research papers.</li>
          <li>Messy dotfiles can be found <a href='https://github.com/emilnuutinen/dotfiles'>here</a>.</li>
        </ul>

        <b>Others</b>
        <ul>
          <li>Iphone Xs</li>
          <li>Bose QC35 II</li>
          <li>Sony a6000 with Sigma 30mm f/1.4</li>
        </ul>

        <small>&#185;My main distro is Ubuntu, but I use Windows for occasional gaming and random stuff that Linux is not the best distro for.</small>
      </main>
    </>
  )
}
