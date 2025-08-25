import React, { useState } from 'react';
import { TrendingUp, Calendar, BarChart3, Target, Activity, ChevronDown, ArrowUp, ArrowDown } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

interface PortfolioStock {
  symbol: string;
  company: string;
  weight: number;
  logo?: string;
}

interface QuarterData {
  quarter: string;
  period: string;
  portfolioReturn: number;
  niftyReturn: number;
  stocks: PortfolioStock[];
}

const MomentumPortfolio = () => {
  const [selectedQuarter, setSelectedQuarter] = useState('Q2-2024');
  const [showQuarterDropdown, setShowQuarterDropdown] = useState(false);

  // Historical performance data extracted from PDF
  const performanceData = [
    { quarter: 'Q1-2023', portfolioReturn: 8.2, niftyReturn: 5.1 },
    { quarter: 'Q2-2023', portfolioReturn: 12.4, niftyReturn: 7.8 },
    { quarter: 'Q3-2023', portfolioReturn: 15.7, niftyReturn: 9.2 },
    { quarter: 'Q4-2023', portfolioReturn: 18.9, niftyReturn: 11.5 },
    { quarter: 'Q1-2024', portfolioReturn: 22.3, niftyReturn: 13.7 },
    { quarter: 'Q2-2024', portfolioReturn: 25.8, niftyReturn: 15.9 },
  ];

  // Quarterly portfolio data extracted from PDF
  const quarterlyData: { [key: string]: QuarterData } = {
    'Q1-2023': {
      quarter: 'Q1-2023',
      period: 'Jan - Mar 2023',
      portfolioReturn: 8.2,
      niftyReturn: 5.1,
      stocks: [
        { symbol: 'RELIANCE', company: 'Reliance Industries Ltd.', weight: 12.5, logo: 'https://logo.clearbit.com/ril.com' },
        { symbol: 'TCS', company: 'Tata Consultancy Services Ltd.', weight: 11.8, logo: 'https://logo.clearbit.com/tcs.com' },
        { symbol: 'HDFCBANK', company: 'HDFC Bank Ltd.', weight: 10.2, logo: 'https://logo.clearbit.com/hdfcbank.com' },
        { symbol: 'INFY', company: 'Infosys Ltd.', weight: 9.7, logo: 'https://logo.clearbit.com/infosys.com' },
        { symbol: 'ICICIBANK', company: 'ICICI Bank Ltd.', weight: 8.9, logo: 'https://logo.clearbit.com/icicibank.com' },
        { symbol: 'HINDUNILVR', company: 'Hindustan Unilever Ltd.', weight: 8.3, logo: 'https://logo.clearbit.com/hul.co.in' },
        { symbol: 'ITC', company: 'ITC Ltd.', weight: 7.8, logo: 'https://logo.clearbit.com/itcportal.com' },
        { symbol: 'SBIN', company: 'State Bank of India', weight: 7.2, logo: 'https://logo.clearbit.com/sbi.co.in' },
        { symbol: 'BHARTIARTL', company: 'Bharti Airtel Ltd.', weight: 6.9, logo: 'https://logo.clearbit.com/airtel.in' },
        { symbol: 'ASIANPAINT', company: 'Asian Paints Ltd.', weight: 6.4, logo: 'https://logo.clearbit.com/asianpaints.com' },
        { symbol: 'MARUTI', company: 'Maruti Suzuki India Ltd.', weight: 5.8, logo: 'https://logo.clearbit.com/marutisuzuki.com' },
        { symbol: 'KOTAKBANK', company: 'Kotak Mahindra Bank Ltd.', weight: 4.5, logo: 'https://logo.clearbit.com/kotak.com' }
      ]
    },
    'Q2-2023': {
      quarter: 'Q2-2023',
      period: 'Apr - Jun 2023',
      portfolioReturn: 12.4,
      niftyReturn: 7.8,
      stocks: [
        { symbol: 'TCS', company: 'Tata Consultancy Services Ltd.', weight: 13.2, logo: 'https://logo.clearbit.com/tcs.com' },
        { symbol: 'RELIANCE', company: 'Reliance Industries Ltd.', weight: 11.9, logo: 'https://logo.clearbit.com/ril.com' },
        { symbol: 'HDFCBANK', company: 'HDFC Bank Ltd.', weight: 10.8, logo: 'https://logo.clearbit.com/hdfcbank.com' },
        { symbol: 'INFY', company: 'Infosys Ltd.', weight: 9.5, logo: 'https://logo.clearbit.com/infosys.com' },
        { symbol: 'ICICIBANK', company: 'ICICI Bank Ltd.', weight: 8.7, logo: 'https://logo.clearbit.com/icicibank.com' },
        { symbol: 'BHARTIARTL', company: 'Bharti Airtel Ltd.', weight: 8.1, logo: 'https://logo.clearbit.com/airtel.in' },
        { symbol: 'HINDUNILVR', company: 'Hindustan Unilever Ltd.', weight: 7.6, logo: 'https://logo.clearbit.com/hul.co.in' },
        { symbol: 'TITAN', company: 'Titan Company Ltd.', weight: 7.2, logo: 'https://logo.clearbit.com/titan.co.in' },
        { symbol: 'ITC', company: 'ITC Ltd.', weight: 6.8, logo: 'https://logo.clearbit.com/itcportal.com' },
        { symbol: 'SBIN', company: 'State Bank of India', weight: 6.3, logo: 'https://logo.clearbit.com/sbi.co.in' },
        { symbol: 'ASIANPAINT', company: 'Asian Paints Ltd.', weight: 5.9, logo: 'https://logo.clearbit.com/asianpaints.com' },
        { symbol: 'MARUTI', company: 'Maruti Suzuki India Ltd.', weight: 4.0, logo: 'https://logo.clearbit.com/marutisuzuki.com' }
      ]
    },
    'Q3-2023': {
      quarter: 'Q3-2023',
      period: 'Jul - Sep 2023',
      portfolioReturn: 15.7,
      niftyReturn: 9.2,
      stocks: [
        { symbol: 'TCS', company: 'Tata Consultancy Services Ltd.', weight: 14.1, logo: 'https://logo.clearbit.com/tcs.com' },
        { symbol: 'RELIANCE', company: 'Reliance Industries Ltd.', weight: 12.3, logo: 'https://logo.clearbit.com/ril.com' },
        { symbol: 'HDFCBANK', company: 'HDFC Bank Ltd.', weight: 11.0, logo: 'https://logo.clearbit.com/hdfcbank.com' },
        { symbol: 'BHARTIARTL', company: 'Bharti Airtel Ltd.', weight: 9.8, logo: 'https://logo.clearbit.com/airtel.in' },
        { symbol: 'INFY', company: 'Infosys Ltd.', weight: 9.2, logo: 'https://logo.clearbit.com/infosys.com' },
        { symbol: 'ICICIBANK', company: 'ICICI Bank Ltd.', weight: 8.5, logo: 'https://logo.clearbit.com/icicibank.com' },
        { symbol: 'TITAN', company: 'Titan Company Ltd.', weight: 8.0, logo: 'https://logo.clearbit.com/titan.co.in' },
        { symbol: 'HINDUNILVR', company: 'Hindustan Unilever Ltd.', weight: 7.4, logo: 'https://logo.clearbit.com/hul.co.in' },
        { symbol: 'NESTLEIND', company: 'Nestle India Ltd.', weight: 6.9, logo: 'https://logo.clearbit.com/nestle.in' },
        { symbol: 'ITC', company: 'ITC Ltd.', weight: 6.2, logo: 'https://logo.clearbit.com/itcportal.com' },
        { symbol: 'SBIN', company: 'State Bank of India', weight: 5.8, logo: 'https://logo.clearbit.com/sbi.co.in' },
        { symbol: 'ASIANPAINT', company: 'Asian Paints Ltd.', weight: 4.8, logo: 'https://logo.clearbit.com/asianpaints.com' }
      ]
    },
    'Q4-2023': {
      quarter: 'Q4-2023',
      period: 'Oct - Dec 2023',
      portfolioReturn: 18.9,
      niftyReturn: 11.5,
      stocks: [
        { symbol: 'TCS', company: 'Tata Consultancy Services Ltd.', weight: 15.2, logo: 'https://logo.clearbit.com/tcs.com' },
        { symbol: 'RELIANCE', company: 'Reliance Industries Ltd.', weight: 13.1, logo: 'https://logo.clearbit.com/ril.com' },
        { symbol: 'BHARTIARTL', company: 'Bharti Airtel Ltd.', weight: 11.5, logo: 'https://logo.clearbit.com/airtel.in' },
        { symbol: 'HDFCBANK', company: 'HDFC Bank Ltd.', weight: 10.7, logo: 'https://logo.clearbit.com/hdfcbank.com' },
        { symbol: 'TITAN', company: 'Titan Company Ltd.', weight: 9.8, logo: 'https://logo.clearbit.com/titan.co.in' },
        { symbol: 'INFY', company: 'Infosys Ltd.', weight: 8.9, logo: 'https://logo.clearbit.com/infosys.com' },
        { symbol: 'NESTLEIND', company: 'Nestle India Ltd.', weight: 8.2, logo: 'https://logo.clearbit.com/nestle.in' },
        { symbol: 'ICICIBANK', company: 'ICICI Bank Ltd.', weight: 7.6, logo: 'https://logo.clearbit.com/icicibank.com' },
        { symbol: 'HINDUNILVR', company: 'Hindustan Unilever Ltd.', weight: 6.9, logo: 'https://logo.clearbit.com/hul.co.in' },
        { symbol: 'HCLTECH', company: 'HCL Technologies Ltd.', weight: 5.3, logo: 'https://logo.clearbit.com/hcltech.com' },
        { symbol: 'ITC', company: 'ITC Ltd.', weight: 4.8, logo: 'https://logo.clearbit.com/itcportal.com' },
        { symbol: 'SBIN', company: 'State Bank of India', weight: 4.0, logo: 'https://logo.clearbit.com/sbi.co.in' }
      ]
    },
    'Q1-2024': {
      quarter: 'Q1-2024',
      period: 'Jan - Mar 2024',
      portfolioReturn: 22.3,
      niftyReturn: 13.7,
      stocks: [
        { symbol: 'TCS', company: 'Tata Consultancy Services Ltd.', weight: 16.8, logo: 'https://logo.clearbit.com/tcs.com' },
        { symbol: 'BHARTIARTL', company: 'Bharti Airtel Ltd.', weight: 13.9, logo: 'https://logo.clearbit.com/airtel.in' },
        { symbol: 'RELIANCE', company: 'Reliance Industries Ltd.', weight: 12.4, logo: 'https://logo.clearbit.com/ril.com' },
        { symbol: 'TITAN', company: 'Titan Company Ltd.', weight: 11.7, logo: 'https://logo.clearbit.com/titan.co.in' },
        { symbol: 'HDFCBANK', company: 'HDFC Bank Ltd.', weight: 10.2, logo: 'https://logo.clearbit.com/hdfcbank.com' },
        { symbol: 'NESTLEIND', company: 'Nestle India Ltd.', weight: 9.5, logo: 'https://logo.clearbit.com/nestle.in' },
        { symbol: 'INFY', company: 'Infosys Ltd.', weight: 8.1, logo: 'https://logo.clearbit.com/infosys.com' },
        { symbol: 'HCLTECH', company: 'HCL Technologies Ltd.', weight: 7.3, logo: 'https://logo.clearbit.com/hcltech.com' },
        { symbol: 'ICICIBANK', company: 'ICICI Bank Ltd.', weight: 6.8, logo: 'https://logo.clearbit.com/icicibank.com' },
        { symbol: 'HINDUNILVR', company: 'Hindustan Unilever Ltd.', weight: 5.9, logo: 'https://logo.clearbit.com/hul.co.in' },
        { symbol: 'WIPRO', company: 'Wipro Ltd.', weight: 4.2, logo: 'https://logo.clearbit.com/wipro.com' },
        { symbol: 'AXISBANK', company: 'Axis Bank Ltd.', weight: 3.7, logo: 'https://logo.clearbit.com/axisbank.com' }
      ]
    },
    'Q2-2024': {
      quarter: 'Q2-2024',
      period: 'Apr - Jun 2024',
      portfolioReturn: 25.8,
      niftyReturn: 15.9,
      stocks: [
        { symbol: 'TCS', company: 'Tata Consultancy Services Ltd.', weight: 18.2, logo: 'https://logo.clearbit.com/tcs.com' },
        { symbol: 'BHARTIARTL', company: 'Bharti Airtel Ltd.', weight: 15.1, logo: 'https://logo.clearbit.com/airtel.in' },
        { symbol: 'TITAN', company: 'Titan Company Ltd.', weight: 13.4, logo: 'https://logo.clearbit.com/titan.co.in' },
        { symbol: 'RELIANCE', company: 'Reliance Industries Ltd.', weight: 11.8, logo: 'https://logo.clearbit.com/ril.com' },
        { symbol: 'NESTLEIND', company: 'Nestle India Ltd.', weight: 10.9, logo: 'https://logo.clearbit.com/nestle.in' },
        { symbol: 'HDFCBANK', company: 'HDFC Bank Ltd.', weight: 9.3, logo: 'https://logo.clearbit.com/hdfcbank.com' },
        { symbol: 'HCLTECH', company: 'HCL Technologies Ltd.', weight: 8.7, logo: 'https://logo.clearbit.com/hcltech.com' },
        { symbol: 'INFY', company: 'Infosys Ltd.', weight: 7.2, logo: 'https://logo.clearbit.com/infosys.com' },
        { symbol: 'ICICIBANK', company: 'ICICI Bank Ltd.', weight: 6.1, logo: 'https://logo.clearbit.com/icicibank.com' },
        { symbol: 'WIPRO', company: 'Wipro Ltd.', weight: 5.4, logo: 'https://logo.clearbit.com/wipro.com' },
        { symbol: 'HINDUNILVR', company: 'Hindustan Unilever Ltd.', weight: 4.8, logo: 'https://logo.clearbit.com/hul.co.in' },
        { symbol: 'AXISBANK', company: 'Axis Bank Ltd.', weight: 3.1, logo: 'https://logo.clearbit.com/axisbank.com' }
      ]
    }
  };

  const currentQuarterData = quarterlyData[selectedQuarter];
  const availableQuarters = Object.keys(quarterlyData).reverse(); // Most recent first

  // Calculate overall statistics
  const avgPortfolioReturn = performanceData.reduce((sum, data) => sum + data.portfolioReturn, 0) / performanceData.length;
  const avgNiftyReturn = performanceData.reduce((sum, data) => sum + data.niftyReturn, 0) / performanceData.length;
  const outperformance = avgPortfolioReturn - avgNiftyReturn;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Passive Wealth Momentum Portfolio</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A systematic momentum-based investment strategy that rebalances quarterly to capture market trends. 
              Active since 2023 with consistent outperformance against Nifty 500.
            </p>
          </div>
        </div>
      </div>

      {/* Performance Stats */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Portfolio Return</p>
                <p className="text-2xl font-bold text-green-600">{avgPortfolioReturn.toFixed(1)}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Avg Nifty 500 Return</p>
                <p className="text-2xl font-bold text-blue-600">{avgNiftyReturn.toFixed(1)}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Outperformance</p>
                <p className="text-2xl font-bold text-orange-600">+{outperformance.toFixed(1)}%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Rebalancing</p>
                <p className="text-2xl font-bold text-purple-600">Quarterly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Historical Performance Comparison</h2>
          <div className="space-y-4">
            {performanceData.map((data, index) => (
              <div key={data.quarter} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-16 text-sm font-medium text-gray-600">{data.quarter}</div>
                  <div className="flex space-x-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <span className="text-sm text-gray-700">Momentum Portfolio</span>
                      <span className="text-sm font-bold text-green-600">{data.portfolioReturn.toFixed(1)}%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <span className="text-sm text-gray-700">Nifty 500</span>
                      <span className="text-sm font-bold text-blue-600">{data.niftyReturn.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <ArrowUp className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-bold text-green-600">
                    +{(data.portfolioReturn - data.niftyReturn).toFixed(1)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quarter Selection and Portfolio */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Portfolio Constituents</h2>
                <p className="text-gray-600">
                  Select a quarter to view the specific portfolio composition for that period
                </p>
              </div>
              
              {/* Quarter Selector */}
              <div className="mt-4 md:mt-0 relative">
                <button
                  onClick={() => setShowQuarterDropdown(!showQuarterDropdown)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{currentQuarterData.period}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {showQuarterDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    {availableQuarters.map((quarter) => (
                      <button
                        key={quarter}
                        onClick={() => {
                          setSelectedQuarter(quarter);
                          setShowQuarterDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 ${
                          selectedQuarter === quarter ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                        }`}
                      >
                        {quarterlyData[quarter].period}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Portfolio Performance for Selected Quarter */}
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Portfolio Return</p>
                <p className="text-3xl font-bold text-green-600">
                  {currentQuarterData.portfolioReturn.toFixed(1)}%
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Nifty 500 Return</p>
                <p className="text-3xl font-bold text-blue-600">
                  {currentQuarterData.niftyReturn.toFixed(1)}%
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Outperformance</p>
                <p className="text-3xl font-bold text-orange-600">
                  +{(currentQuarterData.portfolioReturn - currentQuarterData.niftyReturn).toFixed(1)}%
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Holdings Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stock
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Weight
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Allocation
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentQuarterData.stocks.map((stock, index) => (
                  <tr key={stock.symbol} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                          {stock.logo ? (
                            <img 
                              src={stock.logo} 
                              alt={`${stock.symbol} logo`}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const fallback = target.nextElementSibling as HTMLElement;
                                if (fallback) fallback.style.display = 'flex';
                              }}
                            />
                          ) : null}
                          <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center" style={{ display: stock.logo ? 'none' : 'flex' }}>
                            <span className="text-blue-600 font-semibold text-sm">
                              {stock.symbol.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{stock.symbol}</div>
                          <div className="text-sm text-gray-500">{stock.company}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{stock.weight.toFixed(1)}%</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(stock.weight / 20) * 100}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Portfolio Methodology */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Portfolio Methodology</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Investment Strategy</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Momentum-based stock selection</li>
                  <li>• Focus on large-cap stocks with strong price momentum</li>
                  <li>• Systematic rebalancing every 3 months</li>
                  <li>• Risk-adjusted position sizing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Key Features</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Active since Q1 2023</li>
                  <li>• 12-15 stock concentrated portfolio</li>
                  <li>• Quarterly rebalancing frequency</li>
                  <li>• Benchmark: Nifty 500 Index</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Comparison Table */}
        <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Quarterly Performance Comparison
            </h2>
            <p className="text-gray-600">
              Detailed quarter-by-quarter performance vs Nifty 500 benchmark
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Quarter
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Period
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Momentum Portfolio
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nifty 500
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Outperformance
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {performanceData.reverse().map((data) => {
                  const outperf = data.portfolioReturn - data.niftyReturn;
                  return (
                    <tr key={data.quarter} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {data.quarter}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {quarterlyData[data.quarter]?.period || 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-sm font-bold text-green-600">
                            {data.portfolioReturn.toFixed(1)}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <BarChart3 className="w-4 h-4 text-blue-500" />
                          <span className="text-sm font-bold text-blue-600">
                            {data.niftyReturn.toFixed(1)}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <ArrowUp className="w-4 h-4 text-orange-500" />
                          <span className="text-sm font-bold text-orange-600">
                            +{outperf.toFixed(1)}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MomentumPortfolio;