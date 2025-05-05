import React, { useState, useMemo, useCallback } from "react";
// Shadcn/ui components (simplified for web embedding)
// import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge"; // Added Badge
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"; // Added DropdownMenu
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"; // Added Popover
import { Separator } from "@/components/ui/separator"; // Added Separator
// Custom hook for toasts (assuming it exists)
// import { useToast } from "@/hooks/use-toast";  // Removed -  using a simplified version
// Icons from lucide-react
import {
  Loader2, Lightbulb, AlertCircle, RotateCcw, Info, CheckCircle, XCircle, ThumbsUp, ThumbsDown,
  ListPlus, ExternalLink, ChevronDown, Filter, SortAsc, SortDesc, Save, History, MessageSquareQuote, Activity, Users, Target, BarChart3
} from "lucide-react"; // Added many new icons
// Animation library
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

// --- Helper Functions & Constants ---
const IMPACT_LEVELS = { High: 3, Medium: 2, Low: 1 };
const EFFORT_LEVELS = { High: 1, Medium: 2, Low: 3 }; // Inverted for sorting (Low effort is better)
const STATUS_OPTIONS = ['ToDo', 'InProgress', 'Done', 'WontDo'];
const GOAL_TAGS_OPTIONS = ['Adoption', 'Retention', 'Expansion', 'Onboarding', 'Advocacy']; // Example tags

// --- Simplified Toast Hook ---
const useToast = () => {
  const toast = useCallback((options) => {
    let message = '';
    if (options.title && options.description) {
      message = `${options.title}: ${options.description}`;
    } else if (options.title) {
      message = options.title;
    } else if (options.description) {
        message = options.description;
    }
    // In a real web environment, you'd use a proper toast library (e.g., Sonner, react-toastify)
    // Here, we'll just use a basic alert for demonstration purposes.  This is NOT ideal for user experience.
    if (options.variant === 'destructive') {
        alert(`Error: ${message}`);
    } else {
        alert(message);
    }

    console.log('Toast:', options); // Keep console log for debugging
  }, []);
  return { toast };
};


