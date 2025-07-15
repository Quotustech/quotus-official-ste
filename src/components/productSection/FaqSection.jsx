import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    id: 1,
    question: "How does the platform handle data security?",
    answer: "We use end-to-end encryption with AES-256 standards, regular security audits, and SOC 2 Type II compliance. All data transfers are protected with TLS 1.3 protocols.",
    category: "Security"
  },
  {
    id: 2,
    question: "What integration options are available?",
    answer: "Our platform offers REST API, Webhooks, and native integrations with 100+ services including Salesforce, Slack, and Microsoft Teams. SDKs are available for JavaScript, Python, and Java.",
    category: "Integrations"
  },
  {
    id: 3,
    question: "How often are new features released?",
    answer: "We deploy minor updates weekly and major feature releases quarterly. All updates are backward compatible and come with detailed migration guides when needed.",
    category: "Product"
  },
  {
    id: 4,
    question: "What support options are available?",
    answer: "We offer 24/7 email support for all plans, with live chat and phone support for enterprise customers. Response times are under 2 hours for critical issues.",
    category: "Support"
  },
  {
    id: 5,
    question: "Can I export my data from the platform?",
    answer: "Yes, you can export all your data in JSON, CSV, or Excel formats at any time. We also provide automated daily backups for all customer data.",
    category: "Data"
  },
  {
    id: 6,
    question: "What compliance standards do you meet?",
    answer: "We're compliant with GDPR, CCPA, HIPAA, and ISO 27001. Region-specific data residency options are available for EU and APAC customers.",
    category: "Compliance"
  },
  {
    id: 7,
    question: "How does pricing scale with usage?",
    answer: "Our pricing is usage-based with volume discounts. Enterprise plans include custom SLAs and dedicated infrastructure. Contact sales for detailed pricing tiers.",
    category: "Pricing"
  },
  {
    id: 8,
    question: "What browsers are supported?",
    answer: "We support Chrome, Firefox, Safari, Edge, and Opera on their latest two versions. Mobile apps are available for iOS and Android.",
    category: "Compatibility"
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();
  const categories = ["All", ...new Set(faqs.map(faq => faq.category))];

  const filteredFaqs = useMemo(() => {
    let result = faqs;

    if (activeCategory !== "All") {
      result = result.filter(faq => faq.category === activeCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(faq =>
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header with SVG Background */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#1f0079] to-[#513897] p-8 sm:p-12 mb-16 text-cente "
        >
          {/* SVG Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              width="100%"
              height="100%"
              patternUnits="userSpaceOnUse"
              className="text-white/5"
            >
              <pattern
                id="grid-pattern"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 0 40 L 40 0"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            How can we help?
          </motion.h2>
          {/* search bar  */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative max-w-2xl mx-auto"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search FAQs..."
              className="block w-full pl-10 pr-3 py-1 border border-transparent rounded-full bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                  ? "bg-[#1f0079] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        {/* Two Column FAQ Grid */}
        {filteredFaqs.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row  w-full justify-between gap-[3vw]"
          >
            {/* First Column */}
            <div className="flex-1 space-y-0">
              {filteredFaqs
                .filter((_, index) => index % 2 === 0)
                .map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-full "
                  >
                    <div
                      onClick={() => toggleFAQ(faq.id)}
                      className={`p-4 rounded-xl cursor-pointer transition-all ${activeIndex === faq.id ? "bg-gray-50" : "bg-white hover:bg-gray-50"
                        }`}
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: activeIndex === faq.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown
                            className={`h-5 w-5 ${activeIndex === faq.id ? "text-[#1f0079]" : "text-gray-400"
                              }`}
                          />
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {activeIndex === faq.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="pt-3 text-gray-600 text-sm">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
            </div>

            <div className="hidden md:block w-px bg-gray-200 dark:bg-gray-700"></div>

            {/* Second Column */}
            <div className="flex-1 space-y-0">
              {filteredFaqs
                .filter((_, index) => index % 2 === 1)
                .map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-full"
                  >
                    <div
                      onClick={() => toggleFAQ(faq.id)}
                      className={`p-4 rounded-xl cursor-pointer transition-all ${activeIndex === faq.id ? "bg-gray-50" : "bg-white hover:bg-gray-50"
                        }`}
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{ rotate: activeIndex === faq.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown
                            className={`h-5 w-5 ${activeIndex === faq.id ? "text-[#1f0079]" : "text-gray-400"
                              }`}
                          />
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {activeIndex === faq.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="pt-3 text-gray-600 text-sm">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              No results found. Try a different search term.
            </p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Still have questions?
          </h3>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-[#1f0079] text-white rounded-lg font-medium shadow-md hover:bg-[#2a0099] transition-all"
            onClick={() => { navigate("/contact") }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;