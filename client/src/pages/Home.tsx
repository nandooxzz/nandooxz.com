import { color, motion } from 'framer-motion';
import { FallingPattern } from '@/components/ui/falling-pattern';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { FaSpotify, FaInstagram, FaYoutube, FaSoundcloud } from 'react-icons/fa';


import { useState } from 'react';
import { Card,CardAction,CardContent,CardDescription,CardFooter,CardHeader,CardTitle } from '@/components/ui/card';
import { Tabs,TabsContent,TabsList,TabsTrigger } from '@radix-ui/react-tabs';
import { Avatar,AvatarImage,AvatarFallback } from '@radix-ui/react-avatar';
import { Link } from 'wouter';


/**
 * Falling Pattern Landing Page - Hero Only
 * Design: Dark theme with neon green accent
 * 
 * Color Palette:
 * - Background: Pure black (#000000)
 * - Accent: Bright lime green (#00FF00)
 * - Text: White (#FFFFFF)
 * 
 * Typography:
 * - Display: Sora (700 weight)
 * - Body: Inter (400 weight)
 * 
 * Motion Philosophy:
 * - Entrance animations: fade + scale(0.95) over 200ms
 * - Hover states: scale(1.02) over 150ms
 * - Continuous falling pattern animation
 */

const SOCIALS = [
	{ name: 'Spotify', url: 'https://open.spotify.com/artist/3XQcfKwJ2V7A953V4BbI0H', color: '#00FF00', icon: <FaSpotify /> },
	{ name: 'Youtube', url: 'https://www.youtube.com/@prod.nandooxz', color: '#fb2c36', icon: <FaYoutube /> },
	{ name: 'Instagram', url: 'https://www.instagram.com/prod.nandooxz/', color: '#f0f0f0', icon: <FaInstagram /> },
	{ name: 'Soundcloud', url: 'https://soundcloud.com/prodnandooxz', color: '#F97316', icon: <FaSoundcloud /> },
];

const PRODUCTS = [
	{name: 'June Loop Kit', url: 'https://payhip.com/b/28lcX', price: '$0', cover: 'https://payhip.com/cdn-cgi/image/format=auto,width=120/https://pe56d.s3.amazonaws.com/o_1jrmcbfcr10b1eq1fnr13q61s3e1a.jpg'},
	{name: '1K Drum Kit', url: 'https://payhip.com/b/KVS5a', price: '$0', cover: 'https://payhip.com/cdn-cgi/image/format=auto,width=120/https://pe56d.s3.amazonaws.com/o_1jpghhvho19slj6b1keup8r19991f.png'},
]

const LICENSES = [
	{name: 'Premium License', url: 'https://payhip.com/b/Rnp8h', price: '$49.90'},
	{name : 'Unlimited License', url: 'https://payhip.com/b/3Q4EJ', price: '$79.90'},
	{name: 'Exclusive License', url: 'https://payhip.com/b/AcOQj', price: '$149.90'},
]

export default function Home() {
	const [activeTab, setActiveTab] = useState('about');

	return (
		<div className="min-h-screen bg-black overflow-hidden select-none">
			{/* Hero Section with FallingPattern */}
			<section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
				{/* Animated Background Pattern */}
				<div className="absolute inset-0 z-0">
					<FallingPattern
						color="#00FF00"
						backgroundColor="#000000"
						duration={150}
						blurIntensity="1.5em"
						density={1}
						className="h-full w-full [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black_70%)]"
					/>
				</div>

				{/* Hero Content */}
				<motion.div
					className="relative z-11 text-center px-4 sm:px-6 lg:px-8 w-[500px] min-w-[300px] mx-auto"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					<Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="w-full">
						<TabsList className='bg-black rounded-md p-1 border-[1px] border-[#00FF00]'>
							<TabsTrigger value="about" className='m-2'>Home</TabsTrigger>
							<TabsTrigger value="shop" className='m-2'>Shop</TabsTrigger>
						</TabsList>
						<br />
						<TabsContent value="about">

							<Card>
								<CardHeader>
									<CardTitle>I'm nandooxz</CardTitle>
									<CardDescription>Producer / Beatmaker</CardDescription>
									<CardAction>
										<Avatar>
											<AvatarImage src="https://i.imgur.com/LTnGtl5.png" className='size-11 rounded-4xl'/>
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
									</CardAction>
								</CardHeader>
								<CardContent className='flex flex-col gap-2'>
									{SOCIALS.map((social) => (
											<a href={social.url} target={'_blank'}><Button style={{ color: social.color }} className='w-full bg-black hover:bg-black hover:border-[#00ff005d] border-transparent border-[1px] p-6'>{social.icon} {social.name}</Button></a>
										)
									)}
									<Button onClick={() => setActiveTab("shop")} className='w-full bg-black hover:bg-black hover:border-[#00ff005d] border-transparent border-[1px] p-6 text-white'>Go to Shop <ArrowRight /></Button>
								</CardContent>
								<CardFooter>
									<span className='text-gray-600'>&copy; {new Date().getFullYear()} nandooxz</span>
								</CardFooter>

							</Card>

						</TabsContent>
						<TabsContent value="shop" className=''>
							<Card className='max-h-[500px] overflow-y-scroll'>
								<CardHeader>
									<CardTitle>Products</CardTitle>
								</CardHeader>
								<CardContent>
									<h3 className="text-lg text-left font-bold">Kits</h3> <br/>
									<div className="grid grid-cols-3 gap-2 overflow-x-scroll">
										{PRODUCTS.map((product) => (
											<a href={product.url} target={'_blank'} key={product.name}>
												<div key={product.name} className="bg-black rounded-md p-4 font-mono border-[1px] border-black hover:border-[#00ff005d] transition-all duration-200 h-full">
													<img src={product.cover} alt={product.name} className="w-full rounded-md" />
													<p className="text-sm font-bold mt-2 w-fit">{product.name}</p>
													<p className="text-sm font-bold text-[#00ff00]">{product.price}</p>
												</div>
											</a>
										))}
									</div>

									<br/>

									<h3 className="text-lg text-left font-bold">Licenses</h3> <br/>
									<div className="w-full grid grid-cols-3 gap-2 overflow-x-scroll">
										{LICENSES.map((license) => (
											<a href={license.url} target={'_blank'} key={license.name}>
												<div key={license.name} className="bg-black rounded-md p-4 font-mono border-[1px] border-black hover:border-[#00ff005d] transition-all duration-200 h-full">
													<img src={'https://payhip.com/cdn-cgi/image/format=auto,width=120/https://pe56d.s3.amazonaws.com/o_1jpdmh09mvdi1bdi1oka1hm6gao15.png'} alt={license.name} className="w-full rounded-md" />
													<p className="font-bold text-sm mt-2 w-full">{license.name}</p>
													<p className="text-sm font-bold text-[#00ff00]">{license.price}</p>
												</div>
											</a>
										))}
									</div>
								</CardContent>
								<br/><br/><br/>
								<CardFooter >
									<div className="flex flex-col gap-2">
										<Button onClick={() => setActiveTab("about")} className='bg-black hover:bg-black hover:border-[#00ff005d] border-transparent border-[1px] p-6 text-white w-[40%]'>Go Back <ArrowLeft /></Button>
										<span className='text-gray-600 text-[0.7em]'>All payments are processed securely through Payhip.</span>
									</div>
								</CardFooter>
								<br/><br/><br/>
							</Card>

						</TabsContent>
					</Tabs>
				</motion.div>
			</section>
		</div>
	);
}
