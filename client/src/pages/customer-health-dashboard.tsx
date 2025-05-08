import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, ChevronUp, ChevronDown } from 'lucide-react';

const CustomerHealthDashboard = () => {
    const [timeframe, setTimeframe] = useState('month');
    const [segment, setSegment] = useState('all');
    const [activeTab, setActiveTab] = useState('overview');

    // Sample data - in a real implementation this would come from an API
    const healthScoreData = [
        { name: 'Jan', score: 72 },
        { name: 'Feb', score: 68 },
        { name: 'Mar', score: 70 },
        { name: 'Apr', score: 76 },
        { name: 'May', score: 82 },
        { name: 'Jun', score: 85 }
    ];

    const usageData = [
        { name: 'Jan', logins: 420, features: 12 },
        { name: 'Feb', logins: 390, features: 10 },
        { name: 'Mar', logins: 410, features: 11 },
        { name: 'Apr', logins: 490, features: 14 },
        { name: 'May', logins: 550, features: 16 },
        { name: 'Jun', logins: 610, features: 18 }
    ];

    const sentimentData = [
        { name: 'Positive', value: 60, color: '#22c55e' },
        { name: 'Neutral', value: 25, color: '#64748b' },
        { name: 'Negative', value: 15, color: '#ef4444' }
    ];

    const adoptionData = [
        { name: 'Core', users: 85 },
        { name: 'Advanced', users: 42 },
        { name: 'Admin', users: 23 },
        { name: 'Reporting', users: 65 },
        { name: 'API', users: 18 }
    ];

    const atRiskCustomers = [
        { id: 1, name: 'Acme Corp', score: 42, trend: 'down', days: 14 },
        { id: 2, name: 'Globex Inc', score: 38, trend: 'down', days: 7 },
        { id: 3, name: 'Initech', score: 45, trend: 'up', days: 21 }
    ];

    const highPotentialCustomers = [
        { id: 1, name: 'Stark Industries', score: 78, trend: 'up', opportunity: 'Expansion' },
        { id: 2, name: 'Wayne Enterprises', score: 82, trend: 'up', opportunity: 'Upsell' }
    ];

    // Calculate overall health score
    const currentScore = healthScoreData[healthScoreData.length - 1].score;
    const previousScore = healthScoreData[healthScoreData.length - 2].score;
    const scoreDifference = currentScore - previousScore;

    return (
        <div className="flex flex-col w-full h-full bg-background text-foreground p-4">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="text-2xl font-bold">Customer Health Dashboard</h1>
                    <p className="text-muted-foreground">Real-time insights and predictive analytics</p>
                </div>
                <div className="flex gap-4">
                    <div className="relative">
                        <select
                            value={timeframe}
                            onChange={(e) => setTimeframe(e.target.value)}
                            className="bg-card border border-border rounded-md px-3 py-2 appearance-none w-32 text-popover-foreground"
                            aria-label="Select timeframe for dashboard data"
                        >
                            <option value="week">Last Week</option>
                            <option value="month">Last Month</option>
                            <option value="quarter">Last Quarter</option>
                            <option value="year">Last Year</option>
                        </select>
                    </div>

                    <div className="relative">
                        <select
                            value={segment}
                            onChange={(e) => setSegment(e.target.value)}
                            className="bg-card border border-border rounded-md px-3 py-2 appearance-none w-40 text-popover-foreground"
                            aria-label="Select customer segment for dashboard data"
                        >
                            <option value="all">All Customers</option>
                            <option value="enterprise">Enterprise</option>
                            <option value="midmarket">Mid-Market</option>
                            <option value="smb">Small Business</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-card shadow rounded-lg p-4">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Overall Health Score</div>
                    <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold">{currentScore}</div>
                        <div className={`flex items-center ${scoreDifference >= 0 ? 'text-green-500' : 'text-destructive'}`}>
                            {scoreDifference >= 0 ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            <span className="font-medium ml-1">{Math.abs(scoreDifference)}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-card shadow rounded-lg p-4">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Active Users</div>
                    <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold">1,248</div>
                        <div className="flex items-center text-green-500">
                            <ChevronUp size={18} />
                            <span className="font-medium ml-1">12%</span>
                        </div>
                    </div>
                </div>

                <div className="bg-card shadow rounded-lg p-4">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Feature Adoption</div>
                    <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold">68%</div>
                        <div className="flex items-center text-green-500">
                            <ChevronUp size={18} />
                            <span className="font-medium ml-1">5%</span>
                        </div>
                    </div>
                </div>

                <div className="bg-card shadow rounded-lg p-4">
                    <div className="text-sm font-medium text-muted-foreground mb-2">Sentiment Score</div>
                    <div className="flex items-center justify-between">
                        <div className="text-3xl font-bold">4.2</div>
                        <div className="flex items-center text-destructive">
                            <ChevronDown size={18} />
                            <span className="font-medium ml-1">0.3</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-4 border-b border-border">
                <div className="flex space-x-4">
                    <button
                        className={`py-2 px-4 font-medium ${activeTab === 'overview' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
                        onClick={() => setActiveTab('overview')}
                    >
                        Overview
                    </button>
                    <button
                        className={`py-2 px-4 font-medium ${activeTab === 'usage' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
                        onClick={() => setActiveTab('usage')}
                    >
                        Usage Analytics
                    </button>
                    <button
                        className={`py-2 px-4 font-medium ${activeTab === 'sentiment' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
                        onClick={() => setActiveTab('sentiment')}
                    >
                        Sentiment Analysis
                    </button>
                    <button
                        className={`py-2 px-4 font-medium ${activeTab === 'risk' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}
                        onClick={() => setActiveTab('risk')}
                    >
                        Risk Management
                    </button>
                </div>
            </div>

            {/* Content based on active tab */}
            {activeTab === 'overview' && (
                <div className="space-y-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <div className="bg-card shadow rounded-lg p-4">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-medium">Health Score Trend</h3>
                                <span className="text-sm text-muted-foreground">6 month rolling average</span>
                            </div>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={healthScoreData}>
                                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                                        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                                        <YAxis domain={[0, 100]} stroke="hsl(var(--muted-foreground))" />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                                            labelStyle={{ color: 'hsl(var(--foreground))' }}
                                        />
                                        <Line type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4, fill: "hsl(var(--primary))" }} activeDot={{ r: 6 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="bg-card shadow rounded-lg p-4">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-medium">Feature Adoption</h3>
                                <span className="text-sm text-muted-foreground">By module</span>
                            </div>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={adoptionData}>
                                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                                        <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                                        <YAxis stroke="hsl(var(--muted-foreground))" />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                                            labelStyle={{ color: 'hsl(var(--foreground))' }}
                                        />
                                        <Bar dataKey="users" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="bg-card shadow rounded-lg p-4">
                            <h3 className="text-lg font-medium mb-4">At-Risk Customers</h3>
                            <div className="space-y-4">
                                {atRiskCustomers.map(customer => (
                                    <div key={customer.id} className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                                        <div>
                                            <div className="font-medium text-destructive-foreground">{customer.name}</div>
                                            <div className="text-sm text-destructive-foreground/80">{customer.days} days since login</div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="font-bold mr-2 text-destructive-foreground">{customer.score}</div>
                                            {customer.trend === 'up' ? (
                                                <ChevronUp className="text-green-500" size={16} />
                                            ) : (
                                                <ChevronDown className="text-destructive-foreground" size={16} />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-card shadow rounded-lg p-4">
                            <h3 className="text-lg font-medium mb-4">Customer Sentiment</h3>
                            <div className="h-48">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={sentimentData}
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={75}
                                            dataKey="value"
                                        >
                                            {sentimentData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                                            labelStyle={{ color: 'hsl(var(--foreground))' }}
                                        />
                                        <Legend wrapperStyle={{ color: 'hsl(var(--foreground))' }} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="bg-card shadow rounded-lg p-4">
                            <h3 className="text-lg font-medium mb-4">Growth Opportunities</h3>
                            <div className="space-y-4">
                                {highPotentialCustomers.map(customer => (
                                    <div key={customer.id} className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg">
                                        <div>
                                            <div className="font-medium text-green-700 dark:text-green-400">{customer.name}</div>
                                            <div className="text-sm text-green-600 dark:text-green-500">{customer.opportunity}</div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="font-bold mr-2 text-green-700 dark:text-green-400">{customer.score}</div>
                                            <ChevronUp className="text-green-500" size={16} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'usage' && (
                <div className="bg-card shadow rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-medium">Usage Analytics</h3>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
                            <select
                                aria-label="Filter features by type"
                                className="border border-border rounded-md bg-muted py-1 px-3 text-sm text-popover-foreground"
                            >
                                <option value="all">All Features</option>
                                <option value="core">Core Features</option>
                                <option value="advanced">Advanced Features</option>
                            </select>
                        </div>
                    </div>

                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={usageData}>
                                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                                <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" />
                                <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                                />
                                <Legend wrapperStyle={{ color: 'hsl(var(--foreground))' }} />
                                <Line yAxisId="left" type="monotone" dataKey="logins" stroke="hsl(var(--primary))" strokeWidth={2} name="User Logins" dot={{ r: 4, fill: "hsl(var(--primary))" }} activeDot={{ r: 6 }} />
                                <Line yAxisId="right" type="monotone" dataKey="features" stroke="hsl(var(--secondary))" strokeWidth={2} name="Feature Usage" dot={{ r: 4, fill: "hsl(var(--secondary))" }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            )}

            {activeTab === 'sentiment' && (
                <div className="space-y-4">
                    <div className="bg-card shadow rounded-lg p-6">
                        <h3 className="text-xl font-medium mb-4">Sentiment Distribution</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={sentimentData}
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={60}
                                            innerRadius={30}
                                            dataKey="value"
                                            labelLine={false}
                                            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                                                const RADIAN = Math.PI / 180;
                                                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                                                return (
                                                    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize="10px">
                                                        {`${(percent * 100).toFixed(0)}%`}
                                                    </text>
                                                );
                                            }}
                                        >
                                            {sentimentData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                                            labelStyle={{ color: 'hsl(var(--foreground))' }}
                                        />
                                        <Legend wrapperStyle={{ color: 'hsl(var(--foreground))' }} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <div>
                                <h4 className="text-lg font-medium mb-2">Analysis</h4>
                                <p className="text-muted-foreground">
                                    Customer sentiment is mainly positive, with 60% expressing satisfaction.
                                    However, there's a notable 15% negative sentiment that's increased from last month's 10%,
                                    requiring attention to address emerging concerns.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card shadow rounded-lg p-6">
                        <h3 className="text-xl font-medium mb-4">Common Feedback Themes</h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="font-medium">Ease of use</span>
                                    <span>42 mentions</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div className="bg-green-500 h-2 rounded-full progress-bar-ease-of-use"></div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="font-medium">Performance issues</span>
                                    <span>28 mentions</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div className="bg-red-500 h-2 rounded-full progress-bar-performance-issues"></div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="font-medium">Feature requests</span>
                                    <span>23 mentions</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div className="bg-blue-500 h-2 rounded-full progress-bar-feature-requests"></div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="font-medium">Integration needs</span>
                                    <span>16 mentions</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div className="bg-purple-500 h-2 rounded-full progress-bar-integration-needs"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'risk' && (
                <div className="bg-card shadow rounded-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-medium">Risk Management</h3>
                        <div className="flex items-center bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded-full text-sm">
                            <AlertCircle size={16} className="mr-1" />
                            3 customers need attention
                        </div>
                    </div>

                    <div className="space-y-6">
                        {atRiskCustomers.map(customer => (
                            <div key={customer.id} className="border border-border rounded-lg overflow-hidden">
                                <div className="flex items-center justify-between bg-muted/50 px-4 py-3 border-b border-border">
                                    <div className="font-medium text-lg">{customer.name}</div>
                                    <div className="flex items-center">
                                        <div className={`px-2 py-1 rounded-full text-sm ${customer.score < 40 ? 'bg-destructive/20 text-destructive-foreground' : 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400'}`}>
                                            Score: {customer.score}
                                        </div>
                                        <button className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-1 rounded-md text-sm">
                                            View Details
                                        </button>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="bg-muted/50 p-3 rounded-md">
                                            <div className="text-sm text-muted-foreground mb-1">Last Login</div>
                                            <div className="font-medium">{customer.days} days ago</div>
                                        </div>

                                        <div className="bg-muted/50 p-3 rounded-md">
                                            <div className="text-sm text-muted-foreground mb-1">Feature Usage</div>
                                            <div className="font-medium">3 of 12 features</div>
                                        </div>

                                        <div className="bg-muted/50 p-3 rounded-md">
                                            <div className="text-sm text-muted-foreground mb-1">Support Tickets</div>
                                            <div className="font-medium">4 open tickets</div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <div className="text-sm font-medium mb-2">Recommended Actions</div>
                                        <div className="flex flex-wrap gap-2">
                                            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Schedule check-in call</div>
                                            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Offer training session</div>
                                            <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Review product fit</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomerHealthDashboard;
