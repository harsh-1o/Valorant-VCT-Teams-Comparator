// VCT 2025 Champions Team Comparator

// Team data
const teamsData = [
    {
      "name": "G2 Esports",
      "region": "Americas",
      "overallScore": 0.752,
      "championshipPoints": 30,
      "formScore": 0.933,
      "predictedTier": 1,
      "championshipProbability": 0.85,
      "mapWinRate": 0.68,
      "roundWinRate": 0.62,
      "attackWinRate": 0.58,
      "defenseWinRate": 0.66,
      "comebackRate": 0.25,
      "firstKillRate": 0.18,
      "clutchWinRate": 0.45,
      "avgCombatScore": 195.2,
      "keyPlayerRating": 1.15,
      "teamSynergyScore": 0.92,
      "internationalExperience": 9,
      "head2headWinRate": 0.72,
      "injuryRiskFactor": 0.10,
      "maps": {"Abyss": 0.710, "Ascent": 0.678, "Bind": 0.711, "Haven": 0.728, "Lotus": 0.675, "Split": 0.688, "Sunset": 0.739}
    },
    {
      "name": "Sentinels",
      "region": "Americas", 
      "overallScore": 0.711,
      "championshipPoints": 20,
      "formScore": 0.767,
      "predictedTier": 2,
      "championshipProbability": 0.72,
      "mapWinRate": 0.64,
      "roundWinRate": 0.59,
      "attackWinRate": 0.55,
      "defenseWinRate": 0.63,
      "comebackRate": 0.22,
      "firstKillRate": 0.16,
      "clutchWinRate": 0.42,
      "avgCombatScore": 187.4,
      "keyPlayerRating": 1.08,
      "teamSynergyScore": 0.89,
      "internationalExperience": 8,
      "head2headWinRate": 0.68,
      "injuryRiskFactor": 0.05,
      "maps": {"Abyss": 0.671, "Ascent": 0.626, "Bind": 0.665, "Haven": 0.625, "Lotus": 0.625, "Split": 0.655, "Sunset": 0.592}
    },
    {
      "name": "NRG",
      "region": "Americas",
      "overallScore": 0.649,
      "championshipPoints": 11,
      "formScore": 0.533,
      "predictedTier": 4,
      "championshipProbability": 0.45,
      "mapWinRate": 0.58,
      "roundWinRate": 0.54,
      "attackWinRate": 0.51,
      "defenseWinRate": 0.57,
      "comebackRate": 0.19,
      "firstKillRate": 0.15,
      "clutchWinRate": 0.38,
      "avgCombatScore": 182.1,
      "keyPlayerRating": 1.02,
      "teamSynergyScore": 0.78,
      "internationalExperience": 7,
      "head2headWinRate": 0.58,
      "injuryRiskFactor": 0.15,
      "maps": {"Abyss": 0.530, "Ascent": 0.561, "Bind": 0.554, "Haven": 0.577, "Lotus": 0.541, "Split": 0.540, "Sunset": 0.628}
    },
    {
      "name": "MIBR",
      "region": "Americas",
      "overallScore": 0.590,
      "championshipPoints": 9,
      "formScore": 0.300,
      "predictedTier": 4,
      "championshipProbability": 0.32,
      "mapWinRate": 0.52,
      "roundWinRate": 0.48,
      "attackWinRate": 0.45,
      "defenseWinRate": 0.51,
      "comebackRate": 0.16,
      "firstKillRate": 0.12,
      "clutchWinRate": 0.34,
      "avgCombatScore": 175.8,
      "keyPlayerRating": 0.95,
      "teamSynergyScore": 0.72,
      "internationalExperience": 4,
      "head2headWinRate": 0.45,
      "injuryRiskFactor": 0.08,
      "maps": {"Abyss": 0.508, "Ascent": 0.517, "Bind": 0.475, "Haven": 0.486, "Lotus": 0.505, "Split": 0.480, "Sunset": 0.529}
    },
    {
      "name": "Team Liquid",
      "region": "EMEA",
      "overallScore": 0.730,
      "championshipPoints": 19,
      "formScore": 0.867,
      "predictedTier": 2,
      "championshipProbability": 0.78,
      "mapWinRate": 0.66,
      "roundWinRate": 0.61,
      "attackWinRate": 0.57,
      "defenseWinRate": 0.65,
      "comebackRate": 0.23,
      "firstKillRate": 0.17,
      "clutchWinRate": 0.44,
      "avgCombatScore": 190.5,
      "keyPlayerRating": 1.12,
      "teamSynergyScore": 0.88,
      "internationalExperience": 8,
      "head2headWinRate": 0.71,
      "injuryRiskFactor": 0.05,
      "maps": {"Abyss": 0.654, "Ascent": 0.653, "Bind": 0.653, "Haven": 0.714, "Lotus": 0.658, "Split": 0.640, "Sunset": 0.696}
    },
    {
      "name": "FNATIC",
      "region": "EMEA",
      "overallScore": 0.728,
      "championshipPoints": 18,
      "formScore": 0.833,
      "predictedTier": 2,
      "championshipProbability": 0.76,
      "mapWinRate": 0.65,
      "roundWinRate": 0.60,
      "attackWinRate": 0.56,
      "defenseWinRate": 0.64,
      "comebackRate": 0.24,
      "firstKillRate": 0.18,
      "clutchWinRate": 0.43,
      "avgCombatScore": 188.9,
      "keyPlayerRating": 1.11,
      "teamSynergyScore": 0.91,
      "internationalExperience": 9,
      "head2headWinRate": 0.75,
      "injuryRiskFactor": 0.08,
      "maps": {"Abyss": 0.624, "Ascent": 0.658, "Bind": 0.601, "Haven": 0.611, "Lotus": 0.657, "Split": 0.683, "Sunset": 0.665}
    },
    {
      "name": "Team Heretics",
      "region": "EMEA",
      "overallScore": 0.688,
      "championshipPoints": 14,
      "formScore": 0.600,
      "predictedTier": 3,
      "championshipProbability": 0.63,
      "mapWinRate": 0.61,
      "roundWinRate": 0.57,
      "attackWinRate": 0.53,
      "defenseWinRate": 0.61,
      "comebackRate": 0.21,
      "firstKillRate": 0.16,
      "clutchWinRate": 0.40,
      "avgCombatScore": 185.2,
      "keyPlayerRating": 1.07,
      "teamSynergyScore": 0.85,
      "internationalExperience": 6,
      "head2headWinRate": 0.63,
      "injuryRiskFactor": 0.12,
      "maps": {"Abyss": 0.614, "Ascent": 0.600, "Bind": 0.573, "Haven": 0.583, "Lotus": 0.591, "Split": 0.649, "Sunset": 0.627}
    },
    {
      "name": "GIANTX",
      "region": "EMEA",
      "overallScore": 0.623,
      "championshipPoints": 9,
      "formScore": 0.367,
      "predictedTier": 4,
      "championshipProbability": 0.41,
      "mapWinRate": 0.56,
      "roundWinRate": 0.52,
      "attackWinRate": 0.49,
      "defenseWinRate": 0.55,
      "comebackRate": 0.18,
      "firstKillRate": 0.14,
      "clutchWinRate": 0.37,
      "avgCombatScore": 178.4,
      "keyPlayerRating": 0.98,
      "teamSynergyScore": 0.74,
      "internationalExperience": 3,
      "head2headWinRate": 0.52,
      "injuryRiskFactor": 0.10,
      "maps": {"Abyss": 0.505, "Ascent": 0.566, "Bind": 0.550, "Haven": 0.524, "Lotus": 0.562, "Split": 0.589, "Sunset": 0.590}
    },
    {
      "name": "Bilibili Gaming",
      "region": "China",
      "overallScore": 0.740,
      "championshipPoints": 19,
      "formScore": 0.933,
      "predictedTier": 2,
      "championshipProbability": 0.81,
      "mapWinRate": 0.67,
      "roundWinRate": 0.62,
      "attackWinRate": 0.58,
      "defenseWinRate": 0.66,
      "comebackRate": 0.26,
      "firstKillRate": 0.19,
      "clutchWinRate": 0.46,
      "avgCombatScore": 192.8,
      "keyPlayerRating": 1.14,
      "teamSynergyScore": 0.87,
      "internationalExperience": 5,
      "head2headWinRate": 0.69,
      "injuryRiskFactor": 0.06,
      "maps": {"Abyss": 0.659, "Ascent": 0.663, "Bind": 0.692, "Haven": 0.696, "Lotus": 0.653, "Split": 0.678, "Sunset": 0.649}
    },
    {
      "name": "EDward Gaming",
      "region": "China",
      "overallScore": 0.700,
      "championshipPoints": 17,
      "formScore": 0.767,
      "predictedTier": 2,
      "championshipProbability": 0.68,
      "mapWinRate": 0.63,
      "roundWinRate": 0.58,
      "attackWinRate": 0.54,
      "defenseWinRate": 0.62,
      "comebackRate": 0.22,
      "firstKillRate": 0.17,
      "clutchWinRate": 0.41,
      "avgCombatScore": 186.7,
      "keyPlayerRating": 1.09,
      "teamSynergyScore": 0.84,
      "internationalExperience": 7,
      "head2headWinRate": 0.66,
      "injuryRiskFactor": 0.08,
      "maps": {"Abyss": 0.603, "Ascent": 0.654, "Bind": 0.679, "Haven": 0.622, "Lotus": 0.654, "Split": 0.650, "Sunset": 0.619}
    },
    {
      "name": "XLG Esports",
      "region": "China",
      "overallScore": 0.664,
      "championshipPoints": 16,
      "formScore": 0.733,
      "predictedTier": 3,
      "championshipProbability": 0.58,
      "mapWinRate": 0.60,
      "roundWinRate": 0.55,
      "attackWinRate": 0.52,
      "defenseWinRate": 0.58,
      "comebackRate": 0.20,
      "firstKillRate": 0.15,
      "clutchWinRate": 0.39,
      "avgCombatScore": 181.3,
      "keyPlayerRating": 1.04,
      "teamSynergyScore": 0.79,
      "internationalExperience": 3,
      "head2headWinRate": 0.58,
      "injuryRiskFactor": 0.09,
      "maps": {"Abyss": 0.615, "Ascent": 0.644, "Bind": 0.604, "Haven": 0.636, "Lotus": 0.510, "Split": 0.629, "Sunset": 0.608}
    },
    {
      "name": "Dragon Ranger Gaming",
      "region": "China",
      "overallScore": 0.597,
      "championshipPoints": 11,
      "formScore": 0.433,
      "predictedTier": 4,
      "championshipProbability": 0.35,
      "mapWinRate": 0.54,
      "roundWinRate": 0.50,
      "attackWinRate": 0.47,
      "defenseWinRate": 0.53,
      "comebackRate": 0.17,
      "firstKillRate": 0.13,
      "clutchWinRate": 0.35,
      "avgCombatScore": 174.6,
      "keyPlayerRating": 0.93,
      "teamSynergyScore": 0.71,
      "internationalExperience": 2,
      "head2headWinRate": 0.48,
      "injuryRiskFactor": 0.07,
      "maps": {"Abyss": 0.524, "Ascent": 0.538, "Bind": 0.480, "Haven": 0.514, "Lotus": 0.532, "Split": 0.577, "Sunset": 0.524}
    },
    {
      "name": "Paper Rex",
      "region": "Pacific",
      "overallScore": 0.770,
      "championshipPoints": 22,
      "formScore": 0.800,
      "predictedTier": 1,
      "championshipProbability": 0.89,
      "mapWinRate": 0.69,
      "roundWinRate": 0.64,
      "attackWinRate": 0.60,
      "defenseWinRate": 0.68,
      "comebackRate": 0.28,
      "firstKillRate": 0.21,
      "clutchWinRate": 0.48,
      "avgCombatScore": 198.5,
      "keyPlayerRating": 1.18,
      "teamSynergyScore": 0.93,
      "internationalExperience": 8,
      "head2headWinRate": 0.74,
      "injuryRiskFactor": 0.10,
      "maps": {"Abyss": 0.684, "Ascent": 0.678, "Bind": 0.731, "Haven": 0.703, "Lotus": 0.677, "Split": 0.723, "Sunset": 0.707}
    },
    {
      "name": "T1",
      "region": "Pacific",
      "overallScore": 0.684,
      "championshipPoints": 16,
      "formScore": 0.767,
      "predictedTier": 2,
      "championshipProbability": 0.64,
      "mapWinRate": 0.62,
      "roundWinRate": 0.57,
      "attackWinRate": 0.53,
      "defenseWinRate": 0.61,
      "comebackRate": 0.21,
      "firstKillRate": 0.16,
      "clutchWinRate": 0.40,
      "avgCombatScore": 184.2,
      "keyPlayerRating": 1.06,
      "teamSynergyScore": 0.82,
      "internationalExperience": 6,
      "head2headWinRate": 0.64,
      "injuryRiskFactor": 0.05,
      "maps": {"Abyss": 0.655, "Ascent": 0.598, "Bind": 0.617, "Haven": 0.600, "Lotus": 0.568, "Split": 0.635, "Sunset": 0.635}
    },
    {
      "name": "Rex Regum Qeon",
      "region": "Pacific",
      "overallScore": 0.647,
      "championshipPoints": 16,
      "formScore": 0.733,
      "predictedTier": 3,
      "championshipProbability": 0.52,
      "mapWinRate": 0.59,
      "roundWinRate": 0.54,
      "attackWinRate": 0.51,
      "defenseWinRate": 0.57,
      "comebackRate": 0.19,
      "firstKillRate": 0.15,
      "clutchWinRate": 0.38,
      "avgCombatScore": 179.6,
      "keyPlayerRating": 1.01,
      "teamSynergyScore": 0.76,
      "internationalExperience": 4,
      "head2headWinRate": 0.56,
      "injuryRiskFactor": 0.12,
      "maps": {"Abyss": 0.591, "Ascent": 0.580, "Bind": 0.552, "Haven": 0.563, "Lotus": 0.566, "Split": 0.567, "Sunset": 0.589}
    },
    {
      "name": "DRX",
      "region": "Pacific",
      "overallScore": 0.654,
      "championshipPoints": 12,
      "formScore": 0.433,
      "predictedTier": 4,
      "championshipProbability": 0.49,
      "mapWinRate": 0.57,
      "roundWinRate": 0.53,
      "attackWinRate": 0.50,
      "defenseWinRate": 0.56,
      "comebackRate": 0.24,
      "firstKillRate": 0.17,
      "clutchWinRate": 0.42,
      "avgCombatScore": 182.8,
      "keyPlayerRating": 1.03,
      "teamSynergyScore": 0.80,
      "internationalExperience": 7,
      "head2headWinRate": 0.61,
      "injuryRiskFactor": 0.08,
      "maps": {"Abyss": 0.585, "Ascent": 0.624, "Bind": 0.578, "Haven": 0.568, "Lotus": 0.558, "Split": 0.515, "Sunset": 0.572}
    }
];

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const app = new TeamComparator();
});

