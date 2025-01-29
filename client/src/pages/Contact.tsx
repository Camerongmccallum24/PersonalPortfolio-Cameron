
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      console.log(data);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-900/50 to-black pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
        >
          Get in Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert max-w-none"
            >
              <p className="text-lg text-gray-300 mb-6">
                Let's collaborate on transforming customer success through AI innovation. Whether you're interested in consulting, partnerships, or just want to connect, I'm here to help.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaMapMarkerAlt className="text-primary" />
                  <span>Manchester, United Kingdom</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <FaCalendarAlt className="text-primary" />
                  <span>Available for consulting</span>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="relative group overflow-hidden glassmorphism border-gray-800 hover:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5" />
              <CardContent className="relative z-10 p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} className="bg-gray-800/50 border-gray-700 text-gray-100" />
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
                            <Input placeholder="your.email@example.com" {...field} className="bg-gray-800/50 border-gray-700 text-gray-100" />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="What's this about?" {...field} className="bg-gray-800/50 border-gray-700 text-gray-100" />
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
                              placeholder="Your message..."
                              className="min-h-[150px] bg-gray-800/50 border-gray-700 text-gray-100"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary via-purple-500 to-blue-500 text-white hover:opacity-90 transition-all"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-purple-500/50 to-blue-500/50 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
