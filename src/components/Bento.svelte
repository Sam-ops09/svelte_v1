<script>
    import { onMount } from 'svelte';
    import { innerWidth } from "../helpers/stores.js";

    // Sample images for the bento grid
    // You can replace these with your actual images
    const bentoItems = [
        {
            id: 1,
            imageUrl: "/assets/project1.jpg",
            title: "Project One",
            description: "UI/UX Design",
            size: "large" // large item (spans 2 cols and rows)
        },
        {
            id: 2,
            imageUrl: "/assets/project2.jpg",
            title: "Project Two",
            description: "Web Development",
            size: "medium" // medium item (spans 1 col, 2 rows)
        },
        {
            id: 3,
            imageUrl: "/assets/project3.jpg",
            title: "Project Three",
            description: "Mobile App",
            size: "small" // small item (1x1)
        },
        {
            id: 4,
            imageUrl: "/assets/project4.jpg",
            title: "Project Four",
            description: "Brand Identity",
            size: "small"
        },
        {
            id: 5,
            imageUrl: "/assets/project5.jpg",
            title: "Project Five",
            description: "3D Design",
            size: "medium"
        },
        {
            id: 6,
            imageUrl: "/assets/project6.jpg",
            title: "Project Six",
            description: "Motion Graphics",
            size: "small"
        }
    ];

    let isLoaded = false;

    onMount(() => {
        setTimeout(() => {
            isLoaded = true;
        }, 300);

        // Add any animation or interactive effects for the bento grid here
        if ($innerWidth > 650) {
            // You could add hover effects or animations
            const bentoItems = document.querySelectorAll('.bento-item');

            bentoItems.forEach(item => {
                item.addEventListener('mouseenter', () => {
                    // Scale effect on hover
                    item.style.transform = 'scale(0.98)';
                });

                item.addEventListener('mouseleave', () => {
                    item.style.transform = 'scale(1)';
                });
            });
        }
    });
</script>

<section id="bento-grid" class:loaded={isLoaded}>
    <div class="section-header">
        <h2>Featured Projects</h2>
        <p>Explore our latest work across various mediums and industries</p>
    </div>

    <div class="bento-container">
        {#each bentoItems as item}
            <div class="bento-item {item.size}">
                <div class="bento-image-container">
                    <img src={item.imageUrl} alt={item.title} />
                    <div class="bento-overlay">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>

<style lang="scss">
  #bento-grid {
    padding: 4rem 2rem;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.8s ease, transform 0.8s ease;

    &.loaded {
      opacity: 1;
      transform: translateY(0);
    }

    .section-header {
      margin-bottom: 3rem;
      text-align: center;

      h2 {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      p {
        font-family: "Inter", sans-serif;
        font-weight: 300;
        font-size: 1.2rem;
        max-width: 600px;
        margin: 0 auto;
        opacity: 0.8;
      }
    }

    .bento-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 250px;
      gap: 1.5rem;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;

      .bento-item {
        border-radius: 16px;
        overflow: hidden;
        transition: all 0.4s ease;
        cursor: pointer;
        box-shadow:
                0 2px 10px rgba(0, 0, 0, 0.08),
                0 4px 20px rgba(0, 0, 0, 0.06);

        &:hover {
          box-shadow:
                  0 4px 15px rgba(0, 0, 0, 0.1),
                  0 8px 30px rgba(0, 0, 0, 0.08);

          .bento-overlay {
            opacity: 1;
          }
        }

        &.large {
          grid-column: span 2;
          grid-row: span 2;
        }

        &.medium {
          grid-column: span 1;
          grid-row: span 2;
        }

        &.small {
          grid-column: span 1;
          grid-row: span 1;
        }

        .bento-image-container {
          position: relative;
          width: 100%;
          height: 100%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
          }

          .bento-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 1.5rem;
            box-sizing: border-box;
            opacity: 0;
            transition: opacity 0.4s ease;

            h3 {
              font-family: "Inter", sans-serif;
              font-weight: 500;
              font-size: 1.5rem;
              color: white;
              margin: 0 0 0.5rem 0;
            }

            p {
              font-family: "Inter", sans-serif;
              font-weight: 300;
              font-size: 1rem;
              color: rgba(255, 255, 255, 0.9);
              margin: 0;
            }
          }
        }
      }
    }

    @media screen and (max-width: 1200px) {
      .bento-container {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (max-width: 900px) {
      .bento-container {
        grid-template-columns: repeat(2, 1fr);

        .bento-item {
          &.large {
            grid-column: span 2;
            grid-row: span 1;
          }

          &.medium {
            grid-column: span 1;
            grid-row: span 1;
          }
        }
      }
    }

    @media screen and (max-width: 650px) {
      padding: 2rem 1rem;

      .section-header {
        margin-bottom: 2rem;

        h2 {
          font-size: 2rem;
        }

        p {
          font-size: 1rem;
        }
      }

      .bento-container {
        grid-template-columns: 1fr;
        grid-auto-rows: 200px;
        gap: 1rem;

        .bento-item {
          &.large, &.medium {
            grid-column: span 1;
            grid-row: span 1;
          }
        }
      }
    }
  }
</style>