class TeamComparator {
    constructor() {
        this.teams = teamsData;
        this.selectedTeam1 = null;
        this.selectedTeam2 = null;
        this.init();
    }

    init() {
        console.log('Initializing TeamComparator with', this.teams.length, 'teams');
        this.populateDropdowns();
        this.bindEvents();
        this.showEmptyState();
    }

    populateDropdowns() {
        const team1Select = document.getElementById('team1-select');
        const team2Select = document.getElementById('team2-select');
        
        if (!team1Select || !team2Select) {
            console.error('Dropdown elements not found');
            return;
        }

        // Clear existing options except placeholder
        team1Select.innerHTML = '<option value="">Select a team...</option>';
        team2Select.innerHTML = '<option value="">Select a team...</option>';

        // Add all teams to both dropdowns
        this.teams.forEach((team, index) => {
            const option1 = document.createElement('option');
            const option2 = document.createElement('option');
            
            option1.value = team.name;
            option1.textContent = `${team.name} (${team.region})`;
            
            option2.value = team.name;
            option2.textContent = `${team.name} (${team.region})`;
            
            team1Select.appendChild(option1);
            team2Select.appendChild(option2);
        });

        console.log('Populated dropdowns with', this.teams.length, 'teams each');
    }

    bindEvents() {
        const team1Select = document.getElementById('team1-select');
        const team2Select = document.getElementById('team2-select');
        const swapButton = document.getElementById('swap-teams');

        if (team1Select) {
            team1Select.addEventListener('change', (e) => {
                console.log('Team 1 selected:', e.target.value);
                this.selectedTeam1 = this.teams.find(team => team.name === e.target.value) || null;
                this.updateComparison();
            });
        }

        if (team2Select) {
            team2Select.addEventListener('change', (e) => {
                console.log('Team 2 selected:', e.target.value);
                this.selectedTeam2 = this.teams.find(team => team.name === e.target.value) || null;
                this.updateComparison();
            });
        }

        if (swapButton) {
            swapButton.addEventListener('click', () => {
                this.swapTeams();
            });
        }
    }

