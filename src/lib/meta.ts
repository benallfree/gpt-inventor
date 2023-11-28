import logo from './assets/logo.png?enhanced';
import botAvatar from './assets/bot-avatar.png?enhanced';
import userAvatar from './assets/user-avatar.png?enhanced';

export default {
	meta: {
		logo,
		title: 'GPT Inventor',
		description: `Invent, create, deploy, and monetize your next GPT idea in 1 hour`,
		purpose: `Unlock the potential of custom GPT products with GPT Inventor.`,
		stripe: {
			text: `Lifetime Membership - $9.99`,
			url: `https://buy.stripe.com/4gwbJqg648vV8oM000`
		},
		requires: `* Requires a ChatGTP Premium Subscription. You will receive an email with the GPT Inventor
	link when payment is complete.`
	},
	sections: {
		features: {
			enabled: true,
			title: ``,
			items: [
				{
					title: `Custom GPT Ideas`,
					description: `Generate unique ideas for custom GPT models tailored to your needs.`
				},
				{
					title: `Access to Private Telegram Group`,
					description: `Join our exclusive community of paid members for discussions and support.`
				},
				{
					title: `24/7 Support`,
					description: `Have questions or need assistance? Reach out to
			<a href="https://x.com/benallfree" target="_blank" class="text-blue-400"> @benallfree</a>`
				}
			]
		},
		benefits: {
			enabled: true,
			title: `Benefits of GPT Inventor`,
			items: [
				{ title: `Unleash creativity with tailored GPT models.`, description: `` },
				{ title: `Get valuable insights and ideas quickly.`, description: `` },
				{
					title: `Get a fully working landing page, logo, and web assets complete with Stripe checkout button
			just like you see here.`,
					description: ``
				},
				{ title: `Connect with like-minded members in our Telegram group.`, description: `` },
				{ title: `Receive top-notch support for your queries.`, description: `` }
			]
		},
		testimonials: {
			enabled: true,
			ids: [
				'1729214803179434026',
				'1729214803179434027',
				'1729214803179434028',
				'1729214803179434029'
			]
		},
		faq: {
			enabled: true,
			title: `Frequently Asked Questions`,
			items: [
				{
					question: `How do I purchase GPT Inventor?`,
					answer: `Simply click the "Buy Now with Stripe" button and follow the instructions to make your
					purchase.`
				},
				{
					question: `How can I join the private Telegram group?`,
					answer: `Upon purchasing GPT Inventor, you will receive an invitation to join our exclusive
					Telegram group.`
				},
				{
					question: `How can I get support for my questions?`,
					answer: `You can reach out to
					<a href="https://twitter.com/benallfree" target="_blank" class="text-blue-400">
						@benallfree</a
					>
					on Twitter for support and assistance.`
				}
			]
		},
		chat: {
			enabled: true,
			title: `Sample Chat`,
			botAvatar,
			userAvatar,
			continue: `This chat continues with HTML samples and detailed instructions for how to create and deploy
			everything. The more you use it and join the community, the better it gets.`,
			items: [
				{
					who: `start`,
					content: `I suggest custom GPTs based on your interests, complete with landing page and
					monetization. Say
					<code>get started</code>
					to begin.`
				},
				{
					who: `end`,
					content: `Get started!`
				},
				{
					who: `start`,
					content: `<p>Great! Let&#39;s dive into Part 1.</p>
					<p>
						To begin, I&#39;d like to learn more about your current interests, challenges, or any
						particular areas you&#39;re curious about. This can include problems you&#39;re facing
						in your professional or personal life, a specific industry you&#39;re interested in, or
						any general curiosities you have.
					</p>
					<p>
						Feel free to share as much detail as you&#39;re comfortable with, and I&#39;ll summarize
						it back to you to ensure we&#39;re on the right track. This will help us in creating a
						custom GPT that&#39;s tailored to your needs and interests.
					</p>`
				},
				{
					who: `end`,
					content: `i'm going through a bad breakup with my girlfriend and am re-inventing myself. i guess
					that's my main pain point or challenge these days.`
				},
				{
					who: `start`,
					content: `<p>
					I&#39;m sorry to hear about your breakup. Going through such a personal change can be
					challenging but also an opportunity for growth and self-discovery. From what you&#39;ve
					shared, it seems your main focus right now is on reinventing yourself following this
					significant change in your personal life.
				</p>
				<p>To summarize:</p>
				<ol class="list-decimal">
					<li>
						You&#39;re currently dealing with the aftermath of a breakup, which is a significant
						emotional and personal challenge.
					</li>
					<li>
						In response to this, you&#39;re looking to reinvent yourself, potentially exploring
						new aspects of your personality, interests, or lifestyle.
					</li>
				</ol>
				<p>
					Please let me know if this summary accurately captures your situation or if there&#39;s
					anything else you&#39;d like to add. Once we have a clear understanding, we can move on
					to Part 2, where I&#39;ll blend this information with emerging trends and insights that
					could be relevant to your journey of reinvention.
				</p>`
				},
				{
					who: `end`,
					content: `that sounds right`
				},
				{
					who: `start`,
					content: `<p>Great, let&#39;s move on to Part 2.</p>
					<p>
						Considering your current focus on self-reinvention post-breakup, it&#39;s important to
						look at trends and developments that could support this journey. The process of
						reinvention often involves exploring new hobbies, developing personal skills, enhancing
						social connections, and possibly even career changes or advancements.
					</p>
					<p>Here are some emerging trends and areas that might intersect with your interests:</p>
					<ol class="list-decimal">
						<li>
							<p>
								<strong>Wellness and Mindfulness Practices</strong>: There&#39;s a growing trend in
								mindfulness and mental health apps that offer guided meditation, stress management,
								and personal growth exercises. These can be particularly helpful in navigating
								emotional challenges and fostering a sense of inner peace.
							</p>
						</li>
						<li>
							<p>
								<strong>Career Development and Skill Acquisition</strong>: Online platforms for
								learning new skills, whether for personal development or career advancement, are
								increasingly popular. This includes everything from coding and digital marketing to
								creative arts and cooking.
							</p>
						</li>
						<li>
							<p>
								<strong>Fitness and Health</strong>: There&#39;s a continuous evolution in the
								fitness industry with a focus on personalized, at-home workouts, and holistic health
								approaches that combine physical, mental, and nutritional well-being.
							</p>
						</li>
						<li>
							<p>
								<strong>Social Networking and New Relationships</strong>: Emerging platforms and
								communities that focus on shared interests can help you connect with new people,
								potentially leading to meaningful friendships or relationships.
							</p>
						</li>
						<li>
							<p>
								<strong>Hobbies and Creativity</strong>: There&#39;s a surge in interest in DIY
								projects, arts, and crafts, often supported by online communities and tutorials.
								This can be a great way to explore new hobbies and express creativity.
							</p>
						</li>
						<li>
							<p>
								<strong>Travel and Cultural Exploration</strong>: With the easing of travel
								restrictions in many parts of the world, there&#39;s a renewed interest in travel
								and cultural experiences, which can be transformative in personal growth and
								self-discovery.
							</p>
						</li>
					</ol>
					<p>
						Does this summary resonate with your current state and aspirations? If so, I can proceed
						to Part 3 and present custom GPT ideas that cater to this intersection. If there&#39;s
						anything else you&#39;d like to add or focus on, feel free to let me know.
					</p>`
				},
				{
					who: `end`,
					content: `i think the <code>travel and cultural exploration</code> sounds best!`
				},
				{
					who: `start`,
					content: `<p>
					Excellent choice! Travel and cultural exploration can be a fantastic way to rediscover
					yourself and gain new perspectives. Let&#39;s move to Part 3, where I&#39;ll present
					five custom GPT ideas tailored to your interest in travel and cultural exploration.
					These GPTs could not only assist you on your journey but also have potential for
					monetization.
				</p>
				<ol class="list-decimal">
					<li>
						<p>
							<strong>Global Culture Explorer GPT</strong>: This custom GPT could provide insights
							into different cultures, traditions, and hidden gems in various countries. It could
							offer travel tips, cultural etiquette, and language basics to help you immerse in
							local experiences.
						</p>
					</li>
					<li>
						<p>
							<strong>Solo Travel Companion GPT</strong>: Designed for solo travelers, this GPT
							would offer guidance on safe and fulfilling solo travel, including destination
							recommendations, networking tips to meet fellow travelers, and how to find local
							events and activities.
						</p>
					</li>
					<li>
						<p>
							<strong>Adventure Planner GPT</strong>: Focused on adventure travel, this GPT could
							help plan trips that are off the beaten path, including outdoor activities like
							hiking, scuba diving, and cultural festivals. It could also provide essential safety
							and gear advice.
						</p>
					</li>
					<li>
						<p>
							<strong>Culinary Travel Guide GPT</strong>: For those interested in exploring world
							cuisines, this GPT would offer advice on must-try dishes, food tours, cooking
							classes, and the best eateries, from street food to fine dining in different
							destinations.
						</p>
					</li>
					<li>
						<p>
							<strong>Mindful Travel GPT</strong>: This GPT would focus on travel as a means for
							personal growth and mindfulness. It could suggest destinations known for their
							spiritual significance, wellness retreats, and activities that promote mindfulness
							and self-reflection.
						</p>
					</li>
				</ol>
				<p>
					Please choose one of these GPT ideas by typing 1, 2, 3, 4, or 5. Your selection will
					help us move forward to Part 4, where we&#39;ll discuss the next steps in bringing your
					chosen GPT concept to life.
				</p>`
				},
				{
					who: `end`,
					content: `3`
				},
				{
					who: `start`,
					content: `	<p>
					Great choice! The &quot;Adventure Planner GPT&quot; sounds like an exciting project,
					focusing on planning unique and off-the-beaten-path travel experiences. It&#39;s a
					fantastic concept for those looking to explore new adventures and could be very popular
					among travel enthusiasts.
				</p>
				<p>
					Now, let&#39;s move on to Part 4. Here, you can choose from a variety of options to
					start building and monetizing your Adventure Planner GPT. The menu includes:
				</p>
				<ol class="list-decimal">
					<li>Creating a landing page with a Stripe checkout button.</li>
					<li>
						Suggesting a domain name and providing instructions for domain registration and
						deployment.
					</li>
					<li>Starting a private Telegram group.</li>
					<li>Creating a Stripe button and checkout email.</li>
					<li>Detailing thoughts on how to design the GPT.</li>
				</ol>
				<p>
					You can select any of these options to begin. Just type the number of the option
					you&#39;d like to start with, and we&#39;ll proceed accordingly. Remember, you can
					explore all the options in any order you prefer.
				</p>`
				},
				{
					who: `end`,
					content: `1`
				},
				{
					who: `start`,
					content: `
					<img src='/sample-logo.png' style="width: 250px" class="mb-10" />
					<p>
						Here&#39;s the logo for &quot;Adventure Planner GPT&quot;. It features an abstract
						representation of a globe, mountains, and a compass, with vibrant colors that evoke a
						sense of excitement and discovery.
					</p>
					<p>
						Next, I&#39;ll create an HTML landing page for Adventure Planner GPT, which will
						include:
					</p>
					<ul class='list-disc'>
						<li>A banner with this logo.</li>
						<li>A Stripe purchase button.</li>
						<li>A call to action.</li>
						<li>Features, including the private Telegram group for paid members.</li>
						<li>Benefits of using the service.</li>
						<li>Testimonials.</li>
						<li>An FAQ section.</li>
						<li>A template for a sample chat.</li>
						<li>A link to your X account for support and questions.</li>
					</ul>`
				}
			]
		}
	}
};
