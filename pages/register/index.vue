<script setup lang="ts">
definePageMeta({
  layout: false
})
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>

<template>
  <div class="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
    <div class="flex items-center justify-center py-12">
        <Card class="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle class="text-xl">
              Inscription
            </CardTitle>
            <CardDescription>
              Entrez vos informations pour créer un compte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="grid gap-4">
              <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-2">
                  <Label for="first-name">Prénom</Label>
                  <Input id="first-name" placeholder="Max" required />
                </div>
                <div class="grid gap-2">
                  <Label for="last-name">Nom</Label>
                  <Input id="last-name" placeholder="Robinson" required />
                </div>
              </div>
              <div class="grid gap-2">
                <Label for="email">Email</Label>
                <Input id="email" type="email" placeholder="m@exemple.com" required />
              </div>
              <div class="grid gap-2">
                <Label for="password">Mot de passe</Label>
                <Input id="password" type="password" />
              </div>
              <Button type="submit" class="w-full">
                Créer un compte
              </Button>
            </div>
            <div class="mt-4 text-center text-sm">
              Vous avez déjà un compte ?
              <NuxtLink to="login" class="underline">
                Connectez-vous
              </NuxtLink>
            </div>
          </CardContent>
        </Card>
    </div>
    <div class="hidden bg-muted h-screen lg:block">
      <img
        src="https://cdn.lazyshop.com/files/d2c4f2c8-ada5-455a-86be-728796b838ee/other/192115ca73ec8c98c62e3cbc95b96d32.jpg"
        alt="Image" width="1920" height="1080" class="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale">
    </div>
  </div>
</template>