    swapTeams() {
        if (!this.selectedTeam1 && !this.selectedTeam2) return;

        const team1Select = document.getElementById('team1-select');
        const team2Select = document.getElementById('team2-select');

        const tempValue = team1Select.value;
        team1Select.value = team2Select.value;
        team2Select.value = tempValue;

        const tempTeam = this.selectedTeam1;
        this.selectedTeam1 = this.selectedTeam2;
        this.selectedTeam2 = tempTeam;

        this.updateComparison();
    }

    showEmptyState() {
        const comparisonContent = document.getElementById('comparison-content');
        const emptyState = document.getElementById('empty-state');
        
        if (comparisonContent && emptyState) {
            comparisonContent.classList.add('hidden');
            emptyState.classList.remove('hidden');
        }
    }

    updateComparison() {
        const comparisonContent = document.getElementById('comparison-content');
        const emptyState = document.getElementById('empty-state');
        const swapButton = document.getElementById('swap-teams');

        console.log('Updating comparison. Team1:', this.selectedTeam1?.name, 'Team2:', this.selectedTeam2?.name);

        if (this.selectedTeam1 && this.selectedTeam2) {
            // Show comparison
            if (emptyState) emptyState.classList.add('hidden');
            if (comparisonContent) {
                comparisonContent.classList.remove('hidden');
                comparisonContent.classList.add('fade-in');
            }
            if (swapButton) swapButton.disabled = false;
            
            this.updateOverallPerformance();
            this.updateCoreStatistics();
            this.updateMapPool();
            this.updateHeadToHead();
        } else {
            // Show empty state
            if (emptyState) emptyState.classList.remove('hidden');
            if (comparisonContent) comparisonContent.classList.add('hidden');
            if (swapButton) swapButton.disabled = !this.selectedTeam1 && !this.selectedTeam2;
        }
    }

