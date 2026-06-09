"use client";

import { css } from "@/styled-system/css";
import { Button } from "../atoms/button";
import { Icon } from "../atoms/icon";
import Link from "next/link";

export const LandingTemplate = () => {
  return (
    <div className={css({ bg: "white", minH: "screen" })}>
      {/* Header */}
      <header
        className={css({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: "4",
          md: { px: "8" },
          py: "4",
          maxW: "1280px",
          mx: "auto",
        })}
      >
        <div className={css({ display: "flex", alignItems: "center", gap: "2" })}>
          <div
            className={css({
              w: "8",
              h: "8",
              rounded: "xl",
              bg: "brand.green",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Icon name="directions_car" size={20} fill className={css({ color: "white" })} />
          </div>
          <span
            className={css({
              fontSize: "headlineSm",
              fontWeight: "bold",
              color: "brand.dark",
            })}
          >
            Raijmobi
          </span>
        </div>
        <div className={css({ display: "flex", gap: "3" })}>
          <Link href="/auth/login">
            <Button variant="outline" className={css({ px: "4", py: "2" })}>
              Entrar
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button className={css({ px: "4", py: "2" })}>Cadastrar</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className={css({
          display: "flex",
          flexDirection: { base: "column", lg: "row" },
          alignItems: "center",
          gap: "8",
          px: "4",
          md: { px: "8" },
          py: "12",
          md: { py: "16" },
          maxW: "1280px",
          mx: "auto",
        })}
      >
        <div className={css({ flex: 1, textAlign: { base: "center", lg: "left" } })}>
          <h1
            className={css({
              fontSize: "displayLg",
              fontWeight: "extrabold",
              color: "brand.dark",
              lineHeight: "1.2",
              mb: "4",
            })}
          >
            Viagens seguras e <br />
            <span className={css({ color: "brand.green" })}>acessíveis</span>
          </h1>
          <p
            className={css({
              fontSize: "bodyLg",
              color: "onSurfaceVariant",
              mb: "6",
              maxW: "lg",
              mx: { base: "auto", lg: "0" },
            })}
          >
            Conectamos passageiros e motoristas para oferecer caronas inteligentes, econômicas e sustentáveis.
          </p>
          <div
            className={css({
              display: "flex",
              gap: "4",
              justifyContent: { base: "center", lg: "flex-start" },
            })}
          >
    
          </div>
        </div>
        <div className={css({ flex: 1 })}>
          <div
            className={css({
              position: "relative",
              rounded: "2xl",
              overflow: "hidden",
              shadow: "2xl",
            })}
          >
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format"
              alt="Carro e mapa"
              className={css({ w: "full", h: "auto", objectFit: "cover" })}
            />
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section
        id="como-funciona"
        className={css({
          bg: "surfaceContainerLow",
          px: "4",
          md: { px: "8" },
          py: "16",
        })}
      >
        <div className={css({ maxW: "1280px", mx: "auto", textAlign: "center" })}>
          <h2
            className={css({
              fontSize: "headlineLg",
              fontWeight: "bold",
              color: "brand.dark",
              mb: "4",
            })}
          >
            Como funciona
          </h2>
          <p
            className={css({
              fontSize: "bodyLg",
              color: "onSurfaceVariant",
              maxW: "2xl",
              mx: "auto",
              mb: "12",
            })}
          >
            Em poucos passos você já está viajando com a Raijmobi.
          </p>
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: { base: "1fr", md: "repeat(3, 1fr)" },
              gap: "8",
            })}
          >
            {[
              {
                icon: "person_add",
                title: "Crie sua conta",
                description:
                  "Cadastre-se como passageiro ou motorista em menos de 2 minutos.",
              },
              {
                icon: "search",
                title: "Encontre uma carona",
                description:
                  "Busque por destino, data e horário. Nosso algoritmo inteligente mostra as melhores opções.",
              },
              {
                icon: "check_circle",
                title: "Viaje e avalie",
                description:
                  "Confirme a participação, viaje com segurança e avalie a experiência.",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className={css({
                  bg: "white",
                  p: "6",
                  rounded: "2xl",
                  shadow: "md",
                  textAlign: "center",
                })}
              >
                <div
                  className={css({
                    w: "16",
                    h: "16",
                    rounded: "full",
                    bg: "brand.green/10",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: "4",
                  })}
                >
                  <Icon
                    name={step.icon}
                    size={32}
                    className={css({ color: "brand.green" })}
                  />
                </div>
                <h3
                  className={css({
                    fontSize: "headlineMd",
                    fontWeight: "semibold",
                    mb: "2",
                  })}
                >
                  {step.title}
                </h3>
                <p className={css({ fontSize: "bodyMd", color: "onSurfaceVariant" })}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section
        className={css({
          px: "4",
          md: { px: "8" },
          py: "16",
          maxW: "1280px",
          mx: "auto",
        })}
      >
        <h2
          className={css({
            fontSize: "headlineLg",
            fontWeight: "bold",
            textAlign: "center",
            color: "brand.dark",
            mb: "12",
          })}
        >
          Por que escolher a Raijmobi?
        </h2>
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: { base: "1fr", md: "repeat(2, 1fr)" },
            gap: "8",
          })}
        >
          {[
            {
              icon: "attach_money",
              title: "Preço justo",
              description:
                "Economize até 60% em comparação com táxis e apps de transporte.",
            },
            {
              icon: "verified_user",
              title: "Segurança",
              description:
                "Todos os motoristas são verificados, e as viagens são monitoradas.",
            },
            {
              icon: "groups",
              title: "Comunidade",
              description:
                "Faça novas amizades e compartilhe experiências durante a viagem.",
            },
            {
              icon: "eco",
              title: "Sustentável",
              description:
                "Menos carros na rua, menos emissão de carbono. Viaje de forma consciente.",
            },
          ].map((benefit, idx) => (
            <div
              key={idx}
              className={css({
                display: "flex",
                gap: "4",
                alignItems: "start",
                p: "4",
                rounded: "2xl",
                transition: "all 200ms",
                _hover: { shadow: "lg", transform: "translateY(-2px)" },
              })}
            >
              <div
                className={css({
                  p: "3",
                  rounded: "xl",
                  bg: "brand.green/10",
                  flexShrink: 0,
                })}
              >
                <Icon
                  name={benefit.icon}
                  size={28}
                  className={css({ color: "brand.green" })}
                />
              </div>
              <div>
                <h3
                  className={css({
                    fontSize: "headlineSm",
                    fontWeight: "semibold",
                    mb: "1",
                  })}
                >
                  {benefit.title}
                </h3>
                <p className={css({ fontSize: "bodyMd", color: "onSurfaceVariant" })}>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section
        className={css({
          bg: "surfaceContainerLow",
          px: "4",
          md: { px: "8" },
          py: "16",
        })}
      >
        <div className={css({ maxW: "1280px", mx: "auto", textAlign: "center" })}>
          <h2
            className={css({
              fontSize: "headlineLg",
              fontWeight: "bold",
              color: "brand.dark",
              mb: "4",
            })}
          >
            O que nossos usuários dizem
          </h2>
          <p
            className={css({
              fontSize: "bodyLg",
              color: "onSurfaceVariant",
              mb: "12",
            })}
          >
            +500 viagens realizadas com avaliação média 4.9 ⭐
          </p>
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: { base: "1fr", md: "repeat(3, 1fr)" },
              gap: "6",
            })}
          >
            {[
              {
                name: "Ana Clara",
                photo: "https://ui-avatars.com/api/?name=Ana+Clara&background=547812&color=fff&size=80",
                text: "Uso Raijmobi toda semana para ir ao trabalho. Economia enorme e motoristas muito educados.",
                rating: 5,
              },
              {
                name: "Rafael Fernandes",
                photo: "https://ui-avatars.com/api/?name=Rafael+Fernandes&background=547812&color=fff&size=80",
                text: "Como motorista, consegui uma renda extra e conheci pessoas incríveis. Plataforma intuitiva.",
                rating: 5,
              },
              {
                name: "Mariana Souza",
                photo: "https://ui-avatars.com/api/?name=Mariana+Souza&background=547812&color=fff&size=80",
                text: "Segurança e pontualidade. Recomendo a Raijmobi para todos que precisam se locomover.",
                rating: 4.8,
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className={css({
                  bg: "white",
                  p: "6",
                  rounded: "2xl",
                  shadow: "md",
                  textAlign: "left",
                })}
              >
                <div className={css({ display: "flex", alignItems: "center", gap: "3", mb: "4" })}>
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className={css({ w: "12", h: "12", rounded: "full", objectFit: "cover" })}
                  />
                  <div>
                    <p className={css({ fontWeight: "bold", color: "brand.dark" })}>
                      {testimonial.name}
                    </p>
                    <div className={css({ display: "flex", gap: "0.5" })}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon
                          key={i}
                          name="star"
                          fill={i < testimonial.rating}
                          size={16}
                          className={css({ color: i < testimonial.rating ? "yellow.500" : "gray.300" })}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className={css({ fontSize: "bodyMd", color: "onSurfaceVariant", fontStyle: "italic" })}>
                  “{testimonial.text}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className={css({
          px: "4",
          md: { px: "8" },
          py: "16",
          maxW: "1280px",
          mx: "auto",
          textAlign: "center",
        })}
      >
        <div
          className={css({
            bg: "brand.dark",
            p: "8",
            md: { p: "12" },
            rounded: "3xl",
            color: "white",
          })}
        >
          <h2
            className={css({
              fontSize: "headlineLg",
              fontWeight: "bold",
              mb: "4",
            })}
          >
            Pronto para viajar?
          </h2>
          <p className={css({ fontSize: "bodyLg", mb: "8", maxW: "lg", mx: "auto" })}>
            Junte-se a centenas de usuários que já estão economizando e viajando com conforto.
          </p>
          <Link href="/auth/register">
            <Button
              size="lg"
              className={css({
                bg: "brand.green",
                color: "white",
                px: "8",
                py: "3",
                fontSize: "bodyLg",
                _hover: { filter: "brightness(1.05)" },
              })}
            >
              Criar conta gratuita
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={css({
          bg: "gray.100",
          px: "4",
          md: { px: "8" },
          py: "8",
          textAlign: "center",
          fontSize: "sm",
          color: "onSurfaceVariant",
        })}
      >
        <div
          className={css({
            maxW: "1280px",
            mx: "auto",
            display: "flex",
            flexDirection: { base: "column", md: "row" },
            justifyContent: "space-between",
            gap: "4",
          })}
        >
          <p>© {new Date().getFullYear()} Raijmobi. Todos os direitos reservados.</p>
         
        </div>
      </footer>
    </div>
  );
};