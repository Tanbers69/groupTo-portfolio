document.addEventListener('DOMContentLoaded', function() {
    try {
        const teamMembers = document.querySelectorAll('.team-member');
        const teamSection = document.getElementById('team');
        const memberAboutSections = document.querySelectorAll('.member-about');
        const backButtons = document.querySelectorAll('.back-btn');

        const projectCards = document.querySelectorAll('.project-card');
        const projectsSection = document.getElementById('projects');
        const projectDetailSections = document.querySelectorAll('.project-details');
        const projectBackButtons = document.querySelectorAll('.project-back-btn');

        // Add tabindex and event listeners for team members
        teamMembers.forEach(member => {
            member.setAttribute('tabindex', '0'); // Make team members focusable

            member.addEventListener('click', function() {
                handleTeamMemberClick(this);
            });

            member.addEventListener('keydown', function(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    handleTeamMemberClick(this); 
                }
            });
        });

        // Add tabindex and event listeners for project cards
        projectCards.forEach(card => {
            card.setAttribute('tabindex', '0'); // Make project cards focusable

            card.addEventListener('click', function() {
                handleProjectClick(this);
            });

            card.addEventListener('keydown', function(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    handleProjectClick(this); 
                }
            });
        });

        // Event listeners for back buttons
        backButtons.forEach(button => {
            button.addEventListener('click', function() {
                handleBackButtonClick();
            });

            button.addEventListener('keydown', function(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    handleBackButtonClick();
                }
            });
        });

        // Event listeners for project back buttons
        projectBackButtons.forEach(button => {
            button.addEventListener('click', function() {
                handleProjectBackButtonClick();
            });

            button.addEventListener('keydown', function(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    handleProjectBackButtonClick();
                }
            });
        });

        // Handle team member click
        function handleTeamMemberClick(memberElement) {
            const memberId = memberElement.getAttribute('data-member');
            const targetMemberSection = document.getElementById(memberId);

            // Remove 'active' class from all team members
            teamMembers.forEach(m => m.classList.remove('active'));
            // Add 'active' class to the clicked member
            memberElement.classList.add('active');

            if (teamSection && targetMemberSection) {
                teamSection.style.display = 'none';
                projectsSection.style.display = 'none';
                memberAboutSections.forEach(section => {
                    section.style.display = 'none';
                });
                projectDetailSections.forEach(section => {
                    section.style.display = 'none';
                });
                targetMemberSection.style.display = 'block';

                window.scrollTo({
                    top: targetMemberSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }

        // Handle project card click
        function handleProjectClick(projectCard) {
            const projectId = projectCard.getAttribute('data-project');
            const targetProjectSection = document.getElementById(projectId);

            if (projectsSection && targetProjectSection) {
                teamSection.style.display = 'none';
                projectsSection.style.display = 'none';
                memberAboutSections.forEach(section => {
                    section.style.display = 'none';
                });
                projectDetailSections.forEach(section => {
                    section.style.display = 'none';
                });
                targetProjectSection.style.display = 'block';

                window.scrollTo({
                    top: targetProjectSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }

        // Handle back button click (back to team)
        function handleBackButtonClick() {
            if (teamSection) {
                memberAboutSections.forEach(section => {
                    section.style.display = 'none';
                });
                projectDetailSections.forEach(section => {
                    section.style.display = 'none';
                });
                teamSection.style.display = 'block';
                projectsSection.style.display = 'block';
                window.scrollTo({
                    top: teamSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }

        // Handle project back button click (back to projects)
        function handleProjectBackButtonClick() {
            if (projectsSection) {
                memberAboutSections.forEach(section => {
                    section.style.display = 'none';
                });
                projectDetailSections.forEach(section => {
                    section.style.display = 'none';
                });
                teamSection.style.display = 'block';
                projectsSection.style.display = 'block';
                window.scrollTo({
                    top: projectsSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }

    } catch (error) {
        console.error("An error occurred:", error);
        alert("Oops! Something went wrong. Please try again.");
    }
});