    updateOverallPerformance() {
        this.updateTeamOverview('team1', this.selectedTeam1);
        this.updateTeamOverview('team2', this.selectedTeam2);
    }

    updateTeamOverview(teamKey, teamData) {
        const overview = document.getElementById(`${teamKey}-overview`);
        if (!overview) return;
        
        const teamName = overview.querySelector('.team-name');
        const teamRegion = overview.querySelector('.team-region');
        const scoreValue = overview.querySelector('.score-value');
        const championshipPoints = overview.querySelector('.championship-points');
        const formScore = overview.querySelector('.form-score');
        const predictedTier = overview.querySelector('.predicted-tier');
        const championshipProb = overview.querySelector('.championship-prob');

        if (teamName) teamName.textContent = teamData.name;
        if (teamRegion) teamRegion.textContent = teamData.region;
        if (scoreValue) scoreValue.textContent = (teamData.overallScore * 100).toFixed(1);
        if (championshipPoints) championshipPoints.textContent = teamData.championshipPoints;
        if (formScore) formScore.textContent = (teamData.formScore * 100).toFixed(1) + '%';
        if (predictedTier) predictedTier.textContent = `Tier ${teamData.predictedTier}`;
        if (championshipProb) championshipProb.textContent = (teamData.championshipProbability * 100).toFixed(1) + '%';
    }

