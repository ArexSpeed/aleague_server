const tables = [
  {
    season: 2001,
    position: 1,
    team_name: 'Victory Tigers',
    match: 30,
    win: 27,
    draw: 1,
    lose: 2,
    goal_plus: 81,
    goal_minus: 12,
    bilans: 69,
    points: 82
  },
  {
    season: 2001,
    position: 2,
    team_name: 'Ashton Shamrock',
    match: 30,
    win: 26,
    draw: 2,
    lose: 2,
    goal_plus: 78,
    goal_minus: 19,
    bilans: 59,
    points: 80
  },
  {
    season: 2001,
    position: 3,
    team_name: 'Angelo Angels',
    match: 30,
    win: 25,
    draw: 3,
    lose: 2,
    goal_plus: 72,
    goal_minus: 14,
    bilans: 58,
    points: 78
  },
  {
    season: 2001,
    position: 4,
    team_name: 'Jurgarda Torros',
    match: 30,
    win: 19,
    draw: 6,
    lose: 5,
    goal_plus: 43,
    goal_minus: 18,
    bilans: 25,
    points: 63
  },
  {
    season: 2001,
    position: 5,
    team_name: 'Ronnpolis FC',
    match: 30,
    win: 18,
    draw: 5,
    lose: 7,
    goal_plus: 39,
    goal_minus: 24,
    bilans: 15,
    points: 59
  },
  {
    season: 2001,
    position: 6,
    team_name: 'Arkov Diamond',
    match: 30,
    win: 16,
    draw: 7,
    lose: 7,
    goal_plus: 40,
    goal_minus: 27,
    bilans: 13,
    points: 55
  },
  {
    season: 2001,
    position: 7,
    team_name: 'Dark Knights',
    match: 30,
    win: 16,
    draw: 6,
    lose: 8,
    goal_plus: 32,
    goal_minus: 25,
    bilans: 7,
    points: 54
  },
  {
    season: 2001,
    position: 8,
    team_name: 'Montanviu Bears',
    match: 30,
    win: 13,
    draw: 6,
    lose: 11,
    goal_plus: 28,
    goal_minus: 24,
    bilans: 4,
    points: 45
  },
  {
    season: 2001,
    position: 9,
    team_name: 'Maverick Neptuns',
    match: 30,
    win: 9,
    draw: 10,
    lose: 11,
    goal_plus: 30,
    goal_minus: 36,
    bilans: -6,
    points: 37
  },
  {
    season: 2001,
    position: 10,
    team_name: 'Gotan Bats',
    match: 30,
    win: 10,
    draw: 6,
    lose: 14,
    goal_plus: 29,
    goal_minus: 38,
    bilans: -9,
    points: 36
  },
  {
    season: 2001,
    position: 11,
    team_name: 'Kingsleen Monarch',
    match: 30,
    win: 7,
    draw: 5,
    lose: 18,
    goal_plus: 23,
    goal_minus: 48,
    bilans: -25,
    points: 26
  },
  {
    season: 2001,
    position: 12,
    team_name: 'Rosengaard Roses',
    match: 30,
    win: 6,
    draw: 4,
    lose: 20,
    goal_plus: 13,
    goal_minus: 44,
    bilans: -31,
    points: 22
  },
  {
    season: 2001,
    position: 13,
    team_name: 'Tozen Goats',
    match: 30,
    win: 2,
    draw: 7,
    lose: 21,
    goal_plus: 16,
    goal_minus: 52,
    bilans: -36,
    points: 13
  },
  {
    season: 2001,
    position: 14,
    team_name: 'Tarnhem Wolves',
    match: 30,
    win: 2,
    draw: 5,
    lose: 23,
    goal_plus: 12,
    goal_minus: 57,
    bilans: -45,
    points: 11
  },
  {
    season: 2001,
    position: 15,
    team_name: 'Diampero Bolts',
    match: 30,
    win: 2,
    draw: 4,
    lose: 24,
    goal_plus: 13,
    goal_minus: 53,
    bilans: -40,
    points: 10
  },
  {
    season: 2001,
    position: 16,
    team_name: 'Tigra Fox',
    match: 30,
    win: 2,
    draw: 3,
    lose: 25,
    goal_plus: 12,
    goal_minus: 70,
    bilans: -58,
    points: 9
  },
  {
    season: 2002,
    position: 1,
    team_name: 'Jurgarda Torros',
    match: 30,
    win: 18,
    draw: 9,
    lose: 3,
    goal_plus: 35,
    goal_minus: 13,
    bilans: 22,
    points: 63
  },
  {
    season: 2002,
    position: 2,
    team_name: 'Victory Tigers',
    match: 30,
    win: 16,
    draw: 9,
    lose: 5,
    goal_plus: 34,
    goal_minus: 21,
    bilans: 13,
    points: 57
  },
  {
    season: 2002,
    position: 3,
    team_name: 'Ronnpolis FC',
    match: 30,
    win: 14,
    draw: 12,
    lose: 4,
    goal_plus: 33,
    goal_minus: 15,
    bilans: 18,
    points: 54
  },
  {
    season: 2002,
    position: 4,
    team_name: 'Dark Knights',
    match: 30,
    win: 15,
    draw: 8,
    lose: 7,
    goal_plus: 34,
    goal_minus: 17,
    bilans: 17,
    points: 53
  },
  {
    season: 2002,
    position: 5,
    team_name: 'Arkov Diamond',
    match: 30,
    win: 15,
    draw: 7,
    lose: 8,
    goal_plus: 25,
    goal_minus: 17,
    bilans: 8,
    points: 52
  },
  {
    season: 2002,
    position: 6,
    team_name: 'Ashton Shamrock',
    match: 30,
    win: 13,
    draw: 11,
    lose: 6,
    goal_plus: 25,
    goal_minus: 13,
    bilans: 12,
    points: 50
  },
  {
    season: 2002,
    position: 7,
    team_name: 'Tigra Fox',
    match: 30,
    win: 13,
    draw: 10,
    lose: 7,
    goal_plus: 26,
    goal_minus: 19,
    bilans: 7,
    points: 49
  },
  {
    season: 2002,
    position: 8,
    team_name: 'Angelo Angels',
    match: 30,
    win: 11,
    draw: 10,
    lose: 9,
    goal_plus: 23,
    goal_minus: 20,
    bilans: 3,
    points: 43
  },
  {
    season: 2002,
    position: 9,
    team_name: 'Montanviu Bears',
    match: 30,
    win: 10,
    draw: 9,
    lose: 11,
    goal_plus: 17,
    goal_minus: 19,
    bilans: -2,
    points: 39
  },
  {
    season: 2002,
    position: 10,
    team_name: 'Diampero Bolts',
    match: 30,
    win: 6,
    draw: 12,
    lose: 12,
    goal_plus: 17,
    goal_minus: 25,
    bilans: -8,
    points: 30
  },
  {
    season: 2002,
    position: 11,
    team_name: 'Rosengaard Roses',
    match: 30,
    win: 5,
    draw: 14,
    lose: 11,
    goal_plus: 19,
    goal_minus: 27,
    bilans: -8,
    points: 29
  },
  {
    season: 2002,
    position: 12,
    team_name: 'Tarnhem Wolves',
    match: 30,
    win: 5,
    draw: 14,
    lose: 11,
    goal_plus: 17,
    goal_minus: 25,
    bilans: -8,
    points: 29
  },
  {
    season: 2002,
    position: 13,
    team_name: 'Gotan Bats',
    match: 30,
    win: 5,
    draw: 11,
    lose: 14,
    goal_plus: 17,
    goal_minus: 34,
    bilans: -17,
    points: 26
  },
  {
    season: 2002,
    position: 14,
    team_name: 'Maverick Neptuns',
    match: 30,
    win: 4,
    draw: 10,
    lose: 16,
    goal_plus: 16,
    goal_minus: 30,
    bilans: -14,
    points: 22
  },
  {
    season: 2002,
    position: 15,
    team_name: 'Kingsleen Monarch',
    match: 30,
    win: 5,
    draw: 7,
    lose: 18,
    goal_plus: 14,
    goal_minus: 34,
    bilans: -20,
    points: 22
  },
  {
    season: 2002,
    position: 16,
    team_name: 'Tozen Goats',
    match: 30,
    win: 4,
    draw: 9,
    lose: 17,
    goal_plus: 13,
    goal_minus: 36,
    bilans: -23,
    points: 21
  },
  {
    season: 2003,
    position: 1,
    team_name: 'Angelo Angels',
    match: 30,
    win: 22,
    draw: 4,
    lose: 4,
    goal_plus: 41,
    goal_minus: 14,
    bilans: 27,
    points: 70
  },
  {
    season: 2003,
    position: 2,
    team_name: 'Ashton Shamrock',
    match: 30,
    win: 16,
    draw: 10,
    lose: 4,
    goal_plus: 32,
    goal_minus: 13,
    bilans: 19,
    points: 58
  },
  {
    season: 2003,
    position: 3,
    team_name: 'Jurgarda Torros',
    match: 30,
    win: 12,
    draw: 11,
    lose: 7,
    goal_plus: 22,
    goal_minus: 17,
    bilans: 5,
    points: 47
  },
  {
    season: 2003,
    position: 4,
    team_name: 'Victory Tigers',
    match: 30,
    win: 11,
    draw: 13,
    lose: 6,
    goal_plus: 21,
    goal_minus: 14,
    bilans: 7,
    points: 46
  },
  {
    season: 2003,
    position: 5,
    team_name: 'Kingsleen Monarch',
    match: 30,
    win: 12,
    draw: 9,
    lose: 9,
    goal_plus: 16,
    goal_minus: 13,
    bilans: 3,
    points: 45
  },
  {
    season: 2003,
    position: 6,
    team_name: 'Arkov Diamond',
    match: 30,
    win: 10,
    draw: 14,
    lose: 6,
    goal_plus: 26,
    goal_minus: 17,
    bilans: 9,
    points: 44
  },
  {
    season: 2003,
    position: 7,
    team_name: 'Tarnhem Wolves',
    match: 30,
    win: 11,
    draw: 11,
    lose: 8,
    goal_plus: 25,
    goal_minus: 22,
    bilans: 3,
    points: 44
  },
  {
    season: 2003,
    position: 8,
    team_name: 'Rosengaard Roses',
    match: 30,
    win: 10,
    draw: 13,
    lose: 7,
    goal_plus: 24,
    goal_minus: 22,
    bilans: 2,
    points: 43
  },
  {
    season: 2003,
    position: 9,
    team_name: 'Tigra Fox',
    match: 30,
    win: 11,
    draw: 8,
    lose: 11,
    goal_plus: 27,
    goal_minus: 25,
    bilans: 2,
    points: 41
  },
  {
    season: 2003,
    position: 10,
    team_name: 'Maverick Neptuns',
    match: 30,
    win: 11,
    draw: 8,
    lose: 11,
    goal_plus: 22,
    goal_minus: 19,
    bilans: 3,
    points: 41
  },
  {
    season: 2003,
    position: 11,
    team_name: 'Ronnpolis FC',
    match: 30,
    win: 8,
    draw: 17,
    lose: 5,
    goal_plus: 21,
    goal_minus: 18,
    bilans: 3,
    points: 41
  },
  {
    season: 2003,
    position: 12,
    team_name: 'Gotan Bats',
    match: 30,
    win: 7,
    draw: 14,
    lose: 9,
    goal_plus: 19,
    goal_minus: 19,
    bilans: 0,
    points: 35
  },
  {
    season: 2003,
    position: 13,
    team_name: 'Montanviu Bears',
    match: 30,
    win: 6,
    draw: 9,
    lose: 15,
    goal_plus: 19,
    goal_minus: 32,
    bilans: -13,
    points: 27
  },
  {
    season: 2003,
    position: 14,
    team_name: 'Dark Knights',
    match: 30,
    win: 3,
    draw: 13,
    lose: 14,
    goal_plus: 15,
    goal_minus: 32,
    bilans: -17,
    points: 22
  },
  {
    season: 2003,
    position: 15,
    team_name: 'Tozen Goats',
    match: 30,
    win: 3,
    draw: 10,
    lose: 17,
    goal_plus: 12,
    goal_minus: 35,
    bilans: -23,
    points: 19
  },
  {
    season: 2003,
    position: 16,
    team_name: 'Diampero Bolts',
    match: 30,
    win: 1,
    draw: 8,
    lose: 21,
    goal_plus: 11,
    goal_minus: 41,
    bilans: -30,
    points: 11
  },
  {
    season: 2004,
    position: 1,
    team_name: 'Victory Tigers',
    match: 30,
    win: 14,
    draw: 14,
    lose: 2,
    goal_plus: 24,
    goal_minus: 11,
    bilans: 13,
    points: 56
  },
  {
    season: 2004,
    position: 2,
    team_name: 'Tigra Fox',
    match: 30,
    win: 14,
    draw: 7,
    lose: 9,
    goal_plus: 20,
    goal_minus: 14,
    bilans: 6,
    points: 49
  },
  {
    season: 2004,
    position: 3,
    team_name: 'Maverick Neptuns',
    match: 30,
    win: 11,
    draw: 15,
    lose: 4,
    goal_plus: 28,
    goal_minus: 18,
    bilans: 10,
    points: 48
  },
  {
    season: 2004,
    position: 4,
    team_name: 'Kingsleen Monarch',
    match: 30,
    win: 12,
    draw: 9,
    lose: 9,
    goal_plus: 23,
    goal_minus: 20,
    bilans: 3,
    points: 45
  },
  {
    season: 2004,
    position: 5,
    team_name: 'Montanviu Bears',
    match: 30,
    win: 10,
    draw: 12,
    lose: 8,
    goal_plus: 24,
    goal_minus: 19,
    bilans: 5,
    points: 42
  },
  {
    season: 2004,
    position: 6,
    team_name: 'Rosengaard Roses',
    match: 30,
    win: 9,
    draw: 14,
    lose: 7,
    goal_plus: 23,
    goal_minus: 20,
    bilans: 3,
    points: 41
  },
  {
    season: 2004,
    position: 7,
    team_name: 'Tozen Goats',
    match: 30,
    win: 10,
    draw: 10,
    lose: 10,
    goal_plus: 21,
    goal_minus: 22,
    bilans: -1,
    points: 40
  },
  {
    season: 2004,
    position: 8,
    team_name: 'Tarnhem Wolves',
    match: 30,
    win: 8,
    draw: 15,
    lose: 7,
    goal_plus: 22,
    goal_minus: 20,
    bilans: 2,
    points: 39
  },
  {
    season: 2004,
    position: 9,
    team_name: 'Dark Knights',
    match: 30,
    win: 7,
    draw: 18,
    lose: 5,
    goal_plus: 17,
    goal_minus: 17,
    bilans: 0,
    points: 39
  },
  {
    season: 2004,
    position: 10,
    team_name: 'Angelo Angels',
    match: 30,
    win: 9,
    draw: 9,
    lose: 12,
    goal_plus: 17,
    goal_minus: 21,
    bilans: -4,
    points: 36
  },
  {
    season: 2004,
    position: 11,
    team_name: 'Jurgarda Torros',
    match: 30,
    win: 7,
    draw: 14,
    lose: 9,
    goal_plus: 22,
    goal_minus: 25,
    bilans: -3,
    points: 35
  },
  {
    season: 2004,
    position: 12,
    team_name: 'Ronnpolis FC',
    match: 30,
    win: 8,
    draw: 10,
    lose: 12,
    goal_plus: 20,
    goal_minus: 23,
    bilans: -3,
    points: 34
  },
  {
    season: 2004,
    position: 13,
    team_name: 'Ashton Shamrock',
    match: 30,
    win: 7,
    draw: 11,
    lose: 12,
    goal_plus: 23,
    goal_minus: 26,
    bilans: -3,
    points: 32
  },
  {
    season: 2004,
    position: 14,
    team_name: 'Arkov Diamond',
    match: 30,
    win: 6,
    draw: 13,
    lose: 11,
    goal_plus: 18,
    goal_minus: 23,
    bilans: -5,
    points: 31
  },
  {
    season: 2004,
    position: 15,
    team_name: 'Gotan Bats',
    match: 30,
    win: 4,
    draw: 18,
    lose: 8,
    goal_plus: 15,
    goal_minus: 23,
    bilans: -8,
    points: 30
  },
  {
    season: 2004,
    position: 16,
    team_name: 'Diampero Bolts',
    match: 30,
    win: 3,
    draw: 13,
    lose: 14,
    goal_plus: 13,
    goal_minus: 28,
    bilans: -15,
    points: 22
  },
  {
    season: 2005,
    position: 1,
    team_name: 'Victory Tigers',
    match: 30,
    win: 23,
    draw: 5,
    lose: 2,
    goal_plus: 41,
    goal_minus: 11,
    bilans: 30,
    points: 74
  },
  {
    season: 2005,
    position: 2,
    team_name: 'Dark Knights',
    match: 30,
    win: 21,
    draw: 4,
    lose: 5,
    goal_plus: 45,
    goal_minus: 15,
    bilans: 30,
    points: 67
  },
  {
    season: 2005,
    position: 3,
    team_name: 'Ashton Shamrock',
    match: 30,
    win: 18,
    draw: 8,
    lose: 4,
    goal_plus: 33,
    goal_minus: 13,
    bilans: 20,
    points: 62
  },
  {
    season: 2005,
    position: 4,
    team_name: 'Maverick Neptuns',
    match: 30,
    win: 14,
    draw: 13,
    lose: 3,
    goal_plus: 35,
    goal_minus: 15,
    bilans: 20,
    points: 55
  },
  {
    season: 2005,
    position: 5,
    team_name: 'Angelo Angels',
    match: 30,
    win: 13,
    draw: 12,
    lose: 5,
    goal_plus: 26,
    goal_minus: 12,
    bilans: 14,
    points: 51
  },
  {
    season: 2005,
    position: 6,
    team_name: 'Tigra Fox',
    match: 30,
    win: 13,
    draw: 12,
    lose: 5,
    goal_plus: 23,
    goal_minus: 15,
    bilans: 8,
    points: 51
  },
  {
    season: 2005,
    position: 7,
    team_name: 'Montanviu Bears',
    match: 30,
    win: 13,
    draw: 5,
    lose: 12,
    goal_plus: 26,
    goal_minus: 25,
    bilans: 1,
    points: 44
  },
  {
    season: 2005,
    position: 8,
    team_name: 'Tozen Goats',
    match: 30,
    win: 10,
    draw: 10,
    lose: 10,
    goal_plus: 21,
    goal_minus: 22,
    bilans: -1,
    points: 40
  },
  {
    season: 2005,
    position: 9,
    team_name: 'Arkov Diamond',
    match: 30,
    win: 9,
    draw: 8,
    lose: 13,
    goal_plus: 22,
    goal_minus: 25,
    bilans: -3,
    points: 35
  },
  {
    season: 2005,
    position: 10,
    team_name: 'Diampero Bolts',
    match: 30,
    win: 6,
    draw: 12,
    lose: 12,
    goal_plus: 18,
    goal_minus: 30,
    bilans: -12,
    points: 30
  },
  {
    season: 2005,
    position: 11,
    team_name: 'Rosengaard Roses',
    match: 30,
    win: 6,
    draw: 11,
    lose: 13,
    goal_plus: 18,
    goal_minus: 31,
    bilans: -13,
    points: 29
  },
  {
    season: 2005,
    position: 12,
    team_name: 'Tarnhem Wolves',
    match: 30,
    win: 4,
    draw: 14,
    lose: 12,
    goal_plus: 17,
    goal_minus: 27,
    bilans: -10,
    points: 26
  },
  {
    season: 2005,
    position: 13,
    team_name: 'Ronnpolis FC',
    match: 30,
    win: 2,
    draw: 18,
    lose: 10,
    goal_plus: 18,
    goal_minus: 30,
    bilans: -12,
    points: 24
  },
  {
    season: 2005,
    position: 14,
    team_name: 'Jurgarda Torros',
    match: 30,
    win: 3,
    draw: 11,
    lose: 16,
    goal_plus: 17,
    goal_minus: 40,
    bilans: -23,
    points: 20
  },
  {
    season: 2005,
    position: 15,
    team_name: 'Kingsleen Monarch',
    match: 30,
    win: 1,
    draw: 13,
    lose: 16,
    goal_plus: 12,
    goal_minus: 34,
    bilans: -22,
    points: 16
  },
  {
    season: 2005,
    position: 16,
    team_name: 'Gotan Bats',
    match: 30,
    win: 2,
    draw: 8,
    lose: 20,
    goal_plus: 12,
    goal_minus: 39,
    bilans: -27,
    points: 14
  },
  {
    season: 2006,
    position: 1,
    team_name: 'Angelo Angels',
    match: 30,
    win: 23,
    draw: 6,
    lose: 1,
    goal_plus: 50,
    goal_minus: 10,
    bilans: 40,
    points: 75
  },
  {
    season: 2006,
    position: 2,
    team_name: 'Gotan Bats',
    match: 30,
    win: 19,
    draw: 9,
    lose: 2,
    goal_plus: 32,
    goal_minus: 13,
    bilans: 19,
    points: 66
  },
  {
    season: 2006,
    position: 3,
    team_name: 'Kingsleen Monarch',
    match: 30,
    win: 15,
    draw: 10,
    lose: 5,
    goal_plus: 28,
    goal_minus: 15,
    bilans: 13,
    points: 55
  },
  {
    season: 2006,
    position: 4,
    team_name: 'Rosengaard Roses',
    match: 30,
    win: 12,
    draw: 11,
    lose: 7,
    goal_plus: 25,
    goal_minus: 20,
    bilans: 5,
    points: 47
  },
  {
    season: 2006,
    position: 5,
    team_name: 'Ronnpolis FC',
    match: 30,
    win: 12,
    draw: 11,
    lose: 7,
    goal_plus: 21,
    goal_minus: 14,
    bilans: 7,
    points: 47
  },
  {
    season: 2006,
    position: 6,
    team_name: 'Diampero Bolts',
    match: 30,
    win: 9,
    draw: 14,
    lose: 7,
    goal_plus: 19,
    goal_minus: 17,
    bilans: 2,
    points: 41
  },
  {
    season: 2006,
    position: 7,
    team_name: 'Arkov Diamond',
    match: 30,
    win: 7,
    draw: 17,
    lose: 6,
    goal_plus: 13,
    goal_minus: 10,
    bilans: 3,
    points: 38
  },
  {
    season: 2006,
    position: 8,
    team_name: 'Tozen Goats',
    match: 30,
    win: 9,
    draw: 10,
    lose: 11,
    goal_plus: 21,
    goal_minus: 26,
    bilans: -5,
    points: 37
  },
  {
    season: 2006,
    position: 9,
    team_name: 'Montanviu Bears',
    match: 30,
    win: 8,
    draw: 12,
    lose: 10,
    goal_plus: 20,
    goal_minus: 23,
    bilans: -3,
    points: 36
  },
  {
    season: 2006,
    position: 10,
    team_name: 'Tigra Fox',
    match: 30,
    win: 7,
    draw: 14,
    lose: 9,
    goal_plus: 18,
    goal_minus: 22,
    bilans: -4,
    points: 35
  },
  {
    season: 2006,
    position: 11,
    team_name: 'Tarnhem Wolves',
    match: 30,
    win: 7,
    draw: 13,
    lose: 10,
    goal_plus: 20,
    goal_minus: 25,
    bilans: -5,
    points: 34
  },
  {
    season: 2006,
    position: 12,
    team_name: 'Ashton Shamrock',
    match: 30,
    win: 7,
    draw: 9,
    lose: 14,
    goal_plus: 20,
    goal_minus: 32,
    bilans: -12,
    points: 30
  },
  {
    season: 2006,
    position: 13,
    team_name: 'Maverick Neptuns',
    match: 30,
    win: 4,
    draw: 12,
    lose: 14,
    goal_plus: 16,
    goal_minus: 28,
    bilans: -12,
    points: 24
  },
  {
    season: 2006,
    position: 14,
    team_name: 'Dark Knights',
    match: 30,
    win: 6,
    draw: 6,
    lose: 18,
    goal_plus: 16,
    goal_minus: 31,
    bilans: -15,
    points: 24
  },
  {
    season: 2006,
    position: 15,
    team_name: 'Jurgarda Torros',
    match: 30,
    win: 5,
    draw: 8,
    lose: 17,
    goal_plus: 18,
    goal_minus: 35,
    bilans: -17,
    points: 23
  },
  {
    season: 2006,
    position: 16,
    team_name: 'Victory Tigers',
    match: 30,
    win: 5,
    draw: 8,
    lose: 17,
    goal_plus: 14,
    goal_minus: 30,
    bilans: -16,
    points: 23
  },
  {
    season: 2007,
    position: 1,
    team_name: 'Tozen Goats',
    match: 30,
    win: 27,
    draw: 2,
    lose: 1,
    goal_plus: 72,
    goal_minus: 15,
    bilans: 57,
    points: 83
  },
  {
    season: 2007,
    position: 2,
    team_name: 'Montanviu Bears',
    match: 30,
    win: 24,
    draw: 5,
    lose: 1,
    goal_plus: 62,
    goal_minus: 13,
    bilans: 49,
    points: 77
  },
  {
    season: 2007,
    position: 3,
    team_name: 'Jurgarda Torros',
    match: 30,
    win: 23,
    draw: 5,
    lose: 2,
    goal_plus: 60,
    goal_minus: 10,
    bilans: 50,
    points: 74
  },
  {
    season: 2007,
    position: 4,
    team_name: 'Tigra Fox',
    match: 30,
    win: 17,
    draw: 8,
    lose: 5,
    goal_plus: 38,
    goal_minus: 19,
    bilans: 19,
    points: 59
  },
  {
    season: 2007,
    position: 5,
    team_name: 'Maverick Neptuns',
    match: 30,
    win: 16,
    draw: 7,
    lose: 7,
    goal_plus: 37,
    goal_minus: 19,
    bilans: 18,
    points: 55
  },
  {
    season: 2007,
    position: 6,
    team_name: 'Gotan Bats',
    match: 30,
    win: 14,
    draw: 8,
    lose: 8,
    goal_plus: 35,
    goal_minus: 23,
    bilans: 12,
    points: 50
  },
  {
    season: 2007,
    position: 7,
    team_name: 'Kingsleen Monarch',
    match: 30,
    win: 14,
    draw: 7,
    lose: 9,
    goal_plus: 38,
    goal_minus: 18,
    bilans: 20,
    points: 49
  },
  {
    season: 2007,
    position: 8,
    team_name: 'Ashton Shamrock',
    match: 30,
    win: 13,
    draw: 8,
    lose: 9,
    goal_plus: 34,
    goal_minus: 20,
    bilans: 14,
    points: 47
  },
  {
    season: 2007,
    position: 9,
    team_name: 'Angelo Angels',
    match: 30,
    win: 12,
    draw: 8,
    lose: 10,
    goal_plus: 29,
    goal_minus: 27,
    bilans: 2,
    points: 44
  },
  {
    season: 2007,
    position: 10,
    team_name: 'Diampero Bolts',
    match: 30,
    win: 9,
    draw: 6,
    lose: 15,
    goal_plus: 19,
    goal_minus: 35,
    bilans: -16,
    points: 33
  },
  {
    season: 2007,
    position: 11,
    team_name: 'Victory Tigers',
    match: 30,
    win: 8,
    draw: 6,
    lose: 16,
    goal_plus: 18,
    goal_minus: 35,
    bilans: -17,
    points: 30
  },
  {
    season: 2007,
    position: 12,
    team_name: 'Dark Knights',
    match: 30,
    win: 7,
    draw: 6,
    lose: 17,
    goal_plus: 14,
    goal_minus: 34,
    bilans: -20,
    points: 27
  },
  {
    season: 2007,
    position: 13,
    team_name: 'Tarnhem Wolves',
    match: 30,
    win: 3,
    draw: 12,
    lose: 15,
    goal_plus: 15,
    goal_minus: 38,
    bilans: -23,
    points: 21
  },
  {
    season: 2007,
    position: 14,
    team_name: 'Arkov Diamond',
    match: 30,
    win: 2,
    draw: 4,
    lose: 24,
    goal_plus: 15,
    goal_minus: 64,
    bilans: -49,
    points: 10
  },
  {
    season: 2007,
    position: 15,
    team_name: 'Rosengaard Roses',
    match: 30,
    win: 0,
    draw: 6,
    lose: 24,
    goal_plus: 10,
    goal_minus: 67,
    bilans: -57,
    points: 6
  },
  {
    season: 2007,
    position: 16,
    team_name: 'Ronnpolis FC',
    match: 30,
    win: 0,
    draw: 4,
    lose: 26,
    goal_plus: 7,
    goal_minus: 66,
    bilans: -59,
    points: 4
  },
  {
    season: 2008,
    position: 1,
    team_name: 'Gotan Bats',
    match: 30,
    win: 22,
    draw: 7,
    lose: 1,
    goal_plus: 50,
    goal_minus: 13,
    bilans: 37,
    points: 73
  },
  {
    season: 2008,
    position: 2,
    team_name: 'Diampero Bolts',
    match: 30,
    win: 16,
    draw: 9,
    lose: 5,
    goal_plus: 33,
    goal_minus: 17,
    bilans: 16,
    points: 57
  },
  {
    season: 2008,
    position: 3,
    team_name: 'Tigra Fox',
    match: 30,
    win: 15,
    draw: 10,
    lose: 5,
    goal_plus: 25,
    goal_minus: 10,
    bilans: 15,
    points: 55
  },
  {
    season: 2008,
    position: 4,
    team_name: 'Maverick Neptuns',
    match: 30,
    win: 14,
    draw: 7,
    lose: 9,
    goal_plus: 24,
    goal_minus: 19,
    bilans: 5,
    points: 49
  },
  {
    season: 2008,
    position: 5,
    team_name: 'Angelo Angels',
    match: 30,
    win: 12,
    draw: 11,
    lose: 7,
    goal_plus: 19,
    goal_minus: 13,
    bilans: 6,
    points: 47
  },
  {
    season: 2008,
    position: 6,
    team_name: 'Ashton Shamrock',
    match: 30,
    win: 10,
    draw: 13,
    lose: 7,
    goal_plus: 19,
    goal_minus: 19,
    bilans: 0,
    points: 43
  },
  {
    season: 2008,
    position: 7,
    team_name: 'Jurgarda Torros',
    match: 30,
    win: 7,
    draw: 18,
    lose: 5,
    goal_plus: 19,
    goal_minus: 16,
    bilans: 3,
    points: 39
  },
  {
    season: 2008,
    position: 8,
    team_name: 'Victory Tigers',
    match: 30,
    win: 8,
    draw: 15,
    lose: 7,
    goal_plus: 17,
    goal_minus: 16,
    bilans: 1,
    points: 39
  },
  {
    season: 2008,
    position: 9,
    team_name: 'Ronnpolis FC',
    match: 30,
    win: 9,
    draw: 11,
    lose: 10,
    goal_plus: 19,
    goal_minus: 19,
    bilans: 0,
    points: 38
  },
  {
    season: 2008,
    position: 10,
    team_name: 'Montanviu Bears',
    match: 30,
    win: 8,
    draw: 14,
    lose: 8,
    goal_plus: 14,
    goal_minus: 16,
    bilans: -2,
    points: 38
  },
  {
    season: 2008,
    position: 11,
    team_name: 'Tozen Goats',
    match: 30,
    win: 8,
    draw: 10,
    lose: 12,
    goal_plus: 16,
    goal_minus: 21,
    bilans: -5,
    points: 34
  },
  {
    season: 2008,
    position: 12,
    team_name: 'Tarnhem Wolves',
    match: 30,
    win: 4,
    draw: 16,
    lose: 10,
    goal_plus: 11,
    goal_minus: 20,
    bilans: -9,
    points: 28
  },
  {
    season: 2008,
    position: 13,
    team_name: 'Rosengaard Roses',
    match: 30,
    win: 7,
    draw: 7,
    lose: 16,
    goal_plus: 9,
    goal_minus: 30,
    bilans: -21,
    points: 28
  },
  {
    season: 2008,
    position: 14,
    team_name: 'Kingsleen Monarch',
    match: 30,
    win: 5,
    draw: 11,
    lose: 14,
    goal_plus: 9,
    goal_minus: 22,
    bilans: -13,
    points: 26
  },
  {
    season: 2008,
    position: 15,
    team_name: 'Arkov Diamond',
    match: 30,
    win: 2,
    draw: 15,
    lose: 13,
    goal_plus: 9,
    goal_minus: 22,
    bilans: -13,
    points: 21
  },
  {
    season: 2008,
    position: 16,
    team_name: 'Dark Knights',
    match: 30,
    win: 1,
    draw: 10,
    lose: 19,
    goal_plus: 13,
    goal_minus: 33,
    bilans: -20,
    points: 13
  },
  {
    season: 2009,
    position: 1,
    team_name: 'Tarnhem Wolves',
    match: 30,
    win: 23,
    draw: 5,
    lose: 2,
    goal_plus: 49,
    goal_minus: 9,
    bilans: 40,
    points: 74
  },
  {
    season: 2009,
    position: 2,
    team_name: 'Diampero Bolts',
    match: 30,
    win: 21,
    draw: 5,
    lose: 4,
    goal_plus: 41,
    goal_minus: 13,
    bilans: 28,
    points: 68
  },
  {
    season: 2009,
    position: 3,
    team_name: 'Rosengaard Roses',
    match: 30,
    win: 20,
    draw: 6,
    lose: 4,
    goal_plus: 51,
    goal_minus: 19,
    bilans: 32,
    points: 66
  },
  {
    season: 2009,
    position: 4,
    team_name: 'Victory Tigers',
    match: 30,
    win: 18,
    draw: 8,
    lose: 4,
    goal_plus: 46,
    goal_minus: 15,
    bilans: 31,
    points: 62
  },
  {
    season: 2009,
    position: 5,
    team_name: 'Angelo Angels',
    match: 30,
    win: 16,
    draw: 9,
    lose: 5,
    goal_plus: 39,
    goal_minus: 13,
    bilans: 26,
    points: 57
  },
  {
    season: 2009,
    position: 6,
    team_name: 'Dark Knights',
    match: 30,
    win: 12,
    draw: 11,
    lose: 7,
    goal_plus: 31,
    goal_minus: 25,
    bilans: 6,
    points: 47
  },
  {
    season: 2009,
    position: 7,
    team_name: 'Kingsleen Monarch',
    match: 30,
    win: 14,
    draw: 4,
    lose: 12,
    goal_plus: 40,
    goal_minus: 31,
    bilans: 9,
    points: 46
  },
  {
    season: 2009,
    position: 8,
    team_name: 'Montanviu Bears',
    match: 30,
    win: 13,
    draw: 7,
    lose: 10,
    goal_plus: 34,
    goal_minus: 28,
    bilans: 6,
    points: 46
  },
  {
    season: 2009,
    position: 9,
    team_name: 'Tigra Fox',
    match: 30,
    win: 11,
    draw: 9,
    lose: 10,
    goal_plus: 22,
    goal_minus: 20,
    bilans: 2,
    points: 42
  },
  {
    season: 2009,
    position: 10,
    team_name: 'Ashton Shamrock',
    match: 30,
    win: 9,
    draw: 12,
    lose: 9,
    goal_plus: 22,
    goal_minus: 24,
    bilans: -2,
    points: 39
  },
  {
    season: 2009,
    position: 11,
    team_name: 'Arkov Diamond',
    match: 30,
    win: 8,
    draw: 11,
    lose: 11,
    goal_plus: 24,
    goal_minus: 27,
    bilans: -3,
    points: 35
  },
  {
    season: 2009,
    position: 12,
    team_name: 'Maverick Neptuns',
    match: 30,
    win: 7,
    draw: 5,
    lose: 18,
    goal_plus: 17,
    goal_minus: 41,
    bilans: -24,
    points: 26
  },
  {
    season: 2009,
    position: 13,
    team_name: 'Gotan Bats',
    match: 30,
    win: 5,
    draw: 6,
    lose: 19,
    goal_plus: 20,
    goal_minus: 45,
    bilans: -25,
    points: 21
  },
  {
    season: 2009,
    position: 14,
    team_name: 'Tozen Goats',
    match: 30,
    win: 5,
    draw: 4,
    lose: 21,
    goal_plus: 30,
    goal_minus: 66,
    bilans: -36,
    points: 19
  },
  {
    season: 2009,
    position: 15,
    team_name: 'Ronnpolis FC',
    match: 30,
    win: 6,
    draw: 1,
    lose: 23,
    goal_plus: 21,
    goal_minus: 59,
    bilans: -38,
    points: 19
  },
  {
    season: 2009,
    position: 16,
    team_name: 'Jurgarda Torros',
    match: 30,
    win: 0,
    draw: 1,
    lose: 29,
    goal_plus: 15,
    goal_minus: 67,
    bilans: -52,
    points: 1
  },
  {
    season: 2010,
    position: 1,
    team_name: 'Victory Tigers',
    match: 30,
    win: 24,
    draw: 5,
    lose: 1,
    goal_plus: 55,
    goal_minus: 13,
    bilans: 42,
    points: 77
  },
  {
    season: 2010,
    position: 2,
    team_name: 'Ashton Shamrock',
    match: 30,
    win: 20,
    draw: 7,
    lose: 3,
    goal_plus: 48,
    goal_minus: 16,
    bilans: 32,
    points: 67
  },
  {
    season: 2010,
    position: 3,
    team_name: 'Angelo Angels',
    match: 30,
    win: 20,
    draw: 7,
    lose: 3,
    goal_plus: 46,
    goal_minus: 14,
    bilans: 32,
    points: 67
  },
  {
    season: 2010,
    position: 4,
    team_name: 'Dark Knights',
    match: 30,
    win: 19,
    draw: 7,
    lose: 4,
    goal_plus: 34,
    goal_minus: 12,
    bilans: 22,
    points: 64
  },
  {
    season: 2010,
    position: 5,
    team_name: 'Ronnpolis FC',
    match: 30,
    win: 16,
    draw: 12,
    lose: 2,
    goal_plus: 34,
    goal_minus: 14,
    bilans: 20,
    points: 60
  },
  {
    season: 2010,
    position: 6,
    team_name: 'Maverick Neptuns',
    match: 30,
    win: 14,
    draw: 12,
    lose: 4,
    goal_plus: 29,
    goal_minus: 16,
    bilans: 13,
    points: 54
  },
  {
    season: 2010,
    position: 7,
    team_name: 'Tigra Fox',
    match: 30,
    win: 9,
    draw: 10,
    lose: 11,
    goal_plus: 21,
    goal_minus: 22,
    bilans: -1,
    points: 37
  },
  {
    season: 2010,
    position: 8,
    team_name: 'Gotan Bats',
    match: 30,
    win: 8,
    draw: 13,
    lose: 9,
    goal_plus: 19,
    goal_minus: 20,
    bilans: -1,
    points: 37
  },
  {
    season: 2010,
    position: 9,
    team_name: 'Montanviu Bears',
    match: 30,
    win: 7,
    draw: 11,
    lose: 12,
    goal_plus: 16,
    goal_minus: 29,
    bilans: -13,
    points: 32
  },
  {
    season: 2010,
    position: 10,
    team_name: 'Tarnhem Wolves',
    match: 30,
    win: 8,
    draw: 7,
    lose: 15,
    goal_plus: 17,
    goal_minus: 23,
    bilans: -6,
    points: 31
  },
  {
    season: 2010,
    position: 11,
    team_name: 'Arkov Diamond',
    match: 30,
    win: 6,
    draw: 10,
    lose: 14,
    goal_plus: 14,
    goal_minus: 31,
    bilans: -17,
    points: 28
  },
  {
    season: 2010,
    position: 12,
    team_name: 'Diampero Bolts',
    match: 30,
    win: 4,
    draw: 10,
    lose: 16,
    goal_plus: 16,
    goal_minus: 35,
    bilans: -19,
    points: 22
  },
  {
    season: 2010,
    position: 13,
    team_name: 'Jurgarda Torros',
    match: 30,
    win: 3,
    draw: 10,
    lose: 17,
    goal_plus: 15,
    goal_minus: 38,
    bilans: -23,
    points: 19
  },
  {
    season: 2010,
    position: 14,
    team_name: 'Tozen Goats',
    match: 30,
    win: 4,
    draw: 7,
    lose: 19,
    goal_plus: 15,
    goal_minus: 41,
    bilans: -26,
    points: 19
  },
  {
    season: 2010,
    position: 15,
    team_name: 'Rosengaard Roses',
    match: 30,
    win: 2,
    draw: 12,
    lose: 16,
    goal_plus: 11,
    goal_minus: 33,
    bilans: -22,
    points: 18
  },
  {
    season: 2010,
    position: 16,
    team_name: 'Kingsleen Monarch',
    match: 30,
    win: 3,
    draw: 6,
    lose: 21,
    goal_plus: 14,
    goal_minus: 47,
    bilans: -33,
    points: 15
  }
]

export default tables