// --- Main Component ---
const AdvancedDemo = () => {
  // --- State Variables ---
  // Inputs
  const [customerGoals, setCustomerGoals] = useState('');
  const [customerChallenges, setCustomerChallenges] = useState('');
  const [customerIndustry, setCustomerIndustry] = useState('');
  const [healthScoreStart, setHealthScoreStart] = useState(''); // Health Score Trend Start
  const [healthScoreEnd, setHealthScoreEnd] = useState(''); // Health Score Trend End
  const [healthScoreTimeframe, setHealthScoreTimeframe] = useState(''); // e.g., '3 months'
  const [sentimentText, setSentimentText] = useState(''); // Sentiment Analysis Input
  const [loginsPerWeek, setLoginsPerWeek] = useState(''); // Product Usage Metric
  const [featureAdoptionRate, setFeatureAdoptionRate] = useState(''); // Product Usage Metric
  const [competitorMentions, setCompetitorMentions] = useState(''); // Competitor Mentions

  // Recommendations & Status
  const [recommendations, setRecommendations] = useState([]); // Stores array of recommendation objects
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Filtering & Sorting
  const [filterStatus, setFilterStatus] = useState('All'); // 'All', 'ToDo', 'InProgress', 'Done', 'WontDo'
  const [sortBy, setSortBy] = useState('impact'); // 'impact', 'effort', 'default'
  const [sortDirection, setSortDirection] = useState('desc'); // 'asc', 'desc'

  // Saved Scenarios (Local Simulation)
  const [savedScenarios, setSavedScenarios] = useState([]);

  // Other UI State
  const { toast } = useToast();

  // --- Derived State (Filtering & Sorting) ---
  const filteredAndSortedRecommendations = useMemo(() => {
    let result = [...recommendations];

    // Filtering
    if (filterStatus !== 'All') {
      result = result.filter(rec => rec.status === filterStatus);
    }

    // Sorting
    if (sortBy !== 'default') {
      result.sort((a, b) => {
        let valA, valB;
        if (sortBy === 'impact') {
          valA = IMPACT_LEVELS[a.impact] || 0;
          valB = IMPACT_LEVELS[b.impact] || 0;
        } else { // effort
          valA = EFFORT_LEVELS[a.effort] || 0;
          valB = EFFORT_LEVELS[b.effort] || 0;
        }
        return sortDirection === 'desc' ? valB - valA : valA - valB;
      });
    }

    return result;
  }, [recommendations, filterStatus, sortBy, sortDirection]);

  // --- Event Handlers ---
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setError(null); // Clear error on input change

        // Use a switch for better organization
        switch (name) {
            case "customerGoals":
                setCustomerGoals(value);
                break;
            case "customerChallenges":
                setCustomerChallenges(value);
                break;
            case "customerIndustry":
                setCustomerIndustry(value);
                break;
            case "healthScoreStart":
                setHealthScoreStart(value);
                break;
            case "healthScoreEnd":
                setHealthScoreEnd(value);
                break;
            case "healthScoreTimeframe":
                setHealthScoreTimeframe(value);
                break;
            case "sentimentText":
                setSentimentText(value);
                break;
            case "loginsPerWeek":
                setLoginsPerWeek(value);
                break;
            case "featureAdoptionRate":
                setFeatureAdoptionRate(value);
                break;
            case "competitorMentions":
                setCompetitorMentions(value);
                break;
            default:
                break; // Or handle unexpected names
        }
    };

  // Clear Form Handler
  const handleClear = useCallback(() => {
    setCustomerGoals('');
    setCustomerChallenges('');
    setCustomerIndustry('');
    setHealthScoreStart('');
    setHealthScoreEnd('');
    setHealthScoreTimeframe('');
    setSentimentText('');
    setLoginsPerWeek('');
    setFeatureAdoptionRate('');
    setCompetitorMentions('');
    setRecommendations([]);
    setError(null);
    setIsLoading(false);
    setFilterStatus('All');
    setSortBy('impact');
    setSortDirection('desc');
    toast({ title: "Form Cleared", description: "All inputs and results have been reset." });
  }, [toast]); // Dependencies for useCallback

  // Form Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setRecommendations([]);
    setError(null);

    try {
      const payload = {
        goals: customerGoals,
        challenges: customerChallenges,
        industry: customerIndustry,
        healthScoreTrend: { start: healthScoreStart, end: healthScoreEnd, timeframe: healthScoreTimeframe },
        sentiment: sentimentText,
        usage: { logins: loginsPerWeek, adoption: featureAdoptionRate },
        competitors: competitorMentions,
      };
      console.log("Sending payload:", payload);

      // --- Simulate API Call & Rich Response ---
      await new Promise(resolve => setTimeout(resolve, 2500)); // Longer delay for more complex simulation

      // Example: Generate mock recommendations based on inputs
      const mockRecommendations = [
        {
          id: uuidv4(),
          text: `Develop a targeted ${payload.industry} playbook addressing challenges like '${payload.challenges.substring(0, 20)}...' to improve adoption.`,
          impact: 'High', effort: 'Medium', status: 'ToDo', feedback: null,
          goalTags: ['Adoption', 'Onboarding'],
          linkedResources: [{ title: 'Industry Playbook Template', url: '#' }, { title: 'Adoption Best Practices', url: '#' }]
        },
        {
          id: uuidv4(),
          text: `Schedule QBR focused on goals '${payload.goals.substring(0, 20)}...' and reversing health trend (${payload.healthScoreTrend.start} -> ${payload.healthScoreTrend.end || '?'}).`,
          impact: 'High', effort: 'Low', status: 'ToDo', feedback: null,
          goalTags: ['Retention', 'Expansion'],
          linkedResources: [{ title: 'QBR Preparation Guide', url: '#' }]
        },
        {
          id: uuidv4(),
          text: `Analyze sentiment ('${payload.sentiment.substring(0, 15)}...') and usage (${payload.usage.logins} logins/wk) to identify key user training needs.`,
          impact: 'Medium', effort: 'Medium', status: 'ToDo', feedback: null,
          goalTags: ['Adoption', 'Retention'],
          linkedResources: [{ title: 'User Training Resources', url: '#' }, { title: 'Sentiment Analysis Tools', url: '#' }]
        },
        {
          id: uuidv4(),
          text: `Create competitive battlecard addressing mentions of '${payload.competitors || 'competitors'}'.`,
          impact: 'Medium', effort: 'High', status: 'ToDo', feedback: null,
          goalTags: ['Retention'],
          linkedResources: [{ title: 'Competitive Intelligence Sheet', url: '#' }]
        },
        {
          id: uuidv4(),
          text: `Launch advocacy program for users with high feature adoption (${payload.usage.adoption}%+).`,
          impact: 'Low', effort: 'High', status: 'ToDo', feedback: null,
          goalTags: ['Advocacy', 'Expansion'],
          linkedResources: [{ title: 'Customer Advocacy Guide', url: '#' }]
        }
      ].filter(rec => rec.text.length > 50); // Basic filter to ensure some content

      setRecommendations(mockRecommendations);
      // --- End Simulation ---

      toast({ title: "Success", description: "Generated advanced recommendations." });

    } catch (err: any) {
      console.error("API Call Failed:", err);
      const errorMsg = err.message || "Failed to fetch recommendations. Please try again.";
      setError(errorMsg);
      toast({ title: "Error", description: errorMsg, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  // --- Recommendation Action Handlers ---
  const handleStatusChange = useCallback((id: string, newStatus: string) => {
    setRecommendations(prev =>
      prev.map(rec => rec.id === id ? { ...rec, status: newStatus } : rec)
    );
    toast({ title: "Status Updated", description: `Recommendation status changed to ${newStatus}.` });
  }, [toast]);

  const handleFeedback = useCallback((id: string, feedbackType: 'positive' | 'negative' | null) => {
    setRecommendations(prev =>
      prev.map(rec => rec.id === id ? { ...rec, feedback: rec.feedback === feedbackType ? null : feedbackType } : rec)
    );
  }, []);

  const handleAddTask = useCallback((recommendationText: string) => {
    // Simulate adding to a task list (e.g., log to console, show toast)
    console.log("Adding task:", recommendationText);
    toast({ title: "Task Added (Simulated)", description: `"${recommendationText.substring(0, 30)}..." added to task list.` });
  }, [toast]);

    // --- Scenario Handling ---
    const handleSaveScenario = useCallback(() => {
        const currentInputs = {
            customerGoals,
            customerChallenges,
            customerIndustry,
            healthScoreStart,
            healthScoreEnd,
            healthScoreTimeframe,
            sentimentText,
            loginsPerWeek,
            featureAdoptionRate,
            competitorMentions,
        };
        const newScenario = {
            id: uuidv4(),
            name: `Scenario ${savedScenarios.length + 1} (${new Date().toLocaleTimeString()})`,
            inputs: currentInputs,
            recommendations: recommendations, // Save the state of recommendations at that time
        };
        setSavedScenarios((prev) => [...prev, newScenario]);
        toast({ title: "Scenario Saved", description: `Saved "${newScenario.name}".` });
    }, [
        recommendations,
        customerGoals,
        customerChallenges,
        customerIndustry,
        healthScoreStart,
        healthScoreEnd,
        healthScoreTimeframe,
        sentimentText,
        loginsPerWeek,
        featureAdoptionRate,
        competitorMentions,
        savedScenarios.length,
        toast,
    ]);

    const handleLoadScenario = useCallback(
        (scenarioId: string) => {
            const scenarioToLoad = savedScenarios.find((s) => s.id === scenarioId);
            if (scenarioToLoad) {
                // Restore inputs
                setCustomerGoals(scenarioToLoad.inputs.customerGoals || '');
                setCustomerChallenges(scenarioToLoad.inputs.customerChallenges || '');
                setCustomerIndustry(scenarioToLoad.inputs.customerIndustry || '');
                setHealthScoreStart(scenarioToLoad.inputs.healthScoreStart || '');
                setHealthScoreEnd(scenarioToLoad.inputs.healthScoreEnd || '');
                setHealthScoreTimeframe(scenarioToLoad.inputs.healthScoreTimeframe || '');
                setSentimentText(scenarioToLoad.inputs.sentimentText || '');
                setLoginsPerWeek(scenarioToLoad.inputs.loginsPerWeek || '');
                setFeatureAdoptionRate(scenarioToLoad.inputs.featureAdoptionRate || '');
                setCompetitorMentions(scenarioToLoad.inputs.competitorMentions || '');
                // Restore recommendations
                setRecommendations(scenarioToLoad.recommendations || []);
                setError(null);
                setIsLoading(false);
                toast({ title: "Scenario Loaded", description: `Loaded "${scenarioToLoad.name}".` });
            }
        },
        [savedScenarios, toast]
    );


  // --- Summary Generation ---
  const recommendationSummary = useMemo(() => {
    if (recommendations.length === 0) return null;
    const highImpactCount = recommendations.filter(r => r.impact === 'High').length;
    const lowEffortCount = recommendations.filter(r => r.effort === 'Low').length;
    const primaryGoals = [...new Set(recommendations.flatMap(r => r.goalTags))].slice(0, 2).join(', ');

    return `Generated ${recommendations.length} recommendations, including ${highImpactCount} high-impact and ${lowEffortCount} low-effort options. Key focus areas appear to be ${primaryGoals || 'varied'}.`;
  }, [recommendations]);


  // --- Render Function ---
  return (
    // Removed TooltipProvider -  tooltips may not work well in embedded contexts.  Better to use standard web patterns.
    <div className="font-sans bg-gray-900 text-white">
      <div className="p-4 sm:p-6">

        {/* Header */}
        <div className="text-center space-y-3 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            AI-Powered Solutions for Customer Success
          </h1>
          <p className="text-md sm:text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage AI with comprehensive context for highly relevant customer success strategies.
          </p>
        </div>

        {/* Input Form Card */}
        <div className="mb-6">
          <div className="border border-gray-800 shadow-lg backdrop-blur-md bg-gray-900/90 rounded-xl overflow-hidden">
            <div className="bg-gray-800/50 p-4 sm:p-6 border-b border-gray-700">
              <h2 className="text-xl sm:text-2xl font-semibold text-white flex items-center gap-2">
                <Info className="h-5 w-5 text-blue-400" /> Customer Context Input
              </h2>
              <p className="text-sm text-gray-400">
                Provide as much detail as possible for better recommendations.
              </p>
            </div>
            <div className="p-4 sm:p-6">
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Row 1: Core Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Industry */}
                  <div className="space-y-1.5">
                    <label htmlFor="customerIndustry" className="text-xs font-medium text-gray-300 flex items-center gap-1">
                      <Users className="h-3.5 w-3.5 text-blue-400" /> Industry
                    </label>
                    <Input id="customerIndustry" name="customerIndustry" value={customerIndustry} onChange={handleInputChange} placeholder="e.g., SaaS, Finance" className="text-sm rounded-lg bg-gray-800 border-gray-700 text-white" />
                  </div>
                  {/* Goals */}
                  <div className="space-y-1.5 md:col-span-2">
                    <label htmlFor="customerGoals" className="text-xs font-medium text-gray-300 flex items-center gap-1">
                      <Target className="h-3.5 w-3.5 text-blue-400" /> Primary Customer Goals <span className="text-red-500">*</span>
                    </label>
                    <Input id="customerGoals" name="customerGoals" value={customerGoals} onChange={handleInputChange} placeholder="e.g., Increase user adoption by 20%" required className="text-sm rounded-lg bg-gray-800 border-gray-700 text-white" />
                  </div>
                </div>

                {/* Row 2: Challenges & Health */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Challenges */}
                  <div className="space-y-1.5 md:col-span-2">
                    <label htmlFor="customerChallenges" className="text-xs font-medium text-gray-300 flex items-center gap-1">
                      <XCircle className="h-3.5 w-3.5 text-red-400" /> Current Challenges <span className="text-red-500">*</span>
                    </label>
                    <Textarea id="customerChallenges" name="customerChallenges" value={customerChallenges} onChange={handleInputChange} placeholder="e.g., Low engagement in Q2, onboarding friction" required className="text-sm min-h-[60px] rounded-lg bg-gray-800 border-gray-700 text-white" />
                  </div>
                  {/* Health Score Trend */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-300 flex items-center gap-1">
                      <Activity className="h-3.5 w-3.5 text-blue-400" /> Health Score Trend
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <Input name="healthScoreStart" type="number" min="0" max="100" value={healthScoreStart} onChange={handleInputChange} placeholder="Start" className="text-sm rounded-lg bg-gray-800 border-gray-700 text-white" />
                      <Input name="healthScoreEnd" type="number" min="0" max="100" value={healthScoreEnd} onChange={handleInputChange} placeholder="End" className="text-sm rounded-lg bg-gray-800 border-gray-700 text-white" />
                      <Input name="healthScoreTimeframe" value={healthScoreTimeframe} onChange={handleInputChange} placeholder="Time" className="text-sm rounded-lg bg-gray-800 border-gray-700 text-white" />
                    </div>
                  </div>
                </div>

                {/* Row 3: Usage & Sentiment */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Usage Metrics */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-300 flex items-center gap-1">
                      <BarChart3 className="h-3.5 w-3.5 text-blue-400" /> Usage Metrics
                    </label>
                    <div className="flex gap-2">
                      <Input name="loginsPerWeek" type="number" min="0" value={loginsPerWeek} onChange={handleInputChange} placeholder="Logins/wk" className="text-sm rounded-lg bg-gray-800 border-gray-700 text-white" />
                      <Input name="featureAdoptionRate" type="number" min="0" max="100" value={featureAdoptionRate} onChange={handleInputChange} placeholder="Adopt %" className="text-sm rounded-lg bg-gray-800 border-gray-700 text-white" />
                    </div>
                  </div>
                  {/* Sentiment */}
                  <div className="space-y-1.5 md:col-span-2">
                    <label htmlFor="sentimentText" className="text-xs font-medium text-gray-300 flex items-center gap-1">
                      <MessageSquareQuote className="h-3.5 w-3.5 text-blue-400" /> Recent Sentiment/Feedback
                    </label>
                    <Textarea id="sentimentText" name="sentimentText" value={sentimentText} onChange={handleInputChange} placeholder="Paste snippets of recent customer feedback or describe sentiment..." className="text-sm min-h-[60px] rounded-lg bg-gray-800 border-gray-700 text-white" />
                  </div>
                </div>

                {/* Row 4: Competitors */}
                <div className="space-y-1.5">
                  <label htmlFor="competitorMentions" className="text-xs font-medium text-gray-300 flex items-center gap-1">
                    Competitor Mentions
                  </label>
                  <Input id="competitorMentions" name="competitorMentions" value={competitorMentions} onChange={handleInputChange} placeholder="e.g., Mentioned evaluating CompetitorX" className="text-sm rounded-lg bg-gray-800 border-gray-700 text-white" />
                </div>

                {/* Error Display Area */}
                {error && (
                  <div className="pt-1">
                    <div className="bg-red-900/30 border-red-700/50 rounded-lg p-3 text-sm">
                      <AlertCircle className="h-4 w-4 text-red-400 inline-block mr-2" />
                      <strong className="font-semibold text-red-300">Error: </strong>
                      <span className="text-red-300">{error}</span>
                    </div>
                  </div>
                )}

              </form>
            </div>
            <div className="bg-gray-800/50 p-4 sm:p-6 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-3">
              {/* Saved Scenarios Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-gray-800 hover:bg-gray-700 text-white border-gray-700" disabled={savedScenarios.length === 0}>
                    <History className="mr-1.5 h-4 w-4 text-blue-400" /> Load Scenario <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-gray-800 border-gray-700 text-white">
                  {savedScenarios.length === 0 ? (
                    <DropdownMenuItem className="text-gray-400 hover:bg-gray-700/50">No saved scenarios</DropdownMenuItem>) : (
                    savedScenarios.map(scenario => (
                      <DropdownMenuItem key={scenario.id} onClick={() => handleLoadScenario(scenario.id)} className="hover:bg-gray-700/50">
                        {scenario.name}
                      </DropdownMenuItem>
                    ))
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Button type="button" variant="outline" size="sm" className="text-xs sm:text-sm bg-gray-800 hover:bg-gray-700 text-white border-gray-700" onClick={handleClear} disabled={isLoading}>
                  <RotateCcw className="mr-1.5 h-4 w-4 text-blue-400" /> Clear All
                </Button>
                <Button type="submit" size="sm" className="text-xs sm:text-sm bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white disabled:opacity-70" disabled={isLoading} onClick={handleSubmit}>
                  {isLoading ? <><Loader2 className="mr-1.5 h-4 w-4 animate-spin text-white" /> Analyzing...</> : 'Generate Recommendations'}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Recommendations Section */}
        { (isLoading || recommendations.length > 0 || error) && ( // Show section if loading, has results, or has an error related to results
          <div >
            <div className="border border-gray-800 shadow-lg backdrop-blur-md bg-gray-900/90 rounded-xl overflow-hidden">
              <div className="bg-gray-800/50 p-4 sm:p-6 border-b border-gray-700">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="h-6 w-6 text-blue-400" />
                    <h2 className="text-xl sm:text-2xl font-semibold text-white">
                      Strategic Recommendations
                    </h2>
                  </div>
                  {/* Filtering and Sorting Controls */}
                  {!isLoading && recommendations.length > 0 && (
                    <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                      {/* Filter by Status */}
                      <Select value={filterStatus} onValueChange={setFilterStatus}>
                        <SelectTrigger className="w-full sm:w-[140px] text-xs h-8 rounded-md bg-gray-800 border-gray-700 text-white">
                          <Filter className="h-3.5 w-3.5 mr-1 text-gray-400" />
                          <SelectValue placeholder="Filter Status" className="text-gray-400" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700 text-white">
                          <SelectItem value="All" className="hover:bg-gray-700/50">All Statuses</SelectItem>
                          {STATUS_OPTIONS.map(status => (
                            <SelectItem key={status} value={status} className="hover:bg-gray-700/50">{status}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {/* Sort By */}
                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-full sm:w-[120px] text-xs h-8 rounded-md bg-gray-800 border-gray-700 text-white">
                          {sortDirection === 'desc' ? <SortDesc className="h-3.5 w-3.5 mr-1 text-gray-400" /> : <SortAsc className="h-3.5 w-3.5 mr-1 text-gray-400" />}
                          <SelectValue placeholder="Sort By" className="text-gray-400" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700 text-white">
                          <SelectItem value="impact" className="hover:bg-gray-700/50">Sort: Impact</SelectItem>
                          <SelectItem value="effort" className="hover:bg-gray-700/50">Sort: Effort</SelectItem>
                          <SelectItem value="default" className="hover:bg-gray-700/50">Sort: Default</SelectItem>
                        </SelectContent>
                      </Select>
                      {/* Sort Direction Toggle */}
                      {sortBy !== 'default' && (
                        <Button variant="outline" size="icon" className="h-8 w-8 bg-gray-800 hover:bg-gray-700 text-white border-gray-700" onClick={() => setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')}>
                          {sortDirection === 'desc' ? <SortDesc className="h-4 w-4 text-gray-400" /> : <SortAsc className="h-4 w-4 text-gray-400" />}
                        </Button>
                      )}
                    </div>
                  )}
                </div>
                {/* Summary */}
                {!isLoading && recommendationSummary && (
                  <p  className="text-sm text-gray-400 mt-2 pt-2 border-t border-gray-700">
                    {recommendationSummary}
                  </p>
                )}
              </div>
              <div className="p-4 sm:p-6 space-y-4">
                {isLoading ? (
                  // Skeleton Loader
                  <>
                    {[...Array(3)].map((_, index) => (
                      <div key={index} className="flex gap-4 items-start p-4 rounded-xl bg-gray-800 animate-pulse">
                        <Skeleton className="h-8 w-8 rounded-full bg-gray-700 flex-shrink-0" />
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-4 w-full bg-gray-700" />
                          <Skeleton className="h-4 w-3/4 bg-gray-700" />
                          <div className="flex gap-2 pt-1">
                            <Skeleton className="h-5 w-16 rounded-full bg-gray-700" />
                            <Skeleton className="h-5 w-16 rounded-full bg-gray-700" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : filteredAndSortedRecommendations.length > 0 ? (
                  // Recommendations List
                  filteredAndSortedRecommendations.map((rec, index) => (
                    <motion.div
                      key={rec.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border border-gray-700 rounded-xl p-4 bg-gray-800/50 shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Main Content */}
                        <div className="flex-1 space-y-2">
                          <p className="text-sm text-gray-200">{rec.text}</p>
                          {/* Tags (Impact, Effort, Goals) */}
                          <div className="flex flex-wrap gap-1.5 items-center">
                            <Badge variant={rec.impact === 'High' ? 'destructive' : rec.impact === 'Medium' ? 'secondary' : 'outline'} className="text-xs">Impact: {rec.impact}</Badge>
                            <Badge variant={rec.effort === 'Low' ? 'success' : rec.effort === 'Medium' ? 'secondary' : 'outline'} className="text-xs">Effort: {rec.effort}</Badge>
                            {rec.goalTags?.map(tag => <Badge key={tag} variant="outline" className="text-xs bg-blue-900/30 border-blue-700 text-blue-300">{tag}</Badge>)}
                          </div>
                        </div>
                        {/* Actions Column */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-start sm:items-end">
                          <Button variant="outline" size="icon" className="h-8 w-8 text-xs bg-gray-800 hover:bg-gray-700 text-white border-gray-700" onClick={() => handleStatusChange(rec.id, 'ToDo')} disabled={rec.status === 'ToDo'}>
                            <ListPlus className="h-4 w-4 text-blue-400" />
                          </Button>
                          <Button variant="outline" size="icon" className="h-8 w-8 text-xs bg-gray-800 hover:bg-gray-700 text-white border-gray-700" onClick={() => handleStatusChange(rec.id, 'InProgress')} disabled={rec.status === 'InProgress'}>
                            <Loader2 className="h-4 w-4 animate-spin text-blue-400" />
                          </Button>
                          <Button  variant="outline" size="icon" className="h-8 w-8 text-xs bg-gray-800 hover:bg-gray-700 text-white border-gray-700" onClick={() => handleStatusChange(rec.id, 'Done')} disabled={rec.status === 'Done'}>
                            <CheckCircle className="h-4 w-4 text-green-400" />
                          </Button>
                           <Button variant="outline" size="icon" className="h-8 w-8 text-xs bg-gray-800 hover:bg-gray-700 text-white border-gray-700" onClick={() => handleStatusChange(rec.id, 'WontDo')} disabled={rec.status === 'WontDo'}>
                            <XCircle className="h-4 w-4 text-gray-400" />
                          </Button>
                          <Separator orientation="vertical" className="h-6 bg-gray-700" />
                          <Button variant="outline" size="icon" className="h-8 w-8 text-xs bg-gray-800 hover:bg-gray-700 text-white border-gray-700" onClick={() => handleFeedback(rec.id, 'positive')}>
                            <ThumbsUp className={`h-4 w-4 ${rec.feedback === 'positive' ? 'text-green-400' : 'text-gray-400'}`} />
                          </Button>
                          <Button variant="outline" size="icon" className="h-8 w-8 text-xs bg-gray-800 hover:bg-gray-700 text-white border-gray-700" onClick={() => handleFeedback(rec.id, 'negative')}>
                            <ThumbsDown className={`h-4 w-4 ${rec.feedback === 'negative' ? 'text-red-400' : 'text-gray-400'}`} />
                          </Button>
                          <Separator orientation="vertical" className="h-6 bg-gray-700" />
                          <Button variant="outline" size="icon" className="h-8 w-8 text-xs bg-gray-800 hover:bg-gray-700 text-white border-gray-700" onClick={() => handleAddTask(rec.text)}>
                            <ListPlus className="h-4 w-4 text-blue-400" />
                          </Button>
                          {rec.linkedResources && rec.linkedResources.length > 0 && (
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="outline" size="icon" className="h-8 w-8 text-xs bg-gray-800 hover:bg-gray-700 text-white border-gray-700">
                                  <ExternalLink className="h-4 w-4 text-blue-400" />
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-4 space-y-2 bg-gray-800 border-gray-700 text-white">
                                <h4 className="font-semibold text-sm text-white">Related Resources</h4>
                                {rec.linkedResources.map((link, i) => (
                                  <div key={i} className="text-sm">
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline flex items-center gap-1">
                                      {link.title} <ExternalLink className="h-3 w-3 text-blue-400" />
                                    </a>
                                  </div>
                                ))}
                              </PopoverContent>
                            </Popover>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="bg-gray-900/30 border-gray-700 rounded-lg p-3 text-sm">
                    <Lightbulb className="h-4 w-4 text-blue-400 inline-block mr-2" />
                    <strong className="font-semibold text-white">No Recommendations</strong>
                    <p className="text-gray-400">
                      {error ? "Failed to generate recommendations." : "No recommendations generated. Please provide customer context to get started."}
                    </p>
                  </div>
                )}
              </div>
              <div className="bg-gray-800/50 p-4 sm:p-6 border-t border-gray-700 flex justify-end">
                <Button variant="outline" size="sm" className="text-xs sm:text-sm bg-gray-800 hover:bg-gray-700 text-white border-gray-700" onClick={handleSaveScenario} disabled={recommendations.length === 0}>
                  <Save className="mr-1.5 h-4 w-4 text-blue-400" /> Save Scenario
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedDemo;