    updateCoreStatistics() {
        const statRows = document.querySelectorAll('.stat-row');
        
        statRows.forEach(row => {
            const team1Bar = row.querySelector('.team1-bar');
            const team2Bar = row.querySelector('.team2-bar');
            
            if (!team1Bar || !team2Bar) return;
            
            const statKey = team1Bar.dataset.stat;
            
            this.updateStatBar(team1Bar, this.selectedTeam1[statKey], statKey);
            this.updateStatBar(team2Bar, this.selectedTeam2[statKey], statKey);
            
            // Highlight advantages
            const team1Value = this.selectedTeam1[statKey];
            const team2Value = this.selectedTeam2[statKey];
            
            team1Bar.classList.remove('stat-advantage');
            team2Bar.classList.remove('stat-advantage');
            
            if (statKey === 'injuryRiskFactor') {
                // Lower is better for injury risk
                if (team1Value < team2Value) team1Bar.classList.add('stat-advantage');
                else if (team2Value < team1Value) team2Bar.classList.add('stat-advantage');
            } else {
                // Higher is better for all other stats
                if (team1Value > team2Value) team1Bar.classList.add('stat-advantage');
                else if (team2Value > team1Value) team2Bar.classList.add('stat-advantage');
            }
        });
    }

    updateStatBar(barElement, value, statKey) {
        const fill = barElement.querySelector('.bar-fill');
        const valueSpan = barElement.querySelector('.bar-value');
        
        if (!fill || !valueSpan) return;
        
        let displayValue, percentage;
        
        if (statKey === 'avgCombatScore') {
            displayValue = value.toFixed(1);
            percentage = Math.min((value / 200) * 100, 100);
        } else if (statKey === 'keyPlayerRating') {
            displayValue = value.toFixed(2);
            percentage = Math.min((value / 1.5) * 100, 100);
        } else if (statKey === 'internationalExperience') {
            displayValue = value.toString();
            percentage = (value / 10) * 100;
        } else if (statKey === 'injuryRiskFactor') {
            displayValue = (value * 100).toFixed(1) + '%';
            percentage = (1 - value) * 100;
        } else {
            displayValue = (value * 100).toFixed(1) + '%';
            percentage = value * 100;
        }
        
        valueSpan.textContent = displayValue;
        
        setTimeout(() => {
            fill.style.width = `${percentage}%`;
        }, 100);
    }

