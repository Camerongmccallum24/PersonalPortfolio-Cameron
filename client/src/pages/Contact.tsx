
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // TODO: Implement form submission logic
      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-gray-900/50 to-black"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              Let's Connect
            </motion.h1>
            <p className="text-lg mb-6 text-gray-300">
              I'm passionate about transforming customer success through AI innovation. Whether you're looking to collaborate, need consulting, or want to discuss the future of AI in customer success, I'm here to help.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="https://linkedin.com/in/cameron-g-mccallum" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-400 text-2xl hover:text-blue-300 transition-colors" />
              </a>
              <a href="https://github.com/camerongmccallum24" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-300 text-2xl hover:text-gray-100 transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 text-2xl hover:text-blue-300 transition-colors" />
              </a>
            </div>
            <div className="space-y-4">
              <Button
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-all"
                onClick={() => window.location.href = '/landing'}
              >
                Join My Newsletter
              </Button>
              <p className="text-sm text-gray-400">
                Get weekly insights on AI in customer success, SaaS metrics, and industry trends.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <Card className="glassmorphism bg-gray-800/30 border border-gray-700">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-100">Contact Me</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Jane Doe" {...field} className="bg-gray-800/50 border-gray-700 text-gray-100" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., jane.doe@example.com" {...field} className="bg-gray-800/50 border-gray-700 text-gray-100" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Let me know how I can help..."
                              className="min-h-[150px] bg-gray-800/50 border-gray-700 text-gray-100"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
