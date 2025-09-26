import { useState, useEffect } from 'react';
import { Trophy, Star, Gift, Target, Zap, Crown, Medal, Award, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Gamification = () => {
  const [userStats, setUserStats] = useState({
    points: 2450,
    level: 8,
    streak: 12,
    totalVisits: 24,
    nextLevelPoints: 3000,
    achievements: 15,
    rank: 'Gold Member'
  });

  const [achievements, setAchievements] = useState([
    {
      id: 1,
      name: 'First Cut',
      description: 'Complete your first appointment',
      icon: Star,
      unlocked: true,
      points: 100,
      rarity: 'Common'
    },
    {
      id: 2,
      name: 'Loyal Customer',
      description: 'Visit 10 times',
      icon: Trophy,
      unlocked: true,
      points: 500,
      rarity: 'Rare'
    },
    {
      id: 3,
      name: 'Streak Master',
      description: 'Maintain 7-day booking streak',
      icon: Zap,
      unlocked: true,
      points: 300,
      rarity: 'Uncommon'
    },
    {
      id: 4,
      name: 'VIP Status',
      description: 'Reach Gold Member status',
      icon: Crown,
      unlocked: true,
      points: 1000,
      rarity: 'Epic'
    },
    {
      id: 5,
      name: 'Social Butterfly',
      description: 'Refer 5 friends',
      icon: Users,
      unlocked: false,
      points: 750,
      rarity: 'Rare'
    },
    {
      id: 6,
      name: 'Perfectionist',
      description: 'Rate 5 appointments 5 stars',
      icon: Medal,
      unlocked: false,
      points: 400,
      rarity: 'Uncommon'
    }
  ]);

  const [rewards, setRewards] = useState([
    {
      id: 1,
      name: 'Free Hair Wash',
      cost: 500,
      description: 'Complimentary hair wash service',
      icon: Gift,
      available: true
    },
    {
      id: 2,
      name: '20% Off Next Cut',
      cost: 1000,
      description: 'Get 20% discount on your next haircut',
      icon: Target,
      available: true
    },
    {
      id: 3,
      name: 'Premium Styling',
      cost: 1500,
      description: 'Free premium styling service',
      icon: Crown,
      available: true
    },
    {
      id: 4,
      name: 'VIP Treatment',
      cost: 2000,
      description: 'Exclusive VIP barber experience',
      icon: Award,
      available: false
    }
  ]);

  const [leaderboard, setLeaderboard] = useState([
    { rank: 1, name: 'Mike Johnson', points: 5420, level: 12, avatar: '👑' },
    { rank: 2, name: 'You', points: 2450, level: 8, avatar: '😎' },
    { rank: 3, name: 'Alex Chen', points: 2380, level: 8, avatar: '💪' },
    { rank: 4, name: 'David Kim', points: 2100, level: 7, avatar: '🔥' },
    { rank: 5, name: 'Ryan Smith', points: 1950, level: 7, avatar: '⚡' }
  ]);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'text-gray-400';
      case 'Uncommon': return 'text-green-400';
      case 'Rare': return 'text-blue-400';
      case 'Epic': return 'text-purple-400';
      case 'Legendary': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getRarityBg = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'bg-gray-500/20 border-gray-500/30';
      case 'Uncommon': return 'bg-green-500/20 border-green-500/30';
      case 'Rare': return 'bg-blue-500/20 border-blue-500/30';
      case 'Epic': return 'bg-purple-500/20 border-purple-500/30';
      case 'Legendary': return 'bg-yellow-500/20 border-yellow-500/30';
      default: return 'bg-gray-500/20 border-gray-500/30';
    }
  };

  const progressPercentage = (userStats.points / userStats.nextLevelPoints) * 100;

  return (
    <section className="py-24 bg-gradient-to-br from-barbershop-black via-barbershop-gray-dark to-barbershop-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-barbershop-white mb-6 animate-fade-in-up">
            GAMIFICATION <span className="text-shimmer">REWARDS</span>
          </h2>
          <p className="text-xl text-barbershop-gray-light max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
            Earn points, unlock achievements, and climb the leaderboard. 
            Turn every visit into an exciting adventure with exclusive rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Stats & Progress */}
          <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30 hover:border-barber-red/60 transition-all duration-500 hover:shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-barbershop-white">
                <Trophy className="h-8 w-8 text-barber-red mr-3 animate-pulse" />
                Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Level & Points */}
              <div className="text-center">
                <div className="text-4xl font-bold text-barber-red mb-2">Level {userStats.level}</div>
                <div className="text-2xl font-semibold text-barbershop-white mb-1">{userStats.points.toLocaleString()} Points</div>
                <div className="text-sm text-barbershop-gray-light">{userStats.rank}</div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-barbershop-gray-light">
                  <span>Progress to Level {userStats.level + 1}</span>
                  <span>{userStats.points}/{userStats.nextLevelPoints}</span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gradient-to-br from-barber-red/20 to-barber-blue/20 rounded-xl border border-barber-red/30">
                  <div className="text-2xl font-bold text-barber-red">{userStats.streak}</div>
                  <div className="text-xs text-barbershop-gray-light">Day Streak</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-barber-blue/20 to-barber-red/20 rounded-xl border border-barber-blue/30">
                  <div className="text-2xl font-bold text-barber-blue">{userStats.totalVisits}</div>
                  <div className="text-xs text-barbershop-gray-light">Total Visits</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red text-white font-bold py-3 px-6 rounded-xl shadow-luxury hover:shadow-glow transform hover:scale-105 transition-all duration-300">
                  <Star className="h-5 w-5 mr-2" />
                  Check In Today
                </Button>
                <Button variant="outline" className="w-full border-barber-red/30 text-barbershop-white hover:border-barber-red hover:bg-barber-red/20">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  View History
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-blue/30 hover:border-barber-blue/60 transition-all duration-500 hover:shadow-glow">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-barbershop-white">
                <Medal className="h-8 w-8 text-barber-blue mr-3 animate-pulse" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div
                      key={achievement.id}
                      className={`p-4 rounded-xl border transition-all duration-300 ${
                        achievement.unlocked
                          ? 'bg-gradient-to-r from-barber-red/20 to-barber-blue/20 border-barber-red/30'
                          : 'bg-barbershop-black/30 border-barbershop-gray/30 opacity-60'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          achievement.unlocked ? 'bg-gradient-to-r from-barber-red to-barber-blue' : 'bg-barbershop-gray'
                        }`}>
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className={`font-semibold ${
                              achievement.unlocked ? 'text-barbershop-white' : 'text-barbershop-gray'
                            }`}>
                              {achievement.name}
                            </h3>
                            <span className={`text-xs px-2 py-1 rounded ${
                              achievement.unlocked ? getRarityBg(achievement.rarity) : 'bg-gray-500/20'
                            } ${achievement.unlocked ? getRarityColor(achievement.rarity) : 'text-gray-500'}`}>
                              {achievement.rarity}
                            </span>
                          </div>
                          <p className={`text-sm ${
                            achievement.unlocked ? 'text-barbershop-gray-light' : 'text-barbershop-gray'
                          }`}>
                            {achievement.description}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <span className={`text-sm font-bold ${
                              achievement.unlocked ? 'text-barber-red' : 'text-barbershop-gray'
                            }`}>
                              +{achievement.points} points
                            </span>
                            {achievement.unlocked && (
                              <span className="text-xs text-green-400">✓ Unlocked</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Rewards & Leaderboard */}
          <div className="space-y-6">
            {/* Rewards */}
            <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-red/30 hover:border-barber-red/60 transition-all duration-500 hover:shadow-glow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-barbershop-white">
                  <Gift className="h-6 w-6 text-barber-red mr-3 animate-pulse" />
                  Rewards Shop
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {rewards.map((reward) => {
                  const IconComponent = reward.icon;
                  return (
                    <div
                      key={reward.id}
                      className={`p-3 rounded-lg border transition-all duration-300 ${
                        reward.available && userStats.points >= reward.cost
                          ? 'bg-gradient-to-r from-barber-red/20 to-barber-blue/20 border-barber-red/30 hover:border-barber-red/60'
                          : 'bg-barbershop-black/30 border-barbershop-gray/30 opacity-60'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <IconComponent className="h-5 w-5 text-barber-red" />
                          <div>
                            <h4 className="font-semibold text-barbershop-white">{reward.name}</h4>
                            <p className="text-xs text-barbershop-gray-light">{reward.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-barber-red">{reward.cost} pts</div>
                          {reward.available && userStats.points >= reward.cost ? (
                            <Button size="sm" className="mt-1 bg-gradient-to-r from-barber-red to-barber-blue hover:from-barber-blue hover:to-barber-red text-white">
                              Claim
                            </Button>
                          ) : (
                            <div className="text-xs text-barbershop-gray mt-1">Not enough points</div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card className="bg-gradient-to-br from-barbershop-gray-dark/50 to-barbershop-black/50 backdrop-blur-xl border border-barber-blue/30 hover:border-barber-blue/60 transition-all duration-500 hover:shadow-glow">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-barbershop-white">
                  <Crown className="h-6 w-6 text-barber-blue mr-3 animate-pulse" />
                  Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((player) => (
                    <div
                      key={player.rank}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        player.name === 'You'
                          ? 'bg-gradient-to-r from-barber-red/30 to-barber-blue/30 border border-barber-red/50'
                          : 'bg-barbershop-black/30 border border-barbershop-gray/30'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${
                          player.rank === 1 ? 'bg-yellow-500' : 
                          player.rank === 2 ? 'bg-gray-400' : 
                          player.rank === 3 ? 'bg-orange-600' : 'bg-barbershop-gray'
                        }`}>
                          {player.rank <= 3 ? '🏆' : player.rank}
                        </div>
                        <div>
                          <div className="font-semibold text-barbershop-white">{player.name}</div>
                          <div className="text-xs text-barbershop-gray-light">Level {player.level}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-barber-red">{player.points.toLocaleString()}</div>
                        <div className="text-xs text-barbershop-gray-light">points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gamification;
