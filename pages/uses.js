import Head from 'next/head'
import Layout from '../layouts/layout'

export default function About () {
  return (
    <Layout>
      <Head>
        <title>Uses</title>
      </Head>
      <main>
        <h1>Daily Uses</h1>
        <p>I get often asked what software or hardware I use. So I decided to make a separate page listing everything I use daily.</p>

        <h2>Desktop setup</h2>
        <ul>
          <li>Some old Fractal Design Case, Intel i5-6500 @ 3.600GHz, 32 GB DDR4, NVIDIA GeForce GTX 1060 3GB, Kingston 480GB & 120GB SSD, Kingston 500GB HDD</li>
          <li>Dual boot Arch Linux and Windows 10</li>
          <li>LG 38WK95C-C Ultra-Wide Monitor</li>
          <li>Corsair K65 LUX RGB Tenkeyless keyboard</li>
          <li>Logitech MX Master 2S mouse</li>
          <li>Blue Yeti Blackout microphone</li>
        </ul>

        <h2>Software</h2>
        <ul>
          <li>Slightly riced i3-gaps tiling window manager with Polybar and Picom.</li>
          <li>Most of my development is done with <a href='https://code.visualstudio.com/'>Visual Studio Code</a>. I have my own <a href='https://marketplace.visualstudio.com/items?itemName=EmilNuutinen.fresh-dark'>theme</a> for it.</li>
          <li>Terminal client is Kitty with <a href='https://ohmyz.sh/'>Oh My ZSH</a> & <a href='https://github.com/denysdovhan/spaceship-prompt'>Spaceship prompt</a>.</li>
          <li>My current favorite font is <a href='https://www.jetbrains.com/lp/mono/'>JetBrains Mono</a>.</li>
          <li>Discord, Slack & Microsoft Teams for communication.</li>
          <li>Vim & markdown for organizing my thoughts.</li>
          <li>Firefox & Lynx for browsing.</li>
          <li><a href='http://jonls.dk/redshift/'>Redshift</a> to save me from headaches during the nights.</li>
          <li>Mendeley to organize research papers.</li>
          <li>Zathura to read them and everything else pdf.</li>
          <li>Messy dotfiles can be found <a href='https://github.com/emilrwx/dotfiles'>here</a>.</li>
        </ul>

        <h2>Others</h2>
        <ul>
          <li>Iphone Xs</li>
          <li>Bose QC35 II</li>
          <li>Sony a6000 with Sigma 30mm f/1.4</li>
        </ul>
      </main>
    </Layout>
  )
}
