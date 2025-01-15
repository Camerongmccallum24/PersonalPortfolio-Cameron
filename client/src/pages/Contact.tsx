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

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-gray-50 to-gray-200"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              Let’s Connect
            </motion.h1>
            <p className="text-lg mb-6 text-gray-700">
              I’m excited to hear from you! Whether you have a question, need advice, or want to collaborate, feel free to reach out. Let’s create something amazing together.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="https://linkedin.com/in/cameron-g-mccallum" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-500" />
              </a>
              <a href="https://github.com/camerongmccallum24" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-800 text-2xl hover:text-gray-600" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-blue-400 text-2xl hover:text-blue-300" />
              </a>
            </div>
            <Button
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-md text-md"
              onClick={() => window.open("https://your-newsletter-link.com", "_blank")}
            >
              Join My Newsletter
            </Button>
            <p className="mt-4 text-md text-gray-500">
              Alternatively, you can reach me directly via email at <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">your-email@example.com</a>.
            </p>
          </div>

          {/* Right Column */}
          <div>
            <Card>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Jane Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., jane.doe@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Let me know how I can help..."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white">
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
