// VCT 2025 Champions Team Comparator - Updated with Correct Map Pool

// Team data with updated map pool (Corrode replaces Split)
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
      "maps": {"Abyss": 0.739, "Ascent": 0.707, "Bind": 0.731, "Corrode": 0.813, "Haven": 0.736, "Lotus": 0.715, "Sunset": 0.812}
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
      "maps": {"Abyss": 0.689, "Ascent": 0.647, "Bind": 0.667, "Corrode": 0.694, "Haven": 0.672, "Lotus": 0.666, "Sunset": 0.641}
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
      "maps": {"Abyss": 0.536, "Ascent": 0.566, "Bind": 0.547, "Corrode": 0.622, "Haven": 0.548, "Lotus": 0.538, "Sunset": 0.603}
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
      "maps": {"Abyss": 0.491, "Ascent": 0.504, "Bind": 0.437, "Corrode": 0.468, "Haven": 0.477, "Lotus": 0.454, "Sunset": 0.454}
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
      "maps": {"Abyss": 0.679, "Ascent": 0.677, "Bind": 0.671, "Corrode": 0.778, "Haven": 0.705, "Lotus": 0.664, "Sunset": 0.754}
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
      "maps": {"Abyss": 0.658, "Ascent": 0.679, "Bind": 0.628, "Corrode": 0.706, "Haven": 0.708, "Lotus": 0.699, "Sunset": 0.720}
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
      "maps": {"Abyss": 0.628, "Ascent": 0.614, "Bind": 0.578, "Corrode": 0.612, "Haven": 0.623, "Lotus": 0.646, "Sunset": 0.628}
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
      "maps": {"Abyss": 0.501, "Ascent": 0.560, "Bind": 0.529, "Corrode": 0.494, "Haven": 0.547, "Lotus": 0.569, "Sunset": 0.530}
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
      "maps": {"Abyss": 0.684, "Ascent": 0.689, "Bind": 0.718, "Corrode": 0.712, "Haven": 0.703, "Lotus": 0.710, "Sunset": 0.731}
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
      "maps": {"Abyss": 0.622, "Ascent": 0.665, "Bind": 0.678, "Corrode": 0.671, "Haven": 0.679, "Lotus": 0.656, "Sunset": 0.660}
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
      "maps": {"Abyss": 0.613, "Ascent": 0.643, "Bind": 0.595, "Corrode": 0.596, "Haven": 0.531, "Lotus": 0.621, "Sunset": 0.632}
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
      "maps": {"Abyss": 0.504, "Ascent": 0.526, "Bind": 0.456, "Corrode": 0.460, "Haven": 0.505, "Lotus": 0.550, "Sunset": 0.480}
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
      "maps": {"Abyss": 0.723, "Ascent": 0.713, "Bind": 0.771, "Corrode": 0.782, "Haven": 0.747, "Lotus": 0.762, "Sunset": 0.762}
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
      "maps": {"Abyss": 0.657, "Ascent": 0.613, "Bind": 0.617, "Corrode": 0.630, "Haven": 0.598, "Lotus": 0.637, "Sunset": 0.668}
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
      "maps": {"Abyss": 0.584, "Ascent": 0.583, "Bind": 0.547, "Corrode": 0.553, "Haven": 0.565, "Lotus": 0.563, "Sunset": 0.612}
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
      "maps": {"Abyss": 0.585, "Ascent": 0.618, "Bind": 0.572, "Corrode": 0.622, "Haven": 0.563, "Lotus": 0.532, "Sunset": 0.537}
    }
];

// Updated map pool for VCT 2025 Champions (Corrode replaces Split)
const mapPool = ['Abyss', 'Ascent', 'Bind', 'Corrode', 'Haven', 'Lotus', 'Sunset'];

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

        // Group teams by region
        const teamsByRegion = {};
        this.teams.forEach(team => {
            if (!teamsByRegion[team.region]) {
                teamsByRegion[team.region] = [];
            }
            teamsByRegion[team.region].push(team);
        });

        // Add options to both selectors
        [team1Select, team2Select].forEach(selector => {
            // Add teams grouped by region
            Object.keys(teamsByRegion).sort().forEach(region => {
                const optgroup = document.createElement('optgroup');
                optgroup.label = region;
                
                teamsByRegion[region].sort((a, b) => a.name.localeCompare(b.name)).forEach(team => {
                    const option = document.createElement('option');
                    option.value = team.name;
                    option.textContent = `${team.name} (${region})`;
                    optgroup.appendChild(option);
                });
                
                selector.appendChild(optgroup);
            });
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
        const team1MapName = document.getElementById('team1-map-name');
        const team2MapName = document.getElementById('team2-map-name');

        if (team1MapName) team1MapName.textContent = this.selectedTeam1.name;
        if (team2MapName) team2MapName.textContent = this.selectedTeam2.name;

        mapPool.forEach(map => {
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
        const team1MapAvg = Object.values(this.selectedTeam1.maps).reduce((a, b) => a + b) / mapPool.length;
        const team2MapAvg = Object.values(this.selectedTeam2.maps).reduce((a, b) => a + b) / mapPool.length;

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
