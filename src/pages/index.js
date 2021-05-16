import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { BeakerIcon } from '@heroicons/react/solid'
import styled from 'styled-components'
import {color} from 'styled-system'

const Box = styled.div`
  ${color}
`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <Box color="#fff" bg="tomato">tomato</Box>


    <h1>Hi people</h1>
    <p className="py-6 px-8 bg-gradient-to-r from-blue-500 hover:bg-blue-800">Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-icon.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>

    <h1>Manifestation of my goals:</h1>
    <h2>I want to visualize all of yara's button's and it's states 
      correctly in iterations on tailwindcss in gatsby! Preach it sis</h2>


    <h3>First Visualize the color palette</h3>
    <div className="flex justify-center m8">
      <div className="color-container bg-blue-scale60">purple 600</div>
      <div className="color-container bg-blue-scale70">purple 700</div>
      <div className="color-container bg-blue-scale80">purple 800</div>
      <div className="color-container bg-blue-scale90">purple 900</div>
    </div>

    <div class="container mx-auto px-4">
      <button className="">Primary button</button>
      <button>Secondary button</button>
      <button>Outline button</button>
      <button>Ghost button</button>
    </div>

    <div class="container">
      <StaticImage src="../images/gatsby-astronaut.png" alt="avatar" className="avatar avatar-spacing"/>
      <p className="header">Nicole</p>
      <p className="sub-header"> @wherenic • UX Design Systems Designer, Yara International • she/her • Singapore</p>
      <BeakerIcon className="h-5 w-5 text-blue-500"/>
      <tags className="contianer"></tags>
    </div>

    <div className="flex items-center"> 
      <BeakerIcon className="h-5 w-5 text-blue-500"/>
      <p className="tag-label">Product Design</p>  
    </div>

  </Layout>
)

export default IndexPage