    updateMapPool() {
        const maps = ['Abyss', 'Ascent', 'Bind', 'Haven', 'Lotus', 'Split', 'Sunset'];
        
        const team1MapName = document.getElementById('team1-map-name');
        const team2MapName = document.getElementById('team2-map-name');
        
        if (team1MapName) team1MapName.textContent = this.selectedTeam1.name;
        if (team2MapName) team2MapName.textContent = this.selectedTeam2.name;
        
        maps.forEach(map => {
            const team1Element = document.querySelector(`[data-map="${map}"][data-team="1"]`);
            const team2Element = document.querySelector(`[data-map="${map}"][data-team="2"]`);
            
            if (team1Element && team2Element) {
                const team1Rate = this.selectedTeam1.maps[map];
                const team2Rate = this.selectedTeam2.maps[map];
                
                this.updateMapWinRate(team1Element, team1Rate);
                this.updateMapWinRate(team2Element, team2Rate);
            }
        });
    }

    updateMapWinRate(element, rate) {
        const percentage = (rate * 100).toFixed(1);
        element.textContent = percentage + '%';
        
        element.classList.remove('good', 'average', 'poor');
        
        if (rate >= 0.65) {
            element.classList.add('good');
        } else if (rate >= 0.55) {
            element.classList.add('average');
        } else {
            element.classList.add('poor');
        }
    }

    updateHeadToHead() {
        const team1Score = this.calculateOverallStrength(this.selectedTeam1);
        const team2Score = this.calculateOverallStrength(this.selectedTeam2);
        
        const total = team1Score + team2Score;
        const team1Prob = team1Score / total;
        const team2Prob = team2Score / total;
        
        // Update predicted winner
        const winnerInfo = document.querySelector('.winner-info');
        if (winnerInfo) {
            const winnerName = winnerInfo.querySelector('.winner-name');
            const winProbability = winnerInfo.querySelector('.win-probability');
            
            if (winnerName && winProbability) {
                if (team1Prob > team2Prob) {
                    winnerName.textContent = this.selectedTeam1.name;
                    winProbability.textContent = (team1Prob * 100).toFixed(1) + '%';
                } else {
                    winnerName.textContent = this.selectedTeam2.name;
                    winProbability.textContent = (team2Prob * 100).toFixed(1) + '%';
                }
            }
        }
        
        // Update probability bars
        const predictionElements = document.querySelectorAll('.team-prediction');
        
        if (predictionElements.length >= 2) {
            // Team 1
            const team1Name = predictionElements[0].querySelector('.team-name');
            const team1ProbBar = predictionElements[0].querySelector('.team1-prob');
            const team1ProbText = predictionElements[0].querySelector('.team1-prob-text');
            
            if (team1Name) team1Name.textContent = this.selectedTeam1.name;
            if (team1ProbBar) team1ProbBar.style.width = (team1Prob * 100) + '%';
            if (team1ProbText) team1ProbText.textContent = (team1Prob * 100).toFixed(1) + '%';
            
            // Team 2
            const team2Name = predictionElements[1].querySelector('.team-name');
            const team2ProbBar = predictionElements[1].querySelector('.team2-prob');
            const team2ProbText = predictionElements[1].querySelector('.team2-prob-text');
            
            if (team2Name) team2Name.textContent = this.selectedTeam2.name;
            if (team2ProbBar) team2ProbBar.style.width = (team2Prob * 100) + '%';
            if (team2ProbText) team2ProbText.textContent = (team2Prob * 100).toFixed(1) + '%';
        }
        
        // Update key factors
        this.updateKeyFactors();
    }

    calculateOverallStrength(team) {
        return (
            team.overallScore * 0.3 +
            team.formScore * 0.25 +
            team.mapWinRate * 0.2 +
            team.teamSynergyScore * 0.15 +
            (team.internationalExperience / 10) * 0.1
        );
    }

    updateKeyFactors() {
        const factorsList = document.getElementById('key-factors');
        if (!factorsList) return;
        
        factorsList.innerHTML = '';
        
        const factors = this.analyzeKeyFactors();
        
        factors.forEach(factor => {
            const factorElement = document.createElement('div');
            factorElement.className = 'factor-item';
            factorElement.textContent = factor;
            factorsList.appendChild(factorElement);
        });
    }

    analyzeKeyFactors() {
        const factors = [];
        
        // Map control analysis
        const team1MapAvg = Object.values(this.selectedTeam1.maps).reduce((a, b) => a + b) / 7;
        const team2MapAvg = Object.values(this.selectedTeam2.maps).reduce((a, b) => a + b) / 7;
        
        if (Math.abs(team1MapAvg - team2MapAvg) > 0.05) {
            const stronger = team1MapAvg > team2MapAvg ? this.selectedTeam1.name : this.selectedTeam2.name;
            factors.push(`${stronger} holds significant map pool advantage`);
        }
        
        // Experience factor
        const expDiff = this.selectedTeam1.internationalExperience - this.selectedTeam2.internationalExperience;
        if (Math.abs(expDiff) >= 2) {
            const experienced = expDiff > 0 ? this.selectedTeam1.name : this.selectedTeam2.name;
            factors.push(`${experienced} brings superior international experience`);
        }
        
        // Form analysis
        const formDiff = this.selectedTeam1.formScore - this.selectedTeam2.formScore;
        if (Math.abs(formDiff) > 0.15) {
            const hotTeam = formDiff > 0 ? this.selectedTeam1.name : this.selectedTeam2.name;
            factors.push(`${hotTeam} showing excellent recent form`);
        }
        
        // Clutch factor
        const clutchDiff = this.selectedTeam1.clutchWinRate - this.selectedTeam2.clutchWinRate;
        if (Math.abs(clutchDiff) > 0.05) {
            const clutchTeam = clutchDiff > 0 ? this.selectedTeam1.name : this.selectedTeam2.name;
            factors.push(`${clutchTeam} excels in high-pressure situations`);
        }
        
        return factors.length > 0 ? factors : ['Teams are evenly matched across key metrics'];
    